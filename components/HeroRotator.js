import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ROTATING_TERMS = [
  'GenAI & RAG',
  'Cyber & IAM',
  'Cloud & DevOps',
  'ML & Vision',
  'SWE & Produit',
];

const HeroRotator = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % ROTATING_TERMS.length);
    }, 2500);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-wrap items-center justify-center xl:justify-start gap-x-2 gap-y-1 my-3 text-base sm:text-lg md:text-xl font-medium text-white/90">
      <span className="text-white/80">Je construis des systèmes avec :</span>
      <span className="relative inline-flex h-8 sm:h-9 items-center overflow-hidden min-w-[170px] sm:min-w-[190px]">
        <AnimatePresence mode="wait">
          <motion.span
            key={ROTATING_TERMS[index]}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="text-accent font-semibold tracking-wide border-b-2 border-accent/70 pb-0.5 inline-block"
          >
            {ROTATING_TERMS[index]}
          </motion.span>
        </AnimatePresence>
      </span>
    </div>
  );
};

export default HeroRotator;
