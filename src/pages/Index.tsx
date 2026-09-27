import { SEO } from "../seo";
import { HeroSection } from "../components/home/HeroSection";
import { SelectedWorkSection } from "../components/home/SelectedWorkSection";
import { ShortAboutSection } from "../components/home/ShortAboutSection";
import { ServicesSection } from "../components/home/ServicesSection";
import { ProcessSection } from "../components/home/ProcessSection";
import { CareerSection } from "../components/home/CareerSection";
import { DimensionsSection } from "../components/home/DimensionsSection";
import { FAQSection } from "../components/home/FAQSection";
import { ContactSection } from "../components/ContactSection";
import { SiteFooter } from "../components/layout/SiteFooter";

const Index = () => {
  return (
    <>
      <SEO
        title="Junior Jeconia — Full-Stack Developer | Dar es Salaam, Tanzania"
        description="Full-stack developer in Tanzania. Engineering high-performance web applications, Bixx Tech workstation hardware, and digital systems."
        url="https://jeconiajunior.vercel.app/"
      />

      <main id="main-content" className="relative z-10">
        {/* 1. Hero */}
        <HeroSection />

        {/* 2. Selected Work / Flagship Projects */}
        <SelectedWorkSection />

        {/* 3. Short About (Human, verified facts, interests) */}
        <ShortAboutSection />

        {/* 4. Capabilities / Services */}
        <ServicesSection />

        {/* 5. Process / How I Work */}
        <ProcessSection />

        {/* 6. Career Timeline / Experience */}
        <CareerSection />

        {/* 7. Personal Dimensions (Hardware, Education, Dance) */}
        <DimensionsSection />

        {/* 9. FAQ Section */}
        <FAQSection />

        {/* 10. Direct Contact Section (id="contact") */}
        <ContactSection />
      </main>

      {/* 11. Multi-Column Footer with links to all pages */}
      <SiteFooter />
    </>
  );
};

export default Index;
