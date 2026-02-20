import { useState, useEffect } from 'react';

interface ThemeData {
  theme: string;
  weather?: string;
  holiday?: string;
  isBirthday?: boolean;
}

const BIRTHDAY_DATE = '06-20';

const holidays = [
  { name: 'christmas', start: '12-20', end: '12-26' },
  { name: 'eid', start: '04-20', end: '04-25' }, // You’ll fix this
];

export const useTheme = () => {
  const [themeData, setThemeData] = useState<ThemeData>({ theme: 'default' });
  const [secretTheme, setSecretTheme] = useState<string | null>(null);

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

  const checkBirthday = () => {
    const now = new Date();
    const currentDate = `${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
    return currentDate === BIRTHDAY_DATE;
  };

  const getWeather = async () => {
    const weatherTypes = ['sunny', 'rainy', 'cloudy'];
    return weatherTypes[Math.floor(Math.random() * weatherTypes.length)];
  };

  useEffect(() => {
    const updateTheme = async () => {
      const weather = await getWeather();
      const holiday = checkHoliday();
      const isBirthday = checkBirthday();

      let theme = 'default';

      if (isBirthday) {
        theme = 'birthday';
      } else if (holiday) {
        theme = holiday;
      } else if (weather === 'sunny') {
        theme = 'sunny';
      } else if (weather === 'rainy') {
        theme = 'rainy';
      }

      setThemeData({ theme, weather, holiday, isBirthday });
    };

    updateTheme();
    const interval = setInterval(updateTheme, 3600000); // every hour
    return () => clearInterval(interval);
  }, []);

  // Apply data-theme to body
  useEffect(() => {
    const activeTheme = secretTheme || themeData.theme;
    document.body.setAttribute('data-theme', activeTheme || 'default');
  }, [themeData.theme, secretTheme]);

  // Cycle secret themes
  const cycleSecretTheme = () => {
    const secretThemes = ['retro', 'neon', 'pastel', null];
    const currentIndex = secretThemes.indexOf(secretTheme ?? null);
    const nextIndex = (currentIndex + 1) % secretThemes.length;
    setSecretTheme(secretThemes[nextIndex]);
  };

  // Set specific theme
  const setTheme = (themeId: string | null) => {
    if (themeId === null || themeId === 'default') {
      setSecretTheme(null);
    } else {
      setSecretTheme(themeId);
    }
  };

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === 'w') {
        cycleSecretTheme();
      }
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [secretTheme, cycleSecretTheme]);

  return {
    ...themeData,
    secretTheme,
    cycleSecretTheme,
    setTheme,
  };
};
