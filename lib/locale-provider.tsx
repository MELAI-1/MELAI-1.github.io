"use client";

import { NextIntlClientProvider } from "next-intl";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import en from "@/messages/en.json";
import fr from "@/messages/fr.json";

export type Locale = "en" | "fr";
const MESSAGES: Record<Locale, typeof en> = { en, fr };
const LOCALE_KEY = "portfolio_locale";

type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    const stored = window.localStorage.getItem(LOCALE_KEY) as Locale | null;
    if (stored === "en" || stored === "fr") {
      setLocaleState(stored);
    } else {
      const browserLocale = window.navigator.language.slice(0, 2);
      if (browserLocale === "fr") setLocaleState("fr");
    }
  }, []);

  const setLocale = (next: Locale) => {
    setLocaleState(next);
    window.localStorage.setItem(LOCALE_KEY, next);
  };

  const value = useMemo(() => ({ locale, setLocale }), [locale]);

  return (
    <LocaleContext.Provider value={value}>
      <NextIntlClientProvider locale={locale} messages={MESSAGES[locale]} timeZone="UTC">
        {children}
      </NextIntlClientProvider>
    </LocaleContext.Provider>
  );
}

export function useLocale(): LocaleContextValue {
  const context = useContext(LocaleContext);
  if (!context) throw new Error("useLocale must be used within a LocaleProvider");
  return context;
}
