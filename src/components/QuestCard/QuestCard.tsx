// src/components/QuestCard.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './QuestCard.css';

interface Quest {
  id: number;
  title: string;
  company?: string;
  description: string;
  type: 'main' | 'side';
}

interface QuestCardProps {
  quest: Quest;
}

const QuestCard: React.FC<QuestCardProps> = ({ quest }) => {
  const history = useNavigate();

  const goToQuestDetail = () => {
    history(`/quest/${quest.id}`);
  };

  return (
    <div className="quest-card" onClick={goToQuestDetail}>
      <h3>{quest.title}</h3>
      {quest.company && <p>Company: {quest.company}</p>}
      <p>{quest.description}</p>
    </div>
  );
};

export default QuestCard;
