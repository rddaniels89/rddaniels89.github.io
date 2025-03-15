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
  description: 'Led architectural strategy across multiple teams to improve code consistency and efficiency.',
  summary:
    'I elevated architectural practices across multiple teams by implementing design consistency, bridging communication gaps, and establishing efficient development workflows. I cultivated technical leadership through deliberate mentorship while strategically aligning technology decisions with business objectives.',
  type: 'main',
  startDate: new Date('2024-05-02'),
  endDate: new Date(2038, 2, 10), // Ongoing
  roles: ['Senior Consultant', 'Software Architect'],
  tags: ['Architecture', 'Leadership', 'UI Design', 'Cross-Team Collaboration'],
  accomplishments: [
    {
      description:
        'I led and refined UI architectural strategy across 5 teams.',
      role: 'Software Architect',
      learnings: [
        'I learned architectural effectiveness requires balancing team autonomy with system-wide consistency',
        'I learned that friction against architecture patterns emerge when watching how disparate teams naturally solve problems'
      ],
    },
    {
      description:
        'I operated as full stack architect for one team and UI architect for 5 teams.',
      role: 'Software Architect',
      learnings: [
        'I found that specialized depth and broad oversight can be balanced through effective delegation',
        'I recognized that cross-cutting concerns often manifest differently in UI versus backend systems',
        'I determined that consistent design principles matter more than standardizing on specific implementations'
      ],
    },
    {
      description:
        'I improved cross-team and intra-team communication to align development with management expectations.',
      role: 'Senior Consultant',
      learnings: [],
    },
    {
      description:
        'I collaborated with design teams to implement global UI components, ensuring consistency.',
      role: 'Software Architect',
      learnings: [
        'I learned that component libraries still deliver value even when implemented late in project'
      ],
    },
    {
      description:
        'I translated Figma designs into technical directives and user stories, streamlining development.',
      role: 'Senior Consultant',
      learnings: [],
    },
    {
      description:
        'I mentored senior developers via pair programming and coaching sessions to enhance team capabilities.',
      role: 'Senior Consultant',
      learnings: [],
    },
    {
      description:
        'I interfaced with any necessary part of the SDLC to complete tasks assigned to team.',
      role: 'Software Architect',
      learnings: [
        'I learned that maximizing team velocity requires teams to appropriately understand the strategic direction and implementation goal'
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
    'I transformed legacy systems into modern applications while leading diverse technology teams.',
  summary: 
    'I modernized legacy healthcare systems while maintaining critical business continuity. I designed scalable cloud architectures, integrated secure payment solutions, and architected multi-tenant SaaS models that preserved essential EHR connections.',
  type: 'main',
  startDate: new Date('2020-02-01'),
  endDate: new Date('2024-04-31'),
  roles: ['Senior Consultant', 'Software Architect'],
  tags: ['Legacy Modernization', 'Cloud', 'SaaS', 'Healthcare', 'Payment Processing'],
  accomplishments: [
    {
      description:
        'I transformed legacy healthcare systems into modern applications while maintaining business continuity.',
      role: 'Software Architect',
      learnings: [
        'I found that legacy modernization requires balancing business continuity with technical evolution',
        'I learned to make decisions WITH constraints instead of against constraints'
      ],
    },
    {
      description:
        'I defined project scopes with clients and managed Azure cloud infrastructures from planning to support.',
      role: 'Senior Consultant',
      learnings: [
        'I learned to be proficient in architecting for a language I was not well-versed in'
      ],
    },
    {
      description:
        'I delivered full-stack solutions across multiple technology stacks including .NET C#, Java Spring Boot, React, Angular, Flutter, and UWP.',
      role: 'Software Architect',
      learnings: [],
    },
    {
      description:
        'I gained FreedomPay certification for client system and integrated secure payment solutions into client projects.',
      role: 'Software Architect',
      learnings: [
        'I learned how to build IdP integrations from the ground up'
      ],
    },
    {
      description:
        'I led full stack modernization of healthcare applications.',
      role: 'Software Architect',
      learnings: [
        'I learned that healthcare data practices impact technical decisions and constraints',
        'I learned that compliance requirements should be considered in reusable patterns'
      ],
    },
    {
      description:
        'I created standardized project scaffolding templates to accelerate project initiation.',
      role: 'Software Architect',
      learnings: [
        'I learned that project templates work easier when teams build working relationships',
        'I learned that standardization must balance consistency with flexibility for project-specific needs'
      ],
    },
    {
      description:
        'I fostered team cohesion through transparent leadership and client-focused decision processes.',
      role: 'Senior Consultant',
      learnings: [],
    },
    {
      description:
        'I architected transition of monolithic systems to multi-tenant SaaS models.',
      role: 'Software Architect',
      learnings: [
        'I learned that multi-tenant architectures can be effectively handled through configuration'
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
    'I co-led technical implementations and maintained clear communication during leadership transitions.',
  summary: 
    'I led critical platform migrations and major refactoring efforts that transformed application performance while providing technical leadership during organizational transitions. I established effective feedback mechanisms with stakeholders and represented technical concerns to executive leadership.',
  type: 'main',
  startDate: new Date('2018-10-01'),
  endDate: new Date('2020-02-01'),
  roles: ['Team Lead', 'Interim Director of Engineering'],
  tags: ['Leadership', 'Engineering Transition', 'Performance Optimization', 'Technical Strategy'],
  accomplishments: [
    {
      description:
        'I upgraded applications from .NET to .NET Core on day one, immediately improving performance and establishing technical direction.',
      role: 'Team Lead',
      learnings: [
        'I learned how to read code for intent and clarity very effectively',
        'I learned how to effectively leverage pair programming with other team members'
      ],
    },
    {
      description:
        'I refactored a complex business application with 350k+ lines of code, implementing service-repository patterns that reversed negative sprint velocity.',
      role: 'Team Lead',
      learnings: [
        'I learned how to perform every function of and be involved in most decisions for the SDLC',
        'I learned how to build a culture of technical excellence for a small team'
      ],
    },
    {
      description:
        'I co-led technical implementations during leadership transitions, maintaining continuity between development and executive leadership.',
      role: 'Interim Director of Engineering',
      learnings: [
        'I learned that technical leadership requires communication as much as technical proficiency',
        'I learned how to communicate to leaders what outcomes to expect from the technical department'
      ],
    },
    {
      description:
        'I established a structured UAT process aligning business stakeholders with development priorities, improving feature quality.',
      role: 'Team Lead',
      learnings: [
        'I learned the importance of talking directly to end users',
        'I learned that educating our business on technical practices positively impacted velocity'
      ],
    },
    {
      description:
        'I collaborated with the architect to implement product-wide strategy and technical standards while mentoring team members.',
      role: 'Team Lead',
      learnings: [],
    },
    {
      description:
        'I represented technical leadership to investors and the CEO during executive transitions, providing strategic guidance.',
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
    'I enhanced desktop applications and maintained project delivery while developing professional estimation skills.',
  summary: 
    'At SWC, I focused on desktop application enhancement and workflow automation while developing strong project estimation and delivery skills. I applied UX improvements to legacy systems and created reliable automation tools.',
  type: 'main',
  startDate: new Date('2017-10-01'),
  endDate: new Date('2018-10-01'),
  roles: ['Senior Consultant'],
  tags: ['Desktop Applications', 'UI Enhancement', 'Project Estimation'],
  accomplishments: [
    {
      description:
        'I enhanced desktop applications using WinForms and Kendo UI to improve user experience.',
      role: 'Senior Consultant',
      learnings: ['I learned how to balance modern UI expectations with legacy application constraints'
      ],
    },
    {
      description:
        'I developed and refined scripts under mentorship, ensuring timely and accurate project delivery.',
      role: 'Senior Consultant',
      learnings: [
      ],
    },
    {
      description:
        'I maintained project estimation accuracy within a 10% margin while optimizing delivery.',
      role: 'Senior Consultant',
      learnings: [
        'I learned that accurate estimation correlates with thorough requirement understanding'
      ],
    },
    {
      description:
        'I proactively monitored progress and applied problem-solving strategies to enhance system functionality.',
      role: 'Senior Consultant',
      learnings: [
        'I learned that proactive issue identification is more valuable than reactive problem solving'
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
    'I developed components for financial applications while enhancing my technical skills through mentorship and test-driven development.',
  summary: 
    'At Manor Resources, I built key features for financial systems while improving code quality through comprehensive testing strategies. I benefited from structured mentorship that accelerated my professional growth.',
  type: 'main',
  startDate: new Date('2016-08-01'),
  endDate: new Date('2017-09-01'),
  roles: ['Developer'],
  tags: ['Development', 'Mentorship', 'Testing', 'Financial Applications'],
  accomplishments: [
    {
      description:
        'I developed key components for a car loan application, directly enhancing functionality and user experience.',
      role: 'Developer',
      learnings: [],
    },
    {
      description:
        'I strengthened technical proficiency through close mentorship from senior developers.',
      role: 'Developer',
      learnings: [
        'I learned that mentorship accelerates technical growth beyond self-directed learning',
        'I learned that code review feedback provides contextual learning opportunities'
      ],
    },
    {
      description:
        'I increased test coverage using AutoFixture and Moq, leading to more reliable and timely releases.',
      role: 'Developer',
      learnings: [
        'I learned that test-driven approaches improve both code design and defect prevention',
        'I learned that well-designed test fixtures improve both coverage metrics and test readability'
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
    'I rotated through diverse IT roles as part of a selective program, gaining broad exposure while developing enterprise applications for critical operations.',
  summary: 
    'At Boeing, I participated in the selective IT Career Foundation Program (ITCFP), rotating through multiple technical domains to build cross-functional expertise. I developed mission-critical financial applications while improving development processes across teams.',
  type: 'main',
  startDate: new Date('2012-06-01'),
  endDate: new Date('2016-08-01'),
  roles: ['ITCFP Participant', 'Developer'],
  tags: ['IT Fundamentals', 'Development', 'Automation', 'Financial Operations'],
  accomplishments: [
    {
      description:
        'I rotated through diverse IT roles, gaining broad exposure across multiple technical domains.',
      role: 'ITCFP Participant',
      learnings: [
        'I learned how technology choices affect different business units in distinct ways',
        'I learned to appreciate the interconnected nature of enterprise systems'
      ],
    },
    {
      description:
        'I developed and deployed C# MVC applications to automate critical financial operations.',
      role: 'Developer',
      learnings: [
        'I learned that enterprise-scale applications require additional focus on stability and maintenance',
        'I learned that financial systems require extensive validation and audit capabilities'
      ],
    },
    {
      description:
        'I enhanced SDLC practices, leading to improved code quality and more efficient project management.',
      role: 'Developer',
      learnings: [
        'I learned that financial systems require extensive validation and audit capabilities'
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
    'I applied software engineering principles to game development through self-directed learning in Unity.',
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
        'I taught myself Unity game development, focusing on C# programming and game mechanics.',
      role: 'Game Developer (Personal Projects)',
      learnings: [
        'I learned that game development requires different performance optimization approaches than business applications',
        'I learned that creative coding reveals different architectural patterns than enterprise development',
        'I discovered that game mechanics design balances technical implementation with user enjoyment'
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
    'I explored AI tools and applications to enhance development workflows and create innovative solutions.',
  summary: 
    'I\'ve leveraged AI tools to accelerate development and broaden my technical capabilities, building applications like this resume site with minimal code. By experimenting with various AI models and APIs, I\'ve developed practical expertise in applying these technologies to solve real-world problems.',
  type: 'side',
  startDate: new Date('2022-11-01'),
  endDate: new Date(2038, 2, 10), // Ongoing
  roles: ['AI Enthusiast'],
  tags: ['AI', 'Machine Learning', 'ChatGPT', 'Python', 'Productivity'],
  accomplishments: [
    {
      description:
        'I built a dynamic resume website using ChatGPT with minimal code.',
      role: 'AI Enthusiast',
      learnings: [
        'Effective prompt engineering generates better code from AI models',
        'AI shifts developer focus from writing code to defining solutions'
      ],
    },
    {
      description:
        'I experimented with AI models using Oogabooga and Hugging Face, deepening practical ML expertise.',
      role: 'AI Enthusiast',
      learnings: [
        'Local AI deployment has different constraints than cloud solutions',
        'Domain-specific applications benefit from model fine-tuning'
      ],
    },
    {
      description:
        'I enhanced Python skills and utilized Jupyter notebooks for data analysis and model interaction.',
      role: 'AI Enthusiast',
      learnings: [
        'Interactive notebooks excel for exploratory data analysis',
        'Statistical literacy enhances programming in data projects'
      ],
    },
    {
      description:
        'I integrated OpenAI APIs and Playground, applying AI tools to streamline development workflows.',
      role: 'AI Enthusiast',
      learnings: [
        'API-based AI requires different approaches than UI-based tools',
        'Cost-effective AI implementation needs efficient prompt design'
      ],
    },
    {
      description:
        'I leveraged AI tools (ChatGPT, Udio, Claude, MidJourney) in both professional and personal projects.',
      role: 'AI Enthusiast',
      learnings: [
        'Different AI models excel at specific task types',
        'Match AI tools to specific workflow requirements'
      ],
    },
  ],
},
];

export default quests;