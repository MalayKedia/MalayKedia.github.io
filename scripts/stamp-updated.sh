#!/usr/bin/env bash
# Stamp footer "Last updated" to now (called from the pre-commit hook).
set -euo pipefail
root="$(cd "$(dirname "$0")/.." && pwd)"
iso="$(date -Iseconds)"
file="$root/js/footer.js"
tmp="$(mktemp)"
sed -E "s|const SITE_LAST_UPDATED = \"[^\"]*\";|const SITE_LAST_UPDATED = \"${iso}\";|" \
  "$file" >"$tmp"
mv "$tmp" "$file"
echo "Stamped SITE_LAST_UPDATED=${iso}"
