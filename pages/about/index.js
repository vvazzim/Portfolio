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
        title: "AI & Cybersecurity Automation Engineer (CERT VINCI SA)",
        stage: "2026 - Present",
      },
      {
        title: "Deep Learning & Computer Vision Researcher (Université Paris Cité)",
        stage: "2024 - 2026",
      },
      {
        title: "Full-Stack Developer & IAM Access Rights Consultant (Antallis)",
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
        title: "ANSSI SecNumacadémie: Cybersecurity (Certified 96%)",
        stage: "2025",
      },
      {
        title: "Enterprise Management & Strategy (ECF Montréal)",
        stage: "2024",
      },
      {
        title: "CNIL: Data Protection & GDPR Compliance (RGPD)",
        stage: "2025",
      },
      {
        title: "Microsoft Certified: Azure Fundamentals (AZ-900)",
        stage: "2025",
      },
    ],
  },
  {
    title: "education",
    info: [
      {
        title: "M.Sc. Research in Vision & Machine Intelligence (Université Paris Cité)",
        stage: "2024 - 2026",
      },
      {
        title: "B.Sc. in Computer Science & Applications (Université Paris Cité)",
        stage: "2023 - 2024",
      },
      {
        title: "B.Sc. in Information Systems (HIS University)",
        stage: "2020 - 2023",
      },
      {
        title: "Full-Stack JS Web Development (GoMyCode)",
        stage: "2022",
      },
    ],
  },
  {
    title: "awards",
    info: [
      {
        title: "Valedictorian / Top of Class (3 consecutive years, HIS University)",
        stage: "2020 - 2023",
      },
      {
        title: "Outstanding Engineering Contribution Award",
        stage: "2022",
      },
      {
        title: "Honorary Member (University Technology Club)",
        stage: "2021",
      },
    ],
  },
];

// components
import Circles from "../../components/Circles";

// framer motion
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn } from "../../variants";

// counters
import CountUp from "react-countup";

const About = () => {
  const [index, setIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen xl:h-full bg-primary/30 pt-20 sm:pt-28 xl:pt-40 pb-28 sm:pb-32 xl:pb-16 text-center xl:text-left overflow-y-auto xl:overflow-hidden relative">
      <Circles />
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-8 px-4 xl:px-8">
        {/* Left Column : Title, Bio, Resume button, Counters */}
        <div className="flex-1 flex flex-col justify-center xl:pt-4">
          <motion.h2
            variants={fadeIn('right', 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-[22px] sm:text-[34px] md:text-[38px] xl:text-[42px] leading-[1.2] font-bold tracking-tight !mb-4"
          >
            <span className="block whitespace-nowrap">Transforming Data & AI</span>
            <span className="block whitespace-nowrap text-accent">into Critical Systems.</span>
          </motion.h2>

          <motion.p
            variants={fadeIn('right', 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-xl xl:max-w-2xl mx-auto xl:mx-0 mb-6 xl:mb-8 px-1 xl:px-0 text-white/80 leading-relaxed font-light text-sm sm:text-base"
          >
            Holding an M.Sc. Research in Computer Vision from{' '}
            <span className="text-white font-medium">Université Paris Cité</span> and certified in Business Management (
            <span className="text-emerald-400 font-medium">ECF Montréal</span>), I bridge foundational AI research with resilient production engineering.
            <br className="hidden sm:inline" />
            From WSI cancer cell segmentation to distributed Kafka streaming and IAM governance, I build verifiable, fault-tolerant architectures engineered for high-security environments.
          </motion.p>

          {/* Resume Download Button with Hand Cursor */}
          <motion.div
            variants={fadeIn('right', 0.5)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mb-6 xl:mb-10 flex justify-center xl:justify-start"
          >
            <a
              href="/CV_Wassim_CHIKHI.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn rounded-full border border-white/50 px-6 py-2.5 transition-all duration-300 flex items-center gap-x-2 text-sm font-medium hover:border-accent hover:text-accent group cursor-pointer w-fit"
            >
              <BsDownload className="text-base group-hover:translate-y-0.5 transition-transform" />
              <span>Download Resume (PDF)</span>
            </a>
          </motion.div>

          {/* Counters */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              {/* experience */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={4} duration={3} />+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Years of Experience
                </div>
              </div>

              {/* audits */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={25} duration={3} />+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Audits & Projects
                </div>
              </div>

              {/* deployments */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={35} duration={3} />+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Deployments Done
                </div>
              </div>

              {/* awards */}
              <div className="relative flex-1">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={2} duration={3} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Excellence Awards
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Column : Interactive Tabs with pointer cursor and strategic accents */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-auto xl:h-[480px] mb-8 xl:mb-0"
        >
          {/* Desktop Tab Navigation (shown on desktop only) */}
          <div className="hidden xl:flex gap-x-6 mx-0 mb-4">
            {aboutData.map((item, itemIndex) => (
              <button
                key={itemIndex}
                type="button"
                className={`${
                  index === itemIndex
                    ? "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                    : "text-white/70 hover:text-white"
                } cursor-pointer capitalize text-lg relative after:w-8 after:h-[2px] after:bg-white/20 after:absolute after:bottom-1 after:left-0 pb-1.5 transition-colors font-medium`}
                onClick={() => setIndex(itemIndex)}
              >
                {item.title}
              </button>
            ))}
          </div>

          {/* Mobile Selector Pill (rabattu par défaut sur mobile) */}
          <div className="xl:hidden w-full flex justify-center mb-4">
            <button
              type="button"
              onClick={() => setIsMenuOpen(true)}
              className="flex items-center justify-between gap-x-3 px-5 py-2 rounded-full bg-white/[0.08] hover:bg-white/[0.14] border border-white/20 hover:border-accent text-white text-xs sm:text-sm font-medium backdrop-blur-md transition-all shadow-lg cursor-pointer"
            >
              <div className="flex items-center gap-x-2">
                <span className="text-white/60 uppercase tracking-wider text-[10px] sm:text-xs">Section :</span>
                <span className="text-accent font-semibold capitalize">{aboutData[index].title}</span>
              </div>
              <span className="text-[11px] bg-accent/20 text-white border border-accent/40 px-2.5 py-0.5 rounded-full font-normal">
                Changer ▾
              </span>
            </button>
          </div>

          {/* Mobile Section Menu (Popup floutant l'arrière-plan) */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsMenuOpen(false)}
                className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md xl:hidden cursor-pointer"
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0, y: 15 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  exit={{ scale: 0.9, opacity: 0, y: 15 }}
                  transition={{ duration: 0.2 }}
                  onClick={(e) => e.stopPropagation()}
                  className="w-full max-w-[320px] bg-[#16122b]/95 border border-white/20 rounded-2xl p-5 shadow-2xl backdrop-blur-xl flex flex-col gap-y-3 cursor-default"
                >
                  <div className="flex items-center justify-between pb-3 border-b border-white/10">
                    <span className="text-xs font-semibold text-white uppercase tracking-wider">
                      Choisir une section
                    </span>
                    <button
                      type="button"
                      onClick={() => setIsMenuOpen(false)}
                      className="text-white/60 hover:text-white text-base px-2 py-1 cursor-pointer"
                    >
                      ✕
                    </button>
                  </div>

                  <div className="flex flex-col gap-y-2 pt-1">
                    {aboutData.map((item, itemIndex) => {
                      const isCurrent = index === itemIndex;
                      return (
                        <button
                          key={itemIndex}
                          type="button"
                          onClick={() => {
                            setIndex(itemIndex);
                            setIsMenuOpen(false);
                          }}
                          className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-left text-sm font-medium transition-all cursor-pointer ${
                            isCurrent
                              ? 'bg-accent text-white font-semibold shadow-md shadow-accent/30'
                              : 'bg-white/[0.05] hover:bg-white/[0.1] text-white/80 hover:text-white border border-white/10'
                          }`}
                        >
                          <span className="capitalize">{item.title}</span>
                          {isCurrent && (
                            <span className="text-[10px] bg-black/30 px-2 py-0.5 rounded-full uppercase tracking-wider">
                              Actif
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Tab Content List */}
          <div className="py-2 xl:py-6 flex flex-col gap-y-3 xl:gap-y-4 items-center xl:items-start overflow-y-auto max-h-[380px] pr-2">
            {aboutData[index].info.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className="flex-1 flex flex-col md:flex-row max-w-max gap-x-3 items-center text-white/75"
              >
                {/* Title */}
                <div className="font-light text-white text-sm sm:text-base mb-1 md:mb-0">
                  {item.title}
                </div>
                <div className="hidden md:flex text-accent">•</div>
                {/* Stage / Date Tag */}
                {item.stage && (
                  <div className="text-xs font-mono font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-2 py-0.5 rounded-md shrink-0">
                    {item.stage}
                  </div>
                )}
                {/* Icons */}
                {item.icons && (
                  <div className="flex gap-x-3 mt-1 md:mt-0">
                    {item.icons.map((iconObj) => (
                      <div
                        key={iconObj.id}
                        className="text-2xl text-white/80 hover:text-accent hover:scale-110 transition-all cursor-pointer"
                      >
                        {iconObj.component}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
