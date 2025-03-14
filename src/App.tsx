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
// Import CodexDetail if it exists
// import CodexDetail from './components/CodexDetail/CodexDetail';

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
        <Route path="/" element={<Navigate to="/quests/main" />} />
        
        {/* Main Menu */}
        <Route path="/main-menu" element={
          <QuestSwitcher>
            <Navbar />
            <MainMenu />
          </QuestSwitcher>
        } />
        
        {/* Quests Routes */}
        <Route path="/quests">
          {/* Redirect from /quests (without additional path) to home */}
          <Route index element={<Navigate to="/" />} />
          
          {/* Main Quests */}
          <Route path="main" element={
            <QuestSwitcher type="main">
              <Navbar />
              <QuestCarousel type="main" />
            </QuestSwitcher>
          } />
          
          {/* Side Quests */}
          <Route path="side" element={
            <QuestSwitcher type="side">
              <Navbar />
              <QuestCarousel type="side" />
            </QuestSwitcher>
          } />
          
          {/* Individual Quest Detail */}
          <Route path=":id" element={
            <QuestSwitcher>
              <Navbar />
              <QuestDetailWrapper />
            </QuestSwitcher>
          } />
        </Route>
        
        {/* Accomplishments */}
        <Route path="/accomplishments" element={
          <QuestSwitcher type="main">
            <Navbar />
            <Accomplishments />
          </QuestSwitcher>
        } />
        
        {/* CodexDetail Route - uncomment if needed */}
        {/* <Route path="/codexDetail/:id" element={
          <QuestSwitcher>
            <Navbar />
            <CodexDetail />
          </QuestSwitcher>
        } /> */}
        
        {/* Fallback for unmatched routes */}
        <Route path="*" element={<Navigate to="/main-menu" />} />
      </Routes>
    </>
  );
};

// Helper component to handle quest ID from URL
const QuestDetailWrapper: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  return <QuestDetail id={parseInt(id || '-1', 10)} />;
};

// App component that wraps the AppContent with ThemeProvider and Router
const App: React.FC = () => {
  const basename = process.env.NODE_ENV === 'production' ? process.env.PUBLIC_URL : '';
  
  return (
    <ThemeProvider>
      <Router basename={basename}>
        <AppContent />
      </Router>
    </ThemeProvider>
  );
};

export default App;