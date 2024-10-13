import React, { createContext, useContext, useEffect, useState } from 'react';
import { interpolateCSSVariables } from '../utils/interpolateColor'; // Import the interpolation function
import { interpolateTimeOfDay } from '../utils/interpolateTheme';
import { time } from 'console';
import { ThemeProperties } from '../data/styles.data';

type ThemeType = 'work' | 'play';
type Season = 'spring' | 'summer' | 'autumn' | 'winter';

interface ThemeContextProps {
  theme: ThemeType;
  setTheme: React.Dispatch<React.SetStateAction<ThemeType>>;
  season: number;
  setSeason: React.Dispatch<React.SetStateAction<number>>;
  timeOfDay: number;
  setTimeOfDay: React.Dispatch<React.SetStateAction<number>>;
  overrideFlag: boolean;
  setOverrideFlag: React.Dispatch<React.SetStateAction<boolean>>;
}

// Create the context with a default value of null
const ThemeContext = createContext<ThemeContextProps | null>(null);

// Custom hook to use the theme context
export const useTheme = () => useContext(ThemeContext);

// Define the ThemeProvider component
interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeType>('play');
  const [season, setSeason] = useState<number>(0.5);
  const [timeOfDay, setTimeOfDay] = useState<number>(0.5);
  const [overrideFlag, setOverrideFlag] = useState<boolean>(false);

  // Effect to set initial season and time of day based on current date
  useEffect(() => {

    if(!overrideFlag)
    {
      const hours = new Date().getHours();
      const month = new Date().getMonth();

      setTimeOfDay(mapHourToSlider(hours));
      setSeason(mapMonthToSlider(month));
    } 
    
    let currentSeason = 'winter';
    if (season <= 1 ) {
      currentSeason = 'winter';
    } else if (season <= 2) {
      currentSeason = 'spring';
    } else if (season <= 3) {
      currentSeason = 'summer';
    } else 
      currentSeason = 'autumn';
    
    const props = interpolateTimeOfDay(currentSeason, timeOfDay);
    applyTheme(props)
    
  
  }, [season, timeOfDay, overrideFlag]);

  
  return (
    <ThemeContext.Provider
      value={{ theme, setTheme, season, setSeason, timeOfDay, setTimeOfDay, overrideFlag, setOverrideFlag }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

const applyTheme = (theme: ThemeProperties) => {
  document.documentElement.style.setProperty('--background-color', theme.backgroundColor);
  document.documentElement.style.setProperty('--primary-color', theme.primaryColor);
  document.documentElement.style.setProperty('--accent-color', theme.accentColor);
  document.documentElement.style.setProperty('--border-color', theme.borderColor);
  document.documentElement.style.setProperty('--hover-color', theme.hoverColor);
  document.documentElement.style.setProperty('--shadow-color', theme.shadowColor);
  document.documentElement.style.setProperty('--highlight-color', theme.highlightColor);
};


const mapHourToSlider = (hour: number) => {
  if (hour >= 6 && hour <= 18) {
    return (hour - 6) / 12;  // Scale 6 AM to 6 PM to 0 - 0.5
  } else if (hour > 18) {
    return (hour - 18) / 12 + 0.5; // Scale 6 PM to 6 AM to 0.5 - 1
  } else {
    return hour / 6 + 0.5;  // 12 AM to 6 AM maps to 0.5 - 1
  }
};

const mapMonthToSlider = (month: number): number => {
  if (month >= 11 || month <= 1) return 1;  // Winter
  if (month >= 2 && month <= 4) return 2; // Spring
  if (month >= 5 && month <= 7) return 3;  // Summer
  if (month >= 8 && month <= 10) return 4;  // Fall
  return 1;  // Fallback, treat like Winter
};
