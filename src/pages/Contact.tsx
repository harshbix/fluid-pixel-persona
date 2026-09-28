import { useState } from "react";
import {
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  Zap,
  ArrowUpRight,
  Copy,
  Check,
  Github,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";
import { motion } from "framer-motion";
import { SEO } from "../seo";
import { BookingModal } from "../components/common/BookingModal";
import { FAQSection } from "../components/home/FAQSection";
import { SiteFooter } from "../components/layout/SiteFooter";
import { PERSONAL_INFO } from "../data/portfolioData";
import { useLanguage } from "../context/LanguageContext";

export default function Contact() {
  const { t, tContent } = useLanguage();
  const [bookingOpen, setBookingOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const socials = [
    {
      name: "Instagram",
      handle: "@harshbix",
      detail: "Creative, dance & life",
      href: "https://instagram.com/harshbix",
      icon: Instagram,
      color: "hover:border-pink-500/40 hover:text-pink-500",
    },
    {
      name: "Bixx Tech (Instagram)",
      handle: "@bixx.tech",
      detail: "Workstations & PC builds",
      href: "https://instagram.com/bixx.tech",
      icon: Instagram,
      color: "hover:border-purple-500/40 hover:text-purple-500",
    },
    {
      name: "GitHub",
      handle: "@harshbix",
      detail: "Repos & open source",
      href: PERSONAL_INFO.socials.github,
      icon: Github,
      color: "hover:border-gray-500/40 hover:text-gray-900 dark:hover:text-white",
    },
    {
      name: "X / Twitter",
      handle: "@b1xson",
      detail: "Tech thoughts & updates",
      href: PERSONAL_INFO.socials.twitter,
      icon: Twitter,
      color: "hover:border-sky-500/40 hover:text-sky-500",
    },
    {
      name: "LinkedIn",
      handle: "Junior Jeconia",
      detail: "Career & network",
      href: PERSONAL_INFO.socials.linkedin,
      icon: Linkedin,
      color: "hover:border-blue-500/40 hover:text-blue-500",
    },
    {
      name: "TikTok",
      handle: "@bixxtech",
      detail: "Hardware clips & tips",
      href: PERSONAL_INFO.socials.tiktok,
      icon: () => (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
        </svg>
      ),
      color: "hover:border-rose-500/40 hover:text-rose-500",
    },
  ];

  return (
    <>
      <SEO
        title={`${t("contact.title")} | Junior Jeconia`}
        description={t("contact.subtitle")}
        url="https://jeconiajunior.vercel.app/contact"
      />

      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />

      <main className="relative z-10 pt-10">
        {/* Page Hero - Minimal & Casual */}
        <section className="px-6 lg:px-8 py-16 md:py-24 border-b border-gray-200 dark:border-gray-800 relative bg-background">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-2xl"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gray-100 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700/80 text-xs font-mono font-semibold uppercase tracking-widest text-[#1a3a35] dark:text-emerald-400 mb-4">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span>{t("contact.eyebrow")}</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white leading-[1.05]">
                {t("contact.title")}
              </h1>

              <p className="mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-300 font-normal leading-relaxed">
                {t("contact.subtitle")}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="self-start md:self-end"
            >
              <button
                type="button"
                onClick={() => setBookingOpen(true)}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#1a3a35] hover:bg-[#132c28] text-white text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-md hover:scale-[1.02]"
              >
                <Zap className="w-4 h-4 fill-current text-emerald-300" />
                <span>{t("contact.scheduleCall")}</span>
              </button>
            </motion.div>
          </div>
        </section>

        {/* Primary Direct Channels & Socials */}
        <section className="px-6 lg:px-8 py-20 border-b border-gray-200 dark:border-gray-800 bg-background">
          <div className="max-w-7xl mx-auto">
            {/* Primary Channels: WhatsApp & Direct Email */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {/* WhatsApp Hero Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="group rounded-[20px] p-7 sm:p-9 border border-emerald-500/20 dark:border-emerald-500/25 bg-gradient-to-br from-emerald-50/50 via-white to-white dark:from-emerald-950/20 dark:via-gray-900/60 dark:to-gray-900/40 shadow-xs hover:shadow-xl hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-[14px] bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                      <MessageCircle className="w-6 h-6" />
                    </div>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/25">
                      {t("contact.whatsappFast")}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white tracking-tight mb-2">
                    {t("contact.whatsappTitle")}
                  </h2>
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-6 font-normal">
                    {t("contact.whatsappDesc")}
                  </p>
                  <p className="text-xl sm:text-2xl font-mono font-bold text-gray-900 dark:text-white tracking-tight mb-8">
                    {PERSONAL_INFO.phone}
                  </p>
                </div>

                <a
                  href={PERSONAL_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-md group-hover:scale-[1.01]"
                >
                  <span>{t("contact.whatsappBtn")}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </motion.div>

              {/* Email Hero Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.08 }}
                className="group rounded-[20px] p-7 sm:p-9 border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/60 shadow-xs hover:shadow-xl hover:border-blue-500/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-[14px] bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                      <Mail className="w-6 h-6" />
                    </div>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider bg-blue-500/10 text-blue-700 dark:text-blue-300 border border-blue-500/20">
                      {t("contact.emailTitle")}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white tracking-tight mb-2">
                    {t("contact.emailTitle")}
                  </h2>
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-6 font-normal">
                    {t("contact.emailDesc")}
                  </p>
                  <p className="text-xl sm:text-2xl font-mono font-bold text-gray-900 dark:text-white tracking-tight mb-8 break-all">
                    {PERSONAL_INFO.email}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={`mailto:${PERSONAL_INFO.email}?subject=Project%20Conversation`}
                    className="inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-full bg-[#1a3a35] hover:bg-[#132c28] text-white text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-sm"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>{t("contact.emailSend")}</span>
                  </a>

                  <button
                    type="button"
                    onClick={copyEmailToClipboard}
                    className="inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-full border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-900 dark:text-white text-xs font-semibold uppercase tracking-wider transition-colors"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                    <span>{copiedEmail ? t("contact.emailCopied") : t("contact.emailCopy")}</span>
                  </button>
                </div>
              </motion.div>
            </div>

            {/* Socials Bento Grid (Modern & Casual) */}
            <div className="mb-12">
              <h2 className="text-xs font-mono font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-4">
                {t("contact.socialsTitle")}
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3.5 sm:gap-4">
                {socials.map((social, idx) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: idx * 0.05 }}
                      className={`group p-4 rounded-[16px] border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50 hover:bg-gray-50 dark:hover:bg-gray-850 hover:shadow-md transition-all duration-200 flex flex-col justify-between ${social.color}`}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-9 h-9 rounded-[10px] bg-gray-100 dark:bg-gray-800 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Icon className="w-4 h-4" />
                        </div>
                        <ArrowUpRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-current group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                      </div>

                      <div>
                        <span className="block text-xs font-bold text-gray-900 dark:text-white truncate">
                          {social.name}
                        </span>
                        <span className="block text-[11px] font-mono text-gray-500 dark:text-gray-400 truncate mt-0.5">
                          {social.handle}
                        </span>
                      </div>
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Location & Timezone Details */}
            <div className="rounded-[16px] border border-gray-200 dark:border-gray-800 bg-gray-50/70 dark:bg-gray-900/30 p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[#1a3a35] dark:text-emerald-400" />
                <span>{tContent(PERSONAL_INFO.location)} &bull; East Africa Time (UTC+3)</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-semibold text-emerald-700 dark:text-emerald-400">
                  {tContent(PERSONAL_INFO.availability)}
                </span>
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
