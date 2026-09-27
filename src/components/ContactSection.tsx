import React, { useState } from "react";
import {
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
  MessageCircle,
  Clock,
  Zap,
  ArrowUpRight,
  Copy,
  Check
} from "lucide-react";
import { motion } from "framer-motion";
import { PERSONAL_INFO } from "../data/portfolioData";
import { BookingModal } from "./common/BookingModal";

const PROJECT_TYPES = [
  "Web Development",
  "Full-Stack Web App",
  "UI/UX Design",
  "Workstation / PC Hardware",
  "Consulting & Strategy",
];

interface FormState {
  name: string;
  email: string;
  projectType: string;
  message: string;
}

export const ContactSection: React.FC = () => {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    projectType: PROJECT_TYPES[0],
    message: "",
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const validate = (): boolean => {
    const errs: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) errs.name = "Please enter your name.";
    if (!form.email.trim()) {
      errs.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = "Please enter a valid email address.";
    }
    if (!form.message.trim() || form.message.trim().length < 10) {
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
      // Simulate dispatch
      await new Promise((res) => setTimeout(res, 800));
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />

      <section
        id="contact"
        className="py-20 lg:py-28 px-6 lg:px-8 bg-background border-b border-gray-200 dark:border-gray-800 transition-colors duration-300 relative"
      >
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-xs font-mono font-semibold uppercase tracking-widest text-[#1a3a35] dark:text-emerald-400 mb-4">
              <span>Contact &bull; Let&apos;s Talk</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 dark:text-white leading-[1.08]">
              Start a Conversation.
              <span className="block text-gray-500 dark:text-gray-400 text-2xl sm:text-3xl lg:text-4xl font-normal mt-1">
                Direct communication. Fast response.
              </span>
            </h2>

            <p className="mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl font-normal leading-relaxed">
              Have a web application, software project, or workstation hardware requirement? Send a message below or reach out directly on WhatsApp.
            </p>
          </div>

          {/* Grid: Direct Channels + Interactive Inquiry Form */}
          <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-14 items-start">
            {/* Left Column: Direct Communication Channels & Availability */}
            <div className="space-y-6">
              {/* WhatsApp Direct Card */}
              <div className="rounded-[16px] border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/60 p-6 sm:p-7 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-gray-900 dark:text-white">WhatsApp</h3>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Direct instant messaging</p>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                    Fastest
                  </span>
                </div>

                <p className="text-xs text-gray-600 dark:text-gray-300 mb-5 leading-relaxed">
                  Best for quick discussions, scope clarifications, and urgent requirements.
                </p>

                <a
                  href={PERSONAL_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full bg-[#1a3a35] hover:bg-[#132c28] text-white text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat on WhatsApp ({PERSONAL_INFO.phone})</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Direct Email Card */}
              <div className="rounded-[16px] border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/60 p-6 sm:p-7 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-gray-900 dark:text-white">Email</h3>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{PERSONAL_INFO.email}</p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={copyEmailToClipboard}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-mono font-medium text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                    title="Copy email to clipboard"
                  >
                    {copiedEmail ? <Check className="w-3 h-3 text-emerald-500" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedEmail ? "Copied" : "Copy"}</span>
                  </button>
                </div>

                <a
                  href={`mailto:${PERSONAL_INFO.email}?subject=Project%20Inquiry%20from%20Portfolio`}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-full border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-900 dark:text-white text-xs font-semibold uppercase tracking-wider transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-gray-500" />
                  <span>Send Direct Email</span>
                </a>
              </div>

              {/* Location & Availability Status */}
              <div className="rounded-[16px] border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/60 p-6 sm:p-7 shadow-sm space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 text-[#1a3a35] dark:text-emerald-400 flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-gray-900 dark:text-white">Location</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{PERSONAL_INFO.location} (EAT &bull; UTC+3)</p>
                  </div>
                </div>

                <div className="pt-3 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                      {PERSONAL_INFO.availability}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => setBookingOpen(true)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#1a3a35] dark:text-emerald-400 hover:underline"
                  >
                    <Zap className="w-3.5 h-3.5 fill-current" />
                    <span>Book 15m Call</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Inquiry Form */}
            <div className="rounded-[16px] border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/60 p-6 sm:p-8 lg:p-10 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight mb-2">
                Send an Inquiry
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-7">
                Tell me about your timeline, stack, or problem statement. I review and reply within 24 hours.
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
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white">Message Received</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 max-w-md mx-auto leading-relaxed">
                    Thank you, {form.name}. Your details have been received. I will review your requirements and respond promptly.
                  </p>
                  <div className="pt-3 flex flex-wrap justify-center gap-3">
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
                      onClick={() => {
                        setStatus("idle");
                        setForm({ name: "", email: "", projectType: PROJECT_TYPES[0], message: "" });
                      }}
                      className="inline-flex items-center gap-2 rounded-full border border-gray-300 dark:border-gray-700 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
                    >
                      Send Another
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Selectable Project Category */}
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-2.5">
                      Project Type
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {PROJECT_TYPES.map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setForm({ ...form, projectType: type })}
                          className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all ${
                            form.projectType === type
                              ? "bg-[#1a3a35] text-white border-[#1a3a35]"
                              : "bg-gray-50 dark:bg-gray-800/60 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-gray-400"
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name and Email */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="home-contact-name" className="block text-xs font-mono font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        id="home-contact-name"
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Alex Morgan"
                        className={`w-full rounded-[10px] border bg-gray-50 dark:bg-gray-800/60 px-4 py-3 text-sm text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1a3a35] dark:focus:ring-emerald-400 transition-all ${
                          errors.name ? "border-red-500" : "border-gray-200 dark:border-gray-700"
                        }`}
                      />
                      {errors.name && (
                        <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="home-contact-email" className="block text-xs font-mono font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-1.5">
                        Your Email *
                      </label>
                      <input
                        id="home-contact-email"
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="alex@company.com"
                        className={`w-full rounded-[10px] border bg-gray-50 dark:bg-gray-800/60 px-4 py-3 text-sm text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1a3a35] dark:focus:ring-emerald-400 transition-all ${
                          errors.email ? "border-red-500" : "border-gray-200 dark:border-gray-700"
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="home-contact-message" className="block text-xs font-mono font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-1.5">
                      Message / Project Details *
                    </label>
                    <textarea
                      id="home-contact-message"
                      rows={4}
                      required
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Briefly describe your project requirements, target timeline, or what you need built..."
                      className={`w-full rounded-[10px] border bg-gray-50 dark:bg-gray-800/60 px-4 py-3 text-sm text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1a3a35] dark:focus:ring-emerald-400 transition-all resize-none ${
                        errors.message ? "border-red-500" : "border-gray-200 dark:border-gray-700"
                      }`}
                    />
                    {errors.message && (
                      <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-[#1a3a35] hover:bg-[#132c28] text-white font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-md hover:scale-[1.01] disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
                  >
                    {status === "submitting" ? (
                      <>
                        <span className="h-3.5 w-3.5 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};