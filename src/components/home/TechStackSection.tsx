import { motion } from "framer-motion";
import { Code2, Server, Database, Wrench } from "lucide-react";
import { SectionHeader } from "../common/SectionHeader";
import { TECH_STACK } from "../../data/portfolioData";

export const TechStackSection = () => {
  const groups = [
    {
      title: "Frontend Engineering",
      subtitle: "Interfaces & User Experience",
      icon: Code2,
      skills: TECH_STACK.frontend,
    },
    {
      title: "Backend & Server Architecture",
      subtitle: "Services, APIs & Business Logic",
      icon: Server,
      skills: TECH_STACK.backend,
    },
    {
      title: "Databases & Cloud Hosting",
      subtitle: "Persistence, Auth & Deployment",
      icon: Database,
      skills: TECH_STACK.dataAndCloud,
    },
    {
      title: "Tooling & Workflow Systems",
      subtitle: "Version Control & Optimization",
      icon: Wrench,
      skills: TECH_STACK.toolsAndArchitecture,
    },
  ];

  return (
    <section id="tech-stack" className="py-24 lg:py-32 px-6 lg:px-12 border-b border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          badge="06 / Technology Matrix"
          title="Architecture & Technologies"
          subtitle="Grounded in production-tested tools."
          description="I choose battle-tested libraries and runtimes that favor maintainability, predictable typing, and long-term stability over fragile trends."
        />

        {/* 4 Group Cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mt-14">
          {groups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.7, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-[28px] border border-white/[0.08] bg-card/40 p-8 backdrop-blur-sm hover:border-primary/40 transition-all duration-300"
            >
              {/* Group Header */}
              <div className="flex items-center gap-3.5 pb-6 border-b border-white/[0.06] mb-6">
                <div className="h-10 w-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                  <group.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">{group.title}</h3>
                  <p className="text-xs text-muted-foreground">{group.subtitle}</p>
                </div>
              </div>

              {/* Skills List without Percentage Bars */}
              <div className="space-y-3">
                {group.skills.map((item) => (
                  <div
                    key={item.name}
                    className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 p-3 rounded-xl border border-white/[0.04] bg-white/[0.02] hover:bg-white/[0.05] transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      <span className="font-semibold text-sm text-foreground">{item.name}</span>
                    </div>
                    <span className="text-xs text-muted-foreground font-mono">{item.note}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
