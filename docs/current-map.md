# Nirav Thakur — Portfolio Site Map

> A complete map of the website: every section, every link (and where it goes),
> every interactive element (and what it does when clicked), plus a list of the
> gaps / things that are currently missing or inconsistent.
>
> Last mapped: 2026-06-14. Source of truth = the code in `src/`.

---

## 1. Tech & entry points

| Thing | Value |
|---|---|
| Framework | Next.js 16 (App Router) + React 19 + TypeScript |
| Styling | Tailwind CSS v4, design tokens in [globals.css](../src/app/globals.css) |
| Font | Azeret Mono (Google font), loaded in [layout.tsx](../src/app/layout.tsx) |
| 3D / FX | `three` + `postprocessing` (Hero background only) |
| Icons | `lucide-react` + inline SVGs |
| Entry HTML | [layout.tsx](../src/app/layout.tsx) — `<html>`, metadata, skip link |
| Single page | [page.tsx](../src/app/page.tsx) — renders all sections in order |

**It is a single-page site.** There are no extra routes/pages — everything is one
scrolling page, and navigation is in-page scroll to section anchors.

### Page composition order ([page.tsx](../src/app/page.tsx))
1. `Navbar` (fixed, always on top)
2. `<main id="main-content">`
   1. `Hero` — `#hero`
   2. `About` — `#about`
   3. `Images` (rendered as "Gallery") — **no section id**
   4. `Projects` — `#projects`
   5. `Achievements` — `#achievements`
   6. `Contact` — `#contact`
3. `Footer`

---

## 2. Global navigation map

### Navbar ([Navbar.tsx](../src/components/Navbar.tsx))
| Element | Action / destination |
|---|---|
| `Nirav.` logo | Smooth-scroll to `#hero` |
| `About` | Smooth-scroll to `#about` |
| `Projects` | Smooth-scroll to `#projects` |
| `Contact` | Smooth-scroll to `#contact` |
| `Resume` button | `window.open('/Docs/N-Resume.pdf', '_blank')` → opens resume PDF in new tab |
| Hamburger (mobile) | Toggles a full-screen overlay menu with the same links + Resume |

- Navbar turns from transparent → blurred dark once you scroll past 20px.
- Active link is highlighted via an `IntersectionObserver` watching
  `['hero','about','projects','contact']` only.
- ⚠️ **Gallery and Achievements are NOT in the nav** and are not observed for the
  active-link highlight (see Gaps §7).

### Footer ([Footer.tsx](../src/components/Footer.tsx))
- **Navigation column:** Home → `#hero`, About → `#about`, Projects → `#projects`, Contact → `#contact`
- **Social column (text links):** GitHub, LinkedIn, Figma, Instagram, Pinterest
- **Social icon row (top of footer):** GitHub, LinkedIn, Figma, Instagram, Behance
- **Contact column:** email (`mailto:`), phone (`tel:`), "Mumbai, India" (plain text)
- **Bottom bar:** `© {currentYear} Nirav. Crafted with passion.` + "Mumbai, India • Frontend Developer"

---

## 3. External links — master list (where every link goes)

| Label | URL | Appears in |
|---|---|---|
| GitHub | https://github.com/Niravcanvas | Hero, Contact, Footer (×2), About terminal |
| LinkedIn (A) | https://www.linkedin.com/in/nirav-thakur-9b5892225/ | Hero, Footer (×2) |
| LinkedIn (B) | https://www.linkedin.com/in/niravcanvas | Contact ⚠️ (different URL — see Gaps) |
| Figma | https://www.figma.com/@Niravcanvas | Hero, Contact, Footer |
| Instagram | https://www.instagram.com/blurrredcanvas/ | Hero, Contact, Footer |
| Pinterest | https://in.pinterest.com/blurredoutframes/ | Hero, Contact, Footer (text list only) |
| Behance | https://www.behance.net/Niravcanvas | Hero, Contact, Footer (icon row only) |
| Email | mailto:niravthakur@icloud.com | Contact, Footer |
| Phone | tel:+919653472213 | Contact, Footer |

