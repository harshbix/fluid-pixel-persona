import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, Github, ExternalLink, CheckCircle2, Layers, Cpu, Server, Globe } from "lucide-react";
import { motion } from "framer-motion";
import { SEO } from "../seo";
import { SiteFooter } from "../components/layout/SiteFooter";
import { PROJECTS } from "../data/portfolioData";
import { useLanguage } from "../context/LanguageContext";

export default function ProjectDetail() {
  const { t, tContent } = useLanguage();
  const { slug } = useParams<{ slug: string }>();

  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const currentIndex = PROJECTS.findIndex((p) => p.slug === slug);
  const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];

  const localizedSummary = tContent(project.summary);
  const localizedProblem = tContent(project.problem);
  const localizedSolution = tContent(project.solution);
  const localizedRole = tContent(project.role);
  const localizedImageAlt = tContent(project.imageAlt) || `${project.title} full interface`;
  const localizedFeatures = tContent(project.keyFeatures);
  const localizedImpact = tContent(project.impact);

  return (
    <>
      <SEO
        title={`${project.title} — ${t("work.caseStudy")} | Junior Jeconia`}
        description={localizedSummary}
        image={project.image}
        url={`https://jeconiajunior.vercel.app/projects/${project.slug}`}
      />

      <main className="relative z-10 pt-10">
        {/* Back Link & Navigation */}
        <section className="px-6 lg:px-8 pt-6 pb-4">
          <div className="max-w-5xl mx-auto">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>{t("projectDetail.back")}</span>
            </Link>
          </div>
        </section>

        {/* Hero Section */}
        <section className="px-6 lg:px-8 py-12 md:py-16 border-b border-gray-200 dark:border-gray-800 bg-background">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="rounded-full bg-emerald-500/10 border border-emerald-500/20 px-3.5 py-1 text-xs font-mono font-semibold uppercase tracking-wider text-[#1a3a35] dark:text-emerald-400">
                  {project.category}
                </span>
                <span className="text-xs font-mono text-gray-500 dark:text-gray-400">{project.timeline}</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white leading-[1.05]">
                {project.title}
              </h1>

              <p className="mt-6 text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed font-normal max-w-3xl">
                {localizedSummary}
              </p>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-gray-900 dark:bg-white px-6 py-3 text-xs font-bold uppercase tracking-wider text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 transition-all shadow-md"
                >
                  <span>{t("projectDetail.visitLive")}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-gray-800 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white transition-all"
                  >
                    <Github className="w-4 h-4" />
                    <span>{t("projectDetail.viewCode")}</span>
                  </a>
                )}
              </div>
            </motion.div>

            {/* Quick Metadata Grid */}
            <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 grid grid-cols-2 md:grid-cols-4 gap-6 text-xs font-mono">
              <div>
                <span className="text-gray-500 dark:text-gray-400 block uppercase tracking-wider text-[10px] mb-1">
                  {t("projectDetail.role")}
                </span>
                <span className="font-semibold text-gray-900 dark:text-white">{localizedRole}</span>
              </div>
              <div>
                <span className="text-gray-500 dark:text-gray-400 block uppercase tracking-wider text-[10px] mb-1">
                  {t("projectDetail.timeline")}
                </span>
                <span className="font-semibold text-gray-900 dark:text-white">{project.timeline}</span>
              </div>
              <div>
                <span className="text-gray-500 dark:text-gray-400 block uppercase tracking-wider text-[10px] mb-1">
                  {t("projectDetail.frontend")}
                </span>
                <span className="font-semibold text-gray-900 dark:text-white">{project.architecture.frontend.split(' ')[0]}</span>
              </div>
              <div>
                <span className="text-gray-500 dark:text-gray-400 block uppercase tracking-wider text-[10px] mb-1">
                  {t("projectDetail.deployment")}
                </span>
                <span className="font-semibold text-gray-900 dark:text-white">{project.architecture.deployment.split(' ')[0]}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Large Screenshot Showcase */}
        <section className="px-6 lg:px-8 py-16 border-b border-gray-200 dark:border-gray-800 bg-background">
          <div className="max-w-5xl mx-auto">
            <div className="rounded-[16px] overflow-hidden border border-gray-200 dark:border-gray-800 bg-gray-100 dark:bg-gray-950 shadow-2xl">
              <img
                src={project.image}
                alt={localizedImageAlt}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </section>

        {/* Narrative & Engineering Deep Dive */}
        <section className="px-6 lg:px-8 py-20 border-b border-gray-200 dark:border-gray-800 bg-background">
          <div className="max-w-4xl mx-auto space-y-16">
            {/* The Challenge / Problem */}
            <div>
              <p className="text-xs font-mono font-bold uppercase tracking-widest text-[#1a3a35] dark:text-emerald-400 mb-2">
                {t("projectDetail.challenge")}
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white tracking-tight mb-4">
                {t("projectDetail.challengeTitle")}
              </h2>
              <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                {localizedProblem}
              </p>
            </div>

            {/* The Architectural Solution */}
            <div>
              <p className="text-xs font-mono font-bold uppercase tracking-widest text-[#1a3a35] dark:text-emerald-400 mb-2">
                {t("projectDetail.architecture")}
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white tracking-tight mb-4">
                {t("projectDetail.architectureTitle")}
              </h2>
              <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                {localizedSolution}
              </p>

              {/* Architecture Stack Breakdown */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-[12px] border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/60">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-[#1a3a35] dark:text-emerald-400 mb-2">
                    <Globe className="w-4 h-4" />
                    {t("projectDetail.frontend")}
                  </div>
                  <p className="text-sm text-gray-900 dark:text-white font-medium">
                    {project.architecture.frontend}
                  </p>
                </div>

                <div className="p-5 rounded-[12px] border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/60">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-[#1a3a35] dark:text-emerald-400 mb-2">
                    <Layers className="w-4 h-4" />
                    {t("projectDetail.styling")}
                  </div>
                  <p className="text-sm text-gray-900 dark:text-white font-medium">
                    {project.architecture.styling}
                  </p>
                </div>

                {project.architecture.backend && (
                  <div className="p-5 rounded-[12px] border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/60">
                    <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-[#1a3a35] dark:text-emerald-400 mb-2">
                      <Server className="w-4 h-4" />
                      {t("projectDetail.backend")}
                    </div>
                    <p className="text-sm text-gray-900 dark:text-white font-medium">
                      {project.architecture.backend}
                    </p>
                  </div>
                )}

                <div className="p-5 rounded-[12px] border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/60">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-[#1a3a35] dark:text-emerald-400 mb-2">
                    <Cpu className="w-4 h-4" />
                    {t("projectDetail.deployment")}
                  </div>
                  <p className="text-sm text-gray-900 dark:text-white font-medium">
                    {project.architecture.deployment}
                  </p>
                </div>
              </div>
            </div>

            {/* Key Features */}
            <div>
              <p className="text-xs font-mono font-bold uppercase tracking-widest text-[#1a3a35] dark:text-emerald-400 mb-2">
                {t("projectDetail.features")}
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white tracking-tight mb-4">
                {t("projectDetail.featuresTitle")}
              </h2>
              <ul className="space-y-3">
                {localizedFeatures.map((feat) => (
                  <li key={feat} className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-[#1a3a35] dark:text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span className="leading-relaxed">{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Outcomes & Impact */}
            <div>
              <p className="text-xs font-mono font-bold uppercase tracking-widest text-[#1a3a35] dark:text-emerald-400 mb-2">
                {t("projectDetail.outcomes")}
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white tracking-tight mb-4">
                {t("projectDetail.outcomesTitle")}
              </h2>
              <ul className="space-y-2.5">
                {localizedImpact.map((imp) => (
                  <li key={imp} className="p-4 rounded-[12px] border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/60 text-sm text-gray-800 dark:text-gray-200">
                    &bull; {imp}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Next Project Footer Switcher */}
        <section className="px-6 lg:px-8 py-16 bg-gray-50 dark:bg-gray-900/40 border-b border-gray-200 dark:border-gray-800">
          <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-xs font-mono font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-400">
                {t("projectDetail.nextCaseStudy")}
              </span>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-1">
                {nextProject.title}
              </h3>
            </div>
            <Link
              to={`/projects/${nextProject.slug}`}
              className="inline-flex items-center gap-2 rounded-full bg-gray-900 dark:bg-white px-6 py-3 text-xs font-bold uppercase tracking-wider text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 transition-all shadow-sm"
            >
              <span>{t("projectDetail.viewNext")}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
