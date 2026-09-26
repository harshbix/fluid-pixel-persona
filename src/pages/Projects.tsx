import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Github, ExternalLink, ArrowRight, Layers } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SEO } from "../seo";
import { ConversionCTASection } from "../components/home/ConversionCTASection";
import { SiteFooter } from "../components/layout/SiteFooter";
import { PROJECTS } from "../data/portfolioData";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "Full-Stack", "Frontend", "Design & Systems"];

  const filtered =
    activeCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <>
      <SEO
        title="Selected Work & Case Studies | Junior Jeconia"
        description="Explore production web applications, open-source utilities, and digital platforms built by Junior Jeconia using React, TypeScript, Node.js, and modern architecture."
        url="https://jeconiajunior.vercel.app/projects"
      />

      <main className="relative z-10 pt-10">
        {/* Page Hero - Minimal Apple style */}
        <section className="px-6 lg:px-8 py-16 md:py-24 border-b border-gray-200 dark:border-gray-800 relative bg-background">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-3xl"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-xs font-mono font-semibold uppercase tracking-widest text-[#1a3a35] dark:text-emerald-400 mb-4">
                <Layers className="w-3.5 h-3.5" />
                <span>Selected Work &bull; Shipped Systems</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white leading-[1.05]">
                Proof of Work.
                <span className="block text-gray-500 dark:text-gray-400 text-2xl sm:text-4xl lg:text-5xl font-medium mt-1">
                  Engineered for real users.
                </span>
              </h1>

              <p className="mt-6 text-base sm:text-lg text-gray-600 dark:text-gray-300 font-normal leading-relaxed">
                Detailed breakdowns of web applications, client solutions, and tools I have engineered. Each project highlights the core challenge, system architecture, and verifiable source code.
              </p>
            </motion.div>

            {/* Filter Navigation */}
            <div className="mt-12 flex flex-wrap items-center gap-2 pt-6 border-t border-gray-200 dark:border-gray-800">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-full px-4 py-2 text-xs font-semibold tracking-wider uppercase transition-all duration-200 ${
                    activeCategory === cat
                      ? "bg-gray-900 dark:bg-white text-white dark:text-gray-900 shadow-sm"
                      : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white border border-gray-200 dark:border-gray-700"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid with Kepha rounded-[16px] cards */}
        <section className="px-6 lg:px-8 py-20 border-b border-gray-200 dark:border-gray-800 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
              <AnimatePresence>
                {filtered.map((project, index) => (
                  <motion.article
                    key={project.id}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -16 }}
                    transition={{ duration: 0.5, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
                    className="group rounded-[16px] border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/60 p-6 sm:p-8 flex flex-col justify-between hover:border-[#1a3a35] dark:hover:border-emerald-500/40 transition-all duration-300 hover:shadow-xl"
                  >
                    <div>
                      {/* Image Preview with Hover scale */}
                      <div className="rounded-[12px] overflow-hidden border border-gray-200 dark:border-gray-800 bg-gray-100 dark:bg-gray-950 aspect-[16/10] relative mb-6">
                        <img
                          src={project.image}
                          alt={project.imageAlt || project.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute top-3 left-3">
                          <span className="rounded-full bg-black/80 border border-white/20 px-3 py-1 text-xs font-mono font-semibold text-white backdrop-blur-md">
                            {project.category}
                          </span>
                        </div>
                      </div>

                      {/* Title & Timeline */}
                      <div className="flex items-center justify-between gap-4 mb-2">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white group-hover:text-[#1a3a35] dark:group-hover:text-emerald-400 transition-colors tracking-tight">
                          {project.title}
                        </h2>
                        <span className="text-xs font-mono text-gray-500 dark:text-gray-400">{project.timeline}</span>
                      </div>

                      <p className="text-sm font-medium text-gray-700 dark:text-gray-200 mb-3">
                        {project.summary}
                      </p>

                      <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
                        {project.description}
                      </p>

                      {/* Problem & Approach */}
                      <div className="rounded-[12px] border border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/40 p-4 text-xs space-y-2 mb-6">
                        <div>
                          <span className="font-mono font-bold text-gray-900 dark:text-white uppercase tracking-wider text-[10px] block mb-0.5">
                            Challenge
                          </span>
                          <span className="text-gray-600 dark:text-gray-400">{project.problem}</span>
                        </div>
                        <div className="pt-2 border-t border-gray-200/60 dark:border-gray-700/60">
                          <span className="font-mono font-bold text-[#1a3a35] dark:text-emerald-400 uppercase tracking-wider text-[10px] block mb-0.5">
                            Architecture
                          </span>
                          <span className="text-gray-600 dark:text-gray-400">{project.solution}</span>
                        </div>
                      </div>

                      {/* Tech Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-[6px] bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-2.5 py-1 text-xs font-mono text-gray-600 dark:text-gray-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Links */}
                    <div className="pt-5 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between flex-wrap gap-3">
                      <div className="flex items-center gap-2.5">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-full bg-gray-900 dark:bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 transition-all shadow-sm"
                        >
                          <span>Live Site</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>

                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 px-3.5 py-2 text-xs font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-all"
                          >
                            <Github className="w-3.5 h-3.5" />
                            <span>Code</span>
                          </a>
                        )}
                      </div>

                      <Link
                        to={`/projects/${project.slug}`}
                        className="inline-flex items-center gap-1 text-xs font-bold text-[#1a3a35] dark:text-emerald-400 hover:underline ml-auto"
                      >
                        <span>Case Study</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </motion.article>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* Conversion CTA */}
        <ConversionCTASection />
      </main>

      <SiteFooter />
    </>
  );
}
