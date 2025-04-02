import React from 'react';
import './TVScreen.css';
import { useTheme } from '../../context/ThemeContext';
import { labels } from '../../data/labels';

interface TVScreenProps {
  type?: string;
  children?: React.ReactNode;
}

const TVScreen: React.FC<TVScreenProps> = ({ type, children }) => {
  const { theme } = useTheme();
  
  // Only apply the label if we're in recon mode and have a type
  const label = theme === 'recon' && type ? labels[theme][type] : "";

  return (
    <div className="terminal-frame-container">
      <div className="terminal-screen">
        <div className="terminal-header">
          <span className="terminal-title">FINANCE</span>
          <div className="terminal-controls">
            <span className="control-dot"></span>
            <span className="control-dot"></span>
            <span className="control-dot"></span>
          </div>
        </div>
        <div className="terminal-content">
          {label && <h1 className="terminal-label">{label}</h1>}
          <div className="terminal-data">
            {children}
          </div>
        </div>
        <div className="terminal-footer">
          <div className="terminal-status">
            <span className="status-indicator">SECURE</span>
            <span className="status-text">DHA-NET TERMINAL v2.0</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TVScreen;