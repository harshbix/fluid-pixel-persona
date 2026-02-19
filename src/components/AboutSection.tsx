import { Star } from "lucide-react";
import { motion } from "framer-motion";

const skills = [
  "Frontend Development",
  "UI/UX Design",
  "Full-Stack Development",
  "Prototyping",
  "Marketing Strategy",
  "Project Management",
];


export const AboutSection = () => {
  return (
    <section className="py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto space-y-24">
        {/* About Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-full rounded-3xl backdrop-blur-2xl bg-card/60 border border-border/30 shadow-2xl p-12 space-y-10 overflow-hidden"
        >
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 rounded-3xl pointer-events-none"></div>

          <div className="flex flex-col md:flex-row items-center md:items-start gap-12 md:gap-16 max-w-6xl mx-auto relative z-10">
            {/* Avatar with offset */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative shrink-0 md:mt-2"
            >
              <div className="absolute -inset-4 rounded-[2rem] bg-primary/10 -rotate-6 blur-xl" />
              <div className="relative w-40 h-40 md:w-48 md:h-48 overflow-hidden rounded-[2rem] border border-border/50 shadow-xl rotate-3 hover:rotate-0 transition-transform duration-500">
                <img
                  src="/assets/profile.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* About text - editorial flow */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="flex-1 space-y-8 text-left"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground">
                About Me.
              </h2>
              <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                <p>
                  A passionate designer and developer with over{" "}
                  <span className="text-foreground font-semibold">5 years</span> of
                  experience crafting digital experiences.
                </p>
                <p>
                  I specialize in
                  creating interfaces that users actually enjoy using, believing
                  in the power of thoughtful, invisible design to solve real problems.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Reviews */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex items-center justify-center gap-6 pt-10 border-t border-border/30 relative z-10"
          >
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <span className="font-semibold text-foreground text-lg">4.9</span>
            </div>
            <span className="text-base text-muted-foreground">
              (127 reviews)
            </span>
          </motion.div>

          {/* Stats - Left aligned */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="flex flex-wrap gap-12 md:gap-24 pt-10 border-t border-border/30 relative z-10 justify-start"
          >
            <div className="text-left">
              <div className="text-4xl font-extrabold text-foreground tracking-tight">150+</div>
              <div className="text-sm font-medium uppercase tracking-widest text-muted-foreground mt-2">Projects</div>
            </div>
            <div className="text-left">
              <div className="text-4xl font-extrabold text-foreground tracking-tight">5+</div>
              <div className="text-sm font-medium uppercase tracking-widest text-muted-foreground mt-2">Years</div>
            </div>
            <div className="text-left">
              <div className="text-4xl font-extrabold text-foreground tracking-tight">50+</div>
              <div className="text-sm font-medium uppercase tracking-widest text-muted-foreground mt-2">Clients</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Skills - Left aligned flow */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-10 lg:px-12"
        >
          <h3 className="text-2xl font-bold text-foreground">
            Core Expertise
          </h3>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <motion.span
                key={index}
                whileHover={{ scale: 1.02, y: -2 }}
                className="px-6 py-3 bg-card/40 border border-border/50 rounded-xl text-sm font-medium text-foreground hover:bg-card/80 transition-all cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};
