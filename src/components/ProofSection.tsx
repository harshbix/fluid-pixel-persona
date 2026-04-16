import { motion } from "framer-motion";
import { Gauge, Layers3, Sparkles } from "lucide-react";

const signals = [
  {
    title: "Visual taste with purpose",
    description: "Interfaces should feel premium, but they also need to read fast and support decisions.",
    icon: Sparkles,
  },
  {
    title: "Systems that stay usable",
    description: "Good components, consistent interaction patterns, and layouts that scale matter as much as visuals.",
    icon: Layers3,
  },
  {
    title: "Motion that earns its place",
    description: "Animation should improve pacing and attention, not just announce itself.",
    icon: Gauge,
  },
];

const stats = [
  { value: "4", label: "Lead projects shown" },
  { value: "3", label: "Core strengths" },
  { value: "1", label: "Clear narrative" },
  { value: "100%", label: "Focus on trust" },
];

export const ProofSection = () => {
  return (
    <section className="border-b border-border/40 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-muted-foreground">Proof</p>
          <h2 className="mt-5 text-[clamp(2.4rem,5vw,4.5rem)] font-black tracking-tight text-foreground">
            The work should make the case.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            This portfolio leans on strong project framing, cleaner reasoning, and product signals that are easier to trust than generic praise.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {signals.map((signal, index) => (
            <motion.div
              key={signal.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.75, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="glass-panel rounded-[28px] p-7"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/12 text-primary">
                <signal.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-6 text-2xl font-bold tracking-tight">{signal.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{signal.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 grid gap-4 rounded-[28px] border border-border/40 bg-card/30 p-6 md:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.68, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-2xl border border-border/40 bg-background/35 p-5 text-center"
            >
              <div className="text-3xl font-black text-primary">{stat.value}</div>
              <div className="mt-2 text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