> Note the spelling: Instagram handle is `blurrredcanvas` (three r's), Pinterest is
> `blurredoutframes`. These are intentional handles, just flagging in case they're typos.

---

## 4. Internal links & downloadable assets

| Asset | Path | Used by | On disk? |
|---|---|---|---|
| Resume PDF | `/Docs/N-Resume.pdf` | Navbar "Resume" button | ✅ `public/Docs/N-Resume.pdf` |
| Seven Vinyl brand PDF | `/Docs/Seven Vinyl.pdf` | Projects → "Seven Vinyl Store" → View PDF | ✅ `public/Docs/Seven Vinyl.pdf` |

---

## 5. Section-by-section breakdown

### 5.1 Hero — `#hero` ([Hero.tsx](../src/components/Hero.tsx))
- **Headline:** `CREATE` (the "EA" is italic), gradient text.
- **Role badges:** Frontend Developer · UI/UX Designer · Photographer.
- **Tagline paragraph** + location "Mumbai, India".
- **CTA buttons:**
  - `View My Work` → scroll to `#projects`
  - `Get in Touch` → scroll to `#contact`
- **Social icon row:** GitHub, LinkedIn (A), Figma, Instagram, Pinterest, Behance (all `target="_blank"`).
- **Background FX:** WebGL `GridScan` shader ([Gridscan.tsx](../src/components/Gridscan.tsx)) + a CSS grid that
  parallax-shifts toward the mouse + 3 floating blurred orbs.
- **Scroll indicator** at the bottom (decorative, "Scroll" + arrow).

### 5.2 About — `#about` ([About.tsx](../src/components/About.tsx))
Styled like a macOS "About.app" window with **two switchable views**:

**A) Finder view** — left sidebar tabs switch the right pane between:
| Tab | Content |
|---|---|
| About | "My Story" text + a stacked photo trio (N1/N2/N3.jpg) |
| Education | 8 education/cert entries |
| Skills | 3 skill groups (Technical, Creative, Soft) |
| Languages | 10 languages w/ logos (HTML…SQL) |
| Libraries | 14 frameworks/tools w/ logos (Next.js…jQuery) |
| Software | 10 design/dev apps w/ logos (Figma…Xcode) |

> Tech logos load from external CDNs (jsDelivr/devicon, simpleicons, wikimedia,
> coollabs). If a logo 404s, it falls back to a 2-letter abbreviation.

**B) Terminal view** — an interactive fake shell. Type a command + Enter (or use the
Quick-command buttons / ↑↓ for history). Commands:

| Command | What it does |
|---|---|
| `help` | Lists available commands |
| `about` | Prints the about blurb |
| `education` | Prints education list |
| `skills` | Prints skill groups |
| `languages` | Prints languages |
| `libraries` | Prints libraries |
| `software` | Prints software tools |
| `contact` | Prints location / GitHub / email |
| `ls` | Fake directory listing (hints at `.secret/`) |
| `clear` | Clears the terminal |
| **Hidden / easter eggs** | |
| `secret` | Reveals a quote; counts toward "secrets found" |
| `matrix` | "Wake up, Neo…" ASCII gag |
| `coffee` | Brewing-coffee animation gag |
| `joke` | Random dev joke (4 possible) |
| `game` | Starts a number-guessing game |
| `guess <n>` | Guess the number (answer is **73**); higher/lower hints |
| `sudo` | "Nice try!" gag |
| `whoami` | `nirav@portfolio` |
| `date` | Current date/time |
| `secrets` | Progress tracker — 5 secrets to find (secret, matrix, coffee, joke, game) |
| anything else | "Command not found" |

