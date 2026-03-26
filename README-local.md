# CoGrow Prospect Site Template Engine

Generate branded, mobile-responsive prospect sites from JSON configs.

## Templates

- **field-service** — Green/lime palette. Tree care, HVAC, plumbing, electricians, etc.
- **professional-service** — Navy/blue palette. Law firms, accountants, consultants, etc.

## Quick Start

```bash
# 1. Copy an example config and customize it
cp configs/county-tree.json configs/my-client.json
# Edit configs/my-client.json with client details

# 2. Generate the site
chmod +x generate.sh
./generate.sh configs/my-client.json

# 3. Preview locally
open output/my-client/index.html

# 4. Deploy to Cloudflare Pages
chmod +x deploy.sh
./deploy.sh my-client
```

## Config Structure

| Field | Description |
|-------|-------------|
| `template` | `field-service` or `professional-service` |
| `company_name` | Business name |
| `tagline` | Hero headline |
| `hero_subtitle` | Hero paragraph text |
| `phone`, `email`, `address` | Contact info |
| `city`, `service_area` | Location badge in hero |
| `hero_image_url` | Hero section image URL |
| `cal_booking_slug` | Cal.com booking link slug |
| `services_featured` | Array — large hero cards (with `image_url`) |
| `services_secondary` | Array — standard cards |
| `services_accent` | Array — accent-colored cards |
| `services_wide` | Array — wide bottom cards |
| `reviews` | Array of `{name, location, stars, text}` |
| `stats` | Array of `{value, label, is_first, is_second}` |
| `about_features` | Array of `{icon, title, description}` |

Icons use [Material Symbols](https://fonts.google.com/icons) names.

## Dependencies

One of:
- `mustache` (Ruby gem: `gem install mustache`)
- `mustache` (npm: `npm install -g mustache`)
- `chevron` (Python: `pip3 install chevron`)
- Python 3 (built-in fallback renderer)

## File Structure

```
templates/
  field-service/index.html      # Green/lime field service template
  professional-service/index.html # Navy/blue professional template
configs/
  county-tree.json              # Example: tree service
  example-law-firm.json         # Example: law firm
output/
  [slug]/index.html             # Generated sites
generate.sh                     # Config -> HTML renderer
deploy.sh                       # Deploy to Cloudflare Pages
```
