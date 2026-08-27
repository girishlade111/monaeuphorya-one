import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import './JournalSection.css';

export const journalEntries = [
  {
    id: '01',
    date: 'February 2026',
    title: 'The Geometry of Nordic Silence: Copenhagen in Winter',
    category: 'Field Notes',
    readTime: '4 min read',
    snippet: 'Exploring how low subarctic winter sunlight shapes minimal architectural textures and quiet urban compositions across Eastern Zealand.',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: '02',
    date: 'January 2026',
    title: 'Midnight in Shinjuku: 35mm Analog Chronicles',
    category: 'Documentary',
    readTime: '6 min read',
    snippet: 'Walking through rain-slicked side streets and lantern-lit izakayas with a fixed 35mm lens, capturing unposed cinematic stillness.',
    image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: '03',
    date: 'November 2025',
    title: 'Mediterranean Shadows & White Stucco Curves',
    category: 'Architecture',
    readTime: '5 min read',
    snippet: 'An investigation of sharp sunlit geometric balconies and negative space along coastal cliff dwellings in Spain and Croatia.',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80'
  }
];

export default function JournalSection({ setCursorState }) {
  return (
    <section id="journal" className="journal-section" aria-label="Journal and Essays">
      <div className="container">
        
        {/* Header */}
        <div className="journal-header">
          <div className="journal-header-left">
            <span className="journal-label">journal & essays</span>
            <h2 className="journal-title">Thoughts on light, silence, and observation.</h2>
          </div>
          <div className="journal-header-right">
            <span className="journal-count">03 articles published</span>
          </div>
        </div>

        {/* Journal Grid */}
        <div className="journal-grid">
          {journalEntries.map((entry, index) => (
            <motion.article
              key={entry.id}
              className="journal-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="journal-img-wrapper">
                <img
                  src={entry.image}
                  alt={entry.title}
                  loading="lazy"
                  className="journal-img"
                />
              </div>

              <div className="journal-content">
                <div className="journal-meta">
                  <span className="journal-category">{entry.category}</span>
                  <span className="journal-meta-dot">•</span>
                  <span className="journal-date">{entry.date}</span>
                  <span className="journal-meta-dot">•</span>
                  <span className="journal-time">{entry.readTime}</span>
                </div>

                <h3 className="journal-entry-title">
                  <a
                    href={`#journal-${entry.id}`}
                    className="journal-entry-link"
                    onMouseEnter={() => setCursorState?.('view')}
                    onMouseLeave={() => setCursorState?.(null)}
                  >
                    {entry.title}
                    <ArrowUpRight className="journal-arrow-icon" size={20} />
                  </a>
                </h3>

                <p className="journal-snippet">{entry.snippet}</p>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}
