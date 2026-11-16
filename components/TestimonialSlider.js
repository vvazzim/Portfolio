// testimonial data
export const testimonialSlider = [
  {
    id: 'cyber',
    name: "B. H.",
    position: "Group Cybersecurity Director, VINCI",
    message: "Wassim made decisive contributions to modernizing and automating phishing response at CERT VINCI, delivering 10 analysis modules, 213 automated tests (88% code coverage), and successful production deployment. His rigor, curiosity, and software architecture maturity are outstanding.",
  },
  {
    id: 'bio',
    name: "Besma Khoualdia",
    position: "PhD, AI for Oncology",
    message: "His work on histology image classification was rigorous, well documented and aligned with real research goals.",
  },
  {
    id: 'vision',
    name: "Nicolas Lomenie",
    position: "Professor, Université Paris Cité",
    message: "Wassim actively contributed to a medical imaging research project and showed great autonomy and technical understanding.",
  },
  {
    id: 'saas',
    name: "Zoé Legrand",
    position: "CEO, Antallis",
    message: "Wassim's development skills are top-notch. He built a robust and user-friendly website for us that has significantly improved our online presence. His attention to detail and commitment to excellence are evident in every aspect of his work.",
  },
  {
    id: 'ml',
    name: "Akram C.",
    position: "ML / AI Engineer, Arval BNP Paribas",
    message: "I worked with Wassim on various data science and engineering projects. He has an outstanding balance of theoretical knowledge and practical technical skills, making him highly effective at solving complex problems.",
  },
];

// data
import React from "react";

//import swiper react components
import {Swiper, SwiperSlide} from 'swiper/react';

//import swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// icons
import {FaQuoteLeft} from "react-icons/fa";

//import required modules
import {Navigation, Pagination} from "swiper";

