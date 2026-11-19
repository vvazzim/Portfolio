import Image from 'next/image';
import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from '../components/ProjectsBtn';
import HeroRotator from '../components/HeroRotator';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import React from "react";

const Home = () => {
  return (
    <div className="bg-primary/60 h-full w-full relative overflow-y-auto xl:overflow-hidden flex flex-col justify-center">
      {/* ── PLAN 0 (Background) : Explosion artwork positioned on the right ── */}
      <div className="w-full xl:w-[1200px] h-full absolute right-0 bottom-0 pointer-events-none z-0 overflow-hidden">
        <div className="w-full h-full xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat mix-blend-color-dodge translate-z-0 opacity-80" />
      </div>

      {/* ── PLAN 1 (Middle) : Full screen interactive neural network particles ── */}
      <div className="w-full h-full absolute inset-0 z-10 pointer-events-none overflow-hidden">
        <ParticlesContainer />
      </div>

      {/* ── PLAN 1.5 (Contrast Filter / Atmosphere Shield) : Restores high text contrast on the left ── */}
      <div className="w-full h-full absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-transparent z-[15] pointer-events-none" />

      {/* ── PLAN 2 (Foreground) : Content and user interactions ── */}
      <div className="w-full h-full relative z-20 flex flex-col justify-center items-center xl:items-start bg-transparent">
        <div className="container mx-auto px-4 sm:px-6 xl:px-12 flex flex-col justify-center text-center xl:text-left my-auto xl:my-0 pt-16 pb-20 xl:pt-40 xl:pb-8">
          {/* Main Title with balanced line-height to prevent Header collisions */}
          <motion.h1
            variants={fadeIn('down', 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-[26px] sm:text-[38px] md:text-[52px] xl:text-[54px] font-extrabold tracking-tight leading-[1.16] mb-3 sm:mb-4 xl:mb-4"
          >
            Building Critical Systems <br />
            <span className="text-accent">with Applied AI & Intelligent Automation</span>
          </motion.h1>

          {/* Dynamic Value Hook */}
          <motion.div
            variants={fadeIn('down', 0.25)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mb-4 sm:mb-5 xl:mb-5"
          >
            <HeroRotator />
          </motion.div>

          {/* Broadened Narrative Paragraph with Strategic Color Accents */}
          <motion.p
            variants={fadeIn('down', 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-xl xl:max-w-2xl mx-auto xl:mx-0 mb-6 sm:mb-7 xl:mb-8 text-sm sm:text-base text-white/80 leading-relaxed font-light"
          >
            I’m <span className="text-white font-medium">Wassim CHIKHI</span>, AI & Computer Vision Engineer holding an{' '}
            <span className="text-accent font-medium">M.Sc. Research in Machine Intelligence</span> (Université Paris Cité), with applied software & AI experience at{' '}
            <span className="text-white font-medium">VINCI (CyberForge)</span>. Accredited by{' '}
            <span className="text-emerald-400 font-medium">ANSSI SecNumacadémie (96%)</span>, trained in{' '}
            <span className="text-accent font-medium">Cloud & DevOps (Azure, Docker, CI/CD)</span>, and recipient of the{' '}
            <span className="text-rose-400 font-medium">Outstanding Contribution Award</span> from the Higher Institute of Sciences, I design deterministic deep learning models and high-throughput production systems.
          </motion.p>

          {/* Projects Button */}
          <div className="flex justify-center xl:hidden relative z-30 mt-1">
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
