import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logoImg from '../assets/jac_logo.png';

const Footer: React.FC = () => {
  return (
    <footer className="main-footer">
      <div className="container">
        <div className="footer-cta">
          <h3>Ready to start your project?</h3>
          <Link to="/contact">
            <button className="cta-quote-btn">Get a Quote</button>
          </Link>
        </div>
        <div className="footer-grid">
          <div className="footer-brand">
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem' }}>
              <img src={logoImg} alt="JAC Icon" style={{ height: '60px', width: '60px', objectFit: 'contain' }} />
              <span style={{ fontWeight: 800, fontSize: '1.25rem', color: '#fff', letterSpacing: '1.5px', textTransform: 'uppercase' }}>
                JAC Construction
              </span>
            </div>

            <p className="footer-tagline">
              Building excellence through innovation and structural integrity.
              Your partner in premium construction and architectural design.
            </p>
            <div className="social-links">
              <a href="https://www.facebook.com/profile.php?id=61591193533701" target="_blank" rel="noopener noreferrer" className="social-icon"><FaFacebookF /></a>
              <a href="https://www.instagram.com/jacconstruction0/?hl=en" target="_blank" rel="noopener noreferrer" className="social-icon"><FaInstagram /></a>
              <a href="https://wa.me/916381737399" target="_blank" rel="noopener noreferrer" className="social-icon"><FaWhatsapp /></a>
            </div>
          </div>

          <div className="footer-links">
            <h4>QUICK LINKS</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/#services">Our Services</Link></li>
              <li><Link to="/portfolio">Featured Projects</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>OUR SERVICES</h4>
            <ul>
              <li><Link to="/#services">Construction & Plan Approval</Link></li>
              <li><Link to="/#services">2D/3D Designs</Link></li>
              <li><Link to="/#services">Modular Kitchen</Link></li>
              <li><Link to="/#services">Plumbing & Electrical</Link></li>
              <li><Link to="/#services">Painting & Carpentry</Link></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4>CONTACT US</h4>
            <a href="https://maps.google.com/?q=Erode,+Tamil+Nadu" target="_blank" rel="noopener noreferrer" className="contact-item" style={{ textDecoration: 'none', color: 'inherit', transition: 'color 0.3s' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--primary-yellow)'} onMouseOut={(e) => e.currentTarget.style.color = 'inherit'}>
              <FaMapMarkerAlt className="icon" />
              <p>JAC Construction Erode<br />Tamil Nadu, India</p>
            </a>
            <a href="tel:+916381737399" className="contact-item" style={{ textDecoration: 'none', color: 'inherit', transition: 'color 0.3s' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--primary-yellow)'} onMouseOut={(e) => e.currentTarget.style.color = 'inherit'}>
              <FaPhoneAlt className="icon" />
              <p>+91 63817 37399</p>
            </a>
            <a href="mailto:jacconstruction0@gmail.com" className="contact-item" style={{ textDecoration: 'none', color: 'inherit', transition: 'color 0.3s' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--primary-yellow)'} onMouseOut={(e) => e.currentTarget.style.color = 'inherit'}>
              <FaEnvelope className="icon" />
              <p>jacconstruction0@gmail.com</p>
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} JAC CONSTRUCTION. ALL RIGHTS RESERVED.</p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
