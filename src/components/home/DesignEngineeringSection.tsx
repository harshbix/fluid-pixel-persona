import { useState } from "react";
import { motion } from "framer-motion";
import { Sliders, Eye, Zap, Shield, Smartphone, Type, Check } from "lucide-react";
import { SectionHeader } from "../common/SectionHeader";

export const DesignEngineeringSection = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const pillars = [
    {
      icon: Type,
      title: "Typographic Contrast & Rhythm",
      metric: "Modular Scale",
      description:
        "Every headline, subline, and body block follows an intentional ratio. No arbitrary text sizes or line lengths that cause eye fatigue on long reading surfaces.",
      features: ["Standardized clamp() responsive scales", "Calculated line-heights", "Controlled measure (65-75 ch)"],
    },
    {
      icon: Zap,
      title: "Zero Layout Shift & Speed",
      metric: "< 0.05 CLS",
      description:
        "Interfaces must feel rock-solid while loading. Skeleton loaders and reserved aspect ratios prevent elements from jumping as data resolves.",
      features: ["Hardware-accelerated transforms", "Font-display preloading", "Aggressive asset compression"],
    },
    {
      icon: Smartphone,
      title: "Responsive Breakpoint Logic",
      metric: "320px to 4K",
      description:
        "Designing from the palm of a hand up to multi-monitor workstations. Touch targets stay at 44px+ minimum, with thumb-friendly navigation zones on mobile.",
      features: ["Zero accidental horizontal scrolling", "Adaptive information density", "Dynamic layout reflow"],
    },
    {
      icon: Shield,
      title: "Accessibility as a Foundation",
      metric: "WCAG AA",
      description:
        "Design is only good if everyone can use it. Strict contrast verification, logical tab order, ARIA attributes, and full keyboard navigation support.",
      features: ["Visible high-contrast focus rings", "Screen reader semantics", "prefers-reduced-motion honor"],
    },
  ];

  return (
    <section className="py-24 lg:py-32 px-6 lg:px-12 border-b border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          badge="05 / UI & UX Craft"
          title="Code is only half the product."
          subtitle="The rest is how it feels, reads, and earns trust."
          description="High visual polish is not decorative fluff — it directly affects bounce rates, user comprehension, and conversion. Here is how I engineer interface quality into every build."
        />

        {/* Interactive Comparison / Craft Grid */}
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-8 items-center mt-12">
          {/* Left: Tab Selectors */}
          <div className="space-y-3">
            {pillars.map((item, idx) => (
              <button
                key={item.title}
                type="button"
                onClick={() => setActiveTab(idx)}
                className={`w-full text-left p-5 rounded-2xl border transition-all duration-200 flex items-start justify-between gap-4 ${
                  activeTab === idx
                    ? "bg-card border-primary/50 shadow-lg"
                    : "bg-card/30 border-white/[0.06] hover:bg-card/50 hover:border-white/[0.12]"
                }`}
              >
                <div className="flex items-center gap-3.5">
                  <div
                    className={`h-9 w-9 rounded-xl flex items-center justify-center transition-colors ${
                      activeTab === idx
                        ? "bg-primary text-white"
                        : "bg-white/[0.05] text-muted-foreground"
                    }`}
                  >
                    <item.icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-foreground">{item.title}</h4>
                    <span className="text-[11px] text-muted-foreground font-mono">{item.metric}</span>
                  </div>
                </div>
                <span
                  className={`text-xs font-mono font-bold mt-1 ${
                    activeTab === idx ? "text-primary" : "text-muted-foreground/40"
                  }`}
                >
                  0{idx + 1}
                </span>
              </button>
            ))}
          </div>

          {/* Right: Live Craft Preview Panel */}
          <div className="rounded-[28px] border border-white/[0.1] bg-card/60 p-8 backdrop-blur-xl shadow-2xl relative min-h-[360px] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-5 border-b border-white/[0.08] mb-6">
                <span className="text-xs font-mono uppercase tracking-widest text-primary font-bold">
                  {pillars[activeTab].metric} &bull; Design Token Standard
                </span>
                <span className="text-[11px] font-mono text-muted-foreground">spec.v2</span>
              </div>

              <h3 className="text-2xl font-bold text-foreground mb-3">
                {pillars[activeTab].title}
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                {pillars[activeTab].description}
              </p>

              {/* Implementation checklist */}
              <div className="space-y-2.5 pt-4 border-t border-white/[0.06]">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground block mb-2">
                  Engineering Principles Applied:
                </span>
                {pillars[activeTab].features.map((feat) => (
                  <div key={feat} className="flex items-center gap-2.5 text-xs text-foreground/90">
                    <Check className="w-3.5 h-3.5 text-primary" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom visual indicator */}
            <div className="mt-8 pt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-muted-foreground">
              <span>Status: Built into default workflow</span>
              <span className="text-emerald-400">&bull; Verified</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
