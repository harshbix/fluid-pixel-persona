import React from "react";
import { useTheme } from "@/hooks/useTheme";
import { Sparkles, Sun, CloudRain, Gift, PartyPopper, Snowflake, Palette, Monitor } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const themes = [
  { name: "default", icon: <Monitor className="w-5 h-5" />, isLight: false },
  { name: "retro", icon: <Palette className="w-5 h-5" />, isLight: true },
  { name: "neon", icon: <Sparkles className="w-5 h-5" />, isLight: false },
  { name: "pastel", icon: <Palette className="w-5 h-5" />, isLight: true },
  { name: "sunny", icon: <Sun className="w-5 h-5" />, isLight: true },
  { name: "rainy", icon: <CloudRain className="w-5 h-5" />, isLight: false },
  { name: "christmas", icon: <Snowflake className="w-5 h-5" />, isLight: true },
  { name: "birthday", icon: <PartyPopper className="w-5 h-5" />, isLight: true },
  { name: "gift", icon: <Gift className="w-5 h-5" />, isLight: true },
];

export const ThemeNavigation = () => {
  const { secretTheme, setTheme } = useTheme();
  const isMobile = useIsMobile();

  const getCurrentTheme = () => secretTheme || "default";

  const handleRandomTheme = () => {
    let available = themes.filter((t) => t.name !== getCurrentTheme());
    let randomTheme = available[Math.floor(Math.random() * available.length)];
    setTheme(randomTheme.name === "default" ? null : randomTheme.name);
  };

  const glassClass = `
    relative rounded-3xl
    bg-white/10 backdrop-blur-xl
    border border-white/20
    shadow-2xl shadow-white/20
    hover:bg-white/20 transition-all duration-300
  `;

  const rippleEffect = `
    relative overflow-hidden
    before:absolute before:inset-0 before:rounded-3xl before:bg-gradient-to-r 
    before:from-white/30 before:to-white/10 before:opacity-50 
    before:animate-water-ripple
  `;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      {isMobile ? (
        <button
          onClick={handleRandomTheme}
          className={`${glassClass} ${rippleEffect} p-4 flex items-center justify-center`}
          title="Change Theme"
        >
          <Sparkles className="w-6 h-6 text-white drop-shadow-md" />
        </button>
      ) : (
        <div className={`${glassClass} flex items-center gap-4 p-4 ${rippleEffect}`}>
          <div className="text-sm font-medium px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white shadow-md drop-shadow-md">
            Theme
          </div>
          <div className="flex gap-2">
            {themes.map(({ name, icon, isLight }) => {
              const isActive = getCurrentTheme() === name;
              const iconColor = isActive ? (isLight ? "text-black" : "text-white") : isLight ? "text-black/70" : "text-white/70";
              return (
                <button
                  key={name}
                  onClick={() => setTheme(name === "default" ? null : name)}
                  className={`relative p-3 rounded-2xl flex items-center justify-center ${glassClass} transition-all duration-300 ${rippleEffect}`}
                  title={name}
                >
                  {React.cloneElement(icon, { className: `w-5 h-5 ${iconColor} drop-shadow-md` })}
                  {isActive && (
                    <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-white rounded-full animate-pulse shadow-lg" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
      <style>{`
        @keyframes water-ripple {
          0%, 100% { transform: translateY(0) scale(1); opacity: 0.5; }
          50% { transform: translateY(2px) scale(1.05); opacity: 0.7; }
        }
        .animate-water-ripple {
          animation: water-ripple 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};
