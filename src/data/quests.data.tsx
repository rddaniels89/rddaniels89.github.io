// src/data/quests.data.tsx

export interface Quest {
  id: number;
  titles: {
    retro: string;
    sleek: string;
  };
  company?: string;
  workTitle: string; // Shared field
  description: string;
  summary?:string;
  accomplishments: Accomplishment[];
  type: 'main' | 'side' | 'education';
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
  workTitle: 'Senior Software Architect',
  description: 'Led architectural strategy across multiple teams to improve code consistency and efficiency.',
  summary:
    'Elevated architectural practices across multiple teams by implementing design consistency, bridging communication gaps, and establishing efficient development workflows. Cultivated technical leadership through deliberate mentorship while strategically aligning technology decisions with business objectives.',
  type: 'main',
  startDate: new Date('2024-05-02'),
  endDate: new Date(2038, 2, 10), // Ongoing
  roles: ['Senior Consultant', 'Software Architect'],
  tags: ['Architecture', 'Leadership', 'UI Design', 'Cross-Team Collaboration'],
  accomplishments: [
    {
      description:
        'Led and refined UI architectural strategy across 5 teams.',
      role: 'Software Architect',
      learnings: [
        'Learned architectural effectiveness requires balancing team autonomy with system-wide consistency',
        'Learned that friction against architecture patterns emerge when watching how disparate teams naturally solve problems'
      ],
    },
    {
      description:
        'Operated as full stack architect for one team and UI architect for 5 teams.',
      role: 'Software Architect',
      learnings: [
        'Found that specialized depth and broad oversight can be balanced through effective delegation',
        'Recognized that cross-cutting concerns often manifest differently in UI versus backend systems',
        'Determined that consistent design principles matter more than standardizing on specific implementations'
      ],
    },
    {
      description:
        'Improved cross-team and intra-team communication to align development with management expectations.',
      role: 'Senior Consultant',
      learnings: [],
    },
    {
      description:
        'Collaborated with design teams to implement global UI components, ensuring consistency.',
      role: 'Software Architect',
      learnings: [
        'Learned that component libraries still deliver value even when implemented late in project'
      ],
    },
    {
      description:
        'Translated Figma designs into technical directives and user stories, streamlining development.',
      role: 'Senior Consultant',
      learnings: [],
    },
    {
      description:
        'Mentored senior developers via pair programming and coaching sessions to enhance team capabilities.',
      role: 'Senior Consultant',
      learnings: [],
    },
    {
      description:
        'Interfaced with any necessary part of the SDLC to complete tasks assigned to team.',
      role: 'Software Architect',
      learnings: [
        'Learned that maximizing team velocity requires teams to appropriately understand the strategic direction and implementation goal'
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
  workTitle: 'Software Architect',
  description:
    'Transformed legacy systems into modern applications while leading diverse technology teams.',
  summary: 
    'Modernized legacy healthcare systems while maintaining critical business continuity. Designed scalable cloud architectures, integrated secure payment solutions, and architected conversions to a multi-tenant SaaS model',
  type: 'main',
  startDate: new Date('2020-02-01'),
  endDate: new Date('2024-04-31'),
  roles: ['Senior Consultant', 'Software Architect'],
  tags: ['Legacy Modernization', 'Cloud', 'SaaS', 'Healthcare', 'Payment Processing'],
  accomplishments: [
    {
      description:
        'Transformed legacy healthcare systems into modern applications while maintaining business continuity.',
      role: 'Software Architect',
      learnings: [
        'Found that legacy modernization requires balancing business continuity with technical evolution',
        'Learned to make decisions WITH constraints instead of against constraints'
      ],
    },
    {
      description:
        'Defined project scopes with clients and managed Azure cloud infrastructures from planning to support.',
      role: 'Senior Consultant',
      learnings: [
        'Learned to be proficient in architecting for a language I was not well-versed in'
      ],
    },
    {
      description:
        'Delivered full-stack solutions across multiple technology stacks including .NET C#, Java Spring Boot, React, Angular, Flutter, and UWP.',
      role: 'Software Architect',
      learnings: [],
    },
    {
      description:
        'Gained FreedomPay certification for client system and integrated secure payment solutions into client projects.',
      role: 'Software Architect',
      learnings: [
        'Learned how to build IdP integrations from the ground up'
      ],
    },
    {
      description:
        'Led full stack modernization of healthcare applications.',
      role: 'Software Architect',
      learnings: [
        'Learned that healthcare data practices impact technical decisions and constraints',
        'Learned that compliance requirements should be considered in reusable patterns'
      ],
    },
    {
      description:
        'Created standardized project scaffolding templates to accelerate project initiation.',
      role: 'Software Architect',
      learnings: [
        'Learned that project templates work easier when teams build working relationships',
        'Learned that standardization must balance consistency with flexibility for project-specific needs'
      ],
    },
    {
      description:
        'Fostered team cohesion through transparent leadership and client-focused decision processes.',
      role: 'Senior Consultant',
      learnings: [],
    },
    {
      description:
        'Architected transition of monolithic systems to multi-tenant SaaS models.',
      role: 'Software Architect',
      learnings: [
        'Learned that multi-tenant architectures can be effectively handled through configuration'
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
    'Co-led technical implementations and maintained clear communication during leadership transitions.',
  summary: 
    'Led critical platform migrations and major refactoring efforts that transformed application performance while providing technical leadership during organizational transitions. Established effective feedback mechanisms with stakeholders and represented technical concerns to executive leadership.',
  type: 'main',
  startDate: new Date('2018-10-01'),
  endDate: new Date('2020-02-01'),
  roles: ['Team Lead', 'Interim Director of Engineering'],
  tags: ['Leadership', 'Engineering Transition', 'Performance Optimization', 'Technical Strategy'],
  accomplishments: [
    {
      description:
        'Upgraded applications from .NET to .NET Core on day one, immediately improving performance and establishing technical direction.',
      role: 'Team Lead',
      learnings: [
        'Learned how to read code for intent and clarity very effectively',
        'Learned how to effectively leverage pair programming with other team members'
      ],
    },
    {
      description:
        'Refactored a complex business application with 350k+ lines of code, implementing service-repository patterns that reversed negative sprint velocity.',
      role: 'Team Lead',
      learnings: [
        'Learned how to perform every function of and be involved in most decisions for the SDLC',
        'Learned how to build a culture of technical excellence for a small team'
      ],
    },
    {
      description:
        'Co-led technical implementations during leadership transitions, maintaining continuity between development and executive leadership.',
      role: 'Interim Director of Engineering',
      learnings: [
        'Learned that technical leadership requires communication as much as technical proficiency',
        'Learned how to communicate to leaders what outcomes to expect from the technical department'
      ],
    },
    {
      description:
        'Established a structured UAT process aligning business stakeholders with development priorities, improving feature quality.',
      role: 'Team Lead',
      learnings: [
        'Learned the importance of talking directly to end users',
        'Learned that educating our business on technical practices positively impacted velocity'
      ],
    },
    {
      description:
        'Collaborated with the architect to implement product-wide strategy and technical standards while mentoring team members.',
      role: 'Team Lead',
      learnings: [],
    },
    {
      description:
        'Represented technical leadership to investors and the CEO during executive transitions, providing strategic guidance.',
      role: 'Interim Director of Engineering',
      learnings: [],
    }
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
    'Enhanced desktop applications and maintained project delivery while developing professional estimation skills.',
  summary: 
    'Focused on desktop application enhancement and workflow automation while developing strong project estimation and delivery skills. I applied UX improvements to legacy systems and created reliable automation tools.',
  type: 'main',
  startDate: new Date('2017-10-01'),
  endDate: new Date('2018-10-01'),
  roles: ['Senior Consultant'],
  tags: ['Desktop Applications', 'UI Enhancement', 'Project Estimation'],
  accomplishments: [
    {
      description:
        'Enhanced desktop applications using WinForms and Kendo UI to improve user experience.',
      role: 'Senior Consultant',
      learnings: ['I learned how to balance modern UI expectations with legacy application constraints'
      ],
    },
    {
      description:
        'Developed and refined scripts under mentorship, ensuring timely and accurate project delivery.',
      role: 'Senior Consultant',
      learnings: [
      ],
    },
    {
      description:
        'Maintained project estimation accuracy within a 10% margin while optimizing delivery.',
      role: 'Senior Consultant',
      learnings: [
        'Learned that accurate estimation correlates with thorough requirement understanding'
      ],
    },
    {
      description:
        'Proactively monitored progress and applied problem-solving strategies to enhance system functionality.',
      role: 'Senior Consultant',
      learnings: [
        'Learned that proactive issue identification is more valuable than reactive problem solving'
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
    'Developed components for financial applications while enhancing my technical skills through mentorship and test-driven development.',
  summary: 
    'Built key features for financial systems while improving code quality through comprehensive testing strategies. I benefited from structured mentorship that accelerated my professional growth.',
  type: 'main',
  startDate: new Date('2016-08-01'),
  endDate: new Date('2017-09-01'),
  roles: ['Developer'],
  tags: ['Development', 'Mentorship', 'Testing', 'Financial Applications'],
  accomplishments: [
    {
      description:
        'Developed key components for a car loan application, directly enhancing functionality and user experience.',
      role: 'Developer',
      learnings: [],
    },
    {
      description:
        'Strengthened technical proficiency through close mentorship from senior developers.',
      role: 'Developer',
      learnings: [
        'Learned that mentorship accelerates technical growth beyond self-directed learning',
        'Learned that code review feedback provides contextual learning opportunities'
      ],
    },
    {
      description:
        'Increased test coverage using AutoFixture and Moq, leading to more reliable and timely releases.',
      role: 'Developer',
      learnings: [
        'Learned that test-driven approaches improve both code design and defect prevention',
        'Learned that well-designed test fixtures improve both coverage metrics and test readability'
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
    'Rotated through diverse IT roles as part of a selective program, gaining broad exposure while developing enterprise applications for critical operations.',
  summary: 
    'Participated in the selective IT Career Foundation Program (ITCFP), rotating through multiple technical domains to build cross-functional expertise. I developed mission-critical financial applications while improving development processes across teams.',
  type: 'main',
  startDate: new Date('2012-06-01'),
  endDate: new Date('2016-08-01'),
  roles: ['ITCFP Participant', 'Developer'],
  tags: ['IT Fundamentals', 'Development', 'Automation', 'Financial Operations'],
  accomplishments: [
    {
      description:
        'Rotated through diverse IT roles, gaining broad exposure across multiple technical domains.',
      role: 'ITCFP Participant',
      learnings: [
        'Learned how technology choices affect different business units in distinct ways',
        'Learned to appreciate the interconnected nature of enterprise systems'
      ],
    },
    {
      description:
        'Developed and deployed C# MVC applications to automate critical financial operations.',
      role: 'Developer',
      learnings: [
        'Learned that enterprise-scale applications require additional focus on stability and maintenance',
        'Learned that financial systems require extensive validation and audit capabilities'
      ],
    },
    {
      description:
        'Enhanced SDLC practices, leading to improved code quality and more efficient project management.',
      role: 'Developer',
      learnings: [
        'Learned that financial systems require extensive validation and audit capabilities'
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
    'Applied software engineering principles to game development through self-directed learning in Unity.',
  summary: 
    'In my personal projects, I\'ve explored game development as both a creative outlet and a way to apply software architecture principles in a different domain. This has expanded my technical versatility while providing insights into performance optimization and interactive system design.',
  type: 'side',
  startDate: new Date('2012-06-01'),
  endDate: new Date(2038, 2, 10), // Ongoing
  roles: ['Game Developer (Personal Projects)'],
  tags: ['Game Development', 'Unity', 'C#', 'Personal Project'],
  accomplishments: [
    {
      description:
        'Taught myself Unity game development, focusing on C# programming and game mechanics.',
      role: 'Game Developer (Personal Projects)',
      learnings: [
        'Learned that game development requires different performance optimization approaches than business applications',
        'Learned that creative coding reveals different architectural patterns than enterprise development',
        'Discovered that game mechanics design balances technical implementation with user enjoyment'
      ],
    },
  ],
},
{
  id: 8,
  titles: {
    retro: 'Mastering the AI Frontier',
    sleek: 'AI Enthusiast (Hybrid)',
  },
  workTitle: 'AI Enthusiast (Hybrid)',
  description:
    'Explored AI tools and applications to enhance development workflows and create innovative solutions.',
  summary: 
    'Leveraged AI tools to accelerate development and broaden my technical capabilities, building applications like this resume site with minimal code. By experimenting with various AI models and APIs, I\'ve developed practical expertise in applying these technologies to solve real-world problems.',
  type: 'side',
  startDate: new Date('2022-11-01'),
  endDate: new Date(2038, 2, 10), // Ongoing
  roles: ['AI Enthusiast (Hybrid)'],
  tags: ['AI', 'Machine Learning', 'ChatGPT', 'Python', 'Productivity'],
  accomplishments: [
    {
      description:
        'Built a dynamic resume website using ChatGPT with minimal code.',
      role: 'AI Enthusiast (Hybrid)',
      learnings: [
        'Effective prompt engineering generates better code from AI models',
        'AI shifts developer focus from writing code to defining solutions'
      ],
    },
    {
      description:
        'Experimented with AI models using Oogabooga and Hugging Face, deepening practical ML expertise.',
      role: 'AI Enthusiast (Hybrid)',
      learnings: [
        'Local AI deployment has different constraints than cloud solutions',
        'Domain-specific applications benefit from model fine-tuning'
      ],
    },
    {
      description:
        'Enhanced Python skills and utilized Jupyter notebooks for data analysis and model interaction.',
      role: 'AI Enthusiast (Hybrid)',
      learnings: [
        'Interactive notebooks excel for exploratory data analysis',
        'Statistical literacy enhances programming in data projects'
      ],
    },
    {
      description:
        'Integrated OpenAI APIs and Playground, applying AI tools to streamline development workflows.',
      role: 'AI Enthusiast (Hybrid)',
      learnings: [
        'API-based AI requires different approaches than UI-based tools',
        'Cost-effective AI implementation needs efficient prompt design'
      ],
    },
    {
      description:
        'Leveraged AI tools (ChatGPT, Udio, Claude, MidJourney) in both professional and personal projects.',
      role: 'AI Enthusiast (Hybrid)',
      learnings: [
        'Different AI models excel at specific task types',
        'Match AI tools to specific workflow requirements'
      ],
    },
  ],
},
{
  id: 9,
  titles: {
    retro: "Education",
    sleek: "Education"
  },
  company: "California State University Fullerton",
  workTitle: "Bachelor of Science in Computer Science",
  description: "Concentration: Software Architecture",
  summary: "Completed undergraduate studies in Computer Science with focus on software architecture principles and practices.",
  accomplishments: [
    {
      description: "B.S. Computer Science, Concentration: Software Architecture",
      role: "Student",
      learnings: ["Software Architecture", "Computer Science"]
    }
  ],
  type: "education",
  startDate: new Date("2006-08-01"),
  endDate: new Date("2012-05-31"),
  roles: ["Student"],
  tags: ["Education", "Degree"]
}
];

export default quests;