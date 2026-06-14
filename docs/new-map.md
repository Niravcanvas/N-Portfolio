# Nirav Thakur — Portfolio Blueprint (Target State)

> The **intended, flawless** wiring of the site: every link resolves, every
> section is reachable, nothing is a no-op, and SEO is complete.
> This is the target to build to — §8 lists exactly what to change from the
> current code to get here.
>
> Base URL: **https://niravthakur.in** · Single-page Next.js app · Updated 2026-06-14

---

## 1. Stack

| | |
|---|---|
| Framework | Next.js 16 (App Router) · React 19 · TypeScript |
| Styling | Tailwind CSS v4 — tokens in [globals.css](../src/app/globals.css) |
| Font | Azeret Mono (`next/font`, `display: swap`) |
| 3D / FX | `three` + `postprocessing` (Hero background) |
| Icons | `lucide-react` + inline SVG |
| Deploy | Vercel |

Single route: **`/`**. All "pages" are in-page sections reached by anchor scroll.

---

## 2. Page composition ([page.tsx](../src/app/page.tsx))

| Order | Section | Anchor id | In nav? |
|---|---|---|---|
| 1 | Navbar (fixed) | — | — |
| 2 | Hero | `#hero` | logo |
| 3 | About | `#about` | ✅ |
| 4 | Gallery | `#gallery` | ✅ *(add id + nav item)* |
| 5 | Projects | `#projects` | ✅ |
| 6 | Experience & Achievements | `#experience` | ✅ *(add nav item; rename id)* |
| 7 | Contact | `#contact` | ✅ |
| 8 | Footer | — | — |

> Target nav order: **About · Projects · Gallery · Experience · Contact** + Resume.
> The active-link `IntersectionObserver` must watch **all** of these ids.

---

## 3. Navigation map (every destination resolves)

**Navbar** — logo → `#hero`; About/Projects/Gallery/Experience/Contact → matching
anchors; **Resume** → opens `/Docs/N-Resume.pdf` (new tab).

**Footer**
- Navigation: Home `#hero` · About · Projects · Gallery · Experience · Contact
- Social (icons **and** text list, identical set): GitHub · LinkedIn · Figma ·
  Instagram · Pinterest · Behance
- Contact: email (`mailto:`) · phone (`tel:`) · Mumbai, India

---

## 4. External link map — single canonical set

Use these exact URLs **everywhere** a social/contact link appears (Hero, Contact,
Footer). One LinkedIn URL only.

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

**Project links** (all open in a new tab; buttons render only when the field exists):

| Project | Buttons → destination |
|---|---|
| IndieAn | Live Demo → https://www.indiean.com/ |
| Seven Vinyl Store | View PDF → `/Docs/Seven Vinyl.pdf` |
| SYNC Fitness App | Figma → https://www.figma.com/design/PoIDqRCf8VTB9tpuYuqSa7/SYNC--Fitness- |
| Anders Design Portfolio | Figma → https://www.figma.com/design/Hd0ugG6oLaIax2aqwsCZGr/Interior |
| Form & Form | Figma → https://www.figma.com/design/mH4P37A5Z39BxvwC9EAJys/F-F |
| HackOverflow 4.0 | Live Demo → https://hackoverflow4.tech · GitHub → https://github.com/Niravcanvas/Hackoverflow |
| Cloud Kitchen POS | GitHub → https://github.com/Niravcanvas/Cloud-kitchen-POS |
| AI MCQ Generator | GitHub → https://github.com/Niravcanvas/AI-mcq-Generator |

---

## 5. Internal assets

| Asset | Path | Used by |
|---|---|---|
| Resume | `/Docs/N-Resume.pdf` | Navbar |
| Seven Vinyl PDF | `/Docs/Seven Vinyl.pdf` | Projects → Seven Vinyl |
| Gallery photos | `/images/1–13.jpg` | Gallery (**3, 4, 5 must exist — see §8**) |
| Portraits | `/images/N1–N3.jpg` | About |
| Project logos | `Indiean.svg`, `Sevenvinyl.svg`, `Sync.png`, `Anders.svg`, `F&F.svg`, `Hackoverflow.png` | Projects |

---

## 6. Interactions (all functional in target — no decorative no-ops)

- **Hero** — CTAs scroll to Projects / Contact; social icons open in new tabs.
- **About** — Finder/Terminal toggle; Finder tabs (About, Education, Skills,
  Languages, Libraries, Software); Terminal accepts commands + easter eggs
  (`guess` answer = 73; 5 secrets). Tech-logo CDNs have a 2-letter fallback.
- **Gallery** — category filters; click a tile → full-screen lightbox
  (prev/next, Esc/←/→). **Remove or wire** the shuffle/repeat/heart/volume and
  the fake progress bar — no buttons that do nothing.
- **Projects** — folder filters; detail pane; action buttons open in new tabs.
  Remove the dead "Settings" gear or give it a purpose.
- **Experience** — Timeline/Experience/Achievements tabs (content only).
- **Contact** — form **submits to a real handler** (see §8); Info + Social tabs.
  Remove the decorative toolbar Send/attach/trash.

---

## 7. Content notes

- One `<h1>` total (Hero "CREATE"); each section uses `<h2>`. Keep this hierarchy.
- Gallery titles "Project Alpha/Beta/Gamma/Delta" are placeholders — replace with
  real names (see [new-copywrite.txt](new-copywrite.txt)).
- Project id `2` doesn't exist (ids 1,3,4…); harmless, but renumber if it bothers.

---

