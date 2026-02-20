import { ArrowUpRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const skills = [
  "Frontend Architecture (React/TS)",
  "Full-Stack Development (Node.js)",
  "UI/UX Systems & Prototyping",
  "Database Management (SQL/NoSQL)",
  "Hardware & Systems Infrastructure",
  "Technical Project Management",
];

const education = [
  { school: "Dar es Salaam Institute of Technology", period: "Recent" },
  { school: "Mbeya Institute of Science and Technology", period: "Previous" },
  { school: "God's Bridge Secondary School", period: "High School" },
  { school: "Uwata Pre & Primary School", period: "Foundation" }
];

export const AboutSection = () => {
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -250]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -150]);

  return (
    <section id="about" ref={containerRef} className="py-32 px-6 lg:px-12 relative bg-background overflow-hidden">
      {/* Background Liquid (Muted for Apple Style) */}
      <div className="absolute inset-0 pointer-events-none opacity-30 hidden md:block">
        <div className="absolute top-[30%] right-[10%] w-[40vw] h-[40vw] min-w-[500px] bg-primary/10 rounded-full blur-[120px] animate-liquid-morph" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 space-y-32">

        {/* The Hook */}
        <div className="max-w-5xl">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-[clamp(3.5rem,8vw,8rem)] font-extrabold tracking-tighter leading-[0.9] text-foreground mix-blend-difference"
          >
            Pro rigor meets the performing&nbsp;arts.
          </motion.h2>
        </div>

        {/* Immersive Photo Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 h-auto md:h-[60vh] lg:h-[80vh] items-center py-12 md:py-0">
          <motion.div style={{ y: y1 }} className="relative h-[50vh] md:h-[110%] w-full rounded-2xl md:rounded-[2rem] overflow-hidden will-change-transform shadow-xl">
            <img src="/assets/about-1.jpg" alt="Junior Jeconia" className="absolute inset-0 w-full h-full object-cover" />
          </motion.div>
          <motion.div style={{ y: y2 }} className="relative h-[60vh] md:h-[140%] w-full rounded-2xl md:rounded-[2rem] overflow-hidden -mt-8 md:mt-0 z-10 shadow-2xl will-change-transform md:translate-y-24">
            <img src="/assets/about-2.jpg" alt="Junior Jeconia" className="absolute inset-0 w-full h-full object-cover" />
          </motion.div>
          <motion.div style={{ y: y3 }} className="relative h-[50vh] md:h-[90%] w-full rounded-2xl md:rounded-[2rem] overflow-hidden -mt-8 md:mt-0 will-change-transform shadow-xl">
            <img src="/assets/about-3.jpg" alt="Junior Jeconia" className="absolute inset-0 w-full h-full object-cover" />
          </motion.div>
        </div>

        {/* Minimalist Data Grid - Cinematic Staggered Reveal */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-12 lg:gap-24 items-start pt-12 md:pt-32">

          {/* Bio block */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-12 lg:col-span-5"
          >
            <h3 className="text-xl md:text-2xl font-bold tracking-tight mb-8 text-primary uppercase">About The Artist</h3>
            <p className="text-[2rem] md:text-[2.5rem] text-foreground leading-[1.1] font-bold tracking-tighter">
              Software Engineer, Web Developer & Dancer in Tanzania.
            </p>
            <div className="w-12 h-[2px] bg-foreground/20 my-8" />
            <p className="text-xl text-muted-foreground leading-relaxed font-medium">
              I believe in the power of technology to transform ideas into reality. Balancing professional rigor with a lifelong interest in gaming and the performing arts, I bring a versatile eye for detail to forward-thinking digital projects.
            </p>
          </motion.div>

          {/* Education & Skills (Apple List Style) */}
          <div className="md:col-span-12 lg:col-span-7 grid sm:grid-cols-2 gap-16 pt-4 lg:pt-0">

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-10%" }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.1 }
                }
              }}
            >
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground mb-8">Education</h4>
              <ul className="flex flex-col">
                {education.map((item, i) => (
                  <motion.li
                    key={i}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
                    }}
                    className="group border-t border-border/40 py-6 last:border-b flex flex-col justify-start cursor-default"
                  >
                    <span className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-2">{item.period}</span>
                    <span className="block text-xl font-bold text-foreground tracking-tight transition-transform duration-500 group-hover:translate-x-2">{item.school}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-10%" }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.1, delayChildren: 0.2 }
                }
              }}
            >
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground mb-8">Core Expertise</h4>
              <ul className="flex flex-col">
                {skills.map((skill, i) => (
                  <motion.li
                    key={i}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
                    }}
                    className="group border-t border-border/40 py-6 last:border-b flex justify-between items-center cursor-default overflow-hidden"
                  >
                    <span className="text-lg md:text-xl font-medium tracking-tight text-foreground/80 group-hover:text-foreground transition-colors mix-blend-difference">{skill}</span>
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500" />
                  </motion.li>
                ))}
              </ul>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
};
