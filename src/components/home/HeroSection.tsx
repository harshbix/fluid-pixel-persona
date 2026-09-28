import { useState } from "react";
import { ArrowRight, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { BookingModal } from "../common/BookingModal";
import { useLanguage } from "../../context/LanguageContext";

export const HeroSection = () => {
  const [bookingOpen, setBookingOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <>
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />

      <section className="relative min-h-[84vh] sm:min-h-[86vh] lg:min-h-[88vh] flex items-center justify-center p-2.5 sm:p-4">
        {/* Solid, grounded container with responsive hero background */}
        <div className="relative w-full min-h-[78vh] sm:min-h-[80vh] lg:min-h-[84vh] rounded-[16px] sm:rounded-[20px] overflow-hidden z-10 border border-gray-800/80 shadow-2xl flex items-end bg-[#0b0e14] text-white">
          {/* Background Photo - Crystal Clear & Sharp */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            {/* Responsive image container: scaled and positioned to zoom out the photo and place face higher */}
            <div className="absolute top-0 right-0 w-full h-[68%] sm:h-[74%] lg:h-full lg:w-[68%] xl:w-[62%] 2xl:w-[58%] overflow-hidden">
              <img
                src="/assets/profile.jpg"
                alt="Junior Jeconia"
                fetchPriority="high"
                loading="eager"
                className="w-full h-full object-cover object-[70%_0%] sm:object-[72%_0%] md:object-[74%_1%] lg:object-[76%_2%] xl:object-[78%_2%] contrast-[1.04] brightness-[1.02] transition-transform duration-1000 ease-out"
              />

              {/* Mobile: Gentle bottom fade so photo cleanly dissolves into the dark hero base */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0e14] via-[#0b0e14]/40 to-transparent lg:hidden" />

              {/* Desktop: Gentle left-edge fade so the text is legible while the portrait remains 100% clear */}
              <div className="absolute inset-0 hidden lg:block bg-gradient-to-r from-[#0b0e14] via-[#0b0e14]/30 to-transparent" />
            </div>

            {/* Perimeter subtle soft top and bottom borders */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0b0e14]/25 via-transparent to-[#0b0e14]/60" />
          </div>

          {/* Inner Content Grid */}
          <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pb-10 sm:pb-12 lg:pb-16 pt-24 sm:pt-28 lg:pt-32">
            <div className="grid lg:grid-cols-[1.25fr_0.75fr] gap-8 sm:gap-10 lg:gap-12 items-end w-full">
              {/* Left Column: Direct, Minimal Statement */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="space-y-4 sm:space-y-5 text-white max-w-2xl"
              >
                <p className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-semibold">
                  {t("hero.eyebrow")}
                </p>

                <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.06] text-white tracking-tight drop-shadow-md">
                  {t("hero.title")}
                </h1>

                <p className="text-sm sm:text-base lg:text-lg text-white/80 leading-relaxed font-normal">
                  {t("hero.sideNote")}
                </p>

                {/* Minimal Action Buttons */}
                <div className="flex items-center gap-3 pt-2">
                  <a
                    href="#selected-work"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-950 font-bold text-xs uppercase tracking-wider rounded-full hover:bg-gray-100 transition-all duration-200 shadow-md"
                  >
                    <span>{t("hero.viewWork")}</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>

                  <button
                    type="button"
                    onClick={() => setBookingOpen(true)}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white/[0.08] hover:bg-white/[0.14] text-white font-semibold text-xs uppercase tracking-wider rounded-full border border-white/[0.16] transition-all duration-200"
                  >
                    <Zap className="w-3.5 h-3.5 text-emerald-400 fill-current" />
                    <span>{t("nav.bookCall")}</span>
                  </button>
                </div>
              </motion.div>

              {/* Right Column: Kepha Signature Floating Consultation Box (Desktop) */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="hidden lg:flex lg:justify-end"
              >
                <div className="bg-[#1a3a35]/80 backdrop-blur-xl text-white p-6 rounded-[16px] border border-white/10 shadow-2xl max-w-xs w-full space-y-3">
                  <div className="flex items-center justify-between pb-1">
                    <h2 className="text-lg font-bold tracking-tight text-white">
                      {t("hero.cardTitle")}
                    </h2>
                    <span className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      {t("hero.available")}
                    </span>
                  </div>

                  <p className="text-xs text-white/70 leading-relaxed">
                    {t("hero.cardSubtitle")}
                  </p>

                  <button
                    type="button"
                    onClick={() => setBookingOpen(true)}
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-full bg-white text-gray-950 font-bold text-xs uppercase tracking-wider hover:bg-gray-100 transition-all duration-200 shadow-sm"
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
