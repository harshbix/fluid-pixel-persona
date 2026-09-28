import { Localized, SupportedLocale, resolveLocalized, DEFAULT_LOCALE } from "../i18n/locales";

export type LocalizedText = string | Localized<string>;
export type LocalizedList = string[] | Localized<string[]>;

export function resolveText(val: LocalizedText | undefined, lang: SupportedLocale, fallback = ""): string {
  if (!val) return fallback;
  if (typeof val === "string") return val;
  return resolveLocalized(val, lang, fallback);
}

export function resolveList(val: LocalizedList | undefined, lang: SupportedLocale, fallback: string[] = []): string[] {
  if (!val) return fallback;
  if (Array.isArray(val)) return val;
  return resolveLocalized(val, lang, fallback);
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: "Full-Stack" | "Frontend" | "Design & Systems";
  summary: Localized<string>;
  description: Localized<string>;
  image: string;
  imageAlt?: Localized<string>;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  featured?: boolean;
  role: Localized<string>;
  timeline: string;
  problem: Localized<string>;
  solution: Localized<string>;
  architecture: {
    frontend: string;
    backend?: string;
    styling: string;
    deployment: string;
  };
  keyFeatures: Localized<string[]>;
  impact: Localized<string[]>;
}

export interface Service {
  number: string;
  title: Localized<string>;
  tagline: Localized<string>;
  description: Localized<string>;
  deliverables: Localized<string[]>;
  technologies: string[];
  icon: string;
}

export interface ProcessStage {
  number: string;
  title: Localized<string>;
  phase: Localized<string>;
  description: Localized<string>;
  deliverables: Localized<string[]>;
}

export interface ExperienceItem {
  id: string;
  role: Localized<string>;
  company: string;
  location: Localized<string>;
  period: Localized<string>;
  year: string;
  type: Localized<string>;
  category: "engineering" | "leadership";
  logoSrc?: string;
  description: Localized<string>;
  achievements: Localized<string[]>;
  technologies: string[];
  current?: boolean;
}

export interface NoteItem {
  slug: string;
  title: Localized<string>;
  date: string;
  readTime: Localized<string>;
  category: Localized<string>;
  summary: Localized<string>;
  content: Localized<string>;
}

export interface FAQItem {
  question: Localized<string>;
  answer: Localized<string>;
}

export interface PersonalDimension {
  id: string;
  title: Localized<string>;
  label: Localized<string>;
  brand: string;
  highlight: Localized<string>;
  description: Localized<string>;
  actionText: Localized<string>;
  actionUrl: string;
  bullets: Localized<string[]>;
  icon: string;
}

export interface DigitalProduct {
  id: string;
  slug: string;
  title: string;
  category: Localized<string>;
  tagline: Localized<string>;
  description: Localized<string>;
  price: string;
  format: string;
  badge?: Localized<string>;
  highlights: Localized<string[]>;
  downloadUrl: string;
  previewUrl?: string;
  version: string;
}

