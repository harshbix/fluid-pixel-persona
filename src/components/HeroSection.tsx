import { useEffect, useMemo, useRef, useState, useCallback } from 'react';
import { useTheme } from '@/hooks/useTheme';
import { useClock } from '@/hooks/useClock';
import Particles from 'react-tsparticles';
import { PartyPopper, MapPin, Thermometer, Wind, Droplets } from 'lucide-react';
import { loadFull } from 'tsparticles';
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css';

// Smart weather hook with location prompt and fallback
function useWeather() {
  const [data, setData] = useState<null | {
    name: string;
    temp: number; // °C
    wind: number; // m/s
    humidity: number; // %
    description: string;
    icon: string; // openweather icon code
  }>(null);
  const [locationDenied, setLocationDenied] = useState(false);
  const [showLocationPrompt, setShowLocationPrompt] = useState(false);

  const requestLocation = useCallback(async () => {
    const KEY = import.meta.env.VITE_OPENWEATHER_KEY;
    if (!KEY) return;

    try {
      const position = await new Promise<GeolocationPosition>((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject, {
          timeout: 10000,
          enableHighAccuracy: false
        });
      });

      const { latitude, longitude } = position.coords;
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${KEY}&units=metric`;
      const res = await fetch(url);
      if (!res.ok) return;
      const json = await res.json();
      setData({
        name: json.name,
        temp: Math.round(json.main.temp),
        wind: json.wind.speed,
        humidity: json.main.humidity,
        description: json.weather?.[0]?.main ?? '—',
        icon: json.weather?.[0]?.icon ?? '01d',
      });
      setLocationDenied(false);
      setShowLocationPrompt(false);
    } catch (error) {
      setLocationDenied(true);
      setShowLocationPrompt(false);
    }
  }, []);

  useEffect(() => {
    const KEY = import.meta.env.VITE_OPENWEATHER_KEY;
    if (!KEY || typeof window === 'undefined' || !navigator.geolocation) return;

    // Show location prompt after a delay
    const timer = setTimeout(() => {
      setShowLocationPrompt(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return { data, locationDenied, showLocationPrompt, requestLocation };
}

// Rotating dramatic taglines
const TAGLINES = [
  'Designer by day. Pixel perfectionist by night.',
  'Crafting interfaces that feel like magic.',
  'Shipping audacious UI with calm code.',
  'Drama, motion, and delightful micro-interactions.',
  'Where frontend engineering meets cinema.',
  'Building digital experiences that make hearts race.',
  'Code is poetry. UI is the stage where it performs.',
  'Turning complex problems into elegant solutions.',
];

export const HeroSection = () => {
  const { isBirthday, cycleSecretTheme } = useTheme();
  const { formattedTime, formattedDate } = useClock();
  const { data: weather, locationDenied, showLocationPrompt, requestLocation } = useWeather();

  // Cinematic parallax state
  const rootRef = useRef<HTMLElement | null>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  // Random clock mode: true = analog, false = digital
  const [analogMode, setAnalogMode] = useState<boolean>(() => Math.random() > 0.5);

  // Rotating tagline (every 4 seconds)
  const [taglineIndex, setTaglineIndex] = useState<number>(0);

  useEffect(() => {
    const id = setInterval(() => {
      setAnalogMode(Math.random() > 0.5);
      setTaglineIndex((i) => (i + 1) % TAGLINES.length);
    }, 4000); // change every 4s for dramatic effect
    return () => clearInterval(id);
  }, []);

  // Theme color extraction for 3D particles
  const themeColors = useMemo(() => {
    if (typeof window === 'undefined') return { primary: '#8884d8', accent: '#8884d8' };
    const rs = getComputedStyle(document.documentElement);
    const primary = rs.getPropertyValue('--primary').trim() || '#8884d8';
    const accent = rs.getPropertyValue('--accent').trim() || '#a78bfa';
    const muted = rs.getPropertyValue('--muted-foreground').trim() || '#94a3b8';
    return { primary, accent, muted };
  }, []);

  // Enhanced tsparticles init
  const particlesInit = useCallback(async (engine: any) => {
    await loadFull(engine);
  }, []);

  // Mouse tracking for cinematic parallax
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
      {/* 3D CINEMATIC PARTICLES with depth + parallax */}
      <div className="absolute inset-0 -z-10">
        <Particles
          id="heroParticles3D"
          init={particlesInit}
          options={{
            fullScreen: { enable: false },
            detectRetina: true,
            background: { color: { value: 'transparent' } },
            fpsLimit: 90,
            interactivity: {
              detectsOn: 'canvas',
              events: {
                onHover: { enable: true, mode: ['slow', 'attract', 'bubble'] },
                resize: true,
              },
              modes: {
                slow: { factor: 0.8, radius: 150 },
                attract: { distance: 200, duration: 0.4, factor: 3 },
                bubble: { distance: 180, size: 8, duration: 2 },
              },
            },
            particles: {
              number: { value: 80, density: { enable: true, area: 1000 } },
              color: { value: [themeColors.primary, themeColors.accent, '#ffffff'] },
              links: {
                enable: true,
                distance: 150,
                opacity: 0.4,
                color: themeColors.muted || themeColors.primary,
                width: 1.5,
                triangles: { enable: true, opacity: 0.1 },
              },
              move: {
                enable: true,
                speed: { min: 0.2, max: 1.5 },
                direction: 'none',
                outModes: { default: 'out' },
                random: true,
                straight: false,
              },
              opacity: { 
                value: { min: 0.2, max: 0.9 },
                animation: { 
                  enable: true, 
                  speed: 0.8, 
                  sync: false,
                  startValue: 'random'
                }
              },
              size: { 
                value: { min: 1, max: 6 },
                animation: { 
                  enable: true, 
                  speed: 1.2, 
                  sync: false,
                  startValue: 'random'
                }
              },
              shape: { 
                type: ['circle', 'triangle', 'polygon', 'star'],
                polygon: { sides: 5 }
              },
              shadow: { 
                enable: true, 
                blur: 5, 
                color: themeColors.primary,
                offset: { x: 1, y: 1 }
              },
              rotate: {
                value: { min: 0, max: 360 },
                animation: { enable: true, speed: 2, sync: false }
              },
            },
            motion: { reduce: { factor: 2 } },
            pauseOnBlur: true,
          }}
        />
      </div>

      {/* CINEMATIC PARALLAX LAYERS with enhanced 3D depth */}
      <div
        className="absolute inset-0 -z-5 will-change-transform"
        style={{
          transform: `translate3d(${mouse.x * 25}px, ${mouse.y * 25}px, 0)`,
          transition: 'transform 80ms ease-out',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/5 via-background/0 to-background/30" />
      </div>

      <div
        className="absolute inset-0 -z-5 will-change-transform"
        style={{
          transform: `translate3d(${mouse.x * -18}px, ${mouse.y * -18}px, 0)`,
          transition: 'transform 120ms ease-out',
        }}
      >
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/8 blur-3xl animate-pulse" />
        <div className="absolute bottom-1/5 right-1/5 w-80 h-80 rounded-full bg-accent/12 blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full bg-primary/6 blur-2xl animate-pulse" style={{ animationDelay: '3s' }} />
      </div>

      <div
        className="absolute inset-0 -z-5 will-change-transform"
        style={{
          transform: `translate3d(${mouse.x * 10}px, ${mouse.y * 10}px, 0)`,
          transition: 'transform 180ms ease-out',
        }}
      >
        <div className="absolute top-1/3 left-1/2 w-48 h-48 rounded-full bg-accent/8 blur-xl animate-pulse" style={{ animationDelay: '0.8s' }} />
        <div className="absolute bottom-1/3 left-1/4 w-56 h-56 rounded-full bg-primary/6 blur-2xl animate-pulse" style={{ animationDelay: '2.2s' }} />
      </div>

      {/* ENHANCED DARK THEME SPOTLIGHT (only visible in dark) */}
      <div className="dark:block hidden absolute inset-0 -z-5">
        <div
          className="pointer-events-none absolute inset-0 transition-all duration-1000"
          style={{
            background: `radial-gradient(ellipse 70% 60% at ${50 + mouse.x * 12}% ${50 + mouse.y * 12}%, transparent 0%, rgba(0,0,0,0.1) 25%, rgba(0,0,0,0.4) 65%, rgba(0,0,0,0.9) 100%)`,
            mixBlendMode: 'multiply',
          }}
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-70 transition-all duration-500"
          style={{
            background: `radial-gradient(circle at ${50 + mouse.x * 20}% ${50 + mouse.y * 20}%, rgba(138, 132, 216, 0.15) 0%, rgba(167, 139, 250, 0.08) 30%, transparent 60%)`,
            mixBlendMode: 'screen',
          }}
        />
      </div>

      {/* Subtle vignette for cinema feel */}
      <div className="pointer-events-none absolute inset-0 rounded-none -z-5">
        <div className="absolute inset-0 shadow-[inset_0_0_120px_60px] shadow-background/60" />
      </div>

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

              {/* DRAMATIC ROTATING TAGLINE with animation */}
              <div className="relative">
                <p className="relative text-lg xl:text-xl text-muted-foreground py-4 px-4 italic transition-all duration-700 ease-in-out transform">
                  <span className="inline-block animate-pulse text-primary/80">
                    ✨ {TAGLINES[taglineIndex]}
                  </span>
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
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs uppercase tracking-widest text-muted-foreground">Time</span>
                    <span className="text-xs text-muted-foreground">{formattedDate}</span>
                  </div>
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

              {/* SMART WEATHER WIDGET with location prompt + fallback */}
              <div className="relative">
                <div className="relative border border-accent/20 bg-background/80 backdrop-blur-xl rounded-3xl p-6 shadow-2xl">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs uppercase tracking-widest text-muted-foreground">Weather</span>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {weather?.name ?? (locationDenied ? 'Location denied' : 'Unknown')}
                    </span>
                  </div>
                  
                  {/* Location Prompt */}
                  {showLocationPrompt && !weather && !locationDenied && (
                    <div className="text-center py-4">
                      <div className="text-2xl mb-2">🌤️</div>
                      <p className="text-sm text-muted-foreground mb-3">
                        Enable location for local weather
                      </p>
                      <button
                        onClick={requestLocation}
                        className="px-6 py-2 bg-accent/20 hover:bg-accent/30 text-accent rounded-xl text-sm font-medium transition-all duration-300 hover:scale-105"
                      >
                        Allow Location
                      </button>
                    </div>
                  )}
                  
                  {/* Location Denied Fallback */}
                  {locationDenied && !weather && (
                    <div className="text-center py-4">
                      <div className="text-2xl mb-2">📍</div>
                      <p className="text-sm text-muted-foreground mb-3">
                        Location access needed for weather
                      </p>
                      <button
                        onClick={requestLocation}
                        className="px-6 py-2 bg-primary/20 hover:bg-primary/30 text-primary rounded-xl text-sm font-medium transition-all duration-300 hover:scale-105"
                      >
                        Try Again
                      </button>
                    </div>
                  )}

                  {/* Weather Data Display */}
                  {weather && (
                    <div className="flex items-center gap-4">
                      <div className="shrink-0 w-16 h-16 rounded-2xl bg-primary/10 grid place-items-center">
                        <img
                          alt={weather.description}
                          className="w-10 h-10"
                          src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
                        />
                      </div>
                      <div className="flex-1">
                        <div className="text-3xl font-semibold text-primary">{weather.temp}°C</div>
                        <div className="text-sm text-muted-foreground">{weather.description}</div>
                        <div className="mt-3 flex items-center gap-4 text-xs text-muted-foreground">
                          <span className="inline-flex items-center gap-1"><Wind className="w-3 h-3" /> {weather.wind} m/s</span>
                          <span className="inline-flex items-center gap-1"><Droplets className="w-3 h-3" /> {weather.humidity}%</span>
                          <span className="inline-flex items-center gap-1"><Thermometer className="w-3 h-3" /> Feels like {weather.temp}°</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Loading State */}
                  {!weather && !showLocationPrompt && !locationDenied && (
                    <div className="flex items-center gap-4">
                      <div className="shrink-0 w-16 h-16 rounded-2xl bg-primary/10 grid place-items-center">
                        <div className="animate-spin text-2xl">🌀</div>
                      </div>
                      <div className="flex-1">
                        <div className="text-3xl font-semibold text-primary">—</div>
                        <div className="text-sm text-muted-foreground">Loading weather...</div>
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
              <p className="relative text-xl md:text-2xl text-muted-foreground py-6 px-4 italic transition-all duration-700 ease-in-out">
                <span className="inline-block animate-pulse text-primary/80">
                  ✨ {TAGLINES[taglineIndex]}
                </span>
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
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="relative group rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/20 transition-colors" />
                <div className="relative border-2 border-primary bg-background/80 backdrop-blur-md px-8 py-4 text-primary hover:text-primary-foreground font-bold uppercase tracking-wide transition-all duration-300 rounded-2xl shadow-xl">
                  View My Work
                </div>
              </button>
              <button className="relative group rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-accent/10 group-hover:bg-accent/20 transition-colors" />
                <div className="relative border-2 border-accent bg-background/80 backdrop-blur-md px-8 py-4 text-muted-foreground hover:text-primary font-bold uppercase tracking-wide transition-all duration-300 rounded-2xl shadow-xl">
                  Get In Touch
                </div>
              </button>
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