# Prompt 04: Intro Manifesto, Scroll-Scrub Reveal & Interactive Denmark Map

## Objective
Implement the biographical introduction section featuring the Denmark vector map with an animated pulsating pin on Copenhagen, alongside a scroll-driven progressive text-reveal (scrub) animation for the photographer's manifesto.

---

## 1. Reference Media & Visual Analysis
- **Reference Video**: `00:10 - 00:16`.
- **Reference Image**: Middle fold showing `"Photographer based in Copenhagen, Denmark."` with orange Copenhagen text, Denmark silhouette map with an orange dot, and 3 high-impact statement paragraphs.
- **Color Tokens**: Accent Orange (`#f56e0f`), Faint Text (`rgba(0, 0, 0, 0.18)`), Active Text (`#000000`).

---

## 2. Section Structure & Semantic Markup
```html
<section id="intro" class="intro-section" aria-label="About Mona Euphorya">
  <div class="intro-container">
    
    <!-- Top Row: Location Headline & Denmark Map -->
    <div class="intro-header-grid">
      <div class="location-col">
        <h2 class="location-heading">
          Photographer based in <span class="highlight-city">Copenhagen</span>, Denmark.
        </h2>
      </div>

      <div class="map-col" aria-hidden="true">
        <div class="denmark-map-wrapper">
          <!-- Scalable SVG map of Denmark -->
          <svg class="denmark-map-svg" viewBox="0 0 320 280" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path class="map-landmass" d="M120 40 C140 30, 160 50, 155 75 C150 95, 130 110, 125 140 C120 170, 135 195, 120 230 C105 240, 90 220, 95 190 C100 160, 85 130, 90 100 C95 70, 105 50, 120 40 Z M195 150 C215 140, 230 155, 235 175 C240 195, 220 210, 205 205 C190 200, 185 180, 185 165 C185 155, 190 152, 195 150 Z M230 120 C250 115, 270 125, 275 145 C280 165, 265 185, 250 185 C235 185, 230 165, 230 145 C230 130, 225 125, 230 120 Z" fill="#eeeeee"/>
            
            <!-- Copenhagen Coordinates Pin (East Zealand) -->
            <g class="copenhagen-pin" transform="translate(262, 142)">
              <circle class="pin-pulse" cx="0" cy="0" r="14" fill="#f56e0f" opacity="0.3"/>
              <circle class="pin-core" cx="0" cy="0" r="5" fill="#f56e0f"/>
            </g>
          </svg>
        </div>
      </div>
    </div>

    <!-- Scroll Scrub Manifesto Paragraphs -->
    <div class="intro-manifesto">
      <p class="scrub-paragraph" data-scrub-index="1">
        I create quiet visual stories that explore light, architecture, and everyday moments.
      </p>
      <p class="scrub-paragraph" data-scrub-index="2">
        My work is rooted in simplicity, observation, and the beauty of ordinary places.
      </p>
      <p class="scrub-paragraph" data-scrub-index="3">
        Available for editorial, commercial, and personal commissions.
      </p>
    </div>

    <!-- Contact Link Trigger -->
    <div class="intro-contact">
      <span class="contact-label">contact</span>
      <a href="mailto:hello@monaeuphorya.com" class="contact-email-link">
        hello@monaeuphorya.com
      </a>
    </div>

  </div>
</section>
```

---

## 3. Typography & Styling Rules
- **Location Heading (`.location-heading`)**:
  - `font-family: var(--font-family-primary);`
  - `font-weight: 700;`
  - `font-size: clamp(32px, 4.5vw, 60px);`
  - `line-height: 1.05;`
  - `letter-spacing: -0.03em;`
  - `.highlight-city`: `color: #f56e0f;`.
- **Denmark Map Styling**:
  - Map landmass: `fill: #f0f0f0; transition: fill 400ms ease;`.
  - Pin animation:
    ```css
    @keyframes pulseBeacon {
      0% { transform: scale(0.6); opacity: 0.8; }
      100% { transform: scale(2.8); opacity: 0; }
    }
    .pin-pulse {
      transform-origin: center;
      animation: pulseBeacon 2.2s cubic-bezier(0.25, 1, 0.5, 1) infinite;
    }
    ```
- **Scrub Paragraphs (`.scrub-paragraph`)**:
  - `font-family: var(--font-family-primary);`
  - `font-weight: 700;`
  - `font-size: clamp(26px, 3.8vw, 48px);`
  - `line-height: 1.15;`
  - `letter-spacing: -0.03em;`
  - Default state: `color: rgba(0, 0, 0, 0.16); transition: color 400ms ease;`.
  - Active/Scrubbed state: `color: #000000;`.
- **Intro Contact Link**:
  - `.contact-label`: `display: block; font-size: 18px; font-weight: 700; color: #000000; margin-bottom: 4px;`.
  - `.contact-email-link`: `font-size: clamp(24px, 3.5vw, 44px); font-weight: 700; color: #000000; text-decoration: none;`.

---

## 4. Scroll-Scrub Animation Implementation
1. Split paragraph copy by words or span elements, or calculate scroll progress through the `.intro-manifesto` container using an `IntersectionObserver` or scroll listener.
2. As the user scrolls:
   - When paragraph reaches 60% viewport height, transition its color from `rgba(0,0,0,0.16)` to `#000000`.
   - Alternatively, compute linear scroll progress:
     $$\text{progress} = \frac{\text{viewportTop} - \text{elementTop}}{\text{elementHeight}}$$
     Interpolate color channel or opacity smoothly.

---

## 5. Acceptance Criteria
1. Denmark map is cleanly rendered with vector accuracy, and the Copenhagen pin pulses continuously.
2. The city name "Copenhagen" is styled in `#f56e0f`.
3. Manifesto text reveals smoothly line-by-line as the visitor scrolls down.
4. Layout breaks cleanly into a stacked vertical column on mobile devices (<810px).
