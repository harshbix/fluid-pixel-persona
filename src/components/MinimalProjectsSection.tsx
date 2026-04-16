import { ArrowUpRight, Github } from "lucide-react";
import { motion } from "framer-motion";

const works = [
  {
    title: "Bixx Dictionary",
    image: "/assets/projects/bixxdictionary.webp",
    summary: "Fast, editorial dictionary interface.",
    liveUrl: "https://bixxdictionary.vercel.app/",
    githubUrl: "https://github.com/harshbix/bixxdictionary",
  },
  {
    title: "RECAN Foundation",
    image: "/assets/projects/recanfoundation.webp",
    summary: "Trust-first nonprofit web experience.",
    liveUrl: "https://recanfoundation.org/",
    githubUrl: "https://github.com/harshbix/recanfoundation",
  },
  {
    title: "YSStoree",
    image: "/assets/projects/ysstoree.webp",
    summary: "Premium-feel ecommerce storefront.",
    liveUrl: "https://ysstoree.com/",
    githubUrl: "https://github.com/ysstoree/ysstoree",
  },
  {
    title: "Henry Peter Portfolio",
    image: "/assets/projects/henrypeter.webp",
    summary: "Cinematic portfolio with immersive pacing.",
    liveUrl: "https://henrypeter.vercel.app/",
    githubUrl: "https://github.com/harshbix/henrypeter",
  },
  {
    title: "Overspeed Security",
    image: "/assets/projects/overspeed-security.webp",
    summary: "Corporate site with motion-led polish.",
    liveUrl: "https://overspeed-security.vercel.app/",
    githubUrl: "https://github.com/harshbix/overspeed-security",
  },
];

export const MinimalProjectsSection = () => {
  return (
    <section id="projects" className="border-b border-border/40 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-muted-foreground">Selected Work</p>
          <h2 className="mt-5 text-[clamp(2.5rem,5vw,4.8rem)] font-black tracking-tight text-foreground">
            Fewer words.
            <span className="block text-primary">Stronger signals.</span>
          </h2>
        </motion.div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {works.map((work, index) => (
            <motion.article
              key={work.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.78, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="group rounded-[28px] border border-border/40 bg-card/30 p-4 backdrop-blur-xl"
            >
              <div className="overflow-hidden rounded-[22px] border border-border/40">
                <img
                  src={work.image}
                  alt={work.title}
                  loading={index < 2 ? "eager" : "lazy"}
                  className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="mt-5 flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-bold tracking-tight text-foreground">{work.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{work.summary}</p>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href={work.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/50 bg-background/50 text-foreground"
                    aria-label={`Open ${work.title}`}
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                  <a
                    href={work.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/50 bg-background/50 text-foreground"
                    aria-label={`Source for ${work.title}`}
                  >
                    <Github className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
