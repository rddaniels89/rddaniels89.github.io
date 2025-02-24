// src/App.tsx
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, useTheme } from './context/ThemeContext'; // Import ThemeProvider
import Navbar from './components/Navbar/Navbar';
import MainMenu from './components/MainMenu/MainMenu';
import Accomplishments from './components/Accomplishments/Accomplishements';
import QuestCarousel from './components/QuestCarousel/QuestCarousel';
import QuestSwitcher from './components/QuestSwitcher/QuestSwitcher';

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
        <Route path="/" element={<QuestSwitcher type='main'>
              <Navbar />
              <QuestCarousel type={'main'}  /> 
            </QuestSwitcher>} />  
        {/* Unified routes for quests */}
        <Route path="/quests/main" element={<QuestSwitcher type="main">
              <Navbar />
              <QuestCarousel type={'main'}  /> 
            </QuestSwitcher>} />


            <Route path="/quests/side" element={<QuestSwitcher type="side">
              <Navbar />
              <QuestCarousel type={'side'}  /> 
            </QuestSwitcher>} />  
      
        {/* Main Menu */}
        <Route path="/main-menu" element={<QuestSwitcher>
              <Navbar />
              <MainMenu /> 
            </QuestSwitcher>} />

            <Route path="/accomplishments" element={<QuestSwitcher type="main">
              <Navbar />
              <Accomplishments /> 
            </QuestSwitcher>} />      
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
