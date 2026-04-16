import { Suspense, lazy } from 'react';
import { PremiumHeroSection } from '../components/PremiumHeroSection';
import { AboutSection } from '../components/AboutSection';
import { MinimalProjectsSection } from '../components/MinimalProjectsSection';
import { PremiumCareerSection } from '../components/PremiumCareerSection';
import { ContactCtaSection } from '../components/ContactCtaSection';
import { SiteFooter } from '../components/SiteFooter';
import { SEO } from '../seo';

// Lazy loaded below-the-fold sections
const EditorialStatement = lazy(() => import('../components/EditorialStatement').then(m => ({ default: m.EditorialStatement })));

const Index = () => {
  return (
    <>
      <SEO
        title="Junior Jeconia | Elite Software Engineer & Digital Specialist"
        description="Portfolio of Junior Jeconia, a software engineer producing cinematic, high-performance web applications and Awwwards-quality digital experiences."
        url="https://jeconiajunior.vercel.app/"
      />
      <PremiumHeroSection />
      <AboutSection />
      <MinimalProjectsSection />

      <Suspense fallback={<div className="h-32 flex items-center justify-center opacity-50">Loading sections...</div>}>
        <EditorialStatement />
        <PremiumCareerSection />
        <ContactCtaSection />
        <SiteFooter />
      </Suspense>
    </>
  );
};

export default Index;
