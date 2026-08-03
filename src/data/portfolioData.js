// ─── Project Data ─────────────────────────────────────────────────
export const projects = [
  {
    id: 1,
    title: 'JobFit',
    subtitle: 'AI-powered Resume Analysis & Job-Matching Platform',
    description:
      'Built a full-stack platform for ATS score simulation and semantic resume–job description matching using vector embeddings. Developed async resume analysis pipelines using Celery, Redis, and spaCy with LLM-powered rewriting via Groq. Integrated SerpAPI to scrape live job listings and rank them against user resumes.',
    tech: ['React (TypeScript)', 'Python', 'FastAPI', 'PostgreSQL+pgvector', 'Redis', 'Celery', 'Groq (LLaMA 3.3 70B)', 'spaCy', 'Docker', 'Tailwind CSS', 'SerpAPI'],
    github: 'https://github.com/vaishnavi-shukla4/JobFit-AI',
    live: null,
    gradient: 'from-[#442f2a] to-[#6b4c45]',
    accentColor: '#f5cbd7',
    icon: '🤖',
    featured: true,
  },
  {
    id: 2,
    title: 'Multi-Document Research Agent',
    subtitle: 'AI Research Agent for Cross-Document Analysis',
    description:
      'Built a full-stack AI research agent enabling cross-document Q&A, contradiction detection, and trend analysis across multiple PDFs using LLaMA 3.3 70B (Groq) and Gemini embeddings with citation tracking. Engineered a custom in-memory RAG pipeline with NumPy cosine similarity search over 1536-dim Gemini embeddings, eliminating external vector DB dependencies.',
    tech: ['React', 'FastAPI', 'Groq (LLaMA 3.3 70B)', 'Gemini Embeddings', 'NumPy', 'PyPDF2', 'Vercel', 'Render'],
    github: 'https://github.com/vaishnavi-shukla4/multi-document-research-agent',
    live: null,
    gradient: 'from-[#2d1f1b] to-[#442f2a]',
    accentColor: '#f5cbd7',
    icon: '📚',
    featured: true,
  },
  {
    id: 3,
    title: 'Plantona',
    subtitle: 'Smart Gardening Assistant',
    description:
      'Led frontend development in a team project, building a full-stack smart gardening web application integrating a CNN-based plant disease detection model with a Flask REST API for real-time inference and recommendation generation. Engineered a multi-modal Hybrid Risk Score system combining CNN predictions and Open-Meteo weather data, improving disease risk estimation accuracy.',
    tech: ['React (TypeScript)', 'Tailwind CSS', 'Python', 'Flask', 'REST API', 'TensorFlow', 'Open-Meteo API', 'Vercel'],
    github: 'https://github.com/varunswami1/alpha4',
    live: null,
    gradient: 'from-[#1a2626] to-[#0f1a1a]',
    accentColor: '#f5cbd7',
    icon: '🌿',
    featured: true,
  },
];

