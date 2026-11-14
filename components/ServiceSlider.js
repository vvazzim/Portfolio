import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import {
  FaServer,
  FaBrain,
  FaRobot,
  FaCode,
  FaCloud,
  FaShieldAlt,
} from "react-icons/fa";

const serviceData = [
  {
    icon: <FaBrain />,
    title: 'Computer Vision & Deep Learning',
    description: "Classification histopathologique (WSI 100k patches), segmentation d'instances denses (Cellpose) et Vision Transformers.",
  },
  {
    icon: <FaShieldAlt />,
    title: 'Cybersécurité & SecOps (CERT)',
    description: "Automatisation de la détection (Cortex XSOAR), architecture 3E anti-phishing sans dépendance réseau et audit IAM / SoD.",
  },
  {
    icon: <FaServer />,
    title: 'Data Engineering & Streaming',
    description: "Ingestion événementielle distribuée Apache Kafka, microservices découplés et bases relationnelles PostgreSQL 15.",
  },
  {
    icon: <FaCloud />,
    title: 'Cloud & Kubernetes (AZ-400)',
    description: "Orchestration conteneurisée Kubernetes avec sécurisation RBAC stricte (moindre privilège) et pipelines CI/CD Azure DevOps.",
  },
  {
    icon: <FaCode />,
    title: 'Architectures SaaS Temps Réel',
    description: "Conception full-stack haute performance (Fastify, React 18, Astro 5), WebSockets Socket.io et cartographie Leaflet.",
  },
  {
    icon: <FaRobot />,
    title: 'Machine Learning & NLP Souverain',
    description: "Pipelines RAG locaux (ChromaDB, Ollama), inférence NLP (DeBERTa-v3) et explicabilité post-hoc sans fuite de données.",
  },
];

import { FreeMode, Pagination } from 'swiper';
import { RiArrowRightSLine } from "react-icons/ri";

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="h-[280px] sm:h-[350px]"
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="bg-[rgba(65,47,123,0.15)] h-full rounded-lg px-6 py-8 flex flex-col justify-between group cursor-pointer hover:bg-[rgba(89,65,169,0.22)] transition-all duration-300 border border-white/5 hover:border-accent/40">
              {/* Top: Icon & Title */}
              <div>
                <div className="text-4xl text-accent mb-4">{item.icon}</div>
                <div className="text-base font-semibold text-white mb-2">{item.title}</div>
                <p className="text-xs text-white/70 font-light leading-relaxed">{item.description}</p>
              </div>
              {/* Bottom: Arrow */}
              <div className="text-2xl text-white/60 group-hover:text-accent group-hover:translate-x-1 transition-all duration-300 mt-4 flex justify-end">
                <RiArrowRightSLine />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
