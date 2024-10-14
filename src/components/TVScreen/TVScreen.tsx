import React from 'react';
import './TVScreen.css';

interface TVScreenProps {
  type?: 'main' | 'side';
  children?: React.ReactNode;
}

const TVScreen: React.FC<TVScreenProps> = ({ type, children }) => {
  return (
    <div className="tv-frame-container">
      <div className="tv-screen">
        <div className="tv-content">
          {type ? (
            <>
              <h1>{type === 'main' ? "Alonzo’s Main Quests" : "Alonzo’s Side Quests"}</h1>
              {children}
            </>
          ) : (
            <div>{children}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TVScreen;
