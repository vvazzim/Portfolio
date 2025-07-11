// testimonial data
export const testimonialSlider = [
  {
    image: '/t-avt-2.png',
    name: "Besma Khoualdia",
    position: "PhD – AI for Oncology",
    message:"His work on histology image classification was rigorous, well documented and aligned with real research goals.",
      },
  {
    image: '/t-avt-3.png',
    name: 'Nicolas Lomenie',
    position: "Professor – Université Paris Cité",
    message: "Wassim actively contributed to a medical imaging research project and showed great autonomy and technical understanding.",
  
  },
  {
    image: '/t-avt-1.png',
    name: 'Zoé Legrand',
    position: 'Antallis CEO',
    message: 'Wassim\'s development skills are top-notch. He built a robust and user-friendly website for us that has significantly improved our online presence. His attention to detail and commitment to excellence are evident in every aspect of his work.',
  }, {
    image: '/t-avt-4.png',
    name: "You?",
    position: "Future Collaborator",
    message: "Looking to build a data-driven or AI-based system? Let’s connect and make it happen.",
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
//next Image
import Image from 'next/image'

//import required modules
import {Navigation, Pagination} from "swiper";


const TestimonialSlider = () => {
  return <Swiper navigation={true}
                  spaceBetween={10}
                 pagination={{
                   clickable:true,
                 }}
                 modules={[Navigation, Pagination]}
                 className={'h-[480px]'}
  >
    {testimonialSlider.map((person,index)=>{
      return (
          <SwiperSlide key={ index}>
            <div className={'flex flex-col items-center md:flex-row gap-x-8 h-full px-16'}>
              {/*avatar, name, position*/}
              <div className={'w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto' +
              ' xl:mx-0'}>
                <div className={'flex flex-col justify-center text-center'}>
                  {/*avatar*/}
                  <div className={'mb-2 mx-auto'}><Image src={person.image} width={100} height={100} alt={''}/></div>
                  {/* name*/}
                  <div className={'text-lg'}>{person.name}</div>
                  {/*position*/}
                  <div className={'text-[12px] uppercase font-extralight tracking-widest'}>{person.position}</div>
                </div>
              </div>
              {/*quote & message*/}
              <div className={'flex-1 flex flex-col justify-center before:w-[1px]' +
              ' xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20'}>
                {/*quote icon*/}
                <div className={'mb-4'}>
                  <FaQuoteLeft className={'text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0'} />
                </div>
                {/*message*/}
                <div className={'xl:text-lg  text-center md:text-left'}>{person.message}</div>
              </div>
            </div>
          </SwiperSlide>
      );
    })}
  </Swiper>;
};

export default TestimonialSlider;
