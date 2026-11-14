import React, { useState } from "react";
// icons
import {
  FaJs,
  FaReact,
  FaPython,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiScikitlearn,
  SiPytorch,
  SiTensorflow,
  SiDocker, 
  SiApacheairflow, SiKubernetes, SiApachekafka, SiPostgresql,
  SiFastapi,
  SiLinux, SiStreamlit, SiGitlab
} from "react-icons/si";
import { FaBrain } from "react-icons/fa";
import { BsDownload } from "react-icons/bs";

// data
const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Computer Vision & Deep Learning",
        icons: [
          { id: 11, component: <FaPython /> },
          { id: 12, component: <SiPytorch /> },
          { id: 13, component: <SiTensorflow /> },
          { id: 14, component: <SiScikitlearn /> },
          { id: 16, component: <FaBrain title="Vision Transformers & CNN" /> },
        ],
      },
      {
        title: "Cybersecurity & SecOps (CERT)",
        icons: [
          { id: 15, component: <SiFastapi /> },
          { id: 19, component: <SiLinux /> },
          { id: 20, component: <SiStreamlit /> },
          { id: 21, component: <SiGitlab /> },
        ],
      },
      {
        title: "Cloud, MLOps & Streaming",
        icons: [
          { id: 6, component: <SiApacheairflow /> },
          { id: 7, component: <SiApachekafka /> },
          { id: 8, component: <SiDocker /> },
          { id: 9, component: <SiKubernetes /> },
          { id: 10, component: <SiPostgresql /> },
        ],
      },
      {
        title: "Full-Stack SaaS & Web",
        icons: [
          { id: 3, component: <FaJs /> },
          { id: 4, component: <FaReact /> },
          { id: 5, component: <SiNextdotjs /> },
          { id: 15, component: <SiFastapi /> },
          { id: 10, component: <SiPostgresql /> },
        ],
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "AI & Cybersecurity Automation Engineer — VINCI SA (CERT VINCI)",
        stage: "2026 - Present",
      },
      {
        title: "Deep Learning & Computational Vision Researcher — Université Paris Cité",
        stage: "2024 - 2026",
      },
      {
        title: "Full-Stack Developer & IAM Access Rights Consultant — Antallis",
        stage: "2024 - 2025",
      },
    ],
  },
  {
    title: "certifications",
    info: [
      {
        title: "Microsoft Certified: DevOps Engineer Expert (AZ-400)",
        stage: "2025",
      },
      {
        title: "ANSSI SecNumacadémie — Cybersecurity (Certified 96%)",
        stage: "2025",
      },
      {
        title: "Microsoft Certified: Azure Fundamentals (AZ-900)",
        stage: "2025",
      },
      {
        title: "CNIL — Data Protection & GDPR Compliance",
        stage: "2025",
      },
    ],
  },
  {
    title: "education",
    info: [
      {
        title: "M.Sc. Research — Vision & Intelligent Machines, Université Paris Cité",
        stage: "2024 - 2026",
      },
      {
        title: "B.Sc. — Computer Science & Applications, Université Paris Cité",
        stage: "2023 - 2024",
      },
      {
        title: "B.Sc. — Information Systems, HIS University",
        stage: "2020 - 2023",
      },
      {
        title: "Full-Stack JS Web Development — GoMyCode",
        stage: "2022",
      },
    ],
  },
  {
    title: "awards",
    info: [
      {
        title: "Valedictorian / Top of Class (3 consecutive years) — HIS University",
        stage: "2020 - 2023",
      },
      {
        title: "Outstanding Engineering Contribution Award",
        stage: "2022",
      },
      {
        title: "Honorary Member — University Technology Club",
        stage: "2021",
      },
    ],
  },
];

// components
import Circles from "../../components/Circles";

// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

// counters
import CountUp from "react-countup";

