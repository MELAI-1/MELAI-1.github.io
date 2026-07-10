import type { Domain } from "./types";

// Translatable text (title, description) lives in messages/en.json and
// messages/fr.json under "pillars.<domain>".
export type Pillar = {
  domain: Domain;
  projectSlugs: string[];
};

export const pillars: Pillar[] = [
  { domain: "climate", projectSlugs: ["aims-project", "ai-for-climate"] },
  { domain: "quantum", projectSlugs: ["quantum-computing-project", "qualaria"] },
  {
    domain: "bio",
    projectSlugs: ["ai-for-public-health", "federated-respiratory-forecasting", "plant-disease-diagnosis"],
  },
  { domain: "systems", projectSlugs: ["safechild", "memoire-ontologie", "movie-recommender-system"] },
];
