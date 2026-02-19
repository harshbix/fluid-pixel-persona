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

          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 max-w-6xl mx-auto relative z-10">
            {/* Avatar with glow */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative"
            >
              <div className="absolute inset-0 rounded-full bg-primary/30 blur-3xl animate-pulse-slow"></div>
              <div className="relative w-32 h-32 rounded-full overflow-hidden ring-4 ring-primary/40 shadow-lg shadow-primary/30">
                <img
                  src="/assets/profile.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* About text */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="flex-1 space-y-6"
            >
              <h2 className="text-5xl font-extrabold tracking-tight text-foreground">
                About Me
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                A passionate designer and developer with over{" "}
                <span className="text-primary font-semibold">5 years</span> of
                experience crafting digital experiences. I specialize in
                creating interfaces that users actually enjoy using, believing
                in the power of thoughtful design to solve real problems.
              </p>
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

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="grid grid-cols-3 gap-8 pt-6 max-w-3xl mx-auto relative z-10"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground">150+</div>
              <div className="text-base text-muted-foreground">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground">5+</div>
              <div className="text-base text-muted-foreground">Years</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground">50+</div>
              <div className="text-base text-muted-foreground">Clients</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <h3 className="text-3xl font-bold text-foreground text-center">
            Skills & Expertise
          </h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
            {skills.map((skill, index) => (
              <motion.span
                key={index}
                whileHover={{ scale: 1.1 }}
                className="px-5 py-2 bg-secondary/70 rounded-full text-sm font-medium text-foreground shadow-sm hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
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
