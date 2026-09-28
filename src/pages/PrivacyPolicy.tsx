import { Link } from "react-router-dom";
import { ArrowLeft, Shield, Lock, Eye, Server, RefreshCw } from "lucide-react";
import { motion } from "framer-motion";
import { SEO } from "../seo";
import { SiteFooter } from "../components/layout/SiteFooter";
import { PERSONAL_INFO } from "../data/portfolioData";
import { useLanguage } from "../context/LanguageContext";

export default function PrivacyPolicy() {
  const { t } = useLanguage();
  const lastUpdated = "September 2026";

  return (
    <>
      <SEO
        title="Privacy Policy | Junior Jeconia"
        description="Transparent privacy policy explaining how inquiries, local preferences, and communication details are handled by Junior Jeconia."
        url="https://jeconiajunior.vercel.app/privacy-policy"
      />

      <main className="relative z-10 pt-10 min-h-screen bg-background text-foreground transition-colors duration-300">
        {/* Header */}
        <section className="px-6 lg:px-8 py-16 md:py-24 border-b border-gray-200 dark:border-gray-800 bg-background">
          <div className="max-w-4xl mx-auto">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gray-600 dark:text-gray-400 hover:text-[#1a3a35] dark:hover:text-emerald-400 mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>{t("legal.backHome")}</span>
            </Link>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-xs font-mono font-semibold uppercase tracking-widest text-[#1a3a35] dark:text-emerald-400 mb-4">
              <Shield className="w-3.5 h-3.5" />
              <span>Legal Transparency</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight">
              Privacy Policy
            </h1>
            <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 font-mono">
              {t("legal.lastUpdated")}: {lastUpdated} &bull; Dar es Salaam, Tanzania
            </p>
          </div>
        </section>

        {/* Content Body */}
        <section className="px-6 lg:px-8 py-16 max-w-4xl mx-auto">
          <div className="space-y-12 text-sm sm:text-base leading-relaxed text-gray-700 dark:text-gray-300">
            {/* Overview */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white tracking-tight flex items-center gap-2.5">
                <Eye className="w-5 h-5 text-[#1a3a35] dark:text-emerald-400" />
                1. Overview
              </h2>
              <p>
                This portfolio website (<strong className="text-gray-900 dark:text-white">jeconiajunior.vercel.app</strong>) is owned and operated by <strong className="text-gray-900 dark:text-white">{PERSONAL_INFO.name}</strong>, a developer based in Dar es Salaam, Tanzania.
              </p>
              <p>
                I prioritize digital privacy and data minimization. I do not sell, rent, or trade your personal information to advertisers or data brokers. This policy explains what information is collected, why it is needed, and how it is protected.
              </p>
            </div>

            {/* Information Collected */}
            <div className="space-y-4 border-t border-gray-200 dark:border-gray-800 pt-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white tracking-tight flex items-center gap-2.5">
                <Lock className="w-5 h-5 text-[#1a3a35] dark:text-emerald-400" />
                2. Information Collected
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white text-base mb-1">A. Contact &amp; Inquiry Information</h3>
                  <p>
                    When you voluntarily submit a project inquiry or consultation request via the on-site form, I collect:
                  </p>
                  <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-600 dark:text-gray-400">
                    <li>Your name</li>
                    <li>Your email address</li>
                    <li>Your project description, objectives, and optional budget range</li>
                  </ul>
                  <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                    This information is collected solely to understand your project scope and communicate back to you directly.
                  </p>
                </div>

                <div className="pt-2">
                  <h3 className="font-bold text-gray-900 dark:text-white text-base mb-1">B. Local Client Storage (No Tracking Cookies)</h3>
                  <p>
                    This website does not use third-party advertising cookies or cross-site profiling trackers. The site uses HTML5 <code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-xs font-mono text-gray-900 dark:text-white">localStorage</code> solely for functional UI preferences:
                  </p>
                  <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-600 dark:text-gray-400">
                    <li><code className="text-xs font-mono">theme-mode</code>: Stores your preference between Light and Dark interface modes.</li>
                    <li><code className="text-xs font-mono">portfolio_lang</code>: Stores your preference between English and Swahili.</li>
                    <li><code className="text-xs font-mono">portfolio_cookie_consent</code>: Stores your cookie &amp; storage acknowledgment.</li>
                  </ul>
                  <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                    These items are stored locally on your device browser and are never transmitted to external analytics servers.
                  </p>
                </div>
              </div>
            </div>

            {/* Hosting and Infrastructure */}
            <div className="space-y-4 border-t border-gray-200 dark:border-gray-800 pt-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white tracking-tight flex items-center gap-2.5">
                <Server className="w-5 h-5 text-[#1a3a35] dark:text-emerald-400" />
                3. Hosting &amp; Technical Logs
              </h2>
              <p>
                This website is hosted on <strong className="text-gray-900 dark:text-white">Vercel</strong>. Like all web infrastructure, standard HTTP server requests automatically transmit network logs (such as IP address, browser user-agent, and requested file path) to ensure network security, DDoS mitigation, and server integrity. These technical logs are managed by the hosting infrastructure according to Vercel&apos;s security standards.
              </p>
            </div>

            {/* Third-Party Links & Services */}
            <div className="space-y-4 border-t border-gray-200 dark:border-gray-800 pt-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
                4. External Services &amp; Links
              </h2>
              <p>
                This portfolio provides direct external links to verified profiles and project repositories (such as GitHub, LinkedIn, and WhatsApp). When you click an external link, you leave this website and are subject to that platform&apos;s independent privacy practices. I do not embed invasive third-party trackers or ad network pixels on this website.
              </p>
            </div>

            {/* Data Retention & Rights */}
            <div className="space-y-4 border-t border-gray-200 dark:border-gray-800 pt-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
                5. Data Retention &amp; Your Rights
              </h2>
              <p>
                Inquiry emails and communications are retained only as long as necessary to conduct project discussions or fulfill professional consulting obligations.
              </p>
              <p>
                You have the right to request a copy of any correspondence you have sent, or request the deletion of your contact details from my mailbox at any time. Simply email <a href={`mailto:${PERSONAL_INFO.email}`} className="text-[#1a3a35] dark:text-emerald-400 font-semibold underline">{PERSONAL_INFO.email}</a> with your request.
              </p>
            </div>

            {/* Updates & Contact */}
            <div className="space-y-4 border-t border-gray-200 dark:border-gray-800 pt-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white tracking-tight flex items-center gap-2.5">
                <RefreshCw className="w-5 h-5 text-[#1a3a35] dark:text-emerald-400" />
                6. Contact Information
              </h2>
              <p>
                For questions regarding this policy or data practices, contact:
              </p>
              <div className="p-5 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/60 font-mono text-xs space-y-1.5 text-gray-700 dark:text-gray-300">
                <p><strong className="text-gray-900 dark:text-white">Junior Jeconia (harshbix)</strong></p>
                <p>Location: Dar es Salaam, Tanzania</p>
                <p>Email: <a href={`mailto:${PERSONAL_INFO.email}`} className="text-[#1a3a35] dark:text-emerald-400 hover:underline">{PERSONAL_INFO.email}</a></p>
                <p>Phone / WhatsApp: {PERSONAL_INFO.phone}</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
