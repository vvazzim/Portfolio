import React, { useMemo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';
import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { projects } from '../src/data/projects';

const POLE_BADGES = {
  Cyber: {
    label: 'Cyber & Threat Intel',
    className: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
  },
  GenAI: {
    label: 'GenAI & RAG',
    className: 'bg-purple-500/20 text-purple-300 border-purple-500/40',
  },
  ML: {
    label: 'ML & Computer Vision',
    className: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
  },
  Cloud: {
    label: 'Cloud & Streaming',
    className: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40',
  },
  SWE: {
    label: 'SWE & Digital',
    className: 'bg-blue-500/20 text-blue-300 border-blue-500/40',
  },
};

const WorkSlider = ({ selectedPole = 'Tous' }) => {
  // Filtrer les projets selon le pôle actif
  const displayProjects = useMemo(() => {
    if (!selectedPole || selectedPole === 'Tous') {
      return [...projects].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }
    return projects.filter((p) => p.pole === selectedPole);
  }, [selectedPole]);

  return (
    <div className="w-full relative px-2 sm:px-6">
      <Swiper
        modules={[Pagination]}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        spaceBetween={24}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 1.2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 24,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 28,
          },
        }}
        className="pb-14"
      >
        {displayProjects.map((project) => {
          const badgeMeta = POLE_BADGES[project.pole] || {
            label: project.pole,
            className: 'bg-white/10 text-white border-white/20',
          };

          return (
            <SwiperSlide key={project.id} className="h-auto">
              <div className="h-full flex flex-col justify-between rounded-2xl overflow-hidden bg-gradient-to-b from-[#18192d]/90 to-[#121324]/95 border border-white/15 shadow-xl hover:border-accent/60 hover:shadow-2xl hover:shadow-accent/20 transition-all duration-300 group">
                {/* 1. Cover Image Banner */}
                <div className="relative w-full h-44 sm:h-48 bg-black/50 overflow-hidden">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500 filter brightness-90 group-hover:brightness-100"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary to-accent/30 text-white/40 font-mono text-sm">
                      {project.name}
                    </div>
                  )}

                  {/* Gradient shade */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121324] via-transparent to-black/30" />

                  {/* Badges Overlay */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10 pointer-events-none">
                    <span
                      className={`text-[10px] sm:text-[11px] font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-full border backdrop-blur-md shadow-sm ${badgeMeta.className}`}
                    >
                      {badgeMeta.label}
                    </span>
                    {project.featured && (
                      <span className="flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full bg-amber-500/25 text-amber-300 border border-amber-500/50 backdrop-blur-md">
                        <FaStar className="text-[9px]" /> Lead Pôle
                      </span>
                    )}
                  </div>
                </div>

                {/* 2. Project Details Body */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg sm:text-xl font-extrabold text-white group-hover:text-accent transition-colors duration-200 mb-2">
                      {project.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-white/80 leading-relaxed min-h-[44px] mb-4 font-light">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="text-[10px] sm:text-[11px] font-mono px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-white/70"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-3 pt-3 border-t border-white/10">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-white/10 hover:bg-white/20 text-white border border-white/15 transition-all duration-200"
                        >
                          <FaGithub className="text-sm" /> Code Source
                        </a>
                      )}
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-accent hover:bg-accent/80 text-white shadow-md shadow-accent/30 transition-all duration-200"
                        >
                          <FaExternalLinkAlt className="text-[10px]" /> Démo Live
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default WorkSlider;
