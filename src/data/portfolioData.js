/**
 * Central content + configuration file.
 * ============================================================
 * HOW TO CUSTOMIZE (no code knowledge needed):
 *
 * 1. CV PDF:
 *    - Put your real CV file at:  public/Mahmoud-Hassan-CV.pdf
 *    - Keep the same file name, or update `personal.cvFile` below.
 *
 * 2. LinkedIn:
 *    - Paste your real profile URL into `personal.linkedin`.
 *    - While it is empty / "#", the UI shows "Coming Soon" and
 *      the buttons stay disabled (they never look like working links).
 *
 * 3. Projects:
 *    - Paste real demo / repo URLs into each project's
 *      `liveUrl` / `sourceUrl`. Leave them as "" to keep the
 *      "Coming Soon" disabled state.
 *
 * 4. Personal details (DOB, military status) are intentionally
 *    NOT exported for public display.
 */

export const personal = {
  fullName: 'Mahmoud Ahmed Hassan',
  displayName: 'Mahmoud Ahmed Hassan',
  initials: 'MH',
  title: 'Software Engineer',
  headline: 'Software Engineer | Front-End Developer | Project Management Enthusiast',
  heroDescription:
    'I build responsive web experiences, turn ideas into functional digital products, and combine technical skills with structured project management to deliver meaningful results.',
  summary:
    'Highly motivated and results-driven professional with a dual background in project management and content creation. As a project manager I excel at leading software development projects from conception to successful delivery, ensuring efficient resource utilization and adherence to timelines. My expertise includes Agile methodologies, team leadership, and stakeholder communication, consistently driving projects to meet strategic objectives.',
  about:
    "I'm Mahmoud Ahmed Hassan, a Computer Science graduate from Benha University with an interest in software engineering, front-end development, and project management. My background combines technical foundations with organizational skills, collaboration, and an interest in creating practical digital experiences.",
  email: 'mahmoudahmed600080@gmail.com',
  phone: '+20 1286272319',
  phoneHref: 'tel:+201286272319',
  location: 'Qaha, Qalyubia, Egypt',
  // LinkedIn profile URL (canonical form, tracking params removed)
  linkedin: 'https://www.linkedin.com/in/mahmoud-ahmed-4a093b413',
  linkedinLabel: 'LinkedIn profile (coming soon)',
  cvFile: '/Mahmoud-Ahmed-Hassan-CV.pdf',
  availability: 'Open to opportunities',
};

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'certificates', label: 'Certificates' },
  { id: 'contact', label: 'Contact' },
];

export const heroTechBadges = ['HTML', 'CSS', 'JavaScript'];

export const aboutCards = [
  {
    icon: 'code',
    title: 'Software Development',
    text: 'Building structured, responsive, user-friendly interfaces.',
  },
  {
    icon: 'kanban',
    title: 'Project Management',
    text: 'Planning tasks, coordinating teams, and tracking project progress.',
  },
  {
    icon: 'learning',
    title: 'Continuous Learning',
    text: 'Developing technical knowledge and exploring modern web technologies.',
  },
];

export const skillGroups = [
  {
    id: 'frontend',
    icon: 'layout',
    title: 'Frontend Development',
    subtitle: 'Building blocks I use',
    skills: ['HTML5', 'CSS3', 'JavaScript'],
  },
  {
    id: 'pm',
    icon: 'users',
    title: 'Project Management & Collaboration',
    subtitle: 'Coordination & delivery',
    skills: [
      'Agile Methodologies',
      'Project Planning',
      'Team Coordination',
      'Stakeholder Communication',
      'MS Project',
      'TFS',
      'Webex',
    ],
  },
  {
    id: 'tools',
    icon: 'briefcase',
    title: 'Productivity & Business Tools',
    subtitle: 'Everyday professional toolkit',
    skills: [
      'Microsoft Word',
      'Microsoft Excel',
      'Microsoft PowerPoint',
      'Microsoft Outlook',
      'Salesforce',
    ],
  },
];

export const projects = [
  {
    id: 'tumor-detection',
    name: 'Body Tumor Detection',
    date: 'February 2024 – June 2024',
    category: 'University / Computer Science Project',
    description:
      'A university project focused on detecting malignant tumors using Magnetic Resonance Imaging (MRI). The project received an Excellent grade.',
    technologies: ['MRI-based image analysis'],
    techNote:
      'Specific programming languages or ML frameworks will be listed here once confirmed.',
    // Leave empty until real URLs are provided — UI renders "Coming Soon".
    liveUrl: '',
    sourceUrl: '',
    grade: 'Excellent',
    visual: 'medical',
  },
  {
    id: 'template-one',
    name: 'Template One',
    date: 'Front-End Practice',
    category: 'Front-End Template',
    description:
      'A front-end website template built using HTML and CSS, demonstrating page structure, styling, and responsive design.',
    technologies: ['HTML5', 'CSS3'],
    liveUrl: 'https://mahmoudahmed500080-commits.github.io/Project-HTML-CSS/',
    sourceUrl: '',
    visual: 'template1',
  },
  {
    id: 'template-two',
    name: 'Template Two',
    date: 'Front-End Practice',
    category: 'Front-End Template',
    description:
      'A front-end website template built using HTML and CSS, showcasing layout composition and visual styling.',
    technologies: ['HTML5', 'CSS3'],
    liveUrl: 'https://mahmoudahmed500080-commits.github.io/HTML_AND_CSS_Template_Two/',
    sourceUrl: '',
    visual: 'template2',
  },
  {
    id: 'template-three',
    name: 'Template Three',
    date: 'Front-End Practice',
    category: 'Front-End Template',
    description:
      'A front-end website template built using HTML and CSS, exploring responsive sections and modern page styling.',
    technologies: ['HTML5', 'CSS3'],
    liveUrl: 'https://mahmoudahmed500080-commits.github.io/HTM_And_CSS_Template_Three/',
    sourceUrl: '',
    visual: 'template3',
  },
];

export const education = {
  degree: 'Bachelor of Science in Computer Science',
  institution: 'Benha University, Qalyubia, Egypt',
  duration: 'October 2020 – June 2024',
  grade: 'Good high (2.75)',
};

export const certificates = [
  {
    id: 'dpear-flutter',
    title: 'D.pear Summer Training – Flutter Department',
    description: 'Completed a six-week summer training program in the Flutter Department.',
    date: 'July 2023',
  },
];

export const languages = [
  { name: 'Arabic', level: 'Native', dots: 5 },
  { name: 'English', level: 'Proficient', dots: 4 },
];

export const contactInfo = {
  title: "Let's Build Something Together",
  subtitle: 'Have a project idea or an opportunity to discuss? Feel free to reach out.',
  // Contact form has no backend by default.
  // It validates on the front end and opens the visitor's mail app (mailto:)
  // with a pre-filled message — so nothing is ever "fake sent".
  mailtoHint:
    'This form opens your email app with the message pre-filled (no backend yet). To receive messages directly, connect Formspree / EmailJS — see README.',
};
