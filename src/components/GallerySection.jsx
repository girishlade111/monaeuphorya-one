import React from 'react';
import { motion } from 'framer-motion';
import { galleryItems } from '../data/galleryData';
import './GallerySection.css';

export default function GallerySection({ onSelectPhoto, setCursorState }) {
  // Group elements or render them with interstitials embedded in sequence
  return (
    <section id="gallery" className="editorial-gallery" aria-label="Selected Works">
      <div className="gallery-container">

        {/* Item 1: Mexico */}
        <article className="gallery-item item--left" data-slug={galleryItems[0]?.slug}>
          <button
            type="button"
            className="gallery-card-btn"
            onClick={() => onSelectPhoto(0)}
            onMouseEnter={() => setCursorState?.('view')}
            onMouseLeave={() => setCursorState?.(null)}
            aria-label={`View ${galleryItems[0]?.title}`}
          >
            <div className="image-wrapper">
              <img
                src={galleryItems[0]?.image}
                alt={galleryItems[0]?.title}
                loading="lazy"
              />
            </div>
            <div className="item-caption">
              <span className="item-location">{galleryItems[0]?.location}</span>
              <span className="item-title">{galleryItems[0]?.title}</span>
            </div>
          </button>
        </article>

        {/* Vertical Interstitial Quote 1 */}
        <div className="interstitial interstitial--vertical vertical-quote-1" aria-hidden="true">
          <span>"The quietest moments often become the ones we remember."</span>
        </div>

        {/* Item 2: Japan */}
        <article className="gallery-item item--right" data-slug={galleryItems[1]?.slug}>
          <button
            type="button"
            className="gallery-card-btn"
            onClick={() => onSelectPhoto(1)}
            onMouseEnter={() => setCursorState?.('view')}
            onMouseLeave={() => setCursorState?.(null)}
            aria-label={`View ${galleryItems[1]?.title}`}
          >
            <div className="image-wrapper">
              <img
                src={galleryItems[1]?.image}
                alt={galleryItems[1]?.title}
                loading="lazy"
              />
            </div>
            <div className="item-caption">
              <span className="item-location">{galleryItems[1]?.location}</span>
              <span className="item-title">{galleryItems[1]?.title}</span>
            </div>
          </button>
        </article>

        {/* Item 3: Tokyo */}
        <article className="gallery-item item--center-left" data-slug={galleryItems[2]?.slug}>
          <button
            type="button"
            className="gallery-card-btn"
            onClick={() => onSelectPhoto(2)}
            onMouseEnter={() => setCursorState?.('view')}
            onMouseLeave={() => setCursorState?.(null)}
            aria-label={`View ${galleryItems[2]?.title}`}
          >
            <div className="image-wrapper">
              <img
                src={galleryItems[2]?.image}
                alt={galleryItems[2]?.title}
                loading="lazy"
              />
            </div>
            <div className="item-caption">
              <span className="item-location">{galleryItems[2]?.location}</span>
              <span className="item-title">{galleryItems[2]?.title}</span>
            </div>
          </button>
        </article>

        {/* Item 4: Spain */}
        <article className="gallery-item item--right" data-slug={galleryItems[3]?.slug}>
          <button
            type="button"
            className="gallery-card-btn"
            onClick={() => onSelectPhoto(3)}
            onMouseEnter={() => setCursorState?.('view')}
            onMouseLeave={() => setCursorState?.(null)}
            aria-label={`View ${galleryItems[3]?.title}`}
          >
            <div className="image-wrapper">
              <img
                src={galleryItems[3]?.image}
                alt={galleryItems[3]?.title}
                loading="lazy"
              />
            </div>
            <div className="item-caption">
              <span className="item-location">{galleryItems[3]?.location}</span>
              <span className="item-title">{galleryItems[3]?.title}</span>
            </div>
          </button>
        </article>

        {/* Item 5: Croatia */}
        <article className="gallery-item item--left" data-slug={galleryItems[4]?.slug}>
          <button
            type="button"
            className="gallery-card-btn"
            onClick={() => onSelectPhoto(4)}
            onMouseEnter={() => setCursorState?.('view')}
            onMouseLeave={() => setCursorState?.(null)}
            aria-label={`View ${galleryItems[4]?.title}`}
          >
            <div className="image-wrapper">
              <img
                src={galleryItems[4]?.image}
                alt={galleryItems[4]?.title}
                loading="lazy"
              />
            </div>
            <div className="item-caption">
              <span className="item-location">{galleryItems[4]?.location}</span>
              <span className="item-title">{galleryItems[4]?.title}</span>
            </div>
          </button>
        </article>

        {/* Orange Worldwide Callout */}
        <div className="interstitial interstitial--worldwide">
          <span>Available worldwide.</span>
        </div>

        {/* Item 6: Sweden */}
        <article className="gallery-item item--right" data-slug={galleryItems[5]?.slug}>
          <button
            type="button"
            className="gallery-card-btn"
            onClick={() => onSelectPhoto(5)}
            onMouseEnter={() => setCursorState?.('view')}
            onMouseLeave={() => setCursorState?.(null)}
            aria-label={`View ${galleryItems[5]?.title}`}
          >
            <div className="image-wrapper">
              <img
                src={galleryItems[5]?.image}
                alt={galleryItems[5]?.title}
                loading="lazy"
              />
            </div>
            <div className="item-caption">
              <span className="item-location">{galleryItems[5]?.location}</span>
              <span className="item-title">{galleryItems[5]?.title}</span>
            </div>
          </button>
        </article>

        {/* Item 7: Greece */}
        <article className="gallery-item item--left" data-slug={galleryItems[6]?.slug}>
          <button
            type="button"
            className="gallery-card-btn"
            onClick={() => onSelectPhoto(6)}
            onMouseEnter={() => setCursorState?.('view')}
            onMouseLeave={() => setCursorState?.(null)}
            aria-label={`View ${galleryItems[6]?.title}`}
          >
            <div className="image-wrapper">
              <img
                src={galleryItems[6]?.image}
                alt={galleryItems[6]?.title}
                loading="lazy"
              />
            </div>
            <div className="item-caption">
              <span className="item-location">{galleryItems[6]?.location}</span>
              <span className="item-title">{galleryItems[6]?.title}</span>
            </div>
          </button>
        </article>

        {/* Email Vertical 90° Slug */}
        <div className="interstitial interstitial--vertical-email">
          <a
            href="mailto:hello@monaeuphorya.com"
            className="email-slug-link"
            onMouseEnter={() => setCursorState?.('email')}
            onMouseLeave={() => setCursorState?.(null)}
          >
            hello@monaeuphorya.com
          </a>
        </div>

        {/* Item 8: China */}
        <article className="gallery-item item--right" data-slug={galleryItems[7]?.slug}>
          <button
            type="button"
            className="gallery-card-btn"
            onClick={() => onSelectPhoto(7)}
            onMouseEnter={() => setCursorState?.('view')}
            onMouseLeave={() => setCursorState?.(null)}
            aria-label={`View ${galleryItems[7]?.title}`}
          >
            <div className="image-wrapper">
              <img
                src={galleryItems[7]?.image}
                alt={galleryItems[7]?.title}
                loading="lazy"
              />
            </div>
            <div className="item-caption">
              <span className="item-location">{galleryItems[7]?.location}</span>
              <span className="item-title">{galleryItems[7]?.title}</span>
            </div>
          </button>
        </article>

        {/* Item 9: Canada */}
        <article className="gallery-item item--center-left" data-slug={galleryItems[8]?.slug}>
          <button
            type="button"
            className="gallery-card-btn"
            onClick={() => onSelectPhoto(8)}
            onMouseEnter={() => setCursorState?.('view')}
            onMouseLeave={() => setCursorState?.(null)}
            aria-label={`View ${galleryItems[8]?.title}`}
          >
            <div className="image-wrapper">
              <img
                src={galleryItems[8]?.image}
                alt={galleryItems[8]?.title}
                loading="lazy"
              />
            </div>
            <div className="item-caption">
              <span className="item-location">{galleryItems[8]?.location}</span>
              <span className="item-title">{galleryItems[8]?.title}</span>
            </div>
          </button>
        </article>

        {/* Item 10: Sweden Astro */}
        <article className="gallery-item item--right" data-slug={galleryItems[9]?.slug}>
          <button
            type="button"
            className="gallery-card-btn"
            onClick={() => onSelectPhoto(9)}
            onMouseEnter={() => setCursorState?.('view')}
            onMouseLeave={() => setCursorState?.(null)}
            aria-label={`View ${galleryItems[9]?.title}`}
          >
            <div className="image-wrapper">
              <img
                src={galleryItems[9]?.image}
                alt={galleryItems[9]?.title}
                loading="lazy"
              />
            </div>
            <div className="item-caption">
              <span className="item-location">{galleryItems[9]?.location}</span>
              <span className="item-title">{galleryItems[9]?.title}</span>
            </div>
          </button>
        </article>

        {/* Vertical Interstitial Quote 2 */}
        <div className="interstitial interstitial--vertical vertical-quote-left" aria-hidden="true">
          <span>"Light changes everything"</span>
        </div>

        {/* Item 11: Denmark */}
        <article className="gallery-item item--left" data-slug={galleryItems[10]?.slug}>
          <button
            type="button"
            className="gallery-card-btn"
            onClick={() => onSelectPhoto(10)}
            onMouseEnter={() => setCursorState?.('view')}
            onMouseLeave={() => setCursorState?.(null)}
            aria-label={`View ${galleryItems[10]?.title}`}
          >
            <div className="image-wrapper">
              <img
                src={galleryItems[10]?.image}
                alt={galleryItems[10]?.title}
                loading="lazy"
              />
            </div>
            <div className="item-caption">
              <span className="item-location">{galleryItems[10]?.location}</span>
              <span className="item-title">{galleryItems[10]?.title}</span>
            </div>
          </button>
        </article>

        {/* Item 12: Japan Traffic */}
        <article className="gallery-item item--right" data-slug={galleryItems[11]?.slug}>
          <button
            type="button"
            className="gallery-card-btn"
            onClick={() => onSelectPhoto(11)}
            onMouseEnter={() => setCursorState?.('view')}
            onMouseLeave={() => setCursorState?.(null)}
            aria-label={`View ${galleryItems[11]?.title}`}
          >
            <div className="image-wrapper">
              <img
                src={galleryItems[11]?.image}
                alt={galleryItems[11]?.title}
                loading="lazy"
              />
            </div>
            <div className="item-caption">
              <span className="item-location">{galleryItems[11]?.location}</span>
              <span className="item-title">{galleryItems[11]?.title}</span>
            </div>
          </button>
        </article>

        {/* Item 13: Norway */}
        <article className="gallery-item item--left" data-slug={galleryItems[12]?.slug}>
          <button
            type="button"
            className="gallery-card-btn"
            onClick={() => onSelectPhoto(12)}
            onMouseEnter={() => setCursorState?.('view')}
            onMouseLeave={() => setCursorState?.(null)}
            aria-label={`View ${galleryItems[12]?.title}`}
          >
            <div className="image-wrapper">
              <img
                src={galleryItems[12]?.image}
                alt={galleryItems[12]?.title}
                loading="lazy"
              />
            </div>
            <div className="item-caption">
              <span className="item-location">{galleryItems[12]?.location}</span>
              <span className="item-title">{galleryItems[12]?.title}</span>
            </div>
          </button>
        </article>

        {/* Item 14: Germany */}
        <article className="gallery-item item--right" data-slug={galleryItems[13]?.slug}>
          <button
            type="button"
            className="gallery-card-btn"
            onClick={() => onSelectPhoto(13)}
            onMouseEnter={() => setCursorState?.('view')}
            onMouseLeave={() => setCursorState?.(null)}
            aria-label={`View ${galleryItems[13]?.title}`}
          >
            <div className="image-wrapper">
              <img
                src={galleryItems[13]?.image}
                alt={galleryItems[13]?.title}
                loading="lazy"
              />
            </div>
            <div className="item-caption">
              <span className="item-location">{galleryItems[13]?.location}</span>
              <span className="item-title">{galleryItems[13]?.title}</span>
            </div>
          </button>
        </article>

        {/* Item 15: Cuba Havana */}
        <article className="gallery-item item--center" data-slug={galleryItems[14]?.slug}>
          <button
            type="button"
            className="gallery-card-btn"
            onClick={() => onSelectPhoto(14)}
            onMouseEnter={() => setCursorState?.('view')}
            onMouseLeave={() => setCursorState?.(null)}
            aria-label={`View ${galleryItems[14]?.title}`}
          >
            <div className="image-wrapper">
              <img
                src={galleryItems[14]?.image}
                alt={galleryItems[14]?.title}
                loading="lazy"
              />
            </div>
            <div className="item-caption">
              <span className="item-location">{galleryItems[14]?.location}</span>
              <span className="item-title">{galleryItems[14]?.title}</span>
            </div>
          </button>
        </article>

        {/* Item 16: Kyoto */}
        <article className="gallery-item item--center-right" data-slug={galleryItems[15]?.slug}>
          <button
            type="button"
            className="gallery-card-btn"
            onClick={() => onSelectPhoto(15)}
            onMouseEnter={() => setCursorState?.('view')}
            onMouseLeave={() => setCursorState?.(null)}
            aria-label={`View ${galleryItems[15]?.title}`}
          >
            <div className="image-wrapper">
              <img
                src={galleryItems[15]?.image}
                alt={galleryItems[15]?.title}
                loading="lazy"
              />
            </div>
            <div className="item-caption">
              <span className="item-location">{galleryItems[15]?.location}</span>
              <span className="item-title">{galleryItems[15]?.title}</span>
            </div>
          </button>
        </article>

        {/* Item 17: Italy */}
        <article className="gallery-item item--left" data-slug={galleryItems[16]?.slug}>
          <button
            type="button"
            className="gallery-card-btn"
            onClick={() => onSelectPhoto(16)}
            onMouseEnter={() => setCursorState?.('view')}
            onMouseLeave={() => setCursorState?.(null)}
            aria-label={`View ${galleryItems[16]?.title}`}
          >
            <div className="image-wrapper">
              <img
                src={galleryItems[16]?.image}
                alt={galleryItems[16]?.title}
                loading="lazy"
              />
            </div>
            <div className="item-caption">
              <span className="item-location">{galleryItems[16]?.location}</span>
              <span className="item-title">{galleryItems[16]?.title}</span>
            </div>
          </button>
        </article>

        {/* Item 18: Namibia */}
        <article className="gallery-item item--right" data-slug={galleryItems[17]?.slug}>
          <button
            type="button"
            className="gallery-card-btn"
            onClick={() => onSelectPhoto(17)}
            onMouseEnter={() => setCursorState?.('view')}
            onMouseLeave={() => setCursorState?.(null)}
            aria-label={`View ${galleryItems[17]?.title}`}
          >
            <div className="image-wrapper">
              <img
                src={galleryItems[17]?.image}
                alt={galleryItems[17]?.title}
                loading="lazy"
              />
            </div>
            <div className="item-caption">
              <span className="item-location">{galleryItems[17]?.location}</span>
              <span className="item-title">{galleryItems[17]?.title}</span>
            </div>
          </button>
        </article>

        {/* Item 19: Iceland */}
        <article className="gallery-item item--left" data-slug={galleryItems[18]?.slug}>
          <button
            type="button"
            className="gallery-card-btn"
            onClick={() => onSelectPhoto(18)}
            onMouseEnter={() => setCursorState?.('view')}
            onMouseLeave={() => setCursorState?.(null)}
            aria-label={`View ${galleryItems[18]?.title}`}
          >
            <div className="image-wrapper">
              <img
                src={galleryItems[18]?.image}
                alt={galleryItems[18]?.title}
                loading="lazy"
              />
            </div>
            <div className="item-caption">
              <span className="item-location">{galleryItems[18]?.location}</span>
              <span className="item-title">{galleryItems[18]?.title}</span>
            </div>
          </button>
        </article>

        {/* Interstitial 5: Horizontal Statement Quote */}
        <div className="interstitial interstitial--horizontal-quote">
          <span>"Observing the ordinary."</span>
        </div>

        {/* Item 20: New York City */}
        <article className="gallery-item item--right" data-slug={galleryItems[19]?.slug}>
          <button
            type="button"
            className="gallery-card-btn"
            onClick={() => onSelectPhoto(19)}
            onMouseEnter={() => setCursorState?.('view')}
            onMouseLeave={() => setCursorState?.(null)}
            aria-label={`View ${galleryItems[19]?.title}`}
          >
            <div className="image-wrapper">
              <img
                src={galleryItems[19]?.image}
                alt={galleryItems[19]?.title}
                loading="lazy"
              />
            </div>
            <div className="item-caption">
              <span className="item-location">{galleryItems[19]?.location}</span>
              <span className="item-title">{galleryItems[19]?.title}</span>
            </div>
          </button>
        </article>

      </div>
    </section>
  );
}
