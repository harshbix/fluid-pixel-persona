import { Link } from "react-router-dom";
import { Cpu, Terminal, Layers, Wrench, Gamepad2, Trophy, Film, Music } from "lucide-react";
import { motion } from "framer-motion";
import { SEO } from "../seo";
import { DimensionsSection } from "../components/home/DimensionsSection";
import { CareerSection } from "../components/home/CareerSection";
import { TechStackSection } from "../components/home/TechStackSection";
import { ConversionCTASection } from "../components/home/ConversionCTASection";
import { SiteFooter } from "../components/layout/SiteFooter";
import { PERSONAL_INFO } from "../data/portfolioData";
import { useLanguage } from "../context/LanguageContext";

export default function About() {
  const { t, tContent } = useLanguage();

  const personalPassions = [
    {
      icon: Trophy,
      title: t("aboutPage.passion1Title"),
      description: t("aboutPage.passion1Desc"),
    },
    {
      icon: Gamepad2,
      title: t("aboutPage.passion2Title"),
      description: t("aboutPage.passion2Desc"),
    },
    {
      icon: Film,
      title: t("aboutPage.passion3Title"),
      description: t("aboutPage.passion3Desc"),
    },
    {
      icon: Music,
      title: t("aboutPage.passion4Title"),
      description: t("aboutPage.passion4Desc"),
    },
  ];

  return (
    <>
      <SEO
        title={`${t("aboutPage.heroTitle")} | Junior Jeconia`}
        description={t("aboutPage.heroLead")}
        url="https://jeconiajunior.vercel.app/about"
      />

      <main className="relative z-10 pt-10">
        {/* Page Hero */}
        <section className="px-6 lg:px-8 py-16 md:py-24 border-b border-gray-200 dark:border-gray-800 relative bg-background">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-3xl"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-xs font-mono font-semibold uppercase tracking-widest text-[#1a3a35] dark:text-emerald-400 mb-4">
                <span>{t("aboutPage.eyebrow")}</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white leading-[1.05]">
                {t("aboutPage.heroTitle")}
                <span className="block text-gray-500 dark:text-gray-400 text-2xl sm:text-4xl lg:text-5xl font-medium mt-1">
                  {t("aboutPage.heroSubtitle")}
                </span>
              </h1>

              <p className="mt-6 text-base sm:text-lg text-gray-600 dark:text-gray-300 font-normal leading-relaxed">
                {t("aboutPage.heroLead")}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Narrative Section */}
        <section className="px-6 lg:px-8 py-20 border-b border-gray-200 dark:border-gray-800 bg-background">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Story text */}
            <div className="space-y-6 text-gray-600 dark:text-gray-300 text-base md:text-lg leading-relaxed">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white tracking-tight">
                {t("aboutPage.storyTitle")}
              </h2>
              <p>
                {t("aboutPage.storyP1")}
              </p>
              <p>
                {t("aboutPage.storyP2")}
              </p>
              <p>
                {t("aboutPage.storyP3")}
              </p>

              {/* Callout Quote */}
              <div className="mt-6 p-6 rounded-[16px] border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/60">
                <p className="text-gray-900 dark:text-white font-semibold text-base mb-2">
                  {t("aboutPage.quote")}
                </p>
                <span className="text-xs font-mono text-[#1a3a35] dark:text-emerald-400">
                  — Junior Jeconia
                </span>
              </div>
            </div>

            {/* Core Architectural Disciplines */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-6 rounded-[16px] border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/60 space-y-3">
                <div className="w-10 h-10 rounded-[10px] bg-[#1a3a35] text-white flex items-center justify-center">
                  <Cpu className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-gray-900 dark:text-white">{t("aboutPage.d1Title")}</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                  {t("aboutPage.d1Desc")}
                </p>
              </div>

              <div className="p-6 rounded-[16px] border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/60 space-y-3">
                <div className="w-10 h-10 rounded-[10px] bg-[#1a3a35] text-white flex items-center justify-center">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-gray-900 dark:text-white">{t("aboutPage.d2Title")}</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                  {t("aboutPage.d2Desc")}
                </p>
              </div>

              <div className="p-6 rounded-[16px] border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/60 space-y-3">
                <div className="w-10 h-10 rounded-[10px] bg-[#1a3a35] text-white flex items-center justify-center">
                  <Terminal className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-gray-900 dark:text-white">{t("aboutPage.d3Title")}</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                  {t("aboutPage.d3Desc")}
                </p>
              </div>

              <div className="p-6 rounded-[16px] border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/60 space-y-3">
                <div className="w-10 h-10 rounded-[10px] bg-[#1a3a35] text-white flex items-center justify-center">
                  <Wrench className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-gray-900 dark:text-white">{t("aboutPage.d4Title")}</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                  {t("aboutPage.d4Desc")}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3 Core Dimensions Component */}
        <DimensionsSection />

        {/* Beyond the Screen: Personal Downtime & Curiosity */}
        <section id="beyond-code" className="px-6 lg:px-8 py-20 border-b border-gray-200 dark:border-gray-800 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#1a3a35] dark:text-emerald-400 block mb-2">
                {t("aboutPage.beyondEyebrow")}
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                {t("aboutPage.beyondTitle")}
              </h2>
              <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
                {t("aboutPage.beyondSubtitle")}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {personalPassions.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[16px] border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/60 p-6 flex flex-col justify-between hover:border-[#1a3a35] dark:hover:border-emerald-500/40 transition-all duration-300"
                >
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-[#1a3a35] dark:text-emerald-400 mb-4">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Principles */}
        <section className="px-6 lg:px-8 py-20 border-b border-gray-200 dark:border-gray-800 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#1a3a35] dark:text-emerald-400 block mb-2">
                {t("aboutPage.standardsEyebrow")}
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                {t("aboutPage.standardsTitle")}
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {PERSONAL_INFO.coreValues.map((val, idx) => (
                <div
                  key={idx}
                  className="rounded-[16px] border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/60 p-6 flex flex-col justify-between"
                >
                  <span className="font-mono text-xs font-bold text-[#1a3a35] dark:text-emerald-400 mb-4 block">
                    0{idx + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{tContent(val.title)}</h3>
                    <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                      {tContent(val.description)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Full Career Experience Section */}
        <CareerSection />

        {/* Full Tech Stack Matrix */}
        <TechStackSection />

        {/* Conversion CTA */}
        <ConversionCTASection />
      </main>

      <SiteFooter />
    </>
  );
}
