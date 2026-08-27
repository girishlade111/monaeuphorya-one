import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './ProjectModal.css';

export default function ProjectModal({ project, items, onClose, onSelectProject }) {
  if (!project) return null;

  const currentIndex = items.findIndex((i) => i.id === project.id);
  const prevProject = items[(currentIndex - 1 + items.length) % items.length];
  const nextProject = items[(currentIndex + 1) % items.length];

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onSelectProject(prevProject);
      if (e.key === 'ArrowRight') onSelectProject(nextProject);
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [project, prevProject, nextProject, onClose, onSelectProject]);

  return (
    <AnimatePresence>
      <motion.div
        className="project-modal-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="project-modal-layout">
          
          {/* Left Column: Metadata & Controls */}
          <motion.div
            className="modal-meta-panel"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Top inquiry notice */}
            <div className="modal-top-inquiry">
              <p className="inquiry-status">Currently accepting projects for 2026—2027.</p>
              <a
                href="#contact"
                className="inquiry-cta-link"
                onClick={(e) => {
                  e.preventDefault();
                  onClose();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Get in touch →
              </a>
            </div>

            {/* Project Title & Location */}
            <div className="modal-title-block">
              <h2 className="modal-project-title">{project.title}</h2>
              <span className="modal-project-location">{project.location}</span>
            </div>

            {/* Bottom Navigation Bar */}
            <div className="modal-bottom-nav">
              <button
                className="modal-nav-btn btn--back"
                onClick={onClose}
                aria-label="Back to Gallery"
              >
                Back to Gallery
              </button>

              <button
                className="modal-nav-btn btn--home"
                onClick={() => {
                  onClose();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                aria-label="Go to Home"
              >
                Home
              </button>

              <div className="modal-prev-next">
                <button
                  className="modal-nav-btn"
                  onClick={() => onSelectProject(prevProject)}
                  aria-label="Previous image"
                >
                  Prev
                </button>
                <span className="nav-separator">/</span>
                <button
                  className="modal-nav-btn"
                  onClick={() => onSelectProject(nextProject)}
                  aria-label="Next image"
                >
                  Next
                </button>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Full-Height Image View */}
          <motion.div
            className="modal-image-panel"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            key={project.id}
          >
            <img
              src={project.image}
              alt={project.title}
              className="modal-hero-photo"
            />
          </motion.div>

        </div>
      </motion.div>
    </AnimatePresence>
  );
}
