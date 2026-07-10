// ════════════════════════════════════════════════════════
// Portfolio data — ABDHUL KAREEM L  (from resume)
// ════════════════════════════════════════════════════════

export const PERSONAL = {
  name:     'Abdhul Kareem L',
  phone:    '+91 9344660105',
  email:    'abdhulkareem015@gmail.com',
  linkedin: 'https://www.linkedin.com/in/abdhul-kareem-b85a31333',
  github:   'https://github.com/abdhulkareem015',
  resume:   '/resume.pdf',   // place your PDF at neon-portfolio/public/resume.pdf
};

export const NAV_LINKS = ['About', 'Skills', 'Projects', 'Experience', 'Contact'];

export const HERO_ROLES = [
  { label: 'MERN Stack',   color: 'bg-blue-500/20 text-blue-300 border border-blue-500/30'       },
  { label: 'Node.js',      color: 'bg-green-500/20 text-green-300 border border-green-500/30'    },
  { label: 'React',        color: 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'       },
  { label: 'Open to Work', color: 'bg-neon/10 text-[var(--neon)] border border-[var(--neon)]/30' },
];

// ── Stats ────────────────────────────────────────────────
export const STATS = [
  { value: '4+',   label: 'Full-Stack Projects'  },
  { value: '160+', label: 'Skillrack Problems'   },
  { value: '100+', label: 'LeetCode Problems'    },
  { value: '3',    label: 'Certifications'       },
];

// ── Education ────────────────────────────────────────────
export const EDUCATION = [
  {
    degree:  'B.E (Computer Science Engineering)',
    school:  'Sri Eshwar College of Engineering',
    score:   '8.1 CGPA (Upto 4th Sem)',
    period:  '2025 – 2028',
    icon:    '🎓',
  },
  {
    degree:  'Diploma (Computer Science)',
    school:  'Al-Ameen Polytechnic College',
    score:   '91%',
    period:  '2023 – 2025',
    icon:    '📚',
  },
  {
    degree:  'HSC',
    school:  'Carmel Matric Higher Secondary School',
    score:   '75%',
    period:  '2022 – 2023',
    icon:    '🏫',
  },
];

// ── Skills ───────────────────────────────────────────────
export const SKILLS = [
  {
    icon:  '💻',
    title: 'Languages',
    desc:  'C · C++ · Java · JavaScript · HTML · CSS · MySQL — strong fundamentals across multiple paradigms.',
  },
  {
    icon:  '⚛️',
    title: 'Frontend Development',
    desc:  'React.js, HTML5, CSS3 — building fast, responsive, accessible UIs with clean component architecture.',
  },
  {
    icon:  '⚙️',
    title: 'Backend Engineering',
    desc:  'Node.js · Express.js · REST APIs · JWT Authentication — secure, scalable server-side systems.',
  },
  {
    icon:  '🗄️',
    title: 'Databases',
    desc:  'MongoDB · PostgreSQL · MySQL — data modelling, query optimisation, and schema design.',
  },
  {
    icon:  '🛠️',
    title: 'Tools & Platforms',
    desc:  'VS Code · Postman · GitHub · Excel · Power BI · AWS — full dev-to-deploy toolchain.',
  },
  {
    icon:  '🧠',
    title: 'Core Concepts',
    desc:  'OOP · DSA · DBMS — 160+ Skillrack, 100+ LeetCode, 30+ CodeChef problems solved.',
  },
];

// ── Projects ─────────────────────────────────────────────
export const PROJECTS = [
  {
    title: 'E-Commerce Platform',
    tag:   'MERN Stack',
    year:  '2025',
    desc:  'Full-stack E-Commerce platform with secure JWT authentication, product browsing, advanced search & filtering, shopping cart, order processing, and responsive UI. Built scalable REST APIs, MongoDB integration, and role-based access for customers and admins.',
    tech:  ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JWT', 'REST APIs'],
    live:  null,
    repo:  'https://github.com/abdhulkareem015/E-com-Frontend.git',
  },
  {
    title: 'Blog Application',
    tag:   'MERN Stack',
    year:  '2026',
    desc:  'Built a MERN stack blog app with secure JWT authentication and CRUD features for posts. Integrated a responsive React frontend with backend REST APIs. Managed MongoDB data with validation and error handling.',
    tech:  ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'REST APIs', 'JWT'],
    live:  null,
    repo:  'https://github.com/abdhulkareem015/Blog-Backend.git',
  },
  {
    title: 'ROAD SOS',
    tag:   'ROADSOS',
    year:  '2025',
    desc:  'Emergency SOS module for the ROADSOS road accident assistance platform. One-click SOS triggers live GPS capture, finds nearest hospitals within 8 km using MongoDB geospatial queries, and sends real-time notifications via Socket.IO. Hospitals accept requests, assign ambulances, and victims track live status — minimising response time during the critical golden hour.',
    tech:  ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Socket.IO', 'JWT', 'OpenStreetMap API'],
    live:  null,
    repo:  'https://github.com/abdhulkareem015/ROAD-SOS.git',
  },
  {
    title: 'Skill Exchange Board',
    tag:   'Spring Boot',
    year:  '2025',
    desc:  'Designed and implemented a full-stack Skill Exchange Platform using Spring Boot, Thymeleaf, and PostgreSQL to promote peer-to-peer learning and collaboration among students.',
    tech:  ['Spring Boot', 'Thymeleaf', 'PostgreSQL', 'Java', 'HTML', 'CSS', 'REST APIs'],
    live:  null,
    repo:  'https://github.com/abdhulkareem015/Skill-Exchange-board.git',
  },
  {
    title: 'Cloud Journey',
    tag:   'Coming Soon',
    year:  '2025+',
    desc:  'Currently building cloud-native applications on AWS — EC2 hosting, S3 storage, Docker containers, CI/CD pipelines, and serverless Lambda functions.',
    tech:  ['AWS EC2', 'Docker', 'Lambda', 'S3', 'CI/CD'],
    live:  null,
    repo:  null,
  },
];

