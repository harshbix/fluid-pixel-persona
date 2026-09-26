import { Link } from "react-router-dom";
import { ArrowRight, Check, Sparkles, Terminal, Palette, Database } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeader } from "../common/SectionHeader";
import { PERSONAL_INFO } from "../../data/portfolioData";

export const AboutIntroSection = () => {
  const pillars = [
    {
      icon: Palette,
      title: "UI/UX & Frontend Precision",
      description:
        "Interfaces designed with intention: strict spacing, clear typographic contrast, responsive layouts that never break, and subtle micro-interactions that make software feel effortless.",
    },
    {
      icon: Terminal,
      title: "Type-Safe Full-Stack Logic",
      description:
        "Writing modular TypeScript, structuring clean React components, building secure Node/Express REST endpoints, and maintaining clean state across client and server boundaries.",
    },
    {
      icon: Database,
      title: "Resilient Data & Cloud Deployments",
      description:
        "PostgreSQL and Supabase modeling, optimized asset delivery, SSL configuration, and low-latency edge caching with Vercel for high real-world speed.",
    },
    {
      icon: Sparkles,
      title: "Product Thinking Over Merely Coding",
      description:
        "I don't simply assemble templates. I evaluate why a feature exists, how it guides user decision-making, and how to eliminate friction before writing code.",
    },
  ];

  return (
    <section id="about" className="py-24 lg:py-32 px-6 lg:px-12 border-b border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          badge="01 / Introduction"
          title="Building software sits somewhere between"
          subtitle="engineering, design, and problem solving."
          description="I am Junior Jeconia, a developer who bridges the gap between visual craft and software architecture. Rather than treating frontend and backend as detached silos, I build unified digital products designed to work reliably in production."
        />

        {/* Narrative & Pillars Grid */}
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-16 items-start mt-12">
          {/* Left Narrative Block */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6 text-muted-foreground text-base md:text-lg leading-relaxed"
          >
            <p>
              My journey began in hardware and systems infrastructure at <span className="text-foreground font-semibold">Bixx Tech</span> and <span className="text-foreground font-semibold">Tanzania Posts Corporation</span>, instilling respect for real-world reliability and device constraints.
            </p>
            <p>
              At <span className="text-foreground font-semibold">Farols Company</span> and across independent products, I build web experiences that are fast, accessible, and dependable.
            </p>

            <div className="pt-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-primary hover:text-primary/80 transition-colors"
              >
                Read Full Story &amp; Philosophy
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          {/* Right 4 Pillars Cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {pillars.map((pillar, idx) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.7, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-2xl border border-white/[0.08] bg-card/40 p-6 backdrop-blur-sm hover:border-primary/30 transition-all duration-300"
              >
                <div className="h-10 w-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-4">
                  <pillar.icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-foreground mb-2">{pillar.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
