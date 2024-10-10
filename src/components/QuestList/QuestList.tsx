// src/components/QuestList/QuestList.tsx
import React from 'react';
import quests from '../../data/quests.data';  // Assuming quest data is here
import QuestCard from '../QuestCard/QuestCard';

interface QuestListProps {
  type: 'main' | 'side';  // to distinguish between main and side quests
}

const QuestList: React.FC<QuestListProps> = ({ type }) => {
  // Filter quests by type (main or side)
  const filteredQuests = quests.filter((quest) => quest.type === type);

  return (
    <div className="quest-list">
      <h2>{type === 'main' ? 'Main Quests' : 'Side Quests'}</h2>
      {/* Display the filtered list of quests */}
      {filteredQuests.map((quest) => (
        <QuestCard key={quest.id} quest={quest} />
      ))}
    </div>
  );
};

export default QuestList;
