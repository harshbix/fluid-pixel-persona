import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowRight, Download, Package, ExternalLink, Check } from "lucide-react";
import { motion } from "framer-motion";
import { DIGITAL_PRODUCTS } from "../../data/portfolioData";

export const ProductsPreviewSection: React.FC = () => {
  return (
    <section id="products-preview" className="py-20 lg:py-28 px-6 lg:px-8 bg-background border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Apple-minimal Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-xs font-mono font-semibold uppercase tracking-widest text-[#1a3a35] dark:text-emerald-400 mb-3">
              <Package className="w-3.5 h-3.5" />
              <span>Digital Materials</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight">
              Kits, Templates &amp; Guides.
            </h2>
            <p className="mt-3 text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl font-normal leading-relaxed">
              Curated software starters, workstation blueprints, and design tokens engineered for real-world projects.
            </p>
          </div>

          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-900 dark:text-white hover:text-[#1a3a35] dark:hover:text-emerald-400 transition-colors"
          >
            <span>Explore All Materials</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 2x2 Grid with Kepha Cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {DIGITAL_PRODUCTS.map((prod, index) => (
            <motion.div
              key={prod.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group rounded-[16px] border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/60 p-6 sm:p-8 flex flex-col justify-between hover:border-[#1a3a35] dark:hover:border-emerald-500/40 transition-all duration-300 hover:shadow-xl"
            >
              <div>
                {/* Header row with Category and Price */}
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700">
                    {prod.category}
                  </span>
                  <div className="flex items-center gap-2">
                    {prod.badge && (
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                        {prod.badge}
                      </span>
                    )}
                    <span className="text-sm font-bold text-gray-900 dark:text-white">
                      {prod.price}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white tracking-tight mb-2 group-hover:text-[#1a3a35] dark:group-hover:text-emerald-400 transition-colors">
                  {prod.title}
                </h3>

                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  {prod.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-2 mb-6 pt-4 border-t border-gray-100 dark:border-gray-800">
                  {prod.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
                      <Check className="w-3.5 h-3.5 text-[#1a3a35] dark:text-emerald-400 flex-shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action buttons */}
              <div className="pt-4 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between gap-4 flex-wrap">
                <span className="text-xs font-mono text-gray-400">
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
                      Preview <ExternalLink className="w-3 h-3" />
                    </a>
                  )}

                  <a
                    href={prod.downloadUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-xs font-bold uppercase tracking-wider hover:bg-gray-800 dark:hover:bg-gray-100 transition-all shadow-sm"
                  >
                    <span>Get Resource</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
