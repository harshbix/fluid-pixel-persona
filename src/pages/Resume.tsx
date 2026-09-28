import { Printer, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { SEO } from "../seo";
import { ResumeTemplate } from "../components/resume/ResumeTemplate";
import { buildResumeData } from "../lib/resumeBuilder";
import { SiteFooter } from "../components/layout/SiteFooter";
import { useLanguage } from "../context/LanguageContext";

export default function Resume() {
  const { language, t } = useLanguage();
  const resumeData = buildResumeData(language);

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <SEO
        title={`${t("resumePage.title")} | Junior Jeconia`}
        description={t("resumePage.subtitle")}
        url="https://jeconiajunior.vercel.app/resume"
      />

      <main className="relative z-10 pt-12">
        {/* Page Hero & Actions */}
        <section className="px-6 lg:px-12 py-12 border-b border-gray-200 dark:border-gray-800 print:hidden">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors mb-4"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>{t("resumePage.back")}</span>
              </Link>
              <h1 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight">
                {t("resumePage.title")}
              </h1>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                {t("resumePage.subtitle")}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={handlePrint}
                className="inline-flex items-center gap-2 rounded-full bg-gray-900 dark:bg-white px-6 py-3 text-xs font-bold uppercase tracking-wider text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 transition-all shadow-md"
              >
                <Printer className="w-4 h-4" />
                <span>{t("resumePage.print")}</span>
              </button>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all"
              >
                <span>{t("resumePage.contactMe")}</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Printable Resume Container */}
        <section className="py-12 px-4 md:px-8 overflow-x-auto bg-gray-100/60 dark:bg-black/40 print:bg-white print:p-0">
          <div className="min-w-[210mm] max-w-4xl mx-auto">
            <ResumeTemplate data={resumeData} />
          </div>
        </section>
      </main>

      <div className="print:hidden">
        <SiteFooter />
      </div>
    </>
  );
}
