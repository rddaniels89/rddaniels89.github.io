// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext'; // Import ThemeProvider
import Navbar from './components/Navbar/Navbar';
import QuestDetail from './components/QuestDetail/QuestDetail';
import QuestSwitcher from './components/QuestSwitcher/QuestSwitcher';
import MainMenu from './components/MainMenu/MainMenu';
import CodexDetail from './components/CodexDetail/CodexDetail';
import CodexCardList from './components/CodexCardList/CodexCardList';
import Accomplishments from './components/Accomplishments/Accomplishements';
import TVScreen from './components/TVScreen/TVScreen';
import QuestCarousel from './components/QuestCarousel/QuestCarousel';

// AppContent component that handles dynamic routing
const AppContent: React.FC = () => {

  return (
    <>
    
      
      
      <Routes>
        {/* Default route redirects to main quests */}
        <Route path="/" element={<Navigate to="/quests/main" />} />

        {/* Unified routes for quests */}
        <Route path="/quests/main" element={<TVScreen type="main">
              <Navbar />
              <QuestCarousel type={'main'}  /> 
            </TVScreen>} />  
            <Route path="/quests/side" element={<TVScreen type="side">
              <Navbar />
              <QuestCarousel type={'side'}  /> 
            </TVScreen>} />  
      
        {/* Main Menu */}
        <Route path="/main-menu" element={<TVScreen>
              <Navbar />
              <MainMenu /> 
            </TVScreen>} />
            <Route path="/" element={<TVScreen>
              <Navbar />
              <MainMenu /> 
            </TVScreen>} />
        <Route path="/codexDetail/:id" element={<CodexDetail />} />
        <Route path="/codex" element={<CodexCardList />} />
        <Route path="/accomplishments" element={<Accomplishments />} />

      </Routes>
    </>
  );
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
