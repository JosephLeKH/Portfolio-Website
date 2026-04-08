export interface Project {
  id: string;
  title: string;
  description: string;
  link: string;
  tags: string[];
  current?: boolean;
  live?: boolean;
  descriptionLinks?: { text: string; url: string }[];
}

export const projects: Project[] = [
  {
    id: 'vimes',
    title: 'Vimes',
    description:
      'Building core infrastructure for a cross-agency welfare and crisis-intervention platform that unifies data and workflows between child protection services, law enforcement, and community partners.',
    link: 'https://www.vimes.com',
    tags: [],
    current: true,
  },
  {
    id: 'carta',
    title: 'Carta (Stanford)',
    description:
      'Core planning system used by Stanford students to organize courses across a four-year academic timeline. Contributed to building reliable, interactive workflows for scheduling, constraints, and state management as part of the engineering team.',
    link: 'https://carta-dev-trailblazer.stanford.edu/landing',
    tags: ['React', 'TypeScript', 'Redux', '.NET', 'Docker'],
    current: true,
  },
  {
    id: 'portfolio-website',
    title: 'Portfolio Website (this site!)',
    description:
      'Personal portfolio designed and built to showcase projects, experience, and writing with a focus on clarity, performance, and thoughtful design. Serves as a living system that evolves alongside my work.',
    link: 'https://https://josephle-le.vercel.app',
    tags: ['Next.js', 'React', 'TypeScript', 'GSAP'],
    current: true,
  },
  {
    id: 'bases-insight',
    title: 'Bases Insight',
    description:
      'End-to-end financial analysis platform powering automated valuation workflows, including DCF, comps, and three-statement modeling. Built the company’s core product and infrastructure with an emphasis on scalability, performance, and correctness.',
    link: 'https://www.basesinsight.com',
    tags: ['React', 'TypeScript', 'FastAPI', 'PostgreSQL', 'AWS'],
    live: true,
  },
  {
    id: 'grantmate',
    title: 'GrantMate',
    description:
      'AI-powered grant writing assistant built to help nonprofits draft applications more efficiently using retrieval-augmented generation. Developed for Project Homeless Connect with a focus on usability, accuracy, and real-world impact.',
    link: 'https://migration-minder.vercel.app',
    tags: ['FastAPI', 'RAG', 'React', 'TypeScript', 'Docker'],
    live: true,
    descriptionLinks: [{ text: 'Project Homeless Connect', url: 'https://www.projecthomelessconnect.org/' }],
  },
  {
    id: 'semeval-emotion-intensity',
    title: 'SemEval-2025: Multilingual Emotion Prediction',
    description:
      'Multilingual machine learning model for predicting emotion intensity across 11 languages, developed for SemEval 2025 Task 11 Track B. Focused on applied modeling, evaluation, and robustness under real benchmark constraints.',
    link: 'https://aclanthology.org/2025.semeval-1.244/',
    tags: ['PyTorch', 'HuggingFace Transformers', 'Multilingual BERT', 'Regression Modeling'],
  },
  {
    id: 'wildfire-insurance',
    title: 'Wildfire Insurance Analysis',
    description:
      'Data-driven analysis of California wildfires and their impact on home insurance markets, examining non-renewals and reliance on the FAIR Plan. Explores how fire severity and risk shape long-term insurance outcomes.',
    link: 'https://github.com/josephle/wildfire-insurance',
    tags: ['Python', 'Pandas', 'SQL', 'Matplotlib'],
  },
];
