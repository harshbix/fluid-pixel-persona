import { Link } from "react-router-dom";
import { Github, Linkedin, Twitter, Instagram, Mail, Phone, ArrowUpRight } from "lucide-react";
import { PERSONAL_INFO } from "../../data/portfolioData";
import { BrandLogo } from "../common/BrandLogo";
import { useLanguage } from "../../context/LanguageContext";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 pt-16 pb-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-gray-200 dark:border-gray-800">
          {/* Col 1 & 2: Brand & Positioning */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-block group">
              <BrandLogo size="md" />
            </Link>

            <p className="text-sm text-gray-600 dark:text-gray-400 max-w-sm leading-relaxed">
              {t("footer.bio")}
            </p>

            <div className="pt-2 flex flex-col gap-2 text-xs text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#1a3a35] dark:text-emerald-400" />
                <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-gray-900 dark:hover:text-white transition-colors">
                  {PERSONAL_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#1a3a35] dark:text-emerald-400" />
                <a href={PERSONAL_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 dark:hover:text-white transition-colors">
                  {PERSONAL_INFO.phone} (WhatsApp)
                </a>
              </div>
            </div>
          </div>

          {/* Col 3: Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900 dark:text-white mb-4">
              {t("footer.quickLinks")}
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-600 dark:text-gray-400">
              <li>
                <Link to="/" className="hover:text-[#1a3a35] dark:hover:text-emerald-400 transition-colors">{t("nav.home")}</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#1a3a35] dark:hover:text-emerald-400 transition-colors">{t("nav.about")}</Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-[#1a3a35] dark:hover:text-emerald-400 transition-colors">{t("nav.projects")}</Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-[#1a3a35] dark:hover:text-emerald-400 transition-colors">{t("nav.products")}</Link>
              </li>
              <li>
                <Link to="/notes" className="hover:text-[#1a3a35] dark:hover:text-emerald-400 transition-colors">{t("nav.blog")}</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#1a3a35] dark:hover:text-emerald-400 transition-colors">{t("nav.contact")}</Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Capabilities & Resources */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900 dark:text-white mb-4">
              {t("footer.capabilities")}
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-600 dark:text-gray-400">
              <li>
                <Link to="/services" className="hover:text-[#1a3a35] dark:hover:text-emerald-400 transition-colors">{t("nav.services")}</Link>
              </li>
              <li>
                <Link to="/about#experience" className="hover:text-[#1a3a35] dark:hover:text-emerald-400 transition-colors">{t("career.title")}</Link>
              </li>
              <li>
                <Link to="/about#dimensions" className="hover:text-[#1a3a35] dark:hover:text-emerald-400 transition-colors">{t("dimensions.title")}</Link>
              </li>
              <li>
                <Link to="/resume" className="hover:text-[#1a3a35] dark:hover:text-emerald-400 transition-colors inline-flex items-center gap-1">
                  {t("nav.resume")} <ArrowUpRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Connect */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900 dark:text-white mb-4">
              {t("footer.connect")}
            </h4>
            <div className="flex flex-col gap-2.5 text-sm text-gray-600 dark:text-gray-400">
              <a
                href={PERSONAL_INFO.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-[#1a3a35] dark:hover:text-white transition-colors"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
              <a
                href={PERSONAL_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-[#1a3a35] dark:hover:text-white transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
              <a
                href={PERSONAL_INFO.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-[#1a3a35] dark:hover:text-white transition-colors"
              >
                <Twitter className="w-4 h-4" />
                Twitter / X
              </a>
              <a
                href="https://instagram.com/harshbix"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-[#1a3a35] dark:hover:text-white transition-colors"
              >
                <Instagram className="w-4 h-4" />
                Instagram (@harshbix)
              </a>
            </div>
          </div>
        </div>

        {/* Legal & Trust Links Strip */}
        <div className="py-6 border-b border-gray-200 dark:border-gray-800 flex flex-wrap items-center justify-between gap-4 text-xs text-gray-600 dark:text-gray-400">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <Link to="/privacy-policy" className="hover:text-[#1a3a35] dark:hover:text-emerald-400 transition-colors">
              {t("footer.privacy")}
            </Link>
            <Link to="/terms" className="hover:text-[#1a3a35] dark:hover:text-emerald-400 transition-colors">
              {t("footer.terms")}
            </Link>
            <Link to="/refund-policy" className="hover:text-[#1a3a35] dark:hover:text-emerald-400 transition-colors">
              {t("footer.refund")}
            </Link>
            <Link to="/cookie-policy" className="hover:text-[#1a3a35] dark:hover:text-emerald-400 transition-colors">
              {t("footer.cookie")}
            </Link>
            <button
              type="button"
              onClick={() => window.dispatchEvent(new CustomEvent("open-cookie-settings"))}
              className="hover:text-[#1a3a35] dark:hover:text-emerald-400 transition-colors underline-offset-2 hover:underline"
            >
              {t("footer.cookieSettings")}
            </button>
          </div>

          <div className="text-xs text-gray-600 dark:text-gray-400">
            <span>{t("footer.verified")}</span>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-600 dark:text-gray-400">
          <p>© {currentYear} Junior Jeconia. {t("footer.rights")}</p>
          <p>
            {t("footer.designedIn")}
          </p>
        </div>
      </div>
    </footer>
  );
}
