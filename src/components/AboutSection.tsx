import { Star } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const skills = [
  "Frontend Development",
  "UI/UX Design",
  "Full-Stack Development",
  "Prototyping",
  "Marketing Strategy",
  "Project Management",
];

export const AboutSection = () => {
  // Cinematic parallax tracking
  const sectionRef = useRef<HTMLElement>(null);
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });

  const layer1Ref = useRef<HTMLDivElement>(null);
  const layer2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationFrameId: number;
    const animate = () => {
      current.current.x += (target.current.x - current.current.x) * 0.05;
      current.current.y += (target.current.y - current.current.y) * 0.05;

      if (layer1Ref.current) {
        layer1Ref.current.style.transform = `translate3d(${current.current.x * 20}px, ${current.current.y * 20}px, 0)`;
      }
      if (layer2Ref.current) {
        layer2Ref.current.style.transform = `translate3d(${current.current.x * -40}px, ${current.current.y * -40}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(animate);
    };
    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const onMouseMove = (e: React.MouseEvent) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    target.current.x = (e.clientX - rect.left) / rect.width - 0.5;
    target.current.y = (e.clientY - rect.top) / rect.height - 0.5;
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={onMouseMove}
      className="py-24 px-4 sm:px-6 relative overflow-hidden"
    >
      {/* Cinematic Liquid Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          ref={layer1Ref}
          className="absolute inset-0 will-change-[transform]"
        >
          <div className="absolute top-[20%] left-[10%] w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] bg-primary/10 rounded-full blur-[80px] animate-liquid-morph mix-blend-multiply dark:mix-blend-screen opacity-60" />
        </div>
        <div
          ref={layer2Ref}
          className="absolute inset-0 will-change-[transform]"
        >
          <div className="absolute bottom-[10%] right-[10%] w-96 h-96 bg-accent/15 rounded-full blur-[60px] animate-float-organic opacity-50" />
        </div>
      </div>

      <div className="max-w-6xl mx-auto space-y-24 relative z-10">
        {/* About Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-full rounded-3xl backdrop-blur-3xl bg-card/40 border border-white/10 dark:border-white/5 shadow-2xl p-12 space-y-10 overflow-hidden"
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
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground text-shadow-cinematic">
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
          className="space-y-10 lg:px-12 relative z-10"
        >
          <h3 className="text-2xl font-bold text-foreground text-shadow-cinematic">
            Core Expertise
          </h3>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <motion.span
                key={index}
                whileHover={{ scale: 1.05 }}
                className="px-6 py-3 bg-card/30 backdrop-blur-md border border-white/10 dark:border-white/5 shadow-lg rounded-2xl text-sm font-medium text-foreground hover:bg-card/50 transition-colors cursor-default animate-float-organic"
                style={{ animationDelay: `${index * 0.2}s` }}
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
