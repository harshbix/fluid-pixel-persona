import { TRUST_STACK } from "../../data/portfolioData";

export const TrustStrip = () => {
  return (
    <section className="border-b border-white/[0.08] bg-card/20 py-8 px-6 lg:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex-shrink-0">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-muted-foreground">
            Technologies &amp; Systems I Build With
          </p>
        </div>

        {/* Clean horizontal pill row */}
        <div className="flex flex-wrap items-center gap-2.5">
          {TRUST_STACK.map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center rounded-full border border-white/[0.08] bg-white/[0.03] px-3.5 py-1.5 text-xs font-medium text-foreground/80 hover:text-foreground hover:border-primary/40 hover:bg-primary/5 transition-all duration-200"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-primary/70 mr-2" />
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
