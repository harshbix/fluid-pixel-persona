import React from "react";
import { Cpu, BookOpen, Sparkles, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { PERSONAL_DIMENSIONS } from "../../data/portfolioData";

const iconMap: Record<string, typeof Cpu> = {
  Cpu,
  BookOpen,
  Sparkles,
};

export const DimensionsSection: React.FC = () => {
  return (
    <section id="dimensions" className="py-16 lg:py-24 px-6 lg:px-8 bg-background border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Editorial Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-block px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-xs font-mono font-semibold uppercase tracking-widest text-[#1a3a35] dark:text-emerald-400 mb-3">
              <span>BEYOND THE BROWSER</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight">
              Hardware. Education. Movement.
            </h2>
          </div>

          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-md font-normal leading-relaxed">
            Software engineering backed by workstation hardware, technical education, and physical discipline.
          </p>
        </div>

        {/* 3 Pillars - Editorial 3-Column Split (Unboxed) */}
        <div className="border-t border-b border-gray-200 dark:border-gray-800 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200 dark:divide-gray-800">
          {PERSONAL_DIMENSIONS.map((item, idx) => {
            const Icon = iconMap[item.icon] || Cpu;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="py-8 md:px-7 first:pl-0 last:pr-0 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar with Icon and Brand Pill */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-[#1a3a35] dark:text-emerald-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-gray-400">
                      {item.label}
                    </span>
                  </div>

                  {/* Title & Highlight */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white tracking-tight mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#1a3a35] dark:text-emerald-400 uppercase tracking-wider mb-3">
                    {item.highlight}
                  </p>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {/* Bullets */}
                  <ul className="space-y-2 mb-8 border-t border-gray-100 dark:border-gray-800/80 pt-4">
                    {item.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#1a3a35] dark:text-emerald-400 mt-0.5 flex-shrink-0" />
                        <span className="leading-snug">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Link */}
                <div className="pt-4 border-t border-gray-100 dark:border-gray-800/80">
                  <a
                    href={item.actionUrl}
                    target={item.actionUrl.startsWith("http") ? "_blank" : undefined}
                    rel={item.actionUrl.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-gray-900 dark:text-white hover:text-[#1a3a35] dark:hover:text-emerald-400 transition-colors"
                  >
                    <span>{item.actionText}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
