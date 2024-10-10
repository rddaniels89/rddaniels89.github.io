// src/components/MainMenu.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MainMenu.css';

const MainMenu: React.FC = () => {
  const history = useNavigate();

  const goToMainQuests = () => {
    history('/quests/main');
  };

  const goToSideQuests = () => {
    history('/quests/side');
  };

  return (
    <div className="main-menu">
      <h1>Welcome to Alonzo's Adventures</h1>
      <button onClick={goToMainQuests}>Main Quests</button>
      <button onClick={goToSideQuests}>Side Quests</button>
    </div>
  );
};

export default MainMenu;
