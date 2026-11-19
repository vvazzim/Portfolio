import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// High-impact engineering highlights for international recruiters
const HERO_VIBES = [
  {
    prefix: 'Engineering critical systems with:',
    highlight: 'GenAI & Threat Intel',
    badge: 'Enterprise Production',
  },
  {
    prefix: 'Productionizing high-reliability pipelines:',
    highlight: 'Local RAG & LLMOps',
    badge: 'Retrieval@5 = 89%',
  },
  {
    prefix: 'Automating enterprise security:',
    highlight: 'Cyber, IAM & Role Mining',
    badge: 'RGPD & SoD Compliance',
  },
  {
    prefix: 'Deploying real-time engines for:',
    highlight: 'OSINT & Safe Geospatial Routing',
    badge: 'Live Streaming',
  },
  {
    prefix: 'Training clinical diagnostic models:',
    highlight: 'Computer Vision WSI & Deep Learning',
    badge: 'AUC 0.87 Camelyon',
  },
  {
    prefix: 'Architecting distributed platforms:',
    highlight: 'Kafka Streaming & Kubernetes RBAC',
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
    <div className="h-14 flex items-center justify-center xl:justify-start my-1 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="flex flex-wrap items-center justify-center xl:justify-start gap-x-2 text-xs sm:text-sm font-light text-white"
        >
          <span className="text-white/80 hidden sm:inline">{current.prefix}</span>
          <span className="font-semibold text-white tracking-wide border-b border-accent/60 pb-0.5">
            {current.highlight}
          </span>
          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-mono font-medium bg-accent/25 text-white border border-accent/50 shadow-sm ml-1">
            {current.badge}
          </span>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default HeroRotator;
