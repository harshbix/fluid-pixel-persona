import { Link } from "react-router-dom";
import { ArrowLeft, FileText, CheckCircle2, AlertCircle } from "lucide-react";
import { SEO } from "../seo";
import { SiteFooter } from "../components/layout/SiteFooter";
import { PERSONAL_INFO } from "../data/portfolioData";
import { useLanguage } from "../context/LanguageContext";

export default function Terms() {
  const { t } = useLanguage();
  const lastUpdated = "September 2026";

  return (
    <>
      <SEO
        title="Terms & Conditions | Junior Jeconia"
        description="Standard terms of service and website usage conditions for the portfolio of Junior Jeconia."
        url="https://jeconiajunior.vercel.app/terms"
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
              <FileText className="w-3.5 h-3.5" />
              <span>Terms of Service</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight">
              Terms &amp; Conditions
            </h1>
            <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 font-mono">
              {t("legal.lastUpdated")}: {lastUpdated} &bull; Dar es Salaam, Tanzania
            </p>
          </div>
        </section>

        {/* Content Body */}
        <section className="px-6 lg:px-8 py-16 max-w-4xl mx-auto">
          <div className="space-y-12 text-sm sm:text-base leading-relaxed text-gray-700 dark:text-gray-300">
            {/* 1. Introduction */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing and browsing <strong className="text-gray-900 dark:text-white">jeconiajunior.vercel.app</strong> (the &ldquo;Website&rdquo;), you acknowledge that you have read, understood, and agree to be bound by these Terms &amp; Conditions. If you do not agree with any part of these terms, please discontinue use of the Website.
              </p>
            </div>

            {/* 2. Intellectual Property */}
            <div className="space-y-4 border-t border-gray-200 dark:border-gray-800 pt-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
                2. Intellectual Property &amp; Content Rights
              </h2>
              <p>
                All original portfolio design elements, editorial articles, case studies, graphic layouts, and brand assets displayed on this site are the intellectual property of <strong className="text-gray-900 dark:text-white">{PERSONAL_INFO.name}</strong>, unless credited to a third party.
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-gray-600 dark:text-gray-400">
                <li><strong className="text-gray-800 dark:text-gray-200">Open-Source Code:</strong> Open-source repositories and starters linked to GitHub are governed by their respective repository licenses (e.g., MIT License).</li>
                <li><strong className="text-gray-800 dark:text-gray-200">Client Marks &amp; Works:</strong> Company names, logos, and project screenshots belonging to third parties (such as Farols Company, Tanzania Posts Corporation, etc.) remain the property of their respective owners and are displayed here solely for portfolio demonstration purposes.</li>
              </ul>
            </div>

            {/* 3. Professional Inquiries & Engagements */}
            <div className="space-y-4 border-t border-gray-200 dark:border-gray-800 pt-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
                3. Professional Inquiries &amp; Services
              </h2>
              <p>
                Submitting a project inquiry or scheduling a consultation does not create a binding contract for services. Professional engineering, web development, or consulting engagements require an explicit, mutually agreed statement of work (SOW) or written contract detailing project deliverables, milestone schedules, intellectual property transfer, and commercial terms.
              </p>
            </div>

            {/* 4. Digital Materials & Resources */}
            <div className="space-y-4 border-t border-gray-200 dark:border-gray-800 pt-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
                4. Digital Materials &amp; Resources
              </h2>
              <p>
                Digital starter templates, architectural field notes, and guides made available through this site are provided for educational and development purposes. You are granted permission to download and adapt free starter templates for personal and commercial projects in accordance with their respective open-source licenses.
              </p>
            </div>

            {/* 5. Acceptable Use */}
            <div className="space-y-4 border-t border-gray-200 dark:border-gray-800 pt-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
                5. Acceptable Use
              </h2>
              <p>
                You agree not to use this website to:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-gray-600 dark:text-gray-400">
                <li>Transmit malicious code, viruses, or spam through form endpoints.</li>
                <li>Scrape, reverse engineer, or exploit the website infrastructure through abusive automated queries.</li>
                <li>Misrepresent your identity when submitting project inquiries.</li>
              </ul>
            </div>

            {/* 6. Disclaimers & Limitation of Liability */}
            <div className="space-y-4 border-t border-gray-200 dark:border-gray-800 pt-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
                6. Disclaimers &amp; Limitation of Liability
              </h2>
              <p>
                This website and its informational resources are provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis without warranties of any kind, whether express or implied. While I strive for complete accuracy and continuous uptime, I do not warrant that the website will always be uninterrupted, error-free, or devoid of minor technical oversights.
              </p>
            </div>

            {/* 7. Changes to Terms */}
            <div className="space-y-4 border-t border-gray-200 dark:border-gray-800 pt-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
                7. Changes &amp; Contact
              </h2>
              <p>
                I reserve the right to modify these terms periodically. Continued use of the website following published updates signifies acceptance of the revised terms.
              </p>
              <p>
                For questions regarding these terms, reach out to <a href={`mailto:${PERSONAL_INFO.email}`} className="text-[#1a3a35] dark:text-emerald-400 font-semibold underline">{PERSONAL_INFO.email}</a>.
              </p>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
