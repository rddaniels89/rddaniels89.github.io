import React from 'react';
import './WorkFrame.css';

interface WorkFrameProps {
  type?: 'main' | 'side';
  children?: React.ReactNode;
}

const WorkFrame: React.FC<WorkFrameProps> = ({ type, children }) => {
  
  return (
    <div className="workframe-container">
      <div className="workframe">
        <div className="workframe-content">
          {type ? (
            <>
              <h1>{type === 'main' ? "Professional Experience" : "Personnal Hobbies"}</h1>
              {children}
            </>
          ) : (
            <>
            <h1><p></p></h1>
            <div>{children}</div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default WorkFrame;
