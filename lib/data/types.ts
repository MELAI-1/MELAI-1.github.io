export type Domain = "climate" | "quantum" | "bio" | "nlp" | "systems" | "finance";

export const DOMAIN_COLOR: Record<Domain, string> = {
  climate: "#34d399",
  quantum: "#a78bfa",
  bio: "#fb923c",
  nlp: "#22d3ee",
  systems: "#22d3ee",
  finance: "#22d3ee",
};

export type ProjectBase = {
  slug: string;
  domains: Domain[];
  stack: string[];
  kind: "repo" | "achievement";
  featured?: boolean;
  githubUrl?: string;
};

export type ProjectText = {
  title: string;
  tagline: string;
  metrics: string[];
  meta?: string;
};
