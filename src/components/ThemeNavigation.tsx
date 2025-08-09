import { useTheme } from '@/hooks/useTheme';
import { Palette, Sparkles, Moon, Sun, Cloud, CloudRain, Gift, Cake } from 'lucide-react';

const themes = [
  { id: 'default', name: 'Water Glass', icon: Sparkles, description: 'Default water-glass theme' },
  { id: 'retro', name: 'Retro', icon: Palette, description: 'Warm vintage vibes' },
  { id: 'neon', name: 'Neon', icon: Moon, description: 'Cyberpunk aesthetic' },
  { id: 'pastel', name: 'Pastel', icon: Sparkles, description: 'Soft dreamy colors' },
  { id: 'sunny', name: 'Sunny', icon: Sun, description: 'Bright and cheerful' },
  { id: 'rainy', name: 'Rainy', icon: CloudRain, description: 'Cool and calming' },
  { id: 'christmas', name: 'Christmas', icon: Gift, description: 'Festive holiday spirit' },
  { id: 'birthday', name: 'Birthday', icon: Cake, description: 'Celebration mode' },
];

export const ThemeNavigation = () => {
  const { secretTheme, setTheme } = useTheme();

  const handleThemeChange = (themeId: string) => {
    const currentTheme = getCurrentTheme();
    // Only change theme if clicking on a different theme
    if (currentTheme !== themeId) {
      setTheme(themeId === 'default' ? null : themeId);
    }
  };

  const getCurrentTheme = () => {
    // Use the hook's state instead of reading from DOM
    return secretTheme || 'default';
  };

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      {/* iOS 26 Style Water Glass Card */}
      <div className="ios-water-glass-card rounded-3xl p-4 backdrop-blur-2xl border border-white/20 shadow-2xl">
        <div className="flex items-center gap-3">
          <div className="text-sm text-white/80 font-medium px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm">
            Theme
          </div>
          <div className="flex gap-2">
            {themes.map((theme) => {
              const Icon = theme.icon;
              const isActive = getCurrentTheme() === theme.id;
              
              return (
                <button
                  key={theme.id}
                  onClick={() => handleThemeChange(theme.id)}
                  className={`
                    relative group p-3 rounded-2xl transition-all duration-300 ios-theme-btn
                    ${isActive 
                      ? 'bg-white/20 text-white shadow-lg scale-105 ios-theme-active' 
                      : 'text-white/70 hover:text-white hover:bg-white/10'
                    }
                  `}
                  title={theme.description}
                >
                  <Icon className="w-5 h-5" />
                  
                  {/* Active indicator */}
                  {isActive && (
                    <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-white rounded-full animate-pulse shadow-lg" />
                  )}
                  
                  {/* Hover tooltip */}
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-3 py-2 text-sm bg-black/80 backdrop-blur-xl rounded-xl border border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap z-10 shadow-xl">
                    {theme.name}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/80"></div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
