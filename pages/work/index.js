import React, { useState, useMemo } from 'react';
import WorkSlider from '../../components/WorkSlider';
import Circles from '../../components/Circles';
import { CATEGORIES, projects } from '../../src/data/projects';
import { renderProjectIcon } from '../../components/ProjectIcon';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

const Work = () => {
  // Catégorie active par défaut : 'cyber' (alignée avec les services)
  const [selectedCategory, setSelectedCategory] = useState('cyber');

  // Décompte dynamique des projets par service
  const counts = useMemo(() => {
    return {
      cyber: projects.filter((p) => p.category === 'cyber').length,
      vision_dl: projects.filter((p) => p.category === 'vision_dl').length,
      ml_nlp: projects.filter((p) => p.category === 'ml_nlp').length,
      data_eng: projects.filter((p) => p.category === 'data_eng').length,
      cloud_devops: projects.filter((p) => p.category === 'cloud_devops').length,
      web_fullstack: projects.filter((p) => p.category === 'web_fullstack').length,
    };
  }, []);

  const activeCategoryInfo = useMemo(() => {
    return CATEGORIES.find((c) => c.id === selectedCategory) || CATEGORIES[0];
  }, [selectedCategory]);

  return (
    <div className="h-full bg-primary/30 py-24 xl:py-32 flex items-center overflow-y-auto xl:overflow-hidden relative">
      <Circles />
      <div className="container mx-auto px-4 xl:px-8">
        <div className="flex flex-col xl:flex-row gap-x-10 items-center justify-between">
          {/* ── COLONNE GAUCHE (32vw) : Titre, Cadrage & Sélecteur de Services ── */}
          <div className="text-center flex xl:w-[32vw] flex-col lg:text-left mb-6 xl:mb-0">
            <motion.h2
              variants={fadeIn('up', 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 !mb-3 tracking-tight"
            >
              My work <span className="text-accent">.</span>
            </motion.h2>

            <motion.p
              variants={fadeIn('up', 0.3)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-6 max-w-[420px] mx-auto lg:mx-0 text-xs sm:text-sm text-white/75 leading-relaxed font-light min-h-[56px]"
            >
              {activeCategoryInfo.description}
            </motion.p>

            {/* Sélecteur des Services (Synchronisé avec la page Services) */}
            <motion.div
              variants={fadeIn('up', 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="grid grid-cols-2 gap-2 max-w-[420px] mx-auto lg:mx-0 w-full"
            >
              {CATEGORIES.map((cat) => {
                const isActive = cat.id === selectedCategory;
                const count = counts[cat.id] || 0;

                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-3 py-2 rounded-xl text-xs font-medium transition-all duration-200 text-left flex items-center justify-between border ${
                      isActive
                        ? 'bg-accent text-white border-accent shadow-md shadow-accent/25 font-semibold'
                        : 'bg-white/[0.04] text-white/75 border-white/10 hover:bg-white/[0.08] hover:text-white'
                    }`}
                  >
                    <span className="truncate pr-1">{cat.title}</span>
                    <span
                      className={`text-[10px] px-1.5 py-0.5 rounded-md font-normal tabular-nums shrink-0 ${
                        isActive ? 'bg-black/30 text-white' : 'bg-white/10 text-white/70'
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </motion.div>
          </div>

          {/* ── COLONNE DROITE (65vw) : Le Showcase Slider (PAS DE PHOTO, 100% ICÔNES) ── */}
          <div className="w-full xl:max-w-[65%]">
            <motion.div
              key={`slider-${selectedCategory}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="w-full"
            >
              {/* En-tête de catégorie avec Tabs horizontaux */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-y-3 mb-4 pb-3 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-accent/20 border border-accent/40 text-accent shrink-0">
                    {renderProjectIcon(activeCategoryInfo.icon, 'text-lg')}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white tracking-tight">
                      {activeCategoryInfo.title}
                    </h3>
                    <p className="text-[11px] text-white/60">
                      {counts[selectedCategory]} {counts[selectedCategory] > 1 ? 'projets disponibles' : 'projet disponible'}
                    </p>
                  </div>
                </div>

                {/* Switcher horizontal d'onglets pour navigation directe */}
                <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
                  {CATEGORIES.map((c) => {
                    const isActive = c.id === selectedCategory;

                    return (
                      <button
                        key={c.id}
                        onClick={() => setSelectedCategory(c.id)}
                        className={`px-2.5 py-1.5 rounded-lg text-xs whitespace-nowrap transition-all shrink-0 ${
                          isActive
                            ? 'bg-accent text-white font-semibold shadow-md shadow-accent/30'
                            : 'bg-white/[0.05] text-white/60 hover:text-white hover:bg-white/10'
                        }`}
                      >
                        {c.shortLabel}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Slider des projets du service sélectionné */}
              <WorkSlider categoryId={selectedCategory} />
            </motion.div>
          </div>
        </div>
      </div>
      <Circles />
    </div>
  );
};

export default Work;
