import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Check, Globe, Layers, Layout, Cpu, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { SEO } from "../seo";
import { BookingModal } from "../components/common/BookingModal";
import { ProcessSection } from "../components/home/ProcessSection";
import { FAQSection } from "../components/home/FAQSection";
import { ConversionCTASection } from "../components/home/ConversionCTASection";
import { SiteFooter } from "../components/layout/SiteFooter";
import { SERVICES } from "../data/portfolioData";
import { useLanguage } from "../context/LanguageContext";

const iconMap: Record<string, typeof Globe> = {
  Globe,
  Layers,
  Layout,
  Cpu,
};

export default function Services() {
  const { t, tContent } = useLanguage();
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <>
      <SEO
        title={`${t("servicesPage.title")} | Junior Jeconia`}
        description={t("servicesPage.description")}
        url="https://jeconiajunior.vercel.app/services"
      />

      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />

      <main className="relative z-10 pt-10">
        {/* Page Hero - Minimal Apple Style */}
        <section className="px-6 lg:px-8 py-16 md:py-24 border-b border-gray-200 dark:border-gray-800 relative bg-background">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-3xl"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-xs font-mono font-semibold uppercase tracking-widest text-[#1a3a35] dark:text-emerald-400 mb-4">
                <span>{t("servicesPage.eyebrow")}</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white leading-[1.05]">
                {t("servicesPage.title")}
                <span className="block text-gray-500 dark:text-gray-400 text-2xl sm:text-4xl lg:text-5xl font-medium mt-1">
                  {t("servicesPage.subtitle")}
                </span>
              </h1>

              <p className="mt-6 text-base sm:text-lg text-gray-600 dark:text-gray-300 font-normal leading-relaxed">
                {t("servicesPage.description")}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Detailed Service Deep-Dives with rounded-[16px] cards */}
        <section className="px-6 lg:px-8 py-20 border-b border-gray-200 dark:border-gray-800 bg-background">
          <div className="max-w-7xl mx-auto space-y-8">
            {SERVICES.map((service) => {
              const IconComponent = iconMap[service.icon] || Globe;

              return (
                <div
                  key={service.number}
                  className="rounded-[16px] border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/60 p-6 sm:p-10 transition-all duration-300 hover:border-[#1a3a35] dark:hover:border-emerald-500/40 hover:shadow-xl"
                >
                  <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8 lg:gap-12 items-start">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <span className="font-mono text-xs font-bold text-[#1a3a35] dark:text-emerald-400 tracking-widest">
                          {t("servicesPage.service")} {service.number}
                        </span>
                        <div className="w-8 h-8 rounded-[10px] bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-[#1a3a35] dark:text-emerald-400">
                          <IconComponent className="w-4 h-4" />
                        </div>
                      </div>

                      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white tracking-tight mb-2">
                        {tContent(service.title)}
                      </h2>

                      <p className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 mb-4">
                        {tContent(service.tagline)}
                      </p>

                      <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                        {tContent(service.description)}
                      </p>

                      {/* Tech Used */}
                      <div className="pt-4 border-t border-gray-100 dark:border-gray-800 flex items-center gap-2 flex-wrap">
                        <span className="text-xs text-gray-500 dark:text-gray-400 font-mono">{t("servicesPage.tools")}</span>
                        {service.technologies.map((tItem) => (
                          <span
                            key={tItem}
                            className="rounded-[6px] bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-2.5 py-1 text-xs font-mono text-gray-700 dark:text-gray-300"
                          >
                            {tItem}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Deliverables Card */}
                    <div className="rounded-[12px] border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/40 p-6 space-y-4">
                      <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-gray-900 dark:text-white">
                        {t("servicesPage.deliverables")}
                      </h3>
                      <ul className="space-y-2.5">
                        {tContent(service.deliverables).map((item) => (
                          <li key={item} className="flex items-start gap-2.5 text-xs text-gray-600 dark:text-gray-300">
                            <Check className="w-3.5 h-3.5 text-[#1a3a35] dark:text-emerald-400 mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="pt-4 border-t border-gray-200 dark:border-gray-700 flex flex-col sm:flex-row gap-2.5">
                        <button
                          type="button"
                          onClick={() => setBookingOpen(true)}
                          className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-[#1a3a35] hover:bg-[#132c28] py-2.5 px-4 text-xs font-bold uppercase tracking-wider text-white transition-all shadow-sm"
                        >
                          <Zap className="w-3.5 h-3.5 text-emerald-300 fill-current" />
                          <span>{t("servicesPage.bookCall")}</span>
                        </button>

                        <Link
                          to="/contact"
                          className="inline-flex items-center justify-center gap-1.5 rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 py-2.5 px-4 text-xs font-semibold uppercase tracking-wider text-gray-800 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white transition-all"
                        >
                          <span>{t("servicesPage.inquire")}</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Process Section */}
        <ProcessSection />

        {/* FAQ Section */}
        <FAQSection />

        {/* Conversion CTA */}
        <ConversionCTASection />
      </main>

      <SiteFooter />
    </>
  );
}
