// Structure de données figée ML/DL pour le composant <WorkTree />
export const mlDlProjects = [
  {
    id: 'histopatho',
    name: 'HISTOPATHO',
    badge: 'VMI LAB',
    description: 'Méthode STR-RW (Spatio-Temporal Random Walk Transformer) pour classification histopathologique, AUC 0.87 sur Camelyon, benchmark UNI2-h/DINOv2/ResNet50.',
    tech: ['PyTorch', 'Vision Transformers', 'Weak Supervision', 'WSI'],
    link: null, // projet de recherche, pas de repo public
  },
  {
    id: 'oncomind',
    name: 'ONCOMIND',
    badge: null,
    description: 'Plateforme RAG locale (Chroma + Ollama + FastAPI), Retrieval@5 = 89%, traçabilité documentaire et contrôle des dérives.',
    tech: ['Chroma', 'Ollama', 'FastAPI', 'RAG', 'Streamlit'],
    link: 'https://github.com/vvazzim/...', // À COMPLÉTER PAR WASSIM
  },
  {
    id: 'pipeline-f1',
    name: 'PIPELINE F1',
    badge: null,
    description: 'Pipeline streaming Kafka/Kubernetes, BERT/RoBERTa fine-tunés pour classification textuelle, F1 = 0.89, API FastAPI.',
    tech: ['Kafka', 'Kubernetes', 'BERT', 'RoBERTa', 'FastAPI', 'Docker'],
    link: null, // À COMPLÉTER OU METTRE null
  },
  {
    id: 'coindetect',
    name: 'COINDETECT',
    badge: null,
    description: "Détection d'objets par vision (Python/OpenCV), pipeline de reconnaissance et classification.",
    tech: ['Python', 'OpenCV', 'Computer Vision'],
    link: 'https://github.com/vvazzim/CoinDetect',
  },
  {
    id: 'graphworks',
    name: 'GRAPHWORKS',
    badge: null,
    description: "Extension MATLAB pour la manipulation avancée de graphes et l'intégration d'algorithmes de recherche (parcours, plus courts chemins, exploration).",
    tech: ['MATLAB', 'Graph Algorithms', 'BFS/DFS', 'Dijkstra'],
    link: 'https://github.com/vvazzim/GraphWorks',
  },
];
