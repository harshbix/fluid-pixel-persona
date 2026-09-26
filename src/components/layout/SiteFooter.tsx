import { Link } from "react-router-dom";
import { Github, Linkedin, Twitter, Instagram, Mail, Phone, ArrowUpRight } from "lucide-react";
import { PERSONAL_INFO } from "../../data/portfolioData";
import { BrandLogo } from "../common/BrandLogo";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

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
              Frontend-leaning Full-Stack Developer based in Dar es Salaam, Tanzania. Designing and building modern web applications, scalable backends, and digital systems that turn ideas into useful products.
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
                  {PERSONAL_INFO.phone} (WhatsApp Available)
                </a>
              </div>
            </div>
          </div>

          {/* Col 3: Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900 dark:text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-600 dark:text-gray-400">
              <li>
                <Link to="/" className="hover:text-[#1a3a35] dark:hover:text-emerald-400 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#1a3a35] dark:hover:text-emerald-400 transition-colors">About</Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-[#1a3a35] dark:hover:text-emerald-400 transition-colors">Projects</Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-[#1a3a35] dark:hover:text-emerald-400 transition-colors">Products</Link>
              </li>
              <li>
                <Link to="/notes" className="hover:text-[#1a3a35] dark:hover:text-emerald-400 transition-colors">Blog</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#1a3a35] dark:hover:text-emerald-400 transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Capabilities & Resources */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900 dark:text-white mb-4">
              Capabilities
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-600 dark:text-gray-400">
              <li>
                <Link to="/services" className="hover:text-[#1a3a35] dark:hover:text-emerald-400 transition-colors">Web Development</Link>
              </li>
              <li>
                <a href="/#experience" className="hover:text-[#1a3a35] dark:hover:text-emerald-400 transition-colors">Career Timeline</a>
              </li>
              <li>
                <a href="/#dimensions" className="hover:text-[#1a3a35] dark:hover:text-emerald-400 transition-colors">PC Sales &amp; Hardware</a>
              </li>
              <li>
                <Link to="/resume" className="hover:text-[#1a3a35] dark:hover:text-emerald-400 transition-colors inline-flex items-center gap-1">
                  Resume / CV <ArrowUpRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Connect */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900 dark:text-white mb-4">
              Connect
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
                href={PERSONAL_INFO.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-[#1a3a35] dark:hover:text-white transition-colors"
              >
                <Instagram className="w-4 h-4" />
                Instagram (@bixx.tech)
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500 dark:text-gray-500">
          <p>© {currentYear} Junior Jeconia. All rights reserved.</p>
          <p>
            Designed &amp; engineered in Dar es Salaam, Tanzania.
          </p>
        </div>
      </div>
    </footer>
  );
}
