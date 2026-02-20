import { Suspense, lazy } from 'react';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { ThemeNavigation } from '@/components/ThemeNavigation';
import { Helmet } from 'react-helmet-async';

// Lazy loaded below-the-fold sections
const EditorialStatement = lazy(() => import('@/components/EditorialStatement').then(m => ({ default: m.EditorialStatement })));
const ExperienceSection = lazy(() => import('@/components/ExperienceSection').then(m => ({ default: m.ExperienceSection })));
const PricingSection = lazy(() => import('@/components/PricingSection').then(m => ({ default: m.PricingSection })));
const TestimonialsSection = lazy(() => import('@/components/TestimonialsSection').then(m => ({ default: m.TestimonialsSection })));
const ContactSection = lazy(() => import('@/components/ContactSection').then(m => ({ default: m.ContactSection })));
const Footer = lazy(() => import('@/components/Footer').then(m => ({ default: m.Footer })));

const Index = () => {
  return (
    <div className="min-h-screen bg-background" style={{ position: "relative", zIndex: 1 }}>
      <Helmet>
        <title>Junior Jeconia | Elite Software Engineer & Digital Specialist</title>
        <meta name="description" content="Portfolio of Junior Jeconia, a software engineer producing cinematic, high-performance web applications and Awwwards-quality digital experiences." />
        <link rel="canonical" href="https://jeconiajunior.vercel.app/" />
        <meta property="og:title" content="Junior Jeconia | Elite Software Engineer" />
        <meta property="og:description" content="Cinematic, high-performance web applications and digital experiences." />
        <meta property="og:url" content="https://jeconiajunior.vercel.app/" />
        <meta name="twitter:title" content="Junior Jeconia | Elite Software Engineer" />
        <meta name="twitter:description" content="Cinematic, high-performance web applications and digital experiences." />
      </Helmet>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />

      <Suspense fallback={<div className="h-32 flex items-center justify-center opacity-50">Loading sections...</div>}>
        <EditorialStatement />
        <ExperienceSection />
        <PricingSection />
        <TestimonialsSection />
        <ContactSection />
        <Footer />
      </Suspense>

      <ThemeNavigation />
    </div>
  );
};

export default Index;
