//next image
import Image from 'next/image';

//components
import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from '../components/ProjectsBtn';
import Avatar from '../components/Avatar';
import HeroRotator from '../components/HeroRotator';

//framer motion
import { motion } from 'framer-motion';

//variants
import { fadeIn } from '../variants';
import React from "react";

const Home = () => {
  return (
    <div className="bg-primary/60 h-full relative overflow-hidden">
      {/* 1. Fullscreen Particles Background (Étiré sur TOUT l'écran, gauche à droite) */}
      <div className="w-full h-full absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <ParticlesContainer />
      </div>

      {/* 2. Text & Content Layer (au-dessus des particules) */}
      <div className="w-full h-full bg-gradient-to-r from-primary/30 via-black/40 to-transparent relative z-10">
        <div className="text-center flex flex-col justify-center xl:pt-36 xl:text-left h-full container mx-auto px-4">
          {/* Main Title */}
          <motion.h1
            variants={fadeIn('down', 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1 !mb-2 tracking-tight"
          >
            Ingénieur IA & Automatisation <br />
            <span className="text-accent">Systèmes critiques, GenAI & Cyber</span>
          </motion.h1>

          {/* Dynamic Transformative Hero Rotator (OSINT, Threat Intel, RAG, etc.) */}
          <motion.div
            variants={fadeIn('down', 0.25)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            <HeroRotator />
          </motion.div>

          {/* Subtitle / Punchy Credibility Receipts */}
          <motion.p
            variants={fadeIn('down', 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-8 xl:mb-12 text-sm sm:text-base text-white/80 leading-relaxed font-light"
          >
            Diplômé du Master 2 Recherche Informatique (Université Paris Cité, 2026), doublement certifié{' '}
            <span className="text-white font-medium">Azure DevOps Expert (AZ-400)</span> et{' '}
            <span className="text-white font-medium">ANSSI SecNumacadémie (96%)</span>.
            <br />
            Je conçois et j'industrialise des systèmes d'IA robustes en environnements critiques.
          </motion.p>

          {/* Action Button */}
          <div className="flex justify-center xl:hidden relative z-20">
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn('down', 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex z-20"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>

      {/* 3. Decorative Accent Explosion Layer (Right side) */}
      <div className="w-[1200px] h-full absolute right-0 bottom-0 pointer-events-none z-[5]">
        <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0 opacity-80" />
      </div>
    </div>
  );
};

export default Home;
