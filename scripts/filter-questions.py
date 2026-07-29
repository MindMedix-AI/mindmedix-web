#!/usr/bin/env python3
"""
Search Console Question Filter

Filters Google Search Console exported CSV by question-type queries.
Supports English and Italian.
"""

import csv
import re
import sys
from pathlib import Path

QUESTION_REGEX = re.compile(
    r'(?i)\b('
    # English question starters
    r'who|what|where|when|why|how|which|whose|whom|'
    r'can|could|will|would|shall|should|may|might|must|'
    r'do|does|did|is|are|was|were|has|have|had|'
    r'does|did|am|aren\'t|isn\'t|wasn\'t|weren\'t|haven\'t|hasn\'t|hadn\'t|'
    r'don\'t|doesn\'t|didn\'t|won\'t|wouldn\'t|can\'t|couldn\'t|shouldn\'t|mustn\'t|'
    # Italian question starters
    r'chi|cosa|che|come|dove|quando|perché|perche|perchè|'
    r'quale|quali|quanto|quanti|quante|quanta|'
    r'può|puoi|posso|possiamo|potete|possono|'
    r'è[’\']|sono|ha|hanno|hai|abbiamo|avete|'
    r'c\'è|ci\s+sono|esiste|esistono|serve|servono|'
    r'vuol\s+dire|significa'
    r')\b'
)

def is_question(query: str) -> bool:
    query = query.strip()
    if not query:
        return False
    if query.endswith('?'):
        return True
    if QUESTION_REGEX.match(query):
        return True
    return False

def main():
    if len(sys.argv) < 2:
        print("Usage: python filter-questions.py <search-console.csv> [output.csv]")
        print("")
        print("Filters rows where the query is a question (EN/IT).")
        print("If no output file given, prints to stdout as CSV.")
        sys.exit(1)

    input_path = Path(sys.argv[1])
    output_path = Path(sys.argv[2]) if len(sys.argv) > 2 else None

    if not input_path.exists():
        print(f"Error: {input_path} not found")
        sys.exit(1)

    with open(input_path, newline='', encoding='utf-8-sig') as f:
        reader = csv.DictReader(f)
        if reader.fieldnames is None:
            print("Error: empty CSV")
            sys.exit(1)

        query_col = None
        for col in reader.fieldnames:
            low = col.lower().strip()
            if low in ('query', 'queries', 'top queries', 'search query', 'search queries', 'keyword', 'keywords'):
                query_col = col
                break

        if query_col is None:
            query_col = reader.fieldnames[0]

        matched = []
        for row in reader:
            query = row.get(query_col, '')
            if is_question(query):
                matched.append(row)

    if output_path:
        with open(output_path, 'w', newline='', encoding='utf-8') as f:
            writer = csv.DictWriter(f, fieldnames=reader.fieldnames)
            writer.writeheader()
            writer.writerows(matched)
        print(f"Written {len(matched)} question queries to {output_path}")
    else:
        writer = csv.DictWriter(sys.stdout, fieldnames=reader.fieldnames)
        writer.writeheader()
        writer.writerows(matched)

    print(f"\nSummary: {len(matched)} / {len(matched) + len(reader.fieldnames)} rows are questions")

if __name__ == '__main__':
    main()
