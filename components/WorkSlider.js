import React, { useMemo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';
import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { projects } from '../src/data/projects';

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
              {pair.map((project) => (
                <div
                  key={project.id}
                  className="group relative rounded-2xl overflow-hidden bg-black/40 border border-white/10 shadow-xl flex items-center justify-center cursor-pointer transition-all duration-300 hover:border-accent/60 hover:shadow-2xl hover:shadow-accent/20"
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
                      <div className="w-full h-full flex items-center justify-center bg-[#131424] text-white/40 text-sm">
                        {project.name}
                      </div>
                    )}
                  </div>

                  {/* Badge de pôle discret et discipliné */}
                  <div className="absolute top-3 left-3 z-10 pointer-events-none flex items-center gap-2">
                    <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-lg bg-black/60 text-white/90 border border-white/20 backdrop-blur-md">
                      {project.pole}
                    </span>
                    {project.featured && (
                      <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-lg bg-accent/25 text-white border border-accent/40 backdrop-blur-md">
                        Projet phare
                      </span>
                    )}
                  </div>

                  {/* 2. Volet cinématique qui glisse depuis le bas au survol */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/85 to-black/60 p-5 flex flex-col justify-end translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-20">
                    <div>
                      <h4 className="text-base sm:text-lg font-bold text-white mb-1.5 tracking-tight">
                        {project.name}
                      </h4>
                      <p className="text-xs text-white/80 leading-relaxed font-light mb-3 line-clamp-3">
                        {project.description}
                      </p>
                    </div>

                    {/* Stack Pills sans mono forcé */}
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {project.stack.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="text-[11px] px-2.5 py-0.5 rounded-full bg-white/[0.08] text-white/90 border border-white/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Links en voix active */}
                    <div className="flex items-center gap-2.5 pt-2.5 border-t border-white/15">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-colors"
                        >
                          <FaGithub className="text-xs" /> Code source
                        </a>
                      )}
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-accent hover:bg-accent/85 text-white shadow-md shadow-accent/30 transition-colors"
                        >
                          <FaExternalLinkAlt className="text-[10px]" /> Démo live
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default WorkSlider;
