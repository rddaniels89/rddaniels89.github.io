import React from 'react';
import './WorkFrame.css';
import { useTheme } from '../../context/ThemeContext';
import { labels } from '../../data/labels';

interface WorkFrameProps {
  type?: 'career' | 'hobby' | 'education' | 'independent';
  children?: React.ReactNode;
}

const WorkFrame: React.FC<WorkFrameProps> = ({ type, children }) => {
  const { theme } = useTheme();
  
  // Get the appropriate heading based on type and theme
  const getHeading = () => {
    if (!type) return "";
    return labels[theme][type] || "";
  };
  
  // Generate accent decorative element
  const renderAccentElements = () => (
    <div className="decorative-elements">
      <div className="accent-line accent-line-1"></div>
      <div className="accent-line accent-line-2"></div>
      <div className="accent-circle"></div>
    </div>
  );
  
  return (
    <div className="workframe-container">
      <div className="workframe">
        {renderAccentElements()}
        <div className="workframe-content">
          {type ? (
            <>
              <h1>{getHeading()}</h1>
              <div className="content-wrapper">{children}</div>
            </>
          ) : (
            <>
              <div className="content-wrapper">{children}</div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default WorkFrame;