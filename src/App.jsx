import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import Header from './components/Header';
import Hero from './components/Hero';
import IntroSection from './components/IntroSection';
import GallerySection from './components/GallerySection';
import JournalSection from './components/JournalSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import PhotoDetailModal from './components/PhotoDetailModal';
import { galleryItems } from './data/galleryData';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(null);
  const [cursorState, setCursorState] = useState(null);

  // Initialize Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2
    });

    let animationFrameId;
    function raf(time) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }
    animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
    };
  }, []);

  // Track active section via IntersectionObserver
  useEffect(() => {
    const sectionIds = ['hero', 'about', 'gallery', 'journal', 'contact'];
    const observers = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        { rootMargin: '-30% 0px -60% 0px' }
      );

      observer.observe(el);
      observers.push({ observer, el });
    });

    return () => {
      observers.forEach(({ observer, el }) => observer.unobserve(el));
    };
  }, []);

  // Modal handlers
  const handleOpenPhoto = (index) => {
    setSelectedPhotoIndex(index);
    setCursorState(null);
  };

  const handleClosePhoto = () => {
    setSelectedPhotoIndex(null);
  };

  const handlePrevPhoto = () => {
    setSelectedPhotoIndex((prev) =>
      prev === 0 ? galleryItems.length - 1 : prev - 1
    );
  };

  const handleNextPhoto = () => {
    setSelectedPhotoIndex((prev) =>
      prev === galleryItems.length - 1 ? 0 : prev + 1
    );
  };

  const handleNavigate = (href) => {
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app-layout">
      {/* Skip to Main Content link for accessibility */}
      <a href="#about" className="skip-to-content">
        Skip to main content
      </a>

      {/* Interactive Custom Cursor */}
      <CustomCursor cursorState={cursorState} />

      {/* Pinned Site Header */}
      <Header activeSection={activeSection} onNavigate={handleNavigate} />

      {/* Main Content Sections */}
      <main id="main-content">
        <Hero />
        <IntroSection />
        <GallerySection
          onSelectPhoto={handleOpenPhoto}
          setCursorState={setCursorState}
        />
        <JournalSection setCursorState={setCursorState} />
        <ContactSection setCursorState={setCursorState} />
      </main>

      {/* Site Footer */}
      <Footer />

      {/* Photo Lightbox Modal */}
      <PhotoDetailModal
        isOpen={selectedPhotoIndex !== null}
        photo={selectedPhotoIndex !== null ? galleryItems[selectedPhotoIndex] : null}
        currentIndex={selectedPhotoIndex ?? 0}
        totalPhotos={galleryItems.length}
        onClose={handleClosePhoto}
        onPrev={handlePrevPhoto}
        onNext={handleNextPhoto}
      />
    </div>
  );
}
