import { ArrowRight, Download } from "lucide-react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { buildResumeData } from "../lib/resumeBuilder";
import { useResumeDownload } from "../hooks/useResumeDownload";

const chips = ["React", "TypeScript", "Motion", "UI Systems"];

export const PremiumHeroSection = () => {
  const shouldReduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const orbY = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [0, 140]);
  const panelY = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [0, -40]);

  const resumeData = buildResumeData();
  const { handleDownload, HiddenResume } = useResumeDownload(resumeData);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden border-b border-border/40 bg-[radial-gradient(circle_at_top,hsl(var(--primary)/0.16),transparent_30%),linear-gradient(180deg,hsl(var(--background))_0%,hsl(var(--background))_70%,hsl(var(--card)/0.45)_100%)]"
    >
      <HiddenResume />
      <motion.div
        style={{ y: orbY }}
        className="pointer-events-none absolute inset-x-0 top-[-10rem] flex justify-center"
      >
        <div className="h-[30rem] w-[30rem] rounded-full bg-primary/15 blur-[120px]" />
      </motion.div>

      <div className="relative z-10 mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-6 pb-16 pt-28 lg:grid-cols-[1.1fr_0.9fr] lg:px-12">
        <div className="max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex rounded-full border border-border/50 bg-card/45 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.32em] text-muted-foreground backdrop-blur-xl"
          >
            Junior Jeconia / Frontend Engineer
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 text-[clamp(3.4rem,11vw,7.5rem)] font-black leading-[0.9] tracking-tight text-foreground"
          >
            Premium.
            <span className="block bg-gradient-to-r from-primary via-foreground to-accent bg-clip-text text-transparent">
              Artistic.
            </span>
            <span className="block">Straightforward.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 max-w-lg text-lg leading-relaxed text-muted-foreground md:text-xl"
          >
            I design and build motion-led web experiences that feel sharp, clean, and memorable.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <a
              href="#projects"
              className="group inline-flex h-14 items-center justify-center gap-3 rounded-2xl bg-foreground px-7 text-sm font-semibold uppercase tracking-[0.22em] text-background transition-transform duration-300 hover:-translate-y-1"
            >
              View Work
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <button
              type="button"
              onClick={handleDownload}
              className="inline-flex h-14 items-center justify-center gap-3 rounded-2xl border border-border/60 bg-card/45 px-7 text-sm font-semibold uppercase tracking-[0.22em] text-foreground backdrop-blur-xl transition-transform duration-300 hover:-translate-y-1"
            >
              <Download className="h-4 w-4" />
              Resume
            </button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          style={{ y: panelY }}
          className="glass-panel rounded-[30px] p-5"
        >
          <div className="rounded-[24px] border border-border/40 bg-background/55 p-5">
            <div className="mb-5 flex items-center justify-between">
              <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-muted-foreground">
                Interactive Motion
              </span>
              <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_16px_hsl(var(--primary)/0.8)]" />
            </div>

            <div className="grid grid-cols-6 gap-2">
              {Array.from({ length: 24 }).map((_, index) => (
                <motion.div
                  key={index}
                  animate={shouldReduceMotion ? undefined : { scale: [0.8, 1.12, 0.8], opacity: [0.3, 1, 0.3], y: [0, -6, 0] }}
                  transition={{ duration: 2.6, delay: index * 0.04, repeat: Infinity, ease: "easeInOut" }}
                  className="aspect-square rounded-full bg-primary/65"
                />
              ))}
            </div>

            <div className="mt-6 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

            <div className="mt-6 grid grid-cols-2 gap-3">
              {chips.map((chip, index) => (
                <motion.div
                  key={chip}
                  animate={shouldReduceMotion ? undefined : { x: [0, 4, 0], opacity: [0.65, 1, 0.65] }}
                  transition={{ duration: 3.2, delay: index * 0.14, repeat: Infinity, ease: "easeInOut" }}
                  className="rounded-2xl border border-border/40 bg-card/45 px-4 py-3 text-center text-sm text-foreground"
                >
                  {chip}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
