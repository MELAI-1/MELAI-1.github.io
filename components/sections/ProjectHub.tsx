"use client";

import { useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import { AnimatePresence, motion } from "framer-motion";
import { type Domain } from "@/lib/data/types";
import { useProjects } from "@/lib/hooks/useProjects";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectCard } from "./ProjectCard";

const FILTER_KEYS: (Domain | "all")[] = ["all", "climate", "quantum", "bio", "nlp", "systems", "finance"];

export function ProjectHub() {
  const t = useTranslations();
  const projects = useProjects();
  const [active, setActive] = useState<Domain | "all">("all");

  const filtered = useMemo(() => {
    if (active === "all") return projects;
    return projects.filter((p) => p.domains.includes(active));
  }, [active, projects]);

  return (
    <section id="projects" className="relative border-t border-white/5 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <SectionLabel index="02" accent="text-emerald-400">
            {t("projectHub.sectionLabel")}
          </SectionLabel>
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <h2 className="max-w-2xl text-3xl font-black tracking-tight text-white sm:text-4xl md:text-5xl">
              {t("projectHub.heading")}
            </h2>
            <p className="max-w-sm text-sm text-slate-500">
              {t("projectHub.subtitle", { count: projects.filter((p) => p.kind === "repo").length })}
            </p>
          </div>
        </Reveal>

        <div className="mt-10 flex flex-wrap gap-2">
          {FILTER_KEYS.map((key) => (
            <button
              key={key}
              onClick={() => setActive(key)}
              className={`rounded-full border px-4 py-2 font-mono text-xs uppercase tracking-wide transition-all ${
                active === key
                  ? "border-cyan-400/60 bg-cyan-500/10 text-cyan-300"
                  : "border-white/10 text-slate-500 hover:border-white/25 hover:text-slate-300"
              }`}
            >
              {t(`domains.${key}`)}
            </button>
          ))}
        </div>

        <motion.div layout className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
