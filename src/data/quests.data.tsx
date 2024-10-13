// src/data/quests.ts
export interface Quest {
    id: number;
    title: string;
    company?: string;
    description: string;
    accomplishments: Accomplishment[]; 
    type: 'main' | 'side';
    rewards: string[];
    length: string;
    roles: string[];
  }
export interface Accomplishment {
    description: string;
    role: string; // Role in which it was achieved
    learnings: string[]; // What was learned or the reward achieved
  }
  
  const quests: Quest[] = [
    {
      id: 1,
    title: 'Rise of the Architect',
    company: 'Inspire11',
    description: 'Led architectural strategy across five teams, improving code consistency and efficiency.',
    type: 'main',
    rewards: [
      '800 XP in Architectural Strategy',
      '500 XP in React Proficiency',
      '600 XP in Cross-Team Collaboration',
      '400 XP in Developer Mentorship',
      '20% Performance Boost',
    ],
    length: 'May 2023 – Present',
    roles: ['Senior Consultant', 'Architect'],
    accomplishments: [
      {
        description: 'Led architectural strategy across five teams, improving code consistency and efficiency.',
        role: 'Senior Consultant',
        learnings: ['800 XP in Architectural Strategy'],
      },
      {
        description: 'Boosted cross-team collaboration, reducing blockers by 30% through regular syncs and shared tools.',
        role: 'Senior Consultant',
        learnings: ['600 XP in Cross-Team Collaboration'],
      },
      {
        description: 'Mentored developers, increasing React proficiency and receiving a 90% satisfaction rate.',
        role: 'Architect',
        learnings: ['500 XP in React Proficiency'],
      },
      {
        description: 'Delivered performance gains of 20% in critical React components and reduced code review revisions by 30%.',
        role: 'Architect',
        learnings: ['20% Performance Boost'],
      },
    ],
  },
  {
    id: 2,
    title: "The Modernizer's Quest",
    company: 'Productive Edge',
    description: 'Transform legacy systems into modern applications while leading teams and managing client projects.',
    type: 'main',
    rewards: [
      '+800 XP in Legacy System Modernization',
      '+600 XP in Team Management',
      '+500 XP in Full-Stack Development',
      '+400 XP in Client Relations',
      '+50% Proficiency in New Frameworks',
    ],
    length: 'February 2020 - May 2024 (4 years and 3 months)',
    roles: ['Software Architect', 'Senior Consultant'],
    accomplishments: [
      {
        description: 'Learned new frameworks/languages during project execution, delivering projects within timeline and budget.',
        role: 'Software Architect',
        learnings: ['+50% Proficiency in New Frameworks'],
      },
      {
        description: 'Managed client project teams of 4-8 members with revenues ranging from $15K-$100K/month.',
        role: 'Senior Consultant',
        learnings: ['+600 XP in Team Management'],
      },
      {
        description: 'Led modernization of legacy systems into contemporary C#.NET/Java Spring Boot applications.',
        role: 'Software Architect',
        learnings: ['+800 XP in Legacy System Modernization'],
      },
      {
        description: 'Introduced multi-tenant architectures and complex authentication flows, improving scalability and security.',
        role: 'Software Architect',
        learnings: ['+500 XP in Full-Stack Development'],
      },
      {
        description: 'Transitioned monolithic systems to modern SaaS models, decreasing maintenance costs and enhancing user experience.',
        role: 'Software Architect',
        learnings: ['+400 XP in Client Relations'],
      },
    ],
  },
  {
    id: 3,
    title: 'Interim Leadership Challenge',
    company: 'Lendr',
    description: 'Steer the engineering team during a pivotal transition, aligning technical strategies with business objectives.',
    type: 'main',
    rewards: [
      '+900 XP in Interim Leadership',
      '+700 XP in Team Building',
      '+600 XP in Technical Strategy',
      '+500 XP in Application Refactoring',
      '+100% Bug-Slaying Efficiency',
    ],
    length: 'October 2018 - February 2020 (1 year and 4 months)',
    roles: ['Interim Director of Engineering', 'Team Lead'],
    accomplishments: [
      {
        description: 'Managed the development team during the search for a new CTO.',
        role: 'Interim Director of Engineering',
        learnings: ['+900 XP in Interim Leadership'],
      },
      {
        description: 'Ensured project continuity and adherence to technical standards.',
        role: 'Interim Director of Engineering',
        learnings: ['+600 XP in Technical Strategy'],
      },
      {
        description: 'Aligned technical strategies with business objectives, aiding organizational growth.',
        role: 'Interim Director of Engineering',
        learnings: ['+700 XP in Team Building'],
      },
      {
        description: 'Refactored the entire business application, improving performance and maintainability.',
        role: 'Team Lead',
        learnings: ['+500 XP in Application Refactoring'],
      },
    ],
  },{
    id: 4,
    title: 'The Solo Developer\'s Journey',
    company: 'SWC Technology Partners',
    description: 'Deliver projects as a solo developer, enhancing application features and achieving project goals.',
    type: 'main',
    rewards: [
      '+600 XP in Solo Development',
      '+500 XP in Estimation Accuracy',
      '+400 XP in User Experience Design',
      '+50% Efficiency in Project Delivery',
    ],
    length: 'October 2017 – October 2018 (1 year)',
    roles: ['Software Consultant'],
    accomplishments: [
      {
        description: 'Achieved project goals within a 10% margin of estimation accuracy.',
        role: 'Software Consultant',
        learnings: ['+500 XP in Estimation Accuracy'],
      },
      {
        description: 'Enhanced desktop application features using proprietary software.',
        role: 'Software Consultant',
        learnings: ['+400 XP in User Experience Design'],
      },
    ],
  },
  {
    id: 5,
    title: 'The Developer\'s Forge',
    company: 'Manor Resources',
    description: 'Hone technical and problem-solving skills within a collaborative team, creating user-centric solutions.',
    type: 'main',
    rewards: [
      '+500 XP in Collaborative Development',
      '+400 XP in User Engagement',
      '+300 XP in Test Automation',
      '+50% Skill in Test Coverage',
    ],
    length: 'August 2016 – September 2017 (1 year and 1 month)',
    roles: ['Developer'],
    accomplishments: [
      {
        description: 'Developed technical and problem-solving skills within a collaborative team.',
        role: 'Developer',
        learnings: ['+500 XP in Collaborative Development'],
      },
      {
        description: 'Increased test coverage using AutoFixture and Moq.',
        role: 'Developer',
        learnings: ['+300 XP in Test Automation'],
      },
    ],
  },
  {
    id: 6,
    title: 'Foundations at the Aerospace Giant',
    company: 'The Boeing Company',
    description: 'Build foundational IT skills across various domains, contributing to significant financial savings.',
    type: 'main',
    rewards: [
      '+800 XP in Foundational IT Skills',
      '+600 XP in Financial Application Development',
      '+500 XP in SDLC Improvement',
      '+100% Mastery in Multidisciplinary IT Domains',
    ],
    length: 'June 2012 - August 2016 (4 years and 2 months)',
    roles: ['Developer', 'ITCFP Participant'],
    accomplishments: [
      {
        description: 'Developed and deployed C# MVC applications to automate financial operations.',
        role: 'Developer',
        learnings: ['+600 XP in Financial Application Development'],
      },
      {
        description: 'Improved SDLC practices, enhancing code quality and project management.',
        role: 'Developer',
        learnings: ['+500 XP in SDLC Improvement'],
      },
    ],
  },
  {
    id: 7,
    title: 'The Game Developer\'s Path',
    description: 'Explore the world of game development using Unity, enhancing skills in C# and game physics.',
    type: 'side',
    rewards: [
      '+300 XP in Game Development',
      '+200 XP in C# Programming',
      '+100 XP in Game Physics',
      '+50% Creativity Boost',
    ],
    length: 'Ongoing',
    roles: ['Game Developer (Personal Projects)'],
    accomplishments: [
      {
        description: 'Self-directed learning in Unity for game development.',
        role: 'Game Developer (Personal Projects)',
        learnings: ['+300 XP in Game Development'],
      },
    ],
  },
  {
    id: 8,
    title: 'Mastering the AI Frontier',
    description: 'Delve into AI and machine learning technologies, focusing on ChatGPT and large language models.',
    type: 'side',
    rewards: [
      '+400 XP in AI and Machine Learning',
      '+300 XP in Python Programming',
      '+200 XP in LLM Integration',
      '+100% Insight into AI Technologies',
    ],
    length: 'Ongoing',
    roles: ['AI Enthusiast', 'Machine Learning Practitioner'],
    accomplishments: [
      {
        description: 'Became a knowledgeable practitioner in AI and machine learning.',
        role: 'AI Enthusiast',
        learnings: ['+400 XP in AI and Machine Learning'],
      },
    ],
  },
];
  
  export default quests;
  