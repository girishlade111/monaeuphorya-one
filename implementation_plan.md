# Implementation Plan: Mona Euphorya Animated Portfolio Website

Build a state-of-the-art, high-fidelity animated portfolio website inspired by the Mona Euphorya Framer template, executing sequentially across the five detailed prompt specifications:
1. **Prompt 1**: Project Architecture, Foundations, and Token-Driven Design System
2. **Prompt 2**: Fixed Navigation Bar and Responsive Header
3. **Prompt 3**: Hero Section, Monumental Typography & Floating Media Cards
4. **Prompt 4**: Intro Manifesto, Scroll-Scrub Reveal & Interactive Denmark Map
5. **Prompt 5**: Editorial Asymmetrical Gallery Grid, Interstitial Typography & Project Modal

---

## User Review Required

> [!IMPORTANT]
> **Tech Stack Selected by User**:
> - Framework: **React + Vite + Framer Motion + Vanilla CSS**
> - Assets: **Curated high-resolution royalty-free photography** (Unsplash/Pexels architectural, city, and nature photography)
> - Smooth Scrolling: **Lenis Smooth Scroll** (`lenis`) for authentic Framer-grade momentum scroll physics.
> - Accessibility: **WCAG 2.2 AA compliant** contrast, keyboard focus indicators, and ARIA landmarks.

---

## Proposed Sequential Implementation

### Phase 1: Project Setup & Design System Tokens (Prompt 01)
- Initialize Vite React TypeScript/JavaScript application in the workspace root.
- Install dependencies: `framer-motion`, `lenis`, `lucide-react`.
- Configure `tokens.css`:
  - Colors: `--color-surface-base: #000000`, `--color-surface-muted: #ffffff`, `--color-accent-orange: #f56e0f`, `--color-accent-blue: #0000ee`, neutral tones.
  - Fonts: Google Fonts `Work Sans` (weights 500, 700, 900) & `Inter` (weights 400, 500, 700).
  - Typography scale: `12px` up to `clamp(80px, 14vw, 190px)` display hero.
  - Spacing, easing curves (`--ease-framer-spring`), and responsive breakpoints (`810px`, `1200px`).
- Set up Lenis smooth scrolling in `App.jsx`.

### Phase 2: Fixed Header & Navigation (Prompt 02)
- Build `<Header />` component:
  - Fixed 74px height, z-index 100, backdrop-filter blur on scroll past 24px.
  - Left brand lockup: `mona.` / `euphorya` lowercase heavy display typography.
  - Right nav items: `Gallery`, `About`, `Journal`, `Contact` with smooth anchor scrolling and active section highlighting.
  - Responsive mobile drawer (<810px) with animated hamburger-to-cross icon and staggered entrance links.

### Phase 3: Hero Section & Floating Media Cards (Prompt 03)
- Build `<Hero />` component:
  - Monumental stacked typography: `"mona"` / `"euphorya"` in Work Sans 900.
  - 3 floating image cards positioned around text (top-left, right, bottom-left) with:
    - Mouse movement parallax displacement (interpolated with spring physics).
    - Cyclic 3.5-second crossfade slideshow across multiple curated high-res photos.
  - Revolving circular seal badge at bottom center with infinite spin animation (`16s linear infinite`) and smooth scroll jump to `#intro`.

### Phase 4: Intro Manifesto & Interactive Denmark Map (Prompt 04)
- Build `<IntroSection />` component:
  - Top row: `"Photographer based in Copenhagen, Denmark."` with `"Copenhagen"` in accent orange `#f56e0f`.
  - SVG vector Denmark map silhouette with animated pulsing radar pin on Copenhagen (`55.6761° N, 12.5683° E`).
  - Scroll-scrub manifesto: 3 statement paragraphs that scrub from muted gray (`rgba(0,0,0,0.16)`) to solid black (`#000000`) based on viewport scroll progress.
  - Primary contact trigger: `"contact hello@monaeuphorya.com"`.

### Phase 5: Editorial Asymmetric Gallery, Typography Accents & Project Modal (Prompt 05)
- Build `<Gallery />` component:
  - Asymmetrical 12-column grid with alternating left, right, and center photo placements.
  - High-resolution editorial photography catalog (20 items across Mexico, Japan, Spain, Croatia, Sweden, Greece, China, Canada, Germany, etc.).
  - Interstitial typographic accents:
    - Vertical rotated quote 1: `"The quietest moments often become the ones we remember."`
    - Orange callout: `Available worldwide.`
    - Vertical email slug: `hello@monaeuphorya.com`
    - Vertical rotated quote 2: `"Light changes everything"`
    - Horizontal statement: `"Observing the ordinary."`
  - Floating custom cursor: smooth magnetic orange `"view"` pill when hovering over gallery cards.
  - Full-screen Project Detail Modal (`<ProjectModal />`):
    - Split-screen view when any photo is clicked: title, country tag in orange, booking CTA, high-res photo, keyboard `Esc` / `ArrowLeft` / `ArrowRight` navigation.

### Phase 6: Polishing, Verification & Git Push
- Verification across screen sizes: Desktop (1440px), Tablet (810px), Mobile (390px).
- Verify 60fps animations, smooth scrolling, and keyboard accessibility.
- Commit all source files, documentation, and push to GitHub origin (`girishlade111/monaeuphorya-one`).

---

## Verification Plan

### Automated Tests & Linting
- `npm run build` (ensure clean TypeScript/Vite production bundle without errors or missing assets).
- Check responsive styling breakpoints using browser subagent or dev server testing.

### Manual / Visual Verification
- Launch local development server (`npm run dev`) and test with browser subagent.
- Validate:
  1. Header fixed positioning and mobile toggle.
  2. Hero typography scaling and floating cards parallax & crossfade.
  3. Denmark map pulsing pin and scroll-scrub manifesto contrast.
  4. Asymmetrical gallery cadence, vertical text orientation, and custom cursor pill.
  5. Project detail modal opening, next/prev navigation, and closing.
