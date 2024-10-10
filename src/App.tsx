// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainMenu from './components/MainMenu/MainMenu';
import QuestList from './components/QuestList/QuestList';
import QuestDetail from './components/QuestDetail/QuestDetail';
import Navbar from './components/Navbar/Navbar';

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainMenu/>} />
        <Route path="/quests/:type" element={<QuestList />} />
        <Route path="/quest/:id" element={<QuestDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
