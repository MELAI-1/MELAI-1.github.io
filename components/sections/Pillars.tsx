"use client";

import { useTranslations } from "next-intl";
import { pillars } from "@/lib/data/pillars";
import { DOMAIN_COLOR } from "@/lib/data/types";
import { useProjects } from "@/lib/hooks/useProjects";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";

export function Pillars() {
  const t = useTranslations();
  const projects = useProjects();

  return (
    <section id="pillars" className="relative border-t border-white/5 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <SectionLabel index="01" accent="text-violet-400">
            {t("pillars.sectionLabel")}
          </SectionLabel>
          <h2 className="max-w-2xl text-3xl font-black tracking-tight text-white sm:text-4xl md:text-5xl">
            {t("pillars.heading")}
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {pillars.map((pillar, i) => {
            const color = DOMAIN_COLOR[pillar.domain];
            const label = t(`domains.${pillar.domain}`);
            const linked = projects.filter((p) => pillar.projectSlugs.includes(p.slug));
            return (
              <Reveal key={pillar.domain} delay={i * 0.08}>
                <div
                  className="card-surface group relative h-full overflow-hidden p-8 transition-colors hover:border-white/20"
                  style={{ borderColor: `${color}22` }}
                >
                  <div
                    className="absolute -right-16 -top-16 h-40 w-40 rounded-full blur-3xl transition-opacity group-hover:opacity-70"
                    style={{ backgroundColor: `${color}22`, opacity: 0.4 }}
                  />
                  <span className="section-label" style={{ color }}>
                    {`0${i + 1} / ${label}`}
                  </span>
                  <h3 className="mt-4 text-2xl font-bold text-white">{t(`pillars.${pillar.domain}.title`)}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400">
                    {t(`pillars.${pillar.domain}.description`)}
                  </p>

                  <ul className="mt-6 flex flex-wrap gap-2">
                    {linked.map((project) => (
                      <li
                        key={project.slug}
                        className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-slate-300"
                      >
                        {project.title}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
