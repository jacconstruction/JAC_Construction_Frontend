import React from 'react';
import { motion } from 'framer-motion';
import heroBg from '../assets/hero_bg_night.jpg';

const Hero: React.FC = () => {
  return (
    <section id="home" className="hero" style={{ backgroundImage: `url(${heroBg})` }}>
      <div className="hero-overlay"></div>
      <div className="container">
        <div className="hero-content">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Building Strong Foundations For The Future
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Trusted Construction & Engineering Experts specializing in Residential, 
            Commercial, and Infrastructure projects with over 26 years of excellence.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a href="/contact" className="cta-button">
              Get a Free Quote
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
