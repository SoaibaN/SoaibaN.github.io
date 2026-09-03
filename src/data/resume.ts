/**
 * Structured resume data for the home page.
 *
 * Real, user-provided facts live here. Anywhere a value is not yet known it is
 * set to the literal string "[INSERT INFORMATION]" so the content-writer can
 * find and fill it. Do NOT invent metrics, titles, dates, or companies.
 */

export const profile = {
  name: "Soaiba Nuzhat",
  tagline:
    "I engineer multi-agent AI systems that reason reliably over real-world data.",
  status: "New York, NY",
  email: "sn3093@columbia.edu",
  phone: "614-906-7182",
  linkedin: "https://www.linkedin.com/in/soaiba-nuzhat/",
  github: "https://github.com/SoaibaN",
  // Placed in public/ later; link is wired now.
  resume: "/resume.pdf",
};

export const skillGroups = [
  {
    label: "Languages & Tools",
    items: [
      "Python",
      "Java",
      "C",
      "C++",
      "SQL",
      "Bash",
      "MATLAB",
      "React",
      "Streamlit",
      "Git",
      "Linux",
      "Neo4j",
      "AWS",
    ],
  },
  {
    label: "AI / ML",
    items: [
      "RAG",
      "PyTorch",
      "Agentic Architecture",
      "MCP Servers",
      "Deep Learning (CNN/GNN/RNN/Attention)",
      "Neural Network Design",
      "Fine-tuning",
      "Model Training / Evaluation / Deployment",
      "Benchmarking",
      "Data Flow Control",
      "NumPy",
      "Pandas",
    ],
  },
];

export type EducationEntry = {
  institution: string;
  backTitle: string;
  detail?: string;
  degree: string;
  period?: string;
  graduation?: string;
  logo: string;
  logoFormat: "square" | "wide";
  coursework: string[];
  honors?: string[];
};

export const education: EducationEntry[] = [
  {
    institution: "Columbia University",
    backTitle: "Columbia University",
    detail: "Fu Foundation School of Engineering and Applied Sciences",
    degree: "B.S. Computer Science — Minor: Applied Mathematics",
    graduation: "Expected Graduation: May 2027",
    logo: "/images/education-columbia.png",
    logoFormat: "square",
    coursework: [
      "Agentic AI and Data Science (Graduate, A)",
      "Probabilistic Models and Machine Learning (Graduate)",
      "High Performance Machine Learning",
      "Artificial Intelligence (A)",
      "Data Structures and Algorithms",
      "Operating Systems",
      "Computer Architecture (A)",
      "Advanced Programming in C (A)",
      "Linear Algebra",
      "Probability",
    ],
    honors: [
      "Dean's List",
      "Kappa Alpha Theta National Scholarship",
      "Summer at SEAS Scholarship",
    ],
  },
  {
    institution: "University of Oxford",
    backTitle: "St. Anne's College",
    degree: "Computer Science & Mathematics Program (Study Abroad)",
    period: "Jan 2026 – Jun 2026",
    logo: "/images/education-oxford.svg",
    logoFormat: "wide",
    coursework: [
      "Machine Learning",
      "Geometric Deep Learning",
      "Compilers",
      "Numerical Analysis",
      "Introduction to Proof Systems",
      "Number Theory",
    ],
  },
];

export type ExperienceEntry = {
  institution: string;
  role: string;
  team: string;
  period: string;
  logo: string;
  location?: string;
  detailsLabel?: string;
  bullets: string[];
};

export const experience: ExperienceEntry[] = [
  {
    institution: "Pfizer",
    role: "Data Engineering Intern",
    team: "Clinical Data Science AI/ML Innovation Team",
    period: "Jun 2026 – Aug 2026",
    logo: "/images/experience/pfizer.png",
    bullets: [
      "Developed a graph-based retrieval-augmented generation (RAG) system to support reliable querying and analysis of complex clinical data.",
    ],
  },
  {
    institution: "Columbia University",
    role: "AI Safety Researcher",
    team: "DAP Lab · Data Flow Control Team",
    period: "Jun 2026 – Present",
    logo: "/images/experience/dap-lab.png",
    location: "Advised by Charlie Summers and Dr. Eugene Wu",
    bullets: [
      "Evaluated agentic coding systems against adversarial security benchmarks to assess code-generation robustness and identify weaknesses in model-driven software development workflows.",
    ],
  },
  {
    institution: "Columbia University Medical Center",
    role: "AI Researcher",
    team: "Vibrational Imaging of Brain Elastography (VIBES) Lab",
    period: "Jun 2024 – Dec 2025",
    logo: "/images/experience/columbia-medical.png",
    location: "Dr. Grace McIlvain",
    bullets: [
      "Developed MATLAB-based computational imaging and simulation pipelines for magnetic resonance elastography, modeling brain-tissue biomechanics and cerebrospinal-fluid effects. Scaled synthetic-data generation and analysis workflows for high-performance computing environments.",
    ],
  },
  {
    institution: "Columbia Engineering",
    role: "Teaching Assistant",
    team: "APMA2000E · COMS4701W",
    period: "Sep 2025 – Dec 2026",
    logo: "/images/experience/columbia-engineering.png",
    detailsLabel: "Courses taught",
    bullets: [
      "Multivariable Calculus — APMA2000E with Prof. Drew Youngren · Sep 2025 – Jan 2026.",
      "ARTIFICIAL INTELLIGENCE — COMS4701W with Prof. Ansaf Salleb-Aouissi · Sep 2026 – Dec 2026.",
    ],
  },
  {
    institution: "University of Miami",
    role: "Research Intern",
    team: "Physics REU — Prakash Lab",
    period: "Summer 2025",
    logo: "/images/experience/miami.png",
    location: "Miami, FL",
    bullets: [
      "Modeled Trichoplax Adhaerens biomechanics by designing and running 30+ MATLAB simulations.",
      "Quantified fluid dynamics via Particle Image Velocimetry on 500+ tracer-bead video frames, mapping flow velocities up to 300 μm/s and identifying 3 distinct locomotion behaviors.",
      "Automated data processing by developing MATLAB pipelines to analyze imaging data, enabling same-day iteration on model parameters.",
    ],
  },
];

