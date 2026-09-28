import { Link } from "react-router-dom";
import { ArrowLeft, RefreshCw, CheckCircle2, HelpCircle, Package, Cpu } from "lucide-react";
import { SEO } from "../seo";
import { SiteFooter } from "../components/layout/SiteFooter";
import { PERSONAL_INFO } from "../data/portfolioData";
import { useLanguage } from "../context/LanguageContext";

export default function RefundPolicy() {
  const { t } = useLanguage();
  const lastUpdated = "September 2026";

  return (
    <>
      <SEO
        title="Refund Policy | Junior Jeconia"
        description="Transparent refund and cancellation policy regarding digital resources, client consulting, and Bixx Tech hardware services."
        url="https://jeconiajunior.vercel.app/refund-policy"
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
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Commerce Transparency</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight">
              Refund &amp; Cancellation Policy
            </h1>
            <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 font-mono">
              {t("legal.lastUpdated")}: {lastUpdated} &bull; Dar es Salaam, Tanzania
            </p>
          </div>
        </section>

        {/* Content Body */}
        <section className="px-6 lg:px-8 py-16 max-w-4xl mx-auto">
          <div className="space-y-12 text-sm sm:text-base leading-relaxed text-gray-700 dark:text-gray-300">
            {/* 1. Digital Materials & Starters */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white tracking-tight flex items-center gap-2.5">
                <Package className="w-5 h-5 text-[#1a3a35] dark:text-emerald-400" />
                1. Digital Materials &amp; Templates (Free Open-Access)
              </h2>
              <p>
                All digital resources, architectural playbooks, and starter templates currently distributed directly through this portfolio website are <strong className="text-gray-900 dark:text-white">free open-access materials</strong>.
              </p>
              <p>
                Because no monetary transactions take place for these downloads, refunds do not apply. If you encounter any corrupted files, broken repository links, or technical issues with any downloadable asset, please notify me at <a href={`mailto:${PERSONAL_INFO.email}`} className="text-[#1a3a35] dark:text-emerald-400 font-semibold underline">{PERSONAL_INFO.email}</a> and I will promptly rectify the resource.
              </p>
            </div>

            {/* 2. Custom Client Development & Consulting */}
            <div className="space-y-4 border-t border-gray-200 dark:border-gray-800 pt-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white tracking-tight flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#1a3a35] dark:text-emerald-400" />
                2. Client Engineering Services &amp; Consulting
              </h2>
              <p>
                For contracted software engineering, frontend implementation, UI/UX architecture, or system development:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-400">
                <li><strong className="text-gray-800 dark:text-gray-200">Milestone Contracts:</strong> All paid client work operates under mutually agreed written contracts defining specific milestones, deliverables, and payment schedules.</li>
                <li><strong className="text-gray-800 dark:text-gray-200">Deposits:</strong> Initial commencement deposits cover discovery, architecture, and preliminary development time and are generally non-refundable once engineering sprints have begun.</li>
                <li><strong className="text-gray-800 dark:text-gray-200">Project Cancellation:</strong> In the event a client cancels an ongoing project before completion, the client is responsible only for milestones approved and hours worked up to the written date of cancellation. Unused milestone prepayments are returned in accordance with the individual client contract.</li>
                <li><strong className="text-gray-800 dark:text-gray-200">Quality Guarantee:</strong> Each deliverable includes a specified post-launch bug-fixing warranty window (typically 14 to 30 days) to resolve any defects not adhering to agreed specifications.</li>
              </ul>
            </div>

            {/* 3. Bixx Tech Computer Hardware & Sales */}
            <div className="space-y-4 border-t border-gray-200 dark:border-gray-800 pt-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white tracking-tight flex items-center gap-2.5">
                <Cpu className="w-5 h-5 text-[#1a3a35] dark:text-emerald-400" />
                3. Computer Hardware &amp; Upgrades (Bixx Tech)
              </h2>
              <p>
                For workstation purchases, computer hardware, diagnostic services, and component sourcing handled through Bixx Tech:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-400">
                <li><strong className="text-gray-800 dark:text-gray-200">Inspection &amp; Verification:</strong> Hardware units are tested and verified upon handover.</li>
                <li><strong className="text-gray-800 dark:text-gray-200">Manufacturer Warranties:</strong> All new and certified hardware components carry manufacturer warranties or specific supplier warranty windows as stated on your individual invoice receipt.</li>
                <li><strong className="text-gray-800 dark:text-gray-200">Defective Hardware:</strong> Defective hardware reported within the warranty period is subject to repair, replacement, or warranty claim as detailed on your sales receipt.</li>
              </ul>
            </div>

            {/* 4. How to Request Support or Inquire */}
            <div className="space-y-4 border-t border-gray-200 dark:border-gray-800 pt-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white tracking-tight flex items-center gap-2.5">
                <HelpCircle className="w-5 h-5 text-[#1a3a35] dark:text-emerald-400" />
                4. Inquiries &amp; Assistance
              </h2>
              <p>
                If you have questions regarding an existing contract, invoice, or download, reach out through direct channels:
              </p>
              <div className="p-5 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/60 font-mono text-xs space-y-1.5 text-gray-700 dark:text-gray-300">
                <p><strong className="text-gray-900 dark:text-white">Junior Jeconia &bull; Bixx Tech</strong></p>
                <p>Email: <a href={`mailto:${PERSONAL_INFO.email}`} className="text-[#1a3a35] dark:text-emerald-400 hover:underline">{PERSONAL_INFO.email}</a></p>
                <p>WhatsApp / Call: {PERSONAL_INFO.phone}</p>
                <p>Location: Dar es Salaam, Tanzania</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
