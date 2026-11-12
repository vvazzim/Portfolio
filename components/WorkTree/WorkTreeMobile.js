import React, { useState } from 'react';
import { FaLayerGroup, FaBrain, FaExternalLinkAlt, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { mlDlProjects } from '../../src/data/mlDlProjects';

const WorkTreeMobile = () => {
  const [expandedId, setExpandedId] = useState(mlDlProjects[0].id);

  const toggleExpand = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="w-full max-w-lg mx-auto py-4 px-2">
      {/* Root Node: MY WORK */}
      <div className="flex flex-col items-center">
        <div className="px-5 py-3 rounded-2xl bg-gradient-to-r from-accent to-[#d0261a] text-white shadow-xl shadow-accent/30 border border-white/30 flex items-center gap-2.5">
          <FaLayerGroup className="text-sm" />
          <span className="text-xs font-mono uppercase tracking-widest text-white/80">
            MY WORK
          </span>
        </div>

        {/* Connecting Line */}
        <div className="w-0.5 h-6 bg-gradient-to-b from-accent to-purple-500 my-1" />

        {/* Branch Node: ML / DL */}
        <div className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-purple-700/80 to-accent/80 text-white shadow-lg border border-purple-400/40 flex items-center gap-2">
          <FaBrain className="text-xs text-purple-200" />
          <span className="text-xs font-bold tracking-wider">ML / DL</span>
          <span className="px-1.5 py-0.2 rounded-full text-[10px] font-mono bg-white/20">
            5
          </span>
        </div>

        {/* Connecting Line to Projects */}
        <div className="w-0.5 h-6 bg-gradient-to-b from-purple-500 to-white/20 my-1" />
      </div>

      {/* Projects Vertical Tree List */}
      <div className="space-y-3 relative pl-4 border-l-2 border-dashed border-white/20 ml-6">
        {mlDlProjects.map((project) => {
          const isExpanded = expandedId === project.id;

          return (
            <div
              key={project.id}
              className={`relative rounded-xl transition-all duration-300 backdrop-blur-md overflow-hidden ${
                isExpanded
                  ? 'bg-[#1a1b2e] border-2 border-accent shadow-xl shadow-accent/20'
                  : 'bg-[#151628]/80 border border-white/10 hover:border-white/20'
              }`}
            >
              {/* Connector horizontal pip */}
              <div
                className={`absolute -left-[22px] top-5 w-3 h-0.5 ${
                  isExpanded ? 'bg-accent' : 'bg-white/30'
                }`}
              />

              {/* Visual Badge (ex: "VMI LAB" en haut à droite) */}
              {project.badge && (
                <span className="absolute top-2.5 right-10 px-2 py-0.5 rounded-full text-[9px] font-extrabold uppercase tracking-wider bg-amber-500/30 text-amber-300 border border-amber-500/60 shadow-sm">
                  {project.badge}
                </span>
              )}

              {/* Header / Clickable Bar */}
              <button
                type="button"
                onClick={() => toggleExpand(project.id)}
                className="w-full text-left p-3.5 flex items-center justify-between gap-2 focus:outline-none"
              >
                <div className="flex items-center gap-2 overflow-hidden">
                  <span
                    className={`w-2 h-2 rounded-full shrink-0 ${
                      isExpanded ? 'bg-accent animate-pulse' : 'bg-white/40'
                    }`}
                  />
                  <h4 className="text-xs sm:text-sm font-extrabold tracking-wider text-white truncate">
                    {project.name}
                  </h4>
                </div>
                <span className="text-white/60 text-xs p-1">
                  {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
                </span>
              </button>

              {/* Expanded Details */}
              {isExpanded && (
                <div className="px-3.5 pb-3.5 pt-1 space-y-2.5 border-t border-white/10">
                  {/* Description validée sans modification */}
                  <p className="text-xs text-white/80 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1">
                    {project.tech.map((item) => (
                      <span
                        key={item}
                        className="text-[10px] px-2 py-0.5 rounded-md bg-white/10 border border-white/15 text-white/90 font-mono"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  {/* Link: bouton UNIQUEMENT si link existe */}
                  {project.link ? (
                    <div className="pt-2">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-accent hover:bg-accent/80 text-white shadow-md shadow-accent/30 transition-colors"
                      >
                        Voir le projet <FaExternalLinkAlt className="text-[10px]" />
                      </a>
                    </div>
                  ) : (
                    <div className="pt-1">
                      <span className="text-[10px] italic text-white/40">
                        Projet de recherche (aucun dépôt public)
                      </span>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WorkTreeMobile;
