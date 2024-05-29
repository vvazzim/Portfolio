//icons
import{} from 'react-icons/rx';

//service data
export const serviceData = [];
// ocmponenrs
import ServiceSlider from '../../components/ServiceSlider';
import Bulb from '../../components/Circles';
import Circles from '../../components/Circles';

//framer motion
import {motion}  from 'framer-motion'
import {fadeIn} from '../../variants'
import React from "react";


const Services = () => {
  return( <div className={'h-full bg-primary/30 py-36 flex items-center'}>
    <Circles />
    <div className='container mx-auto'>
      <div className={'flex flex-col xl:flex-row gap-x-8'}>
        {/* text */}
        <div className={'text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0 '}>
          <motion.h2 variant={fadeIn('up',0.3)} initial='hidden' animate='show' exit='hidden' className={'h2 xl:mt-8'}>My services <span  className={'text-accent'}>.</span>
          </motion.h2>
          <motion.p className={'mb-4 max-w-[400px] mx-auto lg:mx-0'}>
            lorem*2
          </motion.p>
        </div>
        <div className={'w-full xl:max-w-[65%]'}>
        {/*slider*/}
          <ServiceSlider/>
        </div>
      </div>
    </div>
    <Bulb/>
  </div>
  );
};

export default Services;
