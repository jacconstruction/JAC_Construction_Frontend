import React from 'react';
import { motion } from 'framer-motion';
import ProjectsSection from '../components/ProjectsSection';

const ProjectsPage: React.FC = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  return (
    <div className="projects-page" style={{ paddingTop: '80px' }}>
      {/* HERO SECTION */}
      <section className="projects-hero" style={{ 
        background: 'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url("https://images.unsplash.com/photo-1541963463532-d68292c34b19?auto=format&fit=crop&q=80&w=2000")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '140px 0',
        textAlign: 'center',
        color: '#fff',
        clipPath: 'polygon(0 0, 100% 0, 100% 85%, 50% 100%, 0 85%)',
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
            OUR LEGACY
          </motion.h4>
          <motion.h1 {...fadeIn} style={{ 
            fontSize: 'clamp(3rem, 10vw, 5rem)', 
            fontWeight: 900, 
            lineHeight: 1,
            textTransform: 'uppercase'
          }}>
            BUILT TO <span style={{ color: 'var(--primary-yellow)' }}>LAST</span>
          </motion.h1>
          <motion.p {...fadeIn} style={{ 
            fontSize: '1.2rem', 
            color: '#fff', 
            maxWidth: '700px', 
            margin: '30px auto',
            lineHeight: 1.6
          }}>
            Explore our diverse portfolio of engineering landmarks, from soaring skyscrapers 
            to complex industrial hubs and luxury estates.
          </motion.p>
        </div>
      </section>

      {/* MAIN PROJECTS CONTENT */}
      <ProjectsSection />

      {/* CALL TO ACTION */}
      <section className="cta-section" style={{ 
        padding: '120px 0', 
        background: '#0A0A0A', 
        textAlign: 'center',
        color: '#fff'
      }}>
        <div className="container">
          <motion.h2 {...fadeIn} style={{ fontSize: '3.5rem', fontWeight: 900, marginBottom: '2rem' }}>
            HAVE A PROJECT <span style={{ color: 'var(--primary-yellow)' }}>IN MIND?</span>
          </motion.h2>
          <motion.p {...fadeIn} style={{ color: '#fff', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto 3rem' }}>
            Our team of expert engineers and architects is ready to transform your complex 
            blueprints into stunning realities.
          </motion.p>
          <motion.div {...fadeIn}>
            <a href="/contact" style={{ 
              display: 'inline-block',
              background: 'var(--primary-yellow)',
              color: '#000',
              padding: '1.2rem 3.5rem',
              fontWeight: 900,
              textDecoration: 'none',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              borderRadius: '4px',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              Start Your Project
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
