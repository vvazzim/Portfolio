"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import React from "react";
import { Pagination } from "swiper";
import {
  BsArrowRight,
  BsFileEarmarkPdf,
  BsPlay,
  BsGithub,
} from "react-icons/bs";

// ------------------------------
// CONFIG
// ------------------------------
const PAGE_SIZE = 2;         // 4 cartes par slide
const SHOW_EMPTY_SLOTS = true; // affiche une case vide pour compléter la grille

// ------------------------------
// DONNÉES PROJETS
// Remplace les thumbs par tes covers quand prêts : /images/projects/.../cover.jpg
// Mets tes PDFs dans public/assets/docs/ (noms ci-dessous)
// ------------------------------
const projects = [
  {
    title: "Fake News Multimodal Platform",
    cover: "/images/projects/fn/thumb2.jpg", 
    summary:
      "WSI → patchs → embeddings (UNI/ViT) → PCA/UMAP → classification. Accuracy test jusqu’à 87,5% (UNI).",
    links: {
      live: "", 
      report: "/assets/docs/fakenews_report_web.pdf",
      slides: "/assets/docs/fakenews_slides_bigdata.pdf",
      code: "https://github.com/vvazzim/fake-news-platform.git", // <- repo Git si tu veux
      kaggle: "", 
    },
  },
  {
    title: "TER – Biomarkers (WSI, UNI/ViT)",
    cover: "/images/projects/ter/thumb1.jpg", 
    summary:
      "Détection multimodale (texte+image) avec FastAPI, Kafka, PostgreSQL. Dashboard React pour métriques (F1, comparison, dernières prédictions).",
    links: {
      live: "", // pas de live
      report: "/assets/docs/rapport_TER2025.pdf",
      slides: "/assets/docs/slides_TER2025.pdf",
      code: "",
      kaggle: "https://www.kaggle.com/code/wassmed/model-foundation-uni/", // <- remplace par ton vrai lien Kaggle
    },
  },
  {
    title: "Real-Estate Website",
    cover: "/images/projects/RE/cover.png", // TODO cover dédié si tu as
    summary:
      "Real-Estate website (démo live).",
    links: {
      live: "https://main--tubular-kelpie-d1f63c.netlify.app", // <- COLLE ICI le lien que tu veux “garder”
      report: "",
      slides: "",
      code: "", // optionnel
      kaggle: "",
    },
  },
  {
    title: "AI Assistant Chatbot",
    cover: "/images/projects/chatbot/thumb4.jpg", 
    summary: "Chatbot intelligent avec LangChain et LLM pour support client.",
    links: {
      report: "/assets/docs/chatbot_report.pdf",
      code: "https://github.com/vvazzim/chatbot-project",
    },
  }
  
  // -> Ajoute/retire des projets ici. Le slider pagine automatiquement par 4.
];

// ------------------------------
// UTILS
// ------------------------------
const openSafe = (url) => {
  if (!url) return;
  try {
    window.open(url, "_blank", "noopener,noreferrer");
  } catch {}
};

const chunk = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size)
  );

