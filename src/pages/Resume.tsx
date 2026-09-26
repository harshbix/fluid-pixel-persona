import { Printer, Download, ArrowLeft, Mail, Phone, MapPin, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { SEO } from "../seo";
import { ResumeTemplate } from "../components/resume/ResumeTemplate";
import { buildResumeData } from "../lib/resumeBuilder";
import { SiteFooter } from "../components/layout/SiteFooter";
import { PERSONAL_INFO } from "../data/portfolioData";

export default function Resume() {
  const resumeData = buildResumeData();

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <SEO
        title="Resume &amp; CV | Junior Jeconia — Frontend-leaning Full-Stack Developer"
        description="Professional resume of Junior Jeconia. Full-stack development, computer engineering, technical project management, and verified client deliverables."
        url="https://jeconiajunior.vercel.app/resume"
      />

      <main className="relative z-10 pt-12">
        {/* Page Hero & Actions */}
        <section className="px-6 lg:px-12 py-12 border-b border-white/[0.08] print:hidden">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors mb-4"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Portfolio
              </Link>
              <h1 className="text-3xl md:text-5xl font-black text-foreground tracking-tight">
                Curriculum Vitae
              </h1>
              <p className="mt-2 text-sm text-muted-foreground">
                Junior Jeconia &bull; Frontend-leaning Full-Stack Developer &bull; Dar es Salaam, TZ
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={handlePrint}
                className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-xs font-bold uppercase tracking-wider text-background hover:bg-foreground/90 transition-all shadow-md"
              >
                <Printer className="w-4 h-4" />
                Print / Save PDF
              </button>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/[0.14] bg-white/[0.04] px-6 py-3 text-xs font-semibold uppercase tracking-wider text-foreground hover:bg-white/[0.08] transition-all"
              >
                Contact Me
              </Link>
            </div>
          </div>
        </section>

        {/* Printable Resume Container */}
        <section className="py-12 px-4 md:px-8 overflow-x-auto bg-black/40 print:bg-white print:p-0">
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
