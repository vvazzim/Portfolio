import React, { useState } from "react";
// icons
import {
  FaJs,
  FaReact,
  FaPython,
  FaBrain,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiScikitlearn,
  SiPytorch,
  SiTensorflow,
  SiOpencv,
  SiDocker, 
  SiApacheairflow, 
  SiKubernetes, 
  SiApachekafka, 
  SiPostgresql,
  SiRedis,
  SiFastapi,
  SiLinux, 
  SiGnubash, 
  SiWireshark, 
  SiElasticsearch, 
  SiGitlab,
  SiTypescript,
  SiTailwindcss,
  SiOrcid,
} from "react-icons/si";
import { BsDownload } from "react-icons/bs";

// data
const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Computer Vision & Deep Learning",
        icons: [
          { id: "cv-py", name: "Python", component: <FaPython /> },
          { id: "cv-torch", name: "PyTorch", component: <SiPytorch /> },
          { id: "cv-tf", name: "TensorFlow", component: <SiTensorflow /> },
          { id: "cv-cv", name: "OpenCV", component: <SiOpencv /> },
          { id: "cv-skl", name: "Scikit-Learn", component: <SiScikitlearn /> },
          { id: "cv-brain", name: "Foundation Models & ViT", component: <FaBrain /> },
        ],
      },
      {
        title: "Cybersecurity & SecOps (CERT)",
        icons: [
          { id: "sec-linux", name: "Linux Hardening", component: <SiLinux /> },
          { id: "sec-bash", name: "Bash Scripting", component: <SiGnubash /> },
          { id: "sec-ws", name: "Wireshark Analysis", component: <SiWireshark /> },
          { id: "sec-elastic", name: "Elasticsearch / SIEM", component: <SiElasticsearch /> },
          { id: "sec-gitlab", name: "GitLab SecOps", component: <SiGitlab /> },
        ],
      },
      {
        title: "Cloud, MLOps & Streaming",
        icons: [
          { id: "cld-kafka", name: "Apache Kafka", component: <SiApachekafka /> },
          { id: "cld-airflow", name: "Apache Airflow", component: <SiApacheairflow /> },
          { id: "cld-k8s", name: "Kubernetes", component: <SiKubernetes /> },
          { id: "cld-docker", name: "Docker", component: <SiDocker /> },
          { id: "cld-pg", name: "PostgreSQL", component: <SiPostgresql /> },
          { id: "cld-redis", name: "Redis", component: <SiRedis /> },
        ],
      },
      {
        title: "Full-Stack SaaS & Web",
        icons: [
          { id: "web-ts", name: "TypeScript", component: <SiTypescript /> },
          { id: "web-react", name: "React", component: <FaReact /> },
          { id: "web-next", name: "Next.js", component: <SiNextdotjs /> },
          { id: "web-tw", name: "Tailwind CSS", component: <SiTailwindcss /> },
          { id: "web-fastapi", name: "FastAPI", component: <SiFastapi /> },
          { id: "web-pg", name: "PostgreSQL", component: <SiPostgresql /> },
        ],
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "AI & Software Automation Engineer - CyberForge (VINCI SA)",
        stage: "2026",
      },
      {
        title: "Deep Learning & Computer Vision Researcher (Université Paris Cité)",
        stage: "2024 - 2026",
      },
      {
        title: "Full-Stack Developer & Solutions Architect (Antallis)",
        stage: "2024 - 2025",
      },
    ],
  },
  {
    title: "certifications",
    info: [
      {
        title: "ANSSI SecNumacadémie: Cybersecurity (Certified 96%)",
        stage: "2025",
      },
      {
        title: "Microsoft Certified: Azure Fundamentals (AZ-900)",
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
        title: "Outstanding Academic & Community Contribution Award (Higher Institute of Sciences)",
        stage: "2023",
      },
      {
        title: "Valedictorian / Top of Class (3 consecutive years, HIS University)",
        stage: "2020 - 2023",
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

          {/* Desktop Resume Download & ORCID Buttons */}
          <motion.div
            variants={fadeIn('right', 0.5)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex mb-6 xl:mb-10 justify-start items-center gap-x-4"
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
            <a
              href="https://orcid.org/0009-0009-8513-6962"
              target="_blank"
              rel="noopener noreferrer"
              className="btn rounded-full border border-[#a6ce39]/60 px-5 py-2.5 transition-all duration-300 flex items-center gap-x-2 text-sm font-medium text-[#a6ce39] hover:bg-[#a6ce39]/10 hover:border-[#a6ce39] group cursor-pointer w-fit"
              title="Verified ORCID Researcher Record"
            >
              <SiOrcid className="text-lg" />
              <span>ORCID Record</span>
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

          {/* Mobile Intuitive Segmented Chips (1-tap direct selection, pas d'emoji) */}
          <div className="xl:hidden w-full overflow-x-auto no-scrollbar py-1 mb-4 flex items-center gap-2 justify-start sm:justify-center">
            {aboutData.map((item, itemIndex) => {
              const isActive = index === itemIndex;
              return (
                <button
                  key={itemIndex}
                  type="button"
                  onClick={() => setIndex(itemIndex)}
                  className={`whitespace-nowrap px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer border shrink-0 ${
                    isActive
                      ? "bg-accent text-white border-accent shadow-md shadow-accent/25 font-semibold"
                      : "bg-white/[0.05] text-white/75 border-white/10 hover:bg-white/[0.1] hover:text-white"
                  }`}
                >
                  <span className="capitalize">{item.title}</span>
                </button>
              );
            })}
          </div>

          {/* Tab Content List */}
          <div className="py-2 xl:py-6 flex flex-col gap-y-3 xl:gap-y-4 items-center xl:items-start overflow-y-auto max-h-[380px] pr-2 w-full">
            {aboutData[index].info.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className="flex-1 flex flex-col md:flex-row max-w-max gap-x-3 items-center text-white/75"
              >
                {/* Title */}
                <div className="font-light text-white text-sm sm:text-base mb-1 md:mb-0 text-center md:text-left">
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
                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-2.5 sm:gap-x-3.5 mt-1.5 md:mt-0 text-white/80">
                    {item.icons.map((iconObj) => (
                      <div
                        key={iconObj.id}
                        title={iconObj.name || ""}
                        className="text-xl sm:text-2xl text-white/80 hover:text-accent hover:scale-110 transition-all cursor-pointer flex items-center justify-center"
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

        {/* Mobile Resume Download Button (placed below interactive sections on mobile) */}
        <motion.div
          variants={fadeIn('up', 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex xl:hidden my-4 justify-center w-full"
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
      </div>
    </div>
  );
};

export default About;
