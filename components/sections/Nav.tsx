"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Menu, X } from "lucide-react";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";

const LINK_KEYS = ["pillars", "projects", "leadership", "contact"] as const;

export function Nav() {
  const t = useTranslations("nav");
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-ink-950/70 backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <a href="#top" className="flex items-center gap-3 group">
          <span className="relative flex h-9 w-9 flex-shrink-0 items-center justify-center overflow-hidden rounded-full border border-cyan-500/40 transition group-hover:border-cyan-400">
            <Image src="/profile.jpg" alt="" fill sizes="36px" className="object-cover" priority />
          </span>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-slate-400 group-hover:text-slate-200">
            {t("name")}
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <nav className="flex items-center gap-8 font-mono text-xs uppercase tracking-[0.15em] text-slate-400">
            {LINK_KEYS.map((key) => (
              <a key={key} href={`#${key}`} className="transition-colors hover:text-cyan-400">
                {t(key)}
              </a>
            ))}
            <a
              href="#contact"
              className="rounded-lg border border-cyan-500/30 bg-gradient-to-r from-cyan-500/10 to-violet-500/10 px-4 py-2 text-slate-200 transition-all hover:border-cyan-400/50 hover:from-cyan-500/20 hover:to-violet-500/20"
            >
              {t("collaborate")}
            </a>
          </nav>
          <LanguageSwitcher />
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <LanguageSwitcher />
          <button onClick={() => setOpen((v) => !v)} className="text-slate-300" aria-label="Toggle menu">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-white/5 bg-ink-950/95 px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-4 font-mono text-sm uppercase tracking-[0.15em] text-slate-300">
            {LINK_KEYS.map((key) => (
              <a key={key} href={`#${key}`} onClick={() => setOpen(false)} className="hover:text-cyan-400">
                {t(key)}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
