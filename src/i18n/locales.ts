export type SupportedLocale = "en" | "sw";

export interface LocaleConfig {
  code: SupportedLocale;
  name: string;
  nativeName: string;
  shortName: string;
}

export const SUPPORTED_LOCALES: Record<SupportedLocale, LocaleConfig> = {
  en: {
    code: "en",
    name: "English",
    nativeName: "English",
    shortName: "EN",
  },
  sw: {
    code: "sw",
    name: "Swahili",
    nativeName: "Kiswahili",
    shortName: "SW",
  },
};

export const DEFAULT_LOCALE: SupportedLocale = "en";

export type Localized<T> = Record<SupportedLocale, T>;

export function resolveLocalized<T>(value: Localized<T> | T | undefined, locale: SupportedLocale, fallback: T): T {
  if (value === undefined || value === null) return fallback;
  if (typeof value === "object" && value !== null && !Array.isArray(value)) {
    const locObj = value as Record<string, unknown>;
    if (locale in locObj && locObj[locale] !== undefined) {
      return locObj[locale] as T;
    }
    if (DEFAULT_LOCALE in locObj && locObj[DEFAULT_LOCALE] !== undefined) {
      return locObj[DEFAULT_LOCALE] as T;
    }
  }
  return value as T;
}
