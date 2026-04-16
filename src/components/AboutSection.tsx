import { ArrowUpRight, Gauge, Layers3, PencilRuler, Workflow } from "lucide-react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const skills = [
  "React + TypeScript product builds",
  "Motion systems and interactive UI",
  "Design engineering and visual polish",
  "Performance-minded frontend architecture",
  "CMS, SEO, and conversion flows",
  "Team collaboration and technical leadership",
];

const capabilities = [
  {
    title: "Design Engineering",
    description: "I bridge polished visual design and production-quality implementation without losing usability.",
    icon: PencilRuler,
  },
  {
    title: "Interface Motion",
    description: "I use motion to direct attention, improve comprehension, and make a product feel premium.",
    icon: Workflow,
  },
  {
    title: "Frontend Systems",
    description: "Reusable components, maintainable patterns, and a codebase that stays pleasant to extend.",
    icon: Layers3,
  },
  {
    title: "Performance Focus",
    description: "Animation and atmosphere still need to ship fast, read clearly, and hold up on real devices.",
    icon: Gauge,
  },
];

const principles = [
  "Clarity before decoration",
  "Delight without friction",
  "Visual systems that scale",
  "Real outcomes, not just screenshots",
];

export const AboutSection = () => {
  const containerRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const panelY = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [80, -60]);
  const lineX = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [-40, 40]);

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative overflow-hidden border-b border-border/40 px-6 py-28 lg:px-12"
    >
      <motion.div
        style={{ x: lineX }}
        className="pointer-events-none absolute inset-x-0 top-10 h-px bg-gradient-to-r from-transparent via-primary/35 to-transparent"
      />

      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-xs font-semibold uppercase tracking-[0.32em] text-muted-foreground"
          >
            Selected Capabilities
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.85, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 text-[clamp(2.8rem,6vw,5.8rem)] font-black leading-[0.94] tracking-tight text-foreground"
          >
            Make product experiences feel
            <span className="block text-primary">alive, clear, and trusted.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.78, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground"
          >
            I care about what users feel, what teams can maintain, and what hiring managers can trust. The best work lands at the intersection of beautiful motion, clean systems, and visible business value.
          </motion.p>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {principles.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.68, delay: 0.2 + index * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-center gap-3 rounded-2xl border border-border/40 bg-card/40 px-4 py-3 backdrop-blur-xl"
              >
                <span className="h-2 w-2 rounded-full bg-primary" />
                <span className="text-sm text-muted-foreground">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div style={{ y: panelY }} className="grid gap-5 md:grid-cols-2">
          {capabilities.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-12%" }}
              transition={{ duration: 0.78, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group glass-panel rounded-[28px] p-6 lg:p-7"
            >
              <div className="flex items-center justify-between">
                <div className="rounded-2xl bg-primary/12 p-3 text-primary">
                  <item.icon className="h-5 w-5" />
                </div>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
              </div>
              <h3 className="mt-8 text-2xl font-bold tracking-tight text-foreground">{item.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
            </motion.article>
          ))}

          <motion.article
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-12%" }}
            transition={{ duration: 0.8, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
            className="glass-panel rounded-[28px] p-6 md:col-span-2 lg:p-7"
          >
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground">Working style</p>
                <h3 className="mt-4 text-3xl font-black tracking-tight text-foreground">
                  I like bold interfaces, but I like disciplined decisions even more.
                </h3>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 0.62, delay: 0.08 + index * 0.04, ease: [0.22, 1, 0.36, 1] }}
                    className="rounded-2xl border border-border/40 bg-background/40 px-4 py-4"
                  >
                    <p className="text-sm leading-relaxed text-muted-foreground">{skill}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.article>
        </motion.div>
      </div>
    </section>
  );
};
