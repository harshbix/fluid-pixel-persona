import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Zap, ArrowUpRight, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import { BookingModal } from "../common/BookingModal";
import { useLanguage } from "../../context/LanguageContext";
import { PERSONAL_INFO } from "../../data/portfolioData";

export const HeroSection = () => {
  const [bookingOpen, setBookingOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <>
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />

      <section className="relative min-h-[82vh] lg:min-h-[86vh] flex items-center justify-center p-3 sm:p-4">
        {/* Solid, grounded container without excessive artificial decorations */}
        <div className="relative w-full min-h-[76vh] lg:min-h-[82vh] rounded-[16px] overflow-hidden z-10 border border-gray-200 dark:border-gray-800 shadow-sm flex items-end bg-[#0e1115] text-white">
          {/* Natural subtle ambient background - no glowing blobs or grid mesh */}
          <div className="absolute inset-0 pointer-events-none z-0 bg-[radial-gradient(ellipse_70%_50%_at_80%_20%,rgba(26,58,53,0.35),transparent_70%)]" />

          {/* Inner Content Grid */}
          <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 pb-12 lg:pb-16 pt-20 sm:pt-24">
            <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10 lg:gap-14 items-end w-full">
              {/* Left Column: Personal, Grounded Statement */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="space-y-6 text-white"
              >
                <div className="space-y-4">
                  <p className="text-xs sm:text-sm font-mono uppercase tracking-wider text-emerald-400">
                    Frontend-leaning Full-Stack Developer
                  </p>
                  <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-[1.08] text-white tracking-tight">
                    I design and build websites, web applications, and digital systems.
                  </h1>
                  <p className="text-base sm:text-lg text-white/80 max-w-lg leading-relaxed font-normal">
                    I also sell computers, teach tech, and dance.
                  </p>
                </div>

                {/* Clean, Non-Jumping Action Buttons */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <a
                    href="#selected-work"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-950 font-bold text-xs uppercase tracking-wider rounded-full hover:bg-gray-100 transition-all duration-200 shadow-sm"
                  >
                    <span>{t("hero.viewWork")}</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>

                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white/[0.08] hover:bg-white/[0.14] text-white font-semibold text-xs uppercase tracking-wider rounded-full border border-white/[0.16] transition-all duration-200"
                  >
                    <span>{t("hero.contact")}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-75" />
                  </Link>
                </div>

                {/* Verified Social & Status */}
                <div className="flex flex-wrap items-center gap-4 pt-1 text-xs text-white/70 font-mono">
                  <a
                    href={PERSONAL_INFO.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors inline-flex items-center gap-1.5"
                  >
                    <Github className="w-3.5 h-3.5" />
                    GitHub
                  </a>
                  <a
                    href={PERSONAL_INFO.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors inline-flex items-center gap-1.5"
                  >
                    <Linkedin className="w-3.5 h-3.5" />
                    LinkedIn
                  </a>
                  <span className="text-white/30 hidden sm:inline">&bull;</span>
                  <span className="text-emerald-400 flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    {t("hero.available")}
                  </span>
                </div>
              </motion.div>

              {/* Right Column: Kepha Signature Floating Consultation Box */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="lg:flex lg:justify-end"
              >
                <div className="bg-[#1a3a35] text-white p-6 sm:p-8 rounded-[16px] border border-emerald-500/20 shadow-xl max-w-sm w-full space-y-4">
                  <div className="flex items-center justify-between pb-2 border-b border-white/10">
                    <span className="text-xs font-mono font-semibold uppercase tracking-widest text-emerald-300">
                      Discovery
                    </span>
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  </div>

                  <h2 className="text-2xl font-bold tracking-tight text-white">
                    {t("hero.cardTitle")}
                  </h2>

                  <p className="text-xs text-white/80 leading-relaxed">
                    {t("hero.cardSubtitle")}
                  </p>

                  <button
                    type="button"
                    onClick={() => setBookingOpen(true)}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full bg-white text-gray-950 font-bold text-xs uppercase tracking-wider hover:bg-gray-100 transition-all duration-200 shadow-sm"
                  >
                    <Zap className="w-3.5 h-3.5 text-[#1a3a35] fill-current" />
                    <span>{t("hero.cardBtn")}</span>
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
