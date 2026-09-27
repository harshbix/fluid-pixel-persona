export interface Project {
  id: string;
  slug: string;
  title: string;
  category: "Full-Stack" | "Frontend" | "Design & Systems";
  summary: string;
  description: string;
  image: string;
  imageAlt?: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  featured?: boolean;
  role: string;
  timeline: string;
  problem: string;
  solution: string;
  architecture: {
    frontend: string;
    backend?: string;
    styling: string;
    deployment: string;
  };
  keyFeatures: string[];
  impact: string[];
}

export interface Service {
  number: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  technologies: string[];
  icon: string;
}

export interface ProcessStage {
  number: string;
  title: string;
  phase: string;
  description: string;
  deliverables: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  description: string;
  achievements: string[];
  current?: boolean;
  year?: string;
  logoSrc?: string;
  technologies?: string[];
  category?: "engineering" | "leadership";
}

export interface NoteItem {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  category: string;
  summary: string;
  content: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface PersonalDimension {
  id: string;
  title: string;
  label: string;
  brand: string;
  highlight: string;
  description: string;
  actionText: string;
  actionUrl: string;
  bullets: string[];
  icon: string;
}

export interface DigitalProduct {
  id: string;
  slug: string;
  title: string;
  category: "Code Template" | "Engineering Guide" | "Hardware Guide" | "Design Tokens";
  tagline: string;
  description: string;
  price: string;
  format: string;
  badge?: string;
  highlights: string[];
  downloadUrl: string;
  previewUrl?: string;
  version: string;
}

export const PERSONAL_INFO = {
  name: "Junior Jeconia",
  handle: "harshbix",
  role: "Full-Stack Developer",
  subRole: "Software • Hardware • Education",
  availability: "Available for select opportunities",
  location: "Dar es Salaam, Tanzania",
  email: "juniorjeconia@icloud.com",
  phone: "+255 755 063 711",
  whatsapp: "+255755063711",
  whatsappUrl: "https://wa.me/255755063711?text=Hi%20Junior%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project.",
  socials: {
    github: "https://github.com/harshbix",
    linkedin: "https://www.linkedin.com/in/junior-jeconia-90710b265",
    twitter: "https://twitter.com/b1xson",
    instagram: "https://instagram.com/bixx.tech",
    tiktok: "https://tiktok.com/@bixxtech",
  },
  bioSummary:
    "I design and build web applications, user interfaces, and digital systems. Combining frontend precision with solid full-stack architecture, I turn product ideas into reliable, clean software.",
  coreValues: [
    {
      title: "Design That Serves Function",
      description: "Interfaces should be visually arresting, intuitive to navigate, and quick to load on any device.",
    },
    {
      title: "Clean, Maintainable Architecture",
      description: "Writing typed, modular code with reusable components and predictable data flow.",
    },
    {
      title: "Fast Time-to-Market",
      description: "Shipping working software early, testing in real conditions, and iterating with feedback.",
    },
    {
      title: "End-to-End Ownership",
      description: "From layout prototyping to API integration, database design, and production deployment.",
    },
  ],
};

export const TRUST_STACK = [
  "React",
  "TypeScript",
  "JavaScript",
  "Next.js",
  "Node.js",
  "Express",
  "Tailwind CSS",
  "PostgreSQL",
  "Vite",
  "Git & GitHub",
  "REST APIs",
  "UI Systems",
];

export const SERVICES: Service[] = [
  {
    number: "01",
    title: "Modern Web Development",
    tagline: "High-performance, responsive websites and web applications built to scale.",
    description:
      "Crafting production-grade web applications from scratch or refactoring existing sites. Focused on lightning-fast load times, SEO indexability, clean typography, and clean responsive design across all screen sizes.",
    deliverables: [
      "Responsive React / Next.js web applications",
      "Clean semantic markup & technical SEO optimization",
      "Mobile-first responsive layouts (320px to 4K)",
      "Core Web Vitals optimization & lighthouse auditing",
    ],
    technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vite"],
    icon: "Globe",
  },
  {
    number: "02",
    title: "Full-Stack Applications",
    tagline: "End-to-end web products with connected backends, databases, and secure APIs.",
    description:
      "Bridging the gap between engaging frontend experiences and dependable backend infrastructure. Designing data models, building RESTful endpoints, managing authentication, and deploying resilient web services.",
    deliverables: [
      "Custom RESTful API engineering",
      "Database schema design & migrations",
      "Secure user authentication & session handling",
      "Production deployment & cloud hosting setup",
    ],
    technologies: ["Node.js", "Express", "PostgreSQL", "Supabase", "REST APIs"],
    icon: "Layers",
  },
  {
    number: "03",
    title: "UI/UX & Product Design",
    tagline: "User-centered interfaces, interaction design, and cohesive design systems.",
    description:
      "Transforming messy requirements into refined user journeys and elegant screen layouts. Creating modular design tokens, intentional micro-interactions, and accessible UI patterns that give digital products immediate credibility.",
    deliverables: [
      "Interactive component systems & design tokens",
      "Subtle, purposeful interface animations & transitions",
      "Accessibility (WCAG) compliance & contrast tuning",
      "Information architecture & user flow blueprints",
    ],
    technologies: ["Framer Motion", "Tailwind CSS", "Design Systems", "Figma"],
    icon: "Layout",
  },
  {
    number: "04",
    title: "Custom Digital Systems",
    tagline: "Internal dashboards, workflow tools, and administrative platforms.",
    description:
      "Developing purposeful business software that solves practical operational bottlenecks. From inventory and catalog managers to analytics dashboards and internal management portals that save teams hours each week.",
    deliverables: [
      "Custom analytics & admin dashboards",
      "Operational workflow automation & tracking",
      "Data visualization & interactive tables",
      "Robust client-side error handling & state sync",
    ],
    technologies: ["React", "TypeScript", "Radix UI", "Node.js", "Tailwind"],
    icon: "Cpu",
  },
];

export const PROCESS_STAGES: ProcessStage[] = [
  {
    number: "01",
    phase: "Discovery & Strategy",
    title: "Understand the Problem",
    description:
      "Before writing code, I clarify your core objectives, user expectations, technical constraints, and scope. This prevents wasted effort and sets a direct roadmap.",
    deliverables: [
      "Scope & requirements specification",
      "Information architecture blueprint",
      "Recommended tech stack & milestones",
    ],
  },
  {
    number: "02",
    phase: "Architecture & Interface",
    title: "Design the Experience",
    description:
      "I design the visual hierarchy, component systems, and data flow. Every view, typography level, and interaction state is defined intentionally for clarity and trust.",
    deliverables: [
      "Responsive wireframes & component layouts",
      "Design tokens (colors, typography, spacing)",
      "Database schema & API contracts",
    ],
  },
  {
    number: "03",
    phase: "Engineering & Integration",
    title: "Build & Integrate",
    description:
      "Building clean, typed, and maintainable software. Writing modular frontend components, wiring backend endpoints, handling edge cases, and ensuring zero layout shifts.",
    deliverables: [
      "Modular TypeScript & React codebase",
      "Integrated backend APIs & database layer",
      "Continuous testing on real devices",
    ],
  },
  {
    number: "04",
    phase: "Quality & Deployment",
    title: "Refine & Launch",
    description:
      "Performance audits, cross-device testing, accessibility checks, and deployment to reliable cloud infrastructure with zero downtime.",
    deliverables: [
      "Lighthouse performance & accessibility audit",
      "Production deployment with SSL & CDN",
      "Handover documentation & post-launch support",
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: "bixx-dictionary",
    slug: "bixx-dictionary",
    title: "Bixx Dictionary",
    category: "Frontend",
    featured: true,
    summary: "A typography-first, fast lexical reference tool engineered for instant clarity and zero visual clutter.",
    description:
      "Bixx Dictionary transforms traditional reference lookup into a clean, typography-led digital reading tool. Built with React and modern API integration, it features phonetic pronunciation audio, comprehensive definitions, synonym indexing, and keyboard-first accessibility.",
    image: "/assets/projects/bixxdictionary.webp",
    imageAlt: "Bixx Dictionary clean lexical reference user interface showing word definition, phonetic pronunciation, and dark mode typography",
    tags: ["React", "TypeScript", "Dictionary API", "Tailwind CSS", "Vite"],
    liveUrl: "https://bixxdictionary.vercel.app/",
    githubUrl: "https://github.com/harshbix/bixxdictionary",
    role: "Lead Frontend Engineer & UI Designer",
    timeline: "2024",
    problem:
      "Most online dictionaries are overwhelmed by ad banners, erratic layout shifts, and cluttered sidebars that disrupt quick reading and reference lookups.",
    solution:
      "Engineered a distraction-free, high-contrast dictionary interface prioritizing instant query resolution, clean font pairings, instant error recovery, and accessible phonetic audio feedback.",
    architecture: {
      frontend: "React 18 with Vite for lightning-fast sub-second bundling",
      styling: "Tailwind CSS with custom typography scale and dark mode variables",
      deployment: "Vercel with global CDN edge caching",
    },
    keyFeatures: [
      "Instant real-time search with debounced API queries",
      "Audio pronunciation playback with fallback handling",
      "Rich linguistic taxonomy: definitions, synonyms, antonyms, parts of speech",
      "Dark and light reading mode optimized for visual comfort",
      "Zero layout shifts with skeleton states for high-latency connections",
    ],
    impact: [
      "Sub-200ms query rendering time on modern connections.",
      "100/100 Lighthouse performance and accessibility scores.",
      "A clean showcase of editorial typography and friction-free utility design.",
    ],
  },
  {
    id: "recan-foundation",
    slug: "recan-foundation",
    title: "RECAN Foundation",
    category: "Full-Stack",
    featured: false,
    summary: "Trust-centric NGO web platform crafted to tell community stories and drive donor engagement.",
    description:
      "An official nonprofit web platform designed to establish instant institutional trust, clearly communicate organizational mission, and guide prospective donors through streamlined conversion funnels.",
    image: "/assets/projects/recanfoundation.webp",
    imageAlt: "RECAN Foundation nonprofit web portal homepage showcasing community initiatives, donor engagement section, and mobile-friendly navigation",
    tags: ["React", "Next.js", "Tailwind CSS", "Responsive UX", "SEO"],
    liveUrl: "https://recanfoundation.org/",
    githubUrl: "https://github.com/harshbix/recanfoundation",
    role: "Design Direction & Frontend Architecture",
    timeline: "2024",
    problem:
      "The foundation required a digital home that could establish immediate credibility with international partners and donors while working flawlessly across low-bandwidth African mobile networks.",
    solution:
      "Architected a lightweight, mobile-first web presence with clear visual storytelling, high-contrast typography, and intuitive call-to-action pathways for donations and program involvement.",
    architecture: {
      frontend: "Next.js / React with semantic HTML5 architecture",
      styling: "Tailwind CSS with restrained color hierarchy",
      deployment: "Production hosting with asset optimization",
    },
    keyFeatures: [
      "Narrative-driven homepage layout guiding visitors from problem to impact",
      "Mobile-optimized donation and partnership inquiry forms",
      "High-speed image compression preserving visual quality at minimal byte sizes",
      "Structured SEO metadata for high visibility on local and international searches",
    ],
    impact: [
      "Strengthened the foundation's presentation for international partners and grantmakers.",
      "Mobile bounce rates decreased substantially due to sub-1.5s mobile page load.",
    ],
  },
  {
    id: "overspeed-security",
    slug: "overspeed-security",
    title: "Overspeed Security",
    category: "Frontend",
    featured: false,
    summary: "Authoritative corporate security services portal emphasizing capability and enterprise trust.",
    description:
      "A corporate web platform for a professional security firm, engineered with a bold, authoritative visual identity that communicates protection, compliance, and enterprise reliability.",
    image: "/assets/projects/overspeed-security.webp",
    imageAlt: "Overspeed Security corporate portal displaying security service operations, dispatch request options, and enterprise credentials",
    tags: ["React", "Tailwind CSS", "Motion Systems", "Corporate UX"],
    liveUrl: "https://overspeed-security.vercel.app/",
    githubUrl: "https://github.com/harshbix/overspeed-security",
    role: "UI/UX Engineering & Frontend Development",
    timeline: "2024",
    problem:
      "Security clients demand proof of discipline and operational readiness. The previous web presence was outdated and failed to communicate enterprise security capability.",
    solution:
      "Designed a sleek, dark-toned visual system with clear service breakdowns, emergency contact dispatch triggers, and client onboarding pathways.",
    architecture: {
      frontend: "React with modular component tree",
      styling: "Tailwind CSS with industrial high-contrast palette",
      deployment: "Vercel edge deployment",
    },
    keyFeatures: [
      "Categorized security solutions matrix with clear operational scopes",
      "Quick emergency dispatch inquiry button for rapid client contact",
      "Interactive credential and service area presentation",
      "Smooth scroll navigation and accessible touch targets for mobile",
    ],
    impact: [
      "Streamlined client inquiry routing directly to operational dispatch.",
      "Established a polished modern brand standard in the regional security sector.",
    ],
  },
  {
    id: "henry-peter-portfolio",
    slug: "henry-peter-portfolio",
    title: "Henry Peter Portfolio",
    category: "Design & Systems",
    featured: false,
    summary: "Cinematic personal portfolio website centered on motion, pacing, and visual storytelling.",
    description:
      "A tailored portfolio experience engineered with custom motion curves, rhythm-led section transitions, and an immersive gallery layout that highlights creative work without sacrificing performance.",
    image: "/assets/projects/henrypeter.webp",
    imageAlt: "Henry Peter creative portfolio showcase featuring typography-driven gallery and smooth interactive project presentations",
    tags: ["React", "Framer Motion", "Tailwind CSS", "Creative Tech"],
    liveUrl: "https://henrypeter.vercel.app/",
    githubUrl: "https://github.com/harshbix/henrypeter",
    role: "Creative Developer & Motion Engineer",
    timeline: "2024",
    problem:
      "Creating an artistic portfolio that stands out in visual design circles while keeping interaction responsive and accessible on mobile.",
    solution:
      "Implemented hardware-accelerated transforms, scroll-synchronized pacing, and an elegant dark theme that frames every creative asset cleanly.",
    architecture: {
      frontend: "React 18 with Framer Motion hooks",
      styling: "Custom Tailwind configuration with fine-tuned easing curves",
      deployment: "Vercel global CDN",
    },
    keyFeatures: [
      "Motion choreography with reduced-motion fallbacks",
      "Editorial typography with custom title tracking",
      "Responsive interactive project showcases",
    ],
    impact: [
      "Zero jank during scroll and transitions across modern browsers.",
      "Demonstrates high visual taste and frontend engineering precision.",
    ],
  },
];

export const TECH_STACK = {
  frontend: [
    { name: "React", level: "Core", note: "Component systems, hooks, custom state" },
    { name: "TypeScript", level: "Core", note: "Type safety, robust interfaces, refactoring" },
    { name: "JavaScript (ES6+)", level: "Core", note: "Asynchronous patterns, DOM, modern specs" },
    { name: "Next.js", level: "Production", note: "Server components, routing, SSR/SSG" },
    { name: "Tailwind CSS", level: "Core", note: "Utility-first systems, responsive tokens" },
    { name: "HTML5 / CSS3", level: "Core", note: "Semantic structure, responsive grid/flexbox" },
    { name: "Framer Motion", level: "Proficient", note: "Micro-interactions, layout transitions" },
  ],
  backend: [
    { name: "Node.js", level: "Core", note: "Server-side runtime, modular backends" },
    { name: "Express.js", level: "Core", note: "RESTful routing, middleware, controllers" },
    { name: "REST APIs", level: "Core", note: "Endpoint design, error contracts, auth" },
    { name: "Authentication", level: "Proficient", note: "JWT, sessions, secure cookie flows" },
  ],
  dataAndCloud: [
    { name: "PostgreSQL", level: "Proficient", note: "Relational modeling, indexing, queries" },
    { name: "Supabase", level: "Proficient", note: "Postgres backend-as-a-service, Auth, RLS" },
    { name: "SQLite", level: "Proficient", note: "Embedded relational storage for light apps" },
    { name: "Vercel", level: "Core", note: "Edge deployments, continuous deployment, DNS" },
  ],
  toolsAndArchitecture: [
    { name: "Git & GitHub", level: "Core", note: "Branching, PRs, version control" },
    { name: "Vite", level: "Core", note: "Modern frontend tooling, build optimization" },
    { name: "Figma", level: "Proficient", note: "UI wireframing, layout tokens, asset prep" },
    { name: "Performance / SEO", level: "Core", note: "Core Web Vitals, JSON-LD, metadata" },
  ],
};

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "farols-company",
    role: "Technical Project Manager",
    company: "Farols Company",
    location: "Mbeya, Tanzania",
    period: "2026 — Present",
    year: "2026",
    type: "Digital Leadership",
    category: "leadership",
    logoSrc: "/assets/Farols white word down.png",
    description:
      "Overseeing end-to-end digital transformation lifecycles, specializing in modern web systems, agile delivery, and scalable product engineering.",
    achievements: [
      "Directed cross-functional engineering and design workflows to deliver high-impact web platforms for a diverse B2B portfolio.",
      "Optimized agile development sprints, significantly reducing time-to-market for digital deliverables.",
      "Aligned technical execution with business objectives to capture and retain high-value enterprise accounts.",
    ],
    technologies: ["Technical Project Management", "Agile Sprints", "Full-Stack Web Systems", "Team Delivery"],
    current: true,
  },
  {
    id: "bixx-tech",
    role: "Hardware & Systems Engineer",
    company: "Bixx Tech",
    location: "Dar es Salaam, Tanzania",
    period: "2025 — Present",
    year: "2025",
    type: "Hardware & Systems",
    category: "engineering",
    description:
      "Directing workstation configurations, hardware diagnostics, and enterprise hardware operations.",
    achievements: [
      "Integrated diagnostic tools, increasing regional service capacity by 40%.",
      "Engineered standardized protocols, cutting maintenance turnaround by 60%.",
      "Delivered custom workstation setups for developers, creators, and commercial clients.",
    ],
    technologies: ["Workstations", "Hardware Diagnostics", "Hardware Architecture", "System Optimization"],
    current: true,
  },
  {
    id: "tpc",
    role: "IT Systems Consultant",
    company: "Tanzania Posts Corporation",
    location: "Mbeya, Tanzania",
    period: "2023 — 2025",
    year: "2023",
    type: "Systems Consulting",
    category: "leadership",
    logoSrc: "/assets/posta.png",
    description:
      "Led systems modernization initiatives, transitioning legacy infrastructure into resilient digital operational workflows.",
    achievements: [
      "Architected an enterprise digital service platform, resulting in a 30% aggregate increase in operational productivity.",
      "Streamlined critical logistical workflows, minimizing manual data-entry bottlenecks and reducing system downtime.",
      "Devised and conducted comprehensive technical training programs, upskilling an internal staff of 100+ employees.",
    ],
    technologies: ["Systems Modernization", "Logistics Workflows", "Enterprise Training", "Process Automation"],
    current: false,
  },
  {
    id: "web-tech",
    role: "Technical Solutions Analyst",
    company: "Web Technologies Ltd.",
    location: "Dodoma, Tanzania",
    period: "2023",
    year: "2023",
    type: "Integration & Analysis",
    category: "engineering",
    description:
      "Facilitated the deployment of Electronic Fiscal Device (EFD) compliance systems and engineered client-facing billing integrations.",
    achievements: [
      "Successfully executed deployment and configuration of EFD compliance software for 20+ corporate clients.",
      "Engineered direct billing integrations that streamlined financial data processing between client applications.",
      "Produced detailed technical operational manuals and delivered onboarding sessions to ensure client self-sufficiency.",
    ],
    technologies: ["EFD Fiscal Systems", "Billing API Integrations", "Client Deployments", "Compliance"],
    current: false,
  },
  {
    id: "quickdrop",
    role: "Frontend Development Specialist",
    company: "Quickdrop Co.",
    location: "Dar es Salaam, Tanzania",
    period: "2022 — 2023",
    year: "2022",
    type: "Frontend Engineering",
    category: "engineering",
    logoSrc: "/assets/QuickDrop.png",
    description:
      "Engineered responsive, high-performance web applications and established foundational frontend development standards.",
    achievements: [
      "Developed and shipped production web applications utilizing React and modern JavaScript.",
      "Optimized Core Web Vitals and load times through responsive asset delivery and clean state architecture.",
      "Authored technical documentation and established reusable component patterns for internal tools.",
    ],
    technologies: ["React", "JavaScript (ES6+)", "Core Web Vitals", "Component Systems"],
    current: false,
  },
];

