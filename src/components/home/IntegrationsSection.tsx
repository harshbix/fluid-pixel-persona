import { motion } from "framer-motion";

export const IntegrationsSection = () => {
  const stackGroups = [
    {
      group: "Frontend & Interfaces",
      description: "Fast, typed UI and fluid motion.",
      technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Framer Motion", "Vite"],
    },
    {
      group: "Backend & Databases",
      description: "Reliable APIs and structured storage.",
      technologies: ["Node.js", "Express", "PostgreSQL", "Supabase", "REST APIs"],
    },
    {
      group: "Workflow & Infrastructure",
      description: "Rapid iteration and zero-downtime shipping.",
      technologies: ["Git & GitHub", "Vercel", "Figma", "VS Code", "Terminal"],
    },
  ];

  return (
    <section id="stack" className="bg-background dark:bg-background py-16 lg:py-24 transition-colors duration-300 border-b border-gray-200 dark:border-gray-800">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Developer Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 mb-4">
              <p className="text-xs font-mono font-semibold text-[#1a3a35] dark:text-emerald-400 uppercase tracking-widest">
                CORE STACK
              </p>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight tracking-[-0.03em] mb-4">
              Technologies I use daily.
            </h2>

            <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed max-w-md">
              I pick tools based on predictability, type safety, and real-world performance. No hype-driven layers or unnecessary bloat.
            </p>
          </motion.div>

          {/* Right Column: Clean Grouped Editorial Rows (Unboxed) */}
          <div className="border-t border-gray-200 dark:border-gray-800 divide-y divide-gray-200 dark:divide-gray-800">
            {stackGroups.map((group, idx) => (
              <motion.div
                key={group.group}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="py-6 first:pt-0"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-3">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    {group.group}
                  </h3>
                  <span className="text-xs font-mono text-gray-500 dark:text-gray-400">
                    {group.description}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2 pt-1">
                  {group.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono font-medium bg-gray-100 dark:bg-gray-800/80 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-700"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1a3a35] dark:bg-emerald-400" />
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