// Custom geometric vector figures ensuring anonymity & tech aesthetic
const TestimonialFigure = ({ id }) => {
  switch (id) {
    case 'cyber':
      return (
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[84px] h-[84px] sm:w-[94px] sm:h-[94px] drop-shadow-[0_0_18px_rgba(241,48,36,0.38)]">
          <defs>
            <linearGradient id="cyberBg" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#220910" />
              <stop offset="100%" stopColor="#0d0512" />
            </linearGradient>
            <linearGradient id="cyberGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F13024" />
              <stop offset="100%" stopColor="#FF6B6B" />
            </linearGradient>
          </defs>
          <circle cx="50" cy="50" r="47" fill="url(#cyberBg)" stroke="#F13024" strokeWidth="1.5" strokeDasharray="4 2" />
          <circle cx="50" cy="50" r="41" stroke="#F13024" strokeWidth="0.8" strokeOpacity="0.4" />
          <path d="M50 22 L68 30 V46 C68 57 50 67 50 67 C50 67 32 57 32 46 V30 L50 22 Z" fill="#F13024" fillOpacity="0.18" stroke="url(#cyberGlow)" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M50 34 V42 M44 42 H56 V54 H44 Z" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="50" cy="48" r="2" fill="#F13024" />
          <line x1="50" y1="7" x2="50" y2="13" stroke="#F13024" strokeWidth="1.5" />
          <line x1="50" y1="87" x2="50" y2="93" stroke="#F13024" strokeWidth="1.5" />
          <line x1="7" y1="50" x2="13" y2="50" stroke="#F13024" strokeWidth="1.5" />
          <line x1="87" y1="50" x2="93" y2="50" stroke="#F13024" strokeWidth="1.5" />
        </svg>
      );
    case 'bio':
      return (
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[84px] h-[84px] sm:w-[94px] sm:h-[94px] drop-shadow-[0_0_18px_rgba(16,185,129,0.38)]">
          <defs>
            <linearGradient id="bioBg" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#081c15" />
              <stop offset="100%" stopColor="#030c08" />
            </linearGradient>
            <linearGradient id="bioGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10B981" />
              <stop offset="100%" stopColor="#34D399" />
            </linearGradient>
          </defs>
          <circle cx="50" cy="50" r="47" fill="url(#bioBg)" stroke="#10B981" strokeWidth="1.5" strokeDasharray="3 3" />
          <circle cx="50" cy="50" r="41" stroke="#10B981" strokeWidth="0.8" strokeOpacity="0.4" />
          <path d="M34 33 Q50 43 66 33 M34 50 Q50 50 66 50 M34 67 Q50 57 66 67" stroke="url(#bioGlow)" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="42" y1="36" x2="42" y2="64" stroke="#10B981" strokeWidth="1" strokeDasharray="2 2" />
          <line x1="58" y1="36" x2="58" y2="64" stroke="#10B981" strokeWidth="1" strokeDasharray="2 2" />
          <circle cx="50" cy="50" r="5" fill="#10B981" fillOpacity="0.25" stroke="#FFFFFF" strokeWidth="1.2" />
          <circle cx="34" cy="33" r="3" fill="#10B981" />
          <circle cx="66" cy="33" r="3" fill="#34D399" />
          <circle cx="34" cy="67" r="3" fill="#34D399" />
          <circle cx="66" cy="67" r="3" fill="#10B981" />
        </svg>
      );
    case 'vision':
      return (
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[84px] h-[84px] sm:w-[94px] sm:h-[94px] drop-shadow-[0_0_18px_rgba(139,92,246,0.38)]">
          <defs>
            <linearGradient id="visionBg" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#180e2b" />
              <stop offset="100%" stopColor="#0a0514" />
            </linearGradient>
            <linearGradient id="visionGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#C084FC" />
            </linearGradient>
          </defs>
          <circle cx="50" cy="50" r="47" fill="url(#visionBg)" stroke="#8B5CF6" strokeWidth="1.5" strokeDasharray="6 3" />
          <circle cx="50" cy="50" r="41" stroke="#8B5CF6" strokeWidth="0.8" strokeOpacity="0.4" />
          <circle cx="50" cy="50" r="25" stroke="url(#visionGlow)" strokeWidth="1.2" />
          <path d="M50 25 L62 43 L44 57 L28 41 Z" stroke="#A855F7" strokeWidth="1" strokeOpacity="0.6" fill="#8B5CF6" fillOpacity="0.12" />
          <circle cx="50" cy="50" r="9" fill="#8B5CF6" fillOpacity="0.35" stroke="#FFFFFF" strokeWidth="1.4" />
          <circle cx="50" cy="50" r="3" fill="#FFFFFF" />
          <path d="M27 34 V27 H34" stroke="#C084FC" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M73 34 V27 H66" stroke="#C084FC" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M27 66 V73 H34" stroke="#C084FC" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M73 66 V73 H66" stroke="#C084FC" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case 'saas':
      return (
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[84px] h-[84px] sm:w-[94px] sm:h-[94px] drop-shadow-[0_0_18px_rgba(245,158,11,0.38)]">
          <defs>
            <linearGradient id="saasBg" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#241407" />
              <stop offset="100%" stopColor="#100802" />
            </linearGradient>
            <linearGradient id="saasGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#FCD34D" />
            </linearGradient>
          </defs>
          <circle cx="50" cy="50" r="47" fill="url(#saasBg)" stroke="#F59E0B" strokeWidth="1.5" strokeDasharray="5 2" />
          <circle cx="50" cy="50" r="41" stroke="#F59E0B" strokeWidth="0.8" strokeOpacity="0.4" />
          <polygon points="50,26 68,36 50,46 32,36" fill="#F59E0B" fillOpacity="0.25" stroke="url(#saasGlow)" strokeWidth="1.2" strokeLinejoin="round" />
          <polygon points="32,36 50,46 50,67 32,57" fill="#F59E0B" fillOpacity="0.15" stroke="url(#saasGlow)" strokeWidth="1.2" strokeLinejoin="round" />
          <polygon points="50,46 68,36 68,57 50,67" fill="#F59E0B" fillOpacity="0.35" stroke="url(#saasGlow)" strokeWidth="1.2" strokeLinejoin="round" />
          <circle cx="50" cy="26" r="2.5" fill="#FFFFFF" />
          <circle cx="68" cy="36" r="2.5" fill="#FCD34D" />
          <circle cx="32" cy="36" r="2.5" fill="#FCD34D" />
          <circle cx="50" cy="46" r="3" fill="#FFFFFF" />
          <circle cx="50" cy="67" r="2.5" fill="#F59E0B" />
        </svg>
      );
    case 'ml':
      return (
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[84px] h-[84px] sm:w-[94px] sm:h-[94px] drop-shadow-[0_0_18px_rgba(6,182,212,0.38)]">
          <defs>
            <linearGradient id="mlBg" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#081824" />
              <stop offset="100%" stopColor="#030b12" />
            </linearGradient>
            <linearGradient id="mlGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06B6D4" />
              <stop offset="100%" stopColor="#38BDF8" />
            </linearGradient>
          </defs>
          <circle cx="50" cy="50" r="47" fill="url(#mlBg)" stroke="#06B6D4" strokeWidth="1.5" strokeDasharray="4 4" />
          <circle cx="50" cy="50" r="41" stroke="#06B6D4" strokeWidth="0.8" strokeOpacity="0.4" />
          <line x1="28" y1="50" x2="72" y2="50" stroke="url(#mlGlow)" strokeWidth="1.5" />
          <line x1="50" y1="28" x2="50" y2="72" stroke="url(#mlGlow)" strokeWidth="1.5" />
          <rect x="42" y="42" width="16" height="16" rx="3" fill="#06B6D4" fillOpacity="0.25" stroke="#FFFFFF" strokeWidth="1.5" />
          <circle cx="50" cy="50" r="2.5" fill="#38BDF8" />
          <circle cx="28" cy="50" r="4" fill="#06B6D4" stroke="#FFFFFF" strokeWidth="1" />
          <circle cx="72" cy="50" r="4" fill="#06B6D4" stroke="#FFFFFF" strokeWidth="1" />
          <circle cx="50" cy="28" r="4" fill="#38BDF8" stroke="#FFFFFF" strokeWidth="1" />
          <circle cx="50" cy="72" r="4" fill="#38BDF8" stroke="#FFFFFF" strokeWidth="1" />
        </svg>
      );
    default:
      return null;
  }
};

const TestimonialSlider = () => {
  return <Swiper navigation={true}
                  spaceBetween={10}
                 pagination={{
                   clickable:true,
                 }}
                 modules={[Navigation, Pagination]}
                 className={'h-[430px] sm:h-[460px] xl:h-[480px] pb-8 sm:pb-0'}
  >
    {testimonialSlider.map((person,index)=>{
      return (
          <SwiperSlide key={ index}>
            <div className={'flex flex-col items-center md:flex-row gap-x-8 h-full px-6 sm:px-12 md:px-16'}>
              {/*figure, name, position*/}
              <div className={'w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0 shrink-0'}>
                <div className={'flex flex-col justify-center text-center'}>
                  {/* custom vector figure for anonymity */}
                  <div className={'mb-2 sm:mb-3 mx-auto flex items-center justify-center'}>
                    <TestimonialFigure id={person.id} />
                  </div>
                  {/* name*/}
                  <div className={'text-base sm:text-lg font-medium text-white'}>{person.name}</div>
                  {/*position*/}
                  <div className={'text-[11px] sm:text-[12px] uppercase font-light tracking-widest text-white/60 mt-0.5 sm:mt-1'}>{person.position}</div>
                </div>
              </div>
              {/*quote & message*/}
              <div className={'flex-1 flex flex-col justify-center before:w-[1px]' +
              ' xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20 mt-2 md:mt-0'}>
                {/*quote icon*/}
                <div className={'mb-2 sm:mb-4'}>
                  <FaQuoteLeft className={'text-2xl sm:text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0'} />
                </div>
                {/*message*/}
                <div className={'text-xs sm:text-base xl:text-lg text-center md:text-left text-white/90 leading-relaxed font-light'}>{person.message}</div>
              </div>
            </div>
          </SwiperSlide>
      );
    })}
  </Swiper>;
};

export default TestimonialSlider;
