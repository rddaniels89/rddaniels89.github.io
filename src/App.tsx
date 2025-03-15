// src/App.tsx
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useParams } from 'react-router-dom';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import Navbar from './components/Navbar/Navbar';
import MainMenu from './components/MainMenu/MainMenu';
import Accomplishments from './components/Accomplishments/Accomplishements';
import QuestCarousel from './components/QuestCarousel/QuestCarousel';
import QuestSwitcher from './components/QuestSwitcher/QuestSwitcher';
import QuestDetail from './components/QuestDetail/QuestDetail';

// Helper component to handle quest ID from URL
const QuestDetailWrapper = () => {
  const { id } = useParams<{ id: string }>();
  return <QuestDetail id={parseInt(id || '-1', 10)} />;
};

// AppContent component that handles dynamic routing
const AppContent: React.FC = () => {
  const { theme } = useTheme()!;
  
  useEffect(() => {
    document.body.classList.remove('work', 'play');
    document.body.classList.add(theme);
  }, [theme]);
  
  return (
    <>
      <Routes>
        {/* Default route redirects to main quests */}
        <Route path="/" element={<QuestSwitcher type="main">
          <Navbar />
          <QuestCarousel type="main" />
        </QuestSwitcher>} />
        
        {/* Main Menu */}
        <Route path="/main-menu" element={<QuestSwitcher>
          <Navbar />
          <MainMenu />
        </QuestSwitcher>} />
        
        {/* Main Quests */}
        <Route path="/quests/main" element={<QuestSwitcher type="main">
          <Navbar />
          <QuestCarousel type="main" />
        </QuestSwitcher>} />
        
        {/* Side Quests */}
        <Route path="/quests/side" element={<QuestSwitcher type="side">
          <Navbar />
          <QuestCarousel type="side" />
        </QuestSwitcher>} />
        
        {/* Individual Quest Detail */}
        <Route path="/quests/:id" element={<QuestSwitcher>
          <Navbar />
          <QuestDetailWrapper />
        </QuestSwitcher>} />
        
        {/* Accomplishments */}
        <Route path="/accomplishments" element={<QuestSwitcher type="main">
          <Navbar />
          <Accomplishments />
        </QuestSwitcher>} />
        
        {/* Fallback for unmatched routes */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

// App component that wraps the AppContent with ThemeProvider and Router
const App: React.FC = () => {
  // For GitHub Pages, we need to use the repository name as the basename
  const basename = process.env.NODE_ENV === 'production' ? '/zowilliams.github.io' : '/';
  
  return (
    <ThemeProvider>
      <Router basename={basename}>
        <AppContent />
      </Router>
    </ThemeProvider>
  );
};

export default App;