# AGENTS.md — Christopher Licuanan Portfolio

## Project Overview

A static, minimal personal portfolio website for Christopher Licuanan. Built as a pure static site with no backend, no database, and no build process. Designed to be clean, minimal, bold, and easily deployable to Cloudflare Pages.

## Purpose

- Educate visitors about Christopher Licuanan and his work
- Showcase projects via a clean project grid
- Capture newsletter signups via a frontend-only form (no backend integration)

## Tech Stack

- **HTML5** — Semantic markup
- **CSS3** — Custom stylesheet with CSS variables
- **Vanilla JavaScript** — Minimal JS for form handling only
- **No frameworks** — No React, Vue, or build tools
- **No backend** — No server, database, or API calls
- **Static hosting** — Designed for Cloudflare Pages or any static host

## Project Structure

```
portfolio project/
├── index.html          # Home page (hero, intro, featured projects, newsletter)
├── about.html          # About page (bio, skills, interests)
├── projects.html       # Projects page (full project grid)
├── css/
│   └── styles.css     # All styles (typography, layout, components)
├── js/
│   └── main.js        # Newsletter form handler (prevents submit, shows alert)
├── image/
│   └── BG.jpg         # Background image (subtle wave pattern)
├── README.md          # User-facing documentation
└── AGENTS.md          # This file — AI agent documentation
```

## Design System

### Typography

- **Headings:** `Khand` (Google Fonts) — Bold, geometric sans-serif
  - Weights: 400, 500, 600, 700
  - Used for: Site logo, h1–h3, section titles, project card titles

- **Body:** `Switzer` (Fontshare CDN) — Clean, modern sans-serif
  - Weights: 400, 500, 600, 700
  - Used for: All body text, buttons, navigation, descriptions

### Color Palette

Defined in CSS variables (`:root`):

- **Background:** `#ffffff` (white)
- **Text:** `#0a0a0a` (near-black)
- **Accent:** `#c41e3a` (violent red) — Used sparingly for CTAs, links, buttons
- **Accent hover:** `#a01830` (darker red)
- **Muted:** `#525252` (gray for secondary text)
- **Border:** `#e5e5e5` (light gray for borders)

### Spacing System

CSS custom properties for consistent spacing:
- `--space-xs`: 0.5rem
- `--space-sm`: 1rem
- `--space-md`: 1.5rem
- `--space-lg`: 2.5rem
- `--space-xl`: 4rem
- `--space-2xl`: 6rem

### Layout

- **Max width:** `72rem` (1152px) — Content constrained for readability
- **Responsive:** Mobile-first, breakpoints at 640px
- **Grid:** CSS Grid for project cards (`repeat(auto-fill, minmax(280px, 1fr))`)

## Key Components

### Header (`site-header`)

- Logo links to home
- Navigation: Home, About, Projects
- Active page indicated via `aria-current="page"`
- Border-bottom separator

### Hero Section (`hero`)

- Large centered heading (Christopher Licuanan)
- Tagline subtitle
- Used on home page only

### Project Cards (`project-card`)

- Grid layout (responsive)
- Each card contains:
  - Title (h3)
  - Description (muted text)
  - Tech stack (small, muted)
  - "View project" button (outline style)
- Hover effect: border color changes to accent, subtle shadow
- Cards link to project detail pages (currently non-functional)

### Newsletter Section (`newsletter`)

- Dark background (black) with white text
- Email input + Subscribe button
- Form prevents default submit (no backend)
- Shows alert message on submit
- Appears on all three pages

### Footer (`site-footer`)

- Copyright notice
- Links to About and Projects
- Border-top separator

## Pages

### Home (`index.html`)

1. **Hero** — Name and tagline
2. **Intro section** — Brief introduction with CTA to About
3. **Featured projects** — Grid of 3 project cards (preview)
4. **Newsletter** — Email capture form

### About (`about.html`)

1. **About intro** — Main biography paragraph
2. **Background** — Professional background section
3. **What I do** — Current focus/work description
4. **Skills & interests** — Tag-style list of skills
5. **Get in touch** — CTA to newsletter
6. **Newsletter** — Email capture form

### Projects (`projects.html`)

1. **Page intro** — Brief description
2. **Projects grid** — 6 project cards (full list)
3. **Newsletter** — Email capture form

## JavaScript Behavior

**File:** `js/main.js`

- **Purpose:** Handle newsletter form submissions (frontend only)
- **Behavior:**
  - Prevents default form submission
  - Shows alert message: "Thanks for subscribing! (This is a placeholder — no backend connected.)"
  - Clears email input after submit
