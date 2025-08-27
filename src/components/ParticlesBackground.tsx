import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { initParticlesEngine, Particles } from "@tsparticles/react";
import type { Container, Engine, ISourceOptions } from "@tsparticles/engine";
import { loadFull } from "tsparticles";

const ParticlesBackground = () => {
  const containerRef = useRef<Container | null>(null);
  const [engineReady, setEngineReady] = useState(false);

  // Initialize engine
  useEffect(() => {
    let mounted = true;
    initParticlesEngine(async (engine: Engine) => {
      await loadFull(engine);
    }).then(() => {
      if (mounted) setEngineReady(true);
    });
    return () => {
      mounted = false;
    };
  }, []);

  // Easter Egg: "Q" shake
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "q" || e.key === "Q") {
        const c = containerRef.current;
        if (!c) return;

        const factor = 5;
        for (const p of c.particles.array) {
          const vx =
            (p.velocity.horizontal ?? 0) * factor +
            (Math.random() - 0.5) * factor;
          const vy =
            (p.velocity.vertical ?? 0) * factor +
            (Math.random() - 0.5) * factor;

          p.velocity.horizontal = vx;
          p.velocity.vertical = vy;
        }

        const el = c.canvas?.element;
        if (el) {
          el.style.transition = "transform 120ms ease";
          el.style.transform = "translate3d(2px,0,0)";
          setTimeout(() => {
            el.style.transform = "translate3d(-2px,0,0)";
            setTimeout(() => {
              el.style.transform = "translate3d(0,0,0)";
            }, 120);
          }, 120);
        }
      }
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  // Particle options
  const options: ISourceOptions = useMemo(
    () => ({
      fullScreen: { enable: false },
      fpsLimit: 90,
      background: { color: "transparent" },
      detectRetina: true,
      motion: { reduce: { factor: 2, value: true } },
      particles: {
        number: { value: 120, density: { enable: true, area: 900 } },
        color: {
          value: ["#d6d7db", "#c0c3c7", "#a6a9ad", "#e6e7eb"], // metallic / glassy palette
        },
        shape: { type: ["circle", "triangle"] },
        opacity: {
          value: { min: 0.15, max: 0.55 },
          animation: {
            enable: true,
            speed: 0.25,
            startValue: "random",
            minimumValue: 0.1,
          },
        },
        size: {
          value: { min: 1, max: 4.5 },
          animation: {
            enable: true,
            speed: 3,
            startValue: "random",
            minimumValue: 0.5,
          },
        },
        links: {
          enable: true,
          distance: 140,
          color: "#bfc3c8",
          opacity: 0.08,
          width: 1,
        },
        move: {
          enable: true,
          speed: 0.35,
          direction: "none",
          random: true,
          straight: false,
          outModes: { default: "bounce" },
        },
        collisions: { enable: true, mode: "bounce" },
        zIndex: { value: 1 }, // depth effect
        rotate: { value: 0, animation: { enable: true, speed: 5 } },
      },
      interactivity: {
        detectsOn: "window",
        events: {
          onHover: { enable: true, mode: ["attract", "bubble"] },
          onClick: { enable: false },
          resize: { enable: true },
        },
        modes: {
          attract: { distance: 140, duration: 0.2, speed: 0.8 },
          repulse: { distance: 120, duration: 0.3 },
          bubble: {
            distance: 120,
            size: 3.5,
            duration: 1,
            opacity: 0.4,
          },
        },
      },
    }),
    []
  );

  const particlesLoaded = useCallback(async (container?: Container) => {
    containerRef.current = container ?? null;
  }, []);

  if (!engineReady) return null;

  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 0,
        pointerEvents: "none",
      }}
    >
      <Particles
        id="tsparticles-bg"
        particlesLoaded={particlesLoaded}
        options={options}
      />
    </div>
  );
};

export default ParticlesBackground;
