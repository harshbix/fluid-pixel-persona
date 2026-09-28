import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Sun, Moon, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../../hooks/useTheme";
import { useLanguage } from "../../context/LanguageContext";
import { BookingModal } from "../common/BookingModal";
import { BrandLogo } from "../common/BrandLogo";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  const { language, toggleLanguage, setLanguage, t } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  const navLinks = [
    { to: "/projects", label: t("nav.projects") },
    { to: "/services", label: t("nav.services") },
    { to: "/about", label: t("nav.about") },
    { to: "/products", label: t("nav.products") },
    { to: "/notes", label: t("nav.blog") },
    { to: "/contact", label: t("nav.contact") },
  ];

  return (
    <>
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />

      <header
        className={`fixed top-0 left-0 right-0 z-50 w-full h-16 transition-all duration-200 ${
          scrolled
            ? "bg-white/95 dark:bg-gray-950/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 shadow-sm"
            : "bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border-b border-gray-200/50 dark:border-gray-800/50"
        }`}
      >
        <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo - Pure Iconic Crossing Rings (No Redundant Name/Location) */}
          <Link
            to="/"
            className="flex items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1a3a35] dark:focus-visible:ring-emerald-400 rounded-lg p-1"
            aria-label="Junior Jeconia — Home"
          >
            <BrandLogo size="md" showText={false} />
          </Link>

          {/* Center Navigation Links with Active State */}
          <nav className="hidden md:flex items-center gap-4 lg:gap-6 xl:gap-8" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const active = isActive(link.to);
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`text-xs font-semibold uppercase tracking-wider transition-colors duration-150 relative py-1 ${
                    active
                      ? "text-gray-950 dark:text-white"
                      : "text-gray-600 dark:text-gray-400 hover:text-gray-950 dark:hover:text-white"
                  }`}
                >
                  <span>{link.label}</span>
                  {active && (
                    <motion.div
                      layoutId="nav-active-indicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#1a3a35] dark:bg-emerald-400 rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Header Controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Segmented Language Switcher (EN / SW) */}
            <div
              role="group"
              aria-label="Language selection"
              className="inline-flex items-center rounded-full p-0.5 border border-gray-200 dark:border-gray-800 bg-gray-100/90 dark:bg-gray-800/90 text-[11px] font-mono font-semibold"
            >
              <button
                type="button"
                onClick={() => setLanguage("en")}
                aria-pressed={language === "en"}
                aria-label="English language"
                className={`px-2.5 py-1 rounded-full transition-all duration-150 ${
                  language === "en"
                    ? "bg-white dark:bg-gray-900 text-gray-950 dark:text-white shadow-xs font-bold"
                    : "text-gray-500 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLanguage("sw")}
                aria-pressed={language === "sw"}
                aria-label="Lugha ya Kiswahili"
                className={`px-2.5 py-1 rounded-full transition-all duration-150 ${
                  language === "sw"
                    ? "bg-white dark:bg-gray-900 text-gray-950 dark:text-white shadow-xs font-bold"
                    : "text-gray-500 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                SW
              </button>
            </div>

            {/* Theme Toggle Button */}
            <button
              type="button"
              onClick={toggleTheme}
              className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1a3a35] dark:focus-visible:ring-emerald-400"
              aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
              title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-gray-700" />}
            </button>

            {/* Standout "Book a Call" CTA */}
            <button
              type="button"
              onClick={() => setBookingOpen(true)}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 bg-[#1a3a35] hover:bg-[#132c28] text-white text-xs font-bold uppercase tracking-wider rounded-full transition-all duration-200 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#1a3a35]"
            >
              <Zap className="w-3.5 h-3.5 fill-current text-emerald-300" />
              <span>{t("nav.bookCall")}</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setOpen(!open)}
              className="md:hidden p-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
              aria-expanded={open}
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
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-xs bg-white dark:bg-gray-950 border-l border-gray-200 dark:border-gray-800 p-6 flex flex-col justify-between shadow-2xl md:hidden"
            >
              <div>
                <div className="flex items-center justify-between pb-5 border-b border-gray-200 dark:border-gray-800 mb-6">
                  <BrandLogo size="sm" showText={false} />
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    aria-label="Close navigation menu"
                    className="p-1.5 rounded-lg text-gray-500 hover:text-gray-900 dark:hover:text-white"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <nav className="flex flex-col gap-1.5" aria-label="Mobile Navigation">
                  <Link
                    to="/"
                    onClick={() => setOpen(false)}
                    className={`py-2.5 px-3 rounded-lg text-sm font-semibold transition-colors ${
                      location.pathname === "/"
                        ? "bg-[#1a3a35]/10 dark:bg-emerald-500/10 text-[#1a3a35] dark:text-emerald-400 font-bold"
                        : "text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                    }`}
                  >
                    {t("nav.home")}
                  </Link>

                  {navLinks.map((link) => {
                    const active = isActive(link.to);
                    return (
                      <Link
                        key={link.to}
                        to={link.to}
                        onClick={() => setOpen(false)}
                        className={`py-2.5 px-3 rounded-lg text-sm font-semibold transition-colors ${
                          active
                            ? "bg-[#1a3a35]/10 dark:bg-emerald-500/10 text-[#1a3a35] dark:text-emerald-400 font-bold"
                            : "text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                        }`}
                      >
                        {link.label}
                      </Link>
                    );
                  })}

                  <Link
                    to="/resume"
                    onClick={() => setOpen(false)}
                    className={`py-2.5 px-3 rounded-lg text-sm font-semibold transition-colors ${
                      isActive("/resume")
                        ? "bg-[#1a3a35]/10 dark:bg-emerald-500/10 text-[#1a3a35] dark:text-emerald-400 font-bold"
                        : "text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                    }`}
                  >
                    {t("nav.resume")}
                  </Link>
                </nav>
              </div>

              <div className="pt-4 border-t border-gray-200 dark:border-gray-800 space-y-3">
                <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                  <span className="font-medium">{t("nav.language")}</span>
                  <div
                    role="group"
                    aria-label="Language selection"
                    className="inline-flex items-center rounded-full p-0.5 border border-gray-200 dark:border-gray-800 bg-gray-100 dark:bg-gray-800 text-xs font-mono"
                  >
                    <button
                      type="button"
                      onClick={() => setLanguage("en")}
                      aria-pressed={language === "en"}
                      className={`px-3 py-1 rounded-full font-bold transition-all ${
                        language === "en"
                          ? "bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow-xs"
                          : "text-gray-500 hover:text-gray-900 dark:hover:text-white"
                      }`}
                    >
                      English
                    </button>
                    <button
                      type="button"
                      onClick={() => setLanguage("sw")}
                      aria-pressed={language === "sw"}
                      className={`px-3 py-1 rounded-full font-bold transition-all ${
                        language === "sw"
                          ? "bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow-xs"
                          : "text-gray-500 hover:text-gray-900 dark:hover:text-white"
                      }`}
                    >
                      Kiswahili
                    </button>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setOpen(false);
                    setBookingOpen(true);
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-[#1a3a35] text-white font-semibold text-xs uppercase tracking-wider shadow-sm"
                >
                  <Zap className="w-3.5 h-3.5 fill-current text-emerald-300" />
                  <span>{t("nav.bookCall")}</span>
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
