import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import { SupportedLocale, DEFAULT_LOCALE, SUPPORTED_LOCALES, resolveLocalized, Localized } from "../i18n/locales";
import { translations } from "../i18n/translations";

export type Language = SupportedLocale;

interface LanguageContextType {
  language: SupportedLocale;
  setLanguage: (lang: SupportedLocale) => void;
  toggleLanguage: () => void;
  t: (key: string, fallback?: string) => string;
  tContent: <T>(content: Localized<T> | T | undefined, fallback?: T) => T;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<SupportedLocale>(() => {
    if (typeof window !== "undefined") {
      try {
        const saved = localStorage.getItem("portfolio_lang") as SupportedLocale;
        if (saved && saved in SUPPORTED_LOCALES) return saved;
      } catch {
        // Ignore storage errors in private browsing
      }
    }
    return DEFAULT_LOCALE;
  });

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = language;
    }
    try {
      localStorage.setItem("portfolio_lang", language);
    } catch {
      // Ignore storage errors
    }
  }, [language]);

  const setLanguage = useCallback((newLang: SupportedLocale) => {
    if (newLang in SUPPORTED_LOCALES) {
      setLanguageState(newLang);
    }
  }, []);

  const toggleLanguage = useCallback(() => {
    setLanguageState((prev) => (prev === "en" ? "sw" : "en"));
  }, []);

  const t = useCallback(
    (key: string, fallback?: string): string => {
      const activeDict = translations[language];
      if (activeDict && key in activeDict) {
        return activeDict[key];
      }
      const defaultDict = translations[DEFAULT_LOCALE];
      if (defaultDict && key in defaultDict) {
        return defaultDict[key];
      }
      return fallback !== undefined ? fallback : key;
    },
    [language]
  );

  const tContent = useCallback(
    <T,>(content: Localized<T> | T | undefined, fallback?: T): T => {
      return resolveLocalized(content, language, fallback as T);
    },
    [language]
  );

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t, tContent }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
