import { SEO } from "../seo";
import { HeroSection } from "../components/home/HeroSection";
import { DimensionsSection } from "../components/home/DimensionsSection";
import { ServicesSection } from "../components/home/ServicesSection";
import { ProcessSection } from "../components/home/ProcessSection";
import { SelectedWorkSection } from "../components/home/SelectedWorkSection";
import { CareerSection } from "../components/home/CareerSection";
import { ProductsPreviewSection } from "../components/home/ProductsPreviewSection";
import { ResultsSection } from "../components/home/ResultsSection";
import { IntegrationsSection } from "../components/home/IntegrationsSection";
import { FAQSection } from "../components/home/FAQSection";
import { ConversionCTASection } from "../components/home/ConversionCTASection";
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
        {/* 1. Kepha-Style Hero (Framed layout, Audi-style crossing circles, clean architectural backdrop, floating booking card) */}
        <HeroSection />

        {/* 2. Personal Dimensions: Computer Sales, Tech Education, Dance Craft */}
        <DimensionsSection />

        {/* 3. Kepha-Style Services: Build With Precision (Contiguous Connected Grid) */}
        <ServicesSection />

        {/* 4. Kepha-Style Process: OUR PROCESS / Seamless Process, Great Results */}
        <ProcessSection />

        {/* 5. Selected Projects Showcase */}
        <SelectedWorkSection />

        {/* 6. Kepha-Style Career Timeline: Work History & Execution */}
        <CareerSection />

        {/* 7. Digital Products & Materials Preview */}
        <ProductsPreviewSection />

        {/* 8. Kepha-Style Results: Results That Matter (2-Column & 2x2 Outcome Grid) */}
        <ResultsSection />

        {/* 9. Kepha-Style Powerful Integrations */}
        <IntegrationsSection />

        {/* 10. Kepha-Style FAQ: Need Help? Start Here */}
        <FAQSection />

        {/* 11. Kepha-Style Final Conversion CTA: Start Your Project Journey */}
        <ConversionCTASection />
      </main>

      {/* 12. Multi-Column Footer with BrandLogo */}
      <SiteFooter />
    </>
  );
};

export default Index;
