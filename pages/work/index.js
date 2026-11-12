import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import WorkSlider from '../../components/WorkSlider';
import Circles from '../../components/Circles';
import { projects } from '../../src/data/projects';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import { FaProjectDiagram } from 'react-icons/fa';

const POLE_FILTERS = [
  { id: 'Tous', label: 'Tous les projets' },
  { id: 'Cyber', label: 'Cyber & IAM' },
  { id: 'GenAI', label: 'GenAI & RAG' },
  { id: 'ML', label: 'ML & Vision' },
  { id: 'Cloud', label: 'Cloud & Kafka' },
  { id: 'SWE', label: 'Solutions SWE' },
];

const Work = () => {
  const [selectedPole, setSelectedPole] = useState('Tous');

  // Décompte dynamique par pôle
  const counts = useMemo(() => {
    return {
      Tous: projects.length,
      Cyber: projects.filter((p) => p.pole === 'Cyber').length,
      GenAI: projects.filter((p) => p.pole === 'GenAI').length,
      ML: projects.filter((p) => p.pole === 'ML').length,
      Cloud: projects.filter((p) => p.pole === 'Cloud').length,
      SWE: projects.filter((p) => p.pole === 'SWE').length,
    };
  }, []);

  return (
    <div className="h-full bg-primary/30 py-28 xl:py-36 flex items-center overflow-y-auto xl:overflow-hidden relative">
      <Circles />
      <div className="container mx-auto px-4 xl:px-8">
        <div className="flex flex-col xl:flex-row gap-x-10 items-center justify-between">
          {/* ── COLONNE GAUCHE (35%) : Titre, Histoire & Filtres par Besoin Recruteur ── */}
          <div className="text-center flex xl:w-[32vw] flex-col lg:text-left mb-8 xl:mb-0">
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
              Sélection de systèmes d'IA et plateformes critiques industrialisées en production — de la détection d'usurpations à l'ingestion distribuée et la vision médicale.
            </motion.p>

            {/* Filtres par Pôles épurés (clic pour filtrer le slider) */}
            <motion.div
              variants={fadeIn('up', 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="flex flex-col gap-2 max-w-[380px] mx-auto lg:mx-0 w-full"
            >
              <div className="grid grid-cols-2 gap-2">
                {POLE_FILTERS.map((f) => {
                  const isActive = selectedPole === f.id;
                  const count = counts[f.id] || 0;

                  return (
                    <button
                      key={f.id}
                      onClick={() => setSelectedPole(f.id)}
                      className={`px-3.5 py-2.5 rounded-xl text-xs font-medium transition-all duration-200 text-left flex items-center justify-between border ${
                        isActive
                          ? 'bg-accent text-white border-accent shadow-md shadow-accent/25 font-semibold'
                          : 'bg-white/[0.04] text-white/75 border-white/10 hover:bg-white/[0.08] hover:text-white'
                      }`}
                    >
                      <span className="truncate">{f.label}</span>
                      <span
                        className={`text-[11px] px-2 py-0.5 rounded-md font-normal tabular-nums shrink-0 ml-1.5 ${
                          isActive ? 'bg-black/30 text-white' : 'bg-white/10 text-white/70'
                        }`}
                      >
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Lien discret vers la Mind-Map de recherche (conservée pour Wassim) */}
              <Link
                href="/work-mindmap"
                className="mt-4 inline-flex items-center gap-2 text-xs text-white/50 hover:text-white transition-colors self-start group"
              >
                <FaProjectDiagram className="text-accent text-xs group-hover:scale-110 transition-transform" />
                <span className="underline underline-offset-4 decoration-white/20 hover:decoration-white/60">
                  Arborescence de recherche ML/DL (vue Mind-Map)
                </span>
              </Link>
            </motion.div>
          </div>

          {/* ── COLONNE DROITE (65%) : Slider Cinéma (2 grands projets par slide) ── */}
          <motion.div
            variants={fadeIn('down', 0.5)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%]"
          >
            <WorkSlider selectedPole={selectedPole} />
          </motion.div>
        </div>
      </div>
      <Circles />
    </div>
  );
};

export default Work;
