import React from 'react';
import ServiceSlider from '../../components/ServiceSlider';
import Circles from '../../components/Circles';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

const Services = () => {
  return (
    <div className="min-h-screen xl:h-full bg-primary/30 pt-20 sm:pt-28 xl:pt-0 pb-28 sm:pb-32 xl:pb-0 flex items-center overflow-y-auto xl:overflow-hidden relative">
      <Circles />
      <div className="container mx-auto px-4 xl:px-8">
        <div className="flex flex-col xl:flex-row gap-x-8 items-center justify-between">
          {/* Text */}
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-6 xl:mb-0">
            <motion.h2
              variants={fadeIn('up', 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 xl:mt-8 tracking-tight text-3xl sm:text-4xl xl:text-5xl"
            >
              Expertise <span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn('up', 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 max-w-[420px] mx-auto lg:mx-0 text-white/80 font-light text-xs sm:text-sm md:text-base leading-relaxed"
            >
              From applied Deep Learning research to 24/7 production engineering (CERT VINCI).  
              I architect resilient event-driven data streaming pipelines, sovereign foundational models, and high-concurrency cloud architectures.
            </motion.p>
          </div>
          {/* Slider */}
          <motion.div
            variants={fadeIn('down', 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%]"
          >
            <ServiceSlider />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Services;
