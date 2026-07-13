# Portfolio V2 — Spec

> One-pager. React + Vite. No React Router. Deployed to GitHub Pages.

---

## Stack

```
React 18
Vite 5
Tailwind CSS 3
Framer Motion
```

No React Router — all sections on a single page. Case studies served as standalone HTML files in `public/`.

**Deploy:** GitHub Pages via `gh-pages` npm package. Base path: `/portfolio/`.

---

## Project Structure

```
portfolio/
├── public/
│   ├── images/
│   │   └── project/            ← project cover images (16:9)
│   ├── colare-case-study.html  ← standalone slide deck, linked from modal
│   ├── fireworks-ai-spec.pdf
│   └── resume.pdf
│
├── src/
│   ├── main.jsx
│   ├── App.jsx                 ← theme toggle (light/dark), localStorage
│   │
│   ├── data/
│   │   ├── projects.js         ← single source of truth for all projects
│   │   └── tags.js             ← master tag list; all projects import from here
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   └── Navbar.jsx      ← sticky, theme toggle button
│   │   │
│   │   ├── sections/
│   │   │   ├── Hero.jsx
│   │   │   ├── Projects.jsx    ← modal state, hash-based deep linking
│   │   │   └── Contact.jsx
│   │   │
│   │   └── ui/
│   │       ├── ProjectCard.jsx
│   │       ├── ProjectModal.jsx
│   │       ├── Tag.jsx
│   │       └── AnimatedText.jsx
│   │
│   ├── hooks/
│   │   └── useScrollReveal.js
│   │
│   └── styles/
│       └── index.css           ← Tailwind directives + CSS variables
│
├── index.html
├── vite.config.js
├── tailwind.config.js
└── CLAUDE.md
```

---

## Design Tokens

Defined in `src/styles/index.css`. Tailwind config extends these.

```css
:root {
  --accent:        #3f0070;
  --accent-hover:  #5a00a6;
  --accent-muted:  rgba(63, 0, 112, 0.08);
  --accent-contrast: #ffffff;

  --bg:            #f2ead8;
  --bg-subtle:     #e8dcc8;
  --surface:       #f7f1e0;

  --text-primary:   #2a1a0e;
  --text-secondary: #6b553b;
  --text-tertiary:  #9c8769;

  --border:        #d4c49e;

  --radius-card:   12px;
  --radius-lg:     16px;
  --radius-pill:   9999px;

  --shadow-card:      0 4px 24px rgba(0, 0, 0, 0.07);
  --shadow-card-hover: 0 12px 40px rgba(0, 0, 0, 0.13);
}

[data-theme="dark"] {
  --bg:            #1a1208;
  --bg-subtle:     #221808;
  --surface:       #2a1e0a;
  --text-primary:  #f0e8d8;
  --text-secondary: #b09878;
  --text-tertiary:  #7a6848;
  --border:        #3a2c14;
}
```

**Typography:**
- Display / headings: `Lato` (Google Fonts)
- Body: `Nunito` (Google Fonts)
- Monospace (tags, counters): system stack — `SF Mono`, `Fira Code`

---

## Tags

All project tags are defined in `src/data/tags.js` as a `TAGS` constant. Projects import from there — no raw strings in `projects.js`.

```js
export const TAGS = {
  // AI Tools
  CLAUDE:        "Claude",
  CHATGPT:       "ChatGPT",
  FIREWORKS_AI:  "Fireworks AI",
  LOVABLE:       "Lovable",

  // Engineering
  REACT:         "React",
  HTML_CSS:      "HTML/CSS",
  JAVASCRIPT:    "JavaScript",
  PYTHON:        "Python",
  SQL:           "SQL",

  // PM & Strategy
  GTM:           "GTM",
  PRODUCT_DESIGN: "Product Design",

  // Design
  FIGMA:         "Figma",
}
```

---

## Data Schema

### `src/data/projects.js`

Array ordered by `sortDate` descending. Always add new entries to the top (below the pinned `applied-materials` entry).

```js
{
  id: "project-slug",             // used for hash deep-linking: #project=slug
  title: "Project Title",
  tagline: "One-line outcome.",
  description: "2-3 sentence card summary.",
  tags: [TAGS.REACT, TAGS.CLAUDE],
  image: `${base}images/project/cover.png`,
  featured: true,                 // shows in card grid; false = list row
  hidden: false,                  // true = excluded from all rendering
  type: "pm" | "engineering" | "design",
  sortDate: "2026-05",            // YYYY-MM, controls order

  // Modal fields
  role: "Role title",
  context: "Company or event",
  period: "Month Year",
  team: "Solo | Team description",
  problem: "...",
  solution: "..." | ["bullet", "  sub-bullet"],  // array = rendered as bullets
  results: ["string", { text: "link text", href: "relative-path" }],
  keyMetrics: [{ label: "Label", value: "Value" }],  // optional

  // External link button in modal
  externalLink: "https://..." | `${base}path`,
  externalLinkLabel: "View Case Study",           // defaults to "View Live"
}
```

`solution` as an array: items starting with two spaces (`"  "`) render as sub-bullets with a `◦` marker. Top-level items use `•`.

---

## Key Components

### `ProjectModal.jsx`

Full-screen modal triggered by clicking a project card or list row. Sections rendered:
- Cover image (clickable if `externalLink` exists)
- Title, tagline, tags
- Metadata grid: Role / Context / Period / Team
- Key metrics (optional 2-column stat grid)
- Problem (paragraph)
- Solution (paragraph or bullet/sub-bullet list)
- Results (bullet list; items can be plain strings or `{ text, href }` links)
- External link button

### `Projects.jsx`

Manages `selectedProject` state. On mount, reads `window.location.hash` — if it matches `#project=<id>`, opens that project's modal. Used by case study back buttons to return to a specific open modal.

```
/portfolio/#project=hiring-assessment-startup  →  opens hiring assessment modal
```

### `Navbar.jsx`

Sticky top. Theme toggle (sun/moon). Smooth-scroll anchor links.

### `AnimatedText.jsx`

Cycling text via Framer Motion `AnimatePresence`. Used in Hero for role titles.

---

## Case Studies

Standalone HTML files in `public/`. No React build step — served directly by GitHub Pages.

| File | Linked from |
|---|---|
| `colare-case-study.html` | Hiring Assessment modal `externalLink` |

Case study HTML files replicate portfolio design tokens (CSS variables inline). Back button links to `/portfolio/#project=<id>` to reopen the source modal. Navigation: keyboard arrows + dot progress + prev/next buttons. Slides wrap on both ends.

---

## Routing

No React Router. Single-page app with anchor scroll. Project detail pages are standalone HTML in `public/` — no framework overhead.

Modal deep-linking via URL hash: `#project=<id>`. `Projects.jsx` reads this on mount.

---

## Dark Mode

Toggle in navbar. Stored in `localStorage`. Applied as `data-theme="dark"` on `<html>`. Default: system `prefers-color-scheme`.

---

## `vite.config.js`

```js
export default defineConfig({
  plugins: [react()],
  base: "/portfolio/",
})
```

---

## `package.json` Scripts

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "deploy": "npm run build && gh-pages -d dist"
  }
}
```

---

## Intentionally Excluded

- No React Router (case studies are static HTML, not routes)
- No contact form
- No blog
- No analytics
- No CMS
- No skill bars or percentage meters
- No testimonials
- No CI/CD beyond `gh-pages` deploy
