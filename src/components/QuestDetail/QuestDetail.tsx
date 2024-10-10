// src/components/QuestDetail.tsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import quests from '../../data/quests.data';
import './QuestDetail.css';

interface QuestDetailParams {
  id: number;
}

const QuestDetail: React.FC<QuestDetailParams> = ({id}) => {
  
  const history = useNavigate();
  const quest = quests.find((q) => q.id === (id ?? -1));

  if (!quest) {
    return <p>Quest not found</p>;
  }

  const goBack = () => {
    history(-1);
  };

  return (
    <div className="quest-detail">
      <h1>{quest.title}</h1>
      {quest.company && <p>Company: {quest.company}</p>}
      <p>{quest.length}</p>
      <p>{quest.description}</p>
      <ul>
        {quest.roles.map((role, index) => (
          <li key={index}>{role}</li>
        ))}
      </ul>
      <p>{quest.fullDescription}</p>
      <h3>Rewards:</h3>
      <ul>
        {quest.rewards.map((reward, index) => (
          <li key={index}>{reward}</li>
        ))}
      </ul>
      <button onClick={goBack}>Back to Quests</button>
    </div>
  );
};

export default QuestDetail;
