// src/components/Accomplishments/Accomplishments.tsx
import React, { useMemo, useState } from 'react';
import './Accomplishments.css';
import quests from '../../data/quests.data';

interface ProcessedAccomplishment {
  id: string;
  role: string;
  company: string;
  startDate: string;
  endDate: string;
  keyLearnings: string[];
}

interface GroupedAccomplishment {
  title: string;
  items: ProcessedAccomplishment[];
}

const Accomplishments: React.FC = () => {
  const [viewMode, setViewMode] = useState<'role' | 'company'>('role');
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [selectedCompany, setSelectedCompany] = useState<string | null>(null);

  // Process and flatten accomplishments
  const allAccomplishments = useMemo(() => {
    return quests.flatMap(quest => 
      quest.accomplishments.map(acc => ({
        id: `${quest.id}-${acc.role}`,
        role: acc.role,
        company: quest.company || 'Personal',
        startDate: quest.startDate.toISOString().split('T')[0],
        endDate: quest.endDate.toISOString().split('T')[0],
        keyLearnings: acc.learnings
      }))
    );
  }, []);

  // Extract unique roles and companies
  const { roles, companies } = useMemo(() => {
    const uniqueRoles = new Set(allAccomplishments.map(acc => acc.role));
    const uniqueCompanies = new Set(allAccomplishments.map(acc => acc.company));
    return {
      roles: Array.from(uniqueRoles),
      companies: Array.from(uniqueCompanies)
    };
  }, [allAccomplishments]);

  // Calculate counts
  const roleCounts = useMemo(() => {
    return allAccomplishments.reduce((acc, curr) => {
      acc[curr.role] = (acc[curr.role] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
  }, [allAccomplishments]);

  const companyCounts = useMemo(() => {
    return allAccomplishments.reduce((acc, curr) => {
      acc[curr.company] = (acc[curr.company] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
  }, [allAccomplishments]);

  // Filter accomplishments based on selection
  const filteredAccomplishments = useMemo(() => {
    return allAccomplishments.filter(acc => {
      if (selectedRole && acc.role !== selectedRole) return false;
      if (selectedCompany && acc.company !== selectedCompany) return false;
      return true;
    });
  }, [allAccomplishments, selectedRole, selectedCompany]);

  // Group accomplishments
  const groupedAccomplishments = useMemo(() => {
    const groups: Record<string, ProcessedAccomplishment[]> = {};
    filteredAccomplishments.forEach(acc => {
      const key = viewMode === 'role' ? acc.role : acc.company;
      if (!groups[key]) {
        groups[key] = [];
      }
      groups[key].push(acc);
    });

    return Object.entries(groups).map(([title, items]) => ({
      title,
      items: items.sort((a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime())
    }));
  }, [filteredAccomplishments, viewMode]);

  const getRoleType = (role: string): 'employment' | 'education' | 'certification' => {
    const lowerRole = role.toLowerCase();
    if (lowerRole.includes('degree') || lowerRole.includes('bachelor') || lowerRole.includes('master')) {
      return 'education';
    }
    if (lowerRole.includes('certification') || lowerRole.includes('certified')) {
      return 'certification';
    }
    return 'employment';
  };

  const formatDateRange = (startDate: string, endDate: string): string => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const startMonth = start.toLocaleString('default', { month: 'short' });
    const startYear = start.getFullYear();
    const endMonth = end.toLocaleString('default', { month: 'short' });
    const endYear = end.getFullYear();
    return `${startMonth} ${startYear} - ${endMonth} ${endYear}`;
  };

  return (
    <div className="accomplishments">
      <div className="view-controls">
        <button
          className={`view-button ${viewMode === 'role' ? 'active' : ''}`}
          onClick={() => setViewMode('role')}
        >
          View by Role
        </button>
        <button
          className={`view-button ${viewMode === 'company' ? 'active' : ''}`}
          onClick={() => setViewMode('company')}
        >
          View by Company
        </button>
      </div>

      <div className="selection-panel">
        {viewMode === 'role' ? (
          <div className="role-buttons">
            {roles.map((role) => (
              <button
                key={role}
                className={`role-button ${selectedRole === role ? 'active' : ''}`}
                onClick={() => setSelectedRole(role)}
              >
                {role} ({roleCounts[role]})
              </button>
            ))}
          </div>
        ) : (
          <div className="company-buttons">
            {companies.map((company) => (
              <button
                key={company}
                className={`company-button ${selectedCompany === company ? 'active' : ''}`}
                onClick={() => setSelectedCompany(company)}
              >
                {company} ({companyCounts[company]})
              </button>
            ))}
          </div>
        )}
      </div>

      {filteredAccomplishments.length === 0 ? (
        <div className="empty-state">
          <p>Select a {viewMode} to view accomplishments</p>
        </div>
      ) : (
        <div className="accomplishments-grid">
          {groupedAccomplishments.map((group: GroupedAccomplishment) => (
            <div key={group.title} className="accomplishment-group">
              <h3 className="group-title">{group.title}</h3>
              {group.items.map((item: ProcessedAccomplishment) => {
                const roleType = getRoleType(item.role);
                return (
                  <div key={item.id} className={`professional-card ${roleType}`}>
                    <div className={`role-type ${roleType}`}>
                      {roleType.charAt(0).toUpperCase() + roleType.slice(1)}
                    </div>
                    <h4>{item.role}</h4>
                    <p className="company">{item.company}</p>
                    <p className="date-range">{formatDateRange(item.startDate, item.endDate)}</p>
                    <div className="key-learnings">
                      <h5>Key Learnings</h5>
                      <ul>
                        {item.keyLearnings.map((learning: string, index: number) => (
                          <li key={index}>{learning}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Accomplishments;