import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Cookie, X, Check, Sliders } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";

const CONSENT_KEY = "portfolio_cookie_consent";

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [analyticsAllowed, setAnalyticsAllowed] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const saved = localStorage.getItem(CONSENT_KEY);
    if (!saved) {
      // Delay slightly so it doesn't jarringly pop up immediately on first paint
      const timer = setTimeout(() => setShowBanner(true), 1200);
      return () => clearTimeout(timer);
    } else {
      try {
        const parsed = JSON.parse(saved);
        if (parsed?.analytics) setAnalyticsAllowed(true);
      } catch {
        // no-op
      }
    }
  }, []);

  // Listen to open-cookie-settings event from anywhere (e.g. footer button)
  useEffect(() => {
    const handleOpen = () => {
      setShowModal(true);
      setShowBanner(false);
    };
    window.addEventListener("open-cookie-settings", handleOpen);
    return () => window.removeEventListener("open-cookie-settings", handleOpen);
  }, []);

  // Close modal on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && showModal) {
        setShowModal(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [showModal]);

  const savePreferences = (allowAnalytics: boolean) => {
    const data = {
      essential: true,
      analytics: allowAnalytics,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem(CONSENT_KEY, JSON.stringify(data));
    setAnalyticsAllowed(allowAnalytics);
    setShowBanner(false);
    setShowModal(false);
  };

  return (
    <>
      {/* Banner */}
      <AnimatePresence>
        {showBanner && !showModal && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-50 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-5 shadow-2xl transition-colors"
            role="region"
            aria-label="Cookie and storage notice"
          >
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-xl bg-gray-100 dark:bg-gray-800 text-[#1a3a35] dark:text-emerald-400 flex-shrink-0 mt-0.5">
                <Cookie className="w-5 h-5" />
              </div>
              <div className="flex-1 space-y-1.5">
                <h3 className="text-sm font-bold text-gray-900 dark:text-white">
                  {t("cookie.title")}
                </h3>
                <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                  {t("cookie.desc")}
                </p>
                <div className="pt-1 flex items-center gap-3 text-[11px]">
                  <Link
                    to="/cookie-policy"
                    className="text-[#1a3a35] dark:text-emerald-400 hover:underline font-semibold"
                  >
                    {t("footer.cookie")}
                  </Link>
                  <span className="text-gray-300 dark:text-gray-700">&bull;</span>
                  <Link
                    to="/privacy-policy"
                    className="text-gray-600 dark:text-gray-400 hover:underline"
                  >
                    {t("footer.privacy")}
                  </Link>
                </div>
              </div>
            </div>

            {/* Clear Choice Buttons - Equal Weight, No Deceptive Dark Patterns */}
            <div className="mt-4 pt-3 border-t border-gray-100 dark:border-gray-800 flex items-center justify-end gap-2 flex-wrap">
              <button
                type="button"
                onClick={() => setShowModal(true)}
                className="px-3.5 py-1.5 rounded-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-xs font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                {t("cookie.preferences")}
              </button>
              <button
                type="button"
                onClick={() => savePreferences(false)}
                className="px-3.5 py-1.5 rounded-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-xs font-semibold text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                {t("cookie.necessaryOnly")}
              </button>
              <button
                type="button"
                onClick={() => savePreferences(true)}
                className="px-4 py-1.5 rounded-full bg-[#1a3a35] hover:bg-[#132c28] text-white text-xs font-bold transition-colors shadow-sm"
              >
                {t("cookie.acceptAll")}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Settings Modal */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowModal(false)}
              className="fixed inset-0 bg-black/75 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-lg rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-2xl p-6 sm:p-8 z-10 my-auto"
              role="dialog"
              aria-modal="true"
              aria-labelledby="cookie-settings-title"
            >
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="absolute top-5 right-5 p-2 rounded-full text-gray-500 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Close cookie settings"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="mb-6 pr-8">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1a3a35]/10 dark:bg-emerald-500/10 text-[#1a3a35] dark:text-emerald-400 text-xs font-mono font-semibold uppercase tracking-wider mb-2">
                  <Sliders className="w-3.5 h-3.5" />
                  <span>{t("cookie.preferences")}</span>
                </div>
                <h2 id="cookie-settings-title" className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
                  {t("cookie.settingsTitle")}
                </h2>
                <p className="mt-1 text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                  {t("cookie.settingsDesc")}
                </p>
              </div>

              <div className="space-y-4">
                {/* Essential Storage */}
                <div className="p-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50 flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-sm text-gray-900 dark:text-white">{t("cookie.strictlyNecessary")}</span>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider bg-gray-200 dark:bg-gray-700 px-2 py-0.5 rounded text-gray-700 dark:text-gray-300">
                        {t("cookie.alwaysActive")}
                      </span>
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                      {t("cookie.necessaryDesc")}
                    </p>
                  </div>
                  <div className="text-emerald-600 dark:text-emerald-400 pt-1">
                    <Check className="w-5 h-5" />
                  </div>
                </div>

                {/* Optional Analytics */}
                <div className="p-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50 flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <span className="font-bold text-sm text-gray-900 dark:text-white">{t("cookie.telemetry")}</span>
                    <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                      {t("cookie.telemetryDesc")}
                    </p>
                  </div>
                  <input
                    type="checkbox"
                    checked={analyticsAllowed}
                    onChange={(e) => setAnalyticsAllowed(e.target.checked)}
                    id="analytics-opt-in"
                    className="mt-1 h-4 w-4 rounded border-gray-300 dark:border-gray-700 text-[#1a3a35] focus:ring-[#1a3a35]"
                    aria-label="Allow anonymous performance telemetry"
                  />
                </div>
              </div>

              {/* Actions */}
              <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-800 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => savePreferences(false)}
                  className="px-4 py-2 rounded-full border border-gray-300 dark:border-gray-700 text-xs font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  {t("cookie.saveNecessary")}
                </button>
                <button
                  type="button"
                  onClick={() => savePreferences(analyticsAllowed)}
                  className="px-5 py-2 rounded-full bg-[#1a3a35] hover:bg-[#132c28] text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
                >
                  {t("cookie.savePreferences")}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
