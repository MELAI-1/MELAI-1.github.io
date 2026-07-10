"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { ArrowRight, Download } from "lucide-react";
import { HeroScene } from "./HeroScene";

export function Hero() {
  const t = useTranslations("hero");

  const metricKeys = ["flagship", "domains", "hackathon", "awards"] as const;
  const metricValues = ["5", "4", "1st", "2×"];

  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden pt-24">
      <HeroScene />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1fr_auto] lg:items-start lg:gap-16 lg:px-10">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="section-label mb-6 text-cyan-400"
          >
            {t("eyebrow")}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-5xl text-4xl font-black leading-[1.05] tracking-tighter text-white sm:text-5xl md:text-7xl"
          >
            {t("headlinePrefix")}{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-emerald-400 bg-clip-text text-transparent">
              {t("headlineHighlight")}
            </span>{" "}
            {t("headlineSuffix")}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-6 max-w-2xl text-base text-slate-400 sm:text-lg"
          >
            {t.rich("intro", {
              ml: (chunks) => <span className="text-slate-200">{chunks}</span>,
              quantum: (chunks) => <span className="text-slate-200">{chunks}</span>,
              climate: (chunks) => <span className="text-slate-200">{chunks}</span>,
              bio: (chunks) => <span className="text-slate-200">{chunks}</span>,
              synthi: (chunks) => <strong className="font-semibold text-emerald-400">{chunks}</strong>,
            })}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <a
              href="#projects"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 px-8 py-4 font-bold text-black shadow-[0_0_30px_rgba(16,185,129,0.25)] transition-all hover:scale-[1.02] hover:opacity-90 active:scale-[0.98] sm:w-auto"
            >
              {t("exploreProjects")}
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="/CV_Astride_Melvin_FOKAM_PHD.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-8 py-4 font-semibold text-slate-200 transition-all hover:border-cyan-500/40 hover:bg-white/10 hover:text-white sm:w-auto"
            >
              <Download size={18} />
              {t("downloadCv")}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-16 grid grid-cols-2 gap-6 border-t border-white/10 pt-8 sm:grid-cols-4"
          >
            {metricKeys.map((key, i) => (
              <div key={key}>
                <p className="font-mono text-2xl font-bold text-white sm:text-3xl">{metricValues[i]}</p>
                <p className="mt-1 text-xs uppercase tracking-wide text-slate-500">{t(`metrics.${key}`)}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="card-surface flex w-full items-center gap-4 p-5 lg:w-72 lg:flex-col lg:items-start lg:gap-0 lg:p-6"
        >
          <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-2xl border border-white/10 lg:h-40 lg:w-full lg:rounded-2xl">
            <Image
              src="/profile.jpg"
              alt={t("photoName")}
              fill
              sizes="(min-width: 1024px) 288px, 64px"
              className="object-cover"
              priority
            />
          </div>
          <div className="lg:mt-5">
            <p className="text-sm font-bold text-white lg:text-base">{t("photoName")}</p>
            <p className="mt-1 font-mono text-[11px] uppercase tracking-wide text-cyan-400">{t("photoRole")}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
