// CodexCardList.tsx
import React, { useMemo, useState } from 'react';
import CodexCard from '../CodexCard/CodexCard';
import './CodexCardList.css';
import codexes from '../../data/codex.data';

const codexPosts = codexes;
const CodexCardList: React.FC = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [filteredPosts, setFilteredPosts] = useState(codexPosts);

  const allCategories = Array.from(new Set(codexPosts.flatMap(post => post.categories)));

  // Filter posts by category
  const handleCategoryClick = (category: string) => {
    const newCategories = selectedCategories.includes(category)
      ? selectedCategories.filter(c => c !== category)
      : [...selectedCategories, category];
  
    setSelectedCategories(newCategories);
  
    if (newCategories.length === 0) {
      setFilteredPosts(codexPosts); // Show all posts if no category is selected
    } else {
      setFilteredPosts(
        codexPosts.filter(post =>
          post.categories.some(cat => newCategories.includes(cat)) // Show posts if at least one category matches
        )
      );
    }
  };
  const categoryCounts = useMemo(() => {
    const counts: { [key: string]: number } = {};
    allCategories.forEach((category) => {
      counts[category] = filteredPosts.filter((post) =>
        post.categories.includes(category)
      ).length;
    });
    return counts;
  }, [filteredPosts]);
  
  return (
    <div className="codex-layout">
      {/* Left-side panel for category filtering */}
      <div className="filter-panel">
        <h3>Categories</h3>
        {allCategories.map((category, index) => (
  <button
    key={index}
    className={`filter-button ${selectedCategories.includes(category) ? 'active' : ''}`}
    onClick={() => handleCategoryClick(category)}
  >
    {category} <span className="category-count">{categoryCounts[category]}</span>
  </button>
))}
      </div>

      {/* Codex cards */}
      <div className="codex-cards">
        {filteredPosts.map((post) => (
          
          <CodexCard
            key={post.id}
            id={post.id}
            title={post.title}
            dateAuthored={post.dateAuthored}
            timeToRead={post.timeToRead}
            categories={post.categories}
          />
        ))}
      </div>
    </div>
  );
};

export default CodexCardList;
