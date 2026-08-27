# Prompt 05: Asymmetrical Editorial Gallery Grid & Interstitial Typography

## Objective
Construct the responsive, asymmetrical editorial gallery grid featuring staggered multi-column image placements, interspersed vertical and horizontal typography callouts, differential scroll parallax, and interactive image hover zoom.

---

## 1. Reference Media & Gallery Flow
- **Reference Video**: `00:17 - 00:28` and `00:42 - 01:02`.
- **Reference Image**: Continuous vertical feed with staggered photo rhythm and vertical typographic accents.
- **Design Philosophy**: Asymmetric rhythm with generous whitespace, avoiding rigid column grids to evoke an editorial art book.

---

## 2. Complete Asset & Interstitial Roster
Here is the curated sequence of 20 photographs and editorial typography accents:

| Index | Asset URL | Placement | Caption / Title | Location | Aspect Ratio |
|-------|-----------|-----------|-----------------|----------|--------------|
| 1 | `.../7cWWsXHC0oXxwjPmbvfc7NkTSM.jpg` | Col Left (Offset Top) | Dark, Spiraling Architecture | Mexico | 3:4 (0.67) |
| **Quote** | *Vertical 90° Accent* | Center Gutter | `"The quietest moments often become the ones we remember."` | — | Text |
| 2 | `.../DUvIxnAMJmnO4RIPtnTKtRAeRg0.jpg` | Col Right | Warm Lantern Food Stall at Night | Japan | 2:3 (0.67) |
| 3 | `.../StgY37mf7LRcyHHLNnn3UGVhOc.jpg` | Col Center-Left | Vibrant Building Facade with Artwork | Tokyo | 3:4 (0.75) |
| 4 | `.../O1Vv1i4KwPXiUHfkmUDzyPCK8.jpg` | Col Right (Offset) | Geometric White Balcony Shadows | Spain | 2:3 (0.67) |
| 5 | `.../8v2Q3WSH40mxwHixVXxrThSPpFc.jpg` | Col Left | Dark Narrow Alleyway with Antique Lamp | Croatia | 2:3 (0.67) |
| **Text** | *Accent Highlight* | Col Left Below Item 5 | `Available worldwide.` (Color: `#f56e0f`) | — | Text |
| 6 | `.../8FHwZXGnNnMsSoYbqpovEHK0ATk.jpg` | Col Right | Triangular Building Shaft Cloud Sky | Sweden | 2:3 (0.67) |
| 7 | `.../haU65NcCeKaqoJdLE1IJRGKrNY.jpg` | Col Left | Sea Stacks & Rock Arches Sunset | Greece | 3:4 (0.75) |
| **Email** | *Vertical 90° Slug* | Right Margin | `hello@monaeuphorya.com` | — | Text |
| 8 | `.../lWnxOHDyUsY1VuudL38yYGxjc4o.jpg` | Col Right | Glowing Neon Signs & Storefronts | China | 2:3 (0.67) |
| 9 | `.../sUyNEgObBQ0Dgs6Tl8jsbNwpwo.jpg` | Col Center-Left | Grizzly Bear in Rushing River | Canada | 3:4 (0.75) |
| 10 | `.../SI6jUoJwB10AR2U8ClCI69qHegU.jpg` | Col Right | Star Trails Over Night Forest Lake | Sweden | 9:16 (0.56) |
| **Quote** | *Vertical 90° Accent* | Left Margin | `"Light changes everything"` | — | Text |
| 11 | `.../19BPZvZxzaC4YIKbO5VXJtTba4w.jpg` | Col Left | Red Architectural Tile Facade | Denmark | 3:4 (0.74) |
| 12 | `.../1T6zbe8MbH99SDbNP4ZRI9nwU.jpg` | Col Right | Night Traffic & Historic Station | Tokyo | 2:3 (0.67) |
| 13 | `.../vJM1HLfCKvjIET7t43mU7h3190.jpg` | Col Left | Museum Wooden Dome Ceiling | Norway | 4:3 (1.33) |
| 14 | `.../5QuuohMU0ZvdR6N61Mb4QQGkak.jpg` | Col Right | Glass Facade Curving Structure | Germany | 2:3 (0.67) |
| 15 | `.../qYqYs6eX5cRNZexHFgQIRtDoU.jpg` | Col Center | Palm Trees & Doorway Facade | Havana | 3:4 (0.75) |
| 16 | `.../Jg9KLfldQ945W7TmCTwuYpOSbb4.jpg` | Col Center-Right | Kyoto Pavement Calligraphy Alley | Japan | 2:3 (0.67) |
| 17 | `.../YE26DCoLI1HHmyybkTf57RZEyes.jpg` | Col Left | Woman in Red Dress Rock Wall | Italy | 3:4 (0.75) |
| 18 | `.../eI9b30EAvoTRnOQLycd9dJZatfQ.jpg` | Col Right | Deadvlei Desert Solitary Tree | Namibia | 2:3 (0.67) |
| 19 | `.../wrUNeA2G78GMX7CJ2DzmqOQcOEM.jpg` | Col Left | Cyan Neon Light in Foggy Forest | Iceland | 1:1 (1.00) |
| **Quote** | *Horizontal Statement* | Col Right Bottom | `"Observing the ordinary."` | — | Text |
| 20 | `.../u0p8sqlDZDMgwNDIokLmZ92Rb8.jpg` | Col Right | Blurred City Skyscraper Motion | New York | 2:3 (0.67) |

