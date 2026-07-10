import type { ProjectBase } from "./types";

// Translatable text (title, tagline, metrics, meta) lives in messages/en.json
// and messages/fr.json under "projects.<slug>" — keep this file to
// language-independent structure only.
export const projects: ProjectBase[] = [
  // ---- Flagship repos ----
  {
    slug: "safechild",
    domains: ["systems"],
    stack: ["React 19", "Vite", "FastAPI", "InsightFace", "Whisper", "Tesseract", "PostgreSQL", "Redis", "Docker"],
    kind: "repo",
    featured: true,
    githubUrl: "https://github.com/MELAI-1/safechild",
  },
  {
    slug: "memoire-ontologie",
    domains: ["systems"],
    stack: ["Next.js", "FastAPI", "PostgreSQL", "Owlready2", "Local LLM (Ollama)"],
    kind: "repo",
    featured: true,
    githubUrl: "https://github.com/MELAI-1/memoire-ontologie",
  },
  {
    slug: "movie-recommender-system",
    domains: ["systems"],
    stack: ["Python", "NumPy", "Numba", "SciPy", "Streamlit"],
    kind: "repo",
    featured: true,
    githubUrl: "https://github.com/MELAI-1/movie-recommender-system",
  },
  {
    slug: "quantum-computing-project",
    domains: ["quantum"],
    stack: ["Qiskit", "PyTorch", "Quantum ML", "Rigetti QCS"],
    kind: "repo",
    featured: true,
    githubUrl: "https://github.com/MELAI-1/Quantum-computing-project",
  },
  {
    slug: "aims-project",
    domains: ["climate"],
    stack: ["TensorFlow", "ERA5 Reanalysis", "Climate Data Science"],
    kind: "repo",
    featured: true,
    githubUrl: "https://github.com/MELAI-1/AIMS-PROJECT",
  },

  // ---- Supporting repos ----
  {
    slug: "ai-for-climate",
    domains: ["climate"],
    stack: ["Python", "Remote Sensing", "ML Benchmarking"],
    kind: "repo",
    githubUrl: "https://github.com/MELAI-1/AI-FOR-CLIMATE",
  },
  {
    slug: "ai-for-public-health",
    domains: ["bio"],
    stack: ["YOLOv6", "Computer Vision"],
    kind: "repo",
    githubUrl: "https://github.com/MELAI-1/AI-FOR-PUBLIC-HEALTH",
  },
  {
    slug: "polarization-identification-nlp",
    domains: ["nlp"],
    stack: ["Transformers", "Multi-label Classification"],
    kind: "repo",
    githubUrl: "https://github.com/MELAI-1/polarization-identification-nlp",
  },
  {
    slug: "netbank",
    domains: ["finance"],
    stack: ["Polars", "LightGBM", "XGBoost", "CatBoost"],
    kind: "repo",
    githubUrl: "https://github.com/MELAI-1/NETBANK",
  },
  {
    slug: "cyberphysical-systems",
    domains: ["systems"],
    stack: ["Python", "Manim", "IoT"],
    kind: "repo",
    githubUrl: "https://github.com/MELAI-1/cyberphysical-systems",
  },
  {
    slug: "my-project",
    domains: ["finance"],
    stack: ["scikit-learn", "TensorFlow", "PyTorch", "XGBoost"],
    kind: "repo",
    githubUrl: "https://github.com/MELAI-1/MY-PROJECT",
  },

  // ---- Achievements without public repos ----
  {
    slug: "qualaria",
    domains: ["quantum", "bio"],
    stack: ["VQE", "Qiskit Nature", "AlphaFold"],
    kind: "achievement",
    featured: true,
  },
  {
    slug: "federated-respiratory-forecasting",
    domains: ["bio"],
    stack: ["Federated Learning", "Privacy-Preserving ML"],
    kind: "achievement",
  },
  {
    slug: "plant-disease-diagnosis",
    domains: ["bio"],
    stack: ["MobileNet", "InceptionV3", "Transfer Learning"],
    kind: "achievement",
  },
];
