import React, { useState, useMemo } from 'react';
import Circles from '../../components/Circles';
import PoleTabs from '../../components/PoleTabs';
import PoleCardStack from '../../components/PoleCardStack';
import WorkSlider from '../../components/WorkSlider';
import WorkTree from '../../components/WorkTree';
import { projects } from '../../src/data/projects';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import { FaThLarge, FaSlidersH, FaProjectDiagram } from 'react-icons/fa';

const Work = () => {
  const [selectedPole, setSelectedPole] = useState('Tous');
  const [viewMode, setViewMode] = useState('tree'); // 'tree', 'stack', 'slider'

  // Pre-calculate count per pole
  const counts = useMemo(() => {
    return {
      Tous: projects.length,
      GenAI: projects.filter((p) => p.pole === 'GenAI').length,
      Cyber: projects.filter((p) => p.pole === 'Cyber').length,
      SWE: projects.filter((p) => p.pole === 'SWE').length,
      ML: projects.filter((p) => p.pole === 'ML').length,
      Cloud: projects.filter((p) => p.pole === 'Cloud').length,
    };
  }, []);

  return (
    <div className="h-full bg-primary/30 py-24 sm:py-28 xl:py-32 overflow-y-auto scrollbar-thin scrollbar-thumb-accent scrollbar-track-white/10 relative">
      <Circles />
      <div className="container mx-auto px-4 max-w-7xl relative z-10 pb-20">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-4 border-b border-white/10 pb-6 gap-4">
          <div>
            <motion.h2
              variants={fadeIn('down', 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 !mb-2"
            >
              Showcase Projets <span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn('down', 0.3)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="max-w-2xl text-xs sm:text-sm text-white/70"
            >
              Architecture distribuée en 5 pôles étanches : GenAI souveraine, Cybersécurité & IAM, Cloud & Streaming temps réel, Vision par ordinateur et Solutions Digitales.
            </motion.p>
          </div>

          {/* View Mode Toggle */}
          <motion.div
            variants={fadeIn('left', 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex items-center gap-1.5 self-start md:self-auto bg-white/5 p-1 rounded-xl border border-white/10"
          >
            <button
              onClick={() => setViewMode('tree')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                viewMode === 'tree'
                  ? 'bg-accent text-white shadow-sm'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              <FaProjectDiagram className="text-xs" /> Arborescence ML/DL
            </button>
            <button
              onClick={() => setViewMode('stack')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                viewMode === 'stack'
                  ? 'bg-accent text-white shadow-sm'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              <FaThLarge className="text-xs" /> Grille & Pôles
            </button>
            <button
              onClick={() => setViewMode('slider')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                viewMode === 'slider'
                  ? 'bg-accent text-white shadow-sm'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              <FaSlidersH className="text-xs" /> Vue Slider
            </button>
          </motion.div>
        </div>

        {/* Pole Filter Tabs (when stack mode is active) */}
        {viewMode === 'stack' && (
          <motion.div
            variants={fadeIn('down', 0.35)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            <PoleTabs
              selectedPole={selectedPole}
              onSelectPole={setSelectedPole}
              counts={counts}
            />
          </motion.div>
        )}

        {/* Content View */}
        {viewMode === 'tree' && (
          <motion.div
            variants={fadeIn('up', 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full mt-4"
          >
            <WorkTree />
          </motion.div>
        )}

        {viewMode === 'stack' && (
          <motion.div
            variants={fadeIn('up', 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full mt-4"
          >
            <PoleCardStack
              selectedPole={selectedPole}
              onSelectPole={setSelectedPole}
            />
          </motion.div>
        )}

        {viewMode === 'slider' && (
          <motion.div
            variants={fadeIn('up', 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full mt-10 max-w-4xl mx-auto"
          >
            <WorkSlider />
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Work;