export const FAQS: FAQItem[] = [
  {
    question: "What kind of projects do you typically build?",
    answer:
      "I specialize in building custom web applications, responsive marketing and corporate websites, client dashboards, and digital tools. Whether you need a brand-new product built from scratch or an existing application redesigned for speed, clarity, and trust, I handle the full cycle from frontend interface to backend APIs.",
  },
  {
    question: "What is your primary technology stack?",
    answer:
      "My primary frontend stack is React, TypeScript, Next.js, and Tailwind CSS, backed by Vite for swift builds and Framer Motion for purposeful interaction design. On the backend, I work with Node.js, Express, and REST APIs, paired with PostgreSQL or Supabase for relational databases.",
  },
  {
    question: "Do you handle both frontend and backend development?",
    answer:
      "Yes. While my strongest edge is frontend engineering and UI/UX polish, I have solid full-stack capability. I design database schemas, build and secure REST APIs, handle user authentication, and deploy production applications to cloud environments like Vercel.",
  },
  {
    question: "Can you collaborate on an existing codebase or team?",
    answer:
      "Absolutely. I am accustomed to working with existing repositories, git workflows, pull request reviews, and agile sprints. I can step in to refactor legacy views, introduce TypeScript, improve performance metrics, or build new feature modules cleanly without breaking existing logic.",
  },
  {
    question: "Can you design the UI/UX as well as write the code?",
    answer:
      "Yes. One of my distinct advantages is design engineering. You don't have to hire a separate designer for every wireframe if you have a product vision. I can define layout hierarchy, color palettes, responsive spacing, and micro-interactions directly, ensuring the final code matches high visual standards.",
  },
  {
    question: "How do new projects usually start?",
    answer:
      "We begin with a brief discovery conversation to align on your goals, requirements, timeline, and budget. From there, I outline a clear scope and roadmap (Understand → Design → Build → Launch). Once agreed, we iterate in short feedback cycles so you see real working software quickly.",
  },
  {
    question: "Are you available for freelance projects or full-time roles?",
    answer:
      "Yes. I am currently open to selected contract projects, technical consulting, and high-impact full-time frontend or full-stack engineering roles with ambitious teams worldwide.",
  },
];

