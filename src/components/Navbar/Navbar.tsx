import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHome, 
  faMedal, 
  faStickyNote, 
  faBars, 
  faTimes,
  faSun,
  faMoon
} from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '../../context/ThemeContext';
import { labels } from '../../data/labels';
import './Navbar.css';

const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className={`navbar ${theme} ${isScrolled ? 'scrolled' : ''}`}>
      <div className="desktop-nav">
        <div className="nav-left">
          <Link to="/" className="nav-brand">
            <FontAwesomeIcon icon={faHome} /> {labels[theme]["home"]}
          </Link>
        </div>

        <div className="nav-center">
          <Link 
            to="/accomplishments" 
            className={isActive('/accomplishments') ? 'active' : ''}
          >
            <FontAwesomeIcon icon={faMedal} /> {labels[theme]["accomplishments"]}
          </Link>
          <Link 
            to="/resume" 
            className={isActive('/resume') ? 'active' : ''}
          >
            <FontAwesomeIcon icon={faStickyNote} /> {labels[theme]["resume"]}
          </Link>
        </div>

        <div className="nav-right">
          <button 
            className="theme-toggle" 
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'sleek' ? 'Recon' : 'Sleek'} theme`}
          >
            <FontAwesomeIcon icon={theme === 'sleek' ? faMoon : faSun} />
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="mobile-nav">
        <Link to="/" className="nav-brand">
          <FontAwesomeIcon icon={faHome} /> {labels[theme]["home"]}
        </Link>
        <button 
          className="mobile-menu-button" 
          onClick={toggleDropdown}
          aria-label={isDropdownOpen ? 'Close menu' : 'Open menu'}
        >
          <FontAwesomeIcon icon={isDropdownOpen ? faTimes : faBars} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isDropdownOpen ? 'active' : ''}`}>
        <Link 
          to="/accomplishments" 
          className={isActive('/accomplishments') ? 'active' : ''}
          onClick={() => setDropdownOpen(false)}
        >
          <FontAwesomeIcon icon={faMedal} /> {labels[theme]["accomplishments"]}
        </Link>
        <Link 
          to="/resume" 
          className={isActive('/resume') ? 'active' : ''}
          onClick={() => setDropdownOpen(false)}
        >
          <FontAwesomeIcon icon={faStickyNote} /> {labels[theme]["resume"]}
        </Link>
        <button 
          className="theme-toggle" 
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'sleek' ? 'Recon' : 'Sleek'} theme`}
        >
          <FontAwesomeIcon icon={theme === 'sleek' ? faMoon : faSun} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;