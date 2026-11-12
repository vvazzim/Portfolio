import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import WorkSlider from '../../components/WorkSlider';
import Circles from '../../components/Circles';
import { CATEGORIES, projects } from '../../src/data/projects';
import { renderProjectIcon } from '../../components/ProjectIcon';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeIn } from '../../variants';
import { FaProjectDiagram, FaArrowLeft } from 'react-icons/fa';

const Work = () => {
  // selectedCategory = null (affiche les 4 carreaux sans slider)
  // selectedCategory = 'cyber' | 'mldl' | 'devops' | 'saas' (ouvre le slider de cette catégorie)
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Décompte des projets par catégorie
  const counts = useMemo(() => {
    return {
      cyber: projects.filter((p) => p.category === 'cyber').length,
      mldl: projects.filter((p) => p.category === 'mldl').length,
      devops: projects.filter((p) => p.category === 'devops').length,
      saas: projects.filter((p) => p.category === 'saas').length,
    };
  }, []);

  const activeCategoryInfo = useMemo(() => {
    return CATEGORIES.find((c) => c.id === selectedCategory) || null;
  }, [selectedCategory]);

  return (
    <div className="h-full bg-primary/30 py-24 xl:py-32 flex items-center overflow-y-auto xl:overflow-hidden relative">
      <Circles />
      <div className="container mx-auto px-4 xl:px-8">
        <div className="flex flex-col xl:flex-row gap-x-10 items-center justify-between">
          {/* ── COLONNE GAUCHE (32vw) : Titre, Positionnement & Contrôles ── */}
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
              className="mb-6 max-w-[420px] mx-auto lg:mx-0 text-xs sm:text-sm text-white/75 leading-relaxed font-light"
            >
              {selectedCategory
                ? `Exploration des réalisations pour le pôle ${activeCategoryInfo?.title}. Consultez le code source et les démonstrations associées.`
                : 'Sélection de systèmes critiques et IA de production regroupés en 4 pôles majeurs. Cliquez sur un carreau pour ouvrir le carrousel des projets.'}
            </motion.p>

            {/* Navigation contextuelle selon la vue */}
            <motion.div
              variants={fadeIn('up', 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="flex flex-col gap-3 max-w-[380px] mx-auto lg:mx-0 w-full"
            >
              {selectedCategory ? (
                /* Bouton retour aux 4 carreaux */
                <button
                  onClick={() => setSelectedCategory(null)}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all self-start shadow-md hover:border-accent/40"
                >
                  <FaArrowLeft className="text-xs text-accent" />
                  <span>← Retour aux 4 pôles</span>
                </button>
              ) : (
                /* Récapitulatif rapide des 4 pôles */
                <div className="grid grid-cols-2 gap-2 text-left">
                  {CATEGORIES.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className="px-3 py-2 rounded-xl text-xs font-medium bg-white/[0.03] hover:bg-white/[0.08] text-white/70 hover:text-white border border-white/10 transition-all flex items-center justify-between"
                    >
                      <span className="truncate">{cat.title.split(' ')[0]}</span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded-md bg-white/10 text-white/80 tabular-nums">
                        {counts[cat.id]}
                      </span>
                    </button>
                  ))}
                </div>
              )}

              {/* Lien vers la Mind-Map de recherche ML/DL */}
              <Link
                href="/work-mindmap"
                className="mt-3 inline-flex items-center gap-2 text-xs text-white/50 hover:text-white transition-colors self-start group"
              >
                <FaProjectDiagram className="text-accent text-xs group-hover:scale-110 transition-transform" />
                <span className="underline underline-offset-4 decoration-white/20 hover:decoration-white/60">
                  Arborescence de recherche ML/DL (vue Mind-Map)
                </span>
              </Link>
            </motion.div>
          </div>

          {/* ── COLONNE DROITE (65vw) : 4 Carreaux (Défaut) OU Slider Projets (Au Clic) ── */}
          <div className="w-full xl:max-w-[65%]">
            <AnimatePresence mode="wait">
              {!selectedCategory ? (
                /* ── 1. VUE PAR DÉFAUT : LES 4 CARREAUX SANS SLIDER ── */
                <motion.div
                  key="categories-grid"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.28, ease: 'easeOut' }}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                >
                  {CATEGORIES.map((cat) => {
                    const count = counts[cat.id];

                    return (
                      <div
                        key={cat.id}
                        onClick={() => setSelectedCategory(cat.id)}
                        className="group relative rounded-2xl bg-gradient-to-b from-white/[0.06] to-white/[0.02] border border-white/10 hover:border-accent/70 p-5 sm:p-6 flex flex-col justify-between cursor-pointer transition-all duration-300 hover:shadow-2xl hover:shadow-accent/20 backdrop-blur-md h-[180px] sm:h-[195px]"
                      >
                        {/* En-tête du Carreau : Icône représentative & Décompte */}
                        <div className="flex items-center justify-between">
                          <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-white/[0.06] border border-white/15 text-accent group-hover:scale-110 group-hover:bg-accent group-hover:text-white group-hover:border-accent transition-all duration-300 shadow-md">
                            {renderProjectIcon(cat.icon, 'text-2xl')}
                          </div>
                          <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-white/[0.06] text-white/80 border border-white/10 tabular-nums">
                            {count} {count > 1 ? 'projets' : 'projet'}
                          </span>
                        </div>

                        {/* Corps du Carreau */}
                        <div>
                          <h3 className="text-base sm:text-lg font-bold text-white mb-1 tracking-tight group-hover:text-accent transition-colors flex items-center justify-between">
                            <span>{cat.title}</span>
                            <span className="text-xs text-white/40 group-hover:text-accent transition-colors font-normal">
                              Ouvrir →
                            </span>
                          </h3>
                          <p className="text-xs text-white/70 line-clamp-2 leading-relaxed font-light">
                            {cat.description}
                          </p>
                        </div>

                        {/* Stack preview */}
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {cat.stackPreview.slice(0, 3).map((s) => (
                            <span
                              key={s}
                              className="text-[10px] px-2 py-0.5 rounded-md bg-white/[0.04] text-white/60 border border-white/5"
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </motion.div>
              ) : (
                /* ── 2. VUE AU CLIC : LE SLIDER DES PROJETS DU PÔLE SÉLECTIONNÉ ── */
                <motion.div
                  key={`slider-${selectedCategory}`}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className="w-full"
                >
                  {/* Barre supérieure du Slider */}
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-accent/20 border border-accent/40 text-accent">
                        {renderProjectIcon(activeCategoryInfo?.icon, 'text-lg')}
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-white tracking-tight">
                          {activeCategoryInfo?.title}
                        </h3>
                        <p className="text-[11px] text-white/60">
                          {counts[selectedCategory]} {counts[selectedCategory] > 1 ? 'projets disponibles' : 'projet disponible'}
                        </p>
                      </div>
                    </div>

                    {/* Switcher rapide entre pôles */}
                    <div className="hidden sm:flex items-center gap-1.5">
                      {CATEGORIES.map((c) => (
                        <button
                          key={c.id}
                          onClick={() => setSelectedCategory(c.id)}
                          className={`px-2.5 py-1 rounded-lg text-[11px] transition-all ${
                            c.id === selectedCategory
                              ? 'bg-accent text-white font-semibold shadow-md shadow-accent/30'
                              : 'bg-white/[0.05] text-white/60 hover:text-white hover:bg-white/10'
                          }`}
                        >
                          {c.title.split(' ')[0]}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Le Slider de projets avec icônes représentatives (PAS DE PHOTO) */}
                  <WorkSlider categoryId={selectedCategory} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
      <Circles />
    </div>
  );
};

export default Work;
