// Import icons (assuming you have icons to import)
import { FaReact } from 'react-icons/fa';  // Example icon import

// Service data
export const serviceData = [];

// Components
import ServiceSlider from '../../components/ServiceSlider';
import Circles from '../../components/Circles';

// Framer Motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import React from 'react';

const Services = () => {
  return (
      <div className="h-full bg-primary/30 py-36 flex items-center">
        <Circles />
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row gap-x-8">
            {/* Text */}
            <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
              <motion.h2
                  variants={fadeIn('up', 0.2)}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="h2 xl:mt-8"
              >
                My services <span className="text-accent">.</span>
              </motion.h2>
              <motion.p
                  variants={fadeIn('up', 0.4)}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="mb-4 max-w-[400px] mx-auto lg:mx-0"
              >
                  I provide technical solutions in Data Engineering, AI and Software Development.  
                From building scalable data pipelines to deploying intelligent models and full-stack platforms,  
                my goal is to turn data into value and ideas into robust systems.
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
        <Circles />
      </div>
  );
};

export default Services;
