# Portfolio V2 — Template Spec

> One-pager. React + Vite. Mobile-first. No dependencies on v1.

---

## Stack

```
React 18
Vite 5
Tailwind CSS 3
Framer Motion
React Router v6     ← only if individual project detail pages are kept
```

**Deploy:** GitHub Pages via `gh-pages` npm package or GitHub Actions.

---

## Project Structure

```
portfolio-v2/
├── public/
│   ├── favicon.ico
│   └── resume.pdf              ← linked from CTA button
│
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   │
│   ├── data/
│   │   ├── projects.js         ← single source of truth for all project cards
│   │   └── experience.js       ← work + education timeline entries
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx
│   │   │   └── Footer.jsx
│   │   │
│   │   ├── sections/
│   │   │   ├── Hero.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Experience.jsx
│   │   │   ├── Skills.jsx
│   │   │   └── Contact.jsx
│   │   │
│   │   └── ui/
│   │       ├── ProjectCard.jsx
│   │       ├── TimelineItem.jsx
│   │       ├── Tag.jsx
│   │       └── AnimatedText.jsx
│   │
│   ├── hooks/
│   │   └── useScrollReveal.js  ← shared hook for scroll-triggered animations
│   │
│   └── styles/
│       └── index.css           ← Tailwind directives + CSS variables only
│
├── index.html
├── vite.config.js
├── tailwind.config.js
└── package.json
```

---

## Design Tokens

Define in `index.css` as CSS variables. Tailwind config extends these.

```css
:root {
  --accent: #3f0070;
  --accent-hover: #5a00a6;
  --accent-muted: rgba(63, 0, 112, 0.1);

  --bg: #ffffff;
  --bg-subtle: #f7f7f8;
  --surface: #ffffff;

  --text-primary: #111111;
  --text-secondary: #5b5b5b;
  --text-inverse: #ffffff;

  --border: #ebebeb;

  --radius-card: 12px;
  --radius-pill: 9999px;

  --shadow-card: 0 4px 24px rgba(0, 0, 0, 0.07);
  --shadow-card-hover: 0 12px 40px rgba(0, 0, 0, 0.13);

  --transition: 0.3s ease;
}

[data-theme="dark"] {
  --bg: #0c0c0d;
  --bg-subtle: #161617;
  --surface: #1a1a1b;
  --text-primary: #f0f0f0;
  --text-secondary: #9a9a9a;
  --border: #2a2a2a;
}
```

**Typography:**
- Display / headings: `Syne` (Google Fonts) — geometric, confident
- Body: `DM Sans` (Google Fonts) — clean, readable on mobile
- Monospace (tags/labels): `DM Mono`

---

## Tailwind Config

```js
// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: ["class", "[data-theme='dark']"],
  theme: {
    extend: {
      colors: {
        accent: "var(--accent)",
        "accent-hover": "var(--accent-hover)",
        "accent-muted": "var(--accent-muted)",
        bg: "var(--bg)",
        "bg-subtle": "var(--bg-subtle)",
        surface: "var(--surface)",
        "text-primary": "var(--text-primary)",
        "text-secondary": "var(--text-secondary)",
        border: "var(--border)",
      },
      fontFamily: {
        display: ["Syne", "sans-serif"],
        body: ["DM Sans", "sans-serif"],
        mono: ["DM Mono", "monospace"],
      },
      borderRadius: {
        card: "var(--radius-card)",
        pill: "var(--radius-pill)",
      },
      boxShadow: {
        card: "var(--shadow-card)",
        "card-hover": "var(--shadow-card-hover)",
      },
    },
  },
}
```

---

## Data Schemas

### `src/data/projects.js`

```js
export const projects = [
  {
    id: "project-slug",
    title: "Project Title",
    tagline: "One sentence outcome or hook — quantified if possible.",
    description: "2-3 sentence summary for card body.",
    tags: ["React", "Vite", "Fuse.js"],
    image: "/images/project-cover.jpg",   // in public/images/
    link: "/projects/project-slug",        // internal route, or
    externalLink: "https://...",           // live demo URL
    featured: true,                        // shows in homepage section
    type: "engineering" | "pm" | "design", // optional filter
  },
]
```

### `src/data/experience.js`

```js
export const workExperience = [
  {
    id: "job-slug",
    role: "Job Title",
    company: "Company Name",
    location: "City, ST",
    period: "Month Year – Present",
    bullets: [
      "One line of impact, quantified.",
    ],
  },
]

export const education = [
  {
    id: "school-slug",
    degree: "Degree Name",
    school: "School Name",
    period: "Year – Year",
    notes: "Optional detail line.",
  },
]
```

---

## Component Specs

### `Navbar.jsx`

**Desktop:** Fixed top. Logo left (`AG` initials or wordmark). Nav links right: Home · Projects · Resume · Contact. Accent-colored active indicator underline.

**Mobile:** Fixed bottom bar (thumb-friendly). Icon + label for: Home, Projects, Resume, Contact. Height `56px`. Blurred background (`backdrop-filter: blur`).