## 8. Dead ends → fixes (do these to reach "no dead ends")

| # | Current problem | Fix |
|---|---|---|
| 1 | `Images.tsx` references `/images/3.jpg`, `4.jpg`, `5.jpg` — files don't exist | Add the 3 images **or** delete those 3 entries. (Gallery also only shows the first 5 tiles via `.slice(0,5)` — raise/remove the cap so the rest are reachable.) |
| 2 | Contact form is simulated — submits nowhere | Wire to a real handler: a Next.js Route Handler (`app/api/contact/route.ts`) using Resend/Nodemailer, **or** a service (Formspree/Web3Forms). Add success + error states. |
| 3 | LinkedIn URL differs (Contact vs Hero/Footer) | Use the single canonical URL from §4 everywhere. |
| 4 | Footer social set inconsistent (icon row vs text list) | Use the full 6-link set in both. |
| 5 | Gallery & Experience not navigable | Give Gallery `id="gallery"`; rename Achievements id to `experience`; add both to Navbar + footer; add both to the active-section observer. |
| 6 | Decorative buttons that do nothing | Gallery player transport, Contact toolbar, Projects gear → wire up or remove. |
| 7 | Unused / orphan files | Delete `Interactive.tsx` (imported nowhere), unreferenced `MSCDA.svg` / `Favicon.svg`, and root `Card-temp.png` — or use them. |
| 8 | Filename typo `Achivements.tsx` | Rename to `Achievements.tsx` and update the import in `page.tsx`. |
| 9 | No SEO infra | Implement everything in §9. |

---

## 9. SEO — full spec

Single page today, so this covers `/`. The Metadata block + files below are the
target. (Template repeats per route if pages are added later.)

### 9.1 Root metadata — [layout.tsx](../src/app/layout.tsx)
```ts
export const metadata: Metadata = {
  metadataBase: new URL("https://niravthakur.in"),
  title: {
    default: "Nirav Thakur — Frontend Developer & UI/UX Designer",
    template: "%s · Nirav Thakur",
  },
  description:
    "Frontend developer and UI/UX designer in Mumbai, India, building fast, " +
    "modern web experiences with Next.js, React, and TypeScript.",
  keywords: ["Nirav Thakur","Frontend Developer","UI/UX Designer","Next.js",
             "React","TypeScript","Portfolio","Mumbai"],
  authors: [{ name: "Nirav Thakur", url: "https://niravthakur.in" }],
  creator: "Nirav Thakur",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true,
            googleBot: { index: true, follow: true, "max-image-preview": "large" } },
  openGraph: {
    type: "website",
    url: "https://niravthakur.in",
    siteName: "Nirav Thakur",
    title: "Nirav Thakur — Frontend Developer & UI/UX Designer",
    description: "Scalable, delightful web experiences. Engineering + design + UI/UX.",
    locale: "en_IN",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Nirav Thakur — Portfolio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nirav Thakur — Frontend Developer & UI/UX Designer",
    description: "Scalable, delightful web experiences. Engineering + design + UI/UX.",
    images: ["/og.png"],
  },
  icons: { icon: "/icon.svg", shortcut: "/favicon.ico", apple: "/apple-icon.png" },
  manifest: "/manifest.webmanifest",
};
```

### 9.2 Files to add (Next.js metadata conventions)
- `app/robots.ts` → allow all, point to sitemap.
- `app/sitemap.ts` → list `https://niravthakur.in/` (+ any future routes).
- `app/manifest.ts` → name, short_name, theme/background `#000000`, icons.
- `app/opengraph-image.png` (1200×630) — referenced as `/og.png` above (or use the
  file-convention `opengraph-image` so Next wires it automatically).
- Favicons: `app/icon.svg`, `app/apple-icon.png`, keep `favicon.ico`.

### 9.3 Structured data (JSON-LD `<script type="application/ld+json">`)
- **Person** — `name`, `jobTitle: "Frontend Developer & UI/UX Designer"`,
  `url`, `email`, `address` (Mumbai, IN), `sameAs: [all 6 social URLs]`.
- **WebSite** — `name`, `url`.
- Optional **ProfilePage** / **BreadcrumbList** wrapping the above.

### 9.4 On-page / technical SEO
- One `<h1>`; sequential `<h2>`s per section (already close — keep it).
- Descriptive `alt` on every image (replace generic gallery alts with real ones).
- `lang="en"` on `<html>` (present); set `og:locale` `en_IN`.
- Self-host (or `preconnect`) the icon CDNs (jsdelivr/simpleicons/wikimedia/
  coollabs) to cut render-blocking external requests and protect LCP.
- Keep `next/image` everywhere; ensure `priority` on the LCP image only.
- Add a real `<title>`-driven canonical; verify no duplicate-content from anchors.
- Lighthouse target: SEO 100, a11y ≥95, perf ≥90 on mobile.

---

## 10. Asset inventory & required new assets

**Present:** `Docs/N-Resume.pdf`, `Docs/Seven Vinyl.pdf`; gallery
`1,2,6–13.jpg`; `N1–N3.jpg`; project logos; Next defaults.

**Must add for a flawless build:**
- `images/3.jpg`, `images/4.jpg`, `images/5.jpg` (or drop those gallery entries)
- `og.png` (1200×630 social card)
- `icon.svg`, `apple-icon.png` (favicons)
- `manifest.webmanifest`, `robots`, `sitemap` (via the `app/` files above)

**Remove (orphans):** `Interactive.tsx`, `MSCDA.svg`, `Favicon.svg`, `Card-temp.png`.
