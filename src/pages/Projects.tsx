import { SEO } from '../seo';
import { ProjectsSection } from '../components/ProjectsSection';

export default function Projects() {
  return (
    <>
      <SEO
        title="Projects | Junior Jeconia | Bixx Tech"
        description="A showcase of projects by Junior Jeconia (Bixx / Harshbix) and Farols Digital Solutions. Web apps, ecommerce, and digital solutions."
      />
      <ProjectsSection />
    </>
  );
}