export const NOTES: NoteItem[] = [
  {
    slug: "designing-for-clarity-in-data-dense-interfaces",
    title: "Designing for Clarity in Data-Dense Web Applications",
    date: "February 2025",
    readTime: "4 min read",
    category: "UI/UX & Frontend",
    summary:
      "How to balance high information density with visual calm through strict hierarchy, disciplined typography, and progressive disclosure.",
    content:
      "When building administrative portals, dashboards, or dictionary tools, the most common trap is clutter. The urge to present every data point simultaneously overwhelms users. In this note, I break down three architectural rules I apply to data-dense interfaces: 1) Group by decision rather than data type; 2) Enforce strict typographic contrast instead of adding colorful badges; 3) Provide fast keyboard filtering so users can narrow context in milliseconds.",
  },
  {
    slug: "bridging-the-gap-between-design-and-implementation",
    title: "The Design Engineer Mindset: Closing the Gap Between Figma and DOM",
    date: "January 2025",
    readTime: "5 min read",
    category: "Design Engineering",
    summary:
      "Why the best web experiences emerge when the person writing the frontend understands spacing tokens, micro-interactions, and responsive layout nuances.",
    content:
      "A static Figma frame rarely prepares you for edge cases: text overflowing in international languages, network latency causing sudden layout shifts, or touch targets failing on smaller mobile viewports. Design engineering isn't just about recreating pixels; it's about engineering resilient states (loading, empty, error, active) and ensuring interactions feel natural under real-world device constraints.",
  },
  {
    slug: "building-performant-interfaces-in-real-world-networks",
    title: "Building Resilient, High-Performance Web Apps for Real-World Networks",
    date: "November 2024",
    readTime: "4 min read",
    category: "Performance & Architecture",
    summary:
      "Practical lessons in asset delivery, bundle chunking, and font preloading learned while developing applications across varied connectivity environments.",
    content:
      "Developing web applications in East Africa provides an immediate reality check: high-end desktop fiber cannot be your default baseline. Building for real users requires aggressive image optimization (WebP/AVIF), strict bundle splitting, preconnecting critical font endpoints, and designing skeleton states that preserve layout stability while content streams in.",
  },
];

