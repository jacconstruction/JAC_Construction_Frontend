import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Projects: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      title: "LUXURY VILLA PROJECT",
      location: "Erode, Tamil Nadu",
      image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "COMMERCIAL COMPLEX",
      location: "Perundurai, Erode",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "MODERN FAMILY RESIDENCE",
      location: "Bhavani, Erode",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="projects-header">
          <div>
            <h2>Building <span className="yellow-text">Erode’s Future</span></h2>
            <div className="black-divider" style={{ width: '60px', height: '4px', background: 'var(--primary-yellow)', marginBottom: '1.5rem' }}></div>
            <p>Delivering premium residential and commercial construction projects across Erode with trusted workmanship, modern engineering, and long-lasting quality.</p>
          </div>
          <div className="project-nav mob-only">
            <button className="nav-btn" onClick={prevSlide}><FaArrowLeft /></button>
            <button className="nav-btn" onClick={nextSlide}><FaArrowRight /></button>
          </div>
        </div>

        <div className="projects-slider-wrapper">
          <div 
            className="projects-grid dynamic-grid" 
            style={{ 
              '--current-index': currentIndex 
            } as React.CSSProperties}
          >
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <p className="project-location" style={{ color: 'var(--primary-yellow)', textTransform: 'uppercase', fontSize: '0.8rem', fontWeight: 700, marginBottom: '0.5rem', letterSpacing: '2px' }}>{project.location}</p>
                  <h4>{project.title}</h4>
                  <Link to="/portfolio" className="view-project-btn">VIEW PROJECT <FaArrowRight style={{ marginLeft: '5px' }} /></Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="projects-footer">
          <Link to="/portfolio" className="view-all-projects-btn">
            VIEW ALL PROJECTS <FaArrowRight className="arrow" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
