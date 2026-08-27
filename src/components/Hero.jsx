import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { heroSlides } from '../data/galleryData';
import './Hero.css';

export default function Hero() {
  const [topLeftIdx, setTopLeftIdx] = useState(0);
  const [rightIdx, setRightIdx] = useState(0);
  const [bottomLeftIdx, setBottomLeftIdx] = useState(0);

  // Mouse parallax springs
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Slideshow interval
  useEffect(() => {
    const timer = setInterval(() => {
      setTopLeftIdx((prev) => (prev + 1) % heroSlides.topLeft.length);
      setRightIdx((prev) => (prev + 1) % heroSlides.right.length);
      setBottomLeftIdx((prev) => (prev + 1) % heroSlides.bottomLeft.length);
    }, 3800);
    return () => clearInterval(timer);
  }, []);

  // Mouse move handler
  const handleMouseMove = (e) => {
    if (window.matchMedia('(pointer: coarse)').matches) return;
    const { innerWidth, innerHeight } = window;
    const x = (e.clientX / innerWidth - 0.5) * 25;
    const y = (e.clientY / innerHeight - 0.5) * 25;
    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <section
      id="hero"
      className="hero-section"
      onMouseMove={handleMouseMove}
      aria-label="Hero Showcase"
    >
      <div className="hero-content">

        {/* Floating Card 1: Top-Left */}
        <motion.div
          className="hero-card hero-card--top-left"
          style={{
            x: useSpring(smoothX, { damping: 30, stiffness: 100 }),
            y: useSpring(smoothY, { damping: 30, stiffness: 100 })
          }}
          initial={{ opacity: 0, scale: 0.92, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          <div className="card-media-wrapper">
            {heroSlides.topLeft.map((src, idx) => (
              <img
                key={src}
                src={src}
                alt="Selected portfolio preview"
                className={`hero-slide-img ${idx === topLeftIdx ? 'active' : ''}`}
                loading="eager"
              />
            ))}
          </div>
        </motion.div>

        {/* Monumental Hero Headline */}
        <div className="hero-title-container">
          <motion.h1
            className="hero-display-title"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.15, delayChildren: 0.1 }
              }
            }}
          >
            <motion.span
              className="hero-word word-mona"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] }
                }
              }}
            >
              mona
            </motion.span>
            <motion.span
              className="hero-word word-euphorya"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] }
                }
              }}
            >
              euphorya
            </motion.span>
          </motion.h1>
        </div>

        {/* Floating Card 2: Right */}
        <motion.div
          className="hero-card hero-card--right"
          style={{
            x: useSpring(smoothX, { damping: 35, stiffness: 80 }),
            y: useSpring(smoothY, { damping: 35, stiffness: 80 })
          }}
          initial={{ opacity: 0, scale: 0.92, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
        >
          <div className="card-media-wrapper">
            {heroSlides.right.map((src, idx) => (
              <img
                key={src}
                src={src}
                alt="Selected portfolio preview"
                className={`hero-slide-img ${idx === rightIdx ? 'active' : ''}`}
                loading="eager"
              />
            ))}
          </div>
        </motion.div>

        {/* Floating Card 3: Bottom-Left */}
        <motion.div
          className="hero-card hero-card--bottom-left"
          style={{
            x: useSpring(smoothX, { damping: 25, stiffness: 120 }),
            y: useSpring(smoothY, { damping: 25, stiffness: 120 })
          }}
          initial={{ opacity: 0, scale: 0.92, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.45 }}
        >
          <div className="card-media-wrapper">
            {heroSlides.bottomLeft.map((src, idx) => (
              <img
                key={src}
                src={src}
                alt="Selected portfolio preview"
                className={`hero-slide-img ${idx === bottomLeftIdx ? 'active' : ''}`}
                loading="eager"
              />
            ))}
          </div>
        </motion.div>

        {/* Revolving Circular Seal Badge */}
        <a
          href="#about"
          className="hero-seal-badge"
          aria-label="Scroll down to introduction"
          onClick={(e) => {
            e.preventDefault();
            (document.querySelector('#about') || document.querySelector('#intro'))?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <svg className="seal-svg" viewBox="0 0 100 100" width="56" height="56">
            <circle cx="50" cy="50" r="46" fill="none" stroke="#000000" strokeWidth="1.2" strokeDasharray="3 3" />
            <circle cx="50" cy="50" r="28" fill="none" stroke="#000000" strokeWidth="1" />
            <path d="M 50 12 L 50 88 M 12 50 L 88 50 M 23 23 L 77 77 M 23 77 L 77 23" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="50" cy="50" r="4" fill="#000000" />
          </svg>
        </a>

      </div>
    </section>
  );
}
