import { useState } from "react";
import { Link } from "react-router-dom";
import { Clock, Calendar, ArrowRight, Tag, BookOpen, X, Download, ArrowUpRight, Package } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SEO } from "../seo";
import { ConversionCTASection } from "../components/home/ConversionCTASection";
import { SiteFooter } from "../components/layout/SiteFooter";
import { NOTES, NoteItem } from "../data/portfolioData";

export default function Notes() {
  const [selectedNote, setSelectedNote] = useState<NoteItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "UI/UX & Frontend", "Design Engineering", "Performance & Architecture"];

  const filtered =
    activeCategory === "All"
      ? NOTES
      : NOTES.filter((n) => n.category === activeCategory);

  return (
    <>
      <SEO
        title="Field Notes & Blog | Junior Jeconia"
        description="Engineering notes, UI design observations, and web architecture lessons by Junior Jeconia (harshbix)."
        url="https://jeconiajunior.vercel.app/notes"
      />

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
                <BookOpen className="w-3.5 h-3.5" />
                <span>Field Notes &bull; Technical Blog</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white leading-[1.05]">
                Thoughts on Craft.
                <span className="block text-gray-500 dark:text-gray-400 text-2xl sm:text-4xl lg:text-5xl font-medium mt-1">
                  Systems, code &amp; digital materials.
                </span>
              </h1>

              <p className="mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-300 font-normal leading-relaxed">
                Field notes, architecture lessons, and hardware blueprints from Bixx Tech.
              </p>
            </motion.div>

            {/* Filter Navigation */}
            <div className="mt-12 flex flex-wrap items-center gap-2 pt-6 border-t border-gray-200 dark:border-gray-800">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-full px-4 py-2 text-xs font-semibold tracking-wider uppercase transition-all duration-200 ${
                    activeCategory === cat
                      ? "bg-gray-900 dark:bg-white text-white dark:text-gray-900 shadow-sm"
                      : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white border border-gray-200 dark:border-gray-700"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured & Notes List */}
        <section className="px-6 lg:px-8 py-20 border-b border-gray-200 dark:border-gray-800 bg-background">
          <div className="max-w-5xl mx-auto space-y-10">
            {/* Note Reader Modal/Panel if a note is selected */}
            <AnimatePresence>
              {selectedNote && (
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  className="rounded-[16px] border border-[#1a3a35] dark:border-emerald-500/40 bg-white dark:bg-gray-900 p-6 sm:p-10 shadow-2xl relative mb-12"
                >
                  <div className="flex items-center justify-between pb-6 border-b border-gray-100 dark:border-gray-800 mb-6">
                    <div className="flex items-center gap-3">
                      <span className="rounded-full bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 text-xs font-mono font-semibold uppercase tracking-wider text-[#1a3a35] dark:text-emerald-400">
                        {selectedNote.category}
                      </span>
                      <span className="text-xs font-mono text-gray-500 dark:text-gray-400">{selectedNote.date}</span>
                      <span className="text-xs font-mono text-gray-500 dark:text-gray-400">&bull; {selectedNote.readTime}</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => setSelectedNote(null)}
                      className="inline-flex items-center gap-1 text-xs font-mono font-bold uppercase tracking-wider text-gray-500 hover:text-gray-900 dark:hover:text-white py-1 px-3 rounded-lg border border-gray-200 dark:border-gray-700"
                    >
                      <X className="w-3.5 h-3.5" />
                      Close
                    </button>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white tracking-tight mb-6">
                    {selectedNote.title}
                  </h2>

                  <div className="text-gray-700 dark:text-gray-300 leading-relaxed text-base space-y-4">
                    <p className="font-medium text-gray-900 dark:text-white text-lg">
                      {selectedNote.summary}
                    </p>
                    <p>
                      {selectedNote.content}
                    </p>
                  </div>

                  {/* Connected Digital Materials Link */}
                  <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between flex-wrap gap-4">
                    <span className="text-xs font-mono text-gray-500 dark:text-gray-400">
                      Author: Junior Jeconia (harshbix)
                    </span>
                    <Link
                      to="/products"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1a3a35] dark:text-emerald-400 hover:underline"
                    >
                      <Package className="w-3.5 h-3.5" />
                      Explore Starter Kits &amp; Digital Materials &rarr;
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Notes List Cards */}
            <div className="space-y-6">
              {filtered.map((note, index) => (
                <motion.article
                  key={note.slug}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="group rounded-[16px] border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/60 p-6 sm:p-8 hover:border-[#1a3a35] dark:hover:border-emerald-500/40 transition-all duration-300 hover:shadow-lg flex flex-col md:flex-row md:items-center justify-between gap-6"
                >
                  <div className="max-w-2xl">
                    <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400 mb-2 font-mono">
                      <span className="text-[#1a3a35] dark:text-emerald-400 font-semibold uppercase tracking-wider">
                        {note.category}
                      </span>
                      <span>&bull;</span>
                      <span>{note.date}</span>
                      <span>&bull;</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {note.readTime}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white group-hover:text-[#1a3a35] dark:group-hover:text-emerald-400 transition-colors tracking-tight">
                      {note.title}
                    </h3>

                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                      {note.summary}
                    </p>
                  </div>

                  <div className="flex-shrink-0">
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedNote(note);
                        window.scrollTo({ top: 360, behavior: "smooth" });
                      }}
                      className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-gray-800 dark:text-gray-200 hover:bg-[#1a3a35] hover:text-white dark:hover:bg-emerald-400 dark:hover:text-gray-950 transition-all shadow-sm"
                    >
                      <span>Read Note</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </motion.article>
              ))}
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
