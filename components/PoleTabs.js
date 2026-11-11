import React from 'react';
import { motion } from 'framer-motion';

const POLES = [
  { id: 'Tous', label: 'Tous', icon: '✦' },
  { id: 'GenAI', label: 'GenAI', icon: '🧠' },
  { id: 'Cyber', label: 'Cyber', icon: '🛡️' },
  { id: 'SWE', label: 'SWE', icon: '💻' },
  { id: 'ML', label: 'ML', icon: '👁️' },
  { id: 'Cloud', label: 'Cloud', icon: '☁️' },
];

const PoleTabs = ({ selectedPole, onSelectPole, counts = {} }) => {
  return (
    <div className="w-full flex items-center justify-center my-6">
      <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md shadow-lg max-w-full">
        {POLES.map((pole) => {
          const isActive = selectedPole === pole.id;
          const count = counts[pole.id];

          return (
            <button
              key={pole.id}
              onClick={() => onSelectPole(pole.id)}
              className={`relative px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 flex items-center gap-1.5 focus:outline-none ${
                isActive
                  ? 'text-white shadow-sm'
                  : 'text-white/60 hover:text-white hover:bg-white/5'
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeTabBadge"
                  className="absolute inset-0 rounded-xl bg-accent shadow-md shadow-accent/40"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{pole.icon}</span>
              <span className="relative z-10 font-semibold">{pole.label}</span>
              {typeof count === 'number' && (
                <span
                  className={`relative z-10 text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                    isActive
                      ? 'bg-black/30 text-white'
                      : 'bg-white/10 text-white/70'
                  }`}
                >
                  {count}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default PoleTabs;
