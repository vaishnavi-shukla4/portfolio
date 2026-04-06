// ─── Project Data ─────────────────────────────────────────────────
export const projects = [
  {
    id: 1,
    title: 'AI Resume Optimizer',
    subtitle: 'LLM-powered resume analysis & improvement platform',
    description:
      'Job applicants struggle to tailor resumes for different roles and ATS systems, leading to low response rates. Built a full-stack application that analyzes resumes using LLMs and provides section-wise feedback, keyword optimization, and ATS scoring. Integrated async processing using Celery and Redis for handling large documents.',
    tech: ['Python', 'FastAPI', 'PostgreSQL', 'Redis', 'Celery', 'LLM APIs'],
    github: 'https://github.com/vaishnavi-shukla4',
    live: null,
    color: 'violet',
    icon: '🤖',
    featured: true,
  },
  {
    id: 2,
    title: 'Plantona',
    subtitle: 'Smart plant health monitoring & disease prediction system',
    description:
      'Plant diseases are often detected too late, and farmers/gardeners lack accessible tools for early diagnosis and risk prediction. Developed a full-stack app that detects plant diseases using a hybrid risk score combining image classification, weather data, and historical outbreak trends.',
    tech: ['Python', 'TensorFlow', 'FastAPI', 'React', 'Weather API'],
    github: 'https://github.com/vaishnavi-shukla4',
    live: null,
    color: 'cyan',
    icon: '🌿',
    featured: true,
  },
  {
    id: 3,
    title: 'Credit Card Fraud Detection',
    subtitle: 'ML model for anomaly detection in financial transactions',
    description:
      'Fraudulent transactions are rare and highly imbalanced, making them difficult to detect using standard ML models. Built a classification system using multiple ML algorithms (Logistic Regression, Random Forest, etc.) and handled class imbalance using resampling techniques for high-precision fraud detection.',
    tech: ['Python', 'Scikit-learn', 'Pandas', 'Jupyter Notebook'],
    github: 'https://github.com/vaishnavi-shukla4',
    live: null,
    color: 'pink',
    icon: '🔐',
    featured: true,
  },
];

// ─── Skills Data ──────────────────────────────────────────────────
export const skills = {
  Languages: [
    { name: 'Java', level: 90 },
    { name: 'Python', level: 80 },
    { name: 'SQL', level: 78 },
    { name: 'C', level: 70 },
    { name: 'HTML/CSS', level: 85 },
  ],
  Frameworks: [
    { name: 'React', level: 78 },
    { name: 'FastAPI', level: 85 },
    { name: 'TensorFlow', level: 72 },
    { name: 'Scikit-learn', level: 80 },
    { name: 'Tailwind CSS', level: 80 },
  ],
  Tools: [
    { name: 'Git & GitHub', level: 85 },
    { name: 'PostgreSQL', level: 78 },
    { name: 'Redis', level: 72 },
    { name: 'Celery', level: 70 },
    { name: 'Docker', level: 65 },
  ],
  'ML / AI': [
    { name: 'Machine Learning', level: 80 },
    { name: 'Deep Learning', level: 72 },
    { name: 'NLP / LLMs', level: 75 },
    { name: 'Computer Vision', level: 68 },
    { name: 'Data Analysis', level: 82 },
  ],
};

// ─── Education Data ───────────────────────────────────────────────
export const education = [
  {
    id: 1,
    degree: 'B.Tech in Computer Science & Engineering',
    institution: 'Manipal University Jaipur',
    duration: '2022 – 2026',
    cgpa: '8.84',
    description:
      'Focused on algorithms, machine learning, full-stack development, and software engineering. Actively involved in building production-grade projects spanning AI, backend systems, and data science.',
    highlights: ['CGPA: 8.84', 'ML & AI Specialization', 'Full-Stack Projects', 'Team Leadership'],
  },
  {
    id: 2,
    degree: 'Class XII',
    institution: 'ICSE Board',
    duration: '2022',
    cgpa: 90.25,
    description:
      'Completed 12th grade with Physics, Chemistry,Mathematics and Computer Science — strong analytical foundation that drives my problem-solving approach in software engineering.',
    highlights: ['Science Stream', 'PCM Focus', 'Strong Analytical Foundation'],
  },
  {
    id: 3,
    degree: 'Class X',
    institution: 'ICSE Board',
    duration: '2020',
    cgpa: 93,
    description:
      'Completed 10th grade with a percentage of 93%, scoring 94 in Computer Applications.',
    highlights: ['Holistic Education', 'PCM Focus', 'Strong Analytical Foundation'],
  },
];
