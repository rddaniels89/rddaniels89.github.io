// src/components/QuestCard/QuestCard.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './QuestCard.css';
import { ThemeType } from '../../context/ThemeContext';
import { Quest } from '../../data/quests.data';

interface QuestCardProps {
  quest: Quest;
  theme: ThemeType;
}

const QuestCard: React.FC<QuestCardProps> = ({ quest, theme }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/quests/${quest.id}`);
  };

  return (
    <div className="quest-card" onClick={handleClick}>
      <h3>{theme === 'work' ? quest.titles.sleek : quest.titles.retro}</h3>
      {quest.company && <p>Company: {quest.company}</p>}
      <p>{quest.description}</p>
    </div>
  );
};

export default QuestCard;