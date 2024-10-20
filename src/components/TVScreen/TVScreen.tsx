import React from 'react';
import './TVScreen.css';
import { useTheme } from '../../context/ThemeContext';
import { labels } from '../../data/labels';

interface TVScreenProps {
  type?: 'main' | 'side';
  children?: React.ReactNode;
}

const TVScreen: React.FC<TVScreenProps> = ({ type, children }) => {
  
  const {theme} = useTheme()!;
  
  const label = labels[theme][type || "default"];

  return (
    <div className="tv-frame-container">
      <div className="tv-screen">
        <div className="tv-content">
          {
            <>
              <h1>{label}</h1>
              {children}
            </>
          }
        </div>
      </div>
    </div>
  );
};

export default TVScreen;
