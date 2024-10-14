// src/data/quests.ts
export interface Quest {
    id: number;
    title: string;
    company?: string;
    description: string;
    accomplishments: Accomplishment[]; 
    type: 'main' | 'side';
    startDate: Date;
    endDate: Date;
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
      startDate: new Date('2023-05-01'),  // Updated to specific start date
      endDate: new Date(2038,2,10), //my 50th birthday means ongoing
      roles: ['Senior Consultant', 'Architect'],
      accomplishments: [
        {
          description: 'Led architectural strategy across five teams, improving code consistency and efficiency.',
          role: 'Senior Consultant',
          learnings: ['Enhanced skills in architectural strategy, improving system scalability and flexibility.'],
        },
        {
          description: 'Boosted cross-team collaboration, reducing blockers by 30% through regular syncs and shared tools.',
          role: 'Senior Consultant',
          learnings: ['Improved cross-functional collaboration through advanced communication techniques and alignment practices.'],
        },
        {
          description: 'Mentored developers, increasing React proficiency and receiving a 90% satisfaction rate.',
          role: 'Architect',
          learnings: [ 'Deepened proficiency in React and state management, leading to more efficient front-end components.'],
        },
        {
          description: 'Delivered performance gains of 20% in critical React components and reduced code review revisions by 30%.',
          role: 'Architect',
          learnings: ['Developed leadership and mentorship skills, increasing team satisfaction and reducing technical debt.'],
        },
      ],
    },
    {
      id: 2,
      title: "The Modernizer's Quest",
      company: 'Productive Edge',
      description: 'Transformed legacy systems into modern applications while leading teams and managing client projects.',
      type: 'main',
      startDate: new Date('2020-02-01'),
      endDate: new Date('2024-05-01'), 
      roles: ['Software Architect', 'Senior Consultant'],
      accomplishments: [
        {
          description: 'Led modernization of legacy systems into contemporary C#.NET/Java Spring Boot applications.',
          role: 'Software Architect',
          learnings: ['Gained expertise in modernizing legacy systems, transitioning them to scalable, cloud-based architectures.',
            'Increased team management and leadership capabilities while handling teams of 4-8 members.'],
        },
        {
          description: 'Managed client project teams of 4-8 members with revenues ranging from $15K-$100K/month.',
          role: 'Senior Consultant',
          learnings: [],
        },
        {
          description: 'Introduced multi-tenant architectures and complex authentication flows, improving scalability and security.',
          role: 'Software Architect',
          learnings: ['Improved proficiency in full-stack development with exposure to both C#.NET and Java Spring Boot.'],
        },
        {
          description: 'Transitioned monolithic systems to modern SaaS models, decreasing maintenance costs and enhancing user experience.',
          role: 'Software Architect',
          learnings: ['Improved proficiency in full-stack development with exposure to both C#.NET and Java Spring Boot.',
            'Enhanced understanding of client relationship management and improved client satisfaction through successful delivery.'],
        },
      ],
    },
    {
      id: 3,
      title: 'Interim Leadership Challenge',
      company: 'Lendr',
      description: 'Steered the engineering team during a pivotal transition, aligning technical strategies with business objectives.',
      type: 'main',
      startDate: new Date('2018-10-01'),
      endDate: new Date('2020-02-01'),
      roles: ['Interim Director of Engineering', 'Team Lead'],
      accomplishments: [
        {
          description: 'Managed the development team during the search for a new CTO.',
          role: 'Interim Director of Engineering',
          learnings: ['Refined leadership skills in high-pressure environments, managing technical teams through organizational changes.',
            'Increased strategic thinking by aligning technical direction with business goals during a leadership transition.'
          ],
        },
        {
          description: 'Refactored the entire business application, improving performance and maintainability.',
          role: 'Team Lead',
          learnings: ['Enhanced skills in application refactoring, improving maintainability and performance.'],
        },
        {
          description: 'Aligned technical strategies with business objectives, aiding organizational growth.',
          role: 'Interim Director of Engineering',
          learnings: ['Refined leadership skills in high-pressure environments, managing technical teams through organizational changes.'],
        },
      ],
    },
    {
      id: 4,
      title: 'The Solo Developer\'s Journey',
      company: 'SWC Technology Partners',
      description: 'Delivered projects as a solo developer, enhancing application features and achieving project goals.',
      type: 'main',
      startDate: new Date('2017-10-01'),
      endDate: new Date('2018-10-01'),
      roles: ['Software Consultant'],
      accomplishments: [
        {
          description: 'Achieved project goals within a 10% margin of estimation accuracy.',
          role: 'Software Consultant',
          learnings: [ 'Enhanced self-management and project estimation skills, improving accuracy and on-time delivery.'],
        },
        {
          description: 'Enhanced desktop application features using proprietary software.',
          role: 'Software Consultant',
          learnings: ['Improved technical problem-solving abilities by working independently on complex features.'],
        },
      ],
    },
    {
      id: 5,
      title: 'The Developer\'s Forge',
      company: 'Manor Resources',
      description: 'Honed technical and problem-solving skills within a collaborative team, creating user-centric solutions.',
      type: 'main',
      startDate: new Date('2016-08-01'),
      endDate: new Date('2017-09-01'),
      roles: ['Developer'],
      accomplishments: [
        {
          description: 'Developed technical and problem-solving skills within a collaborative team.',
          role: 'Developer',
          learnings: ['Gained proficiency in collaborative software development, contributing to team success in cross-functional environments.'],
        },
        {
          description: 'Increased test coverage using AutoFixture and Moq.',
          role: 'Developer',
          learnings: ['Developed technical skills in test automation, improving software reliability and coverage.'],
        },
      ],
    },
    {
      id: 6,
      title: 'Foundations at the Aerospace Giant',
      company: 'The Boeing Company',
      description: 'Built foundational IT skills across various domains, contributing to significant financial savings.',
      type: 'main',
      startDate: new Date('2012-06-01'),
      endDate: new Date('2016-08-01'),
      roles: ['Developer', 'ITCFP Participant'],
      accomplishments: [
        {
          description: 'Developed and deployed C# MVC applications to automate financial operations.',
          role: 'Developer',
          learnings: ['Gained foundational skills in financial application development and IT processes.'],
        },
        {
          description: 'Improved SDLC practices, enhancing code quality and project management.',
          role: 'Developer',
          learnings: ['Developed expertise in SDLC improvement, enhancing project management and code quality.'],
        },
      ],
    },
    {
      id: 7,
      title: 'The Game Developer\'s Path',
      description: 'Explored the world of game development using Unity, enhancing skills in C# and game physics.',
      type: 'side',
      startDate: new Date('2012-06-01'),
      endDate: new Date(2038,2,10),
      roles: ['Game Developer (Personal Projects)'],
      accomplishments: [
        {
          description: 'Self-directed learning in Unity for game development.',
          role: 'Game Developer (Personal Projects)',
          learnings: ['Gained skills in game development and C# programming using Unity.',
            'Improved creativity and technical understanding in game mechanics and physics.'
          ],
        },
      ],
    },
    {
      id: 8,
      title: 'Mastering the AI Frontier',
      description: 'Delved into AI and machine learning technologies, focusing on ChatGPT and large language models.',
      type: 'side',
      startDate: new Date('2022-11-01'),
      endDate: new Date(2038,2,10),
      roles: ['AI Enthusiast', 'Machine Learning Practitioner'],
      accomplishments: [
        {
          description: 'Became a knowledgeable practitioner in AI and machine learning.',
          role: 'AI Enthusiast',
          learnings: [
            'Developed proficiency in AI and machine learning technologies, focusing on practical applications.',
            'Improved understanding of natural language processing and large language models.',
          ],
        },
      ],
    },
];
  
  export default quests;
  