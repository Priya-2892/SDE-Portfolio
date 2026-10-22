// ─────────────────────────────────────────────────────────────
// Single source of truth for the whole portfolio.
// Edit text, links and projects here — no need to touch components.
// ─────────────────────────────────────────────────────────────

export const site = {
  url: 'https://portfolio-phi-blond-oy1xj4yfzl.vercel.app',
  resume: '/Priya_Kushwaha_SDE1_Resume.pdf',
};

export const profile = {
  name: 'Priya Kushwaha',
  role: 'Software Engineer (SDE I)',
  headline: 'I build full-stack products and run them in production.',
  summary:
    '2+ years of experience shipping web applications with the MERN stack and Next.js. I own features from requirements to release, deploy with Docker on Linux VPS servers and AWS EC2, and I work in Java and data structures and algorithms.',
  email: 'priyakushwaha2892@gmail.com',
  phone: '+91 7898024251',
  phoneHref: 'tel:+917898024251',
  location: 'India',
  github: 'https://github.com/Priya-2892',
  linkedin: 'https://www.linkedin.com/in/priya-kushwaha2892/',
  availability: 'Open to SDE I roles',
};

export const stats = [
  { value: '2+', label: 'years building production web apps' },
  { value: '10+', label: 'production websites and web app modules owned' },
  { value: '5', label: 'full-stack projects built with MERN and Next.js' },
  { value: '6', label: 'client websites designed, built and deployed' },
];

// Used by the interactive API console in the hero.
export const consoleTabs = [
  {
    route: '/profile',
    data: {
      name: 'Priya Kushwaha',
      role: 'Software Engineer (SDE I)',
      experience_years: 2,
      languages: ['JavaScript', 'Java', 'PHP', 'SQL'],
      status: 'open_to_work',
    },
  },
  {
    route: '/stack',
    data: {
      frontend: ['React.js', 'Next.js', 'Tailwind CSS'],
      backend: ['Node.js', 'Express.js', 'REST APIs'],
      databases: ['MongoDB', 'MySQL'],
      fundamentals: ['DSA', 'OOP', 'REST design'],
    },
  },
  {
    route: '/infra',
    data: {
      cloud: 'AWS EC2',
      containers: 'Docker',
      os: 'Linux',
      hosting: 'VPS',
      networking: ['DNS', 'Cloudflare / CDN'],
      version_control: 'Git + GitHub',
    },
  },
  {
    route: '/contact',
    data: {
      email: 'priyakushwaha2892@gmail.com',
      github: 'Priya-2892',
      linkedin: 'priya-kushwaha2892',
      response_time: 'within 24 hours',
    },
  },
];

export const experience = [
  {
    role: 'Software Development Engineer',
    company: 'The Purplebrick Consulting',
    period: 'Jul 2025 – Present',
    place: 'India',
    points: [
      'Built and shipped features end to end with React.js, Next.js, Node.js and JavaScript, taking work from requirements and Figma designs through testing to production release.',
      'Own frontend features across 10+ production websites and web app modules, and close gaps in the development process before they become bugs.',
      'Integrate REST APIs with backend services to render dynamic content, working with product, design and backend engineers in a startup-style team.',
      'Deploy and manage applications on VPS servers with Docker on Linux, including DNS setup, environment configuration, production troubleshooting and releases. Work on AWS EC2 instances for hosting.',
      'Improve page speed and scalability with Google Lighthouse and PageSpeed audits (Core Web Vitals), asset optimisation and cross-browser fixes.',
      'Work in Git and GitHub with branches, pull requests and reviews. Use AI-assisted tools to speed up debugging and documentation without lowering code quality.',
    ],
    stack: ['React.js', 'Next.js', 'Node.js', 'Docker', 'Linux', 'AWS EC2', 'REST APIs', 'Git'],
  },
  {
    role: 'Web Developer (Intern, then full-time)',
    company: 'Techmind Software',
    period: 'Jun 2024 – Jun 2025',
    place: 'India',
    points: [
      'Converted 15+ UI screens into responsive, cross-browser web pages with HTML5, CSS3, JavaScript, Bootstrap and WordPress/PHP.',
      'Debugged layout, plugin and compatibility issues and shipped UI improvements with senior developers.',
      'Built a base in PHP, MySQL and SQL queries while contributing to live client deliveries in an Agile workflow.',
    ],
    stack: ['JavaScript', 'PHP', 'MySQL', 'Bootstrap', 'WordPress'],
  },
  {
    role: 'Java and DSA Content Creator (Intern)',
    company: 'Startup',
    period: 'Mar 2023 – Apr 2023',
    place: '',
    points: [
      'Wrote structured, beginner-friendly learning material on Java and Data Structures & Algorithms.',
    ],
    stack: ['Java', 'DSA'],
  },
];

export const education = {
  degree: 'B.Tech in Computer Science and Engineering',
  school: 'JNCT College of Technology',
  year: 'Graduated 2024',
  score: '8.5 CGPA',
};

// Featured project: shown large with an architecture diagram.
export const featured = {
  title: 'ContentHub — Content Management & Discovery Platform',
  tagline: 'A full-stack content management platform designed to help teams create, organize, review, and publish content while enabling users to discover trending and personalized content from a unified dashboard.',
  points: [
    'Developing RESTful APIs using Node.js and Express.js, with MongoDB and Mongoose for persistent content storage and management.',
    'Building a responsive dashboard using Next.js, React.js, and Tailwind CSS, with reusable UI components and dedicated pages for content management, trending content, search, favorites, and settings.',
    'Implementing Redux Toolkit for centralized state management and API-driven workflows for creating, editing, and publishing content.',
    'Designing an editorial workflow that supports draft management, content review, publishing, and content status tracking.',
  ],
  stack: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Docker', 'Linux VPS'],
  github: '',
  live: '',
};

// Use case shown inside the featured project. Edit so it matches how the dashboard is really used.
export const useCase = {
  title: 'Use case: one platform for content teams and readers',
  scenario:
    'A content team needs a centralized workspace to manage articles and publish updates, while readers need an easy way to discover relevant content.',
  flow: [
    'A writer creates content and saves it as a draft.',
    'An editor reviews and updates the content before publishing it.',
    'The dashboard displays content statistics and distinguishes drafts from published items.',
    'Readers browse published content, explore trending topics, search by category, and save favorites.',
  ],
  outcome: 'A unified content platform that connects editorial workflows with content discovery, without requiring code changes or application redeployment for routine publishing.',
};

// Case study shown under the featured project. Edit so it matches exactly what you built.
export const caseStudy = {
  problem: 'Content teams need one place to manage publishing workflows, while readers need an easy way to discover relevant content.',
  design: [
    'Next.js and React dashboard for content management, search, trending content, and favorites.',
    'Node.js and Express REST APIs with MongoDB and Mongoose for content storage and publishing workflows.',
    'Redux Toolkit for centralized state management.',
  ],
  tradeoffs:
    'MongoDB offers flexible schemas for evolving content structures, while PostgreSQL is better suited to strongly relational data and complex transactional requirements.',
  deployment:
    'Docker and Linux VPS deployment are planned to support consistent environments and independent releases.',
  improve: [
    'Add automated API and workflow tests.',
    'Implement CI/CD for reliable deployments.',
    'Add caching and role-based access control.',
  ],
};

export const projects = [
  {
    title: 'Digital Marketing Agency Platform',
    desc: 'Marketing site with a Next.js and React front end and WordPress as a headless CMS. Content is fetched over REST and rendered dynamically, with reusable components tuned for Core Web Vitals and Lighthouse scores.',
    stack: ['Next.js', 'React.js', 'Headless WordPress', 'REST API'],
    github: '',
    live: '',
  },
  {
    title: 'Authentication System',
    desc: 'Full-stack auth on the MERN stack with JWT tokens, bcrypt password hashing, protected routes and login and signup flows.',
    stack: ['Node.js', 'Express.js', 'MongoDB', 'JWT', 'bcrypt'],
    github: '',
    live: '',
  },
  {
    title: 'Quiz Platform',
    desc: 'Responsive quiz app that consumes a REST API, with a countdown timer, auto-submit on timeout, score calculation and reusable state-driven components.',
    stack: ['React.js', 'Next.js', 'REST API'],
    github: '',
    live: 'https://quiz-react-app-sandy.vercel.app/',
  },
  {
    title: 'Todo Application',
    desc: 'Task manager with create, update and delete, priority filtering and persisted state, built with React hooks.',
    stack: ['React.js', 'Hooks', 'Local Storage'],
    github: '',
    live: 'https://todo-react-app-omega-three.vercel.app/',
  },
];

