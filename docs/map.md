# Nirav Thakur — Portfolio: Architecture & Site Map (as-built)

> The current, implemented state of the site after the monochrome refactor.
> Single-page Next.js app, flat Swiss-minimal monochrome, Helvetica Neue, with a
> real backend (Mongo / Redis / R2 / Resend) and full SEO.
>
> Base URL: **https://niravthakur.in** · Updated 2026-06-15

---

## 1. Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 16 (App Router, `src/` layout, `output: standalone`) + React 19 |
| Language | TypeScript (strict, `@/*` → `./src/*`) |
| Styling | Tailwind CSS v4 — tokens in [globals.css](../src/app/globals.css) |
| Font | Self-hosted **Helvetica Neue** via `next/font/local` ([fonts.ts](../src/app/fonts.ts)) |
| Validation | Zod (env, request body, form) |
| Database | MongoDB / Mongoose |
| Cache / rate-limit | Redis / ioredis |
| Storage | Cloudflare R2 (S3-compatible) |
| Email | Resend |
| Deploy | VPS (standalone server) |

Single public route: **`/`**. Sections are reached by in-page anchor scroll.

---

## 2. Directory map

```
src/
├── app/
│   ├── layout.tsx            # root: Helvetica font + rootMetadata()
│   ├── page.tsx              # composes sections + injects JSON-LD
│   ├── globals.css           # Tailwind + monochrome design tokens
│   ├── fonts.ts              # Helvetica Neue (next/font/local)
│   ├── error.tsx / global-error.tsx / not-found.tsx / loading.tsx
│   ├── robots.ts / sitemap.ts / opengraph-image.tsx   # SEO routes
│   ├── instrumentation.ts    # (src root) validates env at boot
│   └── api/contact/route.ts  # contact endpoint (POST)
├── components/
│   ├── Navbar · Hero · About · Images(Gallery) · Projects ·
│   │   Achivements(Experience) · Contact · Footer
│   ├── seo/JsonLd.tsx
│   └── ui/Sk.tsx
├── lib/
│   ├── env.ts                # Zod-validated env accessor
│   ├── seo.ts                # metadata + JSON-LD builders
│   ├── cn.ts · logger.ts
│   ├── validation/contact.ts # shared (client+server) form schema
│   └── data/contact.ts       # saveContactMessage()
├── server/                   # server-only modules
│   ├── db/client.ts · db/schemas/contactMessage.ts
│   ├── redis.ts · email.ts · storage.ts · request.ts
└── types/contact.ts
public/fonts/HelveticaNeue/*.woff2
```

---

## 3. Routes

| Route | Type | Purpose |
|---|---|---|
| `/` | static | the portfolio (all sections) |
| `/api/contact` | dynamic | contact form handler (POST) |
| `/robots.txt` | static | generated from `robots.ts` |
| `/sitemap.xml` | static | generated from `sitemap.ts` |
| `/opengraph-image` | static | 1200×630 social card |
| `/_not-found` | static | 404 |

---

## 4. Sections & navigation (all resolve — no dead ends)

| Order | Section | id | In nav |
|---|---|---|---|
| 1 | Hero | `#hero` | logo |
| 2 | About | `#about` | Yes |
| 3 | Gallery | `#gallery` | Yes |
| 4 | Projects | `#projects` | Yes |
| 5 | Experience & Achievements | `#experience` | Yes |
| 6 | Contact | `#contact` | Yes |

- **Navbar**: About · Projects · Gallery · Experience · Contact + Resume (opens `/Docs/N-Resume.pdf`). Active-link observer watches all six ids.
- **Footer**: Home/About/Projects/Gallery/Experience/Contact + the full social set + contact details.

---

## 5. External links (one canonical set, used everywhere)

| Label | URL |
|---|---|
| GitHub | https://github.com/Niravcanvas |
| LinkedIn | https://www.linkedin.com/in/nirav-thakur-9b5892225/ |
| Figma | https://www.figma.com/@Niravcanvas |
| Instagram | https://www.instagram.com/blurrredcanvas/ |
| Pinterest | https://in.pinterest.com/blurredoutframes/ |
| Behance | https://www.behance.net/Niravcanvas |
| Email | mailto:niravthakur@icloud.com |
| Phone | tel:+919653472213 |

**Project links**: IndieAn → indiean.com · Seven Vinyl → `/Docs/Seven Vinyl.pdf` ·
SYNC / Anders / Form & Form → Figma · HackOverflow → hackoverflow4.tech + GitHub ·
Cloud Kitchen POS & AI MCQ Generator → GitHub.

---

## 6. Contact flow ([api/contact/route.ts](../src/app/api/contact/route.ts))

`POST /api/contact` → Zod validate → honeypot check (`company`) → Redis rate-limit
(5/hour per salted-IP-hash, **fails open**) → persist to Mongo (`ContactMessage`,
180-day TTL) **and** email via Resend in parallel → succeeds if either lands.
The form ([Contact.tsx](../src/components/Contact.tsx)) validates client-side with the
same schema and shows success / error states.

All backend services **degrade gracefully**: with no env configured they no-op and
the site still builds and runs.

---

## 7. SEO & security

- **Metadata** centralized in [lib/seo.ts](../src/lib/seo.ts) (`rootMetadata()`): title
  template, description, canonical, OpenGraph, Twitter card, robots.
- **JSON-LD**: Person + WebSite, injected on the page via `<JsonLd>`.
- **Generated**: `robots.txt`, `sitemap.xml`, `opengraph-image` (1200×630).
- **Headers** ([next.config.ts](../next.config.ts)): HSTS, X-Content-Type-Options,
  X-Frame-Options, Referrer-Policy, Permissions-Policy, and a **CSP** (strict in
  prod — `script-src 'self'`; relaxed for dev HMR). `poweredByHeader: false`.
- One `<h1>` (Hero), section `<h2>`s, descriptive alt text, `lang="en"`, skip link.

---

## 8. Environment variables (see [.env.example](../.env.example))

`NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_CDN_URL` (R2 public host) ·
`MONGODB_URI` · `REDIS_URL` · `RESEND_API_KEY` / `CONTACT_FROM_EMAIL` /
`CONTACT_TO_EMAIL` · `R2_ACCOUNT_ID` / `R2_ACCESS_KEY_ID` / `R2_SECRET_ACCESS_KEY` /
`R2_BUCKET` (`R2_ENDPOINT` optional) · `IP_HASH_SALT` (≥16) · `LOG_LEVEL`.

---

## 9. Design system (flat monochrome / Swiss)

- **White** background, **black** text, **grayscale** for secondary/muted/borders.
- Helvetica Neue (100–900 + italics). One `<h1>`; bold black headings.
- Hairline borders (`border-black/10`, hover `/30`); minimal rounding; no blur,
  gradients, orbs, shadows, colored accents, or animations beyond subtle entrances.
- Primary action = `bg-black text-white`; secondary = bordered, inverts on hover.
- **No emojis anywhere** — emoji "icons"/images replaced with text or monograms (CK / AI).
- **No Three.js** — the WebGL Hero background and the unused canvas component were removed.

---

## 10. Open items (content, not code)

- Gallery uses placeholder titles ("Project Alpha", etc.) — replace with real names.
- The 10 gallery photos still load from `/public/images`; migrating them to R2
  (`NEXT_PUBLIC_CDN_URL`) is wired but not yet performed.
- `npm audit` reports transitive vulns via the AWS SDK / mongoose (non-blocking).
- Resume / Seven Vinyl PDFs live in `public/Docs`.
