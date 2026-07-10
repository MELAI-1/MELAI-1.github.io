"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const QuantumScene = dynamic(() => import("./QuantumScene").then((m) => m.QuantumScene), {
  ssr: false,
  loading: () => null,
});

export function HeroScene() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isSmallScreen = window.innerWidth < 640;
    setEnabled(!prefersReducedMotion && !isSmallScreen);
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* static gradient fallback, always present underneath */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(167,139,250,0.12),transparent_55%)]" />
      {enabled && <HeroSceneCanvas />}
    </div>
  );
}

function HeroSceneCanvas() {
  return (
    <div className="absolute inset-0 opacity-70">
      <QuantumScene />
    </div>
  );
}
