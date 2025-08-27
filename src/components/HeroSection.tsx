import { useEffect, useMemo, useRef, useState, useCallback } from 'react';
import { useTheme } from '@/hooks/useTheme';
import { useClock } from '@/hooks/useClock';
import { PartyPopper } from 'lucide-react';
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css';

// Rotating taglines
const TAGLINES = [
  'Designer by day. Pixel perfectionist by night.',
  'Crafting interfaces that feel like magic.',
  'Shipping audacious UI with calm code.',
  'Drama, motion, and delightful micro-interactions.',
  'Where frontend engineering meets cinema.',
];

export const HeroSection = () => {
  const { isBirthday, cycleSecretTheme } = useTheme();
  const { formattedTime, formattedDate } = useClock();

  // Cinematic parallax state
  const rootRef = useRef<HTMLElement | null>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  // Random clock mode: true = analog, false = digital
  const [analogMode, setAnalogMode] = useState<boolean>(() => Math.random() > 0.5);

  // Rotating tagline
  const [taglineIndex, setTaglineIndex] = useState<number>(0);

  useEffect(() => {
    const id = setInterval(() => {
      setAnalogMode(Math.random() > 0.5);
      setTaglineIndex((i) => (i + 1) % TAGLINES.length);
    }, 10000); // change every 10s
    return () => clearInterval(id);
  }, []);

  // Theme color extraction for particles (reads Tailwind CSS variables)
  const themeColors = useMemo(() => {
    if (typeof window === 'undefined') return { primary: '#8884d8', accent: '#8884d8' };
    const rs = getComputedStyle(document.documentElement);
    // Expecting CSS variables like --primary and --accent to be defined by the theme
    const primary = rs.getPropertyValue('--primary').trim() || '#8884d8';
    const accent = rs.getPropertyValue('--accent').trim() || '#a78bfa';
    const muted = rs.getPropertyValue('--muted-foreground').trim() || '#94a3b8';
    return { primary, accent, muted };
  }, []);

  // particles removed (global cinematic background is rendered at app root)

  // Spotlight: only on dark theme
  const spotlight = (
    <div
      className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,white,transparent_60%)] dark:opacity-100 opacity-0 transition-opacity duration-700"
      style={{ mixBlendMode: 'soft-light' }}
    />
  );

  // Vignette for cinematic feel (subtle)
  const vignette = (
    <div className="pointer-events-none absolute inset-0 rounded-none">
      <div className="absolute inset-0 shadow-[inset_0_0_120px_60px] shadow-background/60" />
    </div>
  );

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
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* particles handled globally */}

      {/* Cinematic Parallax Layers (soft, react to mouse) */}
      <div
        className="absolute inset-0 -z-5 will-change-transform"
        style={{
          transform: `translate3d(${mouse.x * 12}px, ${mouse.y * 12}px, 0)`,
          transition: 'transform 120ms ease-out',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/0 to-background/40" />
      </div>

      <div
        className="absolute inset-0 -z-5 will-change-transform"
        style={{
          transform: `translate3d(${mouse.x * -8}px, ${mouse.y * -8}px, 0)`,
          transition: 'transform 160ms ease-out',
        }}
      >
        <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-1/5 right-1/5 w-80 h-80 rounded-full bg-accent/10 blur-3xl" />
      </div>

      {/* Dark theme spotlight */}
      <div className="dark:block hidden absolute inset-0 -z-5">
        {spotlight}
      </div>

      {/* Subtle vignette for cinema feel */}
      {vignette}

      {/* Birthday Banner */}
      {isBirthday && (
        <div className="absolute top-8 left-1/2 -translate-x-1/2 z-20">
          <div className="relative">
            <div className="relative border-2 border-primary/30 bg-background/80 backdrop-blur-md px-8 py-3 flex items-center gap-3 shadow-2xl rounded-2xl">
              <PartyPopper className="w-5 h-5 text-primary animate-bounce" />
              <span className="text-primary font-bold tracking-wide uppercase text-sm">
                🎉 Happy Birthday, Bix!
              </span>
              <PartyPopper className="w-5 h-5 text-primary animate-bounce" style={{ animationDelay: '0.15s' }} />
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-7xl mx-auto px-6 w-full">
        <div className="relative">
          {/* Desktop Layout */}
          <div className="hidden lg:flex items-center justify-between gap-10 px-8">
            {/* Left: Name and Tagline */}
            <div className="flex-1 text-left">
              <div className="relative mb-4">
                <h1
                  className="font-montserrat text-4xl xl:text-6xl font-extrabold cursor-pointer select-none [text-wrap:balance]"
                  onClick={cycleSecretTheme}
                  style={{ letterSpacing: '0.02em' }}
                >
                  <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                    Junior Jeconia
                  </span>
                </h1>
              </div>

              {/* Tagline (rotating) */}
              <div className="relative">
                <p className="relative text-lg xl:text-xl text-muted-foreground py-4 px-4 italic">
                  {TAGLINES[taglineIndex]}
                  <br />
                  <span className="text-base text-muted-foreground/80 font-normal">
                    Currently making interfaces that don't make users cry.
                  </span>
                </p>
              </div>
            </div>

            {/* Right: Widget Stack */}
            <div className="flex-1 max-w-md space-y-6">
              {/* iPhone-like Clock Card */}
              <div className="relative">
                <div className="relative border border-primary/20 bg-background/80 backdrop-blur-xl rounded-3xl p-6 shadow-2xl">
                  {/* Clock header */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs uppercase tracking-widest text-muted-foreground">Time</span>
                    <span className="text-xs text-muted-foreground">{formattedDate}</span>
                  </div>
                  {/* Clock body */}
                  {analogMode ? (
                    <div className="flex justify-center">
                      <Clock value={new Date()} renderNumbers={true} className="[--clr:theme(colors.primary.DEFAULT)]" />
                    </div>
                  ) : (
                    <div className="text-center">
                      <div className="text-3xl xl:text-4xl font-mono text-primary mb-1 tracking-wider">
                        {formattedTime}
                      </div>
                      <div className="text-sm text-muted-foreground uppercase tracking-widest font-bold">
                        Local Time
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col gap-4">
                <button className="relative group rounded-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/20 transition-colors" />
                  <div className="relative border-2 border-primary bg-background/80 backdrop-blur-md px-6 py-3 text-primary hover:text-primary-foreground font-bold uppercase tracking-wide transition-all duration-300 rounded-2xl shadow-xl">
                    View My Work
                  </div>
                </button>
                <button className="relative group rounded-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-accent/10 group-hover:bg-accent/20 transition-colors" />
                  <div className="relative border-2 border-accent bg-background/80 backdrop-blur-md px-6 py-3 text-muted-foreground hover:text-primary font-bold uppercase tracking-wide transition-all duration-300 rounded-2xl shadow-xl">
                    Get In Touch
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="lg:hidden text-center">
            <div className="relative mb-6">
              <h1
                className="font-montserrat text-5xl md:text-7xl font-extrabold cursor-pointer select-none [text-wrap:balance]"
                onClick={cycleSecretTheme}
                style={{ letterSpacing: '0.02em' }}
              >
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                  Junior Jeconia
                </span>
              </h1>
            </div>

            <div className="relative mb-8">
              <p className="relative text-xl md:text-2xl text-muted-foreground py-6 px-4 italic">
                {TAGLINES[taglineIndex]}
                <br />
                <span className="text-lg text-muted-foreground/80 font-normal">
                  Currently making interfaces that don't make users cry.
                </span>
              </p>
            </div>

            {/* Clock */}
            <div className="relative mb-8">
              <div className="relative border border-primary/20 bg-background/80 backdrop-blur-xl rounded-3xl p-6 max-w-md mx-auto shadow-2xl">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs uppercase tracking-widest text-muted-foreground">Time</span>
                  <span className="text-xs text-muted-foreground">{formattedDate}</span>
                </div>
                {analogMode ? (
                  <div className="flex justify-center">
                    <Clock value={new Date()} renderNumbers={true} />
                  </div>
                ) : (
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-mono text-primary mb-1 tracking-wider">
                      {formattedTime}
                    </div>
                    <div className="text-sm text-muted-foreground uppercase tracking-widest font-bold">
                      Local Time
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col items-center mt-6">
              <div className="relative w-full max-w-sm">
              {/* Elevated pill to visually separate CTAs on mobile and give better position */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-28 h-1 rounded-full bg-gradient-to-r from-primary to-accent opacity-30 blur-xl" />
              <div className="relative bg-background/70 backdrop-blur-md border border-background/30 rounded-3xl p-4 shadow-2xl flex flex-col sm:flex-row items-center gap-4 justify-center">
                {/* Primary CTA - solid gradient with shine */}
                <button
                className="group relative inline-flex items-center justify-center px-8 py-3 rounded-2xl bg-gradient-to-r from-primary to-accent text-white font-bold uppercase tracking-wide shadow-lg transform transition duration-300 hover:scale-[1.035] active:scale-95 focus:outline-none focus:ring-4 focus:ring-primary/25 overflow-hidden"
                aria-label="View my work"
                >
                {/* subtle moving shine */}
                <span
                  aria-hidden
                  className="absolute left-0 top-0 h-full w-10 bg-white/10 blur-lg -translate-x-10 group-hover:translate-x-40 transition-transform duration-700"
                />
                <svg
                  className="w-4 h-4 mr-3 transform transition-transform duration-300 group-hover:translate-x-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
                <span className="relative z-10 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 mr-3"
                    viewBox="0 0 24 24"
                    fill="white"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  <span>Resume</span>
                </span>
                </button>

                {/* Secondary CTA - glass outline with subtle hover pop and accent glow */}
                <button
                className="group relative inline-flex items-center justify-center px-8 py-3 rounded-2xl border-2 border-accent text-accent bg-transparent backdrop-blur-sm font-bold uppercase tracking-wide shadow-sm transform transition duration-300 hover:scale-[1.02] active:scale-95 focus:outline-none focus:ring-4 focus:ring-accent/20 overflow-hidden"
                aria-label="Get in touch"
                >
                <span
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-r from-accent/6 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                />
                <svg
                  className="w-4 h-4 mr-3 transform rotate-0 transition-transform duration-300 group-hover:-rotate-12"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 10v6a2 2 0 0 1-2 2H7l-4 4V6a2 2 0 0 1 2-2h6" />
                </svg>
                <span className="relative z-10">Get In Touch</span>
                </button>
              </div>

              {/* micro hint under CTAs */}
              <div className="mt-3 text-center">
                <span className="text-xs text-muted-foreground/70">Tap a button or swipe to explore — animated for delight ✨</span>
              </div>
              </div>
            </div>
          </div>

          {/* Easter Egg Hint */}
          <p className="text-xs text-muted-foreground/60 mt-8 uppercase tracking-wider font-mono text-center">
            Psst... try pressing "W" or clicking my name 🎨
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="relative">
          <div className="w-8 h-12 border-2 border-primary/30 bg-background/20 backdrop-blur-sm flex justify-center rounded-2xl shadow-lg">
            <div className="w-1 h-4 bg-primary mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};