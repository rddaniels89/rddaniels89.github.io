// src/components/Navbar/Navbar.tsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import './Navbar.css';

const Navbar: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const navigate = useNavigate();

  const toggleTheme = () => {
    const newTheme = theme === 'play' ? 'work' : 'play';
    setTheme(newTheme);
    navigate('/quests/main');  // Navigate to main quests when switching theme
  };

  return (
    <nav className={`navbar ${theme}`}>
      <Link to="/main-menu">Main Menu</Link>
      <Link to="/quests/main">{theme === 'play' ? 'Main Quests' : 'Main Files'}</Link>
      <Link to="/quests/side">{theme === 'play' ? 'Side Quests' : 'Side Projects'}</Link>
      <Link to="/codex">Codex</Link>

      {/* Theme Toggle Button */}
      <button onClick={toggleTheme}>
        Switch to {theme === 'play' ? 'Work' : 'Play'} Mode
      </button>
    </nav>
  );
};

export default Navbar;
