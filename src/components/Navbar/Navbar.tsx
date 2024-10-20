import { faHome, faTasks, faList, faMedal, faSun, faMoon, faPaintRoller } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import './Navbar.css';
import { labels } from "../../data/labels";

const Navbar: React.FC = () => {
  const { theme, setTheme, season, setSeason, timeOfDay, setTimeOfDay, overrideFlag, setOverrideFlag } = useTheme()!;
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleSeasonChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(event.target.value);  
    setOverrideFlag(true);
    setSeason(value);
    setDropdownOpen(true);
  };

  const handleTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(event.target.value);
    setOverrideFlag(true);
    setTimeOfDay(value);
    setDropdownOpen(true);
  };

  const handleOverrideChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    setOverrideFlag(!isChecked); 
    setDropdownOpen(true);
  };

  const mainMenuLabel = labels[theme]["mainMenu"];
  const mainLabel = labels[theme]["main"];
  const sideLabel = labels[theme]["side"];
  const accomplishmentLabel = labels[theme]["accomplishments"];
  return (
    <nav className={`navbar ${theme}`}>
      <div>
        <Link to="/main-menu">
          <FontAwesomeIcon icon={faHome} /> {mainMenuLabel}
        </Link>
        <Link to="/accomplishments">
          <FontAwesomeIcon icon={faMedal} /> {accomplishmentLabel}
        </Link>
        <Link to="/quests/main">
          <FontAwesomeIcon icon={faTasks} /> {mainLabel}
        </Link>
        <Link to="/quests/side">
          <FontAwesomeIcon icon={faList} /> {sideLabel}
        </Link>
      </div>

      <div>
        {/* Switch to Work/Play Mode */}
        <button className="theme-toggle" onClick={() => setTheme(theme === 'play' ? 'work' : 'play')}>
          {theme === 'play' ? <FontAwesomeIcon icon={faMoon} /> : <FontAwesomeIcon icon={faSun} />}
          Switch to {theme === 'play' ? 'Work Mode' : 'Play Mode'}
        </button>

        <>
        {theme == 'play' ? (
        <button className="date-time-toggle" onClick={toggleDropdown} > <FontAwesomeIcon icon={faPaintRoller}/>
        Theme
      </button>) :(<p></p>)
        }
        </>


        {isDropdownOpen && (
          <div className="dropdown">
            <ul className="dropdown-menu">
              {/* Season Group */}
              <li>
                <div className="group-title">Season              
                  <br></br>
                  <label>
                    <input
                      type="checkbox"
                      checked={!overrideFlag}
                      onChange={handleOverrideChange}
                    />
                    Auto
                  </label></div>
                <div className="theme-control">   
                  <input
                    type="range"
                    min="1"
                    max="4"
                    step="1"
                    value={season}
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
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={timeOfDay}
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
