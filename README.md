# Astride Melvin Fokam Ninyim — Portfolio

Personal portfolio site: Google DeepMind Scholar (AIMS South Africa × Stellenbosch University), COO at SYNTHI AI, AI for Science researcher across Machine Learning, Quantum Computing, Climate Tech, and Biotech.

Live at [melai-1.github.io](https://melai-1.github.io).

## Stack

- **Next.js 14** (App Router, static export) + TypeScript
- **Tailwind CSS** for styling
- **Framer Motion** for scroll reveals and the filterable Project Hub's layout animations
- **React Three Fiber** for the hero's animated qubit-lattice background
- **next-intl** for the English/French language toggle (client-side, no routing — the whole site is a static export)

## Structure

```
app/                  App Router entry (layout, page, global styles)
components/sections/  One component per page section (Hero, Pillars, ProjectHub, Leadership, Contact, Nav)
components/ui/        Small reusable pieces (Reveal, SectionLabel, LanguageSwitcher)
lib/data/             Language-independent project/pillar data (slugs, domains, stack, links)
lib/hooks/useProjects  Merges lib/data with the active locale's translated text
messages/             en.json / fr.json — all UI copy and per-project translated text
```

To add or edit a project: add its structural entry to `lib/data/projects.ts`, then add matching `title` / `tagline` / `metrics` (and `meta` for achievement cards without a repo) under `projects.<slug>` in **both** `messages/en.json` and `messages/fr.json`.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the static export (`npm run build` → `out/`) and publishes it via GitHub Pages (Pages source: GitHub Actions).
