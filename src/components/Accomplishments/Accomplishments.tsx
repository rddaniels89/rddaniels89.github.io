// src/components/Accomplishments/Accomplishments.tsx
import React, { useMemo, useState } from 'react';
import './Accomplishments.css';
import quests from '../../data/quests.data';
import { useTheme } from '../../context/ThemeContext';
import CollapsibleSection from '../CollapsibleSection/CollapsibleSection';

interface Accomplishment {
  description: string;
  role: string;
  company?: string;
  learnings: string[];
}

interface GroupedAccomplishment extends Accomplishment {
  questId: number;
  startDate: Date;
  endDate: Date;
}

const Accomplishments: React.FC = () => {
  const [viewMode, setViewMode] = useState<'role' | 'company'>('role');
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [selectedCompany, setSelectedCompany] = useState<string | null>(null);
  const { theme } = useTheme()!;

  // Process and flatten all accomplishments
  const processedAccomplishments = useMemo(() => {
    return quests.flatMap(quest =>
      quest.accomplishments.map(acc => ({
        ...acc,
        questId: quest.id,
        company: quest.company || 'Personal Project',
        startDate: quest.startDate,
        endDate: quest.endDate,
      }))
    );
  }, []);

  // Get unique roles and companies
  const roles = useMemo(() => 
    Array.from(new Set(processedAccomplishments.map(acc => acc.role))),
  [processedAccomplishments]);
  
  const companies = useMemo(() => 
    Array.from(new Set(processedAccomplishments
      .filter(acc => acc.company) // Filter out undefined companies
      .map(acc => acc.company as string))),
  [processedAccomplishments]);

  // Calculate counts
  const roleCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    processedAccomplishments.forEach(acc => {
      counts[acc.role] = (counts[acc.role] || 0) + 1;
    });
    return counts;
  }, [processedAccomplishments]);

  const companyCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    processedAccomplishments.forEach(acc => {
      if (acc.company) {
        counts[acc.company] = (counts[acc.company] || 0) + 1;
      }
    });
    return counts;
  }, [processedAccomplishments]);

  // Filter accomplishments based on selection
  const filteredAccomplishments = useMemo(() => {
    if (viewMode === 'role' && selectedRole) {
      return processedAccomplishments.filter(acc => acc.role === selectedRole);
    } else if (viewMode === 'company' && selectedCompany) {
      return processedAccomplishments.filter(acc => acc.company === selectedCompany);
    }
    return [];
  }, [processedAccomplishments, selectedRole, selectedCompany, viewMode]);

  // Group accomplishments by company or role based on view mode
  const groupedAccomplishments = useMemo(() => {
    if (!filteredAccomplishments.length) return {};
    
    if (viewMode === 'role') {
      // Group by company when viewing by role
      return filteredAccomplishments.reduce((groups, acc) => {
        const key = acc.company || 'Unknown';
        if (!groups[key]) groups[key] = [];
        groups[key].push(acc);
        return groups;
      }, {} as Record<string, GroupedAccomplishment[]>);
    } else {
      // Group by role when viewing by company
      return filteredAccomplishments.reduce((groups, acc) => {
        if (!groups[acc.role]) groups[acc.role] = [];
        groups[acc.role].push(acc);
        return groups;
      }, {} as Record<string, GroupedAccomplishment[]>);
    }
  }, [filteredAccomplishments, viewMode]);

  // Get unique learnings grouped by company/role
  const learningsByGroup = useMemo(() => {
    if (viewMode === 'role' && selectedRole) {
      // When viewing by role, group learnings by company
      return Object.entries(groupedAccomplishments).reduce((result, [company, accs]) => {
        result[company] = Array.from(new Set(accs.flatMap(acc => acc.learnings)));
        return result;
      }, {} as Record<string, string[]>);
    } else if (viewMode === 'company' && selectedCompany) {
      // When viewing by company, group learnings by role
      return Object.entries(groupedAccomplishments).reduce((result, [role, accs]) => {
        result[role] = Array.from(new Set(accs.flatMap(acc => acc.learnings)));
        return result;
      }, {} as Record<string, string[]>);
    }
    return {};
  }, [groupedAccomplishments, viewMode, selectedRole, selectedCompany]);

  // Helper functions
  const getDateRange = (accs: GroupedAccomplishment[]) => {
    if (!accs.length) return "N/A";
    
    const earliest = new Date(Math.min(...accs.map(a => a.startDate.getTime())));
    const latest = new Date(Math.max(...accs.map(a => a.endDate.getTime())));
    
    const formatDate = (date: Date) => {
      return date.toLocaleDateString(undefined, { 
        year: 'numeric', 
        month: 'short'
      });
    };
    
    return `${formatDate(earliest)} – ${latest.getFullYear() >= 2030 ? 'Present' : formatDate(latest)}`;
  };

  // Get story summary based on view mode and theme
  const getStorySummary = () => {
    if (!filteredAccomplishments.length) return null;
    
    if (theme === 'play') {
      if (viewMode === 'role') {
        return `As a ${selectedRole}, you've embarked on ${filteredAccomplishments.length} 
        quests across ${Object.keys(groupedAccomplishments).length} different guilds, 
        mastering ${Array.from(new Set(filteredAccomplishments.flatMap(acc => acc.learnings))).length} 
        unique skills along your journey.`;
      } else {
        return `Your adventures with the ${selectedCompany} guild have led you through 
        ${filteredAccomplishments.length} challenging quests, where you've taken on 
        ${Object.keys(groupedAccomplishments).length} different roles and gained 
        ${Array.from(new Set(filteredAccomplishments.flatMap(acc => acc.learnings))).length} powerful abilities.`;
      }
    } else {
      if (viewMode === 'role') {
        return `In my career as a ${selectedRole}, I've contributed to ${Object.keys(groupedAccomplishments).length} 
        different organizations, having ${filteredAccomplishments.length} key contributions 
        and developing in ${Array.from(new Set(filteredAccomplishments.flatMap(acc => acc.learnings))).length} 
        distinct professional competencies.`;
      } else {
        return `During my tenure at ${selectedCompany}, ${quests.filter(acc => acc.company === selectedCompany).map(descr => descr.summary)}`;
      }
    }
  };

  return (
    <div className={`accomplishment-layout ${theme}`}>
      {/* Filter Panel */}
      <div className="filter-panel">
        <div className="view-mode-selector">
          <button 
            className={`view-mode-btn ${viewMode === 'role' ? 'active' : ''}`}
            onClick={() => {
              setViewMode('role');
              setSelectedCompany(null);
            }}
          >
            {theme === 'play' ? 'By Class' : 'By Role'}
          </button>
          <button 
            className={`view-mode-btn ${viewMode === 'company' ? 'active' : ''}`}
            onClick={() => {
              setViewMode('company');
              setSelectedRole(null);
            }}
          >
            {theme === 'play' ? 'By Guild' : 'By Company'}
          </button>
        </div>

        <h3>{viewMode === 'role' ? (theme === 'play' ? 'Classes' : 'Roles') : (theme === 'play' ? 'Guilds' : 'Companies')}</h3>
        
        {viewMode === 'role' ? (
          roles.map(role => (
            <button
              key={role}
              className={`accomplishment-filter-button ${selectedRole === role ? 'active' : ''}`}
              onClick={() => setSelectedRole(role === selectedRole ? null : role)}
            >
              {role} <span className="role-count">{roleCounts[role]}</span>
            </button>
          ))
        ) : (
          companies.map(company => (
            <button
              key={company}
              className={`accomplishment-filter-button ${selectedCompany === company ? 'active' : ''}`}
              onClick={() => setSelectedCompany(company === selectedCompany ? null : company)}
            >
              {company} <span className="role-count">{companyCounts[company]}</span>
            </button>
          ))
        )}
      </div>

      {/* Main Content */}
      <div className="accomplishment-detail">
        {!selectedRole && !selectedCompany ? (
          <div className="empty-state">
            {theme === 'play' ? (
              <>
                <div className="pixel-icon">📜</div>
                <h2>Select Your Quest Log!</h2>
                <p>Choose a class or guild from the left panel to view your epic journey.</p>
              </>
            ) : (
              <>
                <h2>Professional Journey</h2>
                <p>Please select a role or company from the left panel to explore your career accomplishments.</p>
              </>
            )}
          </div>
        ) : (
          <div className="role-content">
            {/* Header */}
            <div className="role-summary">
              <h2>{viewMode === 'role' ? selectedRole : selectedCompany}</h2>
              <p className="date-range">
                <span>{getDateRange(filteredAccomplishments)}</span>
              </p>
              
              {/* Career Story Summary */}
              <div className="career-story">
                <p>{getStorySummary()}</p>
              </div>
            </div>

            {/* Combined Timeline View */}
            <section className="journey-section">
              {Object.entries(groupedAccomplishments).map(([groupName, accomplishments]) => {
                // Sort accomplishments by date (most recent first)
                const sortedAccs = [...accomplishments].sort(
                  (a, b) => b.startDate.getTime() - a.startDate.getTime()
                );
                
                // Get date range for this group
                const dateRange = getDateRange(sortedAccs);
                
                // Get learnings for this group
                const groupLearnings = learningsByGroup[groupName] || [];
                
                return (
                  <div key={groupName} className="journey-milestone">
                    <div className="milestone-header">
                      <h3>{groupName}</h3>
                      <span className="milestone-date">{dateRange}</span>
                    </div>
                    
                    <div className="milestone-content">
                      {/* Skills learned section */}
                      {/* Accomplishments section */}
                      <div className="milestone-accomplishments">
                        <h4>
                          {theme === 'play' ? 'Quests Completed' : 'Key Contributions'}
                        </h4>
                        <ul className="accomplishment-list">
                          {sortedAccs.map((acc, idx) => (
                            <li key={`${groupName}-${idx}`} className="accomplishment-item">
                              {acc.description}
                            </li>
                          ))}
                        </ul>
                      </div>
                      {groupLearnings.length > 0 && (
                        <div className="milestone-skills">
                          <h4>
                            {theme === 'play' ? 'Skills Mastered' : 'Professional Development'}
                          </h4>
                          <ul className="skills-list">
                            {groupLearnings.map((learning, i) => (
                              <li key={i} className="skill-item">
                                {learning}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                    </div>
                  </div>
                );
              })}
            </section>
          </div>
        )}
      </div>
    </div>
  );
};

export default Accomplishments;