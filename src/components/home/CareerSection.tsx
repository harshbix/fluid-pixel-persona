import React from "react";
import { Calendar, MapPin, CheckCircle2, Briefcase } from "lucide-react";
import { motion } from "framer-motion";
import { EXPERIENCES } from "../../data/portfolioData";

export const CareerSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 lg:py-28 px-6 lg:px-8 bg-background border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Section Header with Kepha aesthetic */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-xs font-mono font-semibold uppercase tracking-widest text-[#1a3a35] dark:text-emerald-400 mb-3">
              <span>Experience Timeline</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight">
              Work History.
              <span className="block text-gray-500 dark:text-gray-400 text-2xl sm:text-3xl lg:text-4xl font-normal mt-1">
                Real engineering responsibilities and shipped systems.
              </span>
            </h2>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-gray-500 dark:text-gray-400">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            <span>2022 — Present &bull; 5 Track Roles</span>
          </div>
        </div>

        {/* Experience Timeline Grid / Stack with Kepha rounded-[16px] cards */}
        <div className="space-y-6">
          {EXPERIENCES.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className={`rounded-[16px] border p-6 sm:p-8 transition-all duration-300 ${
                exp.current
                  ? "border-[#1a3a35]/40 dark:border-emerald-500/30 bg-white dark:bg-gray-900/80 shadow-md"
                  : "border-gray-200 dark:border-gray-800/80 bg-white dark:bg-gray-900/40 hover:border-gray-300 dark:hover:border-gray-700"
              }`}
            >
              {/* Header Row */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-gray-100 dark:border-gray-800">
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
                      {exp.role}
                    </h3>
                    {exp.current && (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20">
                        Present Role
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-base font-semibold text-[#1a3a35] dark:text-emerald-400">
                    {exp.company}
                  </p>
                </div>

                {/* Period & Location Pills */}
                <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-gray-500 dark:text-gray-400">
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-50 dark:bg-gray-800/70 border border-gray-100 dark:border-gray-700/60">
                    <Calendar className="w-3.5 h-3.5 text-[#1a3a35] dark:text-emerald-400" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-50 dark:bg-gray-800/70 border border-gray-100 dark:border-gray-700/60">
                    <MapPin className="w-3.5 h-3.5 text-[#1a3a35] dark:text-emerald-400" />
                    <span>{exp.location}</span>
                  </div>
                  <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-50 dark:bg-gray-800/70 border border-gray-100 dark:border-gray-700/60">
                    <Briefcase className="w-3.5 h-3.5 text-[#1a3a35] dark:text-emerald-400" />
                    <span>{exp.type}</span>
                  </div>
                </div>
              </div>

              {/* Role Scope */}
              <p className="mt-5 text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed max-w-4xl">
                {exp.description}
              </p>

              {/* Achievements with Kepha subtle checkmarks */}
              <div className="mt-6 pt-5 border-t border-gray-100 dark:border-gray-800/60">
                <span className="text-[11px] font-mono uppercase tracking-widest text-gray-400 block mb-3">
                  Key Outcomes &amp; Deliverables
                </span>
                <div className="grid md:grid-cols-3 gap-3">
                  {exp.achievements.map((ach) => (
                    <div
                      key={ach}
                      className="p-3.5 rounded-[12px] bg-gray-50 dark:bg-gray-800/40 border border-gray-100 dark:border-gray-800 flex items-start gap-2.5 text-xs text-gray-700 dark:text-gray-300"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#1a3a35] dark:text-emerald-400 mt-0.5 flex-shrink-0" />
                      <span className="leading-snug">{ach}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
