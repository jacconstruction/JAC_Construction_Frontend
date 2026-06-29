import React from 'react';
import { motion } from 'framer-motion';
import About from '../components/About';
import CoreValues from '../components/CoreValues';
import TimelineSection from '../components/TimelineSection';

const AboutPage: React.FC = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  return (
    <div className="about-page" style={{ paddingTop: '80px' }}>
      {/* HERO SECTION FOR ABOUT */}
      <section className="about-hero" style={{ 
        background: 'linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85)), url("https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=2000")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '120px 0',
        textAlign: 'center',
        color: '#fff',
        clipPath: 'polygon(0 0, 100% 0, 100% 90%, 50% 100%, 0 90%)',
        marginBottom: '40px'
      }}>
        <div className="container">
          <motion.h4 {...fadeIn} style={{ 
            color: 'var(--primary-yellow)', 
            letterSpacing: '4px', 
            fontWeight: 800, 
            marginBottom: '1rem',
            fontSize: '0.9rem'
          }}>
            OUR JOURNEY
          </motion.h4>

          <motion.h1 {...fadeIn} style={{ 
            fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', 
            fontWeight: 900, 
            lineHeight: 1.1,
            textTransform: 'uppercase'
          }}>
            ARCHITECTING THE <span style={{ color: 'var(--primary-yellow)' }}>FUTURE</span>
          </motion.h1>
          <motion.p {...fadeIn} style={{ 
            fontSize: '1.2rem', 
            color: '#fff', 
            maxWidth: '700px', 
            margin: '25px auto',
            lineHeight: 1.6
          }}>
            Since 1998, we have been the cornerstone of structural excellence in Erode, 
            turning ambitious architectural concepts into concrete landmarks.
          </motion.p>
        </div>
      </section>

      {/* CORE ABOUT COMPONENT */}
      <About />

      {/* CORE VALUES */}
      <CoreValues />

      {/* MISSION & VISION */}
      <section className="mission-vision" style={{ padding: '120px 0', background: '#f8fafc' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '80px' }}>
            <motion.div {...fadeIn}>
              <div style={{ width: '50px', height: '5px', background: 'var(--primary-yellow)', marginBottom: '1.5rem' }}></div>
              <h3 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '20px', color: '#000', textTransform: 'uppercase' }}>Our Mission</h3>
              <p style={{ color: 'var(--text-gray)', lineHeight: 1.8, fontSize: '1.1rem' }}>
                To deliver superior construction services by consistently improving the quality of our product; 
                to add value for clients through innovation, foresight, integrity, and aggressive performance.
                We believe in building relationships that last as long as our structures.
              </p>
            </motion.div>
            <motion.div {...fadeIn} transition={{ delay: 0.2 }}>
              <div style={{ width: '50px', height: '5px', background: 'var(--primary-yellow)', marginBottom: '1.5rem' }}></div>
              <h3 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '20px', color: '#000', textTransform: 'uppercase' }}>Our Vision</h3>
              <p style={{ color: 'var(--text-gray)', lineHeight: 1.8, fontSize: '1.1rem' }}>
                To be the most trusted and preferred construction partner in the region, known for our 
                commitment to excellence, safety, and sustainable building practices. 
                We aim to set the benchmark for modern engineering and architectural craftsmanship.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* COMPANY TIMELINE / HISTORY */}
      <TimelineSection />
    </div>
  );
};

export default AboutPage;



