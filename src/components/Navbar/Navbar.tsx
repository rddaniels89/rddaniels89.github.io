// src/components/Navbar/Navbar.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import './Navbar.css';
import { interpolateCSSVariables } from '../../utils/interpolateColor';

const Navbar: React.FC = () => {
  const { theme, setTheme, season, setSeason, timeOfDay, setTimeOfDay, overrideFlag, setOverrideFlag } = useTheme()!;
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleThemeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTheme(event.target.value as 'work' | 'play');
  };

  const handleSeasonChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    
    const value = parseFloat(event.target.value);  // Spread slider value across 4 seasons
  

    setOverrideFlag(true);
    setSeason(value);
  };

const handleTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  // Infer current and next time of day
  const value = parseFloat(event.target.value);
  
  setOverrideFlag(true);
  setTimeOfDay(value);
  // Interpolate between day and night

};


  const handleOverrideChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    setOverrideFlag(!isChecked);  // If checked, disable manual override
  };

  return (
    <nav className={`navbar  ${theme} `}>
      <div>
        <Link to="/main-menu">Main Menu</Link>
        <Link to="/quests/main">Main Quests</Link>
        <Link to="/quests/side">Side Quests</Link>
        <Link to="/codex">Codex</Link>
      </div>

      <div>
        <button className="theme-toggle" onClick={() => setTheme(theme === 'play' ? 'work' : 'play')}>
          Switch to {theme === 'play' ? 'Work Mode' : 'Play Mode'}
        </button>
        <button className="date-time-toggle" onClick={toggleDropdown}>
          {new Date().toLocaleDateString()} | {new Date().toLocaleTimeString()}
        </button>
        {isDropdownOpen && (
          <div className="dropdown">
            <ul className="dropdown-menu">
              {/* Theme Group */}
              <li>
                <div className="group-title">Theme</div>
                <div className="radio-group">
                  <label>
                    <input
                      type="radio"
                      value="play"
                      checked={theme === 'play'}
                      onChange={handleThemeChange}
                    />
                    Play Theme
                  </label>
                  <label>
                    <input
                      type="radio"
                      value="work"
                      checked={theme === 'work'}
                      onChange={handleThemeChange}
                    />
                    Work Theme
                  </label>
                </div>
              </li>

              {/* Season Group */}
              <li>
                <div className="group-title">Season</div>
                <div className="theme-control">   
                  <label>
                    <input
                      type="checkbox"
                      checked={!overrideFlag}
                      onChange={handleOverrideChange}
                    />
                    Date-based
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="4"
                    step="1"
                    value={season} // Assuming timeOfDay is a state variable for the slider position
                    onChange={handleSeasonChange}
                    className="slider"
                  />
                </div>
                <div className="slider-labels">
    <span className="season-icon winter-icon">❄️</span>
    <span className="season-icon spring-icon">🌸</span>
    <span className="season-icon summer-icon">☀️</span>
    <span className="season-icon autumn-icon">🍂</span>
  </div>
              </li>

              {/* Time of Day Group */}
              <li>
                <div className="group-title">Time of Day</div>
                <div className="theme-control">   
                  <label>
                    <input
                      type="checkbox"
                      checked={!overrideFlag}
                      onChange={handleOverrideChange}
                    />
                    Time-based
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={timeOfDay} // Assuming timeOfDay is a state variable for the slider position
                    onChange={handleTimeChange}
                    className="slider"
                  />
                </div>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
