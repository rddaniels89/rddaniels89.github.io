// src/components/QuestSwitcher/QuestSwitcher.tsx
import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import TVScreen from '../TVScreen/TVScreen';
import PCMonitor from '../PCMonitor/PCMonitor';

interface QuestSwitcherProps {
  type: 'main' | 'side';
}

const QuestSwitcher: React.FC<QuestSwitcherProps> = ({ type }) => {
  const { theme } = useTheme();  // Get the current theme from context

  return (
    <>
      {theme === 'play' ? (
        <TVScreen type={type} />  // Render TVScreen (Play) for the given quest type
      ) : (
        <PCMonitor type={type} />  // Render PCMonitor (Work) for the given quest type
      )}
    </>
  );
};

export default QuestSwitcher;
