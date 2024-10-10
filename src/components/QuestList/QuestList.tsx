// src/components/QuestList.tsx
import React from 'react';
import { useParams } from 'react-router-dom';
import quests from '../../data/quests.data';
import QuestCard from '../QuestCard/QuestCard';

interface RouteParams {
  type: 'main' | 'side';
}

const QuestList: React.FC = () => {
  const { type } = useParams();
  const filteredQuests = quests.filter((quest) => quest.type === type);

  return (
    <div className="quest-list">
      <h2>{type === 'main' ? 'Main Quests' : 'Side Quests'}</h2>
      {filteredQuests.map((quest) => (
        <QuestCard key={quest.id} quest={quest} />
      ))}
    </div>
  );
};

export default QuestList;
