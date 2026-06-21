//next link
import { HiArrowRight } from "react-icons/hi2";
import Link from "next/link";
import React from "react";

const ProjectsBtn = () => {
  return (
    <div className="mx-auto xl:mx-0">
      <Link
        href="/work"
        className="relative w-[185px] h-[185px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group transition-transform duration-300 hover:scale-105"
      >
        {/* Dynamic vector circular rotating text path */}
        <svg
          viewBox="0 0 148 148"
          className="animate-spin-slow w-full h-full max-w-[141px] max-h-[148px]"
        >
          <path
            id="textPath"
            d="M 74, 74 m -50, 0 a 50,50 0 1,1 100,0 a 50,50 0 1,1 -100,0"
            fill="none"
          />
          <text className="font-sora text-[10px] font-bold uppercase tracking-[3.8px] fill-white opacity-85 transition-all duration-300 group-hover:opacity-100 group-hover:fill-accent">
            <textPath href="#textPath" startOffset="0%">
              PROJECTS • WORK • PORTFOLIO • 
            </textPath>
          </text>
        </svg>
        <HiArrowRight className="absolute text-4xl group-hover:translate-x-2 transition-all duration-300 group-hover:text-accent" />
      </Link>
    </div>
  );
};

export default ProjectsBtn;

