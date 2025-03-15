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
    startDate: new Date('2023-05-01'),
    endDate: new Date(2038, 2, 10), // Ongoing
    roles: ['Senior Consultant', 'Software Architect'],
    tags: ['Architecture', 'Leadership', 'UI Design', 'Cross-Team Collaboration'],
    accomplishments: [
      {
        description:
          'I led and refined UI architectural strategy across 5 teams.',
        role: 'Software Architect',
        learnings: [
          'I discovered that architectural vision implementation requires balancing team autonomy with system-wide consistency',
          'I observed that effective architecture patterns emerge when watching how teams naturally solve problems',
          'I learned that strategic technical guidance across teams requires understanding both business objectives and technical constraints'
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
        learnings: [
          'I realized that engineering visibility to leadership requires translating technical concepts into business outcomes',
          'I saw that regular structured communication prevents teams from diverging in critical areas',
          'I found that successful communication bridges must be bi-directional to maintain trust'
        ],
      },
      {
        description:
          'I collaborated with design teams to implement global UI components, ensuring consistency.',
        role: 'Software Architect',
        learnings: [
          'I recognized that design systems require engineering support to maintain practicality',
          'I observed that component libraries succeed when built iteratively with real use cases',
          'I learned that shared component ownership between design and development prevents divergence'
        ],
      },
      {
        description:
          'I translated Figma designs into technical directives and user stories, streamlining development.',
        role: 'Senior Consultant',
        learnings: [
          'I found that requirements translation is most effective when including context, not just specifications',
          'I discovered that technical directives that explain why, not just what, lead to better engineering decisions',
          'I observed that design-to-development handoffs improve when using consistent terminology across disciplines'
        ],
      },
      {
        description:
          'I mentored senior developers via pair programming and coaching sessions to enhance team capabilities.',
        role: 'Senior Consultant',
        learnings: [
          'I realized that effective mentoring of senior developers focuses on architectural thinking, not coding techniques',
          'I learned that coaching approaches must adapt to the individual\'s learning style and experience level',
          'I found that technical leadership requires building capability in others, not just demonstrating personal expertise'
        ],
      },
      {
        description:
          'I interfaced with any necessary part of the SDLC to complete tasks assigned to team.',
        role: 'Software Architect',
        learnings: [
          'I discovered that process optimizations should be measured by outcomes, not activities',
          'I observed that workflow efficiency often depends more on communication patterns than tooling',
          'I learned that team velocity improvements require addressing both technical debt and knowledge gaps'
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
    endDate: new Date('2024-05-01'),
    roles: ['Senior Consultant', 'Software Architect'],
    tags: ['Legacy Modernization', 'Cloud', 'SaaS', 'Healthcare', 'Payment Processing'],
    accomplishments: [
      {
        description:
          'I transformed legacy healthcare systems into modern applications while maintaining business continuity.',
        role: 'Software Architect',
        learnings: [
          'I found that legacy modernization requires balancing business continuity with technical evolution',
          'I observed that system transformation success depends on understanding the original architectural intent',
          'I discovered that incremental modernization often succeeds where complete rewrites fail'
        ],
      },
      {
        description:
          'I defined project scopes with clients and managed Azure cloud infrastructures from planning to support.',
        role: 'Senior Consultant',
        learnings: [
          'I learned that cloud resource management requires understanding both technical capabilities and cost implications',
          'I recognized that client scope definition benefits from creating clear technical boundaries',
          'I found that Azure infrastructure design decisions have long-term operational consequences'
        ],
      },
      {
        description:
          'I delivered full-stack solutions across multiple technology stacks including .NET C#, Java Spring Boot, React, Angular, Flutter, and UWP.',
        role: 'Software Architect',
        learnings: [
          'I observed that cross-platform architecture requires identifying common patterns despite framework differences',
          'I discovered that technical versatility enables choosing the right tool for specific business problems',
          'I realized that full-stack delivery benefits from consistent patterns across frontend and backend'
        ],
      },
      {
        description:
          'I gained FreedomPay certification for client system and integrated secure payment solutions into client projects.',
        role: 'Software Architect',
        learnings: [
          'I determined that payment integration requires balancing security compliance with user experience',
          'I found that third-party certifications often reveal gaps in internal development practices',
          'I learned that secure solutions demand both technical controls and operational procedures'
        ],
      },
      {
        description:
          'I led full stack modernization of healthcare applications.',
        role: 'Software Architect',
        learnings: [
          'I discovered that healthcare data handling demands specialized architectural considerations beyond standard practices',
          'I observed that compliance requirements can be abstracted into reusable patterns',
          'I recognized that regulated environments benefit from separating business logic from compliance controls'
        ],
      },
      {
        description:
          'I created standardized project scaffolding templates to accelerate project initiation.',
        role: 'Software Architect',
        learnings: [
          'I found that project templates provide most value when they embody architectural principles, not just boilerplate',
          'I learned that standardization must balance consistency with flexibility for project-specific needs',
          'I realized that reusable patterns should be extracted from successful implementations, not theoretical ideals'
        ],
      },
      {
        description:
          'I fostered team cohesion through transparent leadership and client-focused decision processes.',
        role: 'Senior Consultant',
        learnings: [
          'I observed that technical leadership effectiveness depends on establishing shared purpose',
          'I recognized that transparent decision processes build team trust even when outcomes are challenging',
          'I found that client-focused teams perform better when they understand the business context'
        ],
      },
      {
        description:
          'I architected transition of monolithic systems to multi-tenant SaaS models.',
        role: 'Software Architect',
        learnings: [
          'I determined that multi-tenant architectures require careful isolation mechanisms at multiple technical layers',
          'I discovered that EHR integration patterns differ significantly from standard API approaches',
          'I learned that tenant-specific customizations should be handled through configuration, not code forks'
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
      'At Lendr, I led critical platform migrations and major refactoring efforts that transformed application performance while providing technical leadership during organizational transitions. I established effective feedback mechanisms with stakeholders and represented technical concerns to executive leadership.',
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
          'I found that framework migrations benefit from immediate visible wins to justify broader changes',
          'I discovered that technical platform decisions should be validated through performance metrics',
          'I learned that critical upgrades require both technical planning and organizational timing'
        ],
      },
      {
        description:
          'I refactored a complex business application with 350k+ lines of code, implementing service-repository patterns that reversed negative sprint velocity.',
        role: 'Team Lead',
        learnings: [
          'I observed that comprehensive refactoring requires understanding business domain, not just code structure',
          'I recognized that team productivity correlates with codebase maintainability',
          'I determined that systematic refactoring approaches yield better results than opportunistic cleanup'
        ],
      },
      {
        description:
          'I co-led technical implementations during leadership transitions, maintaining continuity between development and executive leadership.',
        role: 'Interim Director of Engineering',
        learnings: [
          'I discovered that organizational transitions require maintaining technical momentum while supporting change',
          'I found that leadership continuity depends on clear documentation of decisions and their rationale',
          'I recognized that effective transitions involve preserving institutional knowledge while enabling new direction'
        ],
      },
      {
        description:
          'I established a structured UAT process aligning business stakeholders with development priorities, improving feature quality.',
        role: 'Team Lead',
        learnings: [
          'I learned that validation processes should match stakeholders\' technical sophistication',
          'I observed that user acceptance testing effectiveness depends on clear acceptance criteria',
          'I determined that feedback mechanisms should align with how features will actually be used'
        ],
      },
      {
        description:
          'I collaborated with the architect to implement product-wide strategy and technical standards while mentoring team members.',
        role: 'Team Lead',
        learnings: [
          'I found that technical standards require both clear guidelines and practical implementation paths',
          'I realized that architectural strategy implementation needs tactical translation for development teams',
          'I observed that enforcement approaches should educate and enable, not just restrict'
        ],
      },
      {
        description:
          'I represented technical leadership to investors and the CEO during executive transitions, providing strategic guidance.',
        role: 'Interim Director of Engineering',
        learnings: [
          'I discovered that interim leadership requires balancing short-term delivery with long-term sustainability',
          'I learned that effective leadership handoffs include transferring context, not just responsibilities',
          'I recognized that technical debt in compliance areas carries higher organizational risk than other technical debt'
        ],
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
      'Enhanced desktop applications using WinForms and Kendo UI to improve user experience.',
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
        learnings: [
          'Desktop UI modernization requires balancing platform constraints with user expectations',
          'UI frameworks can significantly improve development speed without sacrificing customization',
          'User experience improvements should prioritize high-frequency user interactions'
        ],
      },
      {
        description:
          'Contributed to internal company project repository .',
        role: 'Senior Consultant',
        learnings: [
          'Automation script development benefits from incremental validation approaches',
          'Visual Studio Tool and Code Generation development',
          'Script reliability depends on error handling more than core functionality'
        ],
      },
      {
        description:
          'Maintained project estimation accuracy within a 10% margin while optimizing delivery.',
        role: 'Senior Consultant',
        learnings: [
          'Estimation accuracy improves with historical data and structured decomposition',
          'Project delivery optimization requires managing both technical and communication factors',
          'Accurate estimation correlates with thorough requirement understanding'
        ],
      },
      {
        description:
          'Proactively monitored progress and applied problem-solving strategies to enhance system functionality.',
        role: 'Senior Consultant',
        learnings: [
          'Proactive monitoring reveals issues before they impact users or deadlines',
          'Complex system problems often require both technical and process solutions',
          'Problem-solving approaches should scale from symptoms to root causes'
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
      'Developed key components for a car loan application, directly enhancing functionality and user experience.',
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
        learnings: [
          'Financial application development requires precision in both calculations and UX',
          'Component development in domain-specific applications benefits from business context',
          'Feature development effectiveness increases with user workflow understanding'
        ],
      },
      {
        description:
          'Strengthened technical proficiency through close mentorship from senior developers.',
        role: 'Developer',
        learnings: [
          'Structured mentorship accelerates technical growth beyond self-directed learning',
          'Code review feedback provides contextual learning opportunities',
          'Senior developer patterns offer insights into maintainable code practices'
        ],
      },
      {
        description:
          'Increased test coverage using AutoFixture and Moq, leading to more reliable and timely releases.',
        role: 'Developer',
        learnings: [
          'Testing frameworks significantly reduce the friction of writing comprehensive tests',
          'Well-designed test fixtures improve both coverage metrics and test readability',
          'Automated testing strategies should prioritize business-critical paths',
          'Test-driven approaches improve both code design and defect prevention'
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
      'Rotated through diverse IT roles, gaining broad exposure across multiple technical domains.',
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
          'Technical versatility develops through exposure to diverse domains and technologies',
          'Enterprise IT involves complex interdependencies between systems and business processes',
          'Technology role specializations each require different mindsets and approaches',
          'Cross-functional exposure reveals how technology decisions impact different stakeholders'
        ],
      },
      {
        description:
          'Developed and deployed C# MVC applications to automate critical financial operations.',
        role: 'Developer',
        learnings: [
          'Financial automation requires rigorous validation and audit mechanisms',
          'Enterprise application development benefits from established architectural patterns',
          'Critical business applications demand both technical reliability and operational durability'
        ],
      },
      {
        description:
          'Enhanced SDLC practices, leading to improved code quality and more efficient project management.',
        role: 'Developer',
        learnings: [
          'Process improvements succeed when they address specific pain points',
          'SDLC enhancements should target both quality outcomes and developer experience',
          'Development lifecycle efficiency increases when friction points are systematically addressed'
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
      'Self-directed learning in Unity for game development, focusing on C# programming and game mechanics.',
    type: 'side',
    startDate: new Date('2012-06-01'),
    endDate: new Date(2038, 2, 10), // Ongoing
    roles: ['Game Developer (Personal Projects)'],
    tags: ['Game Development', 'Unity', 'C#', 'Personal Project'],
    accomplishments: [
      {
        description:
          'Self-directed learning in Unity for game development, focusing on C# programming and game mechanics.',
        role: 'Game Developer (Personal Projects)',
        learnings: [
          'Game engine frameworks offer powerful abstractions for complex interactive systems',
          'Performance optimization in game development differs from business application optimization',
          'Game mechanics design requires balancing technical implementation with user enjoyment',
          'Self-directed technical learning benefits from concrete project goals',
          'Creative coding contexts reveal different patterns than business application development'
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
      'Built a dynamic resume website using ChatGPT with minimal code and integrated AI tools across personal and professional projects.',
    type: 'side',
    startDate: new Date('2022-11-01'),
    endDate: new Date(2038, 2, 10), // Ongoing
    roles: ['AI Enthusiast'],
    tags: ['AI', 'Machine Learning', 'ChatGPT', 'Python', 'Productivity'],
    accomplishments: [
      {
        description:
          'Built a dynamic resume website using ChatGPT with minimal code.',
        role: 'AI Enthusiast',
        learnings: [
          'AI assistance can dramatically reduce implementation time for specific project types',
          'Effective prompt engineering is key to generating usable code from AI models',
          'AI collaboration changes the developer role from writing code to defining and refining solutions',
          'AI-assisted development requires clear architectural vision to guide the generation process'
        ],
      },
      {
        description:
          'Experimented with AI models using Oogabooga and Hugging Face, deepening practical ML expertise.',
        role: 'AI Enthusiast',
        learnings: [
          'Local AI model deployment reveals practical constraints beyond theoretical capabilities',
          'Model fine-tuning offers significant improvements for domain-specific applications',
          'Model architecture differences have practical implications for specific use cases',
          'Machine learning tools have rapidly evolved to enable easier experimentation'
        ],
      },
      {
        description:
          'Enhanced Python skills and utilized Jupyter notebooks for data analysis and model interaction.',
        role: 'AI Enthusiast',
        learnings: [
          'Interactive notebooks provide superior environments for exploratory data analysis',
          'Data science workflows benefit from iterative visualization and refinement',
          'Python ecosystem offers comprehensive tools for entire ML pipeline development',
          'Statistical literacy complements programming skills in data-driven projects'
        ],
      },
      {
        description:
          'Integrated OpenAI APIs and Playground, applying AI tools to streamline development workflows.',
        role: 'AI Enthusiast',
        learnings: [
          'API-based AI integration requires different approaches than UI-based interactions',
          'Cost-effective AI implementation depends on efficient prompt design',
          'Development workflow integration benefits from selective AI application to specific tasks',
          'API rate limits and token economics impact practical implementation strategies'
        ],
      },
      {
        description:
          'Leveraged AI tools (ChatGPT, Udio, Claude, MidJourney) in both professional and personal projects.',
        role: 'AI Enthusiast',
        learnings: [
          'Different AI models excel at different task types despite similar underlying technologies',
          'AI tools are most effective when matched to specific workflow needs',
          'Professional AI application requires understanding both capabilities and limitations',
          'AI tool evaluation should focus on practical outcomes rather than technical specifications'
        ],
      },
    ],
  },
];

export default quests;