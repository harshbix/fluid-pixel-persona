import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Terminal, Palette, Cpu } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";

export const ShortAboutSection: React.FC = () => {
  const { t } = useLanguage();

  const pillars = [
    {
      icon: Palette,
      title: t("about.pillar1Title"),
      description: t("about.pillar1Desc"),
    },
    {
      icon: Terminal,
      title: t("about.pillar2Title"),
      description: t("about.pillar2Desc"),
    },
    {
      icon: Cpu,
      title: t("about.pillar3Title"),
      description: t("about.pillar3Desc"),
    },
  ];

  return (
    <section id="about-preview" className="py-16 lg:py-24 px-6 lg:px-8 bg-background border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-start">
          {/* Left Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-block px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-xs font-mono font-semibold uppercase tracking-widest text-[#1a3a35] dark:text-emerald-400">
              <span>{t("about.eyebrow")}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight">
              {t("about.title")}
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed font-normal">
              <p>
                {t("about.bio1")}
              </p>
              <p>
                {t("about.bio2")}
              </p>
            </div>

            <div className="pt-2">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1a3a35] dark:text-emerald-400 hover:underline"
              >
                <span>{t("about.learnMore")}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </motion.div>

          {/* Right 3 Minimal Pillar Cards */}
          <div className="grid sm:grid-cols-1 gap-4 pt-2">
            {pillars.map((pillar, idx) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="p-5 sm:p-6 rounded-[14px] border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/60 flex items-start gap-4 transition-all duration-300 hover:border-[#1a3a35] dark:hover:border-emerald-500/40"
              >
                <div className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-[#1a3a35] dark:text-emerald-400 flex-shrink-0 mt-0.5">
                  <pillar.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-gray-900 dark:text-white mb-1">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
