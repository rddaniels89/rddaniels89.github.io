// src/components/QuestSwitcher/QuestSwitcher.tsx
import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import TVScreen from '../TVScreen/TVScreen';
import WorkFrame from '../WorkFrame/WorkFrame';

interface QuestSwitcherProps {
  type?: 'career' | 'hobby' | 'education' | 'independent';
  children?: React.ReactNode;
}

const QuestSwitcher: React.FC<QuestSwitcherProps> = ({ type, children }) => {
  const { theme } = useTheme();

  return (
    <>
      {theme === 'recon' ? (
        <TVScreen type={type}>{children}</TVScreen>
      ) : (
        <WorkFrame type={type}>{children}</WorkFrame>
      )}
    </>
  );
};

export default QuestSwitcher;
