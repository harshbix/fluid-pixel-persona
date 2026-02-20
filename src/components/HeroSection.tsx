import { useEffect, useRef, useState } from "react";
import { useClock } from "@/hooks/useClock";
import { ArrowRight, PlayCircle } from "lucide-react";
import { useReducedMotion } from "framer-motion";

export const HeroSection = () => {
  const { formattedTime } = useClock();
  const shouldReduceMotion = useReducedMotion();

  // Cinematic parallax (Zero Render)
  const sectionRef = useRef<HTMLElement>(null);
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });

  const layer1Ref = useRef<HTMLDivElement>(null);
  const layer2Ref = useRef<HTMLDivElement>(null);
  const maskRef = useRef<HTMLDivElement>(null);

  // Store magnet targets
  const buttonVars = useRef({
    btn1: { x: 0, y: 0 },
    btn2: { x: 0, y: 0 },
  });

  // Smooth out mouse tracking via requestAnimationFrame mapping directly to DOM
  useEffect(() => {
    if (shouldReduceMotion) return;

    let animationFrameId: number;

    const animate = () => {
      // LERP for buttery smooth parallax
      current.current.x += (target.current.x - current.current.x) * 0.05;
      current.current.y += (target.current.y - current.current.y) * 0.05;

      if (layer1Ref.current) {
        layer1Ref.current.style.transform = `translate3d(${current.current.x * 30}px, ${current.current.y * 30}px, 0)`;
      }
      if (layer2Ref.current) {
        layer2Ref.current.style.transform = `translate3d(${current.current.x * -60}px, ${current.current.y * -60}px, 0)`;
      }
      if (maskRef.current) {
        maskRef.current.style.background = `radial-gradient(circle 800px at ${50 + current.current.x * 100}% ${50 + current.current.y * 100}%, hsl(var(--foreground)/0.15), transparent 100%)`;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [shouldReduceMotion]);

  const onMouseMove = (e: React.MouseEvent) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    target.current.x = (e.clientX - rect.left) / rect.width - 0.5;
    target.current.y = (e.clientY - rect.top) / rect.height - 0.5;
  };

  // Magnetic button logic
  const handleMagnetMove = (e: React.MouseEvent<HTMLButtonElement>, btnKey: 'btn1' | 'btn2') => {
    if (shouldReduceMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    e.currentTarget.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
  };

  const handleMagnetLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.transform = `translate(0px, 0px)`;
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={onMouseMove}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
    >
      {/* =========================================
          1. LIQUID COSMOS BACKGROUND (Animated)
          ========================================= */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Deepest Layer - Star noise mapped globally in CSS */}
        <div className="absolute inset-0 mix-blend-overlay opacity-30 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.1)_0%,transparent_100%)]" />

        {/* Parallax Depth Layer 1 - Slow Liquid Blobs */}
        <div
          ref={layer1Ref}
          className="absolute inset-0 will-change-[transform]"
        >
          <div className="absolute top-[10%] left-[20%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-primary/10 rounded-full blur-3xl animate-liquid-morph mix-blend-multiply dark:mix-blend-screen opacity-70" />
          <div className="absolute bottom-[0%] right-[10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] bg-accent/20 rounded-full blur-[100px] animate-liquid-morph mix-blend-multiply dark:mix-blend-screen opacity-60" style={{ animationDelay: '-5s', animationDuration: '20s' }} />
        </div>

        {/* Parallax Depth Layer 2 - Faster, smaller accents */}
        <div
          ref={layer2Ref}
          className="absolute inset-0 will-change-[transform]"
        >
          <div className="absolute top-[40%] right-[30%] w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float-organic opacity-50" />
          <div className="absolute top-[60%] left-[40%] w-48 h-48 bg-foreground/5 rounded-full blur-2xl animate-float-organic" style={{ animationDelay: '-3s' }} />
        </div>

        {/* Cursor tracking spotlight mask */}
        <div
          ref={maskRef}
          className="absolute inset-0 opacity-40 mix-blend-overlay transition-opacity duration-1000 hidden md:block will-change-[background]"
        />
      </div>

      {/* =========================================
          2. CINEMATIC FOREGROUND CONTENT
          ========================================= */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 flex flex-col justify-center h-full pt-20 pb-16">

        {/* Artistic Time Indicator */}
        <div className="mb-12 md:mb-16 animate-text-reveal" style={{ animationDelay: "0.1s" }}>
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-border/40 bg-card/20 backdrop-blur-md">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs uppercase tracking-[0.3em] font-medium text-muted-foreground">
              Local Time // {formattedTime}
            </span>
          </div>
        </div>

        {/* Massive Typography - Asymmetric Layout */}
        <div className="max-w-5xl relative">
          <h1 className="text-[12vw] sm:text-[10vw] md:text-[8vw] lg:text-[7rem] leading-[0.9] font-extrabold tracking-tighter text-foreground selection:bg-primary selection:text-white">
            <div className="overflow-hidden">
              <span className="block animate-text-reveal text-shadow-cinematic" style={{ animationDelay: "0.2s" }}>
                Junior
              </span>
            </div>
            <div className="overflow-hidden">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-foreground via-foreground/80 to-primary animate-text-reveal text-shadow-cinematic lg:ml-24" style={{ animationDelay: "0.3s" }}>
                Jeconia.
              </span>
            </div>
          </h1>

          {/* Floating abstract element near text */}
          <div className="absolute -right-4 md:-right-12 top-1/2 w-24 h-24 border border-foreground/10 rounded-full animate-float-organic mix-blend-difference z-[-1] hidden md:block" />

          <p className="mt-8 md:mt-12 text-xl md:text-2xl lg:text-3xl text-muted-foreground/90 font-medium max-w-2xl leading-relaxed lg:ml-24 animate-text-reveal" style={{ animationDelay: "0.4s" }}>
            Crafting digital experiences that feel less like software and more like magic.
          </p>
        </div>

        {/* Magnetic CTA Buttons */}
        <div className="mt-16 md:mt-24 flex flex-col sm:flex-row gap-6 lg:ml-24 animate-text-reveal" style={{ animationDelay: "0.5s" }}>

          <a href="/resume.pdf" download target="_blank" className="contents">
            <button
              className="btn-magnetic btn-magnetic-hover group relative px-8 py-5 flex items-center justify-center sm:justify-start gap-4 text-background bg-foreground shadow-2xl overflow-hidden rounded-2xl"
              onMouseMove={(e) => handleMagnetMove(e, 'btn1')}
              onMouseLeave={handleMagnetLeave}
            >
              <span className="relative z-10 font-bold uppercase tracking-widest text-sm">Download Resume</span>
              <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
            </button>
          </a>

          <button
            className="btn-magnetic group relative px-8 py-5 flex items-center justify-center sm:justify-start gap-4 text-foreground bg-transparent border border-border/50 hover:border-foreground/30 hover:bg-card/30 backdrop-blur-sm rounded-2xl overflow-hidden"
            onMouseMove={(e) => handleMagnetMove(e, 'btn2')}
            onMouseLeave={handleMagnetLeave}
          >
            <PlayCircle className="w-5 h-5 opacity-70 group-hover:scale-110 transition-transform" />
            <span className="font-bold uppercase tracking-widest text-sm">View Reel</span>
          </button>

        </div>

        {/* Scroll Indicator - Bottom Right */}
        <div className="absolute bottom-12 right-6 lg:right-12 flex flex-col items-center gap-4 opacity-50 animate-text-reveal hidden md:flex" style={{ animationDelay: "0.8s" }}>
          <span className="text-[10px] uppercase tracking-[0.4em] font-semibold rotate-90 translate-y-8">Scroll</span>
          <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-foreground to-transparent animate-pulse" />
        </div>

      </div>
    </section>
  );
};