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
    subtitle: 'Vision WSI Camelyon, Transformers & Modèles Fondations',
    description: 'Classification histopathologique (AUC 0.87), architectures Vision Transformers (UNI2-h, DINOv2) et recherche biomédicale.',
    icon: 'eye',
    stackPreview: ['PyTorch', 'Vision Transformers', 'UNI2-h', 'DINOv2'],
  },
  {
    id: 'ml_nlp',
    title: 'Machine Learning & NLP',
    fullName: 'Machine Learning & NLP',
    shortLabel: 'ML & NLP',
    subtitle: 'RAG Souverain, LLMOps & Algorithmique Avancée',
    description: 'Plateforme RAG locale (Retrieval@5 = 89%), analyse documentaire sans fuite de données et modèles NLP.',
    icon: 'brain',
    stackPreview: ['ChromaDB', 'Ollama', 'FastAPI', 'LangChain'],
  },
  {
    id: 'cyber',
    title: 'Cybersécurité',
    fullName: 'Cybersécurité & Audit IAM',
    shortLabel: 'Cybersécurité',
    subtitle: 'Sécurité Active Directory, Role Mining & Anti-Phishing',
    description: 'Audit Active Directory, cartographie des rôles, détection de conflits SoD et reconnaissance SIFT.',
    icon: 'shield',
    stackPreview: ['Active Directory', 'SIFT', 'Python', 'SoD'],
  },
  {
    id: 'saas',
    title: 'SaaS',
    fullName: 'SaaS & Applications Web',
    shortLabel: 'SaaS',
    subtitle: 'Plateformes Métier, Cartographie Temps Réel & E-Commerce',
    description: 'Applications web complètes, moteurs cartographiques Leaflet, gestion de stock temps réel et solutions métiers.',
    icon: 'laptop',
    stackPreview: ['React', 'TypeScript', 'Node.js', 'Fastify'],
  },
  {
    id: 'data_eng',
    title: 'Data Engineering',
    fullName: 'Data Engineering & Streaming Distribué',
    shortLabel: 'Data Engineering',
    subtitle: 'Pipelines Temps Réel, Streaming Kafka & Ingestion',
    description: 'Conception et orchestration de pipelines de streaming distribués, ingestion Kafka et NLP en flux continu.',
    icon: 'kafka',
    stackPreview: ['Kafka', 'PostgreSQL', 'FastAPI', 'Docker'],
  },
  {
    id: 'cloud_devops',
    title: 'Cloud & DevOps',
    fullName: 'Cloud, DevOps & Conteneurisation',
    shortLabel: 'Cloud & DevOps',
    subtitle: 'Conteneurisation, CI/CD & Déploiement Kubernetes',
    description: 'Architectures résilientes, automatisation CI/CD Azure DevOps (AZ-400), conteneurisation Docker et Kubernetes.',
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
  // ─── 1. CV & DL ───────────────────────────────────────────────────────────
  {
    id: 'ter-histopathology',
    name: 'Histopathologie Camelyon (WSI)',
    category: 'vision_dl',
    pole: 'ML',
    stack: ['PyTorch', 'Vision Transformers', 'UNI2-h', 'DINOv2'],
    description: 'Classification et explicabilité de lames histopathologiques pour la détection de lésions tumorales (WSI).',
    githubUrl: 'https://github.com/vvazzim/TER_Histopathology_Classification',
    featured: true,
    icon: 'pytorch',
  },
  {
    id: 'vmi-lab',
    name: 'VMI-LAB (Recherche M2 DL & Biomédical)',
    category: 'vision_dl',
    pole: 'ML',
    stack: ['Cellpose', 'TrackPy', 'CLIP', 'SimCLR', 'PyTorch'],
    description: 'Segmentation Cellpose & tracking HeLa cancéreuses, fine-tuning CLIP médical (ROCO) et benchmarks SSL.',
    githubUrl: 'https://github.com/vvazzim/VMI-LAB',
    featured: false,
    icon: 'cpu',
  },

  // ─── 2. ML & NLP ──────────────────────────────────────────────────────────
  {
    id: 'oncomind',
    name: 'OncoMind (RAG Médical)',
    category: 'ml_nlp',
    pole: 'GenAI',
    stack: ['Python', 'ChromaDB', 'Ollama', 'LangChain'],
    description: 'Assistant RAG local pour analyser des publications oncologiques complexes de 50+ pages sans fuite de données.',
    githubUrl: 'https://github.com/vvazzim/oncomind',
    featured: true,
    icon: 'brain',
  },
  {
    id: 'graphworks',
    name: 'GraphWorks (Algorithmes de Graphes)',
    category: 'ml_nlp',
    pole: 'ML',
    stack: ['MATLAB', 'Graph Algorithms', 'BFS/DFS', 'Dijkstra'],
    description: "Extension MATLAB pour la manipulation avancée de graphes et l'intégration d'algorithmes d'exploration.",
    githubUrl: 'https://github.com/vvazzim/GraphWorks',
    featured: false,
    icon: 'cpu',
  },

  // ─── 3. Cybersécurité ─────────────────────────────────────────────────────
  {
    id: 'iam-role-mining',
    name: 'IAM Role Mining & SoD',
    category: 'cyber',
    pole: 'Cyber',
    stack: ['Python', 'Pandas', 'Streamlit', 'Active Directory'],
    description: 'Moteur de Role Mining et détection de conflits SoD pour auditer et sécuriser les accès Active Directory.',
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
    description: 'Pipeline 3E on-premise sans appel réseau : LLM QLoRA, usurpation logos DINOv2 et anti-quishing branché XSOAR.',
    githubUrl: 'https://github.com/vvazzim',
    featured: false,
    icon: 'shield',
  },

  // ─── 4. SaaS ──────────────────────────────────────────────────────────────
  {
    id: 'maparis',
    name: 'MAPARIS (Itinéraires Sécurisés)',
    category: 'saas',
    pole: 'SWE',
    stack: ['TypeScript', 'React', 'Fastify', 'Leaflet', 'Socket.io'],
    description: 'Itinéraires piétons sécurisés à Paris avec streaming temps réel des manifestations pour éviter les risques.',
    githubUrl: 'https://github.com/vvazzim/MAPARIS',
    demoUrl: 'https://maparis.onrender.com',
    featured: true,
    icon: 'map',
  },
  {
    id: 'babelstore',
    name: 'BABELSTORE (Gestion de Stock SaaS)',
    category: 'saas',
    pole: 'SWE',
    stack: ['Astro', 'Tailwind CSS', 'JavaScript'],
    description: 'Solution de gestion de stock, inventaire et point de vente temps réel pour commerce de détail.',
    githubUrl: 'https://github.com/vvazzim/BABELSTORE',
    demoUrl: 'https://babelstore.onrender.com',
    featured: false,
    icon: 'store',
  },
  {
    id: 'cozyspace-dz',
    name: 'Cozyspace-DZ (Espaces Coworking)',
    category: 'saas',
    pole: 'SWE',
    stack: ['Astro', 'Tailwind CSS', 'JavaScript'],
    description: "Plateforme de gestion d'inventaire, réservation d'espaces coworking et équipements partagés.",
    githubUrl: 'https://github.com/vvazzim/cozyspace-dz',
    demoUrl: 'https://cozyspacedz.netlify.app',
    featured: false,
    icon: 'building',
  },
  {
    id: 'dzpiece',
    name: 'DZPIECE (Pièces Auto Casses)',
    category: 'saas',
    pole: 'SWE',
    stack: ['JavaScript', 'Node.js', 'Express', 'Leaflet'],
    description: 'Moteur de recherche et cartographie communautaire de pièces détachées automobiles avec casses.',
    githubUrl: 'https://github.com/vvazzim/DZPIECE',
    demoUrl: 'https://dzpiece.onrender.com',
    featured: false,
    icon: 'truck',
  },
  {
    id: 'macdi',
    name: 'MACDI (Cartographie Grossistes)',
    category: 'saas',
    pole: 'SWE',
    stack: ['JavaScript', 'React', 'REST API'],
    description: 'Moteur de recherche et cartographie géolocalisée pour grossistes et commerces agroalimentaires.',
    githubUrl: 'https://github.com/vvazzim/MACDI',
    demoUrl: 'https://macdi.onrender.com',
    featured: false,
    icon: 'bag',
  },
  {
    id: 'real-estate-website',
    name: 'Real-Estate Showcase',
    category: 'saas',
    pole: 'SWE',
    stack: ['JavaScript', 'React', 'Tailwind CSS'],
    description: "Plateforme d'annonces immobilières interactive avec navigation fluide et recherche géolocalisée.",
    githubUrl: 'https://github.com/vvazzim/Real-Estate-Website',
    demoUrl: 'https://main--tubular-kelpie-d1f63c.netlify.app',
    featured: false,
    icon: 'home',
  },
  {
    id: 'frmedicall',
    name: 'FRMediCall (Cabinets Médicaux)',
    category: 'saas',
    pole: 'SWE',
    stack: ['JavaScript', 'Node.js', 'MongoDB', 'Express'],
    description: 'Système de gestion pour cabinets médicaux : flux de consultations, dossiers patients et prise de RDV.',
    githubUrl: 'https://github.com/vvazzim/FRMediCall',
    featured: false,
    icon: 'hospital',
  },

  // ─── 5. Data Engineer ─────────────────────────────────────────────────────
  {
    id: 'fake-news-platform',
    name: 'Fake News Streaming Platform',
    category: 'data_eng',
    pole: 'Cloud',
    stack: ['Kubernetes RBAC', 'Kafka', 'FastAPI', 'DeBERTa-v3', 'PostgreSQL'],
    description: 'Plateforme distribuée microservices : ingestion Kafka, orchestration Kubernetes RBAC et NLP DeBERTa-v3.',
    githubUrl: 'https://github.com/vvazzim/fake-news-platform',
    featured: true,
    icon: 'kafka',
  },

  // ─── 6. Cloud & DevOps ────────────────────────────────────────────────────
  {
    id: 'pipeline-vinci',
    name: 'Pipeline CI/CD & Cloud Orchestration',
    category: 'cloud_devops',
    pole: 'Cloud',
    stack: ['Azure DevOps', 'Kubernetes', 'Docker', 'CI/CD'],
    description: 'Architecture CI/CD souveraine et orchestration conteneurisée pour systèmes critiques (certifié AZ-400).',
    githubUrl: 'https://github.com/vvazzim',
    featured: true,
    icon: 'cloud',
  },
];
