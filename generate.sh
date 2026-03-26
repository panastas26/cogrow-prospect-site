#!/bin/bash
set -euo pipefail

if [ $# -lt 1 ]; then
  echo "Usage: ./generate.sh <config-file>"
  echo "Example: ./generate.sh configs/county-tree.json"
  exit 1
fi

CONFIG="$1"
SLUG=$(basename "$CONFIG" .json)
OUTPUT="output/${SLUG}"

if [ ! -f "$CONFIG" ]; then
  echo "Error: Config file not found: $CONFIG"
  exit 1
fi

# Detect template type from config
TEMPLATE_TYPE=$(python3 -c "import json; print(json.load(open('$CONFIG')).get('template', 'field-service'))")

TEMPLATE="templates/${TEMPLATE_TYPE}/index.html"
if [ ! -f "$TEMPLATE" ]; then
  echo "Error: Template not found: $TEMPLATE"
  exit 1
fi

mkdir -p "$OUTPUT"

# Check for mustache CLI (ruby gem, npm, or python)
if command -v mustache &> /dev/null; then
  mustache "$CONFIG" "$TEMPLATE" > "${OUTPUT}/index.html"
elif command -v npx &> /dev/null && npx --yes mustache --version &> /dev/null; then
  npx --yes mustache "$CONFIG" "$TEMPLATE" > "${OUTPUT}/index.html"
elif command -v python3 &> /dev/null; then
  # Fallback: use python3 with chevron or pystache
  python3 -c "
import json, sys

try:
    import chevron
    with open('$CONFIG') as cf, open('$TEMPLATE') as tf:
        data = json.load(cf)
        template = tf.read()
        print(chevron.render(template, data))
except ImportError:
    # Manual simple mustache replacement as last resort
    import re
    with open('$CONFIG') as cf, open('$TEMPLATE') as tf:
        data = json.load(cf)
        template = tf.read()

    def render(tmpl, ctx):
        # Handle sections (arrays and booleans)
        def replace_section(match):
            key = match.group(1)
            inner = match.group(2)
            val = ctx.get(key)
            if val is None or val is False or val == []:
                return ''
            if isinstance(val, list):
                result = ''
                for item in val:
                    merged = {**ctx, **item}
                    result += render(inner, merged)
                return result
            if val:
                return render(inner, ctx)
            return ''

        # Handle inverted sections
        def replace_inverted(match):
            key = match.group(1)
            inner = match.group(2)
            val = ctx.get(key)
            if val is None or val is False or val == []:
                return render(inner, ctx)
            return ''

        # Process sections (greedy matching for nested)
        pattern = r'\{\{#([^}]+)\}\}([\s\S]*?)\{\{/\1\}\}'
        while re.search(pattern, tmpl):
            tmpl = re.sub(pattern, replace_section, tmpl)

        inv_pattern = r'\{\{\^([^}]+)\}\}([\s\S]*?)\{\{/\1\}\}'
        while re.search(inv_pattern, tmpl):
            tmpl = re.sub(inv_pattern, replace_inverted, tmpl)

        # Handle simple variables
        def replace_var(match):
            key = match.group(1).strip()
            val = ctx.get(key, '')
            return str(val) if val is not None else ''

        tmpl = re.sub(r'\{\{([^#/^}]+)\}\}', replace_var, tmpl)
        return tmpl

    print(render(template, data))
" > "${OUTPUT}/index.html"
else
  echo "Error: No mustache renderer found."
  echo "Install one of: gem install mustache | npm install -g mustache | pip3 install chevron"
  exit 1
fi

# Post-process: inject accent_color into the Tailwind config's tertiary-fixed token
ACCENT=$(python3 -c "import json; print(json.load(open('$CONFIG')).get('accent_color', ''))")
if [ -n "$ACCENT" ]; then
  python3 -c "
import re, sys

accent = '$ACCENT'
path = '${OUTPUT}/index.html'

with open(path) as f:
    html = f.read()

# Derive a slightly darker shade for on-tertiary-fixed-variant (darken by ~30%)
import colorsys
h = accent.lstrip('#')
r, g, b = int(h[0:2],16)/255, int(h[2:4],16)/255, int(h[4:6],16)/255
h2, s2, v2 = colorsys.rgb_to_hsv(r, g, b)
# dark variant: lower value/brightness
rd, gd, bd = colorsys.hsv_to_rgb(h2, min(s2*1.2, 1.0), max(v2*0.55, 0.1))
dark = '#{:02x}{:02x}{:02x}'.format(int(rd*255), int(gd*255), int(bd*255))

# light variant: much lighter version for text on dark bg
rl, gl, bl = colorsys.hsv_to_rgb(h2, max(s2*0.25, 0.05), min(v2*1.5, 0.97))
light = '#{:02x}{:02x}{:02x}'.format(int(rl*255), int(gl*255), int(bl*255))

# Detect if accent is dark (needs white text on it) or light (needs dark text)
luminance = 0.299*r + 0.587*g + 0.114*b
on_accent = '#ffffff' if luminance < 0.55 else '#0a0a0a'
on_accent_variant = dark if luminance >= 0.55 else light

# Replace the tertiary-fixed token and related tokens in the Tailwind config
html = re.sub(r'(\"tertiary-fixed\"\s*:\s*)\"[^\"]+\"', rf'\g<1>\"{accent}\"', html)
html = re.sub(r'(\"on-tertiary-fixed\"\s*:\s*)\"[^\"]+\"', rf'\g<1>\"{on_accent}\"', html)
html = re.sub(r'(\"on-tertiary-fixed-variant\"\s*:\s*)\"[^\"]+\"', rf'\g<1>\"{on_accent_variant}\"', html)
html = re.sub(r'(\"tertiary-fixed-dim\"\s*:\s*)\"[^\"]+\"', rf'\g<1>\"{light}\"', html)

with open(path, 'w') as f:
    f.write(html)

print('  accent_color injected:', accent)
"
fi

echo "Generated: ${OUTPUT}/index.html"
echo "Preview:   open ${OUTPUT}/index.html"
