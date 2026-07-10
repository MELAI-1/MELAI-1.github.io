"use client";

import { useLocale } from "@/lib/locale-provider";

export function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { locale, setLocale } = useLocale();

  return (
    <div
      className={`inline-flex rounded-full border border-white/10 bg-black/30 p-1 font-mono text-[11px] uppercase tracking-wide ${className}`}
    >
      {(["en", "fr"] as const).map((code) => (
        <button
          key={code}
          onClick={() => setLocale(code)}
          aria-pressed={locale === code}
          className={`rounded-full px-2.5 py-1 transition-colors ${
            locale === code ? "bg-cyan-500 text-black" : "text-slate-400 hover:text-slate-200"
          }`}
        >
          {code}
        </button>
      ))}
    </div>
  );
}
