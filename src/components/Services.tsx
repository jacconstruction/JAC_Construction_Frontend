import React from 'react';
import { FaCheck } from 'react-icons/fa';
import structuralImg from '../assets/indian_structural.png';
import masonryImg from '../assets/indian_masonry.png';
import interiorImg from '../assets/indian_modern_interior.png';
import renovationImg from '../assets/indian_renovation.png';
import systemImg from '../assets/indian_plumbing_electrical.png';
import architecturalImg from '../assets/architectural_design.png';

const Services: React.FC = () => {
  const services = [
    {
      label: "TRUSTED CONSTRUCTION",
      title: "STRUCTURAL CONSTRUCTION",
      description:
        "From residential homes to commercial buildings, we deliver complete structural construction solutions with engineering precision, durable materials, and quality workmanship built to last for generations.",
      list: [
        "Residential & Commercial Construction",
        "RCC Framing & Concrete Works",
        "Column, Beam & Slab Execution",
        "Site Supervision & Quality Assurance",
      ],
      image: structuralImg,
      reverse: false,
    },
    {
      label: "QUALITY WORKMANSHIP",
      title: "BRICK & BLOCK MASONRY",
      description:
        "Precision brickwork and block masonry solutions designed for strength, durability, and clean finishing. Our experienced team ensures accurate alignment and long-lasting structural integrity.",
      list: [
        "Solid Block & Red Brick Masonry",
        "Plastering & Wall Finishing",
        "Partition & Compound Walls",
        "Structural Reinforcement Support",
      ],
      image: masonryImg,
      reverse: true,
    },
    {
      label: "MODERN INTERIORS",
      title: "INTERIOR FINISHING",
      description:
        "Elegant interior solutions crafted with premium materials and modern design aesthetics. We create stylish, functional spaces tailored to your lifestyle and comfort.",
      list: [
        "False Ceiling & Lighting Design",
        "Premium Tiles & Flooring",
        "Modular Kitchen Installation",
        "Wall Painting & Texture Finishes",
      ],
      image: interiorImg,
      reverse: false,
    },
    {
      label: "PROPERTY UPGRADE",
      title: "HOME RENOVATION",
      description:
        "Transform your existing property with modern renovation solutions that improve appearance, functionality, and long-term property value while maintaining structural safety.",
      list: [
        "House Remodeling & Extensions",
        "Exterior Elevation Upgrades",
        "Space Optimization Planning",
        "Structural Repair & Strengthening",
      ],
      image: renovationImg,
      reverse: true,
    },
    {
      label: "SAFE & RELIABLE SYSTEMS",
      title: "PLUMBING & ELECTRICAL",
      description:
        "Professional plumbing and electrical installations designed for safety, efficiency, and long-term performance using high-quality materials and certified workmanship.",
      list: [
        "Concealed Electrical Wiring",
        "Complete Plumbing Solutions",
        "Water Tank & Drainage Systems",
        "Smart Home & Backup Power Setup",
      ],
      image: systemImg,
      reverse: false,
    },
    {
      label: "SMART PLANNING",
      title: "ARCHITECTURAL DESIGN",
      description:
        "Innovative architectural planning and 3D visualization services that help bring your dream project to life with practical layouts and modern design concepts.",
      list: [
        "2D Floor Plans & Blueprints",
        "3D Exterior & Interior Designs",
        "Vastu-Based Space Planning",
        "Building Approval Assistance",
      ],
      image: architecturalImg,
      reverse: true,
    }
  ];

  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="services-header">
          <h2>OUR <span className="yellow-text">SERVICES</span></h2>
          <div className="yellow-divider" style={{ margin: '15px 0' }}></div>
        </div>
        
        {services.map((service, index) => (
          <div key={index} className={`services-grid ${service.reverse ? 'reverse' : ''}`} style={{ marginBottom: '80px' }}>
            <div className="service-content">
              <span className="service-label">{service.label}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul className="service-list">
                {service.list.map((item, idx) => (
                  <li key={idx} className="service-item">
                    <FaCheck className="check-icon" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="service-image">
              <img 
                src={service.image} 
                alt={service.title} 
                className="services-img-refined"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