export type ProjectEntry = {
  title: string;
  indexTitle?: string;
  period?: string;
  description?: string;
  bullets: string[];
  tags: string[];
  link?: string;
  paperUrl?: string;
  repoUrl?: string;
  imageUrl?: string;
  imageAlt?: string;
  imageCaption?: string;
  imageWidth?: number;
  imageHeight?: number;
};

export const projects: ProjectEntry[] = [
  {
    title: "Agentic AI Stock Recommender",
    description:
      "An agentic stock-analysis system that coordinates specialist agents for fundamental, technical, and news analysis, then synthesizes their findings into grounded buy, sell, or hold recommendations. A retrieval pipeline supplies long-horizon market and financial data from four institutional sources to support more consistent explanations.",
    bullets: [
      "Engineered a multi-agent LLM system generating buy/sell/hold equity recommendations, scoring ≥4.5/5 on plausibility, signal coverage, and internal consistency in a 16-sample human study, by orchestrating 3 specialist agents (fundamental, technical, news) and a synthesis manager in Python with the CrewAI framework.",
      "Built a fact-pack retrieval pipeline integrating 4 financial data sources (Compustat, CRSP, IBES, Capital IQ) across the Dow Jones 30 over 16 years (2008–2024); co-authoring an AAAI-workshop paper advised by Dr. Alfio Gliozzo (IBM Chief Science Catalyst for Data & AI Platforms).",
    ],
    tags: ["Python", "CrewAI", "Multi-agent LLM", "RAG"],
    paperUrl: "/papers/agentic-ai-stock-recommender.pdf",
    repoUrl: "https://github.com/SoaibaN/Agentic_Stock_Recommender",
    imageUrl: "/images/projects/agentic-ai-system-diagram.png",
    imageAlt:
      "Diagram showing a manager agent synthesizing outputs from fundamental, technical, and news analyst agents using financial, price-volume, and news data.",
    imageCaption:
      "This system leverages specialized AI agents to provide two distinct analytical capabilities for stock recommendations",
    imageWidth: 498,
    imageHeight: 334,
  },
  {
    title:
      "Cost-Efficient Optimization of Parallel Radix Sort Using Architecture-Aware Techniques",
    indexTitle: "Radix Sort Optimization Through Computer Architecture",
    description:
      "An architecture-aware optimization of parallel LSD radix sort that combines cache-conscious blocking, thread placement, hugepages, and compiler tuning to accelerate memory-bound sorting on AMD EPYC hardware.",
    bullets: [
      "Optimized a parallel LSD radix sort on the AMD EPYC 7302P (\"Rome\") platform, achieving up to a 57x speedup over baseline at -O0 and 17.6x at -O3 by layering architecture-aware techniques over compiler-level tuning.",
      "Combined L3-aware cache blocking, per-thread histograms, CCX-aware thread pinning, hugepages, and tuned multithreading to saturate the system's 204.8 GB/s memory bandwidth and cut cost-per-GB by 17.2x on large datasets.",
      "Ran parameter sweeps across thread counts, block sizes, and compiler flags on CloudLab hardware, disproving an initial L2-based hypothesis to show that 8MB L3-resident blocks govern optimal performance for bandwidth-bound workloads.",
    ],
    tags: ["C", "OpenMP", "AMD EPYC", "Computer Architecture", "Parallelism"],
    paperUrl: "/papers/optimization-of-parallel-radix-sort.pdf",
    imageUrl: "/images/projects/parallel-radix-sort-performance.png",
    imageAlt:
      "Paper excerpt showing block-size and scalability performance charts for the optimized parallel radix sort implementation.",
    imageCaption:
      "Performance sweeps reveal an 8 MB cache-blocking optimum and improved scaling across large input sizes.",
    imageWidth: 847,
    imageHeight: 592,
  },
  {
    title: "MRE Simulation",
    description:
      "Developed a MATLAB-based GUI to simulate Magnetic Resonance Elastography (MRE) brain scans and apply two correction (Topup and Fugue) methods for distorted brain scans.",
    bullets: [],
    tags: ["MATLAB", "MRE", "Medical Imaging", "Simulation"],
    repoUrl: "https://github.com/SoaibaN/MRESimulation",
    imageUrl: "/images/projects/mre-simulation.png",
    imageAlt:
      "Grid of color-coded brain scans generated by the Magnetic Resonance Elastography simulation.",
    imageCaption: "Generated Brain Scan Using MRE Simulation",
    imageWidth: 565,
    imageHeight: 376,
  },
];

export type LeadershipEntry = {
  role: string;
  org: string;
  position?: string;
  period?: string;
  summary: string;
};

export const leadership: LeadershipEntry[] = [
  {
    role: "Engineering Recruitment Committee",
    org: "Co-Chair & Head Tour Guide",
    period: "Sep 2023 – Present",
    summary:
      "As Co-Chair, I work with the admissions office to get prospective students excited about applying to Columbia — answering their questions while representing the culture and people here. If you're a prospective student, don't forget to book an on-campus tour!",
  },
  {
    role: "Club Bangla",
    org: "Columbia University",
    position: "Social Chair",
    period: "Sep 2023 – Present",
    summary:
      "A cultural club on campus that brings Bengali students together to cultivate community and celebrate Bengali culture at Columbia.",
  },
];