export const PERSONAL_DIMENSIONS: PersonalDimension[] = [
  {
    id: "hardware",
    title: "Computer Hardware & Sales",
    label: "Bixx Tech Hardware",
    brand: "Bixx Tech",
    highlight: "Workstations & Hardware Diagnostics",
    description:
      "Custom PC builds, workstation diagnostics, and enterprise hardware sourcing.",
    actionText: "Inquire Hardware",
    actionUrl: "https://wa.me/255755063711?text=Hi%20Junior%2C%20I%20am%20inquiring%20about%20computers%20and%20hardware%20from%20Bixx%20Tech.",
    bullets: [
      "Custom PCs for developers and creators",
      "Stress-tested hardware diagnostics",
      "Enterprise computer sourcing and upgrades",
    ],
    icon: "Cpu",
  },
  {
    id: "education",
    title: "Tech Education & Mentorship",
    label: "Bixx Tech Education",
    brand: "Bixx Tech",
    highlight: "Code Tutorials & Practical Learning",
    description:
      "Concise programming guides, practical tutorials, and developer mentorship.",
    actionText: "Explore Content",
    actionUrl: "https://instagram.com/bixx.tech",
    bullets: [
      "Bite-sized web development tutorials (@bixxtech)",
      "Direct mentorship in modern JavaScript & React",
      "Open-source starters and practical cheat sheets",
    ],
    icon: "BookOpen",
  },
  {
    id: "dance",
    title: "What Dance Taught Me",
    label: "Dance & Movement",
    brand: "Movement",
    highlight: "Rhythm & Timing",
    description:
      "Dance is a big part of who I am. It’s taught me a lot about rhythm, timing, movement, and knowing when to slow down or speed things up — things I also notice when designing interfaces.",
    actionText: "Instagram @harshbix",
    actionUrl: "https://instagram.com/harshbix",
    bullets: [
      "Rhythm — I naturally pay attention to timing and pace.",
      "Movement — I like interfaces that feel smooth and natural.",
      "Expression — I enjoy adding personality instead of making everything feel static.",
    ],
    icon: "Sparkles",
  },
];

