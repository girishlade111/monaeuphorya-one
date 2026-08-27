# Prompt 03: Hero Section, Monumental Typography & Floating Media Cards

## Objective
Build the signature Hero section from Mona Euphorya featuring gigantic stacked display typography, interactive floating photography cards with cyclic crossfade transitions, subtle mouse parallax physics, and the revolving circular seal.

---

## 1. Reference Media & Visual Analysis
- **Reference Video**: `00:00 - 00:10`.
- **Reference Image**: Top fold showing massive `"mona euphorya"` typography flanked by staggered architectural and nature images.
- **Live Assets**:
  - Top-Left Photo Set: `https://framerusercontent.com/images/StgY37mf7LRcyHHLNnn3UGVhOc.jpg`, `https://framerusercontent.com/images/7cWWsXHC0oXxwjPmbvfc7NkTSM.jpg`, `https://framerusercontent.com/images/DUvIxnAMJmnO4RIPtnTKtRAeRg0.jpg`.
  - Bottom-Left Photo Set: `https://framerusercontent.com/images/SI6jUoJwB10AR2U8ClCI69qHegU.jpg`, `https://framerusercontent.com/images/8FHwZXGnNnMsSoYbqpovEHK0ATk.jpg`.
  - Right Photo Set: `https://framerusercontent.com/images/wrUNeA2G78GMX7CJ2DzmqOQcOEM.jpg`, `https://framerusercontent.com/images/19BPZvZxzaC4YIKbO5VXJtTba4w.jpg`, `https://framerusercontent.com/images/vJM1HLfCKvjIET7t43mU7h3190.jpg`.

---

## 2. Hero DOM Structure
```html
<section id="hero" class="hero-section" aria-label="Introduction">
  <div class="hero-container">
    
    <!-- Floating Card 1: Top Left -->
    <div class="floating-card floating-card--top-left" data-speed="0.04">
      <div class="card-inner slideshow">
        <img src="https://framerusercontent.com/images/StgY37mf7LRcyHHLNnn3UGVhOc.jpg" alt="Urban architecture in Tokyo" class="slide active">
        <img src="https://framerusercontent.com/images/7cWWsXHC0oXxwjPmbvfc7NkTSM.jpg" alt="Spiral staircase Mexico" class="slide">
        <img src="https://framerusercontent.com/images/DUvIxnAMJmnO4RIPtnTKtRAeRg0.jpg" alt="Japanese restaurant lantern" class="slide">
      </div>
    </div>

    <!-- Monumental Typography -->
    <div class="hero-title-wrapper">
      <h1 class="hero-title">
        <span class="hero-word word-mona">mona</span>
        <span class="hero-word word-euphorya">euphorya</span>
      </h1>
    </div>

    <!-- Floating Card 2: Right -->
    <div class="floating-card floating-card--right" data-speed="-0.03">
      <div class="card-inner slideshow">
        <img src="https://framerusercontent.com/images/wrUNeA2G78GMX7CJ2DzmqOQcOEM.jpg" alt="Cyan neon in dark foggy forest" class="slide active">
        <img src="https://framerusercontent.com/images/19BPZvZxzaC4YIKbO5VXJtTba4w.jpg" alt="Red illuminated building facade" class="slide">
        <img src="https://framerusercontent.com/images/vJM1HLfCKvjIET7t43mU7h3190.jpg" alt="Architectural dome interior" class="slide">
      </div>
    </div>

    <!-- Floating Card 3: Bottom Left -->
    <div class="floating-card floating-card--bottom-left" data-speed="0.025">
      <div class="card-inner slideshow">
        <img src="https://framerusercontent.com/images/SI6jUoJwB10AR2U8ClCI69qHegU.jpg" alt="Aurora borealis over forest lake" class="slide active">
        <img src="https://framerusercontent.com/images/8FHwZXGnNnMsSoYbqpovEHK0ATk.jpg" alt="Green chameleon detail" class="slide">
      </div>
    </div>

    <!-- Revolving Circular Seal -->
    <a href="#intro" class="hero-badge" aria-label="Scroll to introduction">
      <svg class="badge-icon rotating" viewBox="0 0 100 100" width="60" height="60">
        <circle cx="50" cy="50" r="46" fill="none" stroke="#000000" stroke-width="1.5" stroke-dasharray="4 3" />
        <path d="M 50 20 L 50 80 M 20 50 L 80 50 M 29 29 L 71 71 M 29 71 L 71 29" stroke="#000000" stroke-width="2" stroke-linecap="round" />
      </svg>
    </a>

  </div>
</section>
```

---

## 3. Visual Styling & Positioning
- **Hero Section**: `min-height: 100vh; width: 100%; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center; padding-top: var(--header-height);`.
- **Hero Headline (`.hero-title`)**:
  - `font-family: var(--font-family-primary);`
  - `font-weight: 900;`
  - `font-size: clamp(80px, 14vw, 190px);`
  - `line-height: 0.88;`
  - `letter-spacing: -0.05em;`
  - `color: #000000;`
  - Display: Flexbox column; text-transform: lowercase.
  - Position: relative; `z-index: 2`.
- **Floating Cards Dimensions & Placement**:
  - Card 1 (Top Left): `width: clamp(140px, 16vw, 240px); aspect-ratio: 3/4; top: 12%; left: 8%; z-index: 3;`.
  - Card 2 (Right): `width: clamp(160px, 18vw, 280px); aspect-ratio: 4/3; top: 38%; right: 7%; z-index: 3;`.
  - Card 3 (Bottom Left): `width: clamp(110px, 12vw, 180px); aspect-ratio: 16/9; bottom: 8%; left: 4%; z-index: 1;`.
  - All cards have subtle box-shadow: `0 12px 36px rgba(0, 0, 0, 0.08)`, border-radius `2px`, and `overflow: hidden`.

---

## 4. Animation & Interaction Specifications
1. **Entrance Choreography**:
   - Headline letters stagger fade and slide up (`opacity: 0 -> 1; transform: translateY(40px) -> translateY(0); duration: 900ms; cubic-bezier(0.16, 1, 0.3, 1)`).
   - Floating cards scale smoothly into position (`transform: scale(0.92) -> scale(1); opacity: 0 -> 1; duration: 1100ms; delay: 300ms`).
2. **Interactive Parallax**:
   - Bind to `mousemove` on desktop: calculate normalized mouse offsets `(-0.5 to 0.5)`. Apply proportional translations to cards based on `data-speed` with `requestAnimationFrame` interpolation.
3. **Slideshow Crossfade**:
   - Every 3.5 seconds, advance each card's slide:
     - Outgoing image: `opacity: 0; transform: scale(1.04); transition: opacity 900ms ease, transform 1200ms ease`.
     - Incoming image: `opacity: 1; transform: scale(1); transition: opacity 900ms ease, transform 1200ms ease`.
4. **Revolving Badge**:
   - Continuous rotation: `animation: spin 16s linear infinite;`.
   - Hover state: accelerates slightly (`8s`) with subtle scale up (`transform: scale(1.1)`).

---

## 5. Acceptance Criteria
1. Typography scales smoothly across mobile (390px), tablet (810px), and desktop (1200px+) without clipping.
2. Floating cards never overlap in an unreadable manner with the core text.
3. Mouse parallax is butter-smooth (60fps+) and automatically disabled on touch devices.
4. Image slideshow loops cleanly without layout flashes.
