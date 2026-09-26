import { Link } from "react-router-dom";
import { ArrowRight, Zap, Clock, ShieldCheck, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

export const ResultsSection = () => {
  const standards = [
    {
      icon: Zap,
      title: "Performance & Core Vitals",
      description: "Sub-second initial loads, optimized assets, and zero cumulative layout shift across real-world mobile networks.",
    },
    {
      icon: ShieldCheck,
      title: "Type Safety & Maintainability",
      description: "Modular React and strict TypeScript that prevent regressions, simplify refactoring, and scale cleanly.",
    },
    {
      icon: TrendingUp,
      title: "Clear Information Hierarchy",
      description: "Direct copywriting, intuitive user journeys, and friction-free forms so visitors accomplish tasks effortlessly.",
    },
    {
      icon: Clock,
      title: "Resilient Backends & Data",
      description: "Predictable REST endpoints, relational data schemas, and graceful client error handling.",
    },
  ];

  return (
    <section id="standards" className="relative bg-background dark:bg-background py-16 lg:py-24 overflow-hidden transition-colors duration-300 border-b border-gray-200 dark:border-gray-800">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-20 items-start">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 mb-4">
              <p className="text-xs font-mono font-semibold text-[#1a3a35] dark:text-emerald-400 uppercase tracking-widest">
                ENGINEERING STANDARDS
              </p>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-[1.1] mb-6 tracking-tight">
              What I Prioritize.
            </h2>

            <p className="text-base text-gray-600 dark:text-gray-400 mb-8 max-w-md leading-relaxed">
              I build software around practical constraints. Fast load times, clean typed code, accessible UI, and dependable backend APIs make products reliable and inexpensive to maintain.
            </p>

            <Link to="/projects">
              <button
                type="button"
                className="group bg-[#1a3a35] hover:bg-[#142d29] text-white font-semibold px-7 py-3 rounded-full transition-all duration-300 inline-flex items-center gap-2 shadow-sm hover:scale-[1.02] text-xs uppercase tracking-wider"
              >
                <span>View Shipped Work</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </Link>
          </motion.div>

          {/* Right Column: 2x2 Grid of Engineering Principles */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10 border-t sm:border-t-0 pt-8 sm:pt-0 border-gray-200 dark:border-gray-800">
            {standards.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group"
              >
                <div className="mb-4 inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gray-100 border border-gray-200 text-[#1a3a35] dark:bg-white/5 dark:border-white/10 dark:text-emerald-400">
                  <item.icon className="w-5 h-5" />
                </div>

                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-xs sm:text-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
