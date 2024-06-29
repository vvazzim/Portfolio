//import swiper react components
import {Swiper, SwiperSlide} from 'swiper/react';

//import swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,

} from "react-icons/rx";

// data
const serviceData = [
  {
    icon: <RxCrop />,
    title: 'Branding',
    description: 'Creating a strong brand identity with distinctive visuals and messaging to connect with your target audience.\n'
  },
  {
    icon: <RxPencil2 />,
    title: 'Design',
    description: 'Crafting visually appealing and user-friendly designs for websites, apps, and digital products.\\n',
  },
  {
    icon: <RxDesktop />,
    title: 'Development',
    description: 'Building robust web and mobile applications using modern technologies to ensure efficiency and security.\n',
  },
  {
    icon: <RxReader />,
    title: 'Copywriting',
    description: 'Writing engaging and persuasive content for websites and marketing materials to convey your brand\'s message.\n',
  },
  {
    icon: <RxRocket />,
    title: 'SEO',
    description: 'Improving your website\'s visibility on search engines through keyword research and on-page optimization.\n',
  },
];
// import required modules
import {FreeMode, Pagination} from 'swiper';
import {RiArrowRightSLine} from "react-icons/ri";




const ServiceSlider = () => {
  return <Swiper breakpoints={{
  320:{
  slidesPerView:1,
  spaceBetween: 15
  },
  640:{
    slidesPerView:3,
    spaceBetween: 15
  },

  }}
  freeMode={true}
  pagination={{
  clickable:true,
  }}
  modules={[FreeMode,Pagination]}
  className={'h-[240px] sm:h-[340px]'}
  >
    {serviceData.map((item,index)=>{
      return (
          <SwiperSlide key={index}>
            <div className={'bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6' +
            ' sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300'}>
            {/*icon*/}
            <div className={'text-4xl text-accent mb-4'}>{item.icon}</div>
              {/*title & desc*/}
              <div>
              <div>{item.title}</div>
              <p>{item.description}</p>
            </div>
              {/*arrow*/}
              <div className={'text-3xl'}>
                <RiArrowRightSLine className={'group-over:rotate-45 group-hover:text-accent trasition-all' +
                ' duration-300'}/>
              </div>
            </div>
      </SwiperSlide>
      );
    })}
  </Swiper>;
};

export default ServiceSlider;
