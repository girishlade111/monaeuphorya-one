import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, MapPin, Tag } from 'lucide-react';
import './PhotoDetailModal.css';

export default function PhotoDetailModal({
  photo,
  isOpen,
  onClose,
  onPrev,
  onNext,
  currentIndex,
  totalPhotos
}) {
  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        onPrev();
      } else if (e.key === 'ArrowRight') {
        onNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    // Prevent background scrolling while modal is open
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen || !photo) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="modal-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-label={`Photo detail: ${photo.title}`}
      >
        <div className="modal-container" onClick={(e) => e.stopPropagation()}>
          {/* Header Controls */}
          <div className="modal-header">
            <div className="modal-counter">
              <span>{String(currentIndex + 1).padStart(2, '0')}</span>
              <span className="counter-divider">/</span>
              <span>{String(totalPhotos).padStart(2, '0')}</span>
            </div>

            <button
              className="modal-close-btn"
              onClick={onClose}
              aria-label="Close photo view"
            >
              <X size={24} />
            </button>
          </div>

          {/* Main Photo & Navigation */}
          <div className="modal-body">
            <button
              className="nav-arrow nav-arrow--prev"
              onClick={onPrev}
              aria-label="Previous photo"
            >
              <ChevronLeft size={32} />
            </button>

            <div className="modal-media-wrapper">
              <motion.img
                key={photo.id}
                src={photo.image}
                alt={photo.title}
                className="modal-image"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              />
            </div>

            <button
              className="nav-arrow nav-arrow--next"
              onClick={onNext}
              aria-label="Next photo"
            >
              <ChevronRight size={32} />
            </button>
          </div>

          {/* Footer Metadata */}
          <div className="modal-footer">
            <div className="modal-meta-left">
              <h3 className="modal-title">{photo.title}</h3>
              {photo.description && (
                <p className="modal-description">{photo.description}</p>
              )}
            </div>

            <div className="modal-meta-right">
              {photo.location && (
                <div className="modal-tag">
                  <MapPin size={14} className="tag-icon" />
                  <span>{photo.location}</span>
                </div>
              )}
              {photo.category && (
                <div className="modal-tag modal-tag--category">
                  <Tag size={14} className="tag-icon" />
                  <span>{photo.category}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
