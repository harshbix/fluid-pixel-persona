import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { ExperienceSection } from '@/components/ExperienceSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { ThemeNavigation } from '@/components/ThemeNavigation';

const Index = () => {
  return (
    <div className="min-h-screen bg-background" style={{ position: "relative", zIndex: 1 }}>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ExperienceSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      <ThemeNavigation />
    </div>
  );
};

export default Index;
