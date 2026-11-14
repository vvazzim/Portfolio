export type CategoryId =
  | 'vision_dl'
  | 'ml_nlp'
  | 'cyber'
  | 'saas'
  | 'data_eng'
  | 'cloud_devops';

export interface CategoryInfo {
  id: CategoryId;
  title: string;
  fullName: string;
  shortLabel: string;
  subtitle: string;
  description: string;
  icon: 'shield' | 'brain' | 'cloud' | 'laptop' | 'eye' | 'kafka';
  stackPreview: string[];
}

export const CATEGORIES: CategoryInfo[] = [
  {
    id: 'vision_dl',
    title: 'Computer Vision & DL',
    fullName: 'Computer Vision & Deep Learning',
    shortLabel: 'Computer Vision',
    subtitle: 'WSI Pathology, Vision Transformers & Foundation Models',
    description: 'Histopathological tumor classification (AUC 0.87), Vision Transformers (UNI2-h, DINOv2), and biomedical cell tracking.',
    icon: 'eye',
    stackPreview: ['PyTorch', 'Vision Transformers', 'UNI2-h', 'DINOv2'],
  },
  {
    id: 'ml_nlp',
    title: 'Machine Learning & NLP',
    fullName: 'Machine Learning & Sovereign NLP',
    shortLabel: 'ML & NLP',
    subtitle: 'Local RAG, Sovereign LLMOps & Graph Algorithms',
    description: 'On-premise RAG engine (Retrieval@5 = 89%), zero data leakage clinical document analysis, and graph theory.',
    icon: 'brain',
    stackPreview: ['ChromaDB', 'Ollama', 'FastAPI', 'LangChain'],
  },
  {
    id: 'cyber',
    title: 'Cybersecurity',
    fullName: 'Cybersecurity & IAM Governance',
    shortLabel: 'Cybersecurity',
    subtitle: 'Active Directory Security, Role Mining & Anti-Phishing',
    description: 'Active Directory auditing, bottom-up role mining, toxic SoD matrix conflict detection, and local AI triage.',
    icon: 'shield',
    stackPreview: ['Active Directory', 'Cortex XSOAR', 'Python', 'SoD Matrix'],
  },
  {
    id: 'saas',
    title: 'SaaS',
    fullName: 'SaaS & Real-Time Web Platforms',
    shortLabel: 'SaaS',
    subtitle: 'Production Applications, Real-Time Mapping & High Concurrency',
    description: 'Full-stack production platforms, Leaflet geospatial routing, real-time inventory management, and Fastify engines.',
    icon: 'laptop',
    stackPreview: ['React 18', 'TypeScript', 'Fastify', 'Astro 5'],
  },
  {
    id: 'data_eng',
    title: 'Data Engineering',
    fullName: 'Distributed Data Engineering & Streaming',
    shortLabel: 'Data Engineering',
    subtitle: 'Real-Time Streaming, Kafka Ingestion & Microservices',
    description: 'Event-driven streaming architectures with Apache Kafka, decoupled microservices, and continuous NLP pipelines.',
    icon: 'kafka',
    stackPreview: ['Kafka', 'PostgreSQL', 'FastAPI', 'Docker'],
  },
  {
    id: 'cloud_devops',
    title: 'Cloud & DevOps',
    fullName: 'Cloud, DevOps & Container Orchestration',
    shortLabel: 'Cloud & DevOps',
    subtitle: 'Kubernetes RBAC, Azure DevOps CI/CD & Security Hardening',
    description: 'Resilient cloud infrastructure, automated Azure DevOps CI/CD (AZ-400), Docker containerization, and Kubernetes RBAC.',
    icon: 'cloud',
    stackPreview: ['Azure DevOps', 'Kubernetes', 'Docker', 'CI/CD'],
  },
];

export interface Project {
  id: string;
  name: string;
  category: CategoryId;
  pole: 'GenAI' | 'Cyber' | 'SWE' | 'ML' | 'Cloud';
  stack: string[];
  description: string; // 1 ligne : pour qui / quel problème / résultat (max 120 caractères)
  githubUrl: string;
  demoUrl?: string;
  featured: boolean; // carte principale du pôle
  icon: 'shield' | 'brain' | 'eye' | 'kafka' | 'pytorch' | 'cpu' | 'scan' | 'map' | 'store' | 'bag' | 'building' | 'home' | 'hospital' | 'truck' | 'cloud';
}

