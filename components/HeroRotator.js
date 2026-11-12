import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Liste de phrases dynamiques vibrantes et actuelles (GenAI, Threat Intel, OSINT, RAG, Classification...)
const HERO_VIBES = [
  {
    prefix: 'Je construis des systèmes critiques avec :',
    highlight: 'GenAI & Threat Intel',
    badge: 'Production 24/7',
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
    highlight: 'Streaming Kafka, BERT & Cloud',
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
    <div className="my-3 min-h-[64px] flex flex-col justify-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -14 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="flex flex-wrap items-center justify-center xl:justify-start gap-x-2.5 gap-y-1.5 text-base sm:text-lg md:text-xl font-medium"
        >
          {/* Action Prefix (La phrase se transforme dynamiquement) */}
          <span className="text-white/85 tracking-tight font-light">
            {current.prefix}
          </span>

          {/* Glowing Highlight Keyword Tag */}
          <span className="relative inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-accent/15 border border-accent/50 text-accent font-bold tracking-wide shadow-md shadow-accent/20 backdrop-blur-md">
            <span>{current.highlight}</span>
            {current.badge && (
              <span className="text-[10px] uppercase font-mono px-1.5 py-0.2 rounded-md bg-accent/30 text-white/90">
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
