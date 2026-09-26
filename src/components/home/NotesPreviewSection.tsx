import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Clock, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeader } from "../common/SectionHeader";
import { NOTES } from "../../data/portfolioData";

export const NotesPreviewSection = () => {
  return (
    <section id="notes" className="py-24 lg:py-32 px-6 lg:px-12 border-b border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeader
            badge="08 / Field Notes"
            title="Engineering Notes &amp; Thoughts"
            subtitle="Observations on web craft and software delivery."
            description="Short essays and technical breakdowns documenting things learned while architecting frontends, optimizing performance, and building systems."
            className="mb-0 md:mb-0"
          />

          <Link
            to="/notes"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-primary hover:text-primary/80 transition-colors self-start md:self-end"
          >
            All Notes ({NOTES.length}) &rarr;
          </Link>
        </div>

        {/* Notes Grid */}
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {NOTES.map((note, index) => (
            <motion.article
              key={note.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.65, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group rounded-[26px] border border-white/[0.08] bg-card/40 p-7 backdrop-blur-sm hover:border-primary/40 hover:bg-card/70 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-white/[0.06] mb-5">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-primary">
                    {note.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-muted-foreground">
                    <Clock className="w-3 h-3" />
                    <span>{note.readTime}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors tracking-tight leading-snug">
                  {note.title}
                </h3>

                <p className="mt-3 text-xs text-muted-foreground leading-relaxed">
                  {note.summary}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between">
                <span className="text-[11px] font-mono text-muted-foreground/80">{note.date}</span>
                <Link
                  to={`/notes`}
                  className="inline-flex items-center gap-1 text-xs font-bold text-foreground group-hover:text-primary transition-colors"
                >
                  Read Note <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
