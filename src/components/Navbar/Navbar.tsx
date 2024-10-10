// src/components/Navbar.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <Link to="/">Main Menu</Link>
      <Link to="/quests/main">Main Quests</Link>
      <Link to="/quests/side">Side Quests</Link>
      <Link to="/quests/side">Codex</Link>
    </nav>
  );
};

export default Navbar;
