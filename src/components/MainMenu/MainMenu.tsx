// src/components/MainMenu.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MainMenu.css';
import { useTheme } from '../../context/ThemeContext';
import { labels } from '../../data/labels';

const MainMenu: React.FC = () => {
  const history = useNavigate();
  const {theme} = useTheme()!;

  const accomplishmentLabel = labels[theme]["accomplishments"];
  const timelineLabel = labels[theme]["timeline"];
  const titleLabel = labels[theme]['mainTitle']

  const goToAccomplishment = () => {
    history('/accomplishments');
  };
  const goToTimeline = () => {
    history('/timeline');
  };

  return (
    <div className="main-menu">
      <h1>{titleLabel}</h1>
      <button onClick={goToTimeline}>{timelineLabel}</button>
      <button onClick={goToAccomplishment}>{accomplishmentLabel}</button>
      
    </div>
  );
};

export default MainMenu;
