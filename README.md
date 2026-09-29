# Hartfelt Studio — Premium Business Website Template

A production-ready, reusable business website template built with **Vite + React 18 + TypeScript + Tailwind CSS + Framer Motion + Lucide**.

Designed to be duplicated and re-themed for any business — restaurants, hotels, salons, construction, agencies, local stores, freelancers, and service businesses.

## Quick start

```bash
npm install
npm run dev      # local dev server
npm run build    # type-check + production build → dist/
npm run preview  # preview the production build
```

## How to customize for a new client

**1. Content — `src/data/content.ts`**

Everything a client could want to change lives in this one file:
business name, tagline, hero copy, services, about, statistics, portfolio,
testimonials, pricing, FAQ, contact details, social links, navigation, and SEO meta.
Components never contain hardcoded business text.

**2. Theme — `src/index.css` (design tokens)**

The whole palette is defined as CSS custom properties at the top of the file:

| Token | Purpose |
| --- | --- |
| `--color-bg` | page background |
| `--color-surface` | subtle panels |
| `--color-card` | elevated card surfaces |
| `--color-ink` | primary foreground text |
| `--color-muted` | secondary text |
| `--color-line` | hairline borders |
| `--color-primary` | primary button background |
| `--color-accent` | accent (light surfaces) |
| `--color-accent-bright` | accent (dark surfaces) |
| `--font-sans` / `--font-display` | body / display fonts |

Recolor the entire site by editing these values — no component changes required.

**3. Images — `public/images/`**

Replace the SVG demo illustrations (about + portfolio) with client assets.

## Architecture

```
src/
├── data/
│   ├── types.ts          # typed content model
│   └── content.ts        # single source of truth for all site content
├── lib/
│   ├── motion.ts         # reusable animation variants (respects reduced motion)
│   ├── contact.ts        # form service — connect a real API here
│   ├── icons.ts          # string → Lucide icon mapper
│   └── utils.ts          # shared helpers (cn, etc.)
└── components/
    ├── layout/           # Navbar, MobileNav, Footer
    ├── sections/         # Hero, Services, About, Work, Testimonials,
    │                     # Pricing, Faq, Cta, Contact
    └── ui/               # Button, SectionHeading, Container, Reveal, Badge
```

## Contact form backend

The form is wired through `src/lib/contact.ts`. It currently simulates a
submit (loading → success) so the UI is fully testable. To connect a real
endpoint, replace the implementation of `submitContact()` in that file —
marked with a clear `// INTEGRATION POINT` comment.

## Features

- Fully responsive (mobile / tablet / desktop), no horizontal scroll
- Sticky navbar with blur-on-scroll + animated mobile drawer
- Staggered scroll reveals with Framer Motion, `prefers-reduced-motion` respected
- Data-driven pricing with a monthly/annual toggle and configurable discount
- Accessible FAQ accordion (keyboard friendly, animated, single-open mode)
- Client-side validated contact form (required fields, email, min message length)
- Portfolio with category filtering
- Semantic HTML, focus-visible states, WCAG AA contrast
- SEO: meta description, Open Graph, favicon, robots.txt, sitemap.xml

## Deployment

`npm run build` produces a static site in `dist/` — deployable to any
static host (Netlify, Vercel, Cloudflare Pages, S3, etc.).