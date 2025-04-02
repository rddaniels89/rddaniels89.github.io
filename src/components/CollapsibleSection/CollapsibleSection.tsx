// New Component for Collapsible Section
import React, { useState } from 'react';
import './CollapsibleSection.css';

interface CollapsibleSectionProps {
    title: string;
    subtitle?: string;
    isEducationOrPersonal?: boolean;
    children?: React.ReactNode;
}

const CollapsibleSection: React.FC<CollapsibleSectionProps> = ({ title, subtitle, isEducationOrPersonal, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`collapsible-section ${isOpen ? 'open' : ''} ${isEducationOrPersonal ? 'education' : ''}`}>
      <h3 onClick={() => setIsOpen(!isOpen)} className="collapsible-title">
        {title} {subtitle && <span className="subtitle">({subtitle})</span>} <span className="toggle-icon">{isOpen ? '▼' : '▶'}</span>
      </h3>
      {isOpen && <div className="collapsible-content">{children}</div>}
    </div>
  );
};

export default CollapsibleSection;
