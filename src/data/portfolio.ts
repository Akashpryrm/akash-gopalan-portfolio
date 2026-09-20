export interface Education {
  id: string;
  degree: string;
  institution: string;
  year?: string;
  details?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period?: string;
  description?: string;
}

export interface Project {
  id: string;
  title: string;
  description?: string;
  technologies: string[];
  link?: string;
  repo?: string;
}

export interface PortfolioData {
  personal: {
    name: string;
    primaryTitle: string;
    secondaryTitles: string[];
    email?: string;
    github?: string;
    linkedin?: string;
    resumeUrl?: string;
  };
  education: Education[];
  experience: Experience[];
  projects: Project[];
  skills: {
    category: string;
    items: string[];
  }[];
  certifications: string[];
  achievements: string[];
}

export const portfolioData: PortfolioData = {
  personal: {
    name: 'AKASH GOPALAN',
    primaryTitle: 'Full-Stack Developer',
    secondaryTitles: [
      'Flutter Developer',
      'Software Developer',
      'AI/ML Enthusiast',
    ],
    // Links to be provided later
    email: '',
    github: 'https://github.com/Akashpryrm/',
    linkedin: 'https://www.linkedin.com/in/akash-gopalan',
    resumeUrl: '/resume/AKASH_GOPALAN_RESUME.pdf',
  },
  education: [
    {
      id: 'edu-1',
      degree: 'MCA (Master of Computer Applications)',
      institution: 'Kannur University Campus, Mangattuparamba',
    },
    {
      id: 'edu-2',
      degree: 'B.Sc. Computer Science',
      institution: 'Government College Kasaragod',
    },
  ],
  experience: [
    {
      id: 'exp-1',
      role: 'Full-Stack Developer',
      company: 'Ai2Gi',
    },
    {
      id: 'exp-2',
      role: 'Flutter Developer (Internship)',
      company: 'Ai2Gi',
    },
  ],
  projects: [
    {
      id: 'proj-1',
      title: 'ExamAIR',
      technologies: [],
    },
    {
      id: 'proj-2',
      title: 'HabotConnect',
      technologies: [],
    },
    {
      id: 'proj-3',
      title: 'Fingerprint-Based Exam Hall Entry System',
      technologies: [],
    },
    {
      id: 'proj-4',
      title: 'NASA Space Apps Challenge – Exoplanet Hunter AI',
      technologies: [],
    },
    {
      id: 'proj-5',
      title: 'Fake and Real Image Detection',
      technologies: [],
    },
    {
      id: 'proj-6',
      title: 'ResFeast',
      technologies: [],
    },
  ],
  skills: [
    {
      category: 'Languages & Frontend',
      items: ['Flutter', 'Dart', 'C', 'C++', 'Java', 'React'],
    },
    {
      category: 'Backend & APIs',
      items: ['Python', 'Django', 'Django REST Framework', 'REST APIs'],
    },
    {
      category: 'Database',
      items: ['PostgreSQL', 'MySQL', 'SQLite', 'Firebase'],
    },
    {
      category: 'AI / ML',
      items: ['OpenCV', 'CNN', 'Deep Learning', 'Machine Learning'],
    },
    {
      category: 'Core Concepts',
      items: [
        'Clean Architecture',
        'Dependency Injection',
        'OOP',
        'DSA',
        'DBMS',
        'SDLC',
      ],
    },
    {
      category: 'Tools',
      items: ['Git', 'GitHub', 'Postman', 'Unit Testing', 'Integration Testing', 'User Acceptance Testing'],
    },
  ],
  certifications: [
    // Pending
  ],
  achievements: [
    // Pending
  ],
};
