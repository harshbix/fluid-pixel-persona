import React, { useState, useEffect } from "react";
import {
  X,
  MessageCircle,
  Mail,
  Phone,
  Copy,
  Check,
  ArrowUpRight,
  Sparkles,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Clock,
  MapPin,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { PERSONAL_INFO } from "../../data/portfolioData";
import { useLanguage } from "../../context/LanguageContext";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const { t } = useLanguage();
  const [copiedEmail, setCopiedEmail] = useState(false);

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

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const socials = [
    {
      name: "GitHub",
      href: PERSONAL_INFO.socials.github,
      icon: Github,
    },
    {
      name: "LinkedIn",
      href: PERSONAL_INFO.socials.linkedin,
      icon: Linkedin,
    },
    {
      name: "Twitter / X",
      href: PERSONAL_INFO.socials.twitter,
      icon: Twitter,
    },
    {
      name: "Instagram",
      href: "https://instagram.com/harshbix",
      icon: Instagram,
    },
  ];

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
            role="dialog"
            aria-modal="true"
            aria-labelledby="booking-modal-title"
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-full text-gray-500 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors focus-visible:ring-2 focus-visible:ring-[#1a3a35]"
              aria-label={t("booking.close")}
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="mb-6 pr-8">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1a3a35]/10 dark:bg-emerald-500/20 text-[#1a3a35] dark:text-emerald-400 text-xs font-mono font-semibold uppercase tracking-wider mb-2.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{t("booking.eyebrow")}</span>
              </div>
              <h2 id="booking-modal-title" className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white tracking-tight">
                {t("booking.title")}
              </h2>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-300 leading-relaxed font-normal">
                {t("booking.subtitle")}
              </p>
            </div>

            {/* Direct Channels Cards */}
            <div className="space-y-3 mb-6">
              {/* WhatsApp Hero Action (Fastest) */}
              <div className="p-4 sm:p-5 rounded-xl border border-emerald-500/30 bg-emerald-50/50 dark:bg-emerald-950/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-gray-900 dark:text-white text-sm">
                        {t("booking.whatsappTitle")}
                      </span>
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-500/20 text-emerald-700 dark:text-emerald-300">
                        {PERSONAL_INFO.phone}
                      </span>
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-300 mt-0.5">
                      {t("booking.whatsappDesc")}
                    </p>
                  </div>
                </div>

                <a
                  href={PERSONAL_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-sm flex-shrink-0"
                >
                  <span>{t("booking.whatsappAction")}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Direct Email Action */}
              <div className="p-4 sm:p-5 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50/60 dark:bg-gray-800/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-gray-900 dark:text-white text-sm">
                        {t("booking.emailTitle")}
                      </span>
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-300 mt-0.5 truncate">
                      {PERSONAL_INFO.email}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 flex-shrink-0">
                  <a
                    href={`mailto:${PERSONAL_INFO.email}?subject=Project%20Conversation`}
                    className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-full bg-[#1a3a35] hover:bg-[#142d29] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-sm"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>{t("booking.emailAction")}</span>
                  </a>

                  <button
                    type="button"
                    onClick={copyEmailToClipboard}
                    className="p-2 rounded-full border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 transition-colors"
                    aria-label={t("booking.emailCopy")}
                    title={copiedEmail ? t("booking.emailCopied") : t("booking.emailCopy")}
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Direct Phone Call Action */}
              <div className="p-4 sm:p-5 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50/60 dark:bg-gray-800/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-gray-900 dark:text-white text-sm">
                        {t("booking.phoneTitle")}
                      </span>
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-300 mt-0.5">
                      {PERSONAL_INFO.phone} &bull; {t("booking.phoneDesc")}
                    </p>
                  </div>
                </div>

                <a
                  href={`tel:${PERSONAL_INFO.phone}`}
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-full border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-900 dark:text-white text-xs font-bold uppercase tracking-wider transition-all flex-shrink-0"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>{t("booking.phoneAction")}</span>
                </a>
              </div>
            </div>

            {/* Social Channels Strip */}
            <div className="pt-4 border-t border-gray-200 dark:border-gray-800">
              <span className="block text-[11px] font-mono uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3">
                {t("booking.socialsTitle")}
              </span>
              <div className="grid grid-cols-4 gap-2">
                {socials.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800/60 hover:bg-gray-50 dark:hover:bg-gray-800 flex items-center justify-center gap-2 text-xs font-semibold text-gray-700 dark:text-gray-300 hover:text-gray-950 dark:hover:text-white transition-colors"
                      aria-label={social.name}
                    >
                      <Icon className="w-4 h-4" />
                      <span className="hidden sm:inline">{social.name}</span>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Timezone / Availability Strip */}
            <div className="mt-4 pt-3 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between text-[11px] font-mono text-gray-500 dark:text-gray-400">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3 h-3 text-emerald-500" />
                <span>Dar es Salaam, Tanzania</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-3 h-3 text-emerald-500" />
                <span>UTC+3 (EAT)</span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

