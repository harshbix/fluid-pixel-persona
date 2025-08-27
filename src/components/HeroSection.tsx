import { useEffect, useMemo, useRef, useState, useCallback } from 'react';
import { useTheme } from '@/hooks/useTheme';
import { useClock } from '@/hooks/useClock';
import { PartyPopper, MapPin, Thermometer, Wind, Droplets } from 'lucide-react';
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css';

// Simple weather hook (browser geolocation + OpenWeatherMap). Falls back gracefully when no key.
function useWeather() {
  const [data, setData] = useState<null | {
    name: string;
    temp: number; // °C
    wind: number; // m/s
    humidity: number; // %
    description: string;
    icon: string; // openweather icon code
  }>(null);

  useEffect(() => {
    const KEY = import.meta.env.VITE_OPENWEATHER_KEY;
    if (!KEY || typeof window === 'undefined' || !navigator.geolocation) return; // silent no-op

    navigator.geolocation.getCurrentPosition(async (pos) => {
      try {
        const { latitude, longitude } = pos.coords;
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
      } catch (_) {}
    });
  }, []);

  return data;
}

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
  const weather = useWeather();

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

              {/* Weather Widget (auto if env key) */}
              <div className="relative">
                <div className="relative border border-accent/20 bg-background/80 backdrop-blur-xl rounded-3xl p-6 shadow-2xl">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs uppercase tracking-widest text-muted-foreground">Weather</span>
                    <span className="text-xs text-muted-foreground flex items-center gap-1"><MapPin className="w-3 h-3" />{weather?.name ?? 'Unknown'}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    {/* Icon */}
                    <div className="shrink-0 w-16 h-16 rounded-2xl bg-primary/10 grid place-items-center">
                      {/* Simple icon via emoji fallback if no image */}
                      {weather ? (
                        <img
                          alt={weather.description}
                          className="w-10 h-10"
                          src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
                        />
                      ) : (
                        <span className="text-2xl">⛅</span>
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="text-3xl font-semibold text-primary">{weather?.temp ?? '—'}{typeof weather?.temp === 'number' ? '°C' : ''}</div>
                      <div className="text-sm text-muted-foreground">{weather?.description ?? 'Enable location for local weather'}</div>
                      <div className="mt-3 flex items-center gap-4 text-xs text-muted-foreground">
                        <span className="inline-flex items-center gap-1"><Wind className="w-3 h-3" /> {weather?.wind ?? '—'} m/s</span>
                        <span className="inline-flex items-center gap-1"><Droplets className="w-3 h-3" /> {weather?.humidity ?? '—'}%</span>
                        <span className="inline-flex items-center gap-1"><Thermometer className="w-3 h-3" /> Feels like {weather?.temp ?? '—'}°</span>
                      </div>
                    </div>
                  </div>
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