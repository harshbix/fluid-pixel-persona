import { Link } from "react-router-dom";
import { ArrowLeft, Cookie, CheckCircle2, ShieldCheck, Sliders, RefreshCw } from "lucide-react";
import { SEO } from "../seo";
import { SiteFooter } from "../components/layout/SiteFooter";
import { PERSONAL_INFO } from "../data/portfolioData";
import { useLanguage } from "../context/LanguageContext";

export default function CookiePolicy() {
  const { t } = useLanguage();
  const lastUpdated = "September 2026";

  const openCookiePreferences = () => {
    window.dispatchEvent(new CustomEvent("open-cookie-settings"));
  };

  return (
    <>
      <SEO
        title="Cookie & Storage Policy | Junior Jeconia"
        description="Clear explanation of how cookies and local browser storage are used for theme and language preferences on Junior Jeconia's portfolio."
        url="https://jeconiajunior.vercel.app/cookie-policy"
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
              <Cookie className="w-3.5 h-3.5" />
              <span>Storage Transparency</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight">
              Cookie &amp; Local Storage Policy
            </h1>
            <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 font-mono">
              {t("legal.lastUpdated")}: {lastUpdated} &bull; Dar es Salaam, Tanzania
            </p>
          </div>
        </section>

        {/* Content Body */}
        <section className="px-6 lg:px-8 py-16 max-w-4xl mx-auto">
          <div className="space-y-12 text-sm sm:text-base leading-relaxed text-gray-700 dark:text-gray-300">
            {/* 1. What Are Cookies and Local Storage */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white tracking-tight flex items-center gap-2.5">
                <Cookie className="w-5 h-5 text-[#1a3a35] dark:text-emerald-400" />
                1. Cookies vs. Local Storage
              </h2>
              <p>
                Cookies are small text files placed on your device by a web server that are sent back with every request. Modern web applications also use <strong className="text-gray-900 dark:text-white">HTML5 Local Storage</strong>, which stores basic user interface preferences directly within your browser without sending unnecessary data over the network on every click.
              </p>
              <p>
                This portfolio avoids invasive tracking technologies. I do not use advertising cookies, third-party remarketing pixels, or fingerprinting scripts.
              </p>
            </div>

            {/* 2. What We Store */}
            <div className="space-y-4 border-t border-gray-200 dark:border-gray-800 pt-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white tracking-tight flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 text-[#1a3a35] dark:text-emerald-400" />
                2. Exact Technologies Used
              </h2>
              <p>
                The only client storage used on this website serves essential user interface functionality:
              </p>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden">
                  <thead className="bg-gray-100 dark:bg-gray-800/60 font-mono uppercase text-gray-900 dark:text-white text-xs">
                    <tr>
                      <th className="p-3 border-b border-gray-200 dark:border-gray-800">Storage Key</th>
                      <th className="p-3 border-b border-gray-200 dark:border-gray-800">Type</th>
                      <th className="p-3 border-b border-gray-200 dark:border-gray-800">Purpose</th>
                      <th className="p-3 border-b border-gray-200 dark:border-gray-800">Lifespan</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                    <tr>
                      <td className="p-3 font-mono font-semibold text-gray-900 dark:text-white">theme-mode</td>
                      <td className="p-3 text-gray-600 dark:text-gray-400">Local Storage</td>
                      <td className="p-3 text-gray-600 dark:text-gray-400">Remembers whether you prefer Dark or Light color mode.</td>
                      <td className="p-3 text-gray-600 dark:text-gray-400">Persistent until cleared</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-mono font-semibold text-gray-900 dark:text-white">portfolio_lang</td>
                      <td className="p-3 text-gray-600 dark:text-gray-400">Local Storage</td>
                      <td className="p-3 text-gray-600 dark:text-gray-400">Remembers your chosen language (English or Swahili).</td>
                      <td className="p-3 text-gray-600 dark:text-gray-400">Persistent until cleared</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-mono font-semibold text-gray-900 dark:text-white">portfolio_cookie_consent</td>
                      <td className="p-3 text-gray-600 dark:text-gray-400">Local Storage</td>
                      <td className="p-3 text-gray-600 dark:text-gray-400">Records your acknowledgment of this notice.</td>
                      <td className="p-3 text-gray-600 dark:text-gray-400">Persistent until cleared</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* 3. Managing Your Preferences */}
            <div className="space-y-4 border-t border-gray-200 dark:border-gray-800 pt-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white tracking-tight flex items-center gap-2.5">
                <Sliders className="w-5 h-5 text-[#1a3a35] dark:text-emerald-400" />
                3. Manage Your Preferences
              </h2>
              <p>
                You can review or adjust your preferences at any time using the button below or via your browser&apos;s privacy settings:
              </p>
              <div>
                <button
                  type="button"
                  onClick={openCookiePreferences}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1a3a35] hover:bg-[#132c28] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-sm"
                >
                  <Sliders className="w-3.5 h-3.5 text-emerald-300" />
                  <span>Open Cookie &amp; Storage Settings</span>
                </button>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                You can also clear local storage at any time through your browser developer tools or settings menu without impacting the usability of the site.
              </p>
            </div>

            {/* 4. Questions */}
            <div className="space-y-4 border-t border-gray-200 dark:border-gray-800 pt-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white tracking-tight flex items-center gap-2.5">
                <RefreshCw className="w-5 h-5 text-[#1a3a35] dark:text-emerald-400" />
                4. Questions &amp; Contact
              </h2>
              <p>
                If you have any questions about storage practices on this site, contact <a href={`mailto:${PERSONAL_INFO.email}`} className="text-[#1a3a35] dark:text-emerald-400 font-semibold underline">{PERSONAL_INFO.email}</a>.
              </p>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
