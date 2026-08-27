# Prompt 01: Project Architecture, Foundations, and Token-Driven Design System

## Objective
Establish the modern web application architecture, build setup, base styles, CSS variables, and design system tokens for the **Mona Euphorya** portfolio website, strictly adhering to `DESIGN.md` and `SKILL.md`.

---

## 1. Tech Stack & Environment Setup
- **Core Platform**: HTML5, Modern TypeScript/JavaScript, and Vanilla CSS (or lightweight Vite setup with Vanilla CSS for zero-runtime overhead).
- **Smooth Scroll Integration**: Lenis smooth scroll (`@studio-freight/lenis` or native CSS scroll smoothing with customized easing) to replicate Framer's weighted scroll physics.
- **Font Stack**:
  - Primary Display & Headings: `Work Sans` (weights: 500, 700, 900, with italic variants) via Google Fonts / Fontshare.
  - Body & UI: `Inter` / `Inter Display` (weights: 400, 500, 700).
  - Fallbacks: `Work Sans Placeholder`, `sans-serif`.

---

## 2. Token Architecture (`tokens.css`)
Define the following CSS custom properties on `:root`:

```css
:root {
  /* Color Palette */
  --color-surface-base: #000000;
  --color-surface-muted: #ffffff;
  --color-surface-card: #f5f5f5;
  --color-surface-subtle: #fafafa;
  --color-text-primary: #000000;
  --color-text-secondary: #777777;
  --color-text-muted: #999999;
  --color-text-faint: rgba(0, 0, 0, 0.18);
  --color-text-inverse: #ffffff;
  --color-accent-orange: #f56e0f;      /* Brand Accent (Copenhagen, worldwide, buttons) */
  --color-accent-blue: #0000ee;        /* Secondary Link Color */
  --color-border: rgba(0, 0, 0, 0.08);

  /* Typography Scale */
  --font-family-primary: 'Work Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-family-body: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  
  --font-size-xs: 12px;
  --font-size-sm: 15px;
  --font-size-md: 18px;
  --font-size-lg: 24px;
  --font-size-xl: 36px;
  --font-size-2xl: 60px;
  --font-size-3xl: clamp(64px, 11vw, 140px); /* Display Hero Title */
  
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-bold: 700;
  --font-weight-black: 900;

  --line-height-tight: 0.92;
  --line-height-heading: 1.15;
  --line-height-body: 1.45;
  
  --letter-spacing-tighter: -0.04em;
  --letter-spacing-tight: -0.02em;
  --letter-spacing-normal: 0em;

  /* Spacing Scale */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 16px;
  --space-4: 24px;
  --space-5: 40px;
  --space-6: 64px;
  --space-7: 96px;
  --space-8: 128px;

  /* Motion & Transitions */
  --ease-framer-spring: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-smooth: cubic-bezier(0.25, 0.1, 0.25, 1);
  --duration-fast: 200ms;
  --duration-normal: 400ms;
  --duration-slow: 750ms;

  /* Breakpoints */
  --breakpoint-mobile: 809.98px;
  --breakpoint-tablet: 1199.98px;
  --breakpoint-desktop: 1200px;

  /* Header & Navigation Metrics */
  --header-height: 74px;
  --container-max-width: 1440px;
  --container-padding: clamp(20px, 4vw, 60px);
}
```

---

## 3. Global Reset & Baseline Layout (`reset.css`)
- Configure standard border-box box-sizing on all elements.
- Background: Pure White (`#ffffff`), Text: Deep Black (`#000000`).
- Implement smooth scrolling with hardware-accelerated transforms.
- Ensure `-webkit-font-smoothing: antialiased` and `-moz-osx-font-smoothing: grayscale`.
- Style selection highlight (`::selection`) with background `#000000` and text `#ffffff`.
- Establish accessibility focus rings: `:focus-visible` with `outline: 2px solid var(--color-accent-orange); outline-offset: 3px;`.
- Add an accessible `.skip-to-content` link that moves into view upon Tab key press.

---

## 4. Acceptance Criteria
1. Fonts load asynchronously without FOUT (Flash of Unstyled Text) using preconnect and `font-display: swap`.
2. All CSS tokens defined in `DESIGN.md` are accessible as CSS variables.
3. Page background is crisp white, typography renders sharp, and scroll physics are smooth across Safari, Chrome, and Firefox.
4. WCAG 2.2 AA compliant contrast ratio (minimum 4.5:1 for body copy, 3:1 for large text).