export const DIGITAL_PRODUCTS: DigitalProduct[] = [
  {
    id: "fluid-ui-starter",
    slug: "fluid-ui-starter",
    title: "Fluid UI React Starter Kit",
    category: "Code Template",
    tagline: "Vite + React 18 + Tailwind architecture.",
    description:
      "Production-ready boilerplate with typed components, fluid tokens, and Framer Motion transitions.",
    price: "Free",
    format: "Source Code • GitHub Repo",
    badge: "Popular",
    highlights: [
      "Vite 5 + React 18 + TypeScript strict mode",
      "Tailwind CSS with design token primitives",
      "Framer Motion layout transitions",
      "Lighthouse 100/100 performance",
    ],
    downloadUrl: "https://github.com/harshbix/fluid-pixel-persona",
    previewUrl: "https://jeconiajunior.vercel.app/",
    version: "v2.1",
  },
  {
    id: "web-systems-playbook",
    slug: "web-systems-playbook",
    title: "Full-Stack Architecture Field Guide",
    category: "Engineering Guide",
    tagline: "Checklist for shipping resilient web applications.",
    description:
      "Actionable guide covering API contracts, database indexes, and production deployment checklists.",
    price: "Free",
    format: "PDF & Markdown",
    badge: "Essential",
    highlights: [
      "API contract & error conventions",
      "Database schema & query optimization",
      "Zero-layout-shift asset checklist",
      "Client state recovery rules",
    ],
    downloadUrl: "https://github.com/harshbix",
    version: "2025 Edition",
  },
  {
    id: "hardware-buyer-guide",
    slug: "hardware-buyer-guide",
    title: "Bixx Tech Workstation Blueprint",
    category: "Hardware Guide",
    tagline: "Workstation selection and diagnostic guide.",
    description:
      "Hardware buying and diagnostic handbook for developers and agencies. Component matching and stress-testing.",
    price: "Free",
    format: "Digital Handbook",
    highlights: [
      "Optimal CPU & RAM ratios for compilation",
      "SSD endurance & NVMe throughput analysis",
      "Laptop diagnostic checklist",
      "Bixx Tech standard hardware checklist",
    ],
    downloadUrl: "https://wa.me/255755063711?text=Hi%20Junior%2C%20please%20send%20me%20the%20Bixx%20Tech%20Workstation%20Blueprint.",
    version: "v1.4",
  },
  {
    id: "accessible-design-tokens",
    slug: "accessible-design-tokens",
    title: "Accessible Color & Typography Tokens",
    category: "Design Tokens",
    tagline: "WCAG AAA mathematical contrast scales for web products.",
    description:
      "Pre-calculated color palettes and typographic scales exported as ready-to-paste Tailwind config files and CSS variables with 100% contrast compliance.",
    price: "Free",
    format: "JSON & Tailwind Config",
    highlights: [
      "APCA & WCAG 2.2 compliant contrast ratios",
      "Synchronized light and dark mode variable maps",
      "Type scales based on harmonious geometric ratios",
      "One-click copy paste for modern React projects",
    ],
    downloadUrl: "https://github.com/harshbix/serene-palette-app",
    previewUrl: "https://serene-palette-app.vercel.app/",
    version: "v1.2",
  },
];
