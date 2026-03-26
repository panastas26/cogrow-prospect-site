#!/bin/bash
set -euo pipefail

if [ $# -lt 1 ]; then
  echo "Usage: ./deploy.sh <slug>"
  echo "Example: ./deploy.sh county-tree"
  exit 1
fi

SLUG="$1"
SITE_DIR="output/${SLUG}"

if [ ! -f "${SITE_DIR}/index.html" ]; then
  echo "Error: Site not found: ${SITE_DIR}/index.html"
  echo "Run ./generate.sh first."
  exit 1
fi

PROJECT_NAME="cogrow-prospect-${SLUG}"

if command -v wrangler &> /dev/null; then
  echo "Deploying ${SLUG} to Cloudflare Pages..."
  wrangler pages deploy "$SITE_DIR" --project-name "$PROJECT_NAME"
  echo ""
  echo "Site deployed! It will be available at:"
  echo "  https://${PROJECT_NAME}.pages.dev"
  echo ""
  echo "To set up custom domain ${SLUG}.cogrow.ai:"
  echo "  wrangler pages project edit $PROJECT_NAME --domain ${SLUG}.cogrow.ai"
else
  echo "Wrangler CLI not found. To deploy manually:"
  echo ""
  echo "  npm install -g wrangler"
  echo "  wrangler login"
  echo "  wrangler pages deploy ${SITE_DIR} --project-name ${PROJECT_NAME}"
  echo ""
  echo "Or drag-and-drop ${SITE_DIR}/ at https://dash.cloudflare.com"
  echo "Then set custom domain: ${SLUG}.cogrow.ai"
fi