*(All image paths prepend `https://framerusercontent.com/images/`)*

---

## 3. Grid Markup & CSS Implementation
```html
<section id="gallery" class="editorial-gallery" aria-label="Selected Works">
  <div class="gallery-container">
    
    <!-- Item 1: Spiral Arch -->
    <article class="gallery-item item--left" data-slug="mexico-spiraling-architecture">
      <a href="#/gallery/mexico-spiraling-architecture" class="gallery-link" aria-label="View Mexico Spiraling Architecture">
        <div class="image-wrapper">
          <img src="https://framerusercontent.com/images/7cWWsXHC0oXxwjPmbvfc7NkTSM.jpg" alt="Mexico Spiraling Architecture" loading="lazy" />
        </div>
      </a>
    </article>

    <!-- Vertical Interstitial Quote 1 -->
    <div class="interstitial interstitial--vertical vertical-quote-1" aria-hidden="true">
      <span>"The quietest moments often become the ones we remember."</span>
    </div>

    <!-- Item 2: Japan Food Stall -->
    <article class="gallery-item item--right" data-slug="japan-warm-lantern-food-stall">
      <a href="#/gallery/japan-warm-lantern-food-stall" class="gallery-link" aria-label="View Japan Lantern Food Stall">
        <div class="image-wrapper">
          <img src="https://framerusercontent.com/images/DUvIxnAMJmnO4RIPtnTKtRAeRg0.jpg" alt="Japan Lantern Food Stall" loading="lazy" />
        </div>
      </a>
    </article>

    <!-- Item 5: Croatia Narrow Alleyway -->
    <article class="gallery-item item--left" data-slug="croatia-dark-narrow-alleyway">
      <a href="#/gallery/croatia-dark-narrow-alleyway" class="gallery-link" aria-label="View Croatia Narrow Alleyway">
        <div class="image-wrapper">
          <img src="https://framerusercontent.com/images/8v2Q3WSH40mxwHixVXxrThSPpFc.jpg" alt="Croatia Dark Narrow Alleyway" loading="lazy" />
        </div>
      </a>
    </article>

    <!-- Orange Worldwide Callout -->
    <div class="interstitial interstitial--worldwide">
      <span>Available worldwide.</span>
    </div>

    <!-- ...remaining items structured according to layout table above... -->

  </div>
</section>
```

### CSS Layout Rules
```css
.editorial-gallery {
  position: relative;
  width: 100%;
  padding: 80px 0;
}

.gallery-container {
  max-width: var(--container-max-width);
  margin: 0 auto;
  padding: 0 clamp(20px, 4vw, 60px);
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  row-gap: clamp(60px, 10vw, 140px);
  align-items: center;
}

/* Asymmetrical Column Alignments */
.item--left {
  grid-column: 1 / span 5;
}

.item--right {
  grid-column: 8 / span 5;
}

.item--center-left {
  grid-column: 3 / span 5;
}

.item--center-right {
  grid-column: 6 / span 6;
}

.item--center {
  grid-column: 4 / span 6;
}

/* Image Wrappers & Hover Zoom */
.gallery-item .image-wrapper {
  position: relative;
  overflow: hidden;
  background-color: #f5f5f5;
}

.gallery-item img {
  width: 100%;
  height: auto;
  display: block;
  transition: transform 600ms cubic-bezier(0.16, 1, 0.3, 1), filter 600ms ease;
  will-change: transform;
}

.gallery-item:hover img {
  transform: scale(1.035);
}

/* Vertical Rotated Typography */
.interstitial--vertical {
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  font-family: var(--font-family-primary);
  font-weight: 700;
  font-size: clamp(22px, 2.8vw, 36px);
  letter-spacing: -0.02em;
  color: #000000;
  white-space: nowrap;
  grid-column: 6 / span 2;
  justify-self: center;
}

.interstitial--worldwide {
  grid-column: 1 / span 6;
  font-family: var(--font-family-primary);
  font-weight: 700;
  font-size: clamp(24px, 3.2vw, 44px);
  color: var(--color-accent-orange);
  letter-spacing: -0.02em;
  margin-top: -30px;
}

/* Mobile Responsiveness */
@media (max-width: 809.98px) {
  .gallery-container {
    display: flex;
    flex-direction: column;
    row-gap: 50px;
  }
  .item--left, .item--right, .item--center-left, .item--center-right, .item--center {
    width: 100%;
  }
  .interstitial--vertical {
    writing-mode: horizontal-tb;
    transform: none;
    white-space: normal;
    text-align: left;
    margin: 20px 0;
  }
}
```

---

## 4. Acceptance Criteria
1. Grid renders with varied asymmetrical cadence replicating the live site and video.
2. Vertical rotated quotes render sharply and align cleanly to adjacent photo gutters.
3. Images zoom smoothly without stutter upon hover.
4. Mobile layout transforms effortlessly into a single column feed with vertical quotes switching to horizontal typography.
