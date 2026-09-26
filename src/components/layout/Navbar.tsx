import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Sun, Moon, Zap, ChevronDown, FileText, HelpCircle, Layers, Package } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../../hooks/useTheme";
import { useLanguage } from "../../context/LanguageContext";
import { BookingModal } from "../common/BookingModal";
import { BrandLogo } from "../common/BrandLogo";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
    setMoreOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />

      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "bg-white/95 dark:bg-[#0c0f12]/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 shadow-sm py-3"
            : "bg-transparent py-4 sm:py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo - Audi 2-circle crossing style */}
          <Link to="/" className="flex items-center group">
            <BrandLogo size="md" />
          </Link>

          {/* Center Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            <Link
              to="/#services"
              className="text-sm font-medium transition-colors duration-200 text-gray-600 dark:text-gray-300 hover:text-[#1a3a35] dark:hover:text-emerald-400"
            >
              {t("nav.services")}
            </Link>
            <Link
              to="/projects"
              className="text-sm font-medium transition-colors duration-200 text-gray-600 dark:text-gray-300 hover:text-[#1a3a35] dark:hover:text-emerald-400"
            >
              {t("nav.projects")}
            </Link>
            <Link
              to="/products"
              className="text-sm font-medium transition-colors duration-200 text-gray-600 dark:text-gray-300 hover:text-[#1a3a35] dark:hover:text-emerald-400 inline-flex items-center gap-1.5"
            >
              <span>{t("nav.products")}</span>
              <span className="px-1.5 py-0.5 text-[9px] font-mono font-semibold uppercase tracking-wider bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-full">
                {t("common.new")}
              </span>
            </Link>
            <Link
              to="/about"
              className="text-sm font-medium transition-colors duration-200 text-gray-600 dark:text-gray-300 hover:text-[#1a3a35] dark:hover:text-emerald-400"
            >
              {t("nav.about")}
            </Link>
            <Link
              to="/notes"
              className="text-sm font-medium transition-colors duration-200 text-gray-600 dark:text-gray-300 hover:text-[#1a3a35] dark:hover:text-emerald-400"
            >
              {t("nav.blog")}
            </Link>
            <Link
              to="/contact"
              className="text-sm font-medium transition-colors duration-200 text-gray-600 dark:text-gray-300 hover:text-[#1a3a35] dark:hover:text-emerald-400"
            >
              {t("nav.contact")}
            </Link>

            {/* "More" Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setMoreOpen(!moreOpen)}
                className="inline-flex items-center gap-1 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-[#1a3a35] dark:hover:text-emerald-400 transition-colors duration-200"
                aria-expanded={moreOpen}
              >
                <span>{t("nav.more")}</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${moreOpen ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {moreOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    className="absolute top-full right-0 mt-2 w-52 rounded-[14px] bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-xl p-1.5 z-50"
                  >
                    <Link
                      to="/resume"
                      onClick={() => setMoreOpen(false)}
                      className="flex items-center gap-2.5 px-3 py-2 text-xs font-semibold text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                    >
                      <FileText className="w-3.5 h-3.5 text-[#1a3a35] dark:text-emerald-400" />
                      {t("nav.resume")}
                    </Link>
                    <Link
                      to="/services"
                      onClick={() => setMoreOpen(false)}
                      className="flex items-center gap-2.5 px-3 py-2 text-xs font-semibold text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                    >
                      <Layers className="w-3.5 h-3.5 text-[#1a3a35] dark:text-emerald-400" />
                      Process &amp; Workflow
                    </Link>
                    <Link
                      to="/products"
                      onClick={() => setMoreOpen(false)}
                      className="flex items-center gap-2.5 px-3 py-2 text-xs font-semibold text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                    >
                      <Package className="w-3.5 h-3.5 text-[#1a3a35] dark:text-emerald-400" />
                      Ebooks &amp; Blueprints
                    </Link>
                    <a
                      href="/#faq"
                      onClick={() => setMoreOpen(false)}
                      className="flex items-center gap-2.5 px-3 py-2 text-xs font-semibold text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                    >
                      <HelpCircle className="w-3.5 h-3.5 text-[#1a3a35] dark:text-emerald-400" />
                      FAQ
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* Right Header Controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Simple Unobtrusive Language Switcher (EN / SW) */}
            <button
              type="button"
              onClick={toggleLanguage}
              aria-label={language === "en" ? "Switch language to Swahili" : "Switch language to English"}
              className="px-2.5 py-1 rounded-md text-xs font-mono font-bold tracking-wider uppercase text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-colors"
              title={language === "en" ? "Badili kwenda Kiswahili" : "Switch to English"}
            >
              {language === "en" ? "SW" : "EN"}
            </button>

            {/* Theme Toggle Button */}
            <button
              type="button"
              onClick={toggleTheme}
              className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors focus:outline-none"
              aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
              title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-gray-700" />}
            </button>

            {/* Standout "Book a Call" button */}
            <button
              type="button"
              onClick={() => setBookingOpen(true)}
              className="hidden lg:flex items-center gap-2 px-4 py-2 bg-[#1a3a35] hover:bg-[#132c28] text-white text-xs font-bold uppercase tracking-wider rounded-full transition-all duration-200 shadow-sm"
            >
              <Zap className="w-3.5 h-3.5 fill-current text-emerald-300" />
              <span>{t("nav.bookCall")}</span>
            </button>

            {/* Mobile Hamburger */}
            <button
              type="button"
              onClick={() => setOpen(!open)}
              className="lg:hidden p-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
              aria-label="Toggle navigation menu"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-xs bg-white dark:bg-gray-950 border-l border-gray-200 dark:border-gray-800 p-6 flex flex-col justify-between shadow-2xl lg:hidden"
            >
              <div>
                <div className="flex items-center justify-between pb-5 border-b border-gray-200 dark:border-gray-800 mb-6">
                  <BrandLogo size="sm" />
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    aria-label="Close navigation menu"
                    className="p-1.5 rounded-lg text-gray-500 hover:text-gray-900 dark:hover:text-white"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <nav className="flex flex-col gap-1">
                  <Link
                    to="/"
                    onClick={() => setOpen(false)}
                    className="py-2 px-3 rounded-lg text-sm font-semibold text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                  >
                    {t("nav.home")}
                  </Link>
                  <Link
                    to="/#services"
                    onClick={() => setOpen(false)}
                    className="py-2 px-3 rounded-lg text-sm font-semibold text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                  >
                    {t("nav.services")}
                  </Link>
                  <Link
                    to="/projects"
                    onClick={() => setOpen(false)}
                    className="py-2 px-3 rounded-lg text-sm font-semibold text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                  >
                    {t("nav.projects")}
                  </Link>
                  <Link
                    to="/products"
                    onClick={() => setOpen(false)}
                    className="py-2 px-3 rounded-lg text-sm font-semibold text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 flex items-center justify-between"
                  >
                    <span>{t("nav.products")}</span>
                    <span className="px-2 py-0.5 text-[9px] font-mono font-semibold uppercase tracking-wider bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-full">
                      {t("common.new")}
                    </span>
                  </Link>
                  <Link
                    to="/about"
                    onClick={() => setOpen(false)}
                    className="py-2 px-3 rounded-lg text-sm font-semibold text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                  >
                    {t("nav.about")}
                  </Link>
                  <Link
                    to="/notes"
                    onClick={() => setOpen(false)}
                    className="py-2 px-3 rounded-lg text-sm font-semibold text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                  >
                    {t("nav.blog")}
                  </Link>
                  <Link
                    to="/contact"
                    onClick={() => setOpen(false)}
                    className="py-2 px-3 rounded-lg text-sm font-semibold text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                  >
                    {t("nav.contact")}
                  </Link>
                  <Link
                    to="/resume"
                    onClick={() => setOpen(false)}
                    className="py-2 px-3 rounded-lg text-sm font-semibold text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                  >
                    {t("nav.resume")}
                  </Link>
                </nav>
              </div>

              <div className="pt-4 border-t border-gray-200 dark:border-gray-800 space-y-3">
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>Language</span>
                  <button
                    type="button"
                    onClick={toggleLanguage}
                    className="px-2.5 py-1 rounded border border-gray-200 dark:border-gray-800 font-mono font-bold text-gray-900 dark:text-white"
                  >
                    {language === "en" ? "Kiswahili" : "English"}
                  </button>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setOpen(false);
                    setBookingOpen(true);
                  }}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-full bg-[#1a3a35] text-white font-semibold text-xs uppercase tracking-wider shadow-sm"
                >
                  <Zap className="w-3.5 h-3.5 fill-current text-emerald-300" />
                  {t("nav.bookCall")}
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
