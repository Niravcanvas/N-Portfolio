<div align="center">

### **Personal Portfolio — 2026**

*Frontend Developer & UI/UX Designer*

[![Next.js](https://img.shields.io/badge/Next.js-16.1.5-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-black?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-black?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

[**View Live**](https://niravthakur.in) • [**GitHub Profile**](https://github.com/Niravcanvas)

---

</div>

## Overview

A single-page portfolio for Nirav Thakur — Frontend Developer & UI/UX Designer in
Mumbai, India. Built with Next.js (App Router) and a flat, Swiss-minimal
**monochrome** aesthetic: white background, black text, Helvetica Neue, hairline
borders, and no decorative clutter. Backed by a real contact pipeline
(MongoDB + Redis + Resend) and Cloudflare R2 for image storage.

```typescript
const portfolio = {
  name: "Nirav Thakur",
  role: ["Frontend Developer", "UI/UX Designer", "Photographer"],
  location: "Mumbai, India",
  status: "Available for work",
  focus: ["Next.js", "TypeScript", "Tailwind CSS", "Figma"],
};
```

---

## Features

**Design**
- Flat monochrome / Swiss-minimal UI (white background, black text)
- Self-hosted Helvetica Neue, generous whitespace, hairline borders
- Smooth in-page scroll navigation with active-section tracking
- Fully responsive, accessible (skip link, ARIA, single `<h1>`)

**Technical**
- Next.js 16 App Router, React 19, TypeScript (strict)
- Tailwind CSS v4 (token-based, no JS config)
- Real contact form: Zod-validated, honeypot, Redis rate-limited, persisted to
  Mongo and emailed via Resend
- SEO: centralized metadata, Person + WebSite JSON-LD, `robots.txt`, `sitemap.xml`,
  generated OpenGraph image
- Security headers + Content-Security-Policy; `output: standalone` for VPS deploy

---

## Tech Stack

| Category | Technologies |
|----------|-------------|
| **Framework** | `Next.js 16` `React 19` |
| **Language** | `TypeScript 5.x` |
| **Styling** | `Tailwind CSS 4` `PostCSS` |
| **Font** | `Helvetica Neue` (self-hosted, `next/font/local`) |
| **Validation** | `Zod` |
| **Database** | `MongoDB` / `Mongoose` |
| **Cache / rate-limit** | `Redis` / `ioredis` |
| **Storage** | `Cloudflare R2` (S3-compatible) |
| **Email** | `Resend` |
| **Deployment** | `VPS` (standalone) |

---

## Getting Started

### Prerequisites

```bash
node >= 20.0.0
npm >= 9.0.0
```

### Installation

```bash
git clone https://github.com/Niravcanvas/Portfolio.git
cd Portfolio
npm install

# configure environment
cp .env.example .env.local   # then fill in the values

npm run dev                  # http://localhost:3000
```

All backend variables are optional in dev — if unset, those services no-op and the
site still runs.

### Production

```bash
npm run build
npm start
```

---

## Environment Variables

See [`.env.example`](.env.example) for the full list. Summary:

| Variable | Purpose |
|----------|---------|
| `NEXT_PUBLIC_SITE_URL` | Canonical origin for SEO / OG / sitemap |
| `NEXT_PUBLIC_CDN_URL` | Public Cloudflare R2 host for images |
| `MONGODB_URI` | MongoDB connection string |
| `REDIS_URL` | Redis (rate limiting) |
| `RESEND_API_KEY` / `CONTACT_FROM_EMAIL` / `CONTACT_TO_EMAIL` | Contact email |
| `R2_ACCOUNT_ID` / `R2_ACCESS_KEY_ID` / `R2_SECRET_ACCESS_KEY` / `R2_BUCKET` | R2 storage |
| `IP_HASH_SALT` | Salt for hashing client IPs (min 16 chars) |
| `LOG_LEVEL` | `debug` \| `info` \| `warn` \| `error` |

> Only `NEXT_PUBLIC_*` variables reach the browser. Never commit real secrets.

---

## Project Structure

```
Portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx              # root layout (Helvetica + metadata)
│   │   ├── page.tsx                # composes sections + JSON-LD
│   │   ├── globals.css             # Tailwind + monochrome tokens
│   │   ├── fonts.ts                # Helvetica Neue (next/font/local)
│   │   ├── error / not-found / loading / global-error
│   │   ├── robots.ts / sitemap.ts / opengraph-image.tsx
│   │   ├── instrumentation.ts      # validates env at boot
│   │   └── api/contact/route.ts    # contact endpoint
│   ├── components/                 # Navbar, Hero, About, Gallery, Projects,
│   │   │                           # Experience, Contact, Footer + seo/ ui/
│   ├── lib/                        # env, seo, cn, logger, validation, data
│   ├── server/                     # db, redis, email (Resend), storage (R2)
│   └── types/
├── public/
│   ├── fonts/HelveticaNeue/*.woff2
│   ├── images/                     # gallery + portraits
│   └── Docs/                       # resume + project PDFs
├── docs/                           # map.md (architecture) + copywrite.txt
└── next.config.ts                  # standalone, security headers, CSP, image hosts
```

---

## Design Philosophy

| Minimalism | Monochrome | Typography |
|------------|------------|------------|
| Clean layouts | Black & white only | Helvetica Neue |
| Ample whitespace | Grayscale accents | Bold, structural headings |
| Focus on content | High contrast | Generous tracking |
| No clutter | Timeless, flat | Swiss / International style |

### Color tokens

```css
--color-bg: #ffffff;
--color-text: #000000;
--color-text-muted: #525252;   /* gray-600 */
--color-text-subtle: #737373;  /* gray-500 */
--color-border: rgba(0, 0, 0, 0.12);
```

---

## Sections

`Hero` · `About` (Finder + interactive terminal) · `Gallery` · `Projects` ·
`Experience & Achievements` · `Contact` · `Footer`

Featured projects include **IndieAn**, **HackOverflow 4.0**, **Cloud Kitchen POS**,
**AI MCQ Generator**, **SYNC Fitness App**, and design work for **Anders** and
**Form & Form**.

---

## Contact

```
Email     niravthakur@icloud.com
Phone     +91 9653472213
Location  Mumbai, India
Status    Available for freelance work
```

[![GitHub](https://img.shields.io/badge/GitHub-Niravcanvas-black?style=for-the-badge&logo=github)](https://github.com/Niravcanvas)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-black?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/nirav-thakur-9b5892225/)
[![Behance](https://img.shields.io/badge/Behance-Niravcanvas-black?style=for-the-badge&logo=behance)](https://www.behance.net/Niravcanvas)

---

## License

MIT License — Copyright (c) 2026 Nirav Thakur

---

<div align="center">

**Built by Nirav Thakur**

*Last Updated: June 2026*

</div>
