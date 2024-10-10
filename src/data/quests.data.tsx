// src/data/quests.ts
export interface Quest {
    id: number;
    title: string;
    company?: string;
    description: string;
    fullDescription: string;
    type: 'main' | 'side';
    rewards: string[];
    length: string;
    roles: string[];
  }
  
  const quests: Quest[] = [
    {
      id: 1,
      title: "Rise of the Architect",
      company: "Inspire11",
      description:
        "Lead and inspire a team of 15 in delivering comprehensive software solutions, setting technical directions, and mentoring fellow developers.",
      fullDescription: `
  - **Led a team of 15** in end-to-end Software Development Life Cycle (SDLC) projects.
  - **Established technical direction** for multiple teams across the UI layer.
  - **Set development best practices**, adapting them to fit client and team constraints.
  - **Mentored and upskilled developers**, enhancing their leadership effectiveness.
  - **Contributed individually** to various layers in the application stack.
      `,
      type: 'main',
      rewards: [
        "+1000 XP in Leadership",
        "+500 XP in Technical Strategy",
        "+300 XP in Mentorship",
        "+200 XP in Full-Stack Development",
        "+50% Skill in Adapting Best Practices",
      ],
      length: "May 2024 - Present (5 months)",
      roles: ["Software Architect", "Senior Consultant"],
    },
    {
      id: 2,
      title: "The Modernizer's Quest",
      company: "Productive Edge",
      description:
        "Transform legacy systems into modern applications while leading teams and managing client projects.",
      fullDescription: `
  - **Learned new frameworks/languages** during project execution, delivering projects within timeline and budget.
  - **Managed client project teams** of 4-8 members with revenues ranging from $15K-$100K/month.
  - **Led modernization** of legacy systems into contemporary C#.NET/Java Spring Boot applications.
  - **Introduced multi-tenant architectures** and complex authentication flows, improving scalability and security.
  - **Transitioned monolithic systems** to modern SaaS models, decreasing maintenance costs and enhancing user experience.
  - **Set development best practices** focusing on robust and scalable architecture patterns.
  - **Contributed as a full-stack developer** to deliver end-to-end solutions.
      `,
      type: 'main',
      rewards: [
        "+800 XP in Legacy System Modernization",
        "+600 XP in Team Management",
        "+500 XP in Full-Stack Development",
        "+400 XP in Client Relations",
        "+50% Proficiency in New Frameworks",
      ],
      length: "February 2020 - May 2024 (4 years and 3 months)",
      roles: ["Software Architect", "Senior Consultant"],
    },
    {
      id: 3,
      title: "Interim Leadership Challenge",
      company: "Lendr",
      description:
        "Steer the engineering team during a pivotal transition, aligning technical strategies with business objectives.",
      fullDescription: `
  - **Managed the development team** during the search for a new CTO.
  - **Ensured project continuity** and adherence to technical standards.
  - **Aligned technical strategies** with business objectives, aiding organizational growth.
  - **Reported directly to the CEO**, providing strategic technical insights.
  - **Maintained application** responsible for funding over $150M to 20K+ businesses.
  - **Recognized as Employee of the Quarter** for refactoring the entire business application.
  - **Hired and upskilled a team** of 6 developers, establishing a clear technical vision.
  - **Managed offshore QA team** of 4 analysts, reducing defects and improving sprint velocity.
      `,
      type: 'main',
      rewards: [
        "+900 XP in Interim Leadership",
        "+700 XP in Team Building",
        "+600 XP in Technical Strategy",
        "+500 XP in Application Refactoring",
        "+100% Bug-Slaying Efficiency",
      ],
      length: "October 2018 - February 2020 (1 year and 4 months)",
      roles: ["Interim Director of Engineering", "Team Lead"],
    },
    {
      id: 4,
      title: "The Solo Developer's Journey",
      company: "SWC Technology Partners",
      description:
        "Deliver projects as a solo developer, enhancing application features and achieving project goals.",
      fullDescription: `
  - **Achieved project goals** within a 10% margin of estimation accuracy.
  - **Enhanced desktop application features** using proprietary software.
  - **Focused on user experience improvements** and functional upgrades.
  - **Completed brownfield applications** as a single developer, increasing project margins.
      `,
      type: 'main',
      rewards: [
        "+600 XP in Solo Development",
        "+500 XP in Estimation Accuracy",
        "+400 XP in User Experience Design",
        "+50% Efficiency in Project Delivery",
      ],
      length: "October 2017 – October 2018 (1 year)",
      roles: ["Software Consultant"],
    },
    {
      id: 5,
      title: "The Developer's Forge",
      company: "Manor Resources",
      description:
        "Hone technical and problem-solving skills within a collaborative team, creating user-centric solutions.",
      fullDescription: `
  - **Developed technical and problem-solving skills** within a collaborative team.
  - **Engaged with users** across underwriting, sales, and collections.
  - **Gained deep understanding** of user needs to develop effective software solutions.
  - **Increased test coverage** using AutoFixture and Moq.
  - **Improved reliability and performance** of essential financial functionalities.
      `,
      type: 'main',
      rewards: [
        "+500 XP in Collaborative Development",
        "+400 XP in User Engagement",
        "+300 XP in Test Automation",
        "+50% Skill in Test Coverage",
      ],
      length: "August 2016 – September 2017 (1 year and 1 month)",
      roles: ["Developer"],
    },
    {
      id: 6,
      title: "Foundations at the Aerospace Giant",
      company: "The Boeing Company",
      description:
        "Build foundational IT skills across various domains, contributing to significant financial savings.",
      fullDescription: `
  - **Developed and deployed C# MVC applications** to automate financial operations.
  - **Improved SDLC practices**, enhancing code quality and project management.
  - **Maintained application** saving the company over $10M annually.
  - **Participated in ITCFP**, gaining foundational understanding in:
    - **Core Infrastructure and Engineering**:
      - Maintained enterprise-level monitoring applications.
      - Developed compliance checks for over 10,000 servers.
    - **End User Infrastructure Services**:
      - Learned Perl and Python for ETL functions.
      - Tracked data of virtual devices used by over 5,000 employees.
    - **Database Platform and Operations**:
      - Developed release packages to improve database hosting capacity.
      `,
      type: 'main',
      rewards: [
        "+800 XP in Foundational IT Skills",
        "+600 XP in Financial Application Development",
        "+500 XP in SDLC Improvement",
        "+100% Mastery in Multidisciplinary IT Domains",
      ],
      length: "June 2012 - August 2016 (4 years and 2 months)",
      roles: ["Developer", "ITCFP Participant"],
    },
    {
      id: 7,
      title: "The Game Developer's Path",
      description:
        "Explore the world of game development using Unity, enhancing skills in C# and game physics.",
      fullDescription: `
  - **Self-directed learning** in Unity for game development.
  - **Designed and developed multiple video game projects** (unfinished).
  - **Honed skills** in C# programming, event-driven programming, and game physics.
      `,
      type: 'side',
      rewards: [
        "+300 XP in Game Development",
        "+200 XP in C# Programming",
        "+100 XP in Game Physics",
        "+50% Creativity Boost",
      ],
      length: "Ongoing",
      roles: ["Game Developer (Personal Projects)"],
    },
    {
      id: 8,
      title: "Mastering the AI Frontier",
      description:
        "Delve into AI and machine learning technologies, focusing on ChatGPT and large language models.",
      fullDescription: `
  - **Became a knowledgeable practitioner** in AI and machine learning.
  - **Explored integration and architecture** of LLMs into software solutions.
  - **Re-engaged with Python** and Jupyter Notebooks, tinkering with models like oobabooga.
      `,
      type: 'side',
      rewards: [
        "+400 XP in AI and Machine Learning",
        "+300 XP in Python Programming",
        "+200 XP in LLM Integration",
        "+100% Insight into AI Technologies",
      ],
      length: "Ongoing",
      roles: ["AI Enthusiast", "Machine Learning Practitioner"],
    },
    // Add more quests...
  ];
  
  export default quests;
  