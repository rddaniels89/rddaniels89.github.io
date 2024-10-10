// src/context/ThemeContext.tsx
import React, { createContext, useContext, useState } from 'react';

// Define a context for the theme
const ThemeContext = createContext<any>(null);

// Custom hook to use the theme
export const useTheme = () => useContext(ThemeContext);

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<'work' | 'play'>('play');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
