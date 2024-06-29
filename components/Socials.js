import Link from 'next/link';

import {
  RiYoutubeLine,
  RiInstagramLine,
    RiLinkedinBoxLine ,
  RiPinterestLine,
} from 'react-icons/ri';
import {
    FaGithub,
    FaStackOverflow
} from 'react-icons/fa6';
import React from "react";

const Socials = () => {
  return (
      <div className={'flex items-center gap-x-5 text-lg'}>
        <Link href={''} className={'hover:text-accent transition-all duration-300'}>
          <RiYoutubeLine />
        </Link>
        <Link href={'https://www.instagram.com/its.mowah/'} className={'hover:text-accent transition-all duration-300'}>
          <RiInstagramLine />
        </Link>
        <Link href={'https://www.linkedin.com/in/wassim-chikhi-21477619a/'} className={'hover:text-accent transition-all duration-300'}>
          <RiLinkedinBoxLine  />
        </Link>
        <Link href={'https://github.com/vvazzim'} className={'hover:text-accent transition-all duration-300'}>
          <FaGithub />
        </Link>
        <Link href={'https://stackoverflow.com/users/20487481/vvazzim'} className={'hover:text-accent transition-all duration-300'}>
          <FaStackOverflow  />
        </Link>
        <Link href={'https://www.pinterest.fr/chikhimedwassim/'} className={'hover:text-accent transition-all duration-300'}>
          <RiPinterestLine />
        </Link>
      </div>
  );
};

export default Socials;
