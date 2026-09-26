import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, Rocket, ShieldCheck, Users } from "lucide-react";

const roles = [
  {
    role: "Senior Computer Engineer",
    company: "Bixx Tech",
    period: "2025 - Present",
    location: "Dar es Salaam, Tanzania",
    summary: "Systems diagnostics, technical support, and hands-on problem solving shaped my operational discipline.",
    points: [
      "Brought consistency to troubleshooting and service quality.",
      "Improved technical execution under real-world pressure and device variability.",
    ],
    icon: ShieldCheck,
  },
  {
    role: "Technical Project Manager",
    company: "Farols Company",
    period: "2026 - Present",
    location: "Mbeya, Tanzania",
    summary: "Project coordination strengthened how I translate client goals into scoped delivery and product decisions.",
    points: [
      "Coordinated design and development work across client-facing builds.",
      "Made planning, communication, and delivery feel tighter and more intentional.",
    ],
    icon: Users,
  },
  {
    role: "Frontend Development Specialist",
    company: "Quickdrop Co.",
    period: "2022 - 2023",
    location: "Dar es Salaam, Tanzania",
    summary: "Frontend production work sharpened my instincts around responsiveness, component structure, and product feel.",
    points: [
      "Built production interfaces with React and modern frontend workflows.",
      "Focused on performance, component quality, and consistent UI behavior.",
    ],
    icon: Rocket,
  },
];

export const CareerSection = () => {
  return (
    <section id="experience" className="border-b border-border/40 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-muted-foreground">Career Path</p>
          <h2 className="mt-5 text-[clamp(2.4rem,5vw,4.5rem)] font-black tracking-tight text-foreground">
            A background that blends systems, execution, and product sense.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            My work history is not a straight line, and that is part of the value. It gave me technical range, stronger delivery instincts, and a better feel for how digital work has to perform in the real world.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6">
          {roles.map((role, index) => (
            <motion.article
              key={role.role}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.75, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="glass-panel rounded-[28px] p-7"
            >
              <div className="grid gap-6 lg:grid-cols-[0.7fr_1.3fr]">
                <div>
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/12 text-primary">
                      <role.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold tracking-tight text-foreground">{role.role}</h3>
                      <p className="text-primary font-medium">{role.company}</p>
                    </div>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {role.period}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      {role.location}
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-base leading-relaxed text-muted-foreground">{role.summary}</p>
                  <div className="mt-5 space-y-3">
                    {role.points.map((point) => (
                      <div key={point} className="flex items-start gap-3">
                        <Briefcase className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                        <p className="text-sm leading-relaxed text-muted-foreground">{point}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
