import { useState, useEffect } from "react";
import { X, MessageCircle, Mail, Send, CheckCircle2, ArrowUpRight, Calendar, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { PERSONAL_INFO } from "../../data/portfolioData";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal = ({ isOpen, onClose }: BookingModalProps) => {
  const [form, setForm] = useState({ name: "", email: "", message: "", service: "Full-Stack Web App" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 600));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/75 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-xl rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-2xl p-6 sm:p-8 z-10 my-auto"
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-full text-gray-500 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Close booking modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="mb-6 pr-8">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1a3a35]/10 dark:bg-[#1a3a35]/40 text-[#1a3a35] dark:text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-2">
                <Calendar className="w-3.5 h-3.5" />
                Schedule a Consultation
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white tracking-tight">
                Let&apos;s Discuss Your Project
              </h3>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                Choose the fastest way to connect with Junior Jeconia:
              </p>
            </div>

            {/* Quick Action Channels */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <a
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3.5 rounded-xl border border-emerald-500/30 bg-emerald-500/5 hover:bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 transition-all text-xs font-semibold"
              >
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center flex-shrink-0 text-emerald-600 dark:text-emerald-400">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <span className="block font-bold">WhatsApp Direct</span>
                  <span className="text-[11px] text-gray-500 dark:text-gray-400">{PERSONAL_INFO.phone}</span>
                </div>
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}?subject=Project%20Consultation`}
                className="flex items-center gap-3 p-3.5 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-800 dark:text-gray-200 transition-all text-xs font-semibold"
              >
                <div className="w-8 h-8 rounded-lg bg-[#1a3a35]/10 dark:bg-white/10 flex items-center justify-center flex-shrink-0 text-[#1a3a35] dark:text-white">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="text-left truncate">
                  <span className="block font-bold">Email Message</span>
                  <span className="text-[11px] text-gray-500 dark:text-gray-400 truncate">{PERSONAL_INFO.email}</span>
                </div>
              </a>
            </div>

            {/* Inquiry Form */}
            {submitted ? (
              <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-emerald-500 mx-auto" />
                <h4 className="text-lg font-bold text-gray-900 dark:text-white">Request Received!</h4>
                <p className="text-xs text-gray-600 dark:text-gray-300">
                  Thank you! I will review your requirements and reach out via email within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={onClose}
                  className="mt-3 px-5 py-2 rounded-full bg-[#1a3a35] text-white text-xs font-semibold hover:bg-[#142d29] transition-colors"
                >
                  Done
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 pt-2 border-t border-gray-200 dark:border-gray-800">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Alex Taylor"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#1a3a35]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="alex@company.com"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#1a3a35]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                    What are you looking to build?
                  </label>
                  <textarea
                    rows={3}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Briefly describe your product goals, requirements, or timeframe..."
                    className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#1a3a35] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-full bg-[#1a3a35] hover:bg-[#142d29] text-white font-semibold text-sm transition-all duration-300 shadow-md disabled:opacity-50"
                >
                  {loading ? (
                    <span>Submitting...</span>
                  ) : (
                    <>
                      <span>Request Free Consultation</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
