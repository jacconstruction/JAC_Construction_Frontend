import React from 'react';
import engineeringImg from '../assets/indian_construction_site.png';

const EngineeringSection: React.FC = () => {
  return (
    <section id="about" className="engineering-section">
      <div className="container">
        <div className="engineering-grid">
          <div className="engineering-image">
            <img src={engineeringImg} alt="Engineering Structure" />
          </div>
          <div className="engineering-content">
            <h2>
              ENGINEERING <span className="yellow-text">EXCELLENCE</span>
            </h2>
            <div className="yellow-divider"></div>
            <p>
              At <strong>JAC Construction Erode</strong>, we specialize in residential, commercial, and infrastructure construction. 
              With over <strong>26 years of experience</strong>, we combine innovation, safety, and precision to deliver 
              projects that stand the test of time.
            </p>
            <p>
              Our team of experts manages every detail with architectural precision, ensuring from plan approval 
               to final finishing, every project reflects our core values of excellence and structural integrity.
            </p>

          </div>
        </div>
      </div>
    </section>
  );
};

export default EngineeringSection;
