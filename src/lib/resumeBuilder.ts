
import { projects } from '../components/ProjectsSection';
import { experiences } from '../components/ExperienceSection';
import { skills } from '../components/AboutSection';
// AboutSection: name, bio, image
// ContactSection: contactInfo
// These imports must match the actual export style in your components. Adjust if needed.


export type Experience = {
  company: string;
  role: string;
  duration: string;
  achievements: string[];
};


export type Contact = {
  email: string;
  phone: string;
  location: string;
  socials: { label: string; url: string }[];
};

export type ResumeData = {
  name: string;
  role: string;
  bio: string;
  skills: string[];
  experience: Experience[];
  projects: Project[];
  contacts: Contact;
  image: string;
};

type SourceExperience = (typeof experiences)[number];
type Project = (typeof projects)[number];

export function buildResumeData(): ResumeData {
  // AboutSection data (adjust if you use context or props)
  const name = 'Junior Jeconia';
  const role = 'Frontend-leaning Full-Stack Developer';
  const bio = 'Frontend-leaning full-stack developer and product builder based in Dar es Salaam, Tanzania. Specializing in high-performance web applications, accessible UI/UX systems, and reliable full-stack architecture with React, TypeScript, and Node.js.';
  const image = '/assets/profile.jpg';

  // Skills from AboutSection
  // If AboutSection exports skills as default, adjust import

  // Experience from ExperienceSection
  const normalizedExperience = experiences.map((exp: SourceExperience) => ({
    company: exp.company,
    role: exp.role,
    duration: exp.period,
    achievements: exp.achievements,
  }));

  // Projects from ProjectsSection
  // Already normalized

  // Contacts from ContactSection (hardcoded for now, adjust if you export)
  const contacts = {
    email: 'juniorjeconia@icloud.com',
    phone: '+255 755 063 711',
    location: 'Dar es Salaam, TZ',
    socials: [
      { label: 'GitHub', url: 'https://github.com/harshbix' },
      { label: 'LinkedIn', url: 'https://www.linkedin.com/in/junior-jeconia-90710b265' },
      { label: 'Twitter', url: 'https://twitter.com/b1xson' },
      { label: 'Instagram', url: 'https://instagram.com/bixx.tech' },
      { label: 'TikTok', url: 'https://tiktok.com/@bixxtech' },
    ],
  };

  return {
    name,
    role,
    bio,
    skills,
    experience: normalizedExperience,
    projects,
    contacts,
    image,
  };
}