### 5.3 Gallery (component file is `Images.tsx`) — **no id** ([Images.tsx](../src/components/Images.tsx))
- Styled like a macOS "Music.app" window.
- **Filter tabs:** All Works, Portfolio, Photography, Design, Art.
- Shows a "Featured" grid — **only the first 5** of the filtered images (`.slice(0, 5)`).
- Click any image → opens a full-screen **"Now Playing" lightbox** (Apple-Music style):
  - Image shown grayscale as "album art".
  - Controls: prev / play-pause / next (play/pause & progress bar are **decorative**, not a real player).
  - Keyboard: `Esc` closes, `←`/`→` prev/next, `Space` toggles play icon.
  - Shuffle / Repeat / Heart / Volume buttons are **decorative** (no handlers).
- 13 gallery entries (`/images/1.jpg`…`/images/13.jpg`).
- ⚠️ **Images 3, 4, 5 are referenced but do NOT exist on disk** (see Gaps §7).

### 5.4 Projects — `#projects` ([Projects.tsx](../src/components/Projects.tsx))
- Styled like a macOS "Notes.app" window: folders sidebar + notes list + detail pane.
- **Folders (filters):** All Projects, Development, Design, Favorites.
- Each project shows tags, Overview, Details, and action buttons that open in a new tab.
- Default selected project: IndieAn (id 1).

| # | Project | Category | Action buttons → destination |
|---|---|---|---|
| 1 | IndieAn | development | Live Demo → https://www.indiean.com/ |
| 3 | Seven Vinyl Store | favorites | View PDF → `/Docs/Seven Vinyl.pdf` (link is `#`, so no Live Demo) |
| 4 | SYNC Fitness App | design | Figma → https://www.figma.com/design/PoIDqRCf8VTB9tpuYuqSa7/SYNC--Fitness- |
| 5 | Anders Design Portfolio | design | Figma → https://www.figma.com/design/Hd0ugG6oLaIax2aqwsCZGr/Interior |
| 6 | Form & Form | design | Figma → https://www.figma.com/design/mH4P37A5Z39BxvwC9EAJys/F-F?node-id=0-1&t=etwyOv2m1dKCqm8e-1 |
| 7 | HackOverflow 4.0 | development | Live Demo → https://hackoverflow4.tech · GitHub → https://github.com/Niravcanvas/Hackoverflow |
| 8 | Cloud Kitchen POS | development | Live Demo + GitHub → https://github.com/Niravcanvas/Cloud-kitchen-POS |
| 9 | AI MCQ Generator | development | Live Demo + GitHub → https://github.com/Niravcanvas/AI-mcq-Generator |

> Note: project id 2 does not exist (ids go 1, 3, 4, 5…). IndieAn's `github` field is an
> empty string so no GitHub button renders for it. Buttons only render when the relevant
> field is present and (for `link`) not `'#'`.
>
> Project images: Indiean.svg, Sevenvinyl.svg, Sync.png, Anders.svg, F&F.svg,
> Hackoverflow.png, and emoji 🍽️ / 🤖 for the last two.

### 5.5 Achievements — `#achievements` ([Achivements.tsx](../src/components/Achivements.tsx))
- Styled like a macOS "Keynote.app" window. (Filename is misspelled `Achivements.tsx`.)
- **Tabs:** Timeline · Experience · Achievements.
  - *Timeline* merges experiences + achievements, sorted by year descending.
  - *Experience* (4): Hardware & Networking Intern @ Quasco (2023); UI/UX Design Intern @ IBM SkillsBuild (2022); Co-Founder & Creative Director @ Seven Hours Design Studio (Present); Core Creative Head @ Euforia (2023-2024).
  - *Achievements* (3): ArtStation Community Challenges; DeviantArt Online Art Contests; Daily Drawing Challenges.
- All content is text/icons only — **no outbound links** in this section.

