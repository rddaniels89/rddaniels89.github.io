// src/components/NotFound/NotFound.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import './NotFound.css';

const NotFound: React.FC = () => {
  const navigate = useNavigate();
  const { theme } = useTheme()!;
  
  const goBack = () => {
    navigate(-1);
  };
  
  const goHome = () => {
    navigate('/main-menu');
  };

  return (
    <div className={`not-found-container ${theme}`}>
      {theme === 'recon' ? (
        // Cyberpunk terminal style 404
        <div className="terminal-container">
          <h1 className="glitch-text">ERROR 404</h1>
          <div className="terminal-line"></div>
          <p className="blink-text">ACCESS DENIED: RESOURCE NOT FOUND</p>
          <p>SECURITY PROTOCOL: REDIRECTING TO SECURE SECTOR</p>
          
          <div className="button-container">
            <button onClick={goBack} className="terminal-button">
              ← RETURN TO PREVIOUS SECTOR
            </button>
            <button onClick={goHome} className="terminal-button">
              RETURN TO COMMAND CENTER
            </button>
          </div>
        </div>
      ) : (
        // Professional style 404
        <div className="professional-container">
          <h1>404</h1>
          <h2>Page Not Found</h2>
          <p>Sorry, the page you are looking for might have been removed or is temporarily unavailable.</p>
          
          <div className="button-container">
            <button onClick={goBack} className="professional-button">
              Go Back
            </button>
            <button onClick={goHome} className="professional-button primary">
              Return to Home
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NotFound;