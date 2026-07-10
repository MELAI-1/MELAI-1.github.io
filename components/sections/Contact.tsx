"use client";

import { useTranslations } from "next-intl";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

const CHANNEL_META = [
  { key: "email", value: "melvin@aims.ac.za", href: "mailto:melvin@aims.ac.za", icon: Mail },
  {
    key: "linkedin",
    value: "astridemelvinfokamninyim",
    href: "https://www.linkedin.com/in/astridemelvinfokamninyim",
    icon: FaLinkedin,
  },
  { key: "github", value: "MELAI-1", href: "https://github.com/MELAI-1", icon: FaGithub },
] as const;

export function Contact() {
  const t = useTranslations();

  return (
    <section id="contact" className="relative border-t border-white/5 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <SectionLabel index="04" accent="text-violet-400">
            {t("contact.sectionLabel")}
          </SectionLabel>
          <h2 className="max-w-3xl text-4xl font-black tracking-tighter text-white sm:text-5xl md:text-6xl">
            {t("contact.heading")}
          </h2>
          <p className="mt-6 max-w-xl text-slate-400">{t("contact.subtitle")}</p>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-3">
          {CHANNEL_META.map((channel, i) => (
            <Reveal key={channel.key} delay={i * 0.08}>
              <a
                href={channel.href}
                target={channel.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="card-surface group flex items-center gap-4 p-6 transition-all hover:border-cyan-500/40 hover:bg-white/[0.06]"
              >
                <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl border border-white/10 bg-black/30 text-cyan-400 transition-colors group-hover:border-cyan-400/50">
                  <channel.icon size={18} />
                </span>
                <span className="min-w-0">
                  <span className="block font-mono text-[11px] uppercase tracking-wide text-slate-500">
                    {t(`contact.${channel.key}`)}
                  </span>
                  <span className="block truncate text-sm font-semibold text-slate-200">{channel.value}</span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>

      <footer className="mx-auto mt-24 max-w-7xl border-t border-white/5 px-6 pt-8 lg:px-10">
        <div className="flex flex-col items-center justify-between gap-4 pb-10 text-xs text-slate-600 sm:flex-row">
          <p className="font-mono">© {new Date().getFullYear()} Astride Melvin Fokam Ninyim</p>
          <p className="font-mono">{t("contact.builtWith")}</p>
        </div>
      </footer>
    </section>
  );
}
