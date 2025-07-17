import React, { useState } from "react";
// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaPython,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiFramer,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiMongodb,
  SiScikitlearn,
  SiPytorch,
  SiTensorflow,
  SiDocker, 
  SiApacheairflow, SiKubernetes, SiApachekafka, SiPostgresql, SiHuggingface,
  SiFastapi
} from "react-icons/si";
import { FaBrain } from "react-icons/fa";

// data
const aboutData = [
  
  {title: "skills",
    info: [
  {
    title: "Web Development",
    icons: [
      { id: 1, component: <FaHtml5 /> },
      { id: 2, component: <FaCss3 /> },
      { id: 3, component: <FaJs /> },
      { id: 4, component: <FaReact /> },
      { id: 5, component: <SiNextdotjs /> },
      { id: 6, component: <SiFramer /> },
      { id: 7, component: <FaWordpress /> },
      { id: 8, component: <SiMongodb /> },
      { id: 9, component: <FaPython /> },
    ],
  },
  {
        title: "Cloud & Engineering",
        icons: [
          { id: 6, component: <SiApacheairflow /> },
          { id: 7, component: <SiApachekafka /> },
          { id: 8, component: <SiDocker /> },
          { id: 9, component: <SiKubernetes /> },
          { id: 10, component: <SiPostgresql /> },
        ],
      },
      {
        title: "Data & AI",
        icons: [
          { id: 11, component: <FaHtml5 /> },
          { id: 12, component: <FaCss3 /> },
          { id: 13, component: <FaJs /> },
          { id: 14, component: <FaReact /> },
          { id: 15, component: <SiNextdotjs /> },
          { id: 16, component: <SiFastapi /> },
          { id: 17, component: <SiMongodb /> },
          { id: 10, component: <FaBrain title="NLP" /> },
        ],
      },
]},
  {
    title: "awards",
    info: [
      {
        title: "Top of the Class – 3 years in a row, HIS University",
        stage: "2020 – 2023",
      },
      {
        title: "Recognition for Outstanding Contribution – Marketing Department",
        stage: "2022",
      },
      {
        title: "Honorary Member – HIS Technology Club",
        stage: "2021",
      }
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "Data & Cloud Engineering Intern – Sonatrach",
        stage: "2024 – 2025",
      },
      {
        title: "Full-Stack Web Developer – Antallis Agency",
        stage: "2022 – 2023",
      },
    ],
  },
  {
    title: "credentials",
    info: [
        {
        title: "Master – Vision & Machines Intelligentes, Université Paris Cité",
        stage: "2024 – 2026",
      },{
        title: "Bachelor – Informatique & Applications, Université Paris Cité",
        stage: "2023 – 2024",
      },
      {
        title: "Bachelor – Information Systems, HIS University, Algiers",
        stage: "2020 – 2023",
      },
      {
        title: "Full-Stack JS Web Development - GoMyCode, Tunis, Tunisia",
        stage: "2022",
      },
      {
        title: "Business Management – ECF Montréal, Canada",
        stage: "2020",
      },
      
    ],
  },
];

// components
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";

// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

// counters
import CountUp from "react-countup";

const About = () => {
  const [index, setIndex] = useState(0);
  console.log(index);
  return (
      <div className={"h-full bg-primary/30 py-32 text-center xl:text-left"}>
        <Circles />
        {/* Avatar */}
        <motion.div
            variants={fadeIn("right", 0.2)}
            initial={"hidden"}
            animate={"show"}
            exit={"hidden"}
            className={"hidden xl:flex absolute bottom-0 -left-[370px]"}
        >
          {/*<Avatar />*/}
        </motion.div>
        <div className={"container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6"}>
          {/* text */}
          <div className={'flex-1 flex flex-col justify-center'}>
          <motion.h2 className="h2"> 
            Turning <span className="text-accent">Data & AI</span> into real-world solutions.
          </motion.h2>
            <motion.p className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0">
              I'm Wassim CHIKHI, a Master's student in Vision & AI at Université Paris Cité.  
              I specialize in Data Engineering, Machine Learning and Computer Vision, and I love turning ideas into intelligent systems.  
              Currently seeking a 1-year apprenticeship (Sept. 2025) in Data/AI, cloud, or vision-related projects.
            </motion.p>
            {/* counters */}
            <motion.div
                variants={fadeIn("right", 0.6)}
                initial={"hidden"}
                animate={"show"}
                exit={"hidden"}
                className={'hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8'}
            >
              <div className={'flex flex-1 xl:gap-x-6'}>
                {/* experience */}
                <div className={'relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute' +
                ' after:top-0 after:right-0'}>
                  <div className={'text-2xl xl:text-4xl font-extrabold text-accent mb-2'}>
                    <CountUp start={0} end={4} duration={5}/>+
                  </div>
                  <div className={'text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'}>Years of experience</div>
                </div>
                {/* clients */}
                <div className={'relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute' +
                ' after:top-0 after:right-0'}>
                  <div className={'text-2xl xl:text-4xl font-extrabold text-accent mb-2'}>
                    <CountUp start={0} end={25} duration={5}/>+
                  </div>
                  <div className={'text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'}>Satisfied clients</div>
                </div>

                {/* projects */}
                <div className={'relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute' +
                ' after:top-0 after:right-0'}>
                  <div className={'text-2xl xl:text-4xl font-extrabold text-accent mb-2'}>
                    <CountUp start={0} end={35} duration={5}/>+
                  </div>
                  <div className={'text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'}>Finished projects</div>
                </div>
                {/* awards */}
                <div className={'relative flex-1'}>
                  <div className={'text-2xl xl:text-4xl font-extrabold text-accent mb-2'}>
                    <CountUp start={0} end={2} duration={5}/>+
                  </div>
                  <div className={'text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'}>Winning awards</div>
                </div>
              </div>
            </motion.div>
          </div>
          {/* info */}
          <motion.div
              variants={fadeIn("left", 0.4)}
              initial={"hidden"}
              animate={"show"}
              exit={"hidden"}
              className={'flex flex-col w-full xl:max-w-[48%] h-[480px]'}
          >
            <div className={'flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4'}>
              {aboutData.map((item, itemIndex) => (
                  <div
                      key={itemIndex}
                      className={`${
                          index === itemIndex ? "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300" : ""
                      } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:bottom-1 after:left-0`}
                      onClick={() => setIndex(itemIndex)}
                  >
                    {item.title}
                  </div>
              ))}
            </div>
            <div className={'py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start'}>
              {aboutData[index].info.map((item, itemIndex) => (
                  <div
                      key={itemIndex}
                      className={'flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60'}
                  >
                    {/* title */}
                    <div className={'font-light mb-2 md:mb-0'}>{item.title}</div>
                    <div className={'hidden md:flex'}>-</div>
                    <div>{item.stage}</div>
                    <div className={'flex gap-x-4'}>
                      {/* icons */}
                      {item.icons?.map((iconObj) => (
                          <div key={iconObj.id} className={'text-2xl text-white'}>{iconObj.component}</div>
                      ))}
                    </div>
                  </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
  );
};

export default About;
