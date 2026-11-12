export type CategoryId = 'cyber' | 'mldl' | 'devops' | 'saas';

export interface CategoryInfo {
  id: CategoryId;
  title: string;
  shortLabel: string;
  subtitle: string;
  description: string;
  icon: 'shield' | 'brain' | 'cloud' | 'laptop';
  stackPreview: string[];
}

export const CATEGORIES: CategoryInfo[] = [
  {
    id: 'cyber',
    title: 'Cyber & IAM',
    shortLabel: 'Cyber',
    subtitle: 'Sécurité, IAM Role Mining & Anti-Phishing',
    description: 'Audit Active Directory, cartographie des rôles, détection de conflits SoD et reconnaissance SIFT.',
    icon: 'shield',
    stackPreview: ['Active Directory', 'SIFT', 'Python', 'SoD'],
  },
  {
    id: 'mldl',
    title: 'ML, DL & GenAI',
    shortLabel: 'ML / DL',
    subtitle: 'Vision WSI Camelyon, Transformers & RAG Souverain',
    description: 'Classification histopathologique (AUC 0.87), architectures RAG locales et traitement d’images morphologique.',
    icon: 'brain',
    stackPreview: ['PyTorch', 'Transformers', 'ChromaDB', 'Ollama'],
  },
  {
    id: 'devops',
    title: 'DevOps & Cloud',
    shortLabel: 'DevOps',
    subtitle: 'Streaming Kafka, Kubernetes, Ingestion & CI/CD',
    description: 'Pipelines Big Data distribués, NLP BERT temps réel, orchestration conteneurisée et pratiques Azure.',
    icon: 'cloud',
    stackPreview: ['Kafka', 'Kubernetes', 'Docker', 'BERT'],
  },
  {
    id: 'saas',
    title: 'SaaS & Solutions Digitales',
    shortLabel: 'SaaS',
    subtitle: 'Plateformes Web, Cartographie temps réel & E-Commerce',
    description: 'Applications web production, moteurs cartographiques Leaflet, gestion de stock et solutions métiers.',
    icon: 'laptop',
    stackPreview: ['React', 'TypeScript', 'Node.js', 'Fastify'],
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
  icon: 'shield' | 'brain' | 'eye' | 'kafka' | 'pytorch' | 'cpu' | 'scan' | 'map' | 'store' | 'bag' | 'building' | 'home' | 'hospital' | 'truck';
}

export const projects: Project[] = [
  // ─── 1. Pôle Cyber & IAM ──────────────────────────────────────────────────
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
    id: 'phishvision',
    name: 'PhishVision (Anti-Phishing SIFT)',
    category: 'cyber',
    pole: 'Cyber',
    stack: ['Python', 'OpenCV', 'SIFT', 'Scoring Risk'],
    description: "Détection d'usurpations de marques et phishing par descripteurs invariants SIFT et scoring multi-niveaux.",
    githubUrl: 'https://github.com/vvazzim/phishvision',
    featured: false,
    icon: 'eye',
  },

  // ─── 2. Pôle ML, DL & GenAI ───────────────────────────────────────────────
  {
    id: 'ter-histopathology',
    name: 'Histopathologie Camelyon (WSI)',
    category: 'mldl',
    pole: 'ML',
    stack: ['PyTorch', 'Vision Transformers', 'UNI2-h', 'DINOv2'],
    description: 'Classification et explicabilité de lames histopathologiques pour la détection de lésions tumorales (WSI).',
    githubUrl: 'https://github.com/vvazzim/TER_Histopathology_Classification',
    featured: true,
    icon: 'pytorch',
  },
  {
    id: 'oncomind',
    name: 'OncoMind (RAG Médical)',
    category: 'mldl',
    pole: 'GenAI',
    stack: ['Python', 'ChromaDB', 'Ollama', 'LangChain'],
    description: 'Assistant RAG local pour analyser des publications oncologiques complexes de 50+ pages sans fuite de données.',
    githubUrl: 'https://github.com/vvazzim/oncomind',
    featured: true,
    icon: 'brain',
  },
  {
    id: 'vmi-lab',
    name: 'VMI-LAB (Recherche M2 DL/Vision)',
    category: 'mldl',
    pole: 'ML',
    stack: ['Python', 'PyTorch', 'Jupyter', 'Computer Vision'],
    description: 'Socle de recherche Master 2 : vision 3D, segmentation et modèles Deep Learning pour systèmes critiques.',
    githubUrl: 'https://github.com/vvazzim/VMI-LAB',
    featured: false,
    icon: 'cpu',
  },
  {
    id: 'coindetect',
    name: 'CoinDetect (Vision Morphologique)',
    category: 'mldl',
    pole: 'ML',
    stack: ['Python', 'OpenCV', 'Image Processing'],
    description: "Détection et classification automatique d'objets et monnaies par vision par ordinateur et morphologie.",
    githubUrl: 'https://github.com/vvazzim/CoinDetect',
    featured: false,
    icon: 'eye',
  },
  {
    id: 'staircase-detection',
    name: 'Staircase Step Detection',
    category: 'mldl',
    pole: 'ML',
    stack: ['Python', 'OpenCV', 'Edge Detection'],
    description: "Analyse d'images et détection automatique de marches d'escalier pour l'accessibilité et la robotique.",
    githubUrl: 'https://github.com/vvazzim/Staircase-Step-Detection',
    featured: false,
    icon: 'scan',
  },

  // ─── 3. Pôle Cloud & DevOps ───────────────────────────────────────────────
  {
    id: 'fake-news-platform',
    name: 'Fake News Streaming Platform',
    category: 'devops',
    pole: 'Cloud',
    stack: ['Kafka', 'FastAPI', 'PostgreSQL', 'Docker', 'BERT'],
    description: 'Plateforme distribuée de détection de fake news avec ingestion Kafka, NLP BERT et réentraînement continu.',
    githubUrl: 'https://github.com/vvazzim/fake-news-platform',
    featured: true,
    icon: 'kafka',
  },

  // ─── 4. Pôle SaaS & Solutions Digitales ────────────────────────────────────
  {
    id: 'maparis',
    name: 'MAPARIS (Itinéraires Sécurisés)',
    category: 'saas',
    pole: 'SWE',
    stack: ['TypeScript', 'React', 'Fastify', 'Leaflet', 'Socket.io'],
    description: 'Itinéraires piétons sécurisés à Paris avec streaming temps réel des manifestations pour éviter les risques.',
    githubUrl: 'https://github.com/vvazzim/MAPARIS',
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
    demoUrl: 'https://babelstore.netlify.app',
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
    demoUrl: 'https://cozyspace-dz.netlify.app',
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
    demoUrl: 'https://real-estate-vvazzim.netlify.app',
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
];
