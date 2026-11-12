import Image from 'next/image';
import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from '../components/ProjectsBtn';
import HeroRotator from '../components/HeroRotator';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import React from "react";

const Home = () => {
  return (
    <div className="bg-primary/60 h-full relative overflow-hidden">
      {/* ── PLAN 0 (Fond) : Artwork d'explosion étiré + gradient d'ambiance ── */}
      <div className="w-full h-full absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="w-full h-full xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat mix-blend-color-dodge translate-z-0 opacity-90" />
        <div className="w-full h-full absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/50 to-transparent" />
      </div>

      {/* ── PLAN 1 (Milieu) : Particules sur 100% de l'écran, AU-DESSUS de l'image de fond et du gradient ── */}
      <div className="w-full h-full absolute inset-0 z-10 pointer-events-none overflow-hidden">
        <ParticlesContainer />
      </div>

      {/* ── PLAN 2 (Premier plan) : Contenu texte et interactions (AU-DESSUS des particules) ── */}
      <div className="w-full h-full relative z-20 flex items-center bg-transparent">
        <div className="container mx-auto px-6 xl:px-12 flex flex-col justify-center text-center xl:text-left h-full xl:pt-20">
          {/* Titre Principal */}
          <motion.h1
            variants={fadeIn('down', 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1 !mb-1 tracking-tight"
          >
            Ingénieur IA & Automatisation <br />
            <span className="text-accent">Systèmes critiques, GenAI & Cyber</span>
          </motion.h1>

          {/* Accroche Dynamique Transformative */}
          <motion.div
            variants={fadeIn('down', 0.25)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            <HeroRotator />
          </motion.div>

          {/* Synthèse de positionnement & crédibilité terrain */}
          <motion.p
            variants={fadeIn('down', 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-8 xl:mb-10 text-sm sm:text-base text-white/80 leading-relaxed font-light"
          >
            Diplômé du Master 2 Recherche Informatique (Université Paris Cité, 2026), certifié{' '}
            <span className="text-white font-medium">Azure DevOps Expert (AZ-400)</span> et{' '}
            <span className="text-white font-medium">ANSSI SecNumacadémie (96%)</span>.
            <br />
            Production 24/7 (1 500 dossiers/jour, CERT VINCI). Je conçois et j'industrialise des systèmes d'IA robustes en environnements critiques.
          </motion.p>

          {/* Bouton Projets */}
          <div className="flex justify-center xl:hidden relative z-30">
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn('down', 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex z-30"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;
