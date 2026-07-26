This repository contains organization-wide GitHub configuration and community files for MindMedix AI.

Do not modify other repositories.

---

## Features

### Institutional Design
- Enterprise-grade, minimal dark-blue aesthetic
- IBM Plex Sans typography for professional readability
- Fully responsive — desktop, tablet, and mobile
- Accessibility-first: WCAG 2.1 AA baseline, skip-to-content, semantic HTML

### Bilingual Experience (IT / EN)
- Italian as default (primary market)
- English via header language switcher
- All copy managed centrally in `src/lib/translations.ts`

### Contact & Lead Management
- Institutional contact form with interest classification
- **Email delivery** via [Resend](https://resend.com)
- **Persistent lead storage** via SQLite (`data/contacts.db`)
- Every submission is saved to the database before email is sent — no lead is ever lost

### Compliance & Trust
- GDPR-aware architecture
- Dedicated Privacy Policy (`/privacy`) and Terms & Conditions (`/terms`)
- Cookie consent banner
- Human-in-the-loop AI positioning
- "Not a medical device" declaration

### SEO & Performance
- JSON-LD Organization schema
- Semantic HTML structure
- Optimised fonts via `next/font`
- Static generation where possible

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | [Next.js 14](https://nextjs.org/) (App Router) |
| Language | [TypeScript 5](https://www.typescriptlang.org/) |
| Styling | [Tailwind CSS 3](https://tailwindcss.com/) |
| Email | [Resend](https://resend.com/) |
| Database | [SQLite](https://www.sqlite.org/) via [better-sqlite3](https://github.com/WiseLibs/better-sqlite3) |
| Font | IBM Plex Sans via `next/font` |

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx              # Global layout, fonts, metadata, JSON-LD
│   ├── page.tsx                # Main landing page composition
│   ├── privacy/page.tsx        # Privacy Policy (IT/EN)
│   ├── terms/page.tsx          # Terms & Conditions (IT/EN)
│   └── api/
│       └── contact/route.ts    # Contact form API (DB + Resend)
├── components/
│   ├── Header.tsx              # Navigation + language switcher
│   ├── Hero.tsx                # Hero section with authority paragraph
│   ├── WhoWeServe.tsx          # Target audience micro-section
│   ├── Problem.tsx             # Problem statement
│   ├── Solution.tsx            # Solution + dashboard visualization
│   ├── HowItWorks.tsx          # Platform pipeline
│   ├── ValueProposition.tsx    # Institutional outcomes
│   ├── Trust.tsx               # Compliance & trust pillars
│   ├── About.tsx               # About + founder credibility block
│   ├── Contact.tsx             # Contact form
│   ├── Footer.tsx              # Footer + authority line
│   ├── CookieBanner.tsx        # GDPR cookie consent
│   ├── JsonLd.tsx              # Organization schema
│   └── SkipLink.tsx            # Accessibility helper
├── lib/
│   ├── translations.ts         # All IT/EN UI copy (single source of truth)
│   ├── legal.ts                # Legal copy (Privacy, Terms) — both languages
│   └── db.ts                   # SQLite database module
└── context/
    └── LanguageContext.tsx     # Language state provider
data/
└── contacts.db                 # SQLite database (gitignored — never commit)
```

---

## Getting Started

### Prerequisites
- Node.js 18+
- npm

### Installation

```bash
# Clone the repository
git clone git@github.com:MindMedix-AI/MindMedix-AI-Landing.git
cd MindMedix-AI-Landing

# Install dependencies
npm install
```

### Environment Setup

Create a `.env.local` file in the project root:

```bash
# Required: Resend API key for email notifications
# Get yours at https://resend.com/api-keys
RESEND_API_KEY=re_xxxxxxxxxxxx

# Email destination
EMAIL_TO=contact@mindmedixai.health

# Optional: custom sender (requires verified domain at resend.com/domains)
# EMAIL_FROM="MindMedix AI <noreply@mindmedixai.health>"
```

> **Note:** If `RESEND_API_KEY` is not set, the contact form still saves submissions to the database — only email notifications are skipped.

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The default language is **Italian**; switch to English via the header toggle.

### Production Build

```bash
npm run build
npm start
```

---

## Contact Form & Database

The contact form posts to `/api/contact`, which:

1. **Saves the submission to SQLite** (`data/contacts.db`) — always, regardless of email status
2. **Sends an email notification** via Resend to `EMAIL_TO`

### Viewing Stored Contacts

```bash
# View all submissions
sqlite3 data/contacts.db "SELECT id, name, email, organization, interest, created_at FROM contacts;"

# Count total submissions
sqlite3 data/contacts.db "SELECT COUNT(*) FROM contacts;"
```

> ⚠️ The `data/` directory is gitignored. **Never commit the database file** — it contains personal data subject to GDPR.

---

## Deployment

### Recommended: Railway (supports SQLite persistent disk)

1. Push this repository to GitHub
2. Connect to [Railway](https://railway.app)
3. Add environment variables (`RESEND_API_KEY`, `EMAIL_TO`)
4. Deploy — Railway handles the rest

### Alternative: Vercel (requires database migration)

Vercel serverless functions do not support persistent disk. To deploy on Vercel, migrate the SQLite database to a cloud provider (e.g., [Supabase](https://supabase.com) — free tier available).

---

## Compliance Notes

- This landing page is **not a medical device** and does not provide clinical decision support
- Legal pages (`/privacy`, `/terms`) are templates — review with qualified legal counsel before production use
- GDPR: contact form data is stored locally; no third-party data sharing

---

## Roadmap

- [ ] Add real hospital / partner / accelerator logos once available
- [ ] Add team and leadership profiles with bios
- [ ] Add case studies and pilot outcomes (post-pilot)
- [ ] Integrate privacy-respecting analytics (Plausible or Matomo)
- [ ] Migrate database to cloud (Supabase) for multi-instance deployment

---

## Contact

**MindMedix AI**
- Website: [mindmedixai.health](https://mindmedixai.health)
- Email: [contact@mindmedixai.health](mailto:contact@mindmedixai.health)
- Location: Ancona, Italy

---

<div align="center">

*MindMedix AI is a European healthcare AI initiative developing predictive operational intelligence infrastructure for hospitals and healthcare systems.*

</div>
