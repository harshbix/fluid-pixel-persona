import { ArrowRight, Download, Sparkles } from "lucide-react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { buildResumeData } from "../lib/resumeBuilder";
import { useResumeDownload } from "../hooks/useResumeDownload";

const highlights = [
  { label: "Products shipped", value: "12+" },
  { label: "Core stacks", value: "React, TS, Node" },
  { label: "Focus", value: "Motion + performance" },
];

const proofPoints = [
  "Design-engineered interfaces with interaction systems that still feel fast.",
  "Frontend architecture built for maintainability, SEO, and measured UX quality.",
  "Available for product teams, high-end freelance builds, and creative engineering roles.",
];

export const HeroSection = () => {
  const shouldReduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const orbY = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [0, 180]);
  const gridY = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [0, -120]);
  const contentY = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [0, -50]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.9], [1, 0.25]);

  const resumeData = buildResumeData();
  const { handleDownload, HiddenResume } = useResumeDownload(resumeData);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden border-b border-border/40 bg-[radial-gradient(circle_at_top,hsl(var(--primary)/0.18),transparent_35%),linear-gradient(180deg,hsl(var(--background))_0%,hsl(var(--background))_55%,hsl(var(--card)/0.5)_100%)]"
    >
      <motion.div
        style={{ y: orbY }}
        className="pointer-events-none absolute inset-x-0 top-[-12rem] z-0 flex justify-center"
      >
        <div className="h-[34rem] w-[34rem] rounded-full bg-primary/15 blur-[140px]" />
      </motion.div>
      <motion.div
        style={{ y: gridY }}
        className="pointer-events-none absolute inset-0 z-0 opacity-40"
      >
        <div className="absolute inset-x-0 top-0 h-[55vh] bg-[linear-gradient(to_right,hsl(var(--border)/0.26)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.26)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:linear-gradient(to_bottom,rgba(0,0,0,0.7),transparent)]" />
      </motion.div>

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col justify-center px-6 pb-16 pt-28 lg:px-12"
      >
        <HiddenResume />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 inline-flex w-fit items-center gap-3 rounded-full border border-border/50 bg-card/50 px-4 py-2 backdrop-blur-xl"
        >
          <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_18px_hsl(var(--primary)/0.7)]" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.32em] text-muted-foreground">
            Creative Engineer / Product-Focused Frontend
          </span>
        </motion.div>

        <div className="grid items-end gap-16 lg:grid-cols-[1.25fr_0.75fr]">
          <div className="max-w-4xl">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.95, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="text-[clamp(3.7rem,12vw,8.2rem)] font-black leading-[0.9] tracking-tight text-foreground"
            >
              Build interfaces
              <span className="block bg-gradient-to-r from-primary via-foreground to-accent bg-clip-text text-transparent">
                people remember.
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 max-w-2xl text-xl leading-relaxed text-muted-foreground md:text-2xl"
            >
              I&apos;m Junior Jeconia, a frontend engineer and digital builder creating high-performance product experiences with strong motion systems, sharp UI craft, and business-minded execution.
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
                View Selected Work
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <button
                type="button"
                onClick={handleDownload}
                className="group inline-flex h-14 items-center justify-center gap-3 rounded-2xl border border-border/60 bg-card/50 px-7 text-sm font-semibold uppercase tracking-[0.22em] text-foreground backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-card/80"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="glass-panel rounded-[28px] p-7 lg:p-8"
          >
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                  Why teams hire me
                </p>
                <p className="mt-2 text-2xl font-bold tracking-tight text-foreground">
                  Motion with discipline.
                </p>
              </div>
              <div className="rounded-2xl bg-primary/12 p-3 text-primary">
                <Sparkles className="h-5 w-5" />
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.32 + index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="rounded-2xl border border-border/50 bg-background/60 p-4"
                >
                  <div className="text-2xl font-black tracking-tight text-foreground">{item.value}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{item.label}</div>
                </motion.div>
              ))}
            </div>
            <div className="mt-6 space-y-3">
              {proofPoints.map((point, index) => (
                <motion.div
                  key={point}
                  initial={{ opacity: 0, x: 18 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.45 + index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="flex items-start gap-3 rounded-2xl border border-border/40 bg-background/40 px-4 py-3"
                >
                  <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                  <p className="text-sm leading-relaxed text-muted-foreground">{point}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 grid gap-4 border-t border-border/40 pt-8 md:grid-cols-3"
        >
          {[
            "Turning concept-heavy ideas into polished production interfaces.",
            "Balancing animation, readability, and performance on real product surfaces.",
            "Building portfolio and business sites that feel premium and convert trust quickly.",
          ].map((item) => (
            <div key={item} className="rounded-2xl border border-border/40 bg-card/35 p-4 backdrop-blur-xl">
              <p className="text-sm leading-relaxed text-muted-foreground">{item}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};