const About = () => {
  const [index, setIndex] = useState(0);
  return (
      <div className={"min-h-screen xl:h-full bg-primary/30 pt-36 xl:pt-44 pb-16 text-center xl:text-left overflow-y-auto xl:overflow-hidden relative"}>
        <Circles />
        <div className={"container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-8 px-4 xl:px-8"}>
          {/* text */}
          <div className={'flex-1 flex flex-col justify-center xl:pt-4'}>
            <motion.h2
              variants={fadeIn('right', 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="text-3xl xl:text-4xl 2xl:text-5xl font-bold leading-tight !mb-4 tracking-tight"
            > 
              Engineering <span className="text-accent">Robust AI Systems</span> for Critical Environments.
            </motion.h2>
            <motion.p
              variants={fadeIn('right', 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="max-w-xl xl:max-w-2xl mx-auto xl:mx-0 mb-4 xl:mb-6 px-1 xl:px-0 text-white/80 leading-relaxed font-light text-sm sm:text-base"
            >
              Graduate of the M.Sc. Research in Vision & Machine Intelligence (Université Paris Cité), operating in production at VINCI SA (CERT VINCI, 24/7 operations).
              Holding dual certifications as Azure DevOps Expert (AZ-400) and ANSSI SecNumacadémie (96%), I bridge academic Deep Learning R&D with defense-grade software engineering to deploy sovereign, verifiable, and scalable systems.
            </motion.p>

            {/* Resume Download Button */}
            <motion.div
              variants={fadeIn('right', 0.5)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-6 xl:mb-8 flex justify-center xl:justify-start"
            >
              <a
                href="/CV_Wassim_CHIKHI.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn rounded-full border border-white/50 px-6 py-2 transition-all duration-300 flex items-center gap-x-2 text-sm font-medium hover:border-accent hover:text-accent group"
              >
                <BsDownload className="text-base group-hover:translate-y-0.5 transition-transform" />
                <span>Download Resume (PDF)</span>
              </a>
            </motion.div>

            {/* counters */}
            <motion.div
                variants={fadeIn("right", 0.6)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className={'hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8'}
            >
              <div className={'flex flex-1 xl:gap-x-6'}>
                {/* experience */}
                <div className={'relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'}>
                  <div className={'text-2xl xl:text-4xl font-extrabold text-accent mb-2'}>
                    <CountUp start={0} end={4} duration={3}/>+
                  </div>
                  <div className={'text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'}>Years of Experience</div>
                </div>
                {/* audits */}
                <div className={'relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'}>
                  <div className={'text-2xl xl:text-4xl font-extrabold text-accent mb-2'}>
                    <CountUp start={0} end={25} duration={3}/>+
                  </div>
                  <div className={'text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'}>Audits & Projects</div>
                </div>

                {/* deployments */}
                <div className={'relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'}>
                  <div className={'text-2xl xl:text-4xl font-extrabold text-accent mb-2'}>
                    <CountUp start={0} end={35} duration={3}/>+
                  </div>
                  <div className={'text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'}>Deployments Done</div>
                </div>
                {/* awards */}
                <div className={'relative flex-1'}>
                  <div className={'text-2xl xl:text-4xl font-extrabold text-accent mb-2'}>
                    <CountUp start={0} end={2} duration={3}/>
                  </div>
                  <div className={'text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'}>Excellence Awards</div>
                </div>
              </div>
            </motion.div>
          </div>
          {/* info tabs */}
          <motion.div
              variants={fadeIn("left", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className={'flex flex-col w-full xl:max-w-[48%] h-[480px]'}
          >
            <div className={'flex flex-wrap gap-x-4 xl:gap-x-6 mx-auto xl:mx-0 mb-4'}>
              {aboutData.map((item, itemIndex) => (
                  <div
                      key={itemIndex}
                      className={`${
                        index === itemIndex ? "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300" : ""
                      } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:bottom-1 after:left-0 pb-1`}
                      onClick={() => setIndex(itemIndex)}
                  >
                    {item.title}
                  </div>
              ))}
            </div>
            <div className={'py-2 xl:py-6 flex flex-col gap-y-3 xl:gap-y-4 items-center xl:items-start overflow-y-auto max-h-[380px] pr-2'}>
              {aboutData[index].info.map((item, itemIndex) => (
                  <div
                      key={itemIndex}
                      className={'flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/70'}
                  >
                    {/* title */}
                    <div className={'font-light mb-1 md:mb-0 text-white'}>{item.title}</div>
                    <div className={'hidden md:flex text-accent'}>•</div>
                    <div className={'text-xs text-accent/90 font-medium'}>{item.stage}</div>
                    <div className={'flex gap-x-4'}>
                      {/* icons */}
                      {item.icons?.map((iconObj) => (
                          <div key={iconObj.id} className={'text-2xl text-white hover:text-accent transition-colors'}>{iconObj.component}</div>
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
