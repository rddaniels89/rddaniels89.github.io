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

// AppContent component that handles dynamic routing
const AppContent: React.FC = () => {
  return (
    <>
      <Navbar />
      <Routes>
        {/* Default route redirects to main quests */}
        <Route path="/" element={<Navigate to="/quests/main" />} />

        {/* Unified routes for quests */}
        <Route path="/quests/main" element={<QuestSwitcher type="main" />} />
        <Route path="/quests/side" element={<QuestSwitcher type="side" />} />

        {/* Main Menu */}
        <Route path="/main-menu" element={<MainMenu />} />
        <Route path="/codexDetail/:id" element={<CodexDetail />} />
        <Route path="/codex" element={<CodexCardList />} />
      </Routes>
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