// ------------------------------
// COMPOSANT CARTE
// ------------------------------
function ProjectCard({ project }) {
  if (!project) {
    // Placeholder (case vide)
    return (
      <div className="relative rounded-lg overflow-hidden flex items-center justify-center border-2 border-dashed border-white/20 bg-white/5 min-h-[140px]">
        <div className="text-xs text-white/60 flex items-center gap-2">
          Bientôt
          <BsArrowRight />
        </div>
      </div>
    );
  }

  const { title, cover, summary, links = {} } = project;
  const hasLive = !!links.live;
  const hasReport = !!links.report;
  const hasSlides = !!links.slides;
  const hasCode = !!links.code;
  const hasKaggle = !!links.kaggle;

  const onCardClick = () => {
    if (hasLive) openSafe(links.live);
  };

  return (
    <div
      role={hasLive ? "button" : "group"}
      tabIndex={hasLive ? 0 : -1}
      aria-label={title}
      onClick={onCardClick}
      onKeyDown={(e) => {
        if (hasLive && (e.key === "Enter" || e.key === " ")) onCardClick();
      }}
      className={[
        "relative rounded-lg overflow-hidden flex flex-col group",
        hasLive ? "cursor-pointer" : "cursor-default",
        "bg-white/5 border border-white/10",
      ].join(" ")}
    >
      {/* Visuel */}
      <div className="relative w-full aspect-[16/9] overflow-hidden">
        <Image
          src={cover}
          width={800}
          height={450}
          alt={title}
          className="w-full h-full object-cover"
          sizes="(max-width: 768px) 50vw, 33vw"
          priority={false}
        />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-60 transition-all duration-700" />
      </div>

      {/* Contenu */}
      <div className="p-4 flex flex-col gap-3">
        <h3 className="text-base sm:text-lg font-semibold">{title}</h3>
        {summary && <p className="text-sm text-white/80">{summary}</p>}

        {/* CTA */}
        <div className="mt-auto flex flex-wrap gap-2">
          {hasLive && (
            <a
              href={links.live}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="px-3 py-1.5 text-xs rounded-xl bg-white/10 border border-white/30 hover:bg-white/20 transition inline-flex items-center gap-1"
              aria-label="Voir le projet en ligne"
              title="Voir le projet en ligne"
            >
              <BsPlay />
              Live
            </a>
          )}
          {hasReport && (
            <a
              href={links.report}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="px-3 py-1.5 text-xs rounded-xl bg-white/10 border border-white/30 hover:bg-white/20 transition inline-flex items-center gap-1"
              aria-label="Voir le rapport PDF"
              title="Voir le rapport PDF"
            >
              <BsFileEarmarkPdf />
              Rapport
            </a>
          )}
          {hasSlides && (
            <a
              href={links.slides}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="px-3 py-1.5 text-xs rounded-xl bg-white/10 border border-white/30 hover:bg-white/20 transition inline-flex items-center gap-1"
              aria-label="Voir les slides PDF"
              title="Voir les slides PDF"
            >
              <BsFileEarmarkPdf />
              Slides
            </a>
          )}
          {hasCode && (
            <a
              href={links.code}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="px-3 py-1.5 text-xs rounded-xl bg-white/10 border border-white/30 hover:bg-white/20 transition inline-flex items-center gap-1"
              aria-label="Voir le code source"
              title="Voir le code source"
            >
              <BsGithub />
              Code
            </a>
          )}
          {hasKaggle && (
            <a
              href={links.kaggle}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="px-3 py-1.5 text-xs rounded-xl bg-white/10 border border-white/30 hover:bg-white/20 transition inline-flex items-center gap-1"
              aria-label="Voir sur Kaggle"
              title="Voir sur Kaggle"
            >
              <BsArrowRight />
              Kaggle
            </a>
          )}
          {!hasLive && !hasReport && !hasSlides && !hasCode && !hasKaggle && (
            <div className="px-3 py-1.5 text-xs rounded-xl bg-white/10 border border-white/30 inline-flex items-center gap-2 opacity-80">
              <span className="tracking-[0.2em]">AUCUN LIEN</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ------------------------------
// SLIDER
// ------------------------------
const WorkSlider = () => {
  // On découpe les projets par groupe de 4 pour chaque slide
  const pages = chunk(projects, PAGE_SIZE);

  return (
    <Swiper
      spaceBetween={10}
      pagination={{ clickable: true }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      {pages.map((group, sIdx) => {
        // Si tu veux AUCUNE case vide, commente la ligne suivante :
        const padded =
          SHOW_EMPTY_SLOTS && group.length < PAGE_SIZE
            ? [...group, ...Array(PAGE_SIZE - group.length).fill(null)]
            : group;

        // Si un groupe est vide (ne devrait pas arriver), on ne rend pas de slide
        if (!padded.length) return null;

        return (
          <SwiperSlide key={sIdx}>
            <div className="grid grid-cols-2  grid-rows-2 gap-4">
              {padded.map((projectOrNull, iIdx) => (
                <ProjectCard key={`${sIdx}-${iIdx}`} project={projectOrNull} />
              ))}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