export const PERSONAL_INFO = {
  name: "Junior Jeconia",
  handle: "harshbix",
  role: {
    en: "Full-Stack Developer",
    sw: "Msanidi Programu za Wavuti na Mifumo (Full-Stack)",
  },
  subRole: {
    en: "Software • Hardware • Education",
    sw: "Programu • Vifaa vya Kompyuta • Mafunzo",
  },
  availability: {
    en: "Available for select opportunities",
    sw: "Ninapatikana kwa miradi teule",
  },
  location: {
    en: "Dar es Salaam, Tanzania",
    sw: "Dar es Salaam, Tanzania",
  },
  email: "juniorjeconia@icloud.com",
  phone: "+255 755 063 711",
  whatsapp: "+255755063711",
  whatsappUrl: "https://wa.me/255755063711?text=Hi%20Junior%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project.",
  socials: {
    github: "https://github.com/harshbix",
    linkedin: "https://www.linkedin.com/in/junior-jeconia-90710b265",
    twitter: "https://twitter.com/b1xson",
    instagram: "https://instagram.com/harshbix",
    instagramTech: "https://instagram.com/bixx.tech",
    tiktok: "https://tiktok.com/@bixxtech",
  },
  bioSummary: {
    en: "I design and build web applications, user interfaces, and digital systems. Combining frontend precision with solid full-stack architecture, I turn product ideas into reliable, clean software.",
    sw: "Ninasanifu na kujenga programu za wavuti, miingiliano ya watumiaji, na mifumo ya kidijitali. Nikichanganya umakini wa mbele (frontend) na miundo thabiti ya mifumo, ninafanya mawazo ya kidijitali kuwa bidhaa halisi na imara.",
  },
  coreValues: [
    {
      title: {
        en: "Design That Serves Function",
        sw: "Muundo Unaotumikia Utendaji",
      },
      description: {
        en: "Interfaces should be visually arresting, intuitive to navigate, and quick to load on any device.",
        sw: "Miingiliano lazima ivutie macho, iwe rahisi kutumia, na ifunguke haraka kwenye kifaa chochote.",
      },
    },
    {
      title: {
        en: "Clean, Maintainable Architecture",
        sw: "Msimbo Safi na Unaotunzika",
      },
      description: {
        en: "Writing typed, modular code with reusable components and predictable data flow.",
        sw: "Kuandika msimbo wenye muundo safi, vipengele vinavyoweza kutumika tena, na mtiririko thabiti wa taarifa.",
      },
    },
    {
      title: {
        en: "Fast Time-to-Market",
        sw: "Kuzindua kwa Kasi",
      },
      description: {
        en: "Shipping working software early, testing in real conditions, and iterating with feedback.",
        sw: "Kutoa programu inayofanya kazi mapema, kuijaribu kwenye mazingira halisi, na kuiboresha kwa maoni.",
      },
    },
    {
      title: {
        en: "End-to-End Ownership",
        sw: "Uwajibikaji Kuanzia Mwanzo hadi Mwisho",
      },
      description: {
        en: "From layout prototyping to API integration, database design, and production deployment.",
        sw: "Kuanzia michoro ya awali hadi kuunganisha API, muundo wa database, na kuweka mfumo hewani mtandaoni.",
      },
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
  "Supabase",
  "Framer Motion",
  "Vite",
  "Git",
];

export const SERVICES: Service[] = [
  {
    number: "01",
    title: {
      en: "Frontend Architecture",
      sw: "Uhandisi wa Miingiliano (Frontend)",
    },
    tagline: {
      en: "High-performance web applications with tactile micro-interactions and strict type safety.",
      sw: "Programu za kisasa za wavuti zenye miingiliano laini na msimbo thabiti wa TypeScript.",
    },
    description: {
      en: "Crafting fast, accessible, and responsive user interfaces using React, TypeScript, and modern styling architectures. Every component is engineered for zero layout shift, low bundle weight, and seamless cross-device performance.",
      sw: "Kusanifu na kujenga miingiliano ya wavuti inayofunguka haraka, inayofaa kila kifaa kwa kutumia React na TypeScript. Kila kipengele kinajengwa kwa wepesi, bila migongano ya picha na kwa kasi ya juu.",
    },
    deliverables: {
      en: [
        "Single-Page & Multi-Page Web Applications",
        "Design system component libraries & tokens",
        "Performance optimization (Core Web Vitals)",
        "Mobile-first responsive interface engineering",
      ],
      sw: [
        "Programu za kisasa za wavuti za ukurasa mmoja na zaidi",
        "Mifumo na maktaba ya vipengele vya usanifu (Design Systems)",
        "Kuboresha kasi ya kufunguka kwa tovuti (Core Web Vitals)",
        "Uhandisi unaozingatia simu za mkononi kwanza (Mobile-first)",
      ],
    },
    technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vite"],
    icon: "Globe",
  },
  {
    number: "02",
    title: {
      en: "Full-Stack Applications",
      sw: "Mifumo Kamili ya Wavuti (Full-Stack)",
    },
    tagline: {
      en: "End-to-end web products with connected backends, databases, and secure APIs.",
      sw: "Mifumo kamili ya kidijitali inayounganisha seva, kanzidata na miingiliano salama ya API.",
    },
    description: {
      en: "Bridging the gap between engaging frontend experiences and dependable backend infrastructure. Designing data models, building RESTful endpoints, managing authentication, and deploying resilient web services.",
      sw: "Kuunganisha miingiliano mizuri ya mbele na mifumo imara ya nyuma (backend). Kusanifu mifumo ya data, kujenga miingiliano ya REST API, usimamizi wa usalama na uthibitishaji wa watumiaji, na kuweka mifumo hewani.",
    },
    deliverables: {
      en: [
        "Custom RESTful API engineering",
        "Database schema design & migrations",
        "Secure user authentication & session handling",
        "Production deployment & cloud hosting setup",
      ],
      sw: [
        "Uhandisi wa miingiliano salama ya REST API",
        "Muundo wa kanzidata (Database schema & migrations)",
        "Mifumo salama ya uthibitishaji na kuingia kwa watumiaji",
        "Kuweka mifumo kwenye seva na miundombinu ya wingu (Cloud)",
      ],
    },
    technologies: ["Node.js", "Express", "PostgreSQL", "Supabase", "REST APIs"],
    icon: "Layers",
  },
  {
    number: "03",
    title: {
      en: "UI/UX & Design Systems",
      sw: "Muundo wa UI/UX na Mifumo ya Muonekano",
    },
    tagline: {
      en: "User-centered interfaces, interaction design, and cohesive design systems.",
      sw: "Miingiliano inayomlenga mtumiaji, miondoko makini na mifumo yenye mpangilio thabiti.",
    },
    description: {
      en: "Transforming complex operational requirements into refined user journeys and elegant screen layouts. Creating modular design tokens, intentional micro-interactions, and accessible UI patterns that give digital products immediate credibility.",
      sw: "Kubadilisha mahitaji magumu kuwa safari rahisi za mtumiaji na skrini safi za kisasa. Kutengeneza miondoko laini ya kugusa na mifumo ya michoro inayoongeza uaminifu wa bidhaa ya kidijitali.",
    },
    deliverables: {
      en: [
        "Interactive component systems & design tokens",
        "Subtle, purposeful interface animations & transitions",
        "Accessibility (WCAG) compliance & contrast tuning",
        "Information architecture & user flow blueprints",
      ],
      sw: [
        "Mifumo ya vipengele vya kuingiliana na rangi thabiti",
        "Miondoko laini na yenye makusudio kwenye miingiliano",
        "Ufikiaji rahisi kwa watumiaji wote (WCAG accessibility)",
        "Mpangilio wa taarifa na mtiririko rahisi wa mtumiaji",
      ],
    },
    technologies: ["Framer Motion", "Tailwind CSS", "Design Systems", "Figma"],
    icon: "Layout",
  },
  {
    number: "04",
    title: {
      en: "Custom Digital Systems",
      sw: "Mifumo Maalum ya Uendeshaji",
    },
    tagline: {
      en: "Internal dashboards, workflow tools, and administrative platforms.",
      sw: "Mifumo ya usimamizi wa ndani, dashibodi za taarifa, na zana za utendaji kazi.",
    },
    description: {
      en: "Developing purposeful business software that solves practical operational bottlenecks. From inventory and catalog managers to analytics dashboards and internal management portals that save teams hours each week.",
      sw: "Kujenga mifumo ya kibiashara inayorahisisha kazi za kila siku. Kuanzia usimamizi wa bidhaa hadi dashibodi za ripoti zinazookoa muda wa kampuni.",
    },
    deliverables: {
      en: [
        "Custom analytics & admin dashboards",
        "Operational workflow automation & tracking",
        "Data visualization & interactive tables",
        "Robust client-side error handling & state sync",
      ],
      sw: [
        "Dashibodi za takwimu na usimamizi wa biashara",
        "Kujiendesha kwa mtiririko wa kazi na ufuatiliaji",
        "Uonyeshaji wa takwimu na jedwali zinazoingiliana",
        "Uthabiti wa kuzuia hitilafu na kuhifadhi kumbukumbu",
      ],
    },
    technologies: ["React", "TypeScript", "Radix UI", "Node.js", "Tailwind"],
    icon: "Cpu",
  },
];

export const PROCESS_STAGES: ProcessStage[] = [
  {
    number: "01",
    phase: {
      en: "Discovery & Strategy",
      sw: "Utafiti na Mkakati",
    },
    title: {
      en: "Understand the Problem",
      sw: "Kuelewa Changamoto",
    },
    description: {
      en: "Before writing code, I clarify your core objectives, user expectations, technical constraints, and scope. This prevents wasted effort and sets a direct roadmap.",
      sw: "Kabla ya kuandika msimbo, ninafafanua malengo yako makuu, matarajio ya watumiaji, na mipaka ya mradi. Hii inaepusha upotevu wa muda na kuweka ramani wazi.",
    },
    deliverables: {
      en: [
        "Scope & requirements specification",
        "Information architecture blueprint",
        "Recommended tech stack & milestones",
      ],
      sw: [
        "Nyaraka ya mahitaji na upeo wa mradi",
        "Mpangilio wa taarifa na muundo mkuu",
        "Mapendekezo ya teknolojia na ratiba ya hatua",
      ],
    },
  },
  {
    number: "02",
    phase: {
      en: "Architecture & Interface",
      sw: "Muundo na Miingiliano",
    },
    title: {
      en: "Design the Experience",
      sw: "Kusanifu Uzoefu na Muundo",
    },
    description: {
      en: "I design the visual hierarchy, component systems, and data flow. Every view, typography level, and interaction state is defined intentionally for clarity and trust.",
      sw: "Ninasanifu mpangilio wa kuona, mfumo wa vipengele, na mtiririko wa data. Kila skrini na mandhari inatengenezwa kwa makusudi ya kuleta uwazi na uaminifu.",
    },
    deliverables: {
      en: [
        "Responsive wireframes & component layouts",
        "Design tokens (colors, typography, spacing)",
        "Database schema & API contracts",
      ],
      sw: [
        "Michoro ya awali ya miingiliano ya skrini",
        "Viwango vya rangi, herufi na nafasi (Tokens)",
        "Mkataba wa API na muundo wa kanzidata",
      ],
    },
  },
  {
    number: "03",
    phase: {
      en: "Engineering & Integration",
      sw: "Ujenzi na Muunganisho",
    },
    title: {
      en: "Build & Integrate",
      sw: "Kujenga na Kuunganisha",
    },
    description: {
      en: "Building clean, typed, and maintainable software. Writing modular frontend components, wiring backend endpoints, handling edge cases, and ensuring zero layout shifts.",
      sw: "Kujenga programu safi, salama na rahisi kutunza. Kuandika vipengele thabiti, kuunganisha mifumo ya nyuma, na kuhakikisha mfumo unafanya kazi bila hitilafu.",
    },
    deliverables: {
      en: [
        "Modular TypeScript & React codebase",
        "Integrated backend APIs & database layer",
        "Continuous testing on real devices",
      ],
      sw: [
        "Msimbo safi wa TypeScript na React",
        "API na kanzidata zilizounganishwa kikamilifu",
        "Majaribio endelevu kwenye vifaa halisi",
      ],
    },
  },
  {
    number: "04",
    phase: {
      en: "Quality & Deployment",
      sw: "Ubora na Uzinduzi",
    },
    title: {
      en: "Refine & Launch",
      sw: "Kujaribu na Kuzindua",
    },
    description: {
      en: "Performance audits, cross-device testing, accessibility checks, and deployment to reliable cloud infrastructure with zero downtime.",
      sw: "Ukaguzi wa kasi, majaribio kwenye skrini tofauti, ufikiaji bora, na kuzindua kwenye seva imara mtandaoni.",
    },
    deliverables: {
      en: [
        "Lighthouse performance & accessibility audit",
        "Production deployment with SSL & CDN",
        "Handover documentation & post-launch support",
      ],
      sw: [
        "Ukaguzi wa utendaji wa Lighthouse na ufikiaji",
        "Uzinduzi rasmi mtandaoni na usalama wa SSL",
        "Makabidhiano ya nyaraka na usaidizi wa awali",
      ],
    },
  },
];

export const PROJECTS: Project[] = [
  {
    id: "bixx-dictionary",
    slug: "bixx-dictionary",
    title: "Bixx Dictionary",
    category: "Frontend",
    featured: true,
    summary: {
      en: "A typography-first, fast lexical reference tool engineered for instant clarity and zero visual clutter.",
      sw: "Kamusi ya kidijitali inayotanguliza usomaji safi, utafutaji wa haraka, na kutokuwepo kwa matangazo yanayovuruga.",
    },
    description: {
      en: "Bixx Dictionary transforms traditional reference lookup into a clean, typography-led digital reading tool. Built with React and modern API integration, it features phonetic pronunciation audio, comprehensive definitions, synonym indexing, and keyboard-first accessibility.",
      sw: "Bixx Dictionary inabadilisha utafutaji wa maneno kuwa uzoefu safi unaoongozwa na maandishi mazuri ya kidijitali. Imejengwa kwa React na miunganisho ya kisasa ya API, ikiwa na sauti za matamshi, maana kamili, visawe, na ufikiaji wa kibodi.",
    },
    image: "/assets/projects/bixxdictionary.webp",
    imageAlt: {
      en: "Bixx Dictionary clean lexical reference user interface showing word definition and typography",
      sw: "Muonekano safi wa Bixx Dictionary ukionyesha maana ya neno na mpangilio wa herufi",
    },
    tags: ["React", "TypeScript", "Dictionary API", "Tailwind CSS", "Vite"],
    liveUrl: "https://bixxdictionary.vercel.app/",
    githubUrl: "https://github.com/harshbix/bixxdictionary",
    role: {
      en: "Lead Frontend Engineer & UI Designer",
      sw: "Kiongozi wa Uhandisi wa Mbele na Muundo wa UI",
    },
    timeline: "2024",
    problem: {
      en: "Most online dictionaries are overwhelmed by ad banners, erratic layout shifts, and cluttered sidebars that disrupt quick reading and reference lookups.",
      sw: "Kamusi nyingi za mtandaoni zimejaa matangazo yanayosumbua, mabadiliko ya skrini ghafla, na vipengele vingi vinavyoharibu utulivu wa kusoma.",
    },
    solution: {
      en: "Engineered a distraction-free, high-contrast dictionary interface prioritizing instant query resolution, clean font pairings, instant error recovery, and accessible phonetic audio feedback.",
      sw: "Kujenga kiolesura kisicho na usumbufu, chenye rangi safi na herufi zinazosomeka, utafutaji wa papo hapo na sauti ya matamshi.",
    },
    architecture: {
      frontend: "React 18 with Vite for lightning-fast sub-second bundling",
      styling: "Tailwind CSS with custom typography scale and dark mode variables",
      deployment: "Vercel with global CDN edge caching",
    },
    keyFeatures: {
      en: [
        "Instant real-time search with debounced API queries",
        "Audio pronunciation playback with fallback handling",
        "Rich linguistic taxonomy: definitions, synonyms, antonyms",
        "Dark and light reading mode optimized for visual comfort",
        "Zero layout shifts with skeleton states for high-latency connections",
      ],
      sw: [
        "Utafutaji wa papo hapo kwa maswali ya API",
        "Sauti ya matamshi yenye usaidizi wa kiotomatiki",
        "Mpangilio mpana wa kilugha: maana, visawe, na vinyume",
        "Muonekano wa giza na mwangaza unaolinda macho",
        "Skrini ya utulivu bila mtikisiko wakati wa kupakia",
      ],
    },
    impact: {
      en: [
        "Sub-200ms query rendering time on modern connections.",
        "100/100 Lighthouse performance and accessibility scores.",
        "A clean showcase of editorial typography and friction-free utility design.",
      ],
      sw: [
        "Kasi ya chini ya sekunde 0.2 kuleta matokeo ya neno.",
        "Alama 100/100 za utendaji na ufikiaji kwenye ukaguzi wa Lighthouse.",
        "Mfano bora wa maandishi ya kisasa na muundo usio na kikwazo.",
      ],
    },
  },
  {
    id: "recan-foundation",
    slug: "recan-foundation",
    title: "RECAN Foundation",
    category: "Full-Stack",
    featured: false,
    summary: {
      en: "Trust-centric NGO web platform crafted to tell community stories and drive donor engagement.",
      sw: "Tovuti ya taasisi isiyo ya kiserikali iliyojengwa kuonyesha athari za jamii na kurahisisha michango na ushirikiano.",
    },
    description: {
      en: "An official nonprofit web platform designed to establish instant institutional trust, clearly communicate organizational mission, and guide prospective donors through streamlined conversion funnels.",
      sw: "Tovuti rasmi ya shirika la hisani iliyosanifiwa kujenga uaminifu wa taasisi papo hapo, kueleza wazi dhumuni la shirika, na kuwaongoza wafadhili kwa njia rahisi.",
    },
    image: "/assets/projects/recanfoundation.webp",
    imageAlt: {
      en: "RECAN Foundation nonprofit web portal homepage showcasing community initiatives",
      sw: "Ukurasa wa mwanzo wa tovuti ya RECAN Foundation ukionyesha miradi ya kijamii",
    },
    tags: ["React", "Next.js", "Tailwind CSS", "Responsive UX", "SEO"],
    liveUrl: "https://recanfoundation.org/",
    githubUrl: "https://github.com/harshbix/recanfoundation",
    role: {
      en: "Design Direction & Frontend Architecture",
      sw: "Uongozi wa Usanifu na Muundo wa Mbele (Frontend)",
    },
    timeline: "2024",
    problem: {
      en: "The foundation required a digital home that could establish immediate credibility with international partners and donors while working flawlessly across low-bandwidth African mobile networks.",
      sw: "Taasisi ilihitaji tovuti inayojenga uaminifu kwa washirika wa kimataifa na wafadhili, huku ikifunguka kwa haraka hata kwenye mitandao ya simu yenye kasi ndogo.",
    },
    solution: {
      en: "Architected a lightweight, mobile-first web presence with clear visual storytelling, high-contrast typography, and intuitive call-to-action pathways for donations and program involvement.",
      sw: "Kujenga tovuti nyepesi inayozingatia simu za mkononi, yenye masimulizi ya picha wazi, maandishi makini, na njia rahisi za kutoa michango na kujiunga.",
    },
    architecture: {
      frontend: "Next.js / React with semantic HTML5 architecture",
      styling: "Tailwind CSS with restrained color hierarchy",
      deployment: "Production hosting with asset optimization",
    },
    keyFeatures: {
      en: [
        "Narrative-driven homepage layout guiding visitors from problem to impact",
        "Mobile-optimized donation and partnership inquiry forms",
        "High-speed image compression preserving visual quality at minimal byte sizes",
        "Structured SEO metadata for high visibility on local and international searches",
      ],
      sw: [
        "Mpangilio wa usimulizi unaomwongoza msomaji kuelewa athari",
        "Fomu rahisi za michango na maombi ya ushirikiano kwenye simu",
        "Ukandamizaji wa picha unaobakiza ubora wa juu kwa ukubwa mdogo",
        "Usanidi bora wa SEO ili kupatikana kirahisi mtandaoni",
      ],
    },
    impact: {
      en: [
        "Strengthened the foundation's presentation for international partners and grantmakers.",
        "Mobile bounce rates decreased substantially due to sub-1.5s mobile page load.",
      ],
      sw: [
        "Kuongeza uaminifu na mvuto kwa washirika na wafadhili wa kimataifa.",
        "Kupungua kwa wanaoondoka kwenye tovuti kutokana na kufunguka chini ya sekunde 1.5 kwenye simu.",
      ],
    },
  },
  {
    id: "overspeed-security",
    slug: "overspeed-security",
    title: "Overspeed Security",
    category: "Frontend",
    featured: false,
    summary: {
      en: "Corporate web presence for an enterprise security engineering and guard operations firm.",
      sw: "Tovuti ya kisasa ya kampuni ya ulinzi na teknolojia za kiusalama, ikionyesha huduma na kukuza uaminifu.",
    },
    description: {
      en: "A robust corporate digital presence built for Overspeed Security. Designed to project authority, detail operational security capabilities, and convert commercial facility managers into qualified enterprise leads.",
      sw: "Tovuti imara ya kibiashara iliyojengwa kwa ajili ya Overspeed Security. Iliyoundwa kuonyesha mamlaka, kueleza huduma za ulinzi, na kuvutia wasimamizi wa majengo ya kibiashara.",
    },
    image: "/assets/projects/overspeed-security.webp",
    imageAlt: {
      en: "Overspeed Security corporate interface displaying operational services and security credentials",
      sw: "Muonekano wa tovuti ya Overspeed Security ukionyesha huduma za kiusalama na uaminifu",
    },
    tags: ["React", "TypeScript", "Tailwind CSS", "Enterprise UI"],
    liveUrl: "https://overspeedsecurity.vercel.app/",
    githubUrl: "https://github.com/harshbix/overspeedsecurity",
    role: {
      en: "Frontend Architecture & UI Engineering",
      sw: "Muundo wa Mbele na Uhandisi wa Kiolesura",
    },
    timeline: "2024",
    problem: {
      en: "Legacy branding and lack of an authoritative digital footprint hindered the company from competing effectively for commercial property security contracts.",
      sw: "Ukosefu wa uwepo thabiti mtandaoni uliifanya kampuni kukosa nafasi ya kushindana katika mikataba mikubwa ya ulinzi wa majengo ya kibiashara.",
    },
    solution: {
      en: "Developed an authoritative, high-contrast dark enterprise interface emphasizing verified operational protocols, rapid incident response times, and structured client inquiry pathways.",
      sw: "Kujenga kiolesura chenye mamlaka na hadhi ya juu, kinachoonyesha mbinu za kiutendaji, kasi ya mwitikio, na njia rahisi ya kuomba huduma.",
    },
    architecture: {
      frontend: "React 18 with modern component architecture",
      styling: "Custom Tailwind CSS design tokens with corporate dark theme",
      deployment: "Vercel edge network",
    },
    keyFeatures: {
      en: [
        "Structured capability breakdown for guarding, patrol, and CCTV installations",
        "Fast commercial quotation calculator and inquiry dispatcher",
        "Clear compliance badges and operational credential showcase",
        "High-contrast mobile readability for on-the-go property supervisors",
      ],
      sw: [
        "Mchanganuo wazi wa huduma: walinzi, doria, na kufunga kamera za CCTV",
        "Njia ya haraka ya kukadiria gharama na kuomba huduma",
        "Uthibitisho wa vibali vya kisheria na viwango vya utendaji",
        "Usomaji wazi kwenye simu hata ukiwa kwenye mwanga wa jua",
      ],
    },
    impact: {
      en: [
        "Established an immediate digital credibility anchor for corporate procurement bids.",
        "Generated consistent commercial security inquiries from property developers.",
      ],
      sw: [
        "Kujenga msingi imara wa uaminifu wakati wa kuomba zabuni za kibiashara.",
        "Kuvutia wateja wapya wa mashirika na majengo ya kibiashara mara kwa mara.",
      ],
    },
  },
  {
    id: "henry-peter-portfolio",
    slug: "henry-peter-portfolio",
    title: "Henry Peter Portfolio",
    category: "Design & Systems",
    featured: false,
    summary: {
      en: "Cinematic personal portfolio website centered on motion, pacing, and visual storytelling.",
      sw: "Tovuti binafsi ya ubunifu inayoongozwa na miondoko laini ya picha, kasi nzuri, na usimulizi wa kuona.",
    },
    description: {
      en: "A tailored portfolio experience engineered with custom motion curves, rhythm-led section transitions, and an immersive gallery layout that highlights creative work without sacrificing performance.",
      sw: "Tovuti ya kipekee iliyojengwa kwa miondoko iliyopimwa kwa uangalifu, mabadiliko ya kurasa yanayofuata mdundo, na ukumbi wa picha unaovutia bila kupunguza kasi.",
    },
    image: "/assets/projects/henrypeter.webp",
    imageAlt: {
      en: "Henry Peter creative portfolio showcase featuring typography-driven gallery",
      sw: "Muonekano wa tovuti ya Henry Peter ukionyesha ukumbi wa picha na maandishi maridadi",
    },
    tags: ["React", "Framer Motion", "Tailwind CSS", "Creative Tech"],
    liveUrl: "https://henrypeter.vercel.app/",
    githubUrl: "https://github.com/harshbix/henrypeter",
    role: {
      en: "Creative Developer & Motion Engineer",
      sw: "Msanidi wa Ubunifu na Uhandisi wa Miondoko (Motion)",
    },
    timeline: "2024",
    problem: {
      en: "Creating an artistic portfolio that stands out in visual design circles while keeping interaction responsive and accessible on mobile.",
      sw: "Kujenga tovuti ya kisanaa inayotambulika katika duru za ubunifu, huku ikibaki laini, yenye kasi na rahisi kutumia kwenye simu.",
    },
    solution: {
      en: "Implemented hardware-accelerated transforms, scroll-synchronized pacing, and an elegant dark theme that frames every creative asset cleanly.",
      sw: "Kutumia teknolojia ya miondoko ya kasi (GPU), mtiririko unaoendana na msukumo wa ukurasa, na mandhari ya giza inayong'arisha kazi za msanii.",
    },
    architecture: {
      frontend: "React 18 with Framer Motion hooks",
      styling: "Custom Tailwind configuration with fine-tuned easing curves",
      deployment: "Vercel global CDN",
    },
    keyFeatures: {
      en: [
        "Motion choreography with reduced-motion fallbacks",
        "Editorial typography with custom title tracking",
        "Responsive interactive project showcases",
      ],
      sw: [
        "Upangaji makini wa miondoko wenye kujali mapendeleo ya mtumiaji",
        "Uandishi wa kipekee wa herufi na nafasi zilizopimwa",
        "Maonyesho ya miradi yanayoitikia vizuri kwenye kila skrini",
      ],
    },
    impact: {
      en: [
        "Zero jank during scroll and transitions across modern browsers.",
        "Demonstrates high visual taste and frontend engineering precision.",
      ],
      sw: [
        "Uzoefu laini bila mtikisiko wowote wakati wa kusogeza ukurasa.",
        "Uthibitisho wa ladha ya juu ya kuona na umakini wa mbele wa kiufundi.",
      ],
    },
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "farols-company",
    role: {
      en: "Technical Project Manager",
      sw: "Meneja wa Miradi ya Kiteknolojia",
    },
    company: "Farols Company",
    location: {
      en: "Mbeya, Tanzania",
      sw: "Mbeya, Tanzania",
    },
    period: {
      en: "2026 — Present",
      sw: "2026 — Hadi Sasa",
    },
    year: "2026",
    type: {
      en: "Digital Leadership",
      sw: "Uongozi wa Kidijitali",
    },
    category: "leadership",
    logoSrc: "/assets/Farols white word down.png",
    description: {
      en: "Overseeing end-to-end digital transformation lifecycles, specializing in modern web systems, agile delivery, and scalable product engineering.",
      sw: "Kusimamia safari nzima ya mageuzi ya kidijitali, nikizingatia mifumo ya kisasa ya wavuti, uendeshaji wa haraka (Agile), na uzalishaji wa mifumo imara.",
    },
    achievements: {
      en: [
        "Directed cross-functional engineering and design workflows to deliver high-impact web platforms for a diverse B2B portfolio.",
        "Optimized agile development sprints, significantly reducing time-to-market for digital deliverables.",
        "Aligned technical execution with business objectives to capture and retain high-value enterprise accounts.",
      ],
      sw: [
        "Kuongoza timu za uhandisi na usanifu ili kuzalisha mifumo mikubwa ya wavuti kwa wateja wa kibiashara.",
        "Kuboresha mtiririko wa kazi (Agile sprints), na kupunguza muda unaotumika kukamilisha bidhaa za kidijitali.",
        "Kulinganisha utekelezaji wa kiufundi na malengo ya biashara ili kuvutia wateja wakubwa wa mashirika.",
      ],
    },
    technologies: ["Technical Project Management", "Agile Sprints", "Full-Stack Web Systems", "Team Delivery"],
    current: true,
  },
  {
    id: "bixx-tech",
    role: {
      en: "Hardware & Systems Engineer",
      sw: "Mhandisi wa Vifaa vya Kompyuta na Mifumo",
    },
    company: "Bixx Tech",
    location: {
      en: "Dar es Salaam, Tanzania",
      sw: "Dar es Salaam, Tanzania",
    },
    period: {
      en: "2025 — Present",
      sw: "2025 — Hadi Sasa",
    },
    year: "2025",
    type: {
      en: "Hardware & Systems",
      sw: "Vifaa na Mifumo",
    },
    category: "engineering",
    description: {
      en: "Directing workstation configurations, hardware diagnostics, and enterprise hardware operations.",
      sw: "Kusimamia usanidi wa kompyuta za kazini (workstations), ukaguzi wa kitaalamu wa vifaa vya ndani, na huduma za vifaa vya kompyuta kwa mashirika.",
    },
    achievements: {
      en: [
        "Integrated diagnostic tools, increasing regional service capacity by 40%.",
        "Engineered standardized protocols, cutting maintenance turnaround by 60%.",
        "Delivered custom workstation setups for developers, creators, and commercial clients.",
      ],
      sw: [
        "Kuunganisha zana za kisasa za ukaguzi, na kuongeza uwezo wa huduma za kikanda kwa 40%.",
        "Kuanzisha mbinu sanifu zilizopunguza muda wa matengenezo kwa 60%.",
        "Kujenga na kukabidhi kompyuta maalum za kazini kwa wasanidi programu, wabunifu, na makampuni.",
      ],
    },
    technologies: ["Workstations", "Hardware Diagnostics", "Hardware Architecture", "System Optimization"],
    current: true,
  },
  {
    id: "tpc",
    role: {
      en: "IT Systems Consultant",
      sw: "Mshauri wa Mifumo ya Teknolojia (IT)",
    },
    company: "Tanzania Posts Corporation",
    location: {
      en: "Mbeya, Tanzania",
      sw: "Mbeya, Tanzania",
    },
    period: {
      en: "2023 — 2025",
      sw: "2023 — 2025",
    },
    year: "2023",
    type: {
      en: "Systems Consulting",
      sw: "Ushauri wa Mifumo",
    },
    category: "leadership",
    logoSrc: "/assets/posta.png",
    description: {
      en: "Led systems modernization initiatives, transitioning legacy infrastructure into resilient digital operational workflows.",
      sw: "Kuongoza maboresho ya mifumo ya kielektroniki, kubadili mifumo ya kizamani kuwa michakato ya kidijitali inayofanya kazi kwa ufanisi.",
    },
    achievements: {
      en: [
        "Architected an enterprise digital service platform, resulting in a 30% aggregate increase in operational productivity.",
        "Streamlined critical logistical workflows, minimizing manual data-entry bottlenecks and reducing system downtime.",
        "Devised and conducted comprehensive technical training programs, upskilling an internal staff of 100+ employees.",
      ],
      sw: [
        "Kusanifu jukwaa la kidijitali la huduma za shirika, lililoongeza tija ya kiutendaji kwa 30%.",
        "Kurahisisha mtiririko wa vifurushi na usafirishaji, na kupunguza makosa ya uingizaji taarifa kwa mikono.",
        "Kuandaa na kuendesha mafunzo ya kiufundi kwa wafanyakazi zaidi ya 100 wa shirika.",
      ],
    },
    technologies: ["Systems Modernization", "Logistics Workflows", "Enterprise Training", "Process Automation"],
    current: false,
  },
  {
    id: "web-tech",
    role: {
      en: "Technical Solutions Analyst",
      sw: "Mchambuzi wa Suluhu za Kiufundi",
    },
    company: "Web Technologies Ltd.",
    location: {
      en: "Dodoma, Tanzania",
      sw: "Dodoma, Tanzania",
    },
    period: {
      en: "2023",
      sw: "2023",
    },
    year: "2023",
    type: {
      en: "Integration & Analysis",
      sw: "Muunganisho na Uchambuzi",
    },
    category: "engineering",
    description: {
      en: "Facilitated the deployment of Electronic Fiscal Device (EFD) compliance systems and engineered client-facing billing integrations.",
      sw: "Kusimamia ufungaji wa mifumo ya kodi ya EFD na kujenga miunganisho ya malipo kwa wateja.",
    },
    achievements: {
      en: [
        "Successfully executed deployment and configuration of EFD compliance software for 20+ corporate clients.",
        "Engineered direct billing integrations that streamlined financial data processing between client applications.",
        "Produced detailed technical operational manuals and delivered onboarding sessions to ensure client self-sufficiency.",
      ],
      sw: [
        "Kukamilisha ufungaji na usanidi wa mifumo ya EFD kwa makampuni zaidi ya 20.",
        "Kutengeneza miunganisho ya ankara za malipo iliyorahisisha usindikaji wa taarifa za fedha.",
        "Kuandika miongozo ya uendeshaji na kutoa mafunzo yaliyowezesha wateja kujitegemea.",
      ],
    },
    technologies: ["EFD Fiscal Systems", "Billing API Integrations", "Client Deployments", "Compliance"],
    current: false,
  },
  {
    id: "quickdrop",
    role: {
      en: "Frontend Development Specialist",
      sw: "Mtaalamu wa Uhandisi wa Mbele (Frontend)",
    },
    company: "Quickdrop Co.",
    location: {
      en: "Dar es Salaam, Tanzania",
      sw: "Dar es Salaam, Tanzania",
    },
    period: {
      en: "2022 — 2023",
      sw: "2022 — 2023",
    },
    year: "2022",
    type: {
      en: "Frontend Engineering",
      sw: "Uhandisi wa Mbele wa Wavuti",
    },
    category: "engineering",
    logoSrc: "/assets/QuickDrop.png",
    description: {
      en: "Engineered responsive, high-performance web applications and established foundational frontend development standards.",
      sw: "Kujenga programu za kisasa za wavuti zenye kasi kubwa na kuweka misingi imara ya usanidi wa mbele wa kiufundi.",
    },
    achievements: {
      en: [
        "Developed and shipped production web applications utilizing React and modern JavaScript.",
        "Optimized Core Web Vitals and load times through responsive asset delivery and clean state architecture.",
        "Authored technical documentation and established reusable component patterns for internal tools.",
      ],
      sw: [
        "Kujenga na kuzindua programu halisi za wavuti kwa kutumia React na JavaScript ya kisasa.",
        "Kuboresha kasi ya kufunguka kwa wavuti kwa mfumo safi wa taarifa na picha nyepesi.",
        "Kuandika nyaraka za kiufundi na kuanzisha vipengele vilivyotumika mara kwa mara na timu.",
      ],
    },
    technologies: ["React", "JavaScript (ES6+)", "Core Web Vitals", "Component Systems"],
    current: false,
  },
];

export const PERSONAL_DIMENSIONS: PersonalDimension[] = [
  {
    id: "hardware",
    title: {
      en: "Workstations & PC Hardware",
      sw: "Kompyuta za Kazini na Vifaa vya Ndani",
    },
    label: {
      en: "Bixx Tech Operations",
      sw: "Huduma za Bixx Tech",
    },
    brand: "Bixx Tech",
    highlight: {
      en: "Custom rigs, diagnostics & performance tuning.",
      sw: "Kompyuta maalum za nguvu ya juu na ukaguzi wa kitaalamu.",
    },
    description: {
      en: "Engineering custom workstation computers for developers, content creators, and corporate studios. From component matching to thermal optimization and hardware troubleshooting.",
      sw: "Kuunganisha kompyuta maalum za nguvu kwa wasanidi programu, wabunifu wa maudhui, na ofisi. Kuanzia kulinganisha vipengele hadi kupoza na kurekebisha changamoto za kiufundi.",
    },
    actionText: {
      en: "Explore Bixx Tech",
      sw: "Tazama Bixx Tech",
    },
    actionUrl: "https://instagram.com/bixx.tech",
    bullets: {
      en: [
        "Custom desktop builds tailored to software compilation & 3D rendering",
        "Enterprise hardware diagnostics, component upgrades, and servicing",
        "Workstation desk setups and cable management architectures",
      ],
      sw: [
        "Kuunda kompyuta za mezani zenye nguvu ya kuandika msimbo na video za 3D",
        "Ukaguzi wa kitaalamu wa vifaa vya kompyuta, maboresho na matengenezo",
        "Mpangilio safi wa madawati ya kazi na udhibiti wa nyaya",
      ],
    },
    icon: "Cpu",
  },
  {
    id: "education",
    title: {
      en: "Developer Education",
      sw: "Mafunzo ya Wasanidi Programu",
    },
    label: {
      en: "Technical Tutorials",
      sw: "Mafunzo ya Kiufundi",
    },
    brand: "Bixx Tech",
    highlight: {
      en: "Simplifying software concepts for emerging builders.",
      sw: "Kurahisisha misingi ya programu kwa wanaoanza.",
    },
    description: {
      en: "Sharing direct, practical technical tutorials on Instagram and TikTok. Covering web development foundations, modern tooling, and efficient developer setups.",
      sw: "Kushiriki mafunzo ya vitendo ya kiufundi kwenye Instagram na TikTok. Kufundisha misingi ya wavuti, zana za kisasa, na mbinu za kufanya kazi kwa ufanisi.",
    },
    actionText: {
      en: "Watch Tutorials",
      sw: "Tazama Mafunzo",
    },
    actionUrl: "https://tiktok.com/@bixxtech",
    bullets: {
      en: [
        "Actionable bite-sized programming tips and component walkthroughs",
        "Guidance on choosing computer hardware for engineering workflows",
        "Open discussions on code quality, modern tooling, and tech career paths",
      ],
      sw: [
        "Dondoo fupi za vitendo za uandishi wa msimbo na vipengele vya wavuti",
        "Ushauri wa kuchagua kompyuta sahihi kwa ajili ya kazi za kiufundi",
        "Mjadala kuhusu ubora wa msimbo na safari ya kitaaluma kwenye teknolojia",
      ],
    },
    icon: "BookOpen",
  },
  {
    id: "dance",
    title: {
      en: "What Dance Taught Me",
      sw: "Kile Densi Imenifundisha",
    },
    label: {
      en: "Movement & Craft",
      sw: "Miondoko na Ubunifu",
    },
    brand: "Personal",
    highlight: {
      en: "Rhythm, timing, pacing, and dynamic tension.",
      sw: "Mdundo, wakati, kasi, na urari wa miondoko.",
    },
    description: {
      en: "Dance is a big part of who I am. It taught me rhythm, timing, movement, and knowing when to slow down or speed things up — sensibilities that directly inform how I design interface transitions and interactive states.",
      sw: "Densi ni sehemu kubwa ya maisha yangu. Imenifundisha mdundo, wakati, miondoko, na kutambua lini uongeze kasi au upunguze — uzoefu unaonisaidia moja kwa moja kusanifu jinsi miingiliano ya wavuti inavyotembea kwa ulaini.",
    },
    actionText: {
      en: "Follow on Instagram",
      sw: "Nifuate Instagram",
    },
    actionUrl: "https://instagram.com/harshbix",
    bullets: {
      en: [
        "Rhythm: Natural attention to timing and interface pacing",
        "Movement: Designing transitions that feel tactile and fluid",
        "Expression: Adding thoughtful personality instead of static flatness",
      ],
      sw: [
        "Mdundo: Kuzingatia muda na kasi ya vitu vinavyojitokeza skrini",
        "Miondoko: Kusanifu mabadiliko ya skrini yanayohisiwa kuwa laini na asili",
        "Msisimko: Kuongeza uhai kwenye muundo badala ya kuacha vitu vikiwa vigumu",
      ],
    },
    icon: "Sparkles",
  },
];

export const DIGITAL_PRODUCTS: DigitalProduct[] = [
  {
    id: "react-starter-kit",
    slug: "react-starter-kit",
    title: "React & Node Enterprise Starter",
    category: {
      en: "Code Template",
      sw: "Kiolezo cha Msimbo",
    },
    tagline: {
      en: "Production-ready boilerplate with TypeScript, Tailwind, and authentication.",
      sw: "Msimbo tayari wa kutumika wenye TypeScript, Tailwind, na uthibitishaji salama.",
    },
    description: {
      en: "A robust starter template engineered with clean folder structure, pre-configured JWT authentication, database migration scripts, and reusable UI components. Save dozens of setup hours.",
      sw: "Kiolezo imara cha mwanzo chenye mpangilio safi wa mafaili, uthibitishaji wa JWT ulioandaliwa tayari, hati za kanzidata, na vipengele safi vya UI vinavyoweza kutumika mara moja.",
    },
    price: "Free / Open",
    format: "GitHub Repo",
    badge: {
      en: "Popular",
      sw: "Inayopendwa",
    },
    highlights: {
      en: [
        "React 18 + Vite with strict TypeScript configuration",
        "Express.js RESTful API architecture with error handlers",
        "PostgreSQL schema migrations with drizzle/prisma integration",
        "Docker compose configuration for local development",
      ],
      sw: [
        "React 18 + Vite yenye usanidi thabiti wa TypeScript",
        "Mfumo wa Express.js REST API wenye udhibiti wa hitilafu",
        "Muundo wa kanzidata ya PostgreSQL iliyo tayari",
        "Faili la Docker Compose kwa mazingira ya ndani ya majaribio",
      ],
    },
    downloadUrl: "https://github.com/harshbix",
    previewUrl: "https://github.com/harshbix",
    version: "v2.1",
  },
  {
    id: "workstation-guide",
    slug: "workstation-guide",
    title: "Workstation Architecture Blueprint",
    category: {
      en: "Hardware Guide",
      sw: "Mwongozo wa Vifaa",
    },
    tagline: {
      en: "A comprehensive guide to selecting, building, and cooling developer workstations.",
      sw: "Mwongozo kamili wa kuchagua, kuunganisha, na kupoza kompyuta za wasanidi programu.",
    },
    description: {
      en: "Written from hands-on building experience at Bixx Tech. Learn how to balance CPU clock speeds vs core counts, choose high-bandwidth memory for containerized workloads, and minimize thermal throttling.",
      sw: "Umeandikwa kutokana na uzoefu wa vitendo wa Bixx Tech. Jifunze jinsi ya kulinganisha nguvu ya processor (CPU), kuchagua RAM sahihi kwa ajili ya programu nzito, na kupunguza joto.",
    },
    price: "Free",
    format: "PDF & Markdown",
    badge: {
      en: "Guide",
      sw: "Mwongozo",
    },
    highlights: {
      en: [
        "Optimal hardware configurations for software engineers & designers",
        "Thermal management principles and quiet fan curve configurations",
        "Component compatibility checklist and power supply efficiency guides",
      ],
      sw: [
        "Mipangilio bora ya kompyuta kwa wasanidi programu na wabunifu",
        "Mbinu za kupoza kompyuta na kurekebisha feni zifanye kazi kwa utulivu",
        "Orodha ya uhakiki wa kulinganisha vifaa na nguvu ya umeme (Power supply)",
      ],
    },
    downloadUrl: "https://instagram.com/bixx.tech",
    version: "2025 Edition",
  },
  {
    id: "design-tokens-kit",
    slug: "design-tokens-kit",
    title: "Editorial Design Tokens Kit",
    category: {
      en: "Design Tokens",
      sw: "Mifumo ya Rangi na Herufi",
    },
    tagline: {
      en: "Tailwind CSS typography scales, luxury slate color tokens, and micro-motion curves.",
      sw: "Vipimo vya herufi vya Tailwind CSS, rangi za hadhi ya juu, na mifumo ya miondoko.",
    },
    description: {
      en: "The exact design system foundation used across my personal portfolio and client web apps. Includes fluid typography scales, semantic dark mode variables, and accessible contrast palettes.",
      sw: "Mfumo halisi wa usanifu ninaotumia kwenye tovuti yangu na miradi ya wateja. Unajumuisha vipimo vinavyobadilika vya herufi, rangi safi za giza, na viwango vya ufikiaji.",
    },
    price: "Free",
    format: "Tailwind Config & CSS",
    highlights: {
      en: [
        "Harmonious typographic scale tuned specifically for Inter",
        "Semantic dark and light mode CSS custom property tokens",
        "Pre-tuned Framer Motion spring presets and cubic-bezier easing curves",
      ],
      sw: [
        "Vipimo vya herufi vilivyopimwa mahususi kwa muandiko wa Inter",
        "Rangi za kisasa za CSS kwa ajili ya muonekano wa giza na mwangaza",
        "Vigezo vilivyoandaliwa tayari vya miondoko laini ya Framer Motion",
      ],
    },
    downloadUrl: "https://github.com/harshbix",
    version: "v1.4",
  },
  {
    id: "seo-performance-handbook",
    slug: "seo-performance-handbook",
    title: "Web Performance & SEO Handbook",
    category: {
      en: "Engineering Guide",
      sw: "Mwongozo wa Kiufundi",
    },
    tagline: {
      en: "Strategies for achieving 100/100 Lighthouse scores and structured search rankings.",
      sw: "Mbinu za kufikia alama 100/100 za Lighthouse na kuonekana vizuri kwenye Google.",
    },
    description: {
      en: "A no-fluff engineering guide on optimizing Core Web Vitals (LCP, INP, CLS), implementing schema.org JSON-LD metadata, and ensuring rock-solid search indexing.",
      sw: "Mwongozo wa kiufundi usio na maneno mengi unaofundisha kuboresha kasi ya kufunguka kwa wavuti, kuweka taarifa za JSON-LD, na kuhakikisha mtandao unaonekana kirahisi.",
    },
    price: "Free",
    format: "Digital Guide",
    highlights: {
      en: [
        "Diagnostic steps to eliminate Largest Contentful Paint (LCP) bottlenecks",
        "JSON-LD structured data templates for personal portfolios & local business",
        "Asset optimization workflows for modern formats (AVIF, WebP, SVG)",
      ],
      sw: [
        "Hatua za kuondoa ucheleweshaji wa kufunguka kwa kurasa mtandaoni",
        "Violezo vya JSON-LD kwa tovuti binafsi na biashara za ndani",
        "Mbinu za kupunguza ukubwa wa picha bila kupoteza ubora",
      ],
    },
    downloadUrl: "https://github.com/harshbix",
    version: "v1.0",
  },
];

export const FAQS: FAQItem[] = [
  {
    question: {
      en: "What kind of projects do you typically build?",
      sw: "Ni aina gani ya miradi unayojenga mara nyingi?",
    },
    answer: {
      en: "I specialize in building custom web applications, responsive corporate websites, client dashboards, and digital tools. Whether you need a brand-new product built from scratch or an existing application redesigned for speed and clarity, I handle the full cycle from frontend interface to backend APIs.",
      sw: "Ninajihusisha na ujenzi wa programu za kisasa za wavuti, tovuti za makampuni, dashibodi za usimamizi wa data, na zana za kidijitali. Iwe unahitaji mfumo mpya kutoka mwanzo au kuboresha uliopo kwa kasi na muonekano bora, ninashughulikia kuanzia skrini ya mbele hadi seva na kanzidata.",
    },
  },
  {
    question: {
      en: "What is your primary technology stack?",
      sw: "Je, unatumia teknolojia gani kuu za programu?",
    },
    answer: {
      en: "My core frontend stack is React, TypeScript, Next.js, and Tailwind CSS with Framer Motion for purposeful interaction. On the backend, I work with Node.js, Express, PostgreSQL, and Supabase. I configure everything with Vite and deploy to resilient cloud platforms with global CDNs.",
      sw: "Teknolojia zangu kuu za mbele ni React, TypeScript, Next.js, na Tailwind CSS pamoja na Framer Motion kwa ajili ya miondoko mizuri. Kwa upande wa seva, ninatumia Node.js, Express, PostgreSQL na Supabase. Ninasanifu mifumo kwa Vite na kuiweka kwenye seva salama mtandaoni zenye CDN.",
    },
  },
  {
    question: {
      en: "How do you approach communication and project timelines?",
      sw: "Unasimamiaje mawasiliano na ratiba ya mradi?",
    },
    answer: {
      en: "I keep communication direct, frequent, and transparent through WhatsApp, email, and scheduled video sessions. Every project begins with a clear scope document and milestone breakdown. Most projects run between 2 to 8 weeks depending on complexity, with working prototypes shared early for review.",
      sw: "Mawasiliano yangu ni ya moja kwa moja, mara kwa mara na ya uwazi kupitia WhatsApp, barua pepe, au mikutano ya mtandao. Kila mradi huanza na makubaliano wazi ya mahitaji na ratiba. Miradi mingi huchukua kati ya wiki 2 hadi 8 kulingana na ukubwa wake, huku mifumo ya majaribio ikionyeshwa mapema.",
    },
  },
  {
    question: {
      en: "Can you assist with workstation setups and PC hardware in Tanzania?",
      sw: "Je, unaweza kusaidia ufungaji wa kompyuta na vifaa vya ofisi Tanzania?",
    },
    answer: {
      en: "Yes. Through Bixx Tech in Dar es Salaam, I configure high-performance developer and creative workstations, run hardware diagnostics, and provide technical guidance on selecting balanced components for demanding engineering workflows.",
      sw: "Ndiyo. Kupitia Bixx Tech hapa Dar es Salaam, ninaunda na kuunganisha kompyuta zenye nguvu kubwa kwa ajili ya wasanidi programu, wabunifu na ofisi, nikifanya ukaguzi wa kina wa vifaa na kutoa ushauri sahihi wa kiteknolojia.",
    },
  },
  {
    question: {
      en: "How do we get started on a project?",
      sw: "Je, tunaanzaje kufanya kazi pamoja kwenye mradi?",
    },
    answer: {
      en: "Simply click the WhatsApp button to chat directly, send an email to juniorjeconia@icloud.com, or schedule a free 15-minute strategy call. Share a brief overview of what you're planning, and I'll respond within 24 hours with thoughts on scope and technical feasibility.",
      sw: "Bonyeza kitufe cha WhatsApp ili tuzungumze papo hapo, tuma barua pepe kwenda juniorjeconia@icloud.com, au panga mazungumzo ya dakika 15 bila malipo. Eleza kwa ufupi kile unachotaka kujenga, nami nitakujibu ndani ya saa 24 nikiwa na mapendekezo ya utekelezaji.",
    },
  },
];

export const NOTES: NoteItem[] = [
  {
    slug: "motion-and-rhythm-in-interfaces",
    title: {
      en: "Why Interface Motion Needs Rhythm & Pacing",
      sw: "Kwa Nini Miondoko ya Wavuti Inahitaji Mdundo na Kasi Sahihi",
    },
    date: "2025-01-15",
    readTime: {
      en: "4 min read",
      sw: "dakika 4 za kusoma",
    },
    category: {
      en: "Interaction Design",
      sw: "Usanifu wa Miingiliano",
    },
    summary: {
      en: "How principles from performing arts and dance informed my approach to user interface transitions and visual timing.",
      sw: "Jinsi kanuni za sanaa ya maonyesho na densi zilivyonifunza kusanifu miondoko na kasi ya miingiliano ya watumiaji.",
    },
    content: {
      en: `Animation on the web is often treated as either a superficial decoration or an afterthought. But when implemented with intention, motion is grammar — it communicates hierarchy, signals state changes, and establishes the tactile rhythm of an application.

My background in dance taught me that movement without purpose is just noise. A great dancer knows that silence and stillness are just as important as the movement itself. The same rule applies to user interfaces: if every element is constantly bouncing, glowing, or sliding, the user's attention is fractured.

When designing transitions in React with Framer Motion, I follow three strict rules:
1. Fast in, controlled out (spring stiffness between 380 and 420).
2. Staggered reveals should not exceed 300 milliseconds in total cascade.
3. Every animation must respect prefers-reduced-motion to keep the web accessible.`,
      sw: `Miondoko kwenye tovuti mara nyingi huchukuliwa kama pambo tu au jambo lisilo na umuhimu. Lakini inapotumiwa kwa makusudi, miondoko ni lugha — inaeleza vipaumbele, inaonyesha mabadiliko ya mfumo, na inajenga mdundo mzuri wa kutumia mfumo.

Uzoefu wangu katika densi umenifundisha kuwa miondoko isiyo na lengo ni kelele tu. Mnenguaji mzuri anajua kuwa kusimama kwa utulivu ni muhimu kama ilivyo kusonga. Kanuni hiyo inafanya kazi vivyo hivyo kwenye tovuti: kila kitu kikiruka au kuwaka ovyo, mtumiaji anachanganyikiwa.

Wakati ninapotengeneza miondoko kwa kutumia React na Framer Motion, ninafuata misingi mitatu:
1. Mwendo uwe wa haraka mwanzoni na utulie kwa uzuri.
2. Mpangilio wa vitu vinavyojitokeza usizidi sekunde 0.3 kwa ujumla.
3. Kila muundo lazima uheshimu chaguo la mtumiaji la kutotaka miondoko (prefers-reduced-motion) ili kulinda afya ya macho.`,
    },
  },
  {
    slug: "engineering-workstations-for-developers",
    title: {
      en: "Engineering Workstations for High-Throughput Development",
      sw: "Kuunda Kompyuta za Kazini kwa Ajili ya Wasanidi Programu",
    },
    date: "2024-11-20",
    readTime: {
      en: "5 min read",
      sw: "dakika 5 za kusoma",
    },
    category: {
      en: "Hardware Architecture",
      sw: "Muundo wa Vifaa vya Kompyuta",
    },
    summary: {
      en: "Balancing memory bandwidth, processor core clocks, and thermal design for developer environments.",
      sw: "Kulinganisha uwezo wa RAM, nguvu ya processor (CPU), na mifumo ya kupoza kompyuta za kazi.",
    },
    content: {
      en: `Most off-the-shelf computers are tuned for gaming or light office tasks. When you load a dozen Docker containers, compile TypeScript projects, and run local database instances, traditional laptops begin to thermal-throttle and stutter.

Through Bixx Tech, I assemble dedicated workstations that prioritize:
1. High single-core boost clocks for rapid JavaScript and TypeScript compilation.
2. Dual-channel high-frequency RAM to eliminate bottlenecks in memory-intensive environments.
3. NVMe PCIe Gen 4 storage with dedicated heatsinks for sub-second database read and write cycles.

A reliable workstation pays for itself within months by eliminating compilation lag and thermal slowdowns.`,
      sw: `Kompyuta nyingi zinazouzwa madukani zimetengenezwa kwa ajili ya michezo au kazi ndogo za ofisi. Unapoendesha mifumo ya Docker, unapojaribu msimbo mzito wa TypeScript, na kuendesha kanzidata ya ndani, kompyuta nyingi huanza kuchemsha na kukwama.

Kupitia Bixx Tech, ninaunganisha kompyuta maalum zinazozingatia:
1. Kasi ya juu ya processor ya msingi moja (single-core) kwa ajili ya kufupisha muda wa kutafsiri msimbo.
2. RAM ya njia mbili yenye kasi kubwa ili kuzuia kukwama kwa programu nzito.
3. Hifadhi ya haraka ya NVMe PCIe Gen 4 yenye mifumo imara ya kupoza kwa ajili ya kusoma na kuandika data kwa kasi ya ajabu.

Kompyuta yenye nguvu huleta tija kubwa kwa kuondoa ucheleweshaji wa kazi za kila siku.`,
    },
  },
  {
    slug: "designing-frictionless-ui-2026",
    title: {
      en: "Designing Frictionless Digital Products in 2026",
      sw: "Kusanifu Bidhaa za Kidijitali Zisizo na Vikwazo Mwaka 2026",
    },
    date: "2024-09-10",
    readTime: {
      en: "3 min read",
      sw: "dakika 3 za kusoma",
    },
    category: {
      en: "Frontend Craft",
      sw: "Ustadi wa Mbele wa Wavuti",
    },
    summary: {
      en: "Why typography, restraint, and direct action pathways create stronger conversion than flashiness.",
      sw: "Kwa nini herufi safi, umakini wa muundo, na njia fupi za hatua huleta ufanisi mkubwa kuliko urembo wa kupita kiasi.",
    },
    content: {
      en: `The modern web is crowded with generic templates, intrusive popups, and overly complex layout gimmicks. But users don't remember widgets; they remember clarity, speed, and how effortlessly they accomplished their goal.

By embracing Apple-inspired restraint, clean typography (such as Inter), and direct channels (like instant WhatsApp and direct mailto links instead of 8-field forms), digital products build immediate trust.

Simplicity is not the lack of clutter; it is the presence of purpose.`,
      sw: `Mtandao wa sasa umejaa violezo vinavyofanana, madirisha yanayojitokeza ovyo bila ruhusa, na urembo mwingi unaochelewesha kazi. Lakini watumiaji hawakumbuki urembo huo; wanakumbuka uwazi, kasi, na urahisi waliopata kukamilisha lengo lao.

Kwa kuzingatia unadhifu wa kisasa, herufi safi za kusomeka (kama Inter), na njia fupi za mawasiliano (kama WhatsApp na barua pepe badala ya fomu zenye maswali nane), bidhaa ya kidijitali inajenga uaminifu wa papo hapo.

Urahisi siyo tu kutokuwepo kwa vitu vingi; ni uwepo wa makusudi katika kila kipengele.`,
    },
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
