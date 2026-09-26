import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "en" | "sw";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.projects": "Projects",
    "nav.products": "Products",
    "nav.about": "About",
    "nav.blog": "Blog",
    "nav.contact": "Contact",
    "nav.resume": "Resume / CV",
    "nav.more": "More",
    "nav.bookCall": "Book a Call",

    // Hero
    "hero.greeting": "Junior Jeconia",
    "hero.title": "Frontend-leaning Full-Stack Developer.",
    "hero.subtitle": "I design and build websites, web applications, and digital systems with a strong focus on frontend craft and reliable architecture.",
    "hero.viewWork": "View My Work",
    "hero.contact": "Let's Talk",
    "hero.available": "Available for select projects",
    "hero.cardTitle": "Book a call",
    "hero.cardSubtitle": "15-minute conversation about your project or hardware requirements.",
    "hero.cardBtn": "Schedule Call",

    // CTA
    "cta.title": "Let's build something useful.",
    "cta.subtitle": "Have a website, application, or digital product in mind? Let's talk.",
    "cta.startProject": "Start a Project",
    "cta.bookCall": "Schedule a Call",
    "cta.directAccess": "Direct Developer Communication",
    "cta.fastResponse": "Quick Turnaround",

    // Common
    "common.new": "New",
    "common.explore": "Explore",
    "common.readMore": "Read Note",
    "common.getStarted": "Get Started",
  },
  sw: {
    // Navigation
    "nav.home": "Mwanzo",
    "nav.services": "Huduma",
    "nav.projects": "Kazi Zangu",
    "nav.products": "Bidhaa",
    "nav.about": "Kuhusu",
    "nav.blog": "Makala",
    "nav.contact": "Mawasiliano",
    "nav.resume": "Wasifu / CV",
    "nav.more": "Zaidi",
    "nav.bookCall": "Panga Mazungumzo",

    // Hero
    "hero.greeting": "Junior Jeconia",
    "hero.title": "Msanidi Programu & Mhandisi wa Wavuti.",
    "hero.subtitle": "Ninatengeneza tovuti, mifumo ya kidijitali, na programu za kisasa nikizingatia utendaji wa haraka na uzoefu bora wa mtumiaji.",
    "hero.viewWork": "Tazama Kazi Zangu",
    "hero.contact": "Tuwasiliane",
    "hero.available": "Ninapatikana kwa miradi mipya",
    "hero.cardTitle": "Panga Mazungumzo",
    "hero.cardSubtitle": "Mazungumzo mafupi ya dakika 15 kujadili mradi wako au mahitaji ya mifumo.",
    "hero.cardBtn": "Weka Miadi",

    // CTA
    "cta.title": "Tujenge kitu chenye manufaa.",
    "cta.subtitle": "Una wazo la tovuti, mfumo au programu ya kidijitali? Tuwasiliane tuzungumze.",
    "cta.startProject": "Anzisha Mradi",
    "cta.bookCall": "Panga Mazungumzo",
    "cta.directAccess": "Mawasiliano ya Moja kwa Moja",
    "cta.fastResponse": "Majibu Ndani ya Saa 24",

    // Common
    "common.new": "Mpya",
    "common.explore": "Angalia",
    "common.readMore": "Soma Zaidi",
    "common.getStarted": "Anza Sasa",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("portfolio_lang") as Language;
      if (saved === "en" || saved === "sw") return saved;
    }
    return "en";
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== "undefined") {
      localStorage.setItem("portfolio_lang", lang);
      document.documentElement.lang = lang;
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "sw" : "en");
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      document.documentElement.lang = language;
    }
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key] || translations.en[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
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
