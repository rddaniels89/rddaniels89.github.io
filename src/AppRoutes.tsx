import React from 'react';
import { Routes, Route, Navigate, useParams } from 'react-router-dom';
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

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {/* Default route redirects to main quests */}
      <Route path="/" element={
        <QuestSwitcher type="main">
          <Navbar />
          <QuestCarousel type="main" />
        </QuestSwitcher>
      } />
      
      <Route path="/main-menu" element={
        <QuestSwitcher>
          <Navbar />
          <MainMenu />
        </QuestSwitcher>
      } />
      
      <Route path="/quests/main" element={
        <QuestSwitcher type="main">
          <Navbar />
          <QuestCarousel type="main" />
        </QuestSwitcher>
      } />
      
      <Route path="/quests/side" element={
        <QuestSwitcher type="side">
          <Navbar />
          <QuestCarousel type="side" />
        </QuestSwitcher>
      } />
      
      <Route path="/quests/:id" element={
        <QuestSwitcher>
          <Navbar />
          <QuestDetailWrapper />
        </QuestSwitcher>
      } />
      
      <Route path="/accomplishments" element={
        <QuestSwitcher type="main">
          <Navbar />
          <Accomplishments />
        </QuestSwitcher>
      } />
      
      {/* Fallback for unmatched routes */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRoutes;