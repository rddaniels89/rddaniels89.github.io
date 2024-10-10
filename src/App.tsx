// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar/Navbar';
import QuestDetail from './components/QuestDetail/QuestDetail';
import QuestSwitcher from './components/QuestSwitcher/QuestSwitcher';
import MainMenu from './components/MainMenu/MainMenu';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Router>
        <Navbar />
        <Routes>
          {/* Default route redirects to main quests */}
          <Route path="/" element={<Navigate to="/quests/main" />} />

          {/* Unified routes for quests */}
          <Route path="/quests/main" element={<QuestSwitcher type="main" />} />
          <Route path="/quests/side" element={<QuestSwitcher type="side" />} />

          {/* Quest detail route */}
          <Route path="/quest/:id" element={<QuestDetail />} />

          {/* Main Menu */}
          <Route path="/main-menu" element={<MainMenu />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
