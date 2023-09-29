//next image
import Image from 'next/image';

//components
import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from '../components/ProjectsBtn';
import Avatar from '../components/Avatar';

//framer motion
import {motion} from 'framer-motion'

//variants
import {fadeIn} from '../variants';
import React from "react";

const Home = () => {
  return(
  <div className={'bg-primary/60 h-full'}>
    {/*text*/}
    <div className={'w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10'}>
      <div className={'text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto'}>
        {/*title*/}
        <motion.h1 variants={fadeIn('down', 0.2)}
                   initial={'hidden'}
                   animate={'show'}
                   exit={'hidden'}
                   className={'h1'}>
          Transforming Ideas <br/> Into{''}
          <span className={'text-accent'}>Digital Reality</span>
        </motion.h1>
        {/*subtitle*/}
        <motion.p variants={fadeIn('down', 0.3)}
                  initial={'hidden'}
                  animate={'show'}
                  exit={'hidden'}
                  className={'max-w-sm xl:max-w-xl mw-auto xl:mx-0 mb-10 xl:mb-16'}>
          L'erreur que vous obtenez, "SyntaxError: Cannot use import statement outside a
          module", indique que Node.js n'accepte pas les instructions d'importation dans
          un fichier qui n'est pas un module ES6. Pour résoudre ce problème, vous devez
          indiquer explicitement à Node.js que votre fichier est un module ES6 en
          utilisant l'extension .mjs pour votre fichier principal, ou en configurant
          votre projet pour utiliser ES6 modules.
        </motion.p>

        {/*btn*/}
        <div className={'flex justify-center xl:hidden relative'}>
          <ProjectsBtn/>
        </div>
        <motion.div variants={fadeIn('down', 0.4)}
                    initial={'hidden'}
                    animate={'show'}
                    exit={'hidden'}
                    className={'hidden xl:flex'}
        >
          <ProjectsBtn/>
        </motion.div>
      </div>
    </div>
    {/*image*/}
    <div className={'w-[1200px] h-full absolute right-0 bottom-0'}>
      {/*bg img*/}
      <div className={'bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0'}> </div>

      {/*Particles*/}
      <div>Particles</div>

      {/*Avatar*/}
      <motion.div variants={fadeIn('up', 0.5)}
           initial={'hidden'}
           animate={'show'}
           exit={'hidden'}
                  transition={{duration: 1, ease: 'easeInOut'}}
           className={'w-full h-full max-w-[737px] max-h-[678px] absolute bottom-32 lg:bottom-0 lg:right-[8%]'}>
        <Avatar/>
      </motion.div>

    </div>
  </div>)
};

export default Home;
