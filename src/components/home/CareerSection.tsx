import React, { useState } from "react";
import {
  Calendar,
  MapPin,
  CheckCircle2,
  Briefcase,
  Cpu,
  Layers,
  Terminal,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { EXPERIENCES } from "../../data/portfolioData";
import { useLanguage } from "../../context/LanguageContext";

type CategoryFilter = "all" | "engineering" | "leadership";

export const CareerSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>("all");
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const { t, tContent } = useLanguage();

  const filteredExperiences = EXPERIENCES.filter((exp) => {
    if (activeFilter === "all") return true;
    return exp.category === activeFilter;
  });

  const getFallbackIcon = (id: string) => {
    if (id === "bixx-tech") return <Cpu className="w-5 h-5 text-emerald-400" />;
    if (id === "web-tech") return <Terminal className="w-5 h-5 text-amber-400" />;
    return <Layers className="w-5 h-5 text-blue-400" />;
  };

  return (
    <section
      id="experience"
      className="py-24 lg:py-32 px-6 lg:px-8 bg-background border-b border-gray-200 dark:border-gray-800 transition-colors duration-300 relative overflow-hidden"
    >
      {/* Subtle Artistic Background Grid Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(#1a3a35_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.03] dark:opacity-[0.07] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gray-100 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700/80 text-xs font-mono font-semibold uppercase tracking-widest text-[#1a3a35] dark:text-emerald-400 mb-4 shadow-2xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>{t("career.eyebrow")}</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white leading-[1.08]">
              {t("career.title")}
            </h2>
          </div>

          {/* Artistic Interactive Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-gray-100 dark:bg-gray-900/80 rounded-full border border-gray-200 dark:border-gray-800 backdrop-blur-sm self-start lg:self-end">
            <button
              type="button"
              onClick={() => setActiveFilter("all")}
              className={`relative px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-colors duration-200 ${
                activeFilter === "all"
                  ? "text-white dark:text-gray-950"
                  : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              }`}
            >
              {activeFilter === "all" && (
                <motion.div
                  layoutId="career-filter-pill"
                  className="absolute inset-0 bg-[#1a3a35] dark:bg-white rounded-full shadow-sm"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{t("career.allTracks")} ({EXPERIENCES.length})</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveFilter("engineering")}
              className={`relative px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-colors duration-200 ${
                activeFilter === "engineering"
                  ? "text-white dark:text-gray-950"
                  : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              }`}
            >
              {activeFilter === "engineering" && (
                <motion.div
                  layoutId="career-filter-pill"
                  className="absolute inset-0 bg-[#1a3a35] dark:bg-white rounded-full shadow-sm"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{t("career.engineering")} (3)</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveFilter("leadership")}
              className={`relative px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-colors duration-200 ${
                activeFilter === "leadership"
                  ? "text-white dark:text-gray-950"
                  : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              }`}
            >
              {activeFilter === "leadership" && (
                <motion.div
                  layoutId="career-filter-pill"
                  className="absolute inset-0 bg-[#1a3a35] dark:bg-white rounded-full shadow-sm"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{t("career.leadership")} (2)</span>
            </button>
          </div>
        </div>

        {/* Artistic Vertical Timeline Rail & Cards */}
        <div className="relative pl-6 sm:pl-10 md:pl-12 lg:pl-16">
          {/* Vertical Illuminated Spine */}
          <div className="absolute left-2.5 sm:left-4 md:left-5 lg:left-6 top-6 bottom-8 w-[2px] bg-gradient-to-b from-[#1a3a35] via-emerald-400/80 to-[#1a3a35]/20 dark:from-emerald-400 dark:via-emerald-500/60 dark:to-gray-800 rounded-full" />

          <motion.div layout className="space-y-10 sm:space-y-14">
            <AnimatePresence mode="popLayout">
              {filteredExperiences.map((exp, index) => {
                const isHovered = hoveredId === exp.id;
                const milestoneNumber = `0${EXPERIENCES.findIndex((e) => e.id === exp.id) + 1}`;
                const achievements = tContent(exp.achievements) || [];

                return (
                  <motion.div
                    key={exp.id}
                    layout
                    initial={{ opacity: 0, y: 35 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{
                      duration: 0.55,
                      delay: index * 0.08,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    onMouseEnter={() => setHoveredId(exp.id)}
                    onMouseLeave={() => setHoveredId(null)}
                    className="relative group"
                  >
                    {/* Timeline Orbital Node */}
                    <div className="absolute -left-[30px] sm:-left-[38px] md:-left-[42px] lg:-left-[46px] top-6 z-20">
                      <div
                        className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                          exp.current
                            ? "bg-[#1a3a35] text-emerald-300 ring-4 ring-emerald-500/20 shadow-md scale-110"
                            : isHovered
                            ? "bg-gray-900 text-white ring-4 ring-gray-300 dark:ring-gray-700 scale-105"
                            : "bg-white dark:bg-gray-900 text-gray-500 dark:text-gray-400 border border-gray-300 dark:border-gray-700"
                        }`}
                      >
                        <span className="text-[10px] font-mono font-bold">{milestoneNumber}</span>
                      </div>
                    </div>

                    {/* Architectural Milestone Card */}
                    <div
                      className={`relative rounded-[20px] p-6 sm:p-8 lg:p-10 border transition-all duration-300 overflow-hidden ${
                        exp.current
                          ? "bg-white/90 dark:bg-gray-900/80 border-[#1a3a35]/40 dark:border-emerald-500/30 shadow-lg hover:shadow-xl hover:border-[#1a3a35] dark:hover:border-emerald-400"
                          : "bg-white/70 dark:bg-gray-900/50 border-gray-200 dark:border-gray-800/80 shadow-xs hover:shadow-lg hover:border-gray-300 dark:hover:border-gray-700"
                      }`}
                    >
                      {/* Artistic Typographic Year Watermark in Background */}
                      <span className="absolute -right-2 -bottom-4 font-mono text-7xl sm:text-8xl lg:text-9xl font-black text-gray-900/[0.03] dark:text-white/[0.025] select-none pointer-events-none tracking-tighter">
                        {exp.year}
                      </span>

                      {/* Top Row: Brand Monogram + Role Title + Status Pills */}
                      <div className="relative z-10 flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-6 border-b border-gray-100 dark:border-gray-800/80">
                        <div className="flex items-start gap-4">
                          {/* Sleek Logo / Monogram Tile */}
                          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-[14px] bg-[#0c1017] border border-gray-800 flex items-center justify-center p-2.5 flex-shrink-0 shadow-sm group-hover:scale-105 transition-transform duration-300">
                            {exp.logoSrc ? (
                              <img
                                src={exp.logoSrc}
                                alt={`${exp.company} logo`}
                                className="w-full h-full object-contain filter brightness-105"
                                loading="lazy"
                              />
                            ) : (
                              getFallbackIcon(exp.id)
                            )}
                          </div>

                          {/* Role & Company Header */}
                          <div>
                            <div className="flex flex-wrap items-center gap-2.5">
                              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white tracking-tight">
                                {tContent(exp.role)}
                              </h3>

                              {exp.current && (
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/25">
                                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                  {t("career.presentRole")}
                                </span>
                              )}
                            </div>

                            <p className="mt-1 text-base font-semibold text-[#1a3a35] dark:text-emerald-400">
                              {exp.company}
                            </p>
                          </div>
                        </div>

                        {/* Metadata Pills: Period, Location, Track */}
                        <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 text-xs font-mono text-gray-600 dark:text-gray-300">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700/80">
                            <Calendar className="w-3.5 h-3.5 text-[#1a3a35] dark:text-emerald-400" />
                            <span>{tContent(exp.period)}</span>
                          </span>

                          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700/80">
                            <MapPin className="w-3.5 h-3.5 text-[#1a3a35] dark:text-emerald-400" />
                            <span>{tContent(exp.location)}</span>
                          </span>

                          <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700/80 text-[11px] font-bold text-gray-700 dark:text-gray-300">
                            <Briefcase className="w-3.5 h-3.5 text-[#1a3a35] dark:text-emerald-400" />
                            <span>{tContent(exp.type)}</span>
                          </span>
                        </div>
                      </div>

                      {/* Scope & Narrative Description */}
                      <div className="relative z-10 py-5">
                        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed max-w-4xl font-normal">
                          {tContent(exp.description)}
                        </p>
                      </div>

                      {/* Key Outcomes: Editorial Bento Tiles */}
                      <div className="relative z-10 pt-4 border-t border-gray-100 dark:border-gray-800/80">
                        <span className="text-[11px] font-mono uppercase tracking-widest text-gray-500 dark:text-gray-400 block mb-3 font-semibold">
                          {t("career.impact")}
                        </span>

                        <div className="grid md:grid-cols-3 gap-3">
                          {achievements.map((ach, aIdx) => (
                            <div
                              key={aIdx}
                              className="p-3.5 sm:p-4 rounded-[14px] bg-gray-50 dark:bg-gray-800/40 border border-gray-100 dark:border-gray-800/90 flex items-start gap-3 hover:border-gray-300 dark:hover:border-gray-700 transition-colors group/item"
                            >
                              <div className="w-5 h-5 rounded-full bg-emerald-500/10 dark:bg-emerald-400/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <CheckCircle2 className="w-3.5 h-3.5 text-[#1a3a35] dark:text-emerald-400" />
                              </div>
                              <span className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed font-normal">
                                {ach}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Technologies & Domain Tags */}
                      {exp.technologies && exp.technologies.length > 0 && (
                        <div className="relative z-10 mt-5 pt-4 border-t border-gray-100 dark:border-gray-800/60 flex flex-wrap items-center gap-2">
                          <span className="text-[10px] font-mono uppercase tracking-wider text-gray-400 dark:text-gray-500 mr-2">
                            {t("career.competencies")}:
                          </span>
                          {exp.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-gray-100 dark:bg-gray-800/70 text-gray-700 dark:text-gray-300 border border-gray-200/70 dark:border-gray-700/60"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
