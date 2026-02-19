import React from "react";
import { useTheme } from "@/hooks/useTheme";
import { Sparkles, Sun, CloudRain, Gift, PartyPopper, Snowflake, Palette, Monitor } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const themes = [
  { name: "default", icon: <Monitor className="w-4 h-4" />, label: "System" },
  { name: "retro", icon: <Palette className="w-4 h-4" />, label: "Retro" },
  { name: "neon", icon: <Sparkles className="w-4 h-4" />, label: "Neon" },
  { name: "pastel", icon: <Palette className="w-4 h-4" />, label: "Pastel" },
  { name: "sunny", icon: <Sun className="w-4 h-4" />, label: "Sunny" },
  { name: "rainy", icon: <CloudRain className="w-4 h-4" />, label: "Rainy" },
  { name: "christmas", icon: <Snowflake className="w-4 h-4" />, label: "Snow" },
  { name: "birthday", icon: <PartyPopper className="w-4 h-4" />, label: "Bday" },
  { name: "gift", icon: <Gift className="w-4 h-4" />, label: "Gift" },
];

export const ThemeNavigation = () => {
  const { secretTheme, setTheme } = useTheme();
  const isMobile = useIsMobile();
  const current = secretTheme || "default";

  const handleRandom = () => {
    const available = themes.filter((t) => t.name !== current);
    const pick = available[Math.floor(Math.random() * available.length)];
    setTheme(pick.name === "default" ? null : pick.name);
  };

  if (isMobile) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={handleRandom}
          className="liquid-glass rounded-full w-14 h-14 flex items-center justify-center hover:scale-105 active:scale-95 transition-transform duration-150 shadow-2xl"
          title="Change Theme"
        >
          <Sparkles className="w-6 h-6 text-foreground/80 drop-shadow" />
        </button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <div className="liquid-glass rounded-[28px] flex items-center gap-1.5 px-3 py-2.5">

        {/* Label */}
        <span className="text-[10px] font-extrabold tracking-[0.24em] uppercase text-foreground/40 pl-1.5 pr-1 select-none whitespace-nowrap">
          Theme
        </span>

        {/* Divider */}
        <div className="w-px h-5 bg-white/18 flex-shrink-0 mx-1" />

        {/* Theme buttons */}
        <div className="flex gap-0.5">
          {themes.map(({ name, icon }) => {
            const isActive = current === name;
            return (
              <button
                key={name}
                onClick={() => setTheme(name === "default" ? null : name)}
                title={name}
                className={`relative p-2.5 rounded-xl ${isActive ? "liquid-glass-btn-active" : "liquid-glass-btn"}`}
              >
                {React.cloneElement(icon, {
                  className: `w-4 h-4 transition-all duration-150 ${isActive ? "text-foreground drop-shadow" : "text-foreground/40"
                    }`,
                })}
                {isActive && (
                  <span className="absolute top-0.5 right-0.5 w-1.5 h-1.5 rounded-full bg-primary/90 shadow-sm" />
                )}
              </button>
            );
          })}
        </div>

      </div>
    </div>
  );
};

