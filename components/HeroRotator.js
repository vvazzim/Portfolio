import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Pépites techniques orientées valeur et crédibilité terrain
const HERO_VIBES = [
  {
    prefix: 'Je construis des systèmes critiques avec :',
    highlight: 'GenAI & Threat Intel',
    badge: 'Prod 24/7',
  },
  {
    prefix: "J'industrialise des pipelines souverains de :",
    highlight: 'RAG Local & LLMOps',
    badge: 'Retrieval@5 = 89%',
  },
  {
    prefix: "J'automatise des architectures sécurisées :",
    highlight: 'Cyber, IAM & Role Mining',
    badge: 'Conformité SoD',
  },
  {
    prefix: 'Je déploie des moteurs temps réel pour :',
    highlight: 'OSINT & Cartographie Sécurisée',
    badge: 'Streaming Live',
  },
  {
    prefix: "J'entraîne des modèles de classification :",
    highlight: 'Computer Vision WSI & Deep Learning',
    badge: 'AUC 0.87 Camelyon',
  },
  {
    prefix: 'Je conçois des plateformes distribuées en :',
    highlight: 'Streaming Kafka & Kubernetes',
    badge: 'F1 = 0.89',
  },
];

const HeroRotator = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % HERO_VIBES.length);
    }, 3200);

    return () => clearInterval(timer);
  }, []);

  const current = HERO_VIBES[index];

  return (
    <div className="my-3 min-h-[52px] flex items-center justify-center xl:justify-start">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="flex flex-wrap items-center justify-center xl:justify-start gap-x-2.5 gap-y-1.5 text-base sm:text-lg md:text-xl font-normal"
        >
          {/* Action Prefix */}
          <span className="text-white/90 tracking-normal font-light">
            {current.prefix}
          </span>

          {/* High-contrast Pill Tag */}
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-xl bg-gradient-to-r from-accent/90 to-accent text-white font-bold tracking-wide shadow-lg shadow-accent/40 border border-white/30 backdrop-blur-md">
            <span>{current.highlight}</span>
            {current.badge && (
              <span className="text-[10px] font-mono tracking-wider uppercase px-1.5 py-0.5 rounded-md bg-black/40 text-white/95">
                {current.badge}
              </span>
            )}
          </span>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default HeroRotator;
