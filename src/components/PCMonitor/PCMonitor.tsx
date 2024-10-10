// src/components/PCMonitor/PCMonitor.tsx
import React from 'react';
import QuestList from '../QuestList/QuestList';

interface PCMonitorProps {
  type: 'main' | 'side';
}

const PCMonitor: React.FC<PCMonitorProps> = ({ type }) => {
  return (
    <div className="pc-monitor">
      <h1>{type === 'main' ? "Professional Experience" : "Side Projects"}</h1>
      <QuestList type={type} />  {/* Pass the quest type to the list */}
    </div>
  );
};

export default PCMonitor;
