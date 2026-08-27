# Prompt 02: Fixed Navigation Bar and Responsive Header

## Objective
Build the fixed sticky header and navigation component inspired by the Mona Euphorya template, supporting smooth desktop navigation, mobile drawer transitions, and keyboard accessibility.

---

## 1. Reference Media & Timestamps
- **Reference Video**: `00:00 - 00:09` & `00:37 - 00:41`.
- **Live Template Reference**: `header.framer-tlyhwu-container`, `height: 74px`.
- **Reference Image**: Top navigation bar with logo lockup and 4 link items.

---

## 2. Component Anatomy & Layout
```
+-------------------------------------------------------------------------------+
| [mona euphorya]                 [Gallery]   [About]   [Journal]   [Contact]   |
+-------------------------------------------------------------------------------+
```

- **Container**: `<header class="site-header" role="banner">`
  - Position: `fixed`, `top: 0`, `left: 0`, `width: 100%`, `height: 74px`.
  - Z-index: `100`.
  - Inner layout: CSS Grid / Flexbox with `justify-content: space-between; align-items: center;`.
  - Padding: `0 clamp(20px, 4vw, 60px)`.
  - Background: `rgba(255, 255, 255, 0.9)` with `backdrop-filter: blur(12px)` when scrolled past 20px, or pure transparent when at top.
  - Border bottom: subtle `1px solid rgba(0,0,0,0.05)` activated on scroll.

- **Logo Lockup (`.brand-logo`)**:
  - Semantic tag: `<a href="/" class="brand-logo" aria-label="Mona Euphorya Home">`
  - Typography: `Work Sans`, `font-weight: 900`, `letter-spacing: -0.04em`, `line-height: 0.95`.
  - Logo Text:
    ```html
    <div class="logo-text">
      <span class="logo-line">mona.</span>
      <span class="logo-line">euphorya</span>
    </div>
    ```
  - Size: `font-size: 19px`.
  - Color: `#000000`.

- **Desktop Navigation (`.nav-menu`)**:
  - Semantic tag: `<nav class="nav-menu" role="navigation" aria-label="Main Navigation">`
  - Menu Items:
    1. `<a href="#gallery" class="nav-link">Gallery</a>`
    2. `<a href="#about" class="nav-link">About</a>`
    3. `<a href="/journal" class="nav-link">Journal</a>`
    4. `<a href="#contact" class="nav-link">Contact</a>`
  - Spacing: `gap: clamp(24px, 3.5vw, 48px)`.
  - Typography: `font-family: var(--font-family-primary); font-size: 15px; font-weight: 500; color: #000000;`.
  - Hover Interaction: Hovering transitions opacity (`opacity: 0.55`) for non-hovered siblings while keeping the hovered link at `opacity: 1`, or adds a subtle sliding underline indicator.

- **Mobile Navigation Drawer (< 810px)**:
  - Hamburger toggle button (`.menu-toggle`) with two animated SVG lines that transition into an 'X'.
  - Fullscreen overlay (`.mobile-nav-overlay`) with `background: #ffffff`, featuring large stacked links (`font-size: 36px`, `font-weight: 700`) with staggered entrance animations (`transform: translateY(20px) -> translateY(0); opacity: 0 -> 1`).
  - Focus trap inside drawer when opened, closes upon pressing `Esc`.

---

## 3. Interactive Behavior & Motion Specs
- **Scroll Detection**: Listen to scroll position; when `window.scrollY > 24px`, apply `.scrolled` class with transition `background 300ms ease, border-color 300ms ease`.
- **Smooth Scroll Links**: Intercept clicks on `#gallery`, `#about`, `#contact`; smoothly animate scroll position using Lenis or `window.scrollTo({ behavior: 'smooth' })`.
- **Active Section Highlighting**: Implement an `IntersectionObserver` observing sections `#gallery`, `#about`, `#contact` to toggle `.active` state on corresponding nav links.

---

## 4. Acceptance Criteria
1. Header stays pinned at top with consistent 74px height.
2. Logo and navigation links correctly align to page grid.
3. Smooth scrolling executes effortlessly to each section without layout jump.
4. Mobile menu functions smoothly at viewports under 810px with clean open/close animations.
5. All interactive elements have accessible keyboard focus outlines and valid ARIA attributes.
