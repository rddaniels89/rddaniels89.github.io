import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import quests from '../../data/quests.data';
import { useTheme } from '../../context/ThemeContext';  // Assuming you have a ThemeContext to manage work/play modes
import './QuestDetail.css';

interface QuestDetailParams {
  id: number;
}

const QuestDetail: React.FC<QuestDetailParams> = ({ id }) => {
  const history = useNavigate();
  const quest = quests.find((q) => q.id === (id ?? -1));
  const themeContext = useTheme();
  if (!themeContext) return null;

  const { theme, timeOfDay, season, setTheme } = themeContext;

  if (!quest) {
    return <p>Quest not found</p>;
  }

  const goBack = () => {
    history(-1);
  };

  return (
    <div className={`quest-detail `}>
      <h1>{theme === 'work' ? quest.titles.sleek : quest.titles.retro}</h1>
      {quest.company && <p>Company: {quest.company}</p>}
      <p>{quest.startDate.toLocaleDateString()} - {quest.endDate.getDate() === new Date(2038,2,10).getDate() ? "Present": quest.endDate.toLocaleDateString()}</p>
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
    </div>
  );
};

export default QuestDetail;
