// src/data/quests.ts

export interface Quest {
  id: number;
  titles: {
    retro: string;
    sleek: string;
  };
  company?: string;
  workTitle: string; // Shared field
  description: string;
  accomplishments: Accomplishment[];
  type: 'main' | 'side';
  startDate: Date;
  endDate: Date;
  roles: string[];
  tags?: string[];       // New property to help with filtering and categorization
  externalLink?: string; // Optional external reference (e.g., project or company website)
}

export interface Accomplishment {
  description: string;
  role: string;       // Role in which it was achieved
  learnings: string[]; // What was learned or the 'reward' achieved
}

const quests: Quest[] = [
  {
    id: 1,
    titles: {
      retro: 'Rise of the Architect',
      sleek: 'Senior Consultant & Software Architect at Inspire11',
    },
    company: 'Inspire11',
    workTitle: 'Senior Consultant and Software Architect',
    description:
      'Led architectural strategy across multiple teams to improve code consistency and efficiency.',
    type: 'main',
    startDate: new Date('2023-04-30'),
    endDate: new Date(2038, 2, 10), // Ongoing
    roles: ['Senior Consultant', 'Software Architect'],
    tags: ['Architecture', 'Leadership', 'Consulting'],
    accomplishments: [
      {
        description:
          'Resolved a critical production issue within one month by collaborating with the lead developer, despite limited recent experience with React.',
        role: 'Senior Consultant',
        learnings: [
          '...adapt quickly to unfamiliar technologies to solve complex problems.',
        ],
      },
      {
        description:
          'Stabilized a struggling team by assuming the UI architect role, enhancing performance and code quality.',
        role: 'Software Architect',
        learnings: [
          '...provide architectural guidance and effective team leadership.',
        ],
      },
      {
        description:
          'Introduced a React pattern for stateless components, increasing code reusability across teams.',
        role: 'Software Architect',
        learnings: [
          'Abstract patterns to create innovative and reusable solutions.',
        ],
      },
      {
        description:
          'Improved cross-team communication by establishing regular meetings, reducing delays and ensuring project alignment.',
        role: 'Software Architect',
        learnings: [
          'Emphasize effective communication for project success.',
        ],
      },
      {
        description:
          'Collaborated with design teams to implement global components, enhancing UI consistency.',
        role: 'Software Architect',
        learnings: [
          'Cross-functional collaboration improves user interface design.',
        ],
      },
      {
        description:
          'Translated requirements and Figma designs into technical directives and user stories, streamlining development processes.',
        role: 'Software Architect',
        learnings: [
          'Bridge design and development teams efficiently.',
        ],
      },
      {
        description:
          'Mentored senior developers through pair programming, bolstering leadership skills and team capability.',
        role: 'Software Architect',
        learnings: [
          'Mentor others to foster team growth.',
        ],
      },
      {
        description:
          'Optimized workflows and met management targets, increasing overall team velocity.',
        role: 'Software Architect',
        learnings: [
          'Balance team capabilities with management expectations.',
        ],
      },
    ],
  },
  {
    id: 2,
    titles: {
      retro: "The Modernizer's Quest",
      sleek: 'Senior Consultant & Software Architect at Productive Edge',
    },
    company: 'Productive Edge',
    workTitle: 'Senior Consultant and Software Architect',
    description:
      'Transformed legacy systems into modern applications while leading teams and managing client projects.',
    type: 'main',
    startDate: new Date('2020-02-01'),
    endDate: new Date('2024-05-01'),
    roles: ['Senior Consultant', 'Software Architect'],
    tags: ['Legacy Modernization', 'Cloud', 'SaaS'],
    accomplishments: [
      {
        description:
          'Collaborated with clients to define project scopes and requirements, often assuming full ownership of Azure instances.',
        role: 'Senior Consultant',
        learnings: [
          'Manage client relationships and cloud infrastructure effectively.',
        ],
      },
      {
        description:
          'Led development using .NET C#, Java Spring Boot, React, Angular, Flutter, and Windows UWP, enhancing full-stack expertise.',
        role: 'Software Architect',
        learnings: [
          'Work effectively across diverse technologies.',
        ],
      },
      {
        description:
          'Completed FreedomPay certification and integrated secure payment solutions for client projects.',
        role: 'Software Architect',
        learnings: [
          'Navigate certifications and implement secure integrations.',
        ],
      },
      {
        description:
          'Remotely debugged kiosk hardware with technicians, improving client support and problem-solving skills.',
        role: 'Software Architect',
        learnings: [
          'Troubleshoot remotely and communicate effectively with clients.',
        ],
      },
      {
        description:
          'Encapsulated proprietary software into executables to overcome Docker limitations, ensuring secure API calculations.',
        role: 'Software Architect',
        learnings: [
          'Devise innovative solutions for integrating proprietary software.',
        ],
      },
      {
        description:
          'Standardized project scaffolding for reusable coding patterns, accelerating project initiation.',
        role: 'Software Architect',
        learnings: [
          'Optimize project setups for efficiency.',
        ],
      },
      {
        description:
          'Fostered team cohesion by leading by example and transparently explaining client-focused decisions.',
        role: 'Software Architect',
        learnings: [
          'Implement effective leadership and team motivation strategies.',
        ],
      },
      {
        description:
          'Transitioned monolithic systems to multi-tenant SaaS models using a meta-database, enabling efficient instance proliferation.',
        role: 'Software Architect',
        learnings: [
          'Apply pragmatic approaches to system modernization and multi-tenant architectures.',
        ],
      },
    ],
  },
  {
    id: 3,
    titles: {
      retro: 'Leadership and Code',
      sleek: 'Team Lead / Interim Director of Engineering at Lendr',
    },
    company: 'Lendr',
    workTitle: 'Team Lead / Interim Director of Engineering',
    description:
      'Steered the engineering team through a pivotal transition, aligning technical strategies with business objectives.',
    type: 'main',
    startDate: new Date('2018-10-01'),
    endDate: new Date('2020-02-01'),
    roles: ['Team Lead', 'Interim Director of Engineering'],
    tags: ['Team Leadership', 'Engineering Transition'],
    accomplishments: [
      {
        description:
          'Upgraded the application from .NET to .NET Core on the first day, enhancing performance and scalability.',
        role: 'Team Lead',
        learnings: [
          'Execute critical upgrades under tight deadlines.',
        ],
      },
      {
        description:
          'Refactored the entire business application in three months, reversing negative team velocity.',
        role: 'Team Lead',
        learnings: [
          'Refactoring can significantly boost productivity and quality.',
        ],
      },
      {
        description:
          'Supported technical initiatives to meet business goals, reducing defects and preparing for regulatory changes.',
        role: 'Interim Director of Engineering',
        learnings: [
          'Align technical work with strict business and regulatory requirements.',
        ],
      },
      {
        description:
          'Co-led technical oversight with the architect while reporting directly to the executive board during a leadership transition.',
        role: 'Interim Director of Engineering',
        learnings: [
          'Clear communication is essential in high-pressure leadership roles.',
        ],
      },
    ],
  },
  {
    id: 4,
    titles: {
      retro: "The Solo Developer's Journey",
      sleek: 'Senior Consultant at SWC Technology Partners',
    },
    company: 'SWC Technology Partners',
    workTitle: 'Senior Consultant',
    description:
      'Delivered projects as a solo developer, enhancing application features and ensuring project success.',
    type: 'main',
    startDate: new Date('2017-10-01'),
    endDate: new Date('2018-10-01'),
    roles: ['Senior Consultant'],
    tags: ['Solo Development', 'Consulting'],
    accomplishments: [
      {
        description:
          'Enhanced desktop applications using WinForms and Kendo UI to improve user experience.',
        role: 'Senior Consultant',
        learnings: [
          'Adapt quickly to new technologies and frameworks.',
        ],
      },
      {
        description:
          'Improved existing systems by writing scripts under the mentorship of an architect.',
        role: 'Senior Consultant',
        learnings: [
          'Value mentorship for rapid skill development.',
        ],
      },
      {
        description:
          'Developed accountability for project estimates, ensuring precise delivery within a 10% margin.',
        role: 'Senior Consultant',
        learnings: [
          'Assess abilities and manage time effectively.',
        ],
      },
      {
        description:
          'Enhanced problem-solving by monitoring progress and proactively seeking assistance.',
        role: 'Senior Consultant',
        learnings: [
          'Balance independence with collaboration.',
        ],
      },
    ],
  },
  {
    id: 5,
    titles: {
      retro: "The Developer's Forge",
      sleek: 'Developer at Manor Resources',
    },
    company: 'Manor Resources',
    workTitle: 'Developer',
    description:
      'Honed technical and problem-solving skills within a collaborative team, creating user-centric solutions.',
    type: 'main',
    startDate: new Date('2016-08-01'),
    endDate: new Date('2017-09-01'),
    roles: ['Developer'],
    tags: ['Development', 'Mentorship', 'Testing'],
    accomplishments: [
      {
        description:
          'Contributed to a car loan application by developing code to enhance functionality.',
        role: 'Developer',
        learnings: [
          'Gain foundational coding skills in a team environment.',
        ],
      },
      {
        description:
          'Improved proficiency through mentorship from senior developers.',
        role: 'Developer',
        learnings: [
          'Utilize effective debugging and problem-solving techniques.',
        ],
      },
      {
        description:
          'Increased test coverage using AutoFixture and Moq, enabling faster delivery and more robust responses to issues.',
        role: 'Developer',
        learnings: [
          'Comprehensive testing improves product quality.',
        ],
      },
    ],
  },
  {
    id: 6,
    titles: {
      retro: 'Aerospace Foundations',
      sleek: 'ITCFP Participant / Developer at The Boeing Company',
    },
    company: 'The Boeing Company',
    workTitle: 'ITCFP Participant / Developer',
    description:
      'Built foundational IT skills across various domains, contributing to significant financial savings.',
    type: 'main',
    startDate: new Date('2012-06-01'),
    endDate: new Date('2016-08-01'),
    roles: ['ITCFP Participant', 'Developer'],
    tags: ['IT Fundamentals', 'Development', 'Automation'],
    accomplishments: [
      {
        description:
          'Rotated through various IT roles as an ITCFP Participant, gaining broad exposure across domains.',
        role: 'ITCFP Participant',
        learnings: [
          'Establish a strong foundation in IT processes.',
        ],
      },
      {
        description:
          'Developed and deployed C# MVC applications to automate financial operations.',
        role: 'Developer',
        learnings: [
          'Acquire foundational skills in financial application development.',
        ],
      },
      {
        description:
          'Improved SDLC practices, thereby enhancing code quality and project management.',
        role: 'Developer',
        learnings: [
          'Refine SDLC processes for better outcomes.',
        ],
      },
    ],
  },
  {
    id: 7,
    titles: {
      retro: "The Game Developer's Path",
      sleek: 'Game Developer (Personal Projects)',
    },
    workTitle: 'Game Developer (Personal Projects)',
    description:
      'Explored game development using Unity, enhancing skills in C# and game physics.',
    type: 'side',
    startDate: new Date('2012-06-01'),
    endDate: new Date(2038, 2, 10), // Ongoing
    roles: ['Game Developer (Personal Projects)'],
    tags: ['Game Development', 'Unity', 'Personal Project'],
    accomplishments: [
      {
        description:
          'Self-directed learning in Unity for game development, focusing on C# and game mechanics.',
        role: 'Game Developer (Personal Projects)',
        learnings: [
          'Build proficiency in game development and programming.',
          'Cultivate creativity in game mechanics and physics.',
        ],
      },
    ],
  },
  {
    id: 8,
    titles: {
      retro: 'Mastering the AI Frontier',
      sleek: 'AI Enthusiast',
    },
    workTitle: 'AI Enthusiast',
    description:
      'Explored AI and machine learning technologies, integrating advanced tools into both personal and professional projects.',
    type: 'side',
    startDate: new Date('2022-11-01'),
    endDate: new Date(2038, 2, 10), // Ongoing
    roles: ['AI Enthusiast'],
    tags: ['AI', 'Machine Learning', 'Innovation'],
    accomplishments: [
      {
        description:
          "Used ChatGPT to build the dynamic resume website you're currently viewing. Wrote minimal code (ChatGPT struggles with CSS, just like any developer).",
        role: 'AI Enthusiast',
        learnings: [
          'Leverage AI to build complex sites with minimal programming effort.',
        ],
      },
      {
        description:
          'Experimented with AI models using Oogabooga and Hugging Face to deepen practical understanding of machine learning.',
        role: 'AI Enthusiast',
        learnings: [
          'Deploy and experiment with AI models hands-on.',
        ],
      },
      {
        description:
          'Enhanced Python skills and utilized Jupyter notebooks for data analysis and model interaction.',
        role: 'AI Enthusiast',
        learnings: [
          'Leverage Python and Jupyter for efficient AI development.',
        ],
      },
      {
        description:
          'Explored OpenAI APIs and the OpenAI Playground, testing conversational APIs and learning advanced language model techniques.',
        role: 'AI Enthusiast',
        learnings: [
          'Integrate AI APIs into applications and workflows effectively.',
        ],
      },
      {
        description:
          'Applied AI tools like ChatGPT, Udio, Claude, and MidJourney across various projects, enhancing both creative and professional endeavors.',
        role: 'AI Enthusiast',
        learnings: [
          'Utilize AI tools creatively to boost productivity and project outcomes.',
        ],
      },
      {
        description:
          'Gained insights into AI as a force multiplier, shifting focus from correctness to rapid knowledge acquisition and solution generation.',
        role: 'AI Enthusiast',
        learnings: [
          'Recognize AI tools as productivity multipliers.',
        ],
      },
      {
        description:
          'Integrated AI tools into software development workflows, offloading routine tasks and increasing overall efficiency.',
        role: 'AI Enthusiast',
        learnings: [
          'Leverage AI for faster product development with greater precision.',
        ],
      },
    ],
  },
];

export default quests;
