// src/components/QuestDetail.tsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import quests from '../../data/quests.data';
import './QuestDetail.css';

interface RouteParams {
  id: string;
}

const QuestDetail: React.FC = () => {
  const { id } = useParams();
  const history = useNavigate();
  const quest = quests.find((q) => q.id === parseInt(id ?? '0'));

  if (!quest) {
    return <p>Quest not found</p>;
  }

  const goBack = () => {
    history(-1)
  };

  return (
    <div className="quest-detail">
      <h2>{quest.title}</h2>
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
