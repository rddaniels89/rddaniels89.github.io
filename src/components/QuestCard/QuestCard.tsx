// src/components/QuestCard.tsx
import React from 'react';
import './QuestCard.css';
import { ThemeType } from '../../context/ThemeContext';
import { Quest } from '../../data/quests.data';


interface QuestCardProps {
  quest: Quest;
  theme: ThemeType;
}

const QuestCard: React.FC<QuestCardProps> = ({ quest, theme }) => {
  return (
    <div className="quest-card">
      <h3>{theme === 'work' ? quest.titles.sleek : quest.titles.retro}</h3>
      {quest.company && <p>Company: {quest.company}</p>}
      <p>{quest.description}</p>
    </div>
  );
};

export default QuestCard;
