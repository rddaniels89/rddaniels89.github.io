import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import quests from '../../data/quests.data';
import { useTheme } from '../../context/ThemeContext';
import './QuestDetail.css';

// This component can be used in two ways:
// 1. With an ID prop directly (when used in a component)
// 2. By reading the ID from the URL (when used in a route)
interface QuestDetailProps {
  id?: number; // Optional because we might get it from useParams
}

const QuestDetail: React.FC<QuestDetailProps> = ({ id: propId }) => {
  const params = useParams<{ id: string }>();
  const navigate = useNavigate();
  const themeContext = useTheme();
  
  if (!themeContext) return null;
  
  // Get ID either from props or URL params
  const id = propId !== undefined ? propId : params.id ? parseInt(params.id, 10) : -1;
  
  // Find the quest by ID
  const quest = quests.find((q) => q.id === id);
  const { theme } = themeContext;

  if (!quest) {
    return <p>Quest not found</p>;
  }

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className={`quest-detail`}>
      <h1>{theme === 'work' ? quest.titles.sleek : quest.titles.retro}</h1>
      {quest.company && <p>Company: {quest.company}</p>}
      <p>
        {quest.startDate.toLocaleDateString()} - 
        {quest.endDate.getDate() === new Date(2038, 2, 10).getDate() 
          ? "Present" 
          : quest.endDate.toLocaleDateString()}
      </p>
      <p>{quest.description}</p>

      <h3>Roles:</h3>
      <ul className="role-badges">
        {quest.roles.map((role, index) => (
          <li key={index} className="badge">{role}</li>
        ))}
      </ul>

      <h3>Accomplishments:</h3>
      <ul>
        {quest.accomplishments.map((accomplishment, index) => (
          <li key={index}>
            {accomplishment.description}
          </li>
        ))}
      </ul>

      <h3>{theme === 'play' ? 'Rewards' : 'Lessons Learned'}:</h3>

      <ul className="learnings">
        {quest.accomplishments
          .flatMap((acc) => acc.learnings)
          .filter((learning, index, self) => self.indexOf(learning) === index) // Remove duplicates
          .map((learning, index) => (
            <li key={index}>{learning}</li>
          ))}
      </ul>
      
      <button className="back-button" onClick={goBack}>Back</button>
    </div>
  );
};

export default QuestDetail;