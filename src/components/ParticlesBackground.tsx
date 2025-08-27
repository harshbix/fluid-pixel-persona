import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { initParticlesEngine, Particles } from "@tsparticles/react";
import type { Container, ISourceOptions, Engine } from "@tsparticles/engine";
import { loadFull } from "tsparticles";

// Cinematic particle background with metallic shimmer, depth, soft links/collisions, and interactions
const ParticlesBackground = () => {
	const containerRef = useRef<Container | undefined>(undefined);
	const [engineReady, setEngineReady] = useState(false);

	useEffect(() => {
		let mounted = true;
		initParticlesEngine(async (engine: Engine) => {
			// Load full bundle to have collisions, links, attract/repulse, noise, and extras
			await loadFull(engine);
		}).then(() => {
			if (mounted) setEngineReady(true);
		});
		return () => {
			mounted = false;
		};
	}, []);

	// Easter egg: press Q to trigger a burst/shake of particles
	useEffect(() => {
		function handleKeyDown(event: KeyboardEvent) {
			if (event.key === "q" || event.key === "Q") {
				const container = containerRef.current;
				if (!container) return;
				// Quick shake by applying a temporary velocity boost and slight random direction
				const factor = 5; // burst magnitude
				const particlesArray = container.particles?.array || [];
				for (const particle of particlesArray) {
					const vx = (particle.velocity?.horizontal ?? 0) * factor + (Math.random() - 0.5) * factor;
					const vy = (particle.velocity?.vertical ?? 0) * factor + (Math.random() - 0.5) * factor;
					// @ts-expect-error internal velocity set is allowed here
					particle.velocity.horizontal = vx;
					// @ts-expect-error internal velocity set is allowed here
					particle.velocity.vertical = vy;
				}

				// Optional small camera-like shake via container canvas style
				const canvasEl = container.canvas?.element;
				if (canvasEl) {
					canvasEl.style.transition = "transform 120ms ease";
					canvasEl.style.transform = "translate3d(2px, 0, 0)";
					setTimeout(() => {
						canvasEl.style.transform = "translate3d(-2px, 0, 0)";
						setTimeout(() => {
							canvasEl.style.transform = "translate3d(0, 0, 0)";
						}, 120);
					}, 120);
				}
			}
		}
		document.addEventListener("keydown", handleKeyDown);
		return () => document.removeEventListener("keydown", handleKeyDown);
	}, []);

	const options: ISourceOptions = useMemo(() => ({
		fullScreen: { enable: false },
		fpsLimit: 90,
		background: { color: "transparent" },
		detectRetina: true,
		motion: { reduce: { factor: 2, value: true } },
		particles: {
			number: {
				value: 120,
				density: { enable: true, area: 900 }
			},
			color: {
				value: ["#d6d7db", "#c0c3c7", "#a6a9ad", "#e6e7eb"] // cool metallic palette
			},
			shape: { type: ["circle", "triangle"] },
			opacity: {
				value: { min: 0.15, max: 0.55 }, // glass-like transparency
				animation: { enable: true, speed: 0.25, startValue: "random", minimumValue: 0.1 }
			},
			size: {
				value: { min: 1, max: 4.5 }, // depth via size variation
				animation: { enable: true, speed: 3, startValue: "random", minimumValue: 0.5 }
			},
			links: {
				enable: true,
				distance: 140,
				color: "#bfc3c8",
				opacity: 0.08, // faint lines
				width: 1
			},
			move: {
				enable: true,
				speed: 0.35, // slow cinematic drift
				direction: "none",
				random: true,
				straight: false,
				outModes: { default: "bounce" }, // soft bounce at edges
				attract: { enable: false },
				trail: { enable: false }
			},
			bounce: {
				horizontal: { value: 0.6 },
				vertical: { value: 0.6 }
			},
			collisions: { enable: true, mode: "bounce" },
			shadow: { enable: true, blur: 6, color: "#ffffff" }, // subtle glow
			zIndex: { value: 0, opacityRate: 1, sizeRate: 1, velocityRate: 1 },
			rotate: { value: 0, animation: { enable: true, speed: 5 } }
		},
		interactivity: {
			detectsOn: "window",
			events: {
				onHover: { enable: true, mode: ["attract", "bubble"] },
				onClick: { enable: false, mode: [] },
				resize: true
			},
			modes: {
				attract: { distance: 140, duration: 0.2, speed: 0.8 },
				repulse: { distance: 120, duration: 0.3 },
				bubble: { distance: 120, size: 3.5, duration: 1, opacity: 0.4 },
				trail: {
					enable: false,
					delay: 0.005,
					quantity: 3
				}
			}
		}
	}), []);

	const particlesInit = useCallback(async (_engine: Engine) => {
		// already handled by initParticlesEngine in useEffect
	}, []);

	const particlesLoaded = useCallback(async (container?: Container) => {
		containerRef.current = container;
	}, []);

	if (!engineReady) return null;

	return (
		<div
			aria-hidden
			style={{
				position: "fixed",
				top: 0,
				left: 0,
				right: 0,
				bottom: 0,
				zIndex: 0,
				pointerEvents: "none" // background-only, do not capture clicks
			}}
		>
			<Particles id="tsparticles-bg" init={particlesInit} loaded={particlesLoaded} options={options} />
		</div>
	);
};

export default ParticlesBackground;

