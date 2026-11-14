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
      {/* ── PLAN 0 (Background) : Explosion artwork + atmosphere gradient ── */}
      <div className="w-full h-full absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="w-full h-full xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat mix-blend-color-dodge translate-z-0 opacity-90" />
        <div className="w-full h-full absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/50 to-transparent" />
      </div>

      {/* ── PLAN 1 (Middle) : Full screen interactive particles ── */}
      <div className="w-full h-full absolute inset-0 z-10 pointer-events-none overflow-hidden">
        <ParticlesContainer />
      </div>

      {/* ── PLAN 2 (Foreground) : Content and user interactions ── */}
      <div className="w-full h-full relative z-20 flex items-center bg-transparent">
        <div className="container mx-auto px-6 xl:px-12 flex flex-col justify-center text-center xl:text-left h-full xl:pt-20">
          {/* Main Title */}
          <motion.h1
            variants={fadeIn('down', 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1 !mb-1 tracking-tight"
          >
            Critical Systems & AI Engineer <br />
            <span className="text-accent">Applied Deep Learning & Sovereign SecOps</span>
          </motion.h1>

          {/* Dynamic Value Hook */}
          <motion.div
            variants={fadeIn('down', 0.25)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            <HeroRotator />
          </motion.div>

          {/* Broadened Narrative Paragraph */}
          <motion.p
            variants={fadeIn('down', 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-xl xl:max-w-2xl mx-auto xl:mx-0 mb-8 xl:mb-10 text-sm sm:text-base text-white/80 leading-relaxed font-light"
          >
            M.Sc. Research in Computer Vision & Machine Intelligence (Université Paris Cité, 2026), certified{' '}
            <span className="text-white font-medium">Azure DevOps Expert (AZ-400)</span> and{' '}
            <span className="text-white font-medium">ANSSI SecNumacadémie (96%)</span>.
            <br />
            Production Engineer at VINCI SA (CERT VINCI, 24/7 ops, 1,500 daily security tickets). I design, secure, and productionize sovereign AI models and resilient distributed pipelines.
          </motion.p>

          {/* Projects Button */}
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
