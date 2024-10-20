import React, { useEffect, useRef, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Navbar.css';
import logo from './Imgs/logo.png';

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navbarRef = useRef(null);

  // Function to handle toggling the navbar
  const handleNavToggle = () => {
    setIsNavOpen(prevState => !prevState);
  };

  // Function to collapse the navbar on link click
  const handleNavLinkClick = () => {
    setIsNavOpen(false); // Close the navbar
  };

  // Handle clicks outside the navbar
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsNavOpen(false); // Close the navbar if clicking outside
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
            <NavLink className="nav-link" to="/" end onClick={handleNavLinkClick}>Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/about" onClick={handleNavLinkClick}>About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/projects" onClick={handleNavLinkClick}>Blogs</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/how-it-works" onClick={handleNavLinkClick}>How It Works</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/contact" onClick={handleNavLinkClick}>Contact</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
