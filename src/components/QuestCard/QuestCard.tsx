// src/components/QuestCard.tsx
import React from 'react';
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
  return (
    <div className="quest-card">
      <h3>{quest.title}</h3>
      {quest.company && <p>Company: {quest.company}</p>}
      <p>{quest.description}</p>
    </div>
  );
};

export default QuestCard;
