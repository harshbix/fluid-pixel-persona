import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const roles = [
  {
    role: "Senior Computer Engineer",
    company: "Doctor PC Tanzania",
    period: "2025 - Present",
    location: "Dar es Salaam, Tanzania",
  },
  {
    role: "Technical Project Manager",
    company: "Farols Company",
    period: "2026 - Present",
    location: "Mbeya, Tanzania",
  },
  {
    role: "IT Systems Consultant",
    company: "Tanzania Posts Corporation",
    period: "2023 - 2025",
    location: "Mbeya, Tanzania",
  },
  {
    role: "Frontend Development Specialist",
    company: "Quickdrop Co.",
    period: "2022 - 2023",
    location: "Dar es Salaam, Tanzania",
  },
  {
    role: "Technical Solutions Analyst",
    company: "Web Technologies Ltd.",
    period: "2023",
    location: "Dodoma, Tanzania",
  },
];

export const PremiumCareerSection = () => {
  return (
    <section id="experience" className="border-b border-border/40 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-muted-foreground">Experience</p>
          <h2 className="mt-5 text-[clamp(2.4rem,5vw,4.5rem)] font-black tracking-tight text-foreground">
            Clean timeline.
            <span className="block text-primary">Real range.</span>
          </h2>
        </motion.div>

        <div className="mt-14 grid gap-4">
          {roles.map((role, index) => (
            <motion.div
              key={`${role.role}-${role.company}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.7, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="grid gap-4 rounded-[24px] border border-border/40 bg-card/25 p-5 md:grid-cols-[1.1fr_0.9fr_0.8fr]"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/12 text-primary">
                  <Briefcase className="h-4 w-4" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">{role.role}</p>
                  <p className="text-sm text-primary">{role.company}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" />
                {role.period}
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                {role.location}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
