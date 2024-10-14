import React, { useMemo, useState } from 'react';
import './Accomplishments.css';  // You will add styling for layout here
import quests from '../../data/quests.data';  // Importing quest data
import { useTheme } from '../../context/ThemeContext';

const Accomplishments: React.FC = () => {
  const [selectedRoles, setSelectedRoles] = useState<string[]>([]);

  // Flatten all accomplishments and attach company name and job duration to each accomplishment
  const allAccomplishments = quests.flatMap(quest =>
    quest.accomplishments.map(accomplishment => ({
      ...accomplishment,
      company: quest.company,
      startDate: quest.startDate, // Convert start date
      endDate: quest.endDate.getDate() == new Date(2038,2,10).getDate()
        ? new Date()// Use current date for ongoing jobs
        : quest.endDate // Convert end date
    }))
  );

  // Get unique roles and calculate the number of accomplishments for each role
  const roleCounts = useMemo(() => {
    const counts: { [key: string]: number } = {};
    allAccomplishments.forEach(acc => {
      counts[acc.role] = (counts[acc.role] || 0) + 1;
    });
    return counts;
  }, [allAccomplishments]);

  // Sort roles by number of accomplishments (descending)
  const sortedRoles = Object.keys(roleCounts).sort((a, b) => roleCounts[b] - roleCounts[a]);

  // Handle role selection
  const handleRoleClick = (role: string) => {
    if (selectedRoles.includes(role)) {
      setSelectedRoles(selectedRoles.filter(r => r !== role)); // Deselect role
    } else {
      setSelectedRoles([...selectedRoles, role]); // Select role
    }
  };

  // Filter accomplishments based on selected roles
  const filteredAccomplishments = selectedRoles.length === 0 
    ? [] 
    : allAccomplishments.filter(acc => selectedRoles.includes(acc.role));

  // Get the unique list of learnings for the selected roles
  const uniqueLearnings = useMemo(() => {
    return Array.from(new Set(filteredAccomplishments.flatMap(acc => acc.learnings)));
  }, [filteredAccomplishments]);

  // Get the unique list of companies for the selected roles
  const uniqueCompanies = useMemo(() => {
    return Array.from(new Set(filteredAccomplishments.map(acc => acc.company)));
  }, [filteredAccomplishments]);

  // Get the date range for the selected roles
  const dateRange = useMemo(() => {
    if (filteredAccomplishments.length === 0) return null;
    const startDates = filteredAccomplishments.map(acc => acc.startDate).sort((a, b) => a.getTime() - b.getTime());
    const endDates = filteredAccomplishments.map(acc => acc.endDate).sort((a, b) => b.getTime() - a.getTime());
    const firstStartDate = startDates[0];
    const lastEndDate = endDates[0];
    return `${firstStartDate.toLocaleDateString()} – ${lastEndDate.toLocaleDateString()}`;
  }, [filteredAccomplishments]);

  return (
    <div className="accomplishment-layout">
      {/* Side Panel for Role Selection */}
      <div className="filter-panel">
        <h3>Roles</h3>
        {sortedRoles.map((role, index) => (
          <button
            key={index}
            className={`accomplishment-filter-button ${selectedRoles.includes(role) ? 'active' : ''}`}
            onClick={() => handleRoleClick(role)}
          >
            {role} <span className="role-count">{roleCounts[role]}</span>
          </button>
        ))}
      </div>

      {/* Center Panel for Displaying Accomplishments */}
      <div className="accomplishment-detail">
        {selectedRoles.length === 0 ? (
          <p className="placeholder-text">Please select a role to view related accomplishments.</p>
        ) : (
          <div>
            {/* Role Title */}
            {selectedRoles.map((role) => (
              <div key={role} className="role-group">
                <h2>{role}</h2>

                {/* Date Range */}
                {dateRange && <p><strong>Date Range:</strong> {dateRange}</p>}

                {/* Accomplishments */}
                <h3>Accomplishments:</h3>
                {filteredAccomplishments
                  .filter(acc => acc.role === role)
                  .map((acc, index) => (
                    <div key={index} className="accomplishment-entry">
                      <p>{acc.description}</p>
                    </div>
                ))}

                {/* Learnings */}
                <h3>Learnings:</h3>
                <ul>
                  {uniqueLearnings.map((learning, index) => (
                    <li key={index}>{learning}</li>
                  ))}
                </ul>

                {/* Companies */}
                <h3>Companies:</h3>
                <p>{uniqueCompanies.join(', ')}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Accomplishments;
