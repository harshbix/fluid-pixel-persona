import { motion } from "framer-motion";
import { ArrowRight, Code2, LayoutDashboard, Zap } from "lucide-react";

const offers = [
  {
    title: "Frontend Build",
    description: "Product pages, marketing sites, and app surfaces with strong motion, sharper hierarchy, and cleaner interaction design.",
    icon: LayoutDashboard,
  },
  {
    title: "Design Engineering",
    description: "Turning rough product ideas or static designs into polished interfaces that feel ready for real users.",
    icon: Code2,
  },
  {
    title: "UX Refresh",
    description: "Improving a site that already works, but needs better trust, better clarity, and better perceived quality.",
    icon: Zap,
  },
];

export const ServicesSection = () => {
  return (
    <section className="border-b border-border/40 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-muted-foreground">What I Can Build</p>
          <h2 className="mt-5 text-[clamp(2.4rem,5vw,4.5rem)] font-black tracking-tight text-foreground">
            Better than a pricing table.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            If someone lands here because they want to hire me, they should understand the kind of work I do well without feeling like they opened an agency package brochure.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {offers.map((offer, index) => (
            <motion.div
              key={offer.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.75, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group glass-panel rounded-[28px] p-7"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/12 text-primary">
                <offer.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-6 text-2xl font-bold tracking-tight">{offer.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{offer.description}</p>
              <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                Best fit
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
