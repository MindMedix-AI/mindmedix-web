#!/bin/bash
# Quick question filter for Search Console CSV exports
# Usage: ./scripts/filter-questions.sh search-console-export.csv

set -e

CSV="$1"
if [ -z "$CSV" ]; then
  echo "Usage: $0 <search-console-csv>"
  exit 1
fi

if [ ! -f "$CSV" ]; then
  echo "Error: $CSV not found"
  exit 1
fi

PATTERN='(?i)^(who|what|where|when|why|how|which|whose|whom|can|could|will|would|shall|should|may|might|must|do|does|did|is|are|was|were|has|have|had|does|did|am|chi|cosa|che|come|dove|quando|perché|perche|perchè|quale|quali|quanto|quanti|quante|quanta|può|puoi|posso|possiamo|potete|possono|sono|ha|hanno|hai|abbiamo|avete|esiste|esistono|serve|servono)\b'

echo "=== Headers ==="
head -1 "$CSV"

echo ""
echo "=== Question Queries Found ==="
rg -i "$PATTERN" "$CSV" 2>/dev/null || ggrep -iP "$PATTERN" "$CSV" 2>/dev/null || echo "Install ripgrep (rg) for best results"

echo ""
echo "=== Count ==="
if command -v rg &>/dev/null; then
  rg -ci "$PATTERN" "$CSV" || true
else
  echo "Install ripgrep for count"
fi
