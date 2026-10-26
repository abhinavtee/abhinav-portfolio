export const profile = {
  name: 'Abhinav Tripathi',
  shortName: 'Abhinav',
  role: 'Full Stack Developer',
  email: 'abhi9651.at@outlook.com',
  phone: '+91 9628488554',
  linkedin: 'https://linkedin.com/in/abhinavte',
  github: 'https://github.com/abhinavtee',
  resume: 'https://drive.google.com/file/d/1oCXakQf9ZRig7XRQCJ_WQtmRmVAO7N32/view?usp=drive_link',
  // Add a deployed portfolio URL after publishing this site.
  portfolioUrl: '',
}

export const skillGroups = [
  {
    title: 'Frontend',
    description: 'Interfaces & interaction',
    icon: 'layers',
    skills: ['React.js', 'Next.js', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'React Router', 'Vite'],
  },
  {
    title: 'Backend',
    description: 'APIs & application logic',
    icon: 'terminal',
    skills: ['Node.js', 'Express.js', 'Python', 'Flask', 'Java', 'Spring Boot', 'REST APIs'],
  },
  {
    title: 'Databases & Auth',
    description: 'Data & identity',
    icon: 'database',
    skills: ['MongoDB', 'MySQL', 'JWT', 'Google OAuth'],
  },
  {
    title: 'Tools',
    description: 'Workflow & delivery',
    icon: 'code',
    skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'npm', 'Maven', 'Vercel'],
  },
]

export const projects = [
  {
    number: '01',
    name: 'URLBee',
    kind: 'URL SHORTENER · FULL STACK',
    description: 'A full-stack URL shortener with URL management, JWT-based authentication, and a responsive interface backed by a REST API.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Mongoose'],
    visual: 'urlbee',
    featured: true,
    demo: 'https://url-bee-d1z3.vercel.app/about',
    // Add the exact repository URL here when available. Do not use the profile URL as a project repo.
    source: '',
    sourceLabel: 'https://github.com/abhinavtee/URLBee',
  },
  {
    number: '02',
    name: 'Info Bridge',
    kind: 'BLOG PLATFORM · FULL STACK',
    description: 'A full-stack blog application with JWT and Google OAuth, role-based access, post management, search, likes, and comments.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Google OAuth'],
    visual: 'infobridge',
    featured: true,
    demo: 'https://mern-blog-oaax.vercel.app/',
    source: '',
    sourceLabel: 'https://github.com/abhinavtee/MERN-BLOG',
  },
  {
    number: '03',
    name: 'Personal Portfolio',
    kind: 'PORTFOLIO · FRONTEND',
    description: 'A responsive, dark editorial portfolio designed to make projects, technical skills, and contact details easy to explore.',
    stack: ['React', 'Tailwind CSS', 'Framer Motion', 'Lucide'],
    visual: 'portfolio',
    featured: false,
    demo: 'https://abhinavtripathi.is-a.dev/',
    source: '',
    sourceLabel: 'https://github.com/abhinavtee/abhinav_portfolio',
  },
]

export const experience = [
  {
    period: 'OCT 2025 — DEC 2025',
    role: 'Full Stack Developer Intern',
    company: 'Alphanumeric Ideas',
    details: [
      'Built full-stack features using Next.js and Flask backend services.',
      'Created dashboard workflows with date-range filters and customer-specific inputs.',
      'Optimized a Python automation task with multithreading, reducing processing time from about 7 minutes to 3 minutes.',
    ],
  },
  {
    period: 'AUG 2022 — JUN 2023',
    role: 'Technical Recruiter Associate',
    company: 'Vision Beyond Resources India Pvt. Ltd.',
    details: [
      'Sourced and screened candidates, coordinated interviews, and managed candidate communication.',
      'Worked with stakeholders to understand role requirements and assess candidate profiles.',
    ],
  },
]
