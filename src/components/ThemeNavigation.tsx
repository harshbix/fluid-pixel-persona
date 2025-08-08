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
      <div className="theme-nav-glass rounded-2xl p-4 glass-glow">
        <div className="flex items-center gap-2">
          <div className="text-xs text-muted-foreground font-medium px-2">
            Theme:
          </div>
          <div className="flex gap-1">
            {themes.map((theme) => {
              const Icon = theme.icon;
              const isActive = getCurrentTheme() === theme.id;
              
              return (
                <button
                  key={theme.id}
                  onClick={() => handleThemeChange(theme.id)}
                  className={`
                    relative group p-2 rounded-xl transition-all duration-300
                    ${isActive 
                      ? 'bg-primary/20 text-primary shadow-lg scale-110 theme-btn-active' 
                      : 'text-muted-foreground hover:text-primary hover:bg-primary/10'
                    }
                  `}
                  title={theme.description}
                >
                  <Icon className="w-4 h-4" />
                  
                  {/* Active indicator */}
                  {isActive && (
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full animate-pulse" />
                  )}
                  
                  {/* Hover tooltip */}
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs bg-background/90 backdrop-blur-sm rounded-md border border-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10">
                    {theme.name}
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
