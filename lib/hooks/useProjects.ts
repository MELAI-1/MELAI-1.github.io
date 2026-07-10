"use client";

import { useTranslations } from "next-intl";
import { projects } from "@/lib/data/projects";
import type { ProjectBase, ProjectText } from "@/lib/data/types";

export type Project = ProjectBase & ProjectText;

export function useProjects(): Project[] {
  const t = useTranslations("projects");

  return projects.map((project) => ({
    ...project,
    title: t(`${project.slug}.title`),
    tagline: t(`${project.slug}.tagline`),
    metrics: t.raw(`${project.slug}.metrics`) as string[],
    meta: project.kind === "achievement" ? t(`${project.slug}.meta`) : undefined,
  }));
}
