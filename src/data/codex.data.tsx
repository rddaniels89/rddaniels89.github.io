export interface Codex {
    id: number;               // Unique identifier for the codex entry
    title: string;            // Title of the blog post
    dateAuthored: string;     // Date when the post was authored (format: YYYY-MM-DD)
    timeToRead: string;       // Estimated reading time (e.g., "5 min read")
    audioUrl: string;         //Audio of blog post
    categories: string[];     // Categories or tags for the blog post
    sources?: Source[];       // Optional sources or references for the post (could be URLs or citations)
    content: string;
  }
  
  export interface Source {
    url: string;                  // URL of the source
    date: string;                 // Date of the source (format: YYYY-MM-DD)
    clickableTitle: string;       // Title that will appear as a clickable link
    BlogRelevanceScore: number;   // Relevance score for this source
  }

  const codexes : Codex [] = [{
    id: 1,
    title: 'Understanding React Hooks',
    dateAuthored: '2023-10-01',
    timeToRead: '5 min read',
    audioUrl: "",
    categories: ['React', 'JavaScript'],
    sources: [
      {
        url: 'https://reactjs.org',
        date: '2023-09-29',
        clickableTitle: 'React Documentation',
        BlogRelevanceScore: 10,
      },
    ],
    content: 'React Hooks are a new addition in React 16.8...',
  },
  {
    id: 2,
    title: 'Understanding React Hooks',
    dateAuthored: '2023-11-01',
    timeToRead: '6 min read',
    audioUrl: "",
    categories: ['Test', 'HelloWorld'],
    sources: [
      {
        url: 'https://reactjs.org',
        date: '2023-09-29',
        clickableTitle: 'React Documentation',
        BlogRelevanceScore: 10,
      },
    ],
    content: 'React Hooks are a new addition in React 16.8...',
  }];

  export default codexes;