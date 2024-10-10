// src/components/ThemeToggle.tsx
import React from 'react';
import { useTheme } from '../context/ThemeContext';
import TVScreen from './TVScreen/TVScreen';
import PCMonitor from './PCMonitor/PCMonitor';

const ThemeToggle: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className={`app-container ${theme}`}>
      {/* Conditionally render TVScreen or PCMonitor */}
      {theme === 'play' ? <TVScreen type={'main'} /> : <PCMonitor type={'main'} />}
    </div>
  );
};

export default ThemeToggle;
