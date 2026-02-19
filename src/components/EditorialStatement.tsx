import { motion } from "framer-motion";

const lines: { words: string[]; style: "gradient" | "outline" }[] = [
  { words: ["Build", "something"], style: "gradient" },
  { words: ["people", "remember."], style: "outline" },
];

export const EditorialStatement = () => {
  // Sequential stagger delay across all lines / words
  let wordCounter = 0;

  return (
    <section className="py-28 px-6 overflow-hidden relative">
      {/* Ambient glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] rounded-full bg-primary/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Label */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex items-center gap-4 mb-14"
        >
          <span className="block h-px w-10 bg-gradient-to-r from-primary to-accent" />
          <span className="text-xs font-bold tracking-[0.25em] uppercase text-muted-foreground">
            Creative Philosophy
          </span>
        </motion.div>

        {/* Big editorial lines */}
        <div className="space-y-0 mb-14">
          {lines.map((line) => (
            <div
              key={line.words.join("-")}
              className="flex flex-wrap leading-none overflow-hidden"
              style={{ gap: "0 0.22em" }}
            >
              {line.words.map((word) => {
                const delay = wordCounter++ * 0.11;
                return (
                  <motion.span
                    key={word + delay}
                    initial={{ opacity: 0, y: 70 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{
                      duration: 0.85,
                      delay,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className={[
                      "block font-black tracking-tight font-montserrat",
                      "text-[clamp(3.5rem,9.5vw,8rem)] leading-[1.06]",
                      line.style === "outline" ? "text-stroke-primary" : "",
                      line.style === "gradient"
                        ? "bg-gradient-to-br from-primary via-accent to-primary bg-clip-text text-transparent"
                        : "",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                  >
                    {word}
                  </motion.span>
                );
              })}
            </div>
          ))}
        </div>

        {/* Body copy */}
        <motion.p
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
          className="text-muted-foreground text-lg max-w-md leading-relaxed"
        >
          Every interface tells a story. I make sure yours is one worth reading —
          crafted from first pixel to final interaction.
        </motion.p>

        {/* Growing horizontal rule */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 h-px bg-gradient-to-r from-primary/40 via-accent/30 to-transparent origin-left"
        />
      </div>
    </section>
  );
};

