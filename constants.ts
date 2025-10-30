
import { type Project, type SkillCategory, type ResumeItem } from './types';

export const projects: Project[] = [
  {
    id: 1,
    title: 'QuantumLeap AI',
    description: 'A platform for real-time data analysis using serverless architecture and machine learning.',
    longDescription: 'QuantumLeap AI is a comprehensive data analysis platform designed for enterprise clients. It leverages AWS Lambda for scalable, event-driven processing and integrates with a custom machine learning model for predictive analytics. The frontend is built with React and D3.js for interactive visualizations, providing users with actionable insights from complex datasets. The project involved designing a resilient architecture, ensuring low-latency data pipelines, and creating an intuitive user interface.',
    tags: ['React', 'TypeScript', 'AWS', 'Python', 'D3.js', 'Serverless'],
    imageUrl: 'https://picsum.photos/seed/quantum/600/400',
    repoUrl: 'https://github.com/johndoe/quantum-leap',
    liveUrl: 'https://quantumleap.example.com',
  },
  {
    id: 2,
    title: 'EcoRoute Navigation',
    description: 'A mobile app that calculates the most fuel-efficient routes for drivers, using real-time traffic data.',
    longDescription: 'EcoRoute is a React Native mobile application that helps drivers reduce their carbon footprint and save on fuel costs. It integrates with Mapbox API for mapping and a custom routing algorithm that considers factors like traffic, elevation, and vehicle type. The backend, built on Node.js and PostgreSQL with PostGIS, handles complex geospatial queries efficiently. I was responsible for the entire mobile app development lifecycle, from UI/UX design in Figma to deployment on the App Store and Google Play.',
    tags: ['React Native', 'Node.js', 'PostgreSQL', 'Mapbox', 'Mobile'],
    imageUrl: 'https://picsum.photos/seed/ecoroute/600/400',
    repoUrl: 'https://github.com/johndoe/ecoroute',
  },
  {
    id: 3,
    title: 'DevDocket',
    description: 'An open-source developer toolkit and documentation management system.',
    longDescription: 'DevDocket is a web-based tool aimed at improving developer productivity. It provides a centralized place for managing code snippets, project documentation, and API keys. Built with Next.js for server-side rendering and performance, it features a Markdown editor with real-time preview, full-text search powered by Elasticsearch, and user authentication with Auth0. The project is open-source and has garnered a community of contributors.',
    tags: ['Next.js', 'Elasticsearch', 'Auth0', 'Open Source', 'Docker'],
    imageUrl: 'https://picsum.photos/seed/devdocket/600/400',
    repoUrl: 'https://github.com/johndoe/devdocket',
    liveUrl: 'https://devdocket.example.com',
  },
   {
    id: 4,
    title: 'CryptoTrack Wallet',
    description: 'A secure and user-friendly cryptocurrency wallet with portfolio tracking features.',
    longDescription: 'CryptoTrack is a desktop application built with Electron that provides a secure environment for managing various cryptocurrencies. It integrates with multiple exchange APIs to offer real-time portfolio tracking and market data analysis. Security was paramount, with features like hardware wallet integration (Ledger, Trezor) and on-device private key encryption. The UI was built with React and Tailwind CSS for a modern and responsive feel.',
    tags: ['Electron', 'React', 'Crypto', 'Security', 'APIs'],
    imageUrl: 'https://picsum.photos/seed/crypto/600/400',
    repoUrl: 'https://github.com/johndoe/cryptotrack',
  },
];

export const skillCategories: SkillCategory[] = [
  {
    category: 'Frontend',
    skills: [
      { name: 'React / Next.js', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'Tailwind CSS', level: 98 },
      { name: 'Vue.js', level: 75 },
      { name: 'Web Performance', level: 85 },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js / Express', level: 90 },
      { name: 'Python / Django', level: 80 },
      { name: 'PostgreSQL / MongoDB', level: 85 },
      { name: 'GraphQL', level: 80 },
      { name: 'REST APIs', level: 95 },
    ],
  },
  {
    category: 'Infrastructure & DevOps',
    skills: [
      { name: 'AWS (Lambda, S3, EC2)', level: 85 },
      { name: 'Docker / Kubernetes', level: 75 },
      { name: 'CI/CD (GitHub Actions)', level: 90 },
      { name: 'Vercel / Netlify', level: 95 },
      { name: 'Terraform', level: 70 },
    ],
  },
];

export const resume = {
  experience: [
    {
      title: 'Senior Frontend Engineer',
      companyOrInstitution: 'Innovate Corp',
      period: '2020 - Present',
      description: 'Led the development of customer-facing applications, focusing on performance, user experience, and scalability.',
      points: [
        'Architected and built a new design system in React and TypeScript, reducing development time by 30%.',
        'Improved core web vitals by 40% through code splitting, image optimization, and server-side rendering.',
        'Mentored a team of 4 junior developers, conducting code reviews and fostering best practices.',
      ],
    },
    {
      title: 'Software Engineer',
      companyOrInstitution: 'Tech Solutions Inc.',
      period: '2017 - 2020',
      description: 'Developed and maintained full-stack web applications for various clients in the e-commerce and finance sectors.',
       points: [
        'Built a real-time analytics dashboard using WebSockets and D3.js, handling over 10,000 events per second.',
        'Migrated a legacy monolithic backend to a microservices architecture using Node.js and Docker.',
      ],
    },
  ],
  education: [
    {
      title: 'B.S. in Computer Science',
      companyOrInstitution: 'State University',
      period: '2013 - 2017',
      description: 'Graduated with honors. Focused on algorithms, data structures, and software engineering principles.',
    },
  ],
};
