import React, { useMemo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { projects } from '../src/data/projects';
import { renderProjectIcon } from './ProjectIcon';

// Regrouper par paires de 2 cartes par slide
const chunkArray = (arr, size) => {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
};

const WorkSlider = ({ categoryId }) => {
  // Projets filtrés par catégorie
  const filteredProjects = useMemo(() => {
    const list = projects.filter((p) => p.category === categoryId);
    return list.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
  }, [categoryId]);

  const slides = useMemo(() => {
    return chunkArray(filteredProjects, 2);
  }, [filteredProjects]);

  if (filteredProjects.length === 0) {
    return (
      <div className="h-[340px] flex items-center justify-center text-white/50 text-sm">
        Aucun projet disponible dans cette catégorie.
      </div>
    );
  }

  return (
    <div className="w-full relative">
      <Swiper
        key={categoryId}
        modules={[Pagination]}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        spaceBetween={20}
        slidesPerView={1}
        className="h-[390px] pb-12"
      >
        {slides.map((pair, slideIdx) => (
          <SwiperSlide key={slideIdx} className="h-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-[330px]">
              {pair.map((project) => (
                <div
                  key={project.id}
                  className="group relative rounded-2xl bg-gradient-to-b from-white/[0.06] to-white/[0.02] border border-white/10 hover:border-accent/60 p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-accent/15 backdrop-blur-md"
                >
                  {/* Haut : Icône représentative & Badges */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      {/* Icône technique représentative (PAS DE PHOTO) */}
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-white/[0.06] border border-white/15 text-accent group-hover:scale-105 group-hover:border-accent/60 group-hover:bg-accent/10 transition-all duration-300 shadow-md">
                        {renderProjectIcon(project.icon, 'text-2xl')}
                      </div>

                      <div className="flex items-center gap-2">
                        {project.featured && (
                          <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-md bg-accent/20 text-white border border-accent/40 backdrop-blur-md">
                            Projet phare
                          </span>
                        )}
                        <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-md bg-white/[0.06] text-white/60 border border-white/10">
                          {project.pole}
                        </span>
                      </div>
                    </div>

                    {/* Titre & Description */}
                    <h4 className="text-base sm:text-lg font-bold text-white mb-2 tracking-tight group-hover:text-accent transition-colors">
                      {project.name}
                    </h4>
                    <p className="text-xs text-white/75 leading-relaxed font-light mb-4 line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  {/* Bas : Stack technique & Actions */}
                  <div>
                    {/* Stack Pills */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.stack.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="text-[11px] px-2.5 py-0.5 rounded-full bg-white/[0.06] text-white/85 border border-white/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Liens d'action */}
                    <div className="flex items-center gap-2.5 pt-3 border-t border-white/10">
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
