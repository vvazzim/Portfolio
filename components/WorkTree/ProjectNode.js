import React, { useState } from 'react';
import { Handle, Position } from '@xyflow/react';
import { FaExternalLinkAlt, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const ProjectNode = ({ data, selected }) => {
  const [isHovered, setIsHovered] = useState(false);
  const isExpanded = selected || isHovered || data?.isExpanded;

  const { name, badge, description, tech, link, onSelect } = data || {};

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onSelect && onSelect(data)}
      className={`relative rounded-2xl transition-all duration-300 backdrop-blur-md cursor-pointer ${
        isExpanded
          ? 'w-[320px] bg-[#1a1b2e]/95 border-2 border-accent shadow-2xl shadow-accent/25 z-30'
          : 'w-[230px] bg-[#151628]/85 border border-white/15 shadow-lg hover:border-accent/60 hover:shadow-accent/15 z-10'
      }`}
    >
      <Handle
        type="target"
        position={Position.Left}
        className="!w-3 !h-3 !bg-accent !border-2 !border-white"
      />

      {/* Visual Badge (ex: "VMI LAB" en haut à droite de la bulle) */}
      {badge && (
        <span className="absolute -top-2.5 -right-2 px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-amber-500/30 text-amber-300 border border-amber-500/70 shadow-lg shadow-amber-950/60 z-20 pointer-events-none">
          {badge}
        </span>
      )}

      {/* Bubble Header */}
      <div className="p-3.5 flex items-center justify-between gap-2 border-b border-white/10">
        <div className="flex items-center gap-2 overflow-hidden">
          <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse shrink-0" />
          <h4 className="text-sm font-extrabold tracking-wider text-white truncate">
            {name}
          </h4>
        </div>
        <button
          type="button"
          aria-label="Toggle details"
          className="text-white/60 hover:text-white text-xs p-1 rounded-md hover:bg-white/10 shrink-0"
        >
          {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
        </button>
      </div>

      {/* Collapsed Preview (when not expanded) */}
      {!isExpanded && (
        <div className="px-3.5 py-2.5">
          <div className="flex flex-wrap gap-1">
            {tech?.slice(0, 2).map((item) => (
              <span
                key={item}
                className="text-[10px] px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-white/70"
              >
                {item}
              </span>
            ))}
            {tech?.length > 2 && (
              <span className="text-[10px] px-1.5 py-0.5 rounded-md bg-white/5 text-white/50">
                +{tech.length - 2}
              </span>
            )}
          </div>
          <span className="text-[10px] text-accent/80 block mt-1.5 font-medium">
            Cliquer pour explorer →
          </span>
        </div>
      )}

      {/* Expanded Content (Hover or Click) */}
      {isExpanded && (
        <div className="p-3.5 space-y-3 animate-fadeIn">
          {/* Description validée (non modifiée) */}
          <p className="text-xs text-white/80 leading-relaxed">
            {description}
          </p>

          {/* Tech Stack Pills */}
          <div>
            <span className="text-[10px] uppercase font-mono text-white/50 block mb-1">
              Technologies :
            </span>
            <div className="flex flex-wrap gap-1">
              {tech?.map((item) => (
                <span
                  key={item}
                  className="text-[10px] px-2 py-0.5 rounded-md bg-white/10 border border-white/15 text-white/90 font-mono"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Link button: STRICTEMENT si link existe, pas de bouton si link est null */}
          {link ? (
            <div className="pt-2 border-t border-white/10">
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-accent hover:bg-accent/80 text-white shadow-md shadow-accent/30 transition-all duration-200"
              >
                Voir le projet <FaExternalLinkAlt className="text-[10px]" />
              </a>
            </div>
          ) : (
            <div className="pt-1.5 border-t border-white/5">
              <span className="text-[10px] italic text-white/40">
                Projet de recherche (aucun dépôt public)
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ProjectNode;