### 5.6 Contact — `#contact` ([Contact.tsx](../src/components/Contact.tsx))
- Styled like a macOS "Mail.app" window with **3 mailboxes**:
  - **Compose** — a contact form (Name, Email, Subject, Message).
    - ⚠️ **The form is FAKE.** On submit it waits 500ms and shows
      "Message sent! I'll get back to you soon." — it does **not** send anywhere
      (no backend, no email service). See Gaps §7.
    - The top toolbar "Send" / attach / trash buttons are **decorative** (no handlers).
  - **Contact Info** — Email (mailto), Phone (tel), Location (text) + a "Response time 24h" card.
  - **Social Links** — 6 cards: GitHub, LinkedIn (B), Figma, Instagram, Pinterest, Behance.

### 5.7 Footer ([Footer.tsx](../src/components/Footer.tsx))
See §2 above for its link map.

---

## 6. Contact details used across the site
| Field | Value |
|---|---|
| Email | niravthakur@icloud.com |
| Phone | +91 9653472213 |
| Location | Mumbai, India |
| GitHub handle | Niravcanvas |

---

## 7. Gaps / things currently missing or inconsistent ⚠️

These are the "missing things" worth fixing — listed so nothing is forgotten.

1. **Broken gallery images** — `Images.tsx` references `/images/3.jpg`, `/images/4.jpg`,
   `/images/5.jpg`, but only `1,2,6,7,8,9,10,11,12,13.jpg` exist in `public/images/`.
   Three gallery tiles will fail to load. (Also, the gallery only ever shows the first 5
   filtered tiles, so several images never appear at all.)
2. **Fake contact form** — `Contact.tsx` simulates sending; messages go nowhere. Needs a
   real backend / email service (e.g. Formspree, Resend, an API route) to actually work.
3. **LinkedIn URL mismatch** — Hero & Footer link to
   `…/in/nirav-thakur-9b5892225/`, but Contact links to `…/in/niravcanvas`. Pick one.
4. **Footer social inconsistency** — the footer's icon row shows Behance (no Pinterest),
   while the footer's text "Social" list shows Pinterest (no Behance). Hero/Contact show
   all six. Decide on one consistent set.
5. **Gallery & Achievements aren't navigable** — they're absent from the Navbar, the
   Gallery `<div>` has no `id` (can't be deep-linked/scrolled to), and the Navbar's active
   highlight observer ignores both.
6. **Unused / orphaned files:**
   - `Interactive.tsx` — a full interactive canvas component that is **not imported anywhere**.
   - `public/images/MSCDA.svg` and `public/images/Favicon.svg` — present but unreferenced.
   - `Card-temp.png` (repo root) — looks like a leftover temp asset.
7. **No SEO/meta extras** — there's `title`/`description`/`keywords` in `layout.tsx`, but no
   Open Graph image, no `og:`/Twitter card tags, no `robots.txt`, no `sitemap.xml`, no
   favicon `.svg` wired up (uses `src/app/favicon.ico`).
8. **Decorative-only controls** — several buttons look functional but do nothing: the
   gallery player transport (shuffle/repeat/heart/volume), Contact's toolbar Send/attach/
   trash, and Projects' window "Settings" gear.
9. **Filename typo** — `Achivements.tsx` (missing the second "e"). Cosmetic, but worth a rename.

---

## 8. Asset inventory (`public/`)

- **Docs:** `N-Resume.pdf`, `Seven Vinyl.pdf`
- **Gallery photos:** `1,2,6,7,8,9,10,11,12,13.jpg` (3,4,5 missing — see Gaps)
- **Portrait photos:** `N1.jpg`, `N2.jpg`, `N3.jpg` (About section)
- **Project logos:** `Indiean.svg`, `Sevenvinyl.svg`, `Sync.png`, `Anders.svg`, `F&F.svg`, `Hackoverflow.png`
- **Unreferenced:** `MSCDA.svg`, `Favicon.svg`
- **Next.js defaults:** `file.svg`, `globe.svg`, `next.svg`, `vercel.svg`, `window.svg`
