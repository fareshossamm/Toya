import React, { useEffect, useRef, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Navbar.css';
import logo from './Imgs/logo.png';
import { FaGlobe } from 'react-icons/fa'; // Globe icon from react-icons
import { useTranslation } from 'react-i18next'; // Import useTranslation for language support

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navbarRef = useRef(null);
  const { t, i18n } = useTranslation(); // Initialize translation

  const handleNavToggle = () => {
    setIsNavOpen(prevState => !prevState);
  };

  const handleNavLinkClick = () => {
    setIsNavOpen(false); // Close the navbar
  };

  const toggleLanguage = () => {
    const newLanguage = i18n.language === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(newLanguage); // Change the language using i18next
    handleNavLinkClick(); // Close the navbar when the language is changed
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsNavOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar navbar-expand-lg fixed-top" ref={navbarRef}>
      <Link to="/" className="navbar-brand d-flex align-items-center">
        <img className="logo" src={logo} alt="Logo" style={{ width: '50px', marginRight: '10px' }} />
        <span className='logotext'>Toya</span>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        onClick={handleNavToggle}
        aria-controls="navbarNav"
        aria-expanded={isNavOpen}
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`} id="navbarNav">
        <ul className={`navbar-nav ms-auto ${i18n.language === 'ar' ? 'rtl' : ''}`}> {/* Add 'rtl' class conditionally */}
          <li className="nav-item">
            <NavLink className="nav-link" to="/" onClick={handleNavLinkClick}>{t('home')}</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/about" onClick={handleNavLinkClick}>{t('about')}</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/Blogs" onClick={handleNavLinkClick}>{t('Blogs')}</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/how-it-works" onClick={handleNavLinkClick}>{t('how It Works')}</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/contact" onClick={handleNavLinkClick}>{t('contact')}</NavLink>
          </li>
        </ul>
        {/* Language Toggle Button */}
        <div className="language-toggle-container">
          <button 
            className="btn btn-outline-light language-toggle" 
            onClick={toggleLanguage}
          >
            <FaGlobe className="language-icon" />
            {i18n.language === 'en' ? 'العربية' : 'English'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
