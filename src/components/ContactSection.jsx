import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Send, CheckCircle2 } from 'lucide-react';
import './ContactSection.css';

export default function ContactSection({ setCursorState }) {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    projectType: 'Editorial Commission',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.email || !formState.name) return;
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="contact-section" aria-label="Contact and Commissions">
      <div className="container">
        
        {/* Giant Direct Contact Header */}
        <div className="contact-hero-block">
          <span className="contact-tag">inquiries & commissions</span>
          <h2 className="contact-main-heading">
            Let's create something memorable together.
          </h2>
          <a
            href="mailto:hello@monaeuphorya.com"
            className="contact-mega-email"
            onMouseEnter={() => setCursorState?.('email')}
            onMouseLeave={() => setCursorState?.(null)}
          >
            hello@monaeuphorya.com
            <ArrowUpRight className="contact-email-arrow" size={36} />
          </a>
        </div>

        {/* Two-Column Grid: Representation info & Quick message form */}
        <div className="contact-grid">
          
          {/* Information Column */}
          <div className="contact-info-col">
            <div className="info-group">
              <h3 className="info-heading">Location</h3>
              <p className="info-body">
                Copenhagen, Denmark<br />
                Available worldwide for assignments & commissions.
              </p>
            </div>

            <div className="info-group">
              <h3 className="info-heading">Services</h3>
              <ul className="services-list">
                <li>Editorial & Magazine Features</li>
                <li>Architectural & Interior Documentation</li>
                <li>Commercial Brand Campaigns</li>
                <li>Fine Art Print Editions</li>
              </ul>
            </div>

            <div className="info-group">
              <h3 className="info-heading">Connect</h3>
              <div className="social-links">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
                  Instagram <ArrowUpRight size={14} />
                </a>
                <a href="https://threads.net" target="_blank" rel="noopener noreferrer" className="social-link">
                  Threads <ArrowUpRight size={14} />
                </a>
                <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer" className="social-link">
                  Unsplash <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Message Form */}
          <div className="contact-form-col">
            <h3 className="form-title">Send a direct message</h3>
            
            {isSubmitted ? (
              <motion.div
                className="form-success-box"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <CheckCircle2 size={36} className="success-icon" />
                <h4>Thank you for reaching out!</h4>
                <p>Mona will review your inquiry and get back to you within 24 hours.</p>
                <button
                  type="button"
                  className="reset-form-btn"
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormState({ name: '', email: '', projectType: 'Editorial Commission', message: '' });
                  }}
                >
                  Send another inquiry
                </button>
              </motion.div>
            ) : (
              <form className="inquiry-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="client-name" className="form-label">Your Name</label>
                  <input
                    id="client-name"
                    type="text"
                    required
                    placeholder="e.g. Astrid Lindholm"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="client-email" className="form-label">Email Address</label>
                  <input
                    id="client-email"
                    type="email"
                    required
                    placeholder="e.g. astrid@designstudio.dk"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="project-type" className="form-label">Project Scope</label>
                  <select
                    id="project-type"
                    value={formState.projectType}
                    onChange={(e) => setFormState({ ...formState, projectType: e.target.value })}
                    className="form-select"
                  >
                    <option value="Editorial Commission">Editorial Commission</option>
                    <option value="Architectural Photography">Architectural Photography</option>
                    <option value="Commercial Campaign">Commercial Campaign</option>
                    <option value="Print Inquiries & Licensing">Print Inquiries & Licensing</option>
                    <option value="Other">Other Collaboration</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="client-message" className="form-label">Project Details</label>
                  <textarea
                    id="client-message"
                    rows={4}
                    required
                    placeholder="Tell me about the location, timeframe, and visual goals..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="form-textarea"
                  />
                </div>

                <button type="submit" className="submit-btn">
                  <span>Send Inquiry</span>
                  <Send size={16} />
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
