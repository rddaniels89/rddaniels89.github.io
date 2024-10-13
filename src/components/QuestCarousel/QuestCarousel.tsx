// src/components/QuestCarousel/QuestCarousel.tsx
import React, { useState } from 'react';
import QuestCard from '../QuestCard/QuestCard';
import './QuestCarousel.css';
import quests from '../../data/quests.data';  // Assuming quest data is here
import QuestDetail from '../QuestDetail/QuestDetail';
import { useTheme } from '../../context/ThemeContext';

interface QuestCarouselProps {
  type: 'main' | 'side';  // to distinguish between main and side quests
}

const QuestCarousel: React.FC<QuestCarouselProps> = ({ type }) => {
  const [currentIndex, setCurrentIndex] = useState(1);  // Start with the second quest as the centered card
  const themeContext = useTheme();
  if (!themeContext) return null;

  const { theme, timeOfDay, season, setTheme } = themeContext;

  // Filter quests by type (main or side)
  const filteredQuests = quests.filter((quest) => quest.type === type);

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === filteredQuests.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? filteredQuests.length - 1 : prevIndex - 1
    );
  };

  // Get the quests for display, ensuring 3 cards are shown
  const previousQuest = filteredQuests[(currentIndex - 1 + filteredQuests.length) % filteredQuests.length];
  const currentQuest = filteredQuests[currentIndex];
  const nextQuest = filteredQuests[(currentIndex + 1) % filteredQuests.length];

  return (
    <div className={`carousel-container ${theme}`}>

      <div className="carousel-cards">
      <button className="carousel-control left" onClick={goToPrevious}>
        ◀
      </button>
        {/* Previous Quest */}
        <div className="carousel-card small-card" onClick={goToPrevious}>
          <QuestCard quest={previousQuest} />
        </div>

        {/* Centered Quest */}
        <div className="carousel-card center-card">
          <QuestCard quest={currentQuest} />

        </div>

        {/* Next Quest */}
        <div className="carousel-card small-card" onClick={goToNext}>
          <QuestCard quest={nextQuest} />
        </div>
        <button className="carousel-control right" onClick={goToNext}>
        ▶
      </button>
      </div>
      <div className="quest-details-label">Quest Details</div>

      {/* Details Panel for the centered quest */}
      <div className="details-panel">
      <QuestDetail id = {currentQuest.id}/>
      </div>
    </div>
  );
};

export default QuestCarousel;
