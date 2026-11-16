import React, { useState, useMemo } from 'react';
import WorkSlider from '../../components/WorkSlider';
import Circles from '../../components/Circles';
import { CATEGORIES, projects } from '../../src/data/projects';
import { renderProjectIcon } from '../../components/ProjectIcon';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

const Work = () => {
  // Catégorie active par défaut : 'vision_dl' (CV & DL)
  const [selectedCategory, setSelectedCategory] = useState('vision_dl');

  // Décompte dynamique des projets par catégorie
  const counts = useMemo(() => {
    return {
      vision_dl: projects.filter((p) => p.category === 'vision_dl').length,
      ml_nlp: projects.filter((p) => p.category === 'ml_nlp').length,
      cyber: projects.filter((p) => p.category === 'cyber').length,
      saas: projects.filter((p) => p.category === 'saas').length,
      data_eng: projects.filter((p) => p.category === 'data_eng').length,
      cloud_devops: projects.filter((p) => p.category === 'cloud_devops').length,
    };
  }, []);

  const activeCategoryInfo = useMemo(() => {
    return CATEGORIES.find((c) => c.id === selectedCategory) || CATEGORIES[0];
  }, [selectedCategory]);

  return (
    <div className="h-full bg-primary/30 pt-[75px] sm:pt-[90px] xl:pt-0 pb-20 sm:pb-28 xl:pb-0 flex flex-col justify-start xl:justify-center xl:flex-row xl:items-center overflow-y-auto xl:overflow-hidden relative">
      <Circles />
      <div className="container mx-auto px-4 xl:px-8">
        <div className="flex flex-col xl:flex-row gap-x-10 items-center justify-between">
          {/* ── COLONNE GAUCHE (32vw) : Titre, Cadrage & Boutons Abrégés ── */}
          <div className="text-center flex xl:w-[32vw] flex-col lg:text-left mb-3 xl:mb-0">
            <motion.h2
              variants={fadeIn('up', 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="text-2xl sm:text-3xl xl:text-[54px] font-semibold xl:leading-[1.3] !mb-1 xl:!mb-3 tracking-tight whitespace-nowrap"
            >
              My Work <span className="text-accent">.</span>
            </motion.h2>

            <motion.p
              variants={fadeIn('up', 0.3)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-3 xl:mb-6 max-w-[420px] mx-auto lg:mx-0 text-xs sm:text-sm text-white/75 leading-relaxed font-light min-h-0 xl:min-h-[56px] line-clamp-2 xl:line-clamp-none"
            >
              {activeCategoryInfo.description}
            </motion.p>

            {/* Boutons de sélection dans la colonne gauche */}
            <motion.div
              variants={fadeIn('up', 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="grid grid-cols-3 sm:grid-cols-2 gap-1.5 sm:gap-2 max-w-[420px] mx-auto lg:mx-0 w-full mb-3 xl:mb-0"
            >
              {CATEGORIES.map((cat) => {
                const isActive = cat.id === selectedCategory;
                const count = counts[cat.id] || 0;

                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`cursor-pointer px-2 sm:px-3.5 py-1.5 sm:py-2.5 rounded-lg sm:rounded-xl text-[11px] sm:text-xs font-medium transition-all duration-200 text-left flex items-center justify-between border ${
                      isActive
                        ? 'bg-accent text-white border-accent shadow-md shadow-accent/25 font-semibold'
                        : 'bg-white/[0.04] text-white/75 border-white/10 hover:bg-white/[0.08] hover:text-white'
                    }`}
                  >
                    <span className="pr-1 leading-tight truncate">{cat.title}</span>
                    <span
                      className={`text-[9px] sm:text-[10px] px-1.5 sm:px-2 py-0.5 rounded font-normal tabular-nums shrink-0 ${
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

          {/* ── COLONNE DROITE (65vw) : Le Showcase Slider (Titre complet en full sans liste horizontale) ── */}
          <div className="w-full xl:max-w-[65%]">
            <motion.div
              key={`slider-${selectedCategory}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="w-full"
            >
              {/* En-tête : Titre en full (Computer Vision & Deep Learning) + Sous-titre & Badge */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-y-1 mb-2 pb-2 xl:mb-4 xl:pb-3 border-b border-white/10">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl flex items-center justify-center bg-accent/20 border border-accent/40 text-accent shrink-0 shadow-lg shadow-accent/15">
                    {renderProjectIcon(activeCategoryInfo.icon, 'text-lg sm:text-xl')}
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-lg font-bold text-white tracking-tight">
                      {activeCategoryInfo.fullName || activeCategoryInfo.title}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-white/60">
                      {activeCategoryInfo.subtitle}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 self-start sm:self-center shrink-0">
                  <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[11px] sm:text-xs font-medium bg-white/[0.06] border border-white/10 text-white/80 tabular-nums">
                    {counts[selectedCategory]} {counts[selectedCategory] > 1 ? 'projects available' : 'project available'}
                  </span>
                </div>
              </div>

              {/* Slider des projets */}
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
