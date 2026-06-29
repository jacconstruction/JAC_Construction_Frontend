import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaWhatsapp, FaMapMarkerAlt, FaInstagram } from 'react-icons/fa';

const TopBar: React.FC = () => {
  return (
    <div className="top-bar">
      <div className="container">
        <div className="contact-info">
          <a href="tel:+916381737399" className="contact-item" style={{ textDecoration: 'none', color: 'inherit', transition: 'color 0.3s' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--primary-yellow)'} onMouseOut={(e) => e.currentTarget.style.color = 'inherit'}>
            <FaPhoneAlt className="icon" />
            <span>+91 63817 37399</span>
          </a>
          <a href="mailto:jacconstruction0@gmail.com" className="contact-item" style={{ textDecoration: 'none', color: 'inherit', transition: 'color 0.3s' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--primary-yellow)'} onMouseOut={(e) => e.currentTarget.style.color = 'inherit'}>
            <FaEnvelope className="icon" />
            <span>jacconstruction0@gmail.com</span>
          </a>
          <a href="https://maps.google.com/?q=Erode,+Tamil+Nadu" target="_blank" rel="noopener noreferrer" className="contact-item" style={{ textDecoration: 'none', color: 'inherit', transition: 'color 0.3s' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--primary-yellow)'} onMouseOut={(e) => e.currentTarget.style.color = 'inherit'}>
            <FaMapMarkerAlt className="icon" />
            <span>Erode, Tamil Nadu</span>
          </a>
        </div>
        <div className="social-links">
          <a href="https://www.facebook.com/profile.php?id=61591193533701" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
          <a href="https://www.instagram.com/jacconstruction0/?hl=en" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://wa.me/916381737399" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
