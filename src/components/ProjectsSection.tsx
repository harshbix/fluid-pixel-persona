import { ArrowUpRight, Eye, Github } from "lucide-react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  role: string;
  outcome: string;
  impact: string[];
};

export const projects: Project[] = [
  {
    id: 1,
    title: 'Bixx Dictionary',
    description: "A fast, typography-led dictionary experience focused on quick lookup, clarity, and smooth interaction design.",
    image: "/assets/projects/bixxdictionary.webp",
    tags: ["React", "Dictionary API", "Tailwind CSS"],
    liveUrl: "https://bixxdictionary.vercel.app/",
    githubUrl: "https://github.com/harshbix/bixxdictionary",
    role: "Product design, frontend engineering, interaction polish",
    outcome: "Turned a utility tool into a focused reading-first product surface.",
    impact: [
      "Structured the interface around fast search and immediate comprehension.",
      "Used restrained motion and typographic hierarchy to reduce friction.",
      "Built a strong single-purpose experience that feels more premium than generic reference tools.",
    ],
  },
  {
    id: 2,
    title: 'RECAN Foundation',
    description: "A nonprofit website built to build trust quickly, explain mission clearly, and support conversion-focused donation flows.",
    image: "/assets/projects/recanfoundation.webp",
    tags: ["Next.js", "React", "Tailwind CSS", "NGO"],
    liveUrl: "https://recanfoundation.org/",
    githubUrl: "https://github.com/harshbix/recanfoundation",
    role: "Design direction, responsive frontend, trust-building UX",
    outcome: "Created a cleaner storytelling flow for mission, credibility, and action.",
    impact: [
      "Shaped the layout around clarity for first-time visitors and donors.",
      "Improved scanning with stronger information grouping and visual contrast.",
      "Balanced emotional tone with practical conversion paths and accessibility.",
    ],
  },
  {
    id: 3,
    title: "YSStoree",
    description: "A modern e-commerce storefront designed to feel editorial, clear, and conversion-aware across devices.",
    image: "/assets/projects/ysstoree.webp",
    tags: ["Next.js", "React", "E-commerce", "Tailwind CSS"],
    liveUrl: "https://ysstoree.com/",
    githubUrl: "https://github.com/ysstoree/ysstoree",
    role: "Frontend engineering, visual system design, storefront UX",
    outcome: "Blended shopping utility with a more premium, lifestyle-driven presentation.",
    impact: [
      "Designed a stronger visual rhythm for browsing and product discovery.",
      "Improved merchandising through better hierarchy and card treatment.",
      "Pushed the interface toward a more brandable and memorable retail feel.",
    ],
  },
  {
    id: 4,
    title: 'Henry Peter Portfolio',
    description: "A cinematic portfolio centered on motion, pacing, and immersive personal storytelling.",
    image: "/assets/projects/henrypeter.webp",
    tags: ["React", "Motion Design", "Tailwind CSS"],
    liveUrl: "https://henrypeter.vercel.app/",
    githubUrl: "https://github.com/harshbix/henrypeter",
    role: "Creative engineering, motion direction, narrative layout",
    outcome: "Built an atmospheric personal site that feels curated rather than templated.",
    impact: [
      "Used motion sequencing to control pacing and attention.",
      "Built more immersive section transitions and visual reveals.",
      "Showed how personal-brand work can still feel technically intentional.",
    ],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 42 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: index * 0.08,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export const ProjectsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const railY = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [120, -80]);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative overflow-hidden border-b border-border/40 px-6 py-28 lg:px-12"
    >
      <motion.div
        style={{ y: railY }}
        className="pointer-events-none absolute right-[6%] top-20 hidden h-[70%] w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent lg:block"
      />

      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14 max-w-3xl"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-muted-foreground">Selected Work</p>
          <h2 className="mt-5 text-[clamp(2.8rem,6vw,5.8rem)] font-black leading-[0.94] tracking-tight text-foreground">
            Projects that show taste,
            <span className="block text-primary">systems thinking, and product judgment.</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Each project here is more than a screenshot. I&apos;m interested in how a product reads, performs, and earns trust in the first few moments of use.
          </p>
        </motion.div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-12%" }}
              className="grid gap-6 rounded-[30px] border border-border/40 bg-card/30 p-5 backdrop-blur-xl md:p-7 lg:grid-cols-[1.1fr_0.9fr]"
            >
              <div className="relative overflow-hidden rounded-[24px] border border-border/40 bg-background/60">
                <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between border-b border-border/40 bg-background/70 px-4 py-3 backdrop-blur-xl">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-muted-foreground">
                    Case {String(index + 1).padStart(2, "0")}
                  </span>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/50 bg-card/60 text-foreground transition-transform duration-300 hover:-translate-y-1"
                    aria-label={`Open ${project.title}`}
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading={index < 2 ? "eager" : "lazy"}
                    fetchpriority={index < 2 ? "high" : "auto"}
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>

              <div className="flex flex-col justify-between gap-8">
                <div>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-border/50 bg-background/45 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="mt-5 text-3xl font-black tracking-tight text-foreground">{project.title}</h3>
                  <p className="mt-4 text-base leading-relaxed text-muted-foreground">{project.description}</p>

                  <div className="mt-6 grid gap-4">
                    <div className="rounded-2xl border border-border/40 bg-background/40 p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">Role</p>
                      <p className="mt-2 text-sm leading-relaxed text-foreground/90">{project.role}</p>
                    </div>
                    <div className="rounded-2xl border border-border/40 bg-background/40 p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">Outcome</p>
                      <p className="mt-2 text-sm leading-relaxed text-foreground/90">{project.outcome}</p>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="space-y-3">
                    {project.impact.map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                        <p className="text-sm leading-relaxed text-muted-foreground">{item}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl bg-foreground px-5 text-sm font-semibold uppercase tracking-[0.18em] text-background transition-transform duration-300 hover:-translate-y-1"
                    >
                      <Eye className="h-4 w-4" />
                      Live Site
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl border border-border/50 bg-card/40 px-5 text-sm font-semibold uppercase tracking-[0.18em] text-foreground transition-transform duration-300 hover:-translate-y-1"
                    >
                      <Github className="h-4 w-4" />
                      Source
                    </a>
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
