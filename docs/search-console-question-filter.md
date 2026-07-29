# Search Console — Question Query Filter

Use these patterns to filter Google Search Console exports and find question-based queries.

## The Regex

```regex
(?i)\b(who|what|where|when|why|how|which|whose|whom|can|could|will|would|shall|should|may|might|must|do|does|did|is|are|was|were|has|have|had|aren't|isn't|wasn't|weren't|haven't|hasn't|hadn't|don't|doesn't|didn't|won't|wouldn't|can't|couldn't|shouldn't|mustn't|chi|cosa|che|come|dove|quando|perché|perche|perchè|quale|quali|quanto|quanti|quante|quanta|può|puoi|posso|possiamo|potete|possono|è'|sono|ha|hanno|hai|abbiamo|avete|c'è|ci sono|esiste|esistono|serve|servono|vuol dire|significa)\b
```

Google Sheets / Excel
------------------------------

Create a new column with this formula:

```excel
=IF(OR(REGEXMATCH(A2, "(?i)\b(who|what|where|when|why|how|which)\b"), RIGHT(A2,1)="?"), "Question", "Not Question")
```

Grep (terminal)
----------------

```bash
# Filter a CSV for question queries (column 1 = queries)
rg -i '^(who|what|where|when|why|how|which|can|could|will|would|do|does|did|is|are|was|were|has|have|hows|whats|wheres|whys)\b|\\?$' search-console-export.csv
```

Python Script
-------------

```bash
python scripts/filter-questions.py search-console-export.csv questions-only.csv
```

Why Filter by Questions?
------------------------

Finding question queries from Search Console helps you:

- Identify content gaps (what are people asking but you don't answer?)
- Add FAQ schema for question-rich pages
- Create targeted blog content around real user questions
- Optimize for voice search and AI assistant queries
- Improve click-through rate by answering questions in meta descriptions

For MindMedix AI, key question themes to look for:

- "what is hospital workforce intelligence"
- "come funziona AI ospedaliera"
- "how to predict staffing shortages"
- "quanto costa sistema AI ospedaliero"
- "what is predictive analytics in healthcare"
- "come prevenire burnout infermieri"
