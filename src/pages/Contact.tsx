import { useState } from "react";
import { Send, CheckCircle2, MessageCircle, Mail, Phone, MapPin, Clock, Zap, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { SEO } from "../seo";
import { BookingModal } from "../components/common/BookingModal";
import { FAQSection } from "../components/home/FAQSection";
import { SiteFooter } from "../components/layout/SiteFooter";
import { PERSONAL_INFO } from "../data/portfolioData";

const PROJECT_TYPES = [
  "Web Development",
  "Web Application",
  "UI/UX Design",
  "PC Hardware & Builds",
  "Consulting / Other",
];

const BUDGET_RANGES = [
  "Not sure yet",
  "Under $1,000",
  "$1,000 - $3,000",
  "$3,000 - $5,000",
  "$5,000+",
];

interface FormState {
  name: string;
  email: string;
  projectType: string;
  budget: string;
  message: string;
}

export default function Contact() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    projectType: PROJECT_TYPES[0],
    budget: BUDGET_RANGES[0],
    message: "",
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const validate = (): boolean => {
    const errs: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) errs.name = "Please enter your name.";
    if (!form.email.trim()) {
      errs.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = "Please enter a valid email address.";
    }
    if (!form.message.trim() || form.message.length < 10) {
      errs.message = "Please share a few sentences about your project (at least 10 characters).";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");

    try {
      await new Promise((res) => setTimeout(res, 800));
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <SEO
        title="Contact Junior Jeconia | Start a Project or Inquire"
        description="Get in touch with Junior Jeconia for web development, software engineering, enterprise computer hardware, or tech consultations. Direct WhatsApp and inquiry form."
        url="https://jeconiajunior.vercel.app/contact"
      />

      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />

      <main className="relative z-10 pt-10">
        {/* Page Hero - Minimal Apple Style */}
        <section className="px-6 lg:px-8 py-16 md:py-24 border-b border-gray-200 dark:border-gray-800 relative bg-background">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-3xl"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-xs font-mono font-semibold uppercase tracking-widest text-[#1a3a35] dark:text-emerald-400 mb-4">
                <span>Contact &bull; Start Collaboration</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white leading-[1.05]">
                Let&apos;s Build.
                <span className="block text-gray-500 dark:text-gray-400 text-2xl sm:text-4xl lg:text-5xl font-medium mt-1">
                  Direct communication. Fast response.
                </span>
              </h1>

              <p className="mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-300 font-normal leading-relaxed">
                Building a web application or sourcing workstations from Bixx Tech? Send a message or schedule a call.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Form & Direct Channels Grid */}
        <section className="px-6 lg:px-8 py-20 border-b border-gray-200 dark:border-gray-800 bg-background">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-14 items-start">
            {/* Left: Interactive Project Inquiry Form */}
            <div className="rounded-[16px] border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/60 p-6 sm:p-10 shadow-sm">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white tracking-tight mb-2">
                Project Inquiry
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-8">
                Share what you are planning. I review every message and reply within 24 hours.
              </p>

              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="rounded-[12px] border border-emerald-500/30 bg-emerald-500/10 p-8 text-center space-y-4"
                >
                  <div className="h-12 w-12 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Message Received</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 max-w-md mx-auto leading-relaxed">
                    Thank you, {form.name}. Your details have been received. I will review the scope and reply promptly. You can also chat directly on WhatsApp for immediate conversations.
                  </p>
                  <div className="pt-4 flex flex-wrap justify-center gap-3">
                    <a
                      href={PERSONAL_INFO.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-[#1a3a35] px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-md hover:bg-[#132c28] transition-all"
                    >
                      <span>Continue on WhatsApp</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                    <button
                      type="button"
                      onClick={() => setStatus("idle")}
                      className="inline-flex items-center gap-2 rounded-full border border-gray-300 dark:border-gray-700 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
                    >
                      Send Another
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Selectable Project Category */}
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-3">
                      1. Project Category
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {PROJECT_TYPES.map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setForm({ ...form, projectType: type })}
                          className={`text-left p-3 rounded-[10px] border text-xs font-semibold transition-all ${
                            form.projectType === type
                              ? "bg-[#1a3a35] text-white border-[#1a3a35]"
                              : "bg-gray-50 dark:bg-gray-800/50 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-gray-400"
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name & Email */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-mono font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-2">
                        Your Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Alex Morgan"
                        className={`w-full rounded-[10px] border bg-gray-50 dark:bg-gray-800/60 px-4 py-3 text-sm text-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1a3a35] ${
                          errors.name ? "border-red-500" : "border-gray-200 dark:border-gray-700"
                        }`}
                      />
                      {errors.name && <p className="text-[11px] text-red-500 mt-1">{errors.name}</p>}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-mono font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-2">
                        Your Email *
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="alex@company.com"
                        className={`w-full rounded-[10px] border bg-gray-50 dark:bg-gray-800/60 px-4 py-3 text-sm text-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1a3a35] ${
                          errors.email ? "border-red-500" : "border-gray-200 dark:border-gray-700"
                        }`}
                      />
                      {errors.email && <p className="text-[11px] text-red-500 mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  {/* Budget */}
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-2">
                      Estimated Project Budget (Optional)
                    </label>
                    <select
                      value={form.budget}
                      onChange={(e) => setForm({ ...form, budget: e.target.value })}
                      className="w-full rounded-[10px] border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/60 px-4 py-3 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#1a3a35]"
                    >
                      {BUDGET_RANGES.map((b) => (
                        <option key={b} value={b} className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
                          {b}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-mono font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-2">
                      Project Details &amp; Objectives *
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Describe what you want to build, timelines, technical requirements, or business goals..."
                      className={`w-full rounded-[10px] border bg-gray-50 dark:bg-gray-800/60 p-4 text-sm text-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1a3a35] resize-none ${
                        errors.message ? "border-red-500" : "border-gray-200 dark:border-gray-700"
                      }`}
                    />
                    {errors.message && <p className="text-[11px] text-red-500 mt-1">{errors.message}</p>}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#1a3a35] hover:bg-[#132c28] px-8 text-xs font-bold uppercase tracking-wider text-white transition-all shadow-md disabled:opacity-50"
                  >
                    {status === "submitting" ? (
                      <span>Sending inquiry...</span>
                    ) : (
                      <>
                        <span>Submit Project Inquiry</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Right: Direct Channels & Consultation Call */}
            <div className="space-y-6">
              {/* Standout Consultation Card - Kepha Style */}
              <div className="rounded-[16px] border border-emerald-500/30 bg-[#1a3a35] p-6 sm:p-8 text-white space-y-4 shadow-xl">
                <div className="flex items-center justify-between pb-3 border-b border-white/15">
                  <span className="text-xs font-mono font-semibold uppercase tracking-widest text-emerald-300">
                    Discovery Consultation
                  </span>
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white tracking-tight">
                  Prefer a 1-on-1 Call?
                </h3>

                <p className="text-xs text-white/80 leading-relaxed">
                  Book a direct 15-minute consultation to review your requirements, architecture, or hardware sourcing requirements.
                </p>

                <button
                  type="button"
                  onClick={() => setBookingOpen(true)}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full bg-white text-gray-900 font-bold text-xs uppercase tracking-wider hover:bg-gray-100 transition-all duration-300 shadow-md"
                >
                  <Zap className="w-3.5 h-3.5 text-[#1a3a35] fill-current" />
                  <span>Schedule Consultation</span>
                </button>
              </div>

              {/* WhatsApp Callout Card */}
              <a
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-6 rounded-[16px] border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/60 hover:border-emerald-500/40 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-[12px] bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 block">
                      Fastest Response
                    </span>
                    <span className="text-base font-bold text-gray-900 dark:text-white">Chat on WhatsApp</span>
                    <span className="text-xs text-gray-500 dark:text-gray-400 block">{PERSONAL_INFO.phone}</span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-emerald-500 transition-colors" />
              </a>

              {/* Email Card */}
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="group flex items-center justify-between p-6 rounded-[16px] border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/60 hover:border-[#1a3a35] dark:hover:border-emerald-500/40 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-[12px] bg-gray-100 dark:bg-gray-800 text-[#1a3a35] dark:text-emerald-400 flex items-center justify-center">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-gray-400 block">
                      Direct Email
                    </span>
                    <span className="text-base font-bold text-gray-900 dark:text-white">{PERSONAL_INFO.email}</span>
                    <span className="text-xs text-gray-500 dark:text-gray-400 block">Replies within 24h</span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-[#1a3a35] dark:group-hover:text-emerald-400 transition-colors" />
              </a>

              {/* Location & Timezone Details */}
              <div className="p-6 rounded-[16px] border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/40 space-y-4 text-xs text-gray-600 dark:text-gray-400">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#1a3a35] dark:text-emerald-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-gray-900 dark:text-white block mb-0.5">Location &amp; Operations</span>
                    <span>Dar es Salaam, Tanzania (EAT / UTC+3). Collaborating globally across remote teams.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#1a3a35] dark:text-emerald-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-gray-900 dark:text-white block mb-0.5">Working Hours</span>
                    <span>Monday &ndash; Saturday, 09:00 &ndash; 18:00 EAT. Available for scheduled calls.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSection />
      </main>

      <SiteFooter />
    </>
  );
}
