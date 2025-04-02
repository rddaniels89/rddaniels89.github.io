// src/App.tsx
import React, { useEffect } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import AppRoutes from './AppRoutes';
import ViewportWarning from './components/ViewportWarning/ViewportWarning';

// AppContent component that handles theme body class
const AppContent: React.FC = () => {
  const { theme } = useTheme();
  
  useEffect(() => {
    // Remove any existing theme classes
    document.body.classList.remove('sleek', 'recon');
    // Add the current theme class
    document.body.classList.add(theme);
  }, [theme]);
  
  return (
    <>
      <ViewportWarning />
      <AppRoutes />
    </>
  );
};

// App component that wraps the AppContent with ThemeProvider and Router
const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  );
};

export default App;