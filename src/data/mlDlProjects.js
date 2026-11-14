// Machine Learning & Deep Learning Project Data for <WorkTree />
export const mlDlProjects = [
  {
    id: 'histopatho',
    name: 'HISTOPATHO',
    badge: 'VMI LAB',
    description: 'STR-RW (Spatio-Temporal Random Walk Transformer) for WSI histopathology classification, AUC 0.87 on Camelyon16, benchmarked against UNI2-h, DINOv2, and ResNet50.',
    tech: ['PyTorch', 'Vision Transformers', 'Weak Supervision', 'WSI'],
    link: null, // Research project (private repository)
  },
  {
    id: 'oncomind',
    name: 'ONCOMIND',
    badge: null,
    description: 'Sovereign local RAG platform (ChromaDB + Ollama + FastAPI), Retrieval@5 = 89%, complete document traceability and drift mitigation without cloud leakage.',
    tech: ['Chroma', 'Ollama', 'FastAPI', 'RAG', 'Streamlit'],
    link: null,
  },
  {
    id: 'pipeline-f1',
    name: 'PIPELINE F1',
    badge: null,
    description: 'Distributed Kafka / Kubernetes streaming pipeline, fine-tuned BERT / RoBERTa models for real-time text classification, F1 = 0.89 with FastAPI inference.',
    tech: ['Kafka', 'Kubernetes', 'BERT', 'RoBERTa', 'FastAPI', 'Docker'],
    link: null,
  },
  {
    id: 'coindetect',
    name: 'COINDETECT',
    badge: null,
    description: 'Classical & feature-based computer vision pipeline (Python / OpenCV) for real-time object segmentation, contour analysis, and classification.',
    tech: ['Python', 'OpenCV', 'Computer Vision'],
    link: 'https://github.com/vvazzim/CoinDetect',
  },
  {
    id: 'graphworks',
    name: 'GRAPHWORKS',
    badge: null,
    description: 'MATLAB algorithmic engine for graph theory operations, shortest path optimization (Dijkstra, A*), and topological traversal.',
    tech: ['MATLAB', 'Graph Algorithms', 'BFS/DFS', 'Dijkstra'],
    link: 'https://github.com/vvazzim/GraphWorks',
  },
];
