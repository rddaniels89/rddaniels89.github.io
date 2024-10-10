// src/data/quests.ts
interface Quest {
    id: number;
    title: string;
    company?: string;
    description: string;
    fullDescription: string;
    type: 'main' | 'side';
    rewards: string[];
  }
  
  const quests: Quest[] = [
    {
      id: 1,
      title: 'The Architect\'s Awakening',
      company: 'Inspire11',
      description: 'Embark on a journey as a Software Architect.',
      fullDescription: 'In this quest, you lead a team of 15 adventurers...',
      type: 'main',
      rewards: [
        '+1000 XP',
        '+50 Leadership Skills',
        '+20 Team Management',
        '+100% Coffee Consumption',
      ],
    },
    {
        id: 2,
        title: 'The Architect\'s Sleep',
        company: 'Inspire11',
        description: 'Embark on a journey as a Software Architect.',
        fullDescription: 'In this quest, you lead a team of 15 adventurers...',
        type: 'main',
        rewards: [
          '+100 XP',
          '+5 Leadership Skills',
          '+2 Team Management',
          '+10% Coffee Consumption',
        ],
      },
    // Add more quests...
  ];
  
  export default quests;
  