// CodexDetail.tsx
import React from 'react';
import { useParams } from 'react-router-dom';
import './CodexDetail.css';
import codexes, { Codex } from '../../data/codex.data'


// Mock Data (This will usually be fetched from a server)
const codexPosts: Codex[] = [
  // Add sample posts here
];

const CodexDetail: React.FC = () => {
  const { id } = useParams();  // Get the id from the URL
  const codex = codexes.find((post) => post.id === parseInt(id ?? '0'));  // Find the blog post by id
  const audioUrl = `https://your-storage-service-url/${codex?.id}.mp3`;
  if (!codex) {
    return <p>Codex entry not found</p>;
  }

  return (
    <div className="codex-detail">
      <h1>{codex.title}</h1>
      <p>{codex.dateAuthored} • {codex.timeToRead}</p>
      <div className="categories">
        {codex.categories.map((category, index) => (
          <span key={index} className="category">{category}</span>
        ))}
      </div>
      <div className="content">
        <p>{codex.content}</p>
      </div>
      {codex.sources && (
        <div className="sources">
          <h3>Sources</h3>
          <ul>
            {codex.sources.map((source, index) => (
              <li key={index}>
                <a href={source.url} target="_blank" rel="noopener noreferrer">
                  {source.clickableTitle}
                </a> - {source.date} • Relevance Score: {source.BlogRelevanceScore}
              </li>
            ))}
          </ul>
        </div>
      )}
            <div className="audio-player">
        <audio controls>
          <source src={audioUrl} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>
    </div>
  );
};

export default CodexDetail;
