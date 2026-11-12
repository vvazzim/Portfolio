import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import WorkTreeMobile from './WorkTree/WorkTreeMobile';
import { FaProjectDiagram, FaListUl } from 'react-icons/fa';

// Import React Flow Canvas with SSR disabled to ensure client-only execution
const WorkTreeCanvas = dynamic(() => import('./WorkTree/WorkTreeCanvas'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[620px] rounded-2xl border border-white/10 bg-[#0d0e1b] flex items-center justify-center">
      <div className="flex flex-col items-center gap-3">
        <span className="w-8 h-8 rounded-full border-2 border-accent border-t-transparent animate-spin" />
        <span className="text-xs text-white/60 font-mono">
          Chargement de l'arborescence interactive...
        </span>
      </div>
    </div>
  ),
});

const WorkTree = () => {
  const [viewMode, setViewMode] = useState('auto'); // 'auto', 'canvas', 'list'

  return (
    <div className="w-full flex flex-col items-center">
      {/* Sub-header / view switch for testing */}
      <div className="w-full flex items-center justify-between mb-4 px-2">
        <div className="text-xs text-white/70">
          <span className="text-accent font-semibold">Mind-Map :</span> Branche{' '}
          <strong className="text-white">ML / DL</strong> reliée au nœud{' '}
          <strong className="text-white">MY WORK</strong>
        </div>

        {/* View toggle (Permet de tester la vue mobile même sur desktop) */}
        <div className="flex items-center gap-1 bg-white/5 p-1 rounded-xl border border-white/10 text-xs">
          <button
            type="button"
            onClick={() => setViewMode('canvas')}
            className={`flex items-center gap-1 px-2.5 py-1 rounded-lg transition-all ${
              viewMode === 'canvas'
                ? 'bg-accent text-white'
                : 'text-white/60 hover:text-white'
            }`}
          >
            <FaProjectDiagram className="text-[10px]" /> Arborescence
          </button>
          <button
            type="button"
            onClick={() => setViewMode('list')}
            className={`flex items-center gap-1 px-2.5 py-1 rounded-lg transition-all ${
              viewMode === 'list'
                ? 'bg-accent text-white'
                : 'text-white/60 hover:text-white'
            }`}
          >
            <FaListUl className="text-[10px]" /> Liste Verticale
          </button>
        </div>
      </div>

      {/* Render based on view mode and screen size */}
      {viewMode === 'list' ? (
        <WorkTreeMobile />
      ) : viewMode === 'canvas' ? (
        <WorkTreeCanvas />
      ) : (
        <>
          {/* Default Auto mode: Canvas on desktop/tablet, Vertical list on mobile */}
          <div className="w-full hidden md:block">
            <WorkTreeCanvas />
          </div>
          <div className="w-full block md:hidden">
            <WorkTreeMobile />
          </div>
        </>
      )}
    </div>
  );
};

export default WorkTree;
