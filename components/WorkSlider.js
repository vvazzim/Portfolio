import React, { useMemo, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { projects } from '../src/data/projects';
import { renderProjectIcon } from './ProjectIcon';

// Regrouper par paires de cartes par slide
const chunkArray = (arr, size) => {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
};

const WorkSlider = ({ categoryId }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Projets filtrés par catégorie
  const filteredProjects = useMemo(() => {
    const list = projects.filter((p) => p.category === categoryId);
    return list.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
  }, [categoryId]);

  const slides = useMemo(() => {
    return chunkArray(filteredProjects, isMobile ? 1 : 2);
  }, [filteredProjects, isMobile]);

  if (filteredProjects.length === 0) {
    return (
      <div className="h-[340px] flex items-center justify-center text-white/50 text-sm">
        No projects available in this category.
      </div>
    );
  }

  return (
    <div className="w-full relative">
      <Swiper
        key={`${categoryId}-${isMobile ? 'm' : 'd'}`}
        modules={[Pagination]}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        spaceBetween={20}
        slidesPerView={1}
        className="h-[345px] sm:h-[390px] pb-8 sm:pb-12"
      >
        {slides.map((pair, slideIdx) => (
          <SwiperSlide key={slideIdx} className="h-full">
            <div className={`grid ${isMobile ? 'grid-cols-1 h-[295px]' : 'grid-cols-1 sm:grid-cols-2 h-[330px]'} gap-4`}>
              {pair.map((project) => (
                <div
                  key={project.id}
                  className="group relative rounded-2xl bg-gradient-to-b from-white/[0.06] to-white/[0.02] border border-white/10 hover:border-accent/60 p-4 sm:p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-accent/15 backdrop-blur-md"
                >
                  {/* Haut : Icône représentative & Badges */}
                  <div>
                    <div className="flex items-center justify-between mb-2 sm:mb-4">
                      {/* Icône technique représentative (PAS DE PHOTO) */}
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center bg-white/[0.06] border border-white/15 text-accent group-hover:scale-105 group-hover:border-accent/60 group-hover:bg-accent/10 transition-all duration-300 shadow-md">
                        {renderProjectIcon(project.icon, 'text-xl sm:text-2xl')}
                      </div>

                      <div className="flex items-center gap-2">
                        {project.featured && (
                          <span className="text-[10px] sm:text-[11px] font-medium px-2 sm:px-2.5 py-0.5 rounded-md bg-accent/20 text-white border border-accent/40 backdrop-blur-md">
                            Featured
                          </span>
                        )}
                        <span className="text-[9px] sm:text-[10px] font-mono uppercase px-1.5 sm:px-2 py-0.5 rounded-md bg-white/[0.06] text-white/60 border border-white/10">
                          {project.pole}
                        </span>
                      </div>
                    </div>

                    {/* Titre & Description */}
                    <h4 className="text-sm sm:text-lg font-bold text-white mb-1 sm:mb-2 tracking-tight group-hover:text-accent transition-colors">
                      {project.name}
                    </h4>
                    <p className="text-xs text-white/75 leading-relaxed font-light mb-2 sm:mb-4 line-clamp-2 sm:line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  {/* Bas : Stack technique & Actions */}
                  <div>
                    {/* Stack Pills */}
                    <div className="flex flex-wrap gap-1 sm:gap-1.5 mb-2 sm:mb-4">
                      {project.stack.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="text-[10px] sm:text-[11px] px-2 sm:px-2.5 py-0.5 rounded-full bg-white/[0.06] text-white/85 border border-white/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Liens d'action */}
                    <div className="flex items-center gap-2 sm:gap-2.5 pt-2 sm:pt-3 border-t border-white/10">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="cursor-pointer inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg text-[11px] sm:text-xs font-medium bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-colors"
                        >
                          <FaGithub className="text-xs" /> Source Code
                        </a>
                      )}
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="cursor-pointer inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg text-[11px] sm:text-xs font-medium bg-accent hover:bg-accent/85 text-white shadow-md shadow-accent/30 transition-colors"
                        >
                          <FaExternalLinkAlt className="text-[10px]" /> Live Demo
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
