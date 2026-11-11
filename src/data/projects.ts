export interface Project {
  id: string;
  name: string;
  pole: 'GenAI' | 'Cyber' | 'SWE' | 'ML' | 'Cloud';
  stack: string[];
  description: string; // 1 ligne : pour qui / quel problème / résultat (max 120 caractères)
  githubUrl: string;
  demoUrl?: string;
  featured: boolean; // carte principale du pôle
  image?: string;
}

export const projects: Project[] = [
  // ─── Pôle GenAI ───────────────────────────────────────────────────────────
  {
    id: 'oncomind',
    name: 'OncoMind (RAG Médical)',
    pole: 'GenAI',
    stack: ['Python', 'ChromaDB', 'Ollama', 'LangChain'],
    description: 'Assistant RAG local pour analyser des publications oncologiques complexes de 50+ pages sans fuite de données.',
    githubUrl: 'https://github.com/vvazzim/oncomind',
    featured: true,
    image: '/images/projects/Chatbot.png',
  },

  // ─── Pôle Cyber & IAM ─────────────────────────────────────────────────────
  {
    id: 'iam-role-mining',
    name: 'IAM Role Mining & SoD',
    pole: 'Cyber',
    stack: ['Python', 'Pandas', 'Streamlit', 'Active Directory'],
    description: 'Moteur de Role Mining et détection de conflits SoD pour auditer et sécuriser les accès Active Directory.',
    githubUrl: 'https://github.com/vvazzim/iam-role-mining',
    featured: true,
    image: '/images/projects/iam/iam.png',
  },
  {
    id: 'phishvision',
    name: 'PhishVision (Anti-Phishing SIFT)',
    pole: 'Cyber',
    stack: ['Python', 'OpenCV', 'SIFT', 'Scoring Risk'],
    description: "Détection d'usurpations de marques et phishing par descripteurs invariants SIFT et scoring multi-niveaux.",
    githubUrl: 'https://github.com/vvazzim/phishvision',
    featured: false,
    image: '/images/projects/phishvision/phishvision.png',
  },

  // ─── Pôle Cloud & DevOps & Streaming ──────────────────────────────────────
  {
    id: 'fake-news-platform',
    name: 'Fake News Streaming Platform',
    pole: 'Cloud',
    stack: ['Kafka', 'FastAPI', 'PostgreSQL', 'Docker', 'BERT'],
    description: 'Plateforme distribuée de détection de fake news avec ingestion Kafka, NLP BERT et réentraînement continu.',
    githubUrl: 'https://github.com/vvazzim/fake-news-platform',
    featured: true,
    image: '/images/projects/fn/fn.png',
  },

  // ─── Pôle ML, DL & Vision ─────────────────────────────────────────────────
  {
    id: 'ter-histopathology',
    name: 'Histopathologie Camelyon (WSI)',
    pole: 'ML',
    stack: ['PyTorch', 'Vision Transformers', 'UNI2-h', 'DINOv2'],
    description: 'Classification et explicabilité de lames histopathologiques pour la détection de lésions tumorales (WSI).',
    githubUrl: 'https://github.com/vvazzim/TER_Histopathology_Classification',
    featured: true,
    image: '/images/projects/ter/ter.png',
  },
  {
    id: 'vmi-lab',
    name: 'VMI-LAB (Recherche M2 DL/Vision)',
    pole: 'ML',
    stack: ['Python', 'PyTorch', 'Jupyter', 'Computer Vision'],
    description: 'Socle de recherche Master 2 : vision 3D, segmentation et modèles Deep Learning pour systèmes critiques.',
    githubUrl: 'https://github.com/vvazzim/VMI-LAB',
    featured: false,
    image: '/images/projects/vmilab/vmilab.png',
  },
  {
    id: 'coindetect',
    name: 'CoinDetect (Vision Morphologique)',
    pole: 'ML',
    stack: ['Python', 'OpenCV', 'Image Processing'],
    description: "Détection et classification automatique d'objets et monnaies par vision par ordinateur et morphologie.",
    githubUrl: 'https://github.com/vvazzim/CoinDetect',
    featured: false,
    image: '/images/projects/coindetect/coindetect.png',
  },
  {
    id: 'staircase-detection',
    name: 'Staircase Step Detection',
    pole: 'ML',
    stack: ['Python', 'OpenCV', 'Edge Detection'],
    description: "Analyse d'images et détection automatique de marches d'escalier pour l'accessibilité et la robotique.",
    githubUrl: 'https://github.com/vvazzim/Staircase-Step-Detection',
    featured: false,
    image: '/images/projects/vmilab/vmilab.png',
  },

  // ─── Pôle SWE & Solutions Digitales ────────────────────────────────────────
  {
    id: 'maparis',
    name: 'MAPARIS (Itinéraires Sécurisés)',
    pole: 'SWE',
    stack: ['TypeScript', 'React', 'Fastify', 'Leaflet', 'Socket.io'],
    description: 'Itinéraires piétons sécurisés à Paris avec streaming temps réel des manifestations pour éviter les risques.',
    githubUrl: 'https://github.com/vvazzim/MAPARIS',
    featured: true,
    image: '/images/projects/maparis/maparis.png',
  },
  {
    id: 'babelstore',
    name: 'BABELSTORE (Gestion de Stock SaaS)',
    pole: 'SWE',
    stack: ['Astro', 'Tailwind CSS', 'JavaScript'],
    description: 'Solution de gestion de stock, inventaire et point de vente temps réel pour commerce de détail.',
    githubUrl: 'https://github.com/vvazzim/BABELSTORE',
    demoUrl: 'https://babelstore.netlify.app',
    featured: false,
    image: '/images/projects/babel/babel.png',
  },
  {
    id: 'cozyspace-dz',
    name: 'Cozyspace-DZ (Espaces Coworking)',
    pole: 'SWE',
    stack: ['Astro', 'Tailwind CSS', 'JavaScript'],
    description: "Plateforme de gestion d'inventaire, réservation d'espaces coworking et équipements partagés.",
    githubUrl: 'https://github.com/vvazzim/cozyspace-dz',
    demoUrl: 'https://cozyspace-dz.netlify.app',
    featured: false,
    image: '/images/projects/babel/babel.png',
  },
  {
    id: 'dzpiece',
    name: 'DZPIECE (Pièces Auto Casses)',
    pole: 'SWE',
    stack: ['JavaScript', 'Node.js', 'Express', 'Leaflet'],
    description: 'Moteur de recherche et cartographie communautaire de pièces détachées automobiles avec casses.',
    githubUrl: 'https://github.com/vvazzim/DZPIECE',
    featured: false,
    image: '/images/projects/dzpiece/dzpiece.png',
  },
  {
    id: 'macdi',
    name: 'MACDI (Cartographie Grossistes)',
    pole: 'SWE',
    stack: ['JavaScript', 'React', 'REST API'],
    description: 'Moteur de recherche et cartographie géolocalisée pour grossistes et commerces agroalimentaires.',
    githubUrl: 'https://github.com/vvazzim/MACDI',
    featured: false,
    image: '/images/projects/dzpiece/dzpiece.png',
  },
  {
    id: 'real-estate-website',
    name: 'Real-Estate Showcase',
    pole: 'SWE',
    stack: ['JavaScript', 'React', 'Tailwind CSS'],
    description: "Plateforme d'annonces immobilières interactive avec navigation fluide et recherche géolocalisée.",
    githubUrl: 'https://github.com/vvazzim/Real-Estate-Website',
    demoUrl: 'https://real-estate-vvazzim.netlify.app',
    featured: false,
    image: '/images/projects/RE/RE.png',
  },
  {
    id: 'frmedicall',
    name: 'FRMediCall (Cabinets Médicaux)',
    pole: 'SWE',
    stack: ['JavaScript', 'Node.js', 'MongoDB', 'Express'],
    description: 'Système de gestion pour cabinets médicaux : flux de consultations, dossiers patients et prise de RDV.',
    githubUrl: 'https://github.com/vvazzim/FRMediCall',
    featured: false,
    image: '/images/projects/frmedicall/frmedicall.png',
  },
];
