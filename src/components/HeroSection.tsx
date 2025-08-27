import { useEffect, useMemo, useRef, useState } from "react";
import { useTheme } from "@/hooks/useTheme";
import { useClock } from "@/hooks/useClock";
import { PartyPopper, Download, Eye, ArrowDown } from "lucide-react";
import Clock from "react-clock";
import "react-clock/dist/Clock.css";

// Rotating taglines
const TAGLINES = [
  "Designer by day. Pixel perfectionist by night.",
  "Crafting interfaces that feel like magic.",
  "Shipping audacious UI with calm code.",
  "Drama, motion, and delightful micro-interactions.",
  "Where frontend engineering meets cinema.",
];

export const HeroSection = () => {
  const { isBirthday, cycleSecretTheme } = useTheme();
  const { formattedTime, formattedDate } = useClock();

  // Cinematic parallax state
  const rootRef = useRef<HTMLElement | null>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  // Random clock mode: true = analog, false = digital
  const [analogMode, setAnalogMode] = useState<boolean>(
    () => Math.random() > 0.5
  );

  // Rotating tagline
  const [taglineIndex, setTaglineIndex] = useState<number>(0);

  useEffect(() => {
    const id = setInterval(() => {
      setAnalogMode(Math.random() > 0.5);
      setTaglineIndex((i) => (i + 1) % TAGLINES.length);
    }, 10000); // change every 10s
    return () => clearInterval(id);
  }, []);

  // Mouse tracking for parallax on layers
  const onMouseMove = (e: React.MouseEvent) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMouse({ x, y });
  };

  return (
    <section
      ref={rootRef as any}
      onMouseMove={onMouseMove}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background/95 to-background"
    >
      {/* Enhanced Background Layers */}
      <div className="absolute inset-0 -z-10">
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-gradient-to-r from-accent/15 to-primary/15 blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[length:50px_50px]" />
      </div>

      {/* Cinematic Parallax Layers (enhanced) */}
      <div
        className="absolute inset-0 -z-5 will-change-transform"
        style={{
          transform: `translate3d(${mouse.x * 15}px, ${mouse.y * 15}px, 0)`,
          transition: "transform 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-accent/5" />
      </div>

      <div
        className="absolute inset-0 -z-5 will-change-transform"
        style={{
          transform: `translate3d(${mouse.x * -10}px, ${mouse.y * -10}px, 0)`,
          transition: "transform 400ms cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        }}
      >
        <div className="absolute top-1/3 left-1/5 w-72 h-72 rounded-full bg-primary/8 blur-3xl" />
        <div className="absolute bottom-1/3 right-1/5 w-80 h-80 rounded-full bg-accent/8 blur-3xl" />
      </div>

      {/* Dynamic spotlight effect */}
      <div className="absolute inset-0 -z-5">
        <div
          className="absolute w-96 h-96 rounded-full bg-gradient-radial from-primary/10 to-transparent blur-2xl transition-all duration-1000"
          style={{
            left: `${50 + mouse.x * 20}%`,
            top: `${50 + mouse.y * 20}%`,
            transform: 'translate(-50%, -50%)',
          }}
        />
      </div>

      {/* Birthday Banner - Enhanced */}
      {isBirthday && (
        <div className="absolute top-8 left-1/2 -translate-x-1/2 z-20">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse" />
            <div className="relative border border-primary/30 bg-background/90 backdrop-blur-xl px-8 py-4 flex items-center gap-3 shadow-2xl rounded-2xl">
              <PartyPopper className="w-6 h-6 text-primary animate-bounce" />
              <span className="text-primary font-bold tracking-wide uppercase text-sm">
                🎉 Happy Birthday, Bix!
              </span>
              <PartyPopper
                className="w-6 h-6 text-primary animate-bounce"
                style={{ animationDelay: "0.15s" }}
              />
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-7xl mx-auto px-6 w-full">
        <div className="relative">
          {/* Desktop Layout */}
          <div className="hidden lg:flex items-center justify-between gap-12 px-8">
            {/* Left: Name and Tagline */}
            <div className="flex-1 text-left space-y-6">
              <div className="relative">
                <h1
                  className="font-montserrat text-5xl xl:text-7xl font-extrabold cursor-pointer select-none [text-wrap:balance] hover:scale-[1.02] transition-transform duration-300"
                  onClick={cycleSecretTheme}
                  style={{ letterSpacing: "0.02em" }}
                >
                  <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient-x bg-[length:200%_auto]">
                    Junior Jeconia
                  </span>
                </h1>
                {/* Subtle underline accent */}
                <div className="mt-2 h-1 w-24 bg-gradient-to-r from-primary to-accent rounded-full opacity-60" />
              </div>

              {/* Enhanced Tagline */}
              <div className="relative bg-gradient-to-r from-background/80 to-background/40 backdrop-blur-sm rounded-2xl p-6 border border-primary/10">
                <p className="text-xl xl:text-2xl text-foreground font-medium leading-relaxed">
                  {TAGLINES[taglineIndex]}
                </p>
                <p className="text-base text-muted-foreground/80 font-normal mt-3 leading-relaxed">
                  Currently making interfaces that don't make users cry.
                </p>
                {/* Decorative elements */}
                <div className="absolute top-2 right-2 w-2 h-2 bg-primary/30 rounded-full" />
                <div className="absolute bottom-2 left-2 w-1 h-1 bg-accent/40 rounded-full" />
              </div>
            </div>

            {/* Right: Widget Stack */}
            <div className="flex-1 max-w-md space-y-8">
              {/* Enhanced Clock Card */}
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition duration-500" />
                <div className="relative border border-primary/20 bg-background/90 backdrop-blur-xl rounded-3xl p-8 shadow-2xl hover:shadow-primary/10 transition-all duration-300">
                  {/* Clock header */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">
                      Local Time
                    </span>
                    <span className="text-xs text-muted-foreground bg-primary/5 px-2 py-1 rounded-full">
                      {formattedDate}
                    </span>
                  </div>
                  {/* Clock body */}
                  {analogMode ? (
                    <div className="flex justify-center">
                      <div className="p-4 bg-gradient-to-br from-primary/5 to-accent/5 rounded-full">
                        <Clock
                          value={new Date()}
                          renderNumbers={true}
                          className="[--clr:theme(colors.primary.DEFAULT)]"
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="text-center">
                      <div className="text-4xl xl:text-5xl font-mono mb-2 tracking-wider bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent">
                        {formattedTime}
                      </div>
                      <div className="text-sm text-muted-foreground uppercase tracking-widest font-bold opacity-80">
                        Digital Display
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Enhanced CTA Buttons */}
              <div className="flex flex-col gap-4">
                <style>{`
                  @keyframes gradient-x {
                    0%, 100% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                  }
                  .animate-gradient-x {
                    animation: gradient-x 3s ease infinite;
                  }
                  
                  .btn-glow {
                    position: relative;
                    overflow: hidden;
                  }
                  .btn-glow::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: -100%;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
                    transition: left 0.5s;
                  }
                  .btn-glow:hover::before {
                    left: 100%;
                  }
                  
                  .btn-float {
                    transform: translateY(0px);
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                  }
                  .btn-float:hover {
                    transform: translateY(-2px);
                  }
                  .btn-float:active {
                    transform: translateY(0px);
                  }
                `}</style>

                {/* Primary CTA - Resume */}
                <a
                  href="/resume.pdf"
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Download Resume"
                  className="relative group btn-glow btn-float"
                >
                  {/* Glowing background */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-accent to-primary rounded-2xl blur opacity-0 group-hover:opacity-75 transition duration-300 animate-gradient-x bg-[length:200%_auto]" />
                  
                  <div className="relative flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground font-bold uppercase tracking-wide rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                    <Download className="w-5 h-5" />
                    <span>Download Resume</span>
                  </div>
                </a>

                {/* Secondary CTA - My Work */}
                <button
                  aria-label="View My Work"
                  className="relative group btn-glow btn-float"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-accent/50 via-primary/50 to-accent/50 rounded-2xl blur opacity-0 group-hover:opacity-50 transition duration-300" />
                  
                  <div className="relative flex items-center justify-center gap-3 px-8 py-4 border-2 border-accent bg-background/80 backdrop-blur-sm text-accent hover:text-accent-foreground hover:bg-accent font-bold uppercase tracking-wide rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                    <Eye className="w-5 h-5" />
                    <span>View My Work</span>
                  </div>
                </button>

                {/* Subtle accent line */}
                <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent mt-4" />
              </div>
            </div>
          </div>

          {/* Enhanced Mobile Layout */}
          <div className="lg:hidden text-center space-y-8">
            <div className="relative">
              <h1
                className="font-montserrat text-5xl md:text-7xl font-extrabold cursor-pointer select-none [text-wrap:balance] hover:scale-[1.02] transition-transform duration-300"
                onClick={cycleSecretTheme}
                style={{ letterSpacing: "0.02em" }}
              >
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient-x bg-[length:200%_auto]">
                  Junior Jeconia
                </span>
              </h1>
              <div className="mt-4 h-1 w-32 bg-gradient-to-r from-primary to-accent rounded-full opacity-60 mx-auto" />
            </div>

            <div className="relative bg-gradient-to-r from-background/80 to-background/40 backdrop-blur-sm rounded-2xl p-6 border border-primary/10 mx-4">
              <p className="text-xl md:text-2xl text-foreground font-medium leading-relaxed">
                {TAGLINES[taglineIndex]}
              </p>
              <p className="text-lg text-muted-foreground/80 font-normal mt-3 leading-relaxed">
                Currently making interfaces that don't make users cry.
              </p>
            </div>

            {/* Mobile Clock */}
            <div className="relative group mx-4">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition duration-500" />
              <div className="relative border border-primary/20 bg-background/90 backdrop-blur-xl rounded-3xl p-6 shadow-2xl">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">
                    Local Time
                  </span>
                  <span className="text-xs text-muted-foreground bg-primary/5 px-2 py-1 rounded-full">
                    {formattedDate}
                  </span>
                </div>
                {analogMode ? (
                  <div className="flex justify-center">
                    <div className="p-4 bg-gradient-to-br from-primary/5 to-accent/5 rounded-full">
                      <Clock value={new Date()} renderNumbers={true} />
                    </div>
                  </div>
                ) : (
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-mono mb-1 tracking-wider bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent">
                      {formattedTime}
                    </div>
                    <div className="text-sm text-muted-foreground uppercase tracking-widest font-bold opacity-80">
                      Digital Display
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Mobile CTAs */}
            <div className="flex flex-col gap-4 px-4">
              <a
                href="/resume.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
                className="relative group btn-glow btn-float"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-accent to-primary rounded-2xl blur opacity-0 group-hover:opacity-75 transition duration-300 animate-gradient-x bg-[length:200%_auto]" />
                <div className="relative flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground font-bold uppercase tracking-wide rounded-2xl shadow-lg">
                  <Download className="w-5 h-5" />
                  <span>Download Resume</span>
                </div>
              </a>

              <button className="relative group btn-glow btn-float">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-accent/50 via-primary/50 to-accent/50 rounded-2xl blur opacity-0 group-hover:opacity-50 transition duration-300" />
                <div className="relative flex items-center justify-center gap-3 px-8 py-4 border-2 border-accent bg-background/80 backdrop-blur-sm text-accent hover:text-accent-foreground hover:bg-accent font-bold uppercase tracking-wide rounded-2xl shadow-lg transition-all duration-300">
                  <Eye className="w-5 h-5" />
                  <span>View My Work</span>
                </div>
              </button>
            </div>
          </div>

          {/* Enhanced Easter Egg Hint */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-background/60 backdrop-blur-sm border border-primary/10 rounded-full">
              <span className="text-xs text-muted-foreground/60 uppercase tracking-wider font-mono">
                Psst... try pressing "W" or clicking my name
              </span>
              <span className="text-sm">🎨</span>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="relative group cursor-pointer">
          <div className="w-8 h-12 border-2 border-primary/40 bg-background/30 backdrop-blur-sm flex justify-center rounded-2xl shadow-lg group-hover:border-primary/60 transition-colors duration-300">
            <ArrowDown className="w-4 h-4 text-primary mt-2 animate-bounce opacity-60 group-hover:opacity-100 transition-opacity" />
          </div>
        </div>
      </div>
    </section>
  );
};