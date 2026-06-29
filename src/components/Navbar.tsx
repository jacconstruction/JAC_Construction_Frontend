import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaSun, FaMoon } from 'react-icons/fa';
import logoImg from '../assets/jac_logo.png';
import TopBar from './TopBar';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      // Scrolled state
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Prevent background scrolling when the menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const isHomePage = location.pathname === '/';

  return (
    <>
      {isHomePage && <TopBar />}
      <nav className={isScrolled || !isHomePage ? 'scrolled' : ''}>
        <div className="container">
          <div className="logo-container">
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
              <img src={logoImg} alt="JAC Icon" style={{ height: '60px', width: '60px', objectFit: 'contain' }} />
              <span className="logo-text">
                JAC Construction
              </span>
            </Link>
          </div>

          {/* Mobile Menu Overlay Header (Visible only when menu is open) */}
          {isMenuOpen && (
            <div className="mobile-menu-header">
               <img src={logoImg} alt="JAC Icon" style={{ height: '60px', width: '60px', objectFit: 'contain' }} />
               <span style={{ fontWeight: 800, fontSize: '1.25rem', color: 'var(--text-primary)', letterSpacing: '1.5px', textTransform: 'uppercase' }}>
                 JAC Construction
               </span>
            </div>
          )}

          {/* Desktop & Mobile Menu */}
          <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <li>
              <Link to="/" className={isHomePage ? 'active' : ''}>Home</Link>
            </li>
            <li>
              <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About Us</Link>
            </li>
            <li>
              <Link to="/services" className={location.pathname === '/services' ? 'active' : ''}>Services</Link>
            </li>
            <li>
              <Link to="/portfolio" className={location.pathname === '/portfolio' ? 'active' : ''}>Projects</Link>
            </li>
            <li>
              <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>
                Contact
              </Link>
            </li>
            
            {/* Theme Toggle in Menu */}
            <li>
              <button onClick={toggleTheme} className="theme-toggle-btn" aria-label="Toggle theme">
                {theme === 'light' ? <FaMoon /> : <FaSun />}
              </button>
            </li>
            
            {/* Architectural detail for mobile menu */}
            <div className="menu-footer-detail">
              <p>PRECISION IN EVERY PIXEL</p>
              <div className="accent-line"></div>
            </div>
          </ul>

          {/* Hamburger Toggle */}
          <div className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
