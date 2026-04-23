# Angela Gao — Portfolio v2

A modern, interactive personal portfolio built with **React 18**, **Vite 5**, and **Tailwind CSS**. Showcasing product thinking and engineering expertise through smooth animations, interactive modals, and thoughtful UX.

**Live:** [https://snowangel-22.github.io/portfolio/](https://snowangel-22.github.io/portfolio/)

---

## Overview

This portfolio demonstrates:
- **100% Product** — UX design, narrative, and user experience
- **100% Technical** — React, animations, responsive design, build optimization
- **200% Builder** — Shipping, iteration, and attention to detail

## Tech Stack

- **React 18** — Modern component architecture
- **Vite 5** — Fast build tool and dev server
- **Tailwind CSS 3** — Utility-first styling
- **Framer Motion** — Smooth scroll-reveal animations
- **react-icons** — Feather Icons + Font Awesome icons

## Features

### Hero Section
- Full-viewport hero with staggered animations
- Responsive typography (clamp-based sizing)
- Social links (LinkedIn, GitHub, Email)
- Download resume button
- Scroll indicator with infinite animation

### Projects Showcase
- **Featured projects:** Grid layout with project cards
- **Non-featured projects:** Compact text list
- **Interactive modals:** Full project details with problem/solution/results
- **Responsive images:** Optimized for all breakpoints
- **Project data:** Structured metadata for each project

### Navigation
- **Desktop:** Fixed top navbar (hide on scroll)
- **Mobile:** Bottom fixed navigation bar
- **Logo:** Custom ag-logo.svg favicon
- **Theme toggle:** Light/dark mode with Feather Icons

### Design System
- **Color palette:** Warm parchment (#f2ead8) + deep purple (#3f0070)
- **Typography:** Lato (display), Satisfy (subtitles), Nunito (body)
- **Spacing:** Consistent Tailwind scale
- **Animations:** cubic-bezier(0.16, 1, 0.3, 1) custom easing

### SEO & Social
- Meta descriptions and viewport configuration
- Open Graph tags for social sharing (Facebook, LinkedIn)
- Twitter Card support
- Favicon and theme color
- Semantic HTML structure

---

## Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   └── Navbar.jsx          # Navigation with theme toggle
│   │   ├── sections/
│   │   │   ├── Hero.jsx            # Hero with CTAs
│   │   │   ├── Projects.jsx        # Featured + non-featured projects
│   │   │   ├── Contact.jsx         # Social links
│   │   ├── ui/
│   │   │   ├── ProjectCard.jsx     # Project card with expand
│   │   │   ├── ProjectModal.jsx    # Full project details modal
│   │   │   └── Tag.jsx             # Skill tag component
│   ├── data/
│   │   └── projects.js             # Project data structure
│   ├── hooks/
│   │   └── useScrollReveal.js      # Scroll-based animations
│   ├── styles/
│   │   └── index.css               # Design tokens & globals
│   ├── App.jsx
│   └── main.jsx
├── public/
│   ├── images/project/             # Project cover images
│   ├── resume.pdf                  # Angela's resume
│   └── ag-logo.svg                 # Navbar logo
├── index.html                      # HTML with meta tags
├── vite.config.js                  # Vite config (base: "/portfolio/")
├── tailwind.config.js              # Tailwind theme
└── package.json                    # Dependencies & scripts
```

---

## Getting Started

### Prerequisites
- Node.js 16+ and npm

### Installation
```bash
git clone https://github.com/Snowangel-22/portfolio.git
cd portfolio
npm install
```

### Development
```bash
npm run dev
```
Runs dev server at `http://localhost:5173`

### Build
```bash
npm run build
```
Outputs optimized build to `dist/`

### Deploy to GitHub Pages
```bash
npm run deploy
```
Builds and pushes to `gh-pages` branch for automatic deployment.

---

## Projects Included

### Featured
1. **Service Product GTM** — Applied Materials
   - Go-to-market strategy, $500K+ revenue
   - PM/GTM leadership, data analytics

2. **ACNH Gift Guide** — Personal Project
   - React + Fuse.js gift-finder tool
   - 391 villagers, fuzzy search, localStorage

3. **L'Oreal Brandstorm 2025** — Team Project
   - AI-powered skincare routine builder
   - Product definition, prototyping, UX research

### Non-Featured
4. **ERP Startup Case Study** — Interview Take-Home
   - Cloud migration proof of concept
   - Data modeling, product memo, business case

5. **Portfolio v2** — Personal Project
   - Meta: this portfolio itself as a project
   - Demonstrates product + engineering skills

---

## Customization

### Adding Projects
Edit `src/data/projects.js`:
```javascript
{
  id: "unique-id",
  title: "Project Title",
  tagline: "Short tagline",
  description: "Longer description",
  tags: ["Tag1", "Tag2"],
  image: imageCover,
  featured: true/false,
  type: "pm" | "engineering",
  
  // For modals:
  role: "Your role",
  company: "Company name",
  period: "Timeline",
  team: "Team size",
  problem: "Problem statement",
  solution: "Solution approach",
  results: ["Result 1", "Result 2"],
  keyMetrics: [{ label: "Metric", value: "123" }],
  externalLink: "https://..." // optional
}
```

### Updating Colors
Edit `src/styles/index.css`:
```css
:root {
  --accent: #3f0070;        /* Primary brand color */
  --bg: #f2ead8;            /* Background */
  --surface: #f7f1e0;       /* Card/surface */
  /* ... more tokens */
}
```

### Updating Typography
Edit `tailwind.config.js`:
```javascript
fontFamily: {
  display: ['Lato', 'sans-serif'],
  subtitle: ['Satisfy', 'cursive'],
  body: ['Nunito', 'sans-serif'],
}
```

---

## Performance

- **JS Bundle:** 279KB (89.8KB gzipped)
- **CSS:** 12.57KB (3.31KB gzipped)
- **Images:** Optimized and bundled
- **Lighthouse:** 95+ performance score

---

## Future Enhancements

- [ ] Tangram interactive puzzle element (hero right column)
- [ ] Social meta tags refinement
- [ ] Blog/articles section
- [ ] Dark mode animations
- [ ] PWA support

---

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## License

Personal portfolio. Feel free to use as inspiration, but please don't copy the content or design without permission.

---

## Contact

- **Email:** [angela_gao@berkeley.edu](mailto:angela_gao@berkeley.edu)
- **LinkedIn:** [linkedin.com/in/angela-gao22](https://linkedin.com/in/angela-gao22/)
- **GitHub:** [github.com/Snowangel-22](https://github.com/Snowangel-22)

---

**Built with ❤️ using React, Vite, and Tailwind CSS**
