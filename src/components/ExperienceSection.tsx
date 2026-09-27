import { EXPERIENCES } from "../data/portfolioData";
export { CareerSection, CareerSection as ExperienceSection } from "./home/CareerSection";

export const experiences = EXPERIENCES.map((exp, idx) => ({
  id: idx + 1,
  role: exp.role,
  company: exp.company,
  location: exp.location,
  period: exp.period,
  description: exp.description,
  achievements: exp.achievements,
  logo: exp.logoSrc || "💻",
  current: !!exp.current,
}));

export default CareerSection;
