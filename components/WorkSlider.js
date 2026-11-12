import React, { useMemo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';
import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt, FaStar, FaFileAlt } from 'react-icons/fa';
import { BsArrowRight } from 'react-icons/bs';
import { projects } from '../src/data/projects';

const POLE_COLORS = {
  Cyber: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
  GenAI: 'bg-purple-500/20 text-purple-300 border-purple-500/40',
  ML: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
  Cloud: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40',
  SWE: 'bg-blue-500/20 text-blue-300 border-blue-500/40',
};

// Fonction utilitaire pour regrouper par paires (2 projets par slide - Format B Cinéma)
const chunkArray = (arr, size) => {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
};

const WorkSlider = ({ selectedPole = 'Tous' }) => {
  // Filtrage selon le pôle sélectionné
  const filteredProjects = useMemo(() => {
    if (!selectedPole || selectedPole === 'Tous') {
      return [...projects].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }
    return projects.filter((p) => p.pole === selectedPole);
  }, [selectedPole]);

  // Découpage en paires de 2 cartes par slide
  const slides = useMemo(() => {
    return chunkArray(filteredProjects, 2);
  }, [filteredProjects]);

  return (
    <div className="w-full relative">
      <Swiper
        key={selectedPole} // Re-mount fluide quand le pôle change
        modules={[Pagination]}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        spaceBetween={20}
        slidesPerView={1}
        className="h-[360px] sm:h-[420px] pb-12"
      >
        {slides.map((pair, slideIdx) => (
          <SwiperSlide key={slideIdx} className="h-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-[300px] sm:h-[350px]">
              {pair.map((project) => {
                const badgeColor = POLE_COLORS[project.pole] || 'bg-white/10 text-white border-white/20';

                return (
                  <div
                    key={project.id}
                    className="group relative rounded-2xl overflow-hidden bg-black/40 border border-white/10 shadow-xl flex items-center justify-center cursor-pointer transition-all duration-300 hover:border-accent/70 hover:shadow-2xl hover:shadow-accent/20"
                  >
                    {/* 1. Image de couverture haute définition */}
                    <div className="relative w-full h-full">
                      {project.image ? (
                        <Image
                          src={project.image}
                          alt={project.name}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-cover object-center group-hover:scale-105 transition-transform duration-500 filter brightness-90 group-hover:brightness-75"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-[#131424] text-white/40 font-mono text-sm">
                          {project.name}
                        </div>
                      )}
                    </div>

                    {/* Badge pôle visible au repos en haut à gauche */}
                    <div className="absolute top-3 left-3 z-10 pointer-events-none flex items-center gap-2">
                      <span
                        className={`text-[10px] font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-full border backdrop-blur-md shadow-md ${badgeColor}`}
                      >
                        {project.pole}
                      </span>
                      {project.featured && (
                        <span className="flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full bg-amber-500/25 text-amber-300 border border-amber-500/50 backdrop-blur-md shadow-md">
                          <FaStar className="text-[9px]" /> Lead Pôle
                        </span>
                      )}
                    </div>

                    {/* 2. Volet cinématique noir translucide qui glisse depuis le bas au survol */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/85 to-black/60 p-5 flex flex-col justify-end translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-20">
                      <div>
                        <h4 className="text-base sm:text-lg font-extrabold text-white mb-1.5 flex items-center justify-between">
                          <span>{project.name}</span>
                          <BsArrowRight className="text-accent text-lg" />
                        </h4>
                        <p className="text-xs text-white/85 leading-relaxed font-light mb-3 line-clamp-3">
                          {project.description}
                        </p>
                      </div>

                      {/* Stack Pills */}
                      <div className="flex flex-wrap gap-1 mb-3">
                        {project.stack.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/10 text-white/90 border border-white/10"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Action Links */}
                      <div className="flex items-center gap-2.5 pt-2.5 border-t border-white/15">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-colors"
                          >
                            <FaGithub className="text-xs" /> Code
                          </a>
                        )}
                        {project.demoUrl && (
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold bg-accent hover:bg-accent/80 text-white shadow-md shadow-accent/40 transition-colors"
                          >
                            <FaExternalLinkAlt className="text-[10px]" /> Live
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default WorkSlider;
