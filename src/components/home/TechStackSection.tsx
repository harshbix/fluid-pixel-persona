import { motion } from "framer-motion";
import { Code2, Server, Database, Wrench } from "lucide-react";
import { SectionHeader } from "../common/SectionHeader";
import { TECH_STACK } from "../../data/portfolioData";
import { useLanguage } from "../../context/LanguageContext";

export const TechStackSection = () => {
  const { t } = useLanguage();

  const groups = [
    {
      title: t("tech.frontendTitle"),
      subtitle: t("tech.frontendSubtitle"),
      icon: Code2,
      skills: TECH_STACK.frontend,
    },
    {
      title: t("tech.backendTitle"),
      subtitle: t("tech.backendSubtitle"),
      icon: Server,
      skills: TECH_STACK.backend,
    },
    {
      title: t("tech.dataTitle"),
      subtitle: t("tech.dataSubtitle"),
      icon: Database,
      skills: TECH_STACK.dataAndCloud,
    },
    {
      title: t("tech.toolsTitle"),
      subtitle: t("tech.toolsSubtitle"),
      icon: Wrench,
      skills: TECH_STACK.toolsAndArchitecture,
    },
  ];

  return (
    <section id="tech-stack" className="py-24 lg:py-32 px-6 lg:px-12 border-b border-gray-200 dark:border-gray-800 bg-background relative transition-colors">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          badge={t("tech.eyebrow")}
          title={t("tech.title")}
          subtitle={t("tech.subtitle")}
          description={t("tech.description")}
        />

        {/* 4 Group Cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mt-14">
          {groups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.7, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-[24px] border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/60 p-6 sm:p-8 hover:border-[#1a3a35] dark:hover:border-emerald-500/40 transition-all duration-300 shadow-xs"
            >
              {/* Group Header */}
              <div className="flex items-center gap-3.5 pb-6 border-b border-gray-100 dark:border-gray-800/80 mb-6">
                <div className="h-10 w-10 rounded-xl bg-[#1a3a35]/10 dark:bg-emerald-500/10 flex items-center justify-center text-[#1a3a35] dark:text-emerald-400">
                  <group.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{group.title}</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{group.subtitle}</p>
                </div>
              </div>

              {/* Skills List without Percentage Bars */}
              <div className="space-y-2.5">
                {group.skills.map((item) => (
                  <div
                    key={item.name}
                    className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 p-3 rounded-xl border border-gray-100 dark:border-gray-800/60 bg-gray-50/50 dark:bg-gray-800/40 hover:bg-gray-100 dark:hover:bg-gray-800/80 transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      <span className="font-semibold text-sm text-gray-900 dark:text-white">{item.name}</span>
                    </div>
                    <span className="text-xs text-gray-500 dark:text-gray-400 font-mono">{item.note}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
