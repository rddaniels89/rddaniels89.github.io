import React, { useMemo, useState } from 'react';
import './Accomplishments.css';
import quests from '../../data/quests.data';

interface Accomplishment {
  description: string;
  role: string;
  company: string;
  startDate: Date;
  endDate: Date;
  learnings: string[];
}

const Accomplishments: React.FC = () => {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);

  // Flatten all accomplishments
  const allAccomplishments: Accomplishment[] = quests.flatMap(quest =>
    quest.accomplishments.map(accomplishment => ({
      ...accomplishment,
      company: quest.company!,
      startDate: quest.startDate,
      endDate: quest.endDate,
    }))
  );

  // Count how many items per role
  const roleCounts = useMemo(() => {
    const counts: { [key: string]: number } = {};
    allAccomplishments.forEach(acc => {
      counts[acc.role] = (counts[acc.role] || 0) + 1;
    });
    return counts;
  }, [allAccomplishments]);

  // Sort roles descending by count
  const sortedRoles = Object.keys(roleCounts).sort(
    (a, b) => roleCounts[b] - roleCounts[a]
  );

  // Filter for the currently selected role
  const filtered = selectedRole
    ? allAccomplishments.filter(acc => acc.role === selectedRole)
    : [];

  // Helpers
  const getDateRange = (accomplishments: Accomplishment[]) => {
    if (!accomplishments.length) return null;
    const sortedByStart = [...accomplishments].sort((a, b) => a.startDate.getTime() - b.startDate.getTime());
    const sortedByEnd = [...accomplishments].sort((a, b) => b.endDate.getTime() - a.endDate.getTime());
    const firstStart = sortedByStart[0].startDate;
    const lastEnd = sortedByEnd[0].endDate;
    return `${firstStart.toLocaleDateString()} – ${
      lastEnd.getTime() >= new Date().getTime() ? 'Present' : lastEnd.toLocaleDateString()
    }`;
  };

  const getUniqueCompanies = (accomplishments: Accomplishment[]) => {
    const companies = accomplishments.map(acc => acc.company);
    return Array.from(new Set(companies));
  };

  const getUniqueLearnings = (accomplishments: Accomplishment[]) => {
    return Array.from(
      new Set(accomplishments.flatMap(acc => acc.learnings))
    );
  };

  return (
    <div className="accomplishment-layout">
      {/* === SIDE PANEL FOR ROLES === */}
      <div className="filter-panel">
        <h3>Roles</h3>
        {sortedRoles.map(role => (
          <button
            key={role}
            className={`accomplishment-filter-button ${selectedRole === role ? 'active' : ''}`}
            onClick={() => setSelectedRole(role === selectedRole ? null : role)}
          >
            {role} <span className="role-count">{roleCounts[role]}</span>
          </button>
        ))}
      </div>

      {/* === MAIN DETAIL AREA === */}
      <div className="accomplishment-detail">
        {!selectedRole ? (
          <p className="placeholder-text">Please select a role to view accomplishments.</p>
        ) : (
          <div className="role-content">
            {/* TOP SUMMARY: ROLE NAME, DATE RANGE, COMPANIES */}
            <div className="role-summary">
              <h2>{selectedRole}</h2>
              <p>
                <strong>Date Range:</strong> {getDateRange(filtered)}
              </p>
              <p>
                <strong>Companies:</strong> {getUniqueCompanies(filtered).join(', ')}
              </p>
            </div>
              {/* Right Column: Learnings */}
              <div >
                <h3>Learned how to...</h3>
                <ul className="accomplishment-list">
                  {getUniqueLearnings(filtered).map((learning, i) => (
                    <li key={i} className="accomplishment-item">
                      {learning}
                    </li>
                  ))}
                </ul>
              </div>
            {/* TWO-COLUMN LAYOUT: ACCOMPLISHMENTS VS LEARNINGS */}
              {/* Left Column: Accomplishments */}
              <div>
                <h3>Accomplishments</h3>
                <ul className="accomplishment-list">
                  {filtered.map((acc, i) => (
                    <li key={i} className="accomplishment-item">
                      {acc.description}
                    </li>
                  ))}
                </ul>
              </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Accomplishments;
