import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaCheck, FaBuilding, FaHome, FaPalette, FaTools, FaDraftingCompass, FaClipboardList } from 'react-icons/fa';
import { Link } from 'react-router-dom';

interface Service {
  id: string;
  label: string;
  title: string;
  description: string;
  list: string[];
  image: string;
}

const serviceIcons: Record<string, React.ReactNode> = {
  structural: <FaBuilding />,
  masonry: <FaTools />,
  interior: <FaPalette />,
  renovation: <FaClipboardList />,
  systems: <FaHome />,
  architectural: <FaDraftingCompass />,
};

const ServicesPage: React.FC = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('/api/services')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch services');
        return res.json();
      })
      .then((data) => {
        setServices(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError('Could not load services. Please try again later.');
        setLoading(false);
      });
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  return (
    <div className="services-page" style={{ paddingTop: '80px', minHeight: '100vh' }}>
      {/* HERO SECTION */}
      <section className="services-hero" style={{ 
        background: 'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url("https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=2000")',
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
            OUR SERVICES
          </motion.h4>
          <motion.h1 {...fadeIn} style={{ 
            fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', 
            fontWeight: 900, 
            lineHeight: 1.1,
            textTransform: 'uppercase'
          }}>
            ENGINEERING <span style={{ color: 'var(--primary-yellow)' }}>EXCELLENCE</span>
          </motion.h1>
          <motion.p {...fadeIn} style={{ 
            fontSize: '1.2rem', 
            color: '#fff', 
            maxWidth: '700px', 
            margin: '25px auto',
            lineHeight: 1.6
          }}>
            We offer comprehensive construction, planning, and design solutions customized for your structural ideas.
          </motion.p>
        </div>
      </section>

      {/* SERVICES CONTENT */}
      <div className="container" style={{ padding: '60px 1.5rem' }}>
        {loading ? (
          <div style={{ textAlign: 'center', padding: '40px', fontSize: '1.2rem' }}>
            <div className="custom-loader"></div>
            <p>Loading premium services...</p>
          </div>
        ) : error ? (
          <div style={{ textAlign: 'center', color: '#ff4d4f', padding: '40px' }}>
            <p>{error}</p>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '80px' }}>
            {services.map((service, index) => (
              <motion.div 
                key={service.id} 
                className={`services-grid ${index % 2 === 1 ? 'reverse' : ''}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                  gap: '40px',
                  alignItems: 'center'
                }}
              >
                <div className="service-content">
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '15px', 
                    marginBottom: '1rem' 
                  }}>
                    <div style={{ 
                      fontSize: '2rem', 
                      color: 'var(--primary-yellow)',
                      display: 'flex',
                      alignItems: 'center'
                    }}>
                      {serviceIcons[service.id] || <FaBuilding />}
                    </div>
                    <span className="service-label" style={{ 
                      fontSize: '0.8rem', 
                      letterSpacing: '2px', 
                      fontWeight: 800,
                      color: 'var(--primary-yellow)'
                    }}>
                      {service.label}
                    </span>
                  </div>
                  <h3 style={{ 
                    fontSize: '2.2rem', 
                    fontWeight: 900, 
                    marginBottom: '1.5rem',
                    textTransform: 'uppercase'
                  }}>
                    {service.title}
                  </h3>
                  <p style={{ 
                    color: 'var(--text-secondary)', 
                    marginBottom: '2rem', 
                    lineHeight: 1.8 
                  }}>
                    {service.description}
                  </p>
                  <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '12px' }}>
                    {service.list.map((item, idx) => (
                      <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <FaCheck style={{ color: 'var(--primary-yellow)' }} />
                        <span style={{ fontWeight: 600 }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="service-image-container" style={{ overflow: 'hidden', borderRadius: '8px', boxShadow: 'var(--card-shadow)' }}>
                  <motion.img 
                    src={service.image} 
                    alt={service.title} 
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                    style={{ 
                      width: '100%', 
                      height: '400px', 
                      objectFit: 'cover',
                      display: 'block'
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* WHY CHOOSE US OVERVIEW */}
      <section style={{ background: 'var(--bg-secondary)', padding: '100px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h4 style={{ color: 'var(--primary-yellow)', letterSpacing: '3px', fontWeight: 800, marginBottom: '10px' }}>WHY CHOOSE US</h4>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 900 }}>OUR WORK STANDARDS</h2>
            <div style={{ width: '50px', height: '4px', background: 'var(--primary-yellow)', margin: '15px auto' }}></div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
            <div style={{ background: 'var(--card-bg)', padding: '40px', borderRadius: '8px', boxShadow: 'var(--card-shadow)' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '15px', color: 'var(--primary-yellow)' }}>01. Engineering Precision</h3>
              <p style={{ color: 'var(--text-secondary)' }}>We implement state-of-the-art structural blueprints and building processes ensuring extreme durability and lifetime strength.</p>
            </div>
            <div style={{ background: 'var(--card-bg)', padding: '40px', borderRadius: '8px', boxShadow: 'var(--card-shadow)' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '15px', color: 'var(--primary-yellow)' }}>02. Clear Timelines</h3>
              <p style={{ color: 'var(--text-secondary)' }}>We coordinate tasks carefully, respecting set milestones and keeping project timelines completely transparent.</p>
            </div>
            <div style={{ background: 'var(--card-bg)', padding: '40px', borderRadius: '8px', boxShadow: 'var(--card-shadow)' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '15px', color: 'var(--primary-yellow)' }}>03. Secure Transactions</h3>
              <p style={{ color: 'var(--text-secondary)' }}>We support professional contracts, stage-by-stage billing updates, and fully transparent raw material sourcing audits.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="cta-section" style={{ 
        padding: '100px 0', 
        background: '#0A0A0A', 
        textAlign: 'center',
        color: '#fff'
      }}>
        <div className="container">
          <h2 style={{ fontSize: '2.8rem', fontWeight: 900, marginBottom: '1.5rem' }}>
            READY TO BEGIN YOUR <span style={{ color: 'var(--primary-yellow)' }}>CONSTRUCTION?</span>
          </h2>
          <p style={{ color: '#fff', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto 2.5rem', opacity: 0.8 }}>
            Get in touch with our engineers today for a custom structural proposal and cost estimation.
          </p>
          <Link to="/contact" style={{ 
            display: 'inline-block',
            background: 'var(--primary-yellow)',
            color: '#000',
            padding: '1rem 3rem',
            fontWeight: 800,
            textDecoration: 'none',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            borderRadius: '4px',
            transition: 'all 0.3s ease'
          }}>
            Contact Us Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
