//import swiper react components
import {Swiper, SwiperSlide} from 'swiper/react';

//import swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';



// data
import {
  FaServer,
  FaBrain,
  FaRobot,
  FaCode,
  FaCloud,
} from "react-icons/fa";

const serviceData = [
  {
    icon: <FaServer />,
    title: 'Data Engineering',
    description: 'Design and orchestration of scalable data pipelines using Spark, Airflow, Kafka and more.',
  },
  {
    icon: <FaBrain />,
    title: 'Computer Vision',
    description: 'Image classification, segmentation and visual representation learning using CNNs and Transformers.',
  },
  {
    icon: <FaRobot />,
    title: 'Machine Learning & NLP',
    description: 'Training and deployment of models (BERT, RoBERTa, Chatbots) for real-world AI applications.',
  },
  {
    icon: <FaCode />,
    title: 'Web Full-Stack Development',
    description: 'Development of full-stack platforms using FastAPI, React.js and MongoDB.',
  },
  {
    icon: <FaCloud />,
    title: 'Cloud & DevOps',
    description: 'Containerization, CI/CD, cloud-ready architectures and monitoring using Docker and Kubernetes.',
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
