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
    description: "Histopathological classification (WSI 100k patches), dense instance segmentation (Cellpose), cancer cell tracking, and Vision Transformers.",
  },
  {
    icon: <FaShieldAlt />,
    title: 'Cybersecurity & SecOps (SOAR)',
    description: "Automated triage (Cortex XSOAR, CERT VINCI), on-premise 3E anti-phishing pipeline (QLoRA, zero cloud leakage), and IAM SoD governance.",
  },
  {
    icon: <FaServer />,
    title: 'Data Engineering & Streaming',
    description: "Distributed event-driven ingestion with Apache Kafka, decoupled microservices, and PostgreSQL 15 / Redis persistence.",
  },
  {
    icon: <FaCloud />,
    title: 'Cloud & Kubernetes (AZ-400)',
    description: "Container orchestration under strict Kubernetes RBAC (least-privilege principle) and automated Azure DevOps CI/CD.",
  },
  {
    icon: <FaCode />,
    title: 'Real-Time SaaS Architectures',
    description: "High-throughput full-stack engineering (Fastify, React 18, Astro 5), real-time WebSockets (Socket.io), and Leaflet geospatial routing.",
  },
  {
    icon: <FaRobot />,
    title: 'Sovereign ML & Local NLP',
    description: "Private RAG architectures (ChromaDB, Ollama), NLP inference (DeBERTa-v3), and post-hoc explainability without third-party API exposure.",
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
