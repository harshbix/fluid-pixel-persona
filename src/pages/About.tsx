import { Link } from "react-router-dom";
import { ArrowUpRight, CheckCircle2, Cpu, BookOpen, Sparkles, Globe, Terminal, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { SEO } from "../seo";
import { DimensionsSection } from "../components/home/DimensionsSection";
import { CareerSection } from "../components/home/CareerSection";
import { TechStackSection } from "../components/home/TechStackSection";
import { ConversionCTASection } from "../components/home/ConversionCTASection";
import { SiteFooter } from "../components/layout/SiteFooter";
import { PERSONAL_INFO } from "../data/portfolioData";

export default function About() {
  return (
    <>
      <SEO
        title="About Junior Jeconia | Full-Stack Developer & Systems Builder"
        description="Learn about Junior Jeconia (harshbix), full-stack developer, computer hardware specialist, tech educator, and dancer based in Dar es Salaam, Tanzania."
        url="https://jeconiajunior.vercel.app/about"
      />

      <main className="relative z-10 pt-10">
        {/* Page Hero - Minimal Apple Style */}
        <section className="px-6 lg:px-8 py-16 md:py-24 border-b border-gray-200 dark:border-gray-800 relative bg-background">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-3xl"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-xs font-mono font-semibold uppercase tracking-widest text-[#1a3a35] dark:text-emerald-400 mb-4">
                <span>About &bull; Philosophy</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white leading-[1.05]">
                Engineering First.
                <span className="block text-gray-500 dark:text-gray-400 text-2xl sm:text-4xl lg:text-5xl font-medium mt-1">
                  Design by obsession.
                </span>
              </h1>

              <p className="mt-6 text-base sm:text-lg text-gray-600 dark:text-gray-300 font-normal leading-relaxed">
                I am Junior Jeconia (online as <strong className="text-gray-900 dark:text-white font-semibold">harshbix</strong>), a full-stack developer based in Dar es Salaam, Tanzania. I turn complex requirements into clean, fast, and dependable digital products.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Narrative Section with Kepha card layout */}
        <section className="px-6 lg:px-8 py-20 border-b border-gray-200 dark:border-gray-800 bg-background">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Story text */}
            <div className="space-y-6 text-gray-600 dark:text-gray-300 text-base md:text-lg leading-relaxed">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white tracking-tight">
                From Computer Hardware to Full-Stack Software
              </h2>
              <p>
                My foundation began in physical computing and enterprise systems at <span className="text-gray-900 dark:text-white font-semibold">Bixx Tech</span>, configuring performance workstations and managing mission-critical hardware.
              </p>
              <p>
                Later, modernizing logistical infrastructure at <span className="text-gray-900 dark:text-white font-semibold">Tanzania Posts Corporation</span> solidified a standard: software must perform reliably under low bandwidth and real device constraints.
              </p>
              <p>
                Today, at <span className="text-gray-900 dark:text-white font-semibold">Farols Company</span> and across independent products, I build web applications that load fast and work reliably.
              </p>

              {/* Callout Quote */}
              <div className="mt-6 p-6 rounded-[16px] border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/60">
                <p className="text-gray-900 dark:text-white font-semibold text-base mb-2">
                  &ldquo;A digital product is finished when real people accomplish their goal with zero friction.&rdquo;
                </p>
                <span className="text-xs font-mono text-[#1a3a35] dark:text-emerald-400">
                  — Junior Jeconia
                </span>
              </div>
            </div>

            {/* Visual Discipline Cards - Kepha Geometry */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-6 rounded-[16px] border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/60 space-y-3">
                <div className="w-10 h-10 rounded-[10px] bg-[#1a3a35] text-white flex items-center justify-center">
                  <Cpu className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-gray-900 dark:text-white">Computer Hardware</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                  Bixx Tech: Custom PC builds, workstations, diagnostics, and component procurement.
                </p>
              </div>

              <div className="p-6 rounded-[16px] border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/60 space-y-3">
                <div className="w-10 h-10 rounded-[10px] bg-[#1a3a35] text-white flex items-center justify-center">
                  <BookOpen className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-gray-900 dark:text-white">Tech Education</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                  Bixx Tech: Coding tutorials, developer workshops, and practical software mentorship.
                </p>
              </div>

              <div className="p-6 rounded-[16px] border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/60 space-y-3">
                <div className="w-10 h-10 rounded-[10px] bg-[#1a3a35] text-white flex items-center justify-center">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-gray-900 dark:text-white">Dance &amp; Motion</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                  Performing arts &amp; movement craft directly inspiring rhythmic UI physics and transitions.
                </p>
              </div>

              <div className="p-6 rounded-[16px] border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/60 space-y-3">
                <div className="w-10 h-10 rounded-[10px] bg-[#1a3a35] text-white flex items-center justify-center">
                  <Terminal className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-gray-900 dark:text-white">Full-Stack Code</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                  React, TypeScript, Next.js, Node.js, and PostgreSQL built for high-throughput production.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3 Core Dimensions Component */}
        <DimensionsSection />

        {/* Core Principles */}
        <section className="px-6 lg:px-8 py-20 border-b border-gray-200 dark:border-gray-800 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#1a3a35] dark:text-emerald-400 block mb-2">
                Standards
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                How I Approach Software
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {PERSONAL_INFO.coreValues.map((val, idx) => (
                <div
                  key={val.title}
                  className="rounded-[16px] border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/60 p-6 flex flex-col justify-between"
                >
                  <span className="font-mono text-xs font-bold text-[#1a3a35] dark:text-emerald-400 mb-4 block">
                    0{idx + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{val.title}</h3>
                    <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                      {val.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Full Career Experience Section */}
        <CareerSection />

        {/* Full Tech Stack Matrix */}
        <TechStackSection />

        {/* Conversion CTA */}
        <ConversionCTASection />
      </main>

      <SiteFooter />
    </>
  );
}
