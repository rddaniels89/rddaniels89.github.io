import React, { useMemo, useState } from 'react';
import './Accomplishments.css';  // You will add styling for layout here
import quests from '../../data/quests.data';  // Importing quest data
import CollapsibleSection from '../CollapsibleSection/CollapsibleSection';

const Accomplishments: React.FC = () => {
  const [selectedRoles, setSelectedRoles] = useState<string[]>([]);

  // Flatten all accomplishments and attach company name and job duration to each accomplishment
  const allAccomplishments = quests.flatMap(quest =>
    quest.accomplishments.map(accomplishment => ({
      ...accomplishment,
      company: quest.company,
      startDate: quest.startDate, // Convert start date
      endDate: quest.endDate.getDate() === new Date(2038,2,10).getDate()
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

  const getDateRangeForRole = (role: string) => {
    const accomplishmentsForRole = filteredAccomplishments.filter(acc => acc.role === role);
    if (accomplishmentsForRole.length === 0) return null;
    const startDates = accomplishmentsForRole.map(acc => acc.startDate).sort((a, b) => a.getTime() - b.getTime());
    const endDates = accomplishmentsForRole.map(acc => acc.endDate).sort((a, b) => b.getTime() - a.getTime());
    const firstStartDate = startDates[0];
    const lastEndDate = endDates[0];
    return `${firstStartDate.toLocaleDateString()} – ${lastEndDate.getDate() === new Date().getDate() ? "Present": lastEndDate.toLocaleDateString()}`;
    
  };

  const getUniqueLearningsForRole = (role: string) => {
    const learningsForRole = filteredAccomplishments
      .filter(acc => acc.role === role)
      .flatMap(acc => acc.learnings);
    return Array.from(new Set(learningsForRole)); // Unique learnings
  };
  
  const getUniqueCompaniesForRole = (role: string) => {
    const companiesForRole = filteredAccomplishments
      .filter(acc => acc.role === role)
      .map(acc => acc.company);
    return Array.from(new Set(companiesForRole)); // Unique companies for each role
  };

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
                {getDateRangeForRole(role) && (
  <p><strong>Date Range:</strong> {getDateRangeForRole(role)}</p>
)}


                {/* Accomplishments */}
 <CollapsibleSection title="Accomplishments">
    {filteredAccomplishments
      .filter(acc => acc.role === role)
      .map((acc, index) => (
        <div key={index} className="accomplishment-entry">
          <p>{acc.description}</p>
        </div>
    ))}
  </CollapsibleSection>
                {/* Learnings */}

<CollapsibleSection title="Learnings">
    
      {getUniqueLearningsForRole(role).map((learning, index) => (
                <div key={index} className="accomplishment-entry">
                <p>{learning}</p>
              </div>
      ))}
    
  </CollapsibleSection>


                {/* Companies */}
                <h3>Companies:</h3>
<p>{getUniqueCompaniesForRole(role).join(', ')}</p>

              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Accomplishments;
