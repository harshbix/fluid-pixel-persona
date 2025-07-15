import { useState, useEffect } from 'react';

interface ThemeData {
  theme: string;
  weather?: string;
  holiday?: string;
  isBirthday?: boolean;
}

const BIRTHDAY_DATE = '06-20'; // June 20th

const holidays = [
  { name: 'christmas', start: '12-20', end: '12-26' },
  { name: 'eid', start: '04-20', end: '04-25' }, // Approximate, varies yearly
];

export const useTheme = () => {
  const [themeData, setThemeData] = useState<ThemeData>({ theme: 'default' });
  const [secretTheme, setSecretTheme] = useState<string | null>(null);

  // Check if current date is within holiday range
  const checkHoliday = () => {
    const now = new Date();
    const currentDate = `${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
    
    for (const holiday of holidays) {
      if (currentDate >= holiday.start && currentDate <= holiday.end) {
        return holiday.name;
      }
    }
    return null;
  };

  // Check if today is birthday
  const checkBirthday = () => {
    const now = new Date();
    const currentDate = `${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
    return currentDate === BIRTHDAY_DATE;
  };

  // Mock weather API (in real app, use OpenWeatherMap or similar)
  const getWeather = async () => {
    // Simulate weather data - replace with real API
    const weatherTypes = ['sunny', 'rainy', 'cloudy'];
    return weatherTypes[Math.floor(Math.random() * weatherTypes.length)];
  };

  useEffect(() => {
    const updateTheme = async () => {
      const weather = await getWeather();
      const holiday = checkHoliday();
      const isBirthday = checkBirthday();

      let theme = 'default';
      
      if (holiday) {
        theme = holiday;
      } else if (weather === 'sunny') {
        theme = 'sunny';
      } else if (weather === 'rainy') {
        theme = 'rainy';
      }

      setThemeData({ theme, weather, holiday, isBirthday });
    };

    updateTheme();
    // Update theme every hour
    const interval = setInterval(updateTheme, 3600000);
    
    return () => clearInterval(interval);
  }, []);

  // Apply theme to document
  useEffect(() => {
    const activeTheme = secretTheme || themeData.theme;
    
    // Remove all theme classes
    document.body.classList.remove(
      'theme-christmas', 'theme-eid', 'theme-sunny', 'theme-rainy',
      'theme-retro', 'theme-neon', 'theme-pastel'
    );
    
    // Add current theme class
    if (activeTheme !== 'default') {
      document.body.classList.add(`theme-${activeTheme}`);
    }
  }, [themeData.theme, secretTheme]);

  // Secret theme cycling
  const cycleSecretTheme = () => {
    const secretThemes = ['retro', 'neon', 'pastel', null];
    const currentIndex = secretThemes.indexOf(secretTheme);
    const nextIndex = (currentIndex + 1) % secretThemes.length;
    setSecretTheme(secretThemes[nextIndex]);
  };

  // Keyboard shortcut handler
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === 'w') {
        cycleSecretTheme();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [secretTheme]);

  return {
    ...themeData,
    secretTheme,
    cycleSecretTheme,
  };
};