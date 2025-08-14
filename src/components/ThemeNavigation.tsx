import { useTheme } from '@/hooks/useTheme';
import { Palette, Sparkles, Moon, Sun, CloudRain, Gift, Cake } from 'lucide-react';

const themes = [
  { id: 'default', name: 'Water Glass', icon: Sparkles, description: 'Default water-glass theme', textClass: 'text-white', backgroundClass: 'bg-black/40' },
  { id: 'retro', name: 'Retro', icon: Palette, description: 'Warm vintage vibes', textClass: 'text-yellow-900', backgroundClass: 'bg-yellow-100/80' },
  { id: 'neon', name: 'Neon', icon: Moon, description: 'Cyberpunk aesthetic', textClass: 'text-pink-400', backgroundClass: 'bg-gray-900/80' },
  { id: 'pastel', name: 'Pastel', icon: Sparkles, description: 'Soft dreamy colors', textClass: 'text-pink-700', backgroundClass: 'bg-pink-100/80' },
  { id: 'sunny', name: 'Sunny', icon: Sun, description: 'Bright and cheerful', textClass: 'text-yellow-900', backgroundClass: 'bg-yellow-200/80' },
  { id: 'rainy', name: 'Rainy', icon: CloudRain, description: 'Cool and calming', textClass: 'text-blue-900', backgroundClass: 'bg-blue-100/80' },
  { id: 'christmas', name: 'Christmas', icon: Gift, description: 'Festive holiday spirit', textClass: 'text-green-900', backgroundClass: 'bg-green-100/80' },
  { id: 'birthday', name: 'Birthday', icon: Cake, description: 'Celebration mode', textClass: 'text-pink-900', backgroundClass: 'bg-pink-200/80' },
];

export const ThemeNavigation = () => {
  const { secretTheme, setTheme } = useTheme();

  const handleThemeChange = (themeId: string) => {
    const currentTheme = getCurrentTheme();
    if (currentTheme !== themeId) {
      setTheme(themeId === 'default' ? null : themeId);
    }
  };

  const getCurrentTheme = () => {
    return secretTheme || 'default'
  };

  const currentThemeObj = themes.find(t => t.id === getCurrentTheme()) || themes[0];

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <div className={`ios-water-glass-card rounded-3xl p-4 backdrop-blur-2xl border border-white/20 shadow-2xl ${currentThemeObj.backgroundClass}`}>
        <div className="flex items-center gap-3">
          <div className={`text-sm font-medium px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm ${currentThemeObj.textClass}`}>
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
                      ? `bg-white/20 shadow-lg ios-theme-active ${theme.textClass}` 
                      : `text-black/70 hover:text-black hover:bg-black/10`
                    }
                  `}
                  title={theme.description}
                  style={isActive ? { backgroundColor: 'rgba(255,255,255,0.2)' } : {}}
                >
                  <Icon className="w-5 h-5" />
                  {isActive && (
                    <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-white rounded-full animate-pulse shadow-lg" />
                  )}
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