// Client sites delivered in production.
export const sites = [
  { title: 'Krishna Netralaya', note: 'Healthcare site with ACF-driven service and appointment sections', stack: 'WordPress, Elementor, ACF', img: '/images/kn.webp', live: 'https://www.krishnanetralaya.com/' },
  { title: 'Alpex Solar', note: 'Corporate site with reusable sections and custom CSS and JS', stack: 'WordPress, Elementor, ACF', img: '/images/alpex-solar.webp', live: 'https://alpexsolar.com/' },
  { title: 'Legalpreneur', note: 'Service listings built with custom post types and ACF', stack: 'WordPress, ACF, PHP', img: '/images/legal.webp', live: 'https://legalpreneur.in/' },
  { title: 'Break-Away', note: 'Travel brand site with blog, gallery and WooCommerce store', stack: 'WordPress, WooCommerce', img: '/images/break-away.webp', live: 'https://break-away.in/' },
  { title: 'Spacecraft Homes', note: 'US-based client site with a custom design system', stack: 'Squarespace, Figma', img: '/images/space-craft.webp', live: 'https://www.spacecraft-homes.com/' },
  { title: 'CIMBS', note: 'Mental health services site for a three-decade-old organisation', stack: 'WordPress', img: '/images/cimbs.webp', live: 'https://cimbs.pbdtech.in/' },
];

export const designs = [
  { title: 'Unhotel', link: 'https://www.figma.com/proto/I0sV3iXhgpx4BYAQaB0qAA/Project?node-id=171-98&t=kv76qXQoZf0nJdXA-0&scaling=min-zoom&content-scaling=fixed&page-id=101%3A33' },
  { title: 'Alpex Exim', link: 'https://www.figma.com/design/I0sV3iXhgpx4BYAQaB0qAA/Project?node-id=0-1&p=f&t=kv76qXQoZf0nJdXA-0' },
  { title: 'Legalpreneur', link: 'https://www.figma.com/design/I0sV3iXhgpx4BYAQaB0qAA/Project?node-id=101-33&p=f&t=kv76qXQoZf0nJdXA-0' },
  { title: 'PurpleBrick', link: 'https://www.figma.com/proto/oxSh34VyN6xwiIKNmY9J6D/Landing-pges?node-id=665-2&t=OGnBtPIqlCZtdAdA-0&scaling=min-zoom&content-scaling=fixed&page-id=20%3A77' },
  { title: 'HDBFC', link: 'https://www.figma.com/proto/oxSh34VyN6xwiIKNmY9J6D/Landing-pges?node-id=1-46&t=OGnBtPIqlCZtdAdA-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1' },
  { title: 'FlareHomes', link: 'https://www.figma.com/proto/oxSh34VyN6xwiIKNmY9J6D/Landing-pges?node-id=11-524&t=OGnBtPIqlCZtdAdA-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1' },
];

export const skills = [
  { group: 'Languages', items: ['JavaScript (ES6+)', 'Java', 'PHP', 'SQL', 'HTML5', 'CSS3'] },
  { group: 'CS fundamentals', items: ['Data Structures & Algorithms', 'Object-Oriented Programming', 'REST API design'] },
  { group: 'Frameworks', items: ['React.js', 'Next.js', 'Node.js', 'Express.js', 'Tailwind CSS', 'Bootstrap', 'SCSS'] },
  { group: 'Databases', items: ['MongoDB', 'MySQL'] },
  { group: 'Cloud and DevOps', items: ['AWS (EC2)', 'Docker', 'Linux', 'VPS hosting', 'DNS', 'Cloudflare / CDN', 'Git & GitHub', 'CI/CD basics'] },
  { group: 'Tools', items: ['Figma', 'Vite', 'Google Lighthouse', 'Postman', 'Agile', 'AI-assisted development'] },
  { group: 'CMS', items: ['WordPress', 'Headless WordPress', 'Elementor', 'ACF'] },
];

// DSA topics shown in the problem-solving block. Edit to match what you have practised.
export const dsa = {
  level: 'Basic to intermediate, practised in Java',
  topics: ['Arrays and strings', 'Hashing', 'Linked lists', 'Stacks and queues', 'Recursion', 'Sorting and searching', 'Trees'],
};

// Shown as a flow in the "How I ship" section.
export const shipFlow = [
  { title: 'Code', detail: 'React, Next.js, Node.js' },
  { title: 'Git', detail: 'Branch, PR, review' },
  { title: 'Docker', detail: 'Build the image' },
  { title: 'Linux VPS / AWS EC2', detail: 'Run in production' },
  { title: 'DNS + CDN', detail: 'Serve to users' },
];
