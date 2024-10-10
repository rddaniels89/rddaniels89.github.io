// src/components/TVScreen/TVScreen.tsx
import React from 'react';
import QuestCarousel from '../QuestCarousel/QuestCarousel';
import './TVScreen.css';

interface TVScreenProps {
  type: 'main' | 'side';
}

const TVScreen: React.FC<TVScreenProps> = ({ type }) => {
  return (
    <div className="tv-screen">
      <h1>{type === 'main' ? "Alonzo’s Main Quests" : "Alonzo’s Side Quests"}</h1>
      <QuestCarousel type={type} />  {/* Pass the quest type to the carousel */}
    </div>
  );
};

export default TVScreen;
