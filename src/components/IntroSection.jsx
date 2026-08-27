import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './IntroSection.css';

function ScrubSentence({ text, progress, range }) {
  const opacity = useTransform(progress, range, [0.18, 1]);
  const y = useTransform(progress, range, [10, 0]);

  return (
    <motion.p
      className="scrub-paragraph"
      style={{ opacity, y }}
    >
      {text}
    </motion.p>
  );
}

export default function IntroSection() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 0.8', 'end 0.3']
  });

  return (
    <section id="about" className="intro-section" ref={sectionRef} aria-label="About Mona Euphorya">
      <div className="container">
        
        {/* Top Header: Location Headline + Vector Denmark Map */}
        <div className="intro-header-row">
          <div className="intro-headline-col">
            <h2 className="location-heading">
              Photographer based in{' '}
              <span className="highlight-city">Copenhagen</span>, Denmark.
            </h2>
          </div>

          <div className="intro-map-col" aria-hidden="true">
            <div className="denmark-map-card">
              <svg
                className="denmark-map-svg"
                viewBox="0 0 320 300"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Denmark Silhouette (Jutland peninsula + Zealand + Funen) */}
                <path
                  className="denmark-landmass"
                  d="M105,45 C115,25 140,25 145,55 C150,85 130,105 135,135 C140,165 145,185 125,225 C110,255 85,250 80,215 C75,180 85,155 85,120 C85,85 95,65 105,45 Z
                     M160,165 C175,155 195,160 195,180 C195,200 175,210 160,195 C150,185 150,175 160,165 Z
                     M215,130 C235,120 260,125 270,145 C280,165 270,195 245,195 C225,195 210,180 210,155 C210,140 210,135 215,130 Z"
                  fill="#e8e8e8"
                />

                {/* Copenhagen Beacon Pin on Eastern Zealand (approx coords) */}
                <g className="copenhagen-marker" transform="translate(262, 146)">
                  {/* Expanding Radar Ripple */}
                  <circle className="radar-pulse-ring" cx="0" cy="0" r="18" />
                  {/* Core Orange Pin */}
                  <circle className="pin-center-dot" cx="0" cy="0" r="5" />
                </g>
              </svg>
            </div>
          </div>
        </div>

        {/* Scroll-Scrub Typography Manifesto */}
        <div className="intro-manifesto-container">
          <ScrubSentence
            text="I create quiet visual stories that explore light, architecture, and everyday moments."
            progress={scrollYProgress}
            range={[0.1, 0.35]}
          />
          <ScrubSentence
            text="My work is rooted in simplicity, observation, and the beauty of ordinary places."
            progress={scrollYProgress}
            range={[0.35, 0.6]}
          />
          <ScrubSentence
            text="Available for editorial, commercial, and personal commissions."
            progress={scrollYProgress}
            range={[0.6, 0.85]}
          />
        </div>

        {/* Contact Trigger Block */}
        <div className="intro-contact-block">
          <span className="contact-prefix">contact</span>
          <a href="mailto:hello@monaeuphorya.com" className="contact-main-link">
            hello@monaeuphorya.com
          </a>
        </div>

      </div>
    </section>
  );
}
