import React from "react";
import { motion } from "framer-motion";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  title,
  subtitle,
  description,
  align = "left",
  className = "",
}) => {
  const isCenter = align === "center";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`mb-12 md:mb-16 ${isCenter ? "text-center mx-auto" : ""} max-w-3xl ${className}`}
    >
      {badge && (
        <div className={`flex items-center gap-3 mb-4 ${isCenter ? "justify-center" : ""}`}>
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground">
            {badge}
          </p>
        </div>
      )}

      <h2 className="text-[clamp(2.4rem,5vw,4.5rem)] font-black leading-[0.96] tracking-tight text-foreground">
        {title}
        {subtitle && (
          <span className="block text-primary font-bold mt-1 text-[clamp(2.2rem,4.5vw,4rem)]">
            {subtitle}
          </span>
        )}
      </h2>

      {description && (
        <p className="mt-5 text-base md:text-lg leading-relaxed text-muted-foreground">
          {description}
        </p>
      )}
    </motion.div>
  );
};