// ─── Skills Data ──────────────────────────────────────────────────
export const skillCategories = [
  {
    id: 'languages',
    label: 'Programming Languages',
    icon: '{ }',
    skills: [
      { name: 'Java', icon: '☕' },
      { name: 'Python', icon: '🐍' },
      { name: 'JavaScript', icon: '🟨' },
      { name: 'SQL', icon: '🗃️' },
      { name: 'C', icon: '⚙️' },
      { name: 'TypeScript', icon: '🔷' },
    ],
  },
  {
    id: 'frontend',
    label: 'Frontend',
    icon: '◻',
    skills: [
      { name: 'React.js', icon: '⚛️' },
      { name: 'Tailwind CSS', icon: '🎨' },
      { name: 'HTML / CSS', icon: '🌐' },
      { name: 'REST APIs', icon: '🔗' },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    icon: '⚙',
    skills: [
      { name: 'FastAPI', icon: '⚡' },
      { name: 'Node.js', icon: '🟢' },
      { name: 'Express.js', icon: '🚂' },
      { name: 'Celery', icon: '🌿' },
      { name: 'Redis', icon: '🔴' },
    ],
  },
  {
    id: 'databases',
    label: 'Databases',
    icon: '🗄',
    skills: [
      { name: 'PostgreSQL', icon: '🐘' },
      { name: 'MySQL', icon: '🐬' },
      { name: 'pgvector', icon: '📐' },
    ],
  },
  {
    id: 'aiml',
    label: 'AI / ML',
    icon: '🧠',
    skills: [
      { name: 'TensorFlow', icon: '🔶' },
      { name: 'Scikit-learn', icon: '📊' },
      { name: 'spaCy', icon: '💬' },
      { name: 'NLP', icon: '📝' },
      { name: 'Pandas', icon: '🐼' },
      { name: 'NumPy', icon: '🔢' },
      { name: 'Matplotlib', icon: '📈' },
      { name: 'LLMs / Groq', icon: '🤖' },
    ],
  },
  {
    id: 'cloud',
    label: 'Cloud & Deploy',
    icon: '☁',
    skills: [
      { name: 'AWS', icon: '☁️' },
      { name: 'Vercel', icon: '▲' },
      { name: 'Render', icon: '🚀' },
      { name: 'Docker', icon: '🐳' },
    ],
  },
  {
    id: 'tools',
    label: 'Tools',
    icon: '🔧',
    skills: [
      { name: 'Git & GitHub', icon: '🐙' },
      { name: 'Postman', icon: '📬' },
      { name: 'VS Code', icon: '💻' },
    ],
  },
];

// ─── Education Data ───────────────────────────────────────────────
export const education = [
  {
    id: 1,
    degree: 'B.Tech in Computer Science & Engineering',
    institution: 'Manipal University Jaipur',
    duration: '2023 – 2027',
    score: 'CGPA: 8.85 / 10',
    description:
      'Focused on algorithms, machine learning, full-stack development, and software engineering. Actively involved in building production-grade projects spanning AI, backend systems, and data science.',
    coursework: ['Data Structures & Algorithms', 'RDBMS', 'Operating Systems', 'OOPS', 'Computer Networks'],
    achievements: [
      'Amazon ML Summer School 2026 – Top 2.23% of 134,000 applicants',
      'Dean\'s List certificate thrice (GPA 9.2+)',
      'Events Coordinator, IEEE Student Branch (2023–2024)',
      'LeetCode: Rated 1600+, 600+ problems solved',
    ],
  },
  {
    id: 2,
    degree: 'Class XII — Science Stream',
    institution: 'St. Mary\'s Convent College, Nainital',
    duration: '2022 – 2023',
    score: 'Percentage: 90.25%',
    description:
      'Completed 12th grade with Physics, Chemistry, Mathematics and Computer Science — strong analytical foundation that drives my problem-solving approach in software engineering.',
    coursework: ['Physics', 'Chemistry', 'Mathematics', 'Computer Science'],
    achievements: [],
  },
  {
    id: 3,
    degree: 'Class X',
    institution: 'St. Mary\'s Convent College, Nainital',
    duration: '2020 – 2021',
    score: 'Percentage: 93%',
    description:
      'Completed 10th grade with a percentage of 93%, scoring 94 in Computer Applications.',
    coursework: ['Mathematics', 'Science', 'Computer Applications'],
    achievements: [],
  },
];

// ─── Personal Info ─────────────────────────────────────────────────
export const personalInfo = {
  name: 'Vaishnavi Shukla',
  email: 'vaishnavishukla441@gmail.com',
  phone: '+91 9368096616',
  location: 'Rampur, Uttar Pradesh',
  github: 'https://github.com/vaishnavi-shukla4',
  linkedin: 'https://www.linkedin.com/in/vaishnavi-shuklaa/',
  leetcode: 'https://leetcode.com',
  resumeUrl: '#',
};
