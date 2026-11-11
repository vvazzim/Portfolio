import React from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaStar } from 'react-icons/fa';
import { projects } from '../src/data/projects';

const POLE_COLORS = {
  GenAI: 'from-purple-500/20 to-accent/20 border-purple-500/40 text-purple-300',
  Cyber: 'from-emerald-500/20 to-accent/20 border-emerald-500/40 text-emerald-300',
  SWE: 'from-blue-500/20 to-accent/20 border-blue-500/40 text-blue-300',
  ML: 'from-amber-500/20 to-accent/20 border-amber-500/40 text-amber-300',
  Cloud: 'from-cyan-500/20 to-accent/20 border-cyan-500/40 text-cyan-300',
};

const PoleCardStack = ({ selectedPole = 'Tous', onSelectPole }) => {
  // Sort projects so that when a pole is selected, targeted projects appear first
  const sortedProjects = React.useMemo(() => {
    if (selectedPole === 'Tous') {
      return [...projects].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }
    return [...projects].sort((a, b) => {
      const aMatch = a.pole === selectedPole;
      const bMatch = b.pole === selectedPole;
      if (aMatch && !bMatch) return -1;
      if (!aMatch && bMatch) return 1;
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    });
  }, [selectedPole]);

  return (
    <div className="w-full">
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-6 auto-rows-fr"
      >
        <AnimatePresence>
          {sortedProjects.map((project) => {
            const isMatch = selectedPole === 'Tous' || project.pole === selectedPole;
            const badgeClass = POLE_COLORS[project.pole] || 'text-accent border-accent/40';

            return (
              <motion.article
                layout
                layoutId={`card-${project.id}`}
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{
                  opacity: isMatch ? 1 : 0.22,
                  scale: isMatch ? 1 : 0.95,
                  zIndex: isMatch ? 10 : 0,
                  y: isMatch ? 0 : 6,
                }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{
                  duration: 0.35,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                onClick={() => {
                  if (!isMatch && onSelectPole) {
                    onSelectPole(project.pole);
                  }
                }}
                className={`relative group rounded-2xl overflow-hidden flex flex-col justify-between transition-shadow duration-300 ${
                  isMatch
                    ? 'bg-gradient-to-b from-white/10 to-white/[0.03] border border-white/15 shadow-xl hover:border-accent/60 hover:shadow-accent/20 cursor-default'
                    : 'bg-white/[0.02] border border-white/5 opacity-30 cursor-pointer hover:opacity-50'
                }`}
              >
                {/* Top Image Banner */}
                <div className="relative w-full h-36 bg-black/40 overflow-hidden">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500 filter brightness-90"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/80 to-accent/20 text-white/40 font-mono text-sm">
                      {project.pole} Project
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#131424] via-transparent to-black/20" />

                  {/* Badges on Banner */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                    <span
                      className={`text-[11px] font-semibold tracking-wider uppercase px-2.5 py-0.5 rounded-full border bg-black/60 backdrop-blur-md ${badgeClass}`}
                    >
                      {project.pole}
                    </span>
                    {project.featured && (
                      <span className="flex items-center gap-1 text-[11px] font-medium px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 backdrop-blur-md">
                        <FaStar className="text-[10px]" /> Pôle Lead
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-accent transition-colors duration-200 mb-2">
                      {project.name}
                    </h3>
                    <p className="text-white/75 text-xs sm:text-sm leading-relaxed mb-4 min-h-[40px]">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    {/* Stack tags */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="text-[10px] sm:text-[11px] px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-white/70"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Links */}
                    <div className="flex items-center gap-3 pt-3 border-t border-white/10">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-xs text-white/80 hover:text-accent transition-colors py-1 px-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10"
                        >
                          <FaGithub className="text-sm" /> Code
                        </a>
                      )}
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-xs text-accent hover:text-white transition-colors py-1 px-2.5 rounded-lg bg-accent/15 hover:bg-accent/30 border border-accent/40"
                        >
                          <FaExternalLinkAlt className="text-xs" /> Démo Live
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default PoleCardStack;
