import { useState } from "react";
import { Link } from "react-router-dom";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { PROJECTS } from "../../data/portfolioData";

export const SelectedWorkSection = () => {
  const [filter, setFilter] = useState<string>("All");

  const categories = ["All", "Full-Stack", "Frontend", "Design & Systems"];

  const filteredProjects =
    filter === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === filter);

  const featured = PROJECTS.find((p) => p.featured) || PROJECTS[0];
  const secondaries = filteredProjects.filter((p) => p.id !== featured.id);

  return (
    <section id="selected-work" className="bg-background dark:bg-background py-16 lg:py-24 transition-colors duration-300 border-b border-gray-200 dark:border-gray-800">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header row with filter */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-block px-3 py-1.5 rounded-md bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 mb-3 shadow-sm">
              <p className="text-xs font-semibold text-gray-800 dark:text-gray-200 uppercase tracking-wider">
                FEATURED WORK
              </p>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white tracking-[-0.03em]">
              Selected Projects
            </h2>
            <p className="mt-2 text-base text-gray-600 dark:text-gray-400 max-w-xl">
              Real products, clean architectures, and live web systems engineered for performance and reliability.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                  filter === cat
                    ? "bg-[#1a3a35] dark:bg-emerald-600 text-white shadow-sm"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Project Showcase */}
        {(filter === "All" || featured.category === filter) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/60 overflow-hidden shadow-sm hover:border-[#1a3a35] dark:hover:border-emerald-500/40 transition-all duration-300"
          >
            <div className="grid lg:grid-cols-2 gap-8 p-6 sm:p-10 items-center">
              <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 aspect-[16/10] bg-gray-100 dark:bg-gray-800 relative group">
                <img
                  src={featured.image}
                  alt={featured.imageAlt || featured.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="eager"
                />
              </div>

              <div className="space-y-5">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-[#1a3a35]/10 dark:bg-emerald-500/20 text-[#1a3a35] dark:text-emerald-300 text-xs font-semibold uppercase tracking-wider">
                    {featured.category}
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400 font-mono">{featured.timeline}</span>
                </div>

                <h3 className="text-3xl font-bold text-gray-900 dark:text-white tracking-tight">
                  {featured.title}
                </h3>

                <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                  {featured.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {featured.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md bg-gray-100 dark:bg-gray-800 text-xs text-gray-700 dark:text-gray-300 font-mono"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="pt-4 flex flex-wrap items-center gap-3">
                  <a
                    href={featured.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1a3a35] hover:bg-[#142d29] text-white text-xs font-bold uppercase tracking-wider shadow-md transition-all"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  {featured.githubUrl && (
                    <a
                      href={featured.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white text-xs font-semibold uppercase tracking-wider hover:bg-gray-50 dark:hover:bg-gray-700 transition-all"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Code</span>
                    </a>
                  )}

                  <Link
                    to={`/projects/${featured.slug}`}
                    className="text-xs font-bold text-[#1a3a35] dark:text-emerald-400 hover:underline ml-auto"
                  >
                    Case Study &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Secondary Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {secondaries.map((project, idx) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="group bg-white dark:bg-gray-900/60 rounded-xl border border-gray-200 dark:border-gray-800 p-5 flex flex-col justify-between shadow-sm hover:border-[#1a3a35] dark:hover:border-emerald-500/40 transition-all duration-300"
              >
                <div>
                  <div className="rounded-lg overflow-hidden border border-gray-200 dark:border-gray-800 aspect-[16/10] bg-gray-100 dark:bg-gray-800 relative mb-4">
                    <img
                      src={project.image}
                      alt={project.imageAlt || project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-0.5 rounded-full bg-black/70 text-white text-[10px] font-semibold backdrop-blur-md">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-[#1a3a35] dark:group-hover:text-emerald-400 transition-colors">
                    {project.title}
                  </h4>

                  <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                    {project.summary}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[10px] font-mono text-gray-600 dark:text-gray-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-[#1a3a35] hover:text-white hover:border-[#1a3a35] transition-all"
                      aria-label={`Open ${project.title}`}
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
                        aria-label={`GitHub for ${project.title}`}
                      >
                        <Github className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>

                  <Link
                    to={`/projects/${project.slug}`}
                    className="text-xs font-bold text-[#1a3a35] dark:text-emerald-400 hover:underline"
                  >
                    Case Study &rarr;
                  </Link>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 font-semibold text-xs uppercase tracking-wider text-gray-900 dark:text-white transition-all shadow-sm"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