export const projects: Project[] = [
  // ─── 1. Computer Vision & Deep Learning ───────────────────────────────────
  {
    id: 'ter-histopathology',
    name: 'Histopathology CRC & Camelyon (WSI)',
    category: 'vision_dl',
    pole: 'ML',
    stack: ['PyTorch', 'Vision Transformers', 'UNI2-h', 'DINOv2'],
    description: 'Colorectal tumor classification and biomarker explainability on 100k H&E whole-slide patches using PyTorch.',
    githubUrl: 'https://github.com/vvazzim/TER_Histopathology_Classification',
    featured: true,
    icon: 'pytorch',
  },
  {
    id: 'vmi-lab',
    name: 'VMI-LAB (Research Deep Learning & Bio)',
    category: 'vision_dl',
    pole: 'ML',
    stack: ['Cellpose', 'TrackPy', 'CLIP', 'SimCLR', 'PyTorch'],
    description: 'Cellpose HeLa cell tracking, multimodal medical CLIP fine-tuning on ROCO, and self-supervised contrastive learning.',
    githubUrl: 'https://github.com/vvazzim/VMI-LAB',
    featured: false,
    icon: 'cpu',
  },

  // ─── 2. Machine Learning & NLP ────────────────────────────────────────────
  {
    id: 'oncomind',
    name: 'OncoMind (Sovereign Medical RAG)',
    category: 'ml_nlp',
    pole: 'GenAI',
    stack: ['Python', 'ChromaDB', 'Ollama', 'LangChain'],
    description: 'Private local RAG assistant analyzing 50+ page oncology research papers with zero cloud data leakage.',
    githubUrl: 'https://github.com/vvazzim',
    featured: true,
    icon: 'brain',
  },
  {
    id: 'graphworks',
    name: 'GraphWorks (Graph Algorithms Toolkit)',
    category: 'ml_nlp',
    pole: 'ML',
    stack: ['MATLAB', 'Graph Algorithms', 'BFS/DFS', 'Dijkstra'],
    description: 'MATLAB toolkit for advanced graph manipulation, topological analysis, and traversal algorithms (BFS, DFS, Dijkstra).',
    githubUrl: 'https://github.com/vvazzim/GraphWorks',
    featured: false,
    icon: 'cpu',
  },

  // ─── 3. Cybersecurity ─────────────────────────────────────────────────────
  {
    id: 'iam-role-mining',
    name: 'IAM Role Mining & Toxic SoD Matrix',
    category: 'cyber',
    pole: 'Cyber',
    stack: ['Python', 'Pandas', 'Streamlit', 'Active Directory'],
    description: 'Enterprise IGA engine: bottom-up role discovery, toxic SoD conflict matrix detection, and Excel audit workbooks.',
    githubUrl: 'https://github.com/vvazzim/iam-role-mining',
    featured: true,
    icon: 'shield',
  },
  {
    id: 'phishing-llm-3e',
    name: 'Anti-Phishing 3E (LLM & Vision)',
    category: 'cyber',
    pole: 'Cyber',
    stack: ['Qwen2.5 QLoRA', 'DINOv2', 'CLIP', 'Quishing', 'XSOAR'],
    description: 'Enterprise on-premise pipeline: QLoRA Qwen2.5, logo spoofing detection, and quishing parsing feeding Cortex XSOAR.',
    githubUrl: 'https://github.com/vvazzim',
    featured: false,
    icon: 'shield',
  },

  // ─── 4. SaaS (100% Live Deployments) ──────────────────────────────────────
  {
    id: 'maparis',
    name: 'MAPARIS (Paris Security Pulse)',
    category: 'saas',
    pole: 'SWE',
    stack: ['TypeScript', 'React', 'Fastify', 'Leaflet', 'Socket.io'],
    description: 'Real-time urban security tracking and hazard avoidance routing engine built with Fastify, Socket.io, and Leaflet.',
    githubUrl: 'https://github.com/vvazzim/MAPARIS',
    demoUrl: 'https://maparis.onrender.com',
    featured: true,
    icon: 'map',
  },
  {
    id: 'babelstore',
    name: 'BABELSTORE (Retail SaaS Platform)',
    category: 'saas',
    pole: 'SWE',
    stack: ['Astro', 'Tailwind CSS', 'JavaScript'],
    description: 'High-performance retail inventory and point-of-sale platform built on Astro 5 and Tailwind CSS (Lighthouse 98+).',
    githubUrl: 'https://github.com/vvazzim/BABELSTORE',
    demoUrl: 'https://babelstore.onrender.com',
    featured: false,
    icon: 'store',
  },
  {
    id: 'cozyspace-dz',
    name: 'Cozyspace-DZ (Coworking SaaS)',
    category: 'saas',
    pole: 'SWE',
    stack: ['Astro', 'Tailwind CSS', 'JavaScript'],
    description: 'Coworking space booking and shared equipment management SaaS built with Astro 5 and automated Netlify CI/CD.',
    githubUrl: 'https://github.com/vvazzim/cozyspace-dz',
    demoUrl: 'https://cozyspacedz.netlify.app',
    featured: false,
    icon: 'building',
  },
  {
    id: 'dzpiece',
    name: 'DZPIECE (Auto Parts Locator)',
    category: 'saas',
    pole: 'SWE',
    stack: ['JavaScript', 'Node.js', 'Express', 'Leaflet'],
    description: 'Community-driven auto parts locator with interactive Leaflet mapping, filtering, and local salvage yard indexes.',
    githubUrl: 'https://github.com/vvazzim/DZPIECE',
    demoUrl: 'https://dzpiece.onrender.com',
    featured: false,
    icon: 'truck',
  },
  {
    id: 'macdi',
    name: 'MACDI (Wholesale Directory)',
    category: 'saas',
    pole: 'SWE',
    stack: ['JavaScript', 'React', 'REST API'],
    description: 'Geospatial discovery engine and interactive mapping for food wholesalers, distributors, and commercial suppliers.',
    githubUrl: 'https://github.com/vvazzim/MACDI',
    demoUrl: 'https://macdi.onrender.com',
    featured: false,
    icon: 'bag',
  },
  {
    id: 'real-estate-website',
    name: 'Real-Estate Platform',
    category: 'saas',
    pole: 'SWE',
    stack: ['JavaScript', 'React', 'Tailwind CSS'],
    description: 'Interactive property listings platform featuring dynamic filtering, responsive design, and smooth transitions.',
    githubUrl: 'https://github.com/vvazzim/Real-Estate-Website',
    demoUrl: 'https://main--tubular-kelpie-d1f63c.netlify.app',
    featured: false,
    icon: 'home',
  },

  // ─── 5. Data Engineering ──────────────────────────────────────────────────
  {
    id: 'fake-news-platform',
    name: 'Fake News Streaming Platform',
    category: 'data_eng',
    pole: 'Cloud',
    stack: ['Kubernetes RBAC', 'Kafka', 'FastAPI', 'DeBERTa-v3', 'PostgreSQL'],
    description: 'Distributed microservices: Apache Kafka streaming, Kubernetes RBAC orchestration, DeBERTa-v3 NLP, and PostgreSQL.',
    githubUrl: 'https://github.com/vvazzim/fake-news-platform',
    featured: true,
    icon: 'kafka',
  },

  // ─── 6. Cloud & DevOps ────────────────────────────────────────────────────
  {
    id: 'pipeline-vinci',
    name: 'Cloud Orchestration & CI/CD Pipeline',
    category: 'cloud_devops',
    pole: 'Cloud',
    stack: ['Azure DevOps', 'Kubernetes', 'Docker', 'CI/CD'],
    description: 'Sovereign CI/CD and container orchestration architecture for high-security environments (certified AZ-400 & ANSSI).',
    githubUrl: 'https://github.com/vvazzim',
    featured: true,
    icon: 'cloud',
  },
];
