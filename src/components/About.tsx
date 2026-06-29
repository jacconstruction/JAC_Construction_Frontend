import { motion } from 'framer-motion';
import './About.css';
import aboutMain from '../assets/indian_corporate_hq.png';
import aboutDetail from '../assets/indian_luxury_villa.png';

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        
        {/* Left Side: Text Content */}
        <motion.div 
          className="about-content"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="section-header">
            <h4 className="subtitle">ABOUT OUR COMPANY</h4>
            <h2 className="title">BUILDING YOUR VISION WITH <span className="text-accent">PRECISION</span></h2>
            <div className="title-underline"></div>
          </div>
          
          <p className="about-description">
            We don't just build structures; we build legacies. With a commitment to unmatched craftsmanship and modern engineering, our team transforms complex blueprints into stunning realities. From commercial high-rises to custom residential estates, we ensure every brick is laid with purpose.
          </p>

          <ul className="about-features">
            {[
              "100% Quality Guarantee",
              "Uncompromising Safety Standards",
              "On-Time Project Delivery"
            ].map((feature, index) => (
              <motion.li 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                {feature}
              </motion.li>
            ))}
          </ul>

          <a 
            href="#company-timeline" 
            className="primary-btn" 
            style={{ display: 'inline-block', textDecoration: 'none' }}
          >
            DISCOVER OUR HISTORY
          </a>
        </motion.div>

        {/* Right Side: Overlapping Images */}
        <div className="about-visuals">
          {/* Main large image */}
          <motion.img 
            src={aboutMain} 
            alt="Construction Site" 
            className="image-main"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
          {/* Smaller overlapping image */}
          <motion.img 
            src={aboutDetail} 
            alt="Architectural Plans" 
            className="image-secondary"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          />
          
          {/* Floating Experience Badge */}
          <motion.div 
            className="experience-badge"
            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, delay: 0.6 }}
          >
            <span className="badge-number">26</span>
            <span className="badge-text">YEARS OF<br/>EXCELLENCE</span>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default About;
