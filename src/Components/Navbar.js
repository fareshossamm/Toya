// src/Components/Navbar.js
import React, { useEffect, useRef, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Navbar.css';
import logo from './Imgs/logo.png';

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navbarRef = useRef(null);

  const handleNavToggle = () => {
    setIsNavOpen(prevState => !prevState);
  };

  const handleNavLinkClick = () => {
    setIsNavOpen(false); // Close the navbar
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
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <NavLink className="nav-link" to="/" smooth={true} duration={500} onClick={handleNavLinkClick}>Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/about" smooth={true} duration={500} onClick={handleNavLinkClick}>About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/blogs" smooth={true} duration={500} onClick={handleNavLinkClick}>Blogs</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/how-it-works" smooth={true} duration={500} onClick={handleNavLinkClick}>How It Works</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/contact" smooth={true} duration={500} onClick={handleNavLinkClick}>Contact</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
