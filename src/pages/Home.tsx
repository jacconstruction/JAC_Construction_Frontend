import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import EngineeringSection from '../components/EngineeringSection';
import Stats from '../components/Stats';
import Services from '../components/Services';
import Projects from '../components/Projects';

const Home: React.FC = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <>
      <Hero />
      <motion.div {...fadeInUp} viewport={{ once: true }}>
        <EngineeringSection />
      </motion.div>
      <motion.div {...fadeInUp} viewport={{ once: true }}>
        <Stats />
      </motion.div>
      <motion.div {...fadeInUp} viewport={{ once: true }}>
        <Services />
      </motion.div>
      <motion.div {...fadeInUp} viewport={{ once: true }}>
        <Projects />
      </motion.div>
    </>
  );
};

export default Home;
