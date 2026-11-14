import React from 'react';
import ServiceSlider from '../../components/ServiceSlider';
import Circles from '../../components/Circles';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

const Services = () => {
  return (
    <div className="h-full bg-primary/30 py-36 flex items-center">
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
              className="h2 xl:mt-8 tracking-tight"
            >
              Expertises <span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn('up', 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 max-w-[420px] mx-auto lg:mx-0 text-white/80 font-light text-sm sm:text-base leading-relaxed"
            >
              De la recherche appliquée en Deep Learning à l'industrialisation en environnement critique (CERT VINCI, production 24/7).  
              Je conçois des pipelines de données résilients, des modèles de fondation souverains et des plateformes logicielles haute performance.
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
