// src/components/QuestCarousel/QuestCarousel.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import QuestCard from '../QuestCard/QuestCard';
import './QuestCarousel.css';
import quests from '../../data/quests.data';  // Assuming quest data is here

interface QuestCarouselProps {
  type: 'main' | 'side';  // to distinguish between main and side quests
}

const QuestCarousel: React.FC<QuestCarouselProps> = ({ type }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

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

  const currentQuest = filteredQuests[currentIndex];

  return (
    <div className="carousel-container">
      <button className="carousel-control left" onClick={goToPrevious}>
        ◀
      </button>

      <div className="carousel-card">
        <QuestCard quest={currentQuest} />
        <button
          className="details-button"
          onClick={() => navigate(`/quest/${currentQuest.id}`)}
        >
          View Details
        </button>
      </div>

      <button className="carousel-control right" onClick={goToNext}>
        ▶
      </button>
    </div>
  );
};

export default QuestCarousel;
