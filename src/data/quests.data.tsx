// src/data/quests.ts

export interface Quest {
  id: number;
  title: string;
  company?: string;
  workTitle: string; // Added field
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
    workTitle: 'Senior Consultant and Software Architect',
    description:
      'Led architectural strategy across multiple teams, improving code consistency and efficiency.',
    type: 'main',
    startDate: new Date('2023-04-30'),
    endDate: new Date(2038, 2, 10), // Ongoing
    roles: ['Senior Consultant', 'Software Architect'],
    accomplishments: [
      {
        description:
          'Resolved a critical production issue within one month by collaborating with the lead developer, despite limited recent experience with React.',
        role: 'Senior Consultant',
        learnings: [
          'Learned to quickly adapt to unfamiliar technologies to solve complex problems.',
        ],
      },
      {
        description:
          'Stabilized a struggling team by assuming the UI architect role, enhancing performance and code quality.',
        role: 'Software Architect',
        learnings: [
          'Learned effective team leadership and how to provide architectural guidance to large teams.',
        ],
      },
      {
        description:
          'Introduced a React pattern for stateless components, enhancing code reusability across multiple teams.',
        role: 'Software Architect',
        learnings: [
          'Learned to abstract patterns to create innovative and reusable solutions.',
        ],
      },
      {
        description:
          'Improved cross-team communication by establishing regular meetings, reducing delays and aligning development with management.',
        role: 'Software Architect',
        learnings: [
          'Learned the importance of effective communication in project alignment and team efficiency.',
        ],
      },
      {
        description:
          'Collaborated with design teams to implement global components, enhancing UI consistency.',
        role: 'Software Architect',
        learnings: [
          'Learned how cross-functional collaboration can improve user interface design.',
        ],
      },
      {
        description:
          'Translated requirements and Figma designs into technical directives and user stories, streamlining development processes.',
        role: 'Software Architect',
        learnings: [
          'Learned to effectively bridge design and development teams.',
        ],
      },
      {
        description:
          'Mentored senior developers through pair programming, enhancing their leadership skills and team capabilities.',
        role: 'Software Architect',
        learnings: [
          'Learned to mentor others and develop leadership within the team.',
        ],
      },
      {
        description:
          'Increased team velocity by optimizing workflows and meeting management targets.',
        role: 'Software Architect',
        learnings: [
          'Learned to balance team capabilities with management expectations to enhance productivity.',
        ],
      },
    ],
  },
  {
    id: 2,
    title: "The Modernizer's Quest",
    company: 'Productive Edge',
    workTitle: 'Senior Consultant and Software Architect',
    description:
      'Transformed legacy systems into modern applications while leading teams and managing client projects.',
    type: 'main',
    startDate: new Date('2020-02-01'),
    endDate: new Date('2024-05-01'),
    roles: ['Senior Consultant', 'Software Architect'],
    accomplishments: [
      {
        description:
          'Collaborated with clients to define project scopes and requirements, often assuming complete ownership of Azure instances.',
        role: 'Senior Consultant',
        learnings: [
          'Learned to manage client relationships and cloud infrastructure effectively.',
        ],
      },
      {
        description:
          'Led development using .NET C#, Java Spring Boot, React, Angular, Flutter, and Windows UWP, enhancing full-stack expertise.',
        role: 'Software Architect',
        learnings: [
          'Learned to work effectively across diverse technologies.',
        ],
      },
      {
        description:
          'Completed FreedomPay certification and integrated secure payment solutions for client projects.',
        role: 'Software Architect',
        learnings: [
          'Learned to navigate certifications and implement secure integrations.',
        ],
      },
      {
        description:
          'Remotely debugged kiosk hardware with technicians, improving client support and problem-solving skills.',
        role: 'Software Architect',
        learnings: [
          'Learned remote troubleshooting and effective client communication.',
        ],
      },
      {
        description:
          'Encapsulated proprietary software into executables to overcome Docker limitations, ensuring secure API calculations.',
        role: 'Software Architect',
        learnings: [
          'Learned to devise innovative solutions for integrating proprietary software.',
        ],
      },
      {
        description:
          'Standardized project scaffolding for reusable coding patterns, accelerating project initiation.',
        role: 'Software Architect',
        learnings: [
          'Learned to optimize project setups for increased efficiency.',
        ],
      },
      {
        description:
          'Fostered team cohesion by leading by example and explaining client-focused decisions transparently.',
        role: 'Software Architect',
        learnings: [
          'Learned effective leadership and team motivation strategies.',
        ],
      },
      {
        description:
          'Transitioned monolithic systems to multi-tenant SaaS models using a meta-database, enabling efficient instance proliferation.',
        role: 'Software Architect',
        learnings: [
          'Learned pragmatic approaches to system modernization and multi-tenant architectures.',
        ],
      },
    ],
  },
  {
    id: 3,
    title: 'Leadership and Code',
    company: 'Lendr',
    workTitle: 'Team Lead / Interim Director of Engineering',
    description:
      'Steered the engineering team during a pivotal transition, aligning technical strategies with business objectives.',
    type: 'main',
    startDate: new Date('2018-10-01'),
    endDate: new Date('2020-02-01'),
    roles: ['Team Lead', 'Interim Director of Engineering'],
    accomplishments: [
      {
        description:
          'Upgraded the application from .NET to .NET Core on the first day, enhancing performance and scalability.',
        role: 'Team Lead',
        learnings: [
          'Learned to execute critical upgrades under tight deadlines.',
        ],
      },
      {
        description:
          'Refactored the entire business application in three months, turning team velocity from negative to positive.',
        role: 'Team Lead',
        learnings: [
          'Learned the significant impact of refactoring on productivity and quality.',
        ],
      },
      {
        description:
          'Supported technical initiatives to meet business goals, reducing defects and preparing for new features in a regulatory environment.',
        role: 'Interim Director of Engineering',
        learnings: [
          'Learned to align technical work with strict business and regulatory objectives.',
        ],
      },
      {
        description:
          'Co-led technical implementation and communicated effectively with management during leadership transition.',
        role: 'Interim Director of Engineering',
        learnings: [
          'Learned that clear communication is vital in high-pressure leadership roles.',
        ],
      },
    ],
  },
  {
    id: 4,
    title: "The Solo Developer's Journey",
    company: 'SWC Technology Partners',
    workTitle: 'Senior Consultant',
    description:
      'Delivered projects as a solo developer, enhancing application features and achieving project goals.',
    type: 'main',
    startDate: new Date('2017-10-01'),
    endDate: new Date('2018-10-01'),
    roles: ['Senior Consultant'],
    accomplishments: [
      {
        description:
          'Enhanced desktop applications using WinForms and Kendo UI, improving user experience.',
        role: 'Senior Consultant',
        learnings: [
          'Learned to adapt quickly to new technologies and frameworks.',
        ],
      },
      {
        description:
          'Improved existing systems by writing scripts under the mentorship of an architect.',
        role: 'Senior Consultant',
        learnings: [
          'Learned the value of mentorship in skill development.',
        ],
      },
      {
        description:
          'Developed accountability for project estimates, ensuring precise and timely delivery within a 10% margin.',
        role: 'Senior Consultant',
        learnings: [
          'Learned to accurately assess abilities and manage time effectively.',
        ],
      },
      {
        description:
          'Enhanced problem-solving abilities by monitoring progress and seeking help proactively.',
        role: 'Senior Consultant',
        learnings: [
          'Learned to balance independence with seeking assistance when needed.',
        ],
      },
    ],
  },
  {
    id: 5,
    title: "The Developer's Forge",
    company: 'Manor Resources',
    workTitle: 'Developer',
    description:
      'Honed technical and problem-solving skills within a collaborative team, creating user-centric solutions.',
    type: 'main',
    startDate: new Date('2016-08-01'),
    endDate: new Date('2017-09-01'),
    roles: ['Developer'],
    accomplishments: [
      {
        description:
          'Contributed to a car loan application by developing code, enhancing functionality.',
        role: 'Developer',
        learnings: [
          'Learned foundational coding skills in a team environment.',
        ],
      },
      {
        description:
          'Significantly improved proficiency through mentorship from senior developers.',
        role: 'Developer',
        learnings: [
          'Learned effective debugging and problem-solving techniques.',
        ],
      },
      {
        description:
          'Increased test coverage using AutoFixture and Moq, ensuring faster delivery and response to issues.',
        role: 'Developer',
        learnings: [
          'Learned that comprehensive testing improves product quality.',
        ],
      },
    ],
  },
  {
    id: 6,
    title: 'Aerospace Foundations',
    company: 'The Boeing Company',
    workTitle: 'ITCFP Participant / Developer',
    description:
      'Built foundational IT skills across various domains, contributing to significant financial savings.',
    type: 'main',
    startDate: new Date('2012-06-01'),
    endDate: new Date('2016-08-01'),
    roles: ['ITCFP Participant', 'Developer'],
    accomplishments: [
      {
        description:
          'Rotated through various IT roles as an ITCFP Participant, gaining broad exposure to different domains.',
        role: 'ITCFP Participant',
        learnings: [
          'Learned foundational IT skills and processes across multiple areas.',
        ],
      },
      {
        description:
          'Developed and deployed C# MVC applications to automate financial operations.',
        role: 'Developer',
        learnings: [
          'Learned foundational skills in financial application development.',
        ],
      },
      {
        description:
          'Improved SDLC practices, enhancing code quality and project management.',
        role: 'Developer',
        learnings: [
          'Learned to enhance SDLC processes for better outcomes.',
        ],
      },
    ],
  },
  {
    id: 7,
    title: "The Game Developer's Path",
    workTitle: 'Game Developer (Personal Projects)',
    description:
      'Explored the world of game development using Unity, enhancing skills in C# and game physics.',
    type: 'side',
    startDate: new Date('2012-06-01'),
    endDate: new Date(2038, 2, 10), // Ongoing
    roles: ['Game Developer (Personal Projects)'],
    accomplishments: [
      {
        description:
          'Self-directed learning in Unity for game development, focusing on C# and game mechanics.',
        role: 'Game Developer (Personal Projects)',
        learnings: [
          'Learned skills in game development and programming.',
          'Learned creativity in game mechanics and physics.',
        ],
      },
    ],
  },
  {
    id: 8,
    title: 'Mastering the AI Frontier',
    workTitle: 'AI Enthusiast',
    description:
      'Explored AI and machine learning technologies, integrating advanced tools into personal and professional projects.',
    type: 'side',
    startDate: new Date('2022-11-01'),
    endDate: new Date(2038, 2, 10), // Ongoing
    roles: ['AI Enthusiast'],
    accomplishments: [
      {
        description:
          'Used ChatGPT to build the dynamic resume website you\'re currently viewing. Wrote minimal code (ChatGPT has a hard time with css just like any developer).',
        role: 'AI Enthusiast',
        learnings: [
          'Learned how to build a complex site with very little programming effort.',
        ],
      },
      {
        description:
          'Experimented with AI models using Oogabooga and Hugging Face, enhancing practical understanding of machine learning.',
        role: 'AI Enthusiast',
        learnings: [
          'Learned hands-on AI model deployment and experimentation.',
        ],
      },
      {
        description:
          'Enhanced Python skills and utilized Jupyter notebooks for data analysis and model interaction.',
        role: 'AI Enthusiast',
        learnings: [
          'Learned to leverage Python and Jupyter notebooks for AI development.',
        ],
      },
      {
        description:
          'Explored OpenAI APIs and OpenAI Playground, testing the conversation API and understanding advanced language models.',
        role: 'AI Enthusiast',
        learnings: [
          'Learned to integrate AI APIs into applications and workflows.',
        ],
      },
      {
        description:
          'Applied AI tools like ChatGPT, Udio, Claude, and MidJourney for a variety of projects, including personal creative endeavors and professional development, such as developing this resume website.',
        role: 'AI Enthusiast',
        learnings: [
          'Learned to utilize AI tools creatively to enhance productivity and project outcomes.',
        ],
      },
      {
        description:
          'Gained insights into AI as a force multiplier, shifting focus from correctness to rapid knowledge acquisition and solution generation.',
        role: 'AI Enthusiast',
        learnings: [
          'Learned that AI tools serve as force multipliers, enhancing productivity and facilitating quick learning.',
        ],
      },
      {
        description:
          'Integrated AI tools into software development workflows, offloading routine tasks and increasing efficiency.',
        role: 'AI Enthusiast',
        learnings: [
          'Learned to leverage AI for faster product development with higher granularity.',
        ],
      },
    ],
  },
];

export default quests;
