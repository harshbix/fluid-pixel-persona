import {
  PERSONAL_INFO,
  EXPERIENCES,
  PROJECTS,
  TECH_STACK,
  resolveText,
  resolveList,
} from "../data/portfolioData";
import { SupportedLocale } from "../i18n/locales";

export interface Experience {
  company: string;
  role: string;
  duration: string;
  achievements: string[];
}

export interface Contact {
  email: string;
  phone: string;
  location: string;
  socials: { label: string; url: string }[];
}

export interface ResumeProject {
  title: string;
  description: string;
  tags: string[];
  link?: string;
}

export interface ResumeData {
  name: string;
  role: string;
  bio: string;
  skills: string[];
  experience: Experience[];
  projects: ResumeProject[];
  contacts: Contact;
  image: string;
}

export function buildResumeData(lang: SupportedLocale = "en"): ResumeData {
  const normalizedExperience: Experience[] = EXPERIENCES.map((exp) => ({
    company: exp.company,
    role: resolveText(exp.role, lang),
    duration: resolveText(exp.period, lang),
    achievements: resolveList(exp.achievements, lang),
  }));

  const normalizedProjects: ResumeProject[] = PROJECTS.map((proj) => ({
    title: proj.title,
    description: resolveText(proj.summary, lang),
    tags: proj.tags,
    link: proj.liveUrl || proj.githubUrl,
  }));

  const skills = [
    ...TECH_STACK.frontend.map((s) => s.name),
    ...TECH_STACK.backend.map((s) => s.name),
    ...TECH_STACK.toolsAndArchitecture.map((s) => s.name),
    "Hardware Diagnostics",
    "Workstation Architecture",
  ];

  const contacts: Contact = {
    email: PERSONAL_INFO.email,
    phone: PERSONAL_INFO.phone,
    location: resolveText(PERSONAL_INFO.location, lang),
    socials: [
      { label: "GitHub", url: PERSONAL_INFO.socials.github },
      { label: "LinkedIn", url: PERSONAL_INFO.socials.linkedin },
      { label: "X / Twitter", url: PERSONAL_INFO.socials.twitter },
      { label: "Instagram", url: PERSONAL_INFO.socials.instagram },
      { label: "TikTok", url: PERSONAL_INFO.socials.tiktok },
    ],
  };

  return {
    name: PERSONAL_INFO.name,
    role: resolveText(PERSONAL_INFO.role, lang),
    bio: resolveText(PERSONAL_INFO.bioSummary, lang),
    skills,
    experience: normalizedExperience,
    projects: normalizedProjects,
    contacts,
    image: "/assets/profile.jpg",
  };
}
