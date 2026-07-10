"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { DOMAIN_COLOR } from "@/lib/data/types";
import type { Project } from "@/lib/hooks/useProjects";

export function ProjectCard({ project }: { project: Project }) {
  const t = useTranslations();
  const primaryColor = DOMAIN_COLOR[project.domains[0]];

  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="card-surface group flex h-full flex-col p-6 transition-colors hover:border-white/20"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex flex-wrap gap-2">
          {project.domains.map((d) => (
            <span
              key={d}
              className="rounded-full border px-2.5 py-1 text-[10px] font-mono uppercase tracking-wide"
              style={{ borderColor: `${DOMAIN_COLOR[d]}44`, color: DOMAIN_COLOR[d] }}
            >
              {t(`domains.${d}`)}
            </span>
          ))}
        </div>
        {project.githubUrl ? (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title} on GitHub`}
            className="text-slate-500 transition-colors hover:text-cyan-400"
          >
            <FaGithub size={16} />
          </a>
        ) : (
          <span className="text-lg" title={project.meta}>
            {project.meta?.split(" ")[0]}
          </span>
        )}
      </div>

      <h3 className="mt-4 text-lg font-bold text-white">{project.title}</h3>
      {project.meta && project.githubUrl === undefined && (
        <p className="mt-1 font-mono text-[11px] uppercase tracking-wide" style={{ color: primaryColor }}>
          {project.meta}
        </p>
      )}
      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">{project.tagline}</p>

      <ul className="mt-4 space-y-1.5">
        {project.metrics.map((metric) => (
          <li key={metric} className="flex items-center gap-2 text-xs text-slate-300">
            <span className="h-1 w-1 flex-shrink-0 rounded-full" style={{ backgroundColor: primaryColor }} />
            {metric}
          </li>
        ))}
      </ul>

      <div className="mt-5 flex flex-wrap gap-1.5 border-t border-white/5 pt-4">
        {project.stack.map((tech) => (
          <span key={tech} className="rounded-md bg-white/5 px-2 py-1 font-mono text-[10px] text-slate-400">
            {tech}
          </span>
        ))}
      </div>

      {project.githubUrl && (
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center gap-1 text-xs font-semibold text-cyan-400 transition-colors hover:text-cyan-300"
        >
          {t("projectHub.viewRepository")}
          <ArrowUpRight size={14} />
        </a>
      )}
    </motion.article>
  );
}
