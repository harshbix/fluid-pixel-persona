import { useState } from "react";
import { ExternalLink, Package, Check, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SEO } from "../seo";
import { ConversionCTASection } from "../components/home/ConversionCTASection";
import { SiteFooter } from "../components/layout/SiteFooter";
import { DIGITAL_PRODUCTS } from "../data/portfolioData";
import { useLanguage } from "../context/LanguageContext";

export default function Products() {
  const { t, tContent } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = [
    { id: "All", label: t("common.all") },
    { id: "Code Template", label: "Code Template" },
    { id: "Engineering Guide", label: "Engineering Guide" },
    { id: "Hardware Guide", label: "Hardware Guide" },
    { id: "Design Tokens", label: "Design Tokens" },
  ];

  const filtered =
    activeCategory === "All"
      ? DIGITAL_PRODUCTS
      : DIGITAL_PRODUCTS.filter((p) => p.category.en === activeCategory);

  return (
    <>
      <SEO
        title={`${t("productsPage.title")} | Junior Jeconia`}
        description={t("productsPage.description")}
        url="https://jeconiajunior.vercel.app/products"
      />

      <main className="relative z-10 pt-10">
        {/* Page Hero */}
        <section className="px-6 lg:px-8 py-16 md:py-24 border-b border-gray-200 dark:border-gray-800 relative bg-background">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-3xl"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-xs font-mono font-semibold uppercase tracking-widest text-[#1a3a35] dark:text-emerald-400 mb-4">
                <Package className="w-3.5 h-3.5" />
                <span>{t("productsPage.eyebrow")}</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white leading-[1.05]">
                {t("productsPage.title")}
                <span className="block text-gray-500 dark:text-gray-400 text-2xl sm:text-4xl lg:text-5xl font-medium mt-1">
                  {t("productsPage.subtitle")}
                </span>
              </h1>

              <p className="mt-6 text-base sm:text-lg text-gray-600 dark:text-gray-300 font-normal leading-relaxed">
                {t("productsPage.description")}
              </p>
            </motion.div>

            {/* Filter Pills */}
            <div className="mt-12 flex flex-wrap items-center gap-2 pt-6 border-t border-gray-200 dark:border-gray-800">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={`rounded-full px-4 py-2 text-xs font-semibold tracking-wider uppercase transition-all duration-200 ${
                    activeCategory === cat.id
                      ? "bg-gray-900 dark:bg-white text-white dark:text-gray-900 shadow-sm"
                      : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white border border-gray-200 dark:border-gray-700"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="px-6 lg:px-8 py-20 border-b border-gray-200 dark:border-gray-800 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <AnimatePresence>
                {filtered.map((prod, index) => (
                  <motion.article
                    key={prod.id}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -16 }}
                    transition={{ duration: 0.5, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
                    className="group rounded-[16px] border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/60 p-6 sm:p-8 flex flex-col justify-between hover:border-[#1a3a35] dark:hover:border-emerald-500/40 transition-all duration-300 hover:shadow-xl"
                  >
                    <div>
                      {/* Top Bar with Category, Badge & Price */}
                      <div className="flex items-center justify-between gap-4 mb-4">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700">
                          {tContent(prod.category)}
                        </span>
                        <div className="flex items-center gap-2">
                          {prod.badge && (
                            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                              {tContent(prod.badge)}
                            </span>
                          )}
                          <span className="text-sm font-bold text-gray-900 dark:text-white">
                            {prod.price}
                          </span>
                        </div>
                      </div>

                      {/* Title & Tagline */}
                      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white tracking-tight mb-2 group-hover:text-[#1a3a35] dark:group-hover:text-emerald-400 transition-colors">
                        {prod.title}
                      </h2>
                      <p className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-4">
                        {tContent(prod.tagline)}
                      </p>

                      <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                        {tContent(prod.description)}
                      </p>

                      {/* Included Features */}
                      <div className="rounded-[12px] bg-gray-50 dark:bg-gray-800/50 p-4 border border-gray-100 dark:border-gray-800 mb-6">
                        <span className="text-[10px] font-mono uppercase tracking-widest text-gray-500 dark:text-gray-400 block mb-2">
                          {t("productsPage.whatIsIncluded")}
                        </span>
                        <ul className="space-y-2">
                          {tContent(prod.highlights).map((h) => (
                            <li key={h} className="flex items-center gap-2 text-xs text-gray-700 dark:text-gray-300">
                              <Check className="w-3.5 h-3.5 text-[#1a3a35] dark:text-emerald-400 flex-shrink-0" />
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Footer Actions */}
                    <div className="pt-4 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between gap-4 flex-wrap">
                      <span className="text-xs font-mono text-gray-500 dark:text-gray-400">
                        {prod.format} &bull; {prod.version}
                      </span>

                      <div className="flex items-center gap-3">
                        {prod.previewUrl && (
                          <a
                            href={prod.previewUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-xs font-bold text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                          >
                            <span>{t("productsPage.liveDemo")}</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        )}

                        <a
                          href={prod.downloadUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-[#1a3a35] text-white hover:bg-[#132c28] text-xs font-bold uppercase tracking-wider transition-all shadow-md"
                        >
                          <Download className="w-3.5 h-3.5" />
                          <span>{t("productsPage.getResource")}</span>
                        </a>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* Conversion CTA */}
        <ConversionCTASection />
      </main>

      <SiteFooter />
    </>
  );
}
