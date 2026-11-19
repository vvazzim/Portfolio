import Link from 'next/link';
import { RiLinkedinBoxLine } from 'react-icons/ri';
import { FaGithub, FaStackOverflow } from 'react-icons/fa6';
import { SiOrcid } from 'react-icons/si';
import React from "react";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link
        href="https://www.linkedin.com/in/wassim-chikhi"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-accent transition-all duration-300 cursor-pointer"
        aria-label="LinkedIn Profile"
      >
        <RiLinkedinBoxLine />
      </Link>
      <Link
        href="https://github.com/vvazzim"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-accent transition-all duration-300 cursor-pointer"
        aria-label="GitHub Profile"
      >
        <FaGithub />
      </Link>
      <Link
        href="https://orcid.org/0009-0009-8513-6962"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-accent transition-all duration-300 cursor-pointer text-xl"
        aria-label="ORCID Research Record"
        title="ORCID ID: 0009-0009-8513-6962"
      >
        <SiOrcid />
      </Link>
      <Link
        href="https://stackoverflow.com/users/20487481/vvazzim"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-accent transition-all duration-300 cursor-pointer"
        aria-label="Stack Overflow Profile"
      >
        <FaStackOverflow />
      </Link>
    </div>
  );
};

export default Socials;
