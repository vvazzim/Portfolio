// Import icons (assuming you have icons to import)
import { FaReact } from 'react-icons/fa';  // Example icon import

// Service data
export const serviceData = [];

// Components
import WorkSlider from '../../components/WorkSlider';
import Circles from '../../components/Circles';

// Framer Motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import React from 'react';

const Work = () => {
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
                  className="h2 xl:mt-12"
              >
                My work <span className="text-accent">.</span>
              </motion.h2>
              <motion.p
                  variants={fadeIn('up', 0.4)}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="mb-4 max-w-[400px] mx-auto lg:mx-0"
              >
                  I take pride in delivering high-quality projects that drive results and exceed client expectations. Below is a selection of my work, demonstrating my expertise in branding, design, development, copywriting, and SEO. Each project reflects my commitment to excellence and my passion for helping businesses succeed.
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
              <WorkSlider />
            </motion.div>
          </div>
        </div>
        <Circles />
      </div>
  );
};

export default Work;