// ── Process ──────────────────────────────────────────────
export const PROCESS = [
  {
    step:  '01',
    title: 'Design & Plan',
    desc:  'Understand requirements, define data models, plan API contracts, and sketch the UI flow before writing a single line of code.',
  },
  {
    step:  '02',
    title: 'Build & Iterate',
    desc:  'Full-stack implementation — REST APIs, authentication, database integration, React frontend, with continuous testing and refinement.',
  },
  {
    step:  '03',
    title: 'Deploy & Optimise',
    desc:  'Containerise with Docker, deploy to AWS/Vercel, configure CI/CD, monitor with CloudWatch, and optimise for performance.',
  },
];

// ── Experience ───────────────────────────────────────────
export const EXPERIENCE = [
  {
    role:    'MERN Stack Intern',
    company: 'Tech Company',
    period:  '2025',
    points: [
      'Built full-stack web applications using MERN',
      'Developed and integrated RESTful APIs',
      'Implemented authentication (JWT)',
      'Handled CRUD operations end-to-end',
      'Designed responsive user interfaces',
      'Improved performance via debugging & optimisation',
    ],
  },
];

// ── Certifications ───────────────────────────────────────
export const CERTS = [
  { name: 'Programming in Java',                          org: 'NPTEL',  year: '2025' },
  { name: 'Badge on Java Programming',                    org: 'Oracle', year: '2025' },
  { name: 'Java · C++ · PHP Crash Course (All-in-One)',   org: 'Udemy',  year: '2025' },
];

// ── Coding Profiles ──────────────────────────────────────
export const CODING_PROFILES = [
  { platform: 'Skillrack', solved: '160+', detail: 'Rank: 128961',          color: 'text-yellow-400', icon: '🏆' },
  { platform: 'LeetCode',  solved: '100+', detail: 'Rating: 1,563,826',     color: 'text-orange-400', icon: '🧩' },
  { platform: 'CodeChef',  solved: '30+',  detail: '',                      color: 'text-amber-400',  icon: '👨‍🍳' },
];