- **No API calls** — Pure frontend interaction

## Background Image

- **Location:** `image/BG.jpg`
- **Applied to:** `body` element
- **Properties:**
  - `background-size: cover` — Full coverage
  - `background-position: center top` — Centered horizontally, aligned to top
  - `background-repeat: no-repeat` — Single image
- **Style:** Subtle wave pattern in white/light gray tones

## CSS Architecture

### Organization

1. **Imports** — Google Fonts (Khand), Fontshare (Switzer)
2. **CSS Variables** — Colors, spacing, fonts, layout values
3. **Reset/Normalize** — Box-sizing, base styles
4. **Layout** — Site wrapper, header, footer
5. **Components** — Buttons, cards, forms, sections
6. **Page-specific** — About page styles, newsletter styles
7. **Utilities** — Helper classes
8. **Responsive** — Media queries

### Naming Conventions

- **BEM-inspired:** `.component-name`, `.component-name--modifier`
- **Semantic:** `.site-header`, `.project-card`, `.newsletter-form`
- **Utility classes:** `.text-center`, `.mb-0`, `.visually-hidden`

## Accessibility

- Semantic HTML (`<header>`, `<nav>`, `<main>`, `<footer>`, `<article>`)
- ARIA labels (`aria-label`, `aria-current`)
- Visually hidden labels for form inputs
- Focus states on interactive elements
- Proper heading hierarchy (h1 → h2 → h3)

## Constraints & Rules

### DO

- ✅ Keep it static — No backend logic
- ✅ Use placeholder content — Don't leave sections empty
- ✅ Maintain clean, minimal aesthetic
- ✅ Use CSS variables for consistency
- ✅ Keep JavaScript minimal — Only for form handling
- ✅ Ensure responsive design
- ✅ Use semantic HTML

### DON'T

- ❌ Add backend/API integrations
- ❌ Add databases or authentication
- ❌ Over-engineer with frameworks
- ❌ Add build tools or bundlers
- ❌ Break the static site structure
- ❌ Remove the background image without updating CSS

## Deployment

### Cloudflare Pages

1. Push to Git repository (GitHub/GitLab)
2. In Cloudflare Dashboard → Pages → Create project
3. Connect Git repository
4. **Build settings:**
   - Build command: (leave empty)
   - Output directory: `/` (root)
5. Deploy

### Local Development

```bash
# Option 1: Open directly
open index.html

# Option 2: Use a simple server
npx serve .
# or
python -m http.server 8000
```

## Content Guidelines

### Placeholder Content

- Use realistic placeholder text (not just "lorem ipsum")
- Project titles: "Project One", "Project Two", etc.
- Descriptions should sound like real software projects
- Tech stacks should be realistic combinations

### Updating Content

- **Name:** Update in all HTML files (header logo, hero, page titles)
- **Projects:** Edit project cards in `index.html` (featured) and `projects.html` (full list)
- **About:** Edit sections in `about.html`
- **Newsletter:** Update copy in newsletter sections (all pages)

## Future Enhancements (Not Implemented)

- Real newsletter backend integration (Mailchimp, ConvertKit, etc.)
- Project detail pages
- Blog section
- Contact form with backend
- Analytics integration
- SEO meta tags optimization

## File Modification Guide

### Adding a New Page

1. Create new HTML file (e.g., `contact.html`)
2. Copy structure from existing page
3. Update navigation in all pages
4. Add page-specific styles to `css/styles.css` if needed

### Adding a New Project

1. Add project card to `projects.html` grid
2. Optionally add to featured section in `index.html`
3. Use `.project-card` class structure
4. Add unique `id` if linking from home page

### Changing Colors

1. Update CSS variables in `:root` (`css/styles.css`)
2. Variables to change:
   - `--accent` — Primary accent color
   - `--accent-hover` — Hover state
   - `--text` — Text color
   - `--bg` — Background color

### Changing Typography

1. Update font imports (Google Fonts or Fontshare)
2. Update `--font-heading` and `--font-body` variables
3. Adjust font sizes in component styles if needed

## Notes for AI Agents

- **Keep it simple** — This is intentionally a minimal static site
- **No over-engineering** — Don't add frameworks, build tools, or complexity
- **Maintain consistency** — Use existing CSS variables and component classes
- **Test locally** — Open HTML files directly or use a simple server
- **Background image** — Located at `image/BG.jpg`, applied to body element
- **Newsletter forms** — Frontend only, no backend integration
- **All pages** — Share same header, footer, and navigation structure
