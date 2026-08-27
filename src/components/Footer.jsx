import React from 'react';
import { ArrowUp } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container">
        
        {/* Top Row: Big Logo + Back to Top */}
        <div className="footer-top-row">
          <div className="footer-brand">
            <span className="footer-logo-line">mona.</span>
            <span className="footer-logo-line">euphorya</span>
          </div>

          <button
            type="button"
            className="back-to-top-btn"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp size={16} />
          </button>
        </div>

        {/* Bottom Row: Metadata & Credits */}
        <div className="footer-bottom-row">
          <div className="footer-meta-left">
            <p className="copyright-text">
              © {new Date().getFullYear()} Mona Euphorya. All rights reserved.
            </p>
            <p className="location-text">
              Photographer based in Copenhagen, Denmark.
            </p>
          </div>

          <div className="footer-meta-right">
            <a href="#gallery" className="footer-nav-link">Selected Works</a>
            <span className="footer-sep">•</span>
            <a href="#about" className="footer-nav-link">About & Manifesto</a>
            <span className="footer-sep">•</span>
            <a href="#journal" className="footer-nav-link">Journal</a>
            <span className="footer-sep">•</span>
            <a href="#contact" className="footer-nav-link">Contact</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