**Behavior:**
- Hides on scroll down, reveals on scroll up (replaces Headroom.js — implement with `useEffect` + scroll listener or Framer Motion's `useScroll`)
- Background transitions from transparent → solid on scroll past hero

---

### `Hero.jsx`

**Layout:** Full viewport height (`100svh`). Vertically centered. Name as large display heading. Cycling animated subtitle (3 roles, same logic as v1 but using Framer Motion `AnimatePresence`).

**Elements:**
- Name `h1` — large, font-display
- Animated cycling role — accent color
- 1-line bio tagline — text-secondary
- Two CTA buttons: Download Resume (outlined) + Email Me (filled accent)
- Scroll indicator arrow at bottom

**Animation:** Staggered entrance — name fades up first, subtitle second, bio third, CTAs last. Delay each by `0.15s`.

---

### `Projects.jsx`

**Layout:** Vertical stack of `ProjectCard` components. Max 3 cards on the one-pager (featured only). "View All" link at bottom if a `/projects` route exists.

**No carousel on mobile.** Vertical scroll only.

---

### `ProjectCard.jsx`

**Structure:**
```
┌────────────────────────────────────┐
│  [Cover Image - 16:9 ratio]        │
├────────────────────────────────────┤
│  Title                   [↗ link]  │
│  Tagline (1 line, accent weight)   │
│  Description (2-3 lines)           │
│  [Tag] [Tag] [Tag]                 │
└────────────────────────────────────┘
```

**Behavior:**
- Hover: card lifts (`translateY(-6px)`), shadow deepens, image scales `1.03`
- Left border `3px` accent color on hover (or always-on for featured)
- Tags use `Tag.jsx` — `font-mono`, small, accent-muted background

**Mobile:** Full width. Image `200px` height. Tap state matches hover state.

---

### `Experience.jsx`

**Layout:** Two columns on desktop (Work left, Education right). Single column stack on mobile.

**Each entry (`TimelineItem.jsx`):**
```
[Year pill] ─ Role at Company
              Location · Period
              • Bullet of impact
```

Year pill: rounded, accent background, white text. Vertical line connecting entries uses `::before` pseudo-element on the wrapper, accent color, `2px` wide.

---

### `Skills.jsx`

**Layout:** Two-column card on desktop. Full-width stacked on mobile.

```
┌──────────────────┬───────────────────┐
│  I think in...   │  I build with...  │
│  Product strategy│  React / Vite     │
│  GTM             │  Python / SQL     │
│  User research   │  HTML / CSS / JS  │
│  Data modeling   │  Figma            │
└──────────────────┴───────────────────┘
```

Items render as a simple list with a small accent dot. No skill bars — they're meaningless.

---

### `Contact.jsx`

**Layout:** Centered. Minimal. 

- Section heading
- One-line copy
- Email as large clickable link (accent color)
- LinkedIn icon link
- That's it. No form.

---

### `AnimatedText.jsx`

Reusable cycling text component. Props:

```jsx
<AnimatedText
  items={["Product", "Operations", "Design"]}
  interval={2000}
/>
```

Uses Framer Motion `AnimatePresence` with `mode="wait"`. Each item animates: slide up in, slide up out.

---

### `useScrollReveal.js`

```js
// Returns a ref and a boolean `isVisible`
// Uses IntersectionObserver
// Triggers once when element enters viewport
// Used to apply Framer Motion initial/animate variants
export function useScrollReveal(options = { threshold: 0.15 }) { ... }
```

Standard reveal variant to use across all sections:
```js
export const revealVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
}
```

---

## Routing

**Option A — True one-pager (simpler):**
No React Router. All sections on `index.html`. Nav links are anchor scroll (`#projects`, `#experience`, etc.) with smooth scroll behavior via CSS `scroll-behavior: smooth`.

**Option B — One-pager + project detail pages:**
```
/                    ← one-pager (Hero + Projects + Experience + Skills + Contact)
/projects/:slug      ← individual project case study page
```

Use `HashRouter` for GitHub Pages compatibility (avoids 404 on direct URL access).

---

## Animation Checklist

| Element | Animation |
|---|---|
| Hero name | Fade up on load |
| Hero subtitle cycle | Framer Motion AnimatePresence slide |
| Hero CTAs | Staggered fade up |
| Section headings | Scroll reveal fade up |
| Project cards | Scroll reveal stagger (each card 0.1s delay) |
| Card hover | translateY + shadow + image scale |
| Timeline items | Scroll reveal stagger left |
| Navbar hide/show | Framer Motion y transform |
| Page load | No flash — use `opacity: 0` on body, remove after JS loads |

---

## Mobile Breakpoints

| Breakpoint | Behavior |
|---|---|
| `< 640px` | Single column. Bottom nav bar. Cards full width. |
| `640px – 1024px` | Single column. Top nav. Cards full width. |
| `> 1024px` | Desktop layout. Experience two columns. |

---

## Dark Mode

Toggle stored in `localStorage`. Applied as `data-theme="dark"` on `<html>`. Default: system preference via `prefers-color-scheme`. Toggle button in navbar (sun/moon icon, no label).

---

## Performance Notes

- All images in `public/images/` — use `loading="lazy"` on project covers
- Fonts loaded via `<link rel="preconnect">` + Google Fonts in `index.html`
- Framer Motion: import only what's used (`motion`, `AnimatePresence`) — avoid importing entire library
- No jQuery. No Owl Carousel. No Headroom.js. No Bootstrap.

---

## `index.html` Head

```html
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="[Name] — Product Manager & Frontend Developer" />

  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&family=DM+Mono:wght@400;500&display=swap" rel="stylesheet" />

  <title>[Name] — Portfolio</title>
</head>
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

## `vite.config.js`

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "/portfolio-v2/",   // match GitHub repo name
})
```

---

## What's Intentionally Excluded

- No contact form (no backend)
- No blog
- No analytics setup (add later)
- No CMS integration
- No image optimization pipeline (add later)
- No i18n
- No testing setup
- No CI/CD beyond `gh-pages` deploy script
- No skill bars or percentage meters
- No testimonials section
