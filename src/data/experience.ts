export interface TimelineItem {
  year: string;
  title: string;
  company: string;
  companyUrl?: string;
  description: string;
  highlight?: boolean;
  logo?: string | null;
}

export const journeyData: TimelineItem[] = [
  {
    year: 'Incoming',
    title: 'Software Engineering Intern',
    company: 'Apple',
    companyUrl: 'https://apple.com',
    description: 
      'Incoming Full-Stack SWE Intern at Apple on the Internal Tools team.',
    highlight: true,
    logo: '/logos/apple.png',
  },
  {
    year: 'Oct 2025 - Present',
    title: 'Machine Learning Engineer Intern',
    company: 'Neurotrack',
    companyUrl: 'https://neurotrack.com',
    description:
      'Developed machine learning models and supporting data pipelines to analyze patient cognitive health data. Partnered closely with ' +
      'product teams to surface insights through internal dashboards used for patient testing and behavioral analysis.',
    logo: '/logos/neurotrack.jpeg',
  },
  {
    year: 'Oct 2025 - Present',
    title: 'Software Engineer',
    company: 'Carta (Stanford)',
    companyUrl: 'https://carta-dev-trailblazer.stanford.edu/landing',
    description:
      'Developed core planning features for Stanford’s four-year course planner, building interactive workflows for scheduling and course ' +
      'organization. Worked closely with design and product teams to improve planner reliability, usability, and overall student experience.',
    logo: '/logos/carta.jpeg',
  },
  {
    year: 'Sept 2025 - Present',
    title: 'CS106A/CS106B Teaching Assistant',
    company: 'Stanford School of Engineering',
    companyUrl: 'https://engineering.stanford.edu/',
    description:
      'Led weekly sections for small groups of students, reinforcing core concepts in programming, algorithms, and data structures. Mentored ' +
      'students on problem-solving strategies, code quality, and foundational software development practices.',
    logo: '/logos/stanford_engineering.jpeg',
  },
  {
    year: 'Aug 2025 - Feb 2026',
    title: 'Founding Software Engineer',
    company: 'Bases Insight',
    companyUrl: 'https://www.basesinsight.com',
    description:
      'Built the company’s core product and infrastructure end to end, architecting a production financial analysis platform used for automated ' +
      'valuation workflows. Owned system design across backend services, data pipelines, and deployment, establishing the foundation for scalability, performance, and long-term reliability.',
    logo: '/logos/bases_insight.png',
  },
  {
    year: 'May 2025 - Oct 2025',
    title: 'Software Engineering Intern',
    company: 'Jersey Mike’s Franchise',
    companyUrl: 'https://www.jerseymikes.com',
    description:
      'Built and deployed a full-stack scheduling system used by local Jersey Mike’s stores to automate workforce planning and improve day-to-day operations. ' +
      'Developed forecasting models and validation workflows to account for staffing constraints, demand patterns, and edge cases in real retail environments.',
    logo: '/logos/jersey_mikes.png',
  },
  {
    year: 'June 2025 - Aug 2025',
    title: 'Data Science Intern',
    company: 'Bonterra Tech',
    companyUrl: 'https://www.bonterratech.com/',
    description:
      'Developed predictive models and data pipelines to analyze donor behavior at scale, improving classification performance and supporting retention analysis. ' +
      'Built causal inference workflows to estimate treatment effects and inform data-driven decision making across large datasets. ',
    logo: '/logos/bonterra_tech.jpeg',
  },
  {
    year: 'Dec 2024 - Jun 2025',
    title: 'Data Science and SWE Team',
    company: 'Stanford Data and Mapping for Society (DAMS)',
    companyUrl: 'https://dams.su.domains/',
    description:
      'Integrated external datasets to support predictive modeling of maintenance needs in remote deployments for nonprofit partners. Designed and built a modern ' +
      'dashboard to replace a legacy system and improve visibility into operational performance and trends. ',
    logo: '/logos/dams.jpeg',
  },
  {
    year: 'Jun 2023 - Aug 2024',
    title: 'Software Engineering Intern',
    company: 'AiGo Learning',
    companyUrl: 'https://aigolearning.org/',
    description:
      'Built and maintained full-stack web applications and internal tools supporting user workflows, authentication, and role-based access control. Developed ' +
      'backend services and automation systems that improved platform engagement and increased project submissions. ',
    logo: '/logos/aigo_learning.jpeg',
  },
  {
    year: 'May 2023 - Aug 2024',
    title: 'Computer Science Instructor',
    company: 'Thinkland AI',
    companyUrl: 'https://thinkland.ai/',
    description:
      'Designed and taught computer science lessons centered on real-world projects, improving student comprehension and engagement. Mentored students in ' +
      'programming fundamentals and advanced concepts, fostering critical thinking and guiding them through successful project completion. ',
    logo: '/logos/thinkland_ai.jpeg',
  },
];
