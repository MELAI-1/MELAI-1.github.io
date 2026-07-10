"use client";

import { useTranslations } from "next-intl";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

const ROLE_KEYS = [
  { key: "industry", color: "text-emerald-400" },
  { key: "scholarship", color: "text-violet-400" },
  { key: "teaching", color: "text-cyan-400" },
] as const;

export function Leadership() {
  const t = useTranslations();

  return (
    <section id="leadership" className="relative border-t border-white/5 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <SectionLabel index="03" accent="text-cyan-400">
            {t("leadership.sectionLabel")}
          </SectionLabel>
          <h2 className="max-w-2xl text-3xl font-black tracking-tight text-white sm:text-4xl md:text-5xl">
            {t("leadership.heading")}
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 md:grid-cols-3">
          {ROLE_KEYS.map((role, i) => (
            <Reveal key={role.key} delay={i * 0.1} className="bg-ink-950 p-8">
              <span className={`section-label ${role.color}`}>{t(`leadership.${role.key}.label`)}</span>
              <h3 className="mt-4 text-xl font-bold text-white">{t(`leadership.${role.key}.title`)}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                {t(`leadership.${role.key}.description`)}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
