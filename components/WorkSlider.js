import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { BsArrowRight } from "react-icons/bs";
import Image from 'next/image';
import { Pagination } from "swiper";

export const workSlider = {
    slides: [
        {
            images: [
                {
                    title: 'title',
                    path: '/thumb1.jpg',
                    url: 'https://main--tubular-kelpie-d1f63c.netlify.app',
                },
                {
                    title: 'title',
                    path: '/thumb2.jpg',
                    url: '',
                },
                {
                    title: 'title',
                    path: '/thumb3.jpg',
                    url: '',
                },
                {
                    title: 'title',
                    path: '/thumb4.jpg',
                    url: '',
                },
            ],
        },
        {
            images: [
                {
                    title: 'title',
                    path: '/thumb4.jpg',
                    url: 'https://example.com/project5',
                },
                {
                    title: 'title',
                    path: '/thumb1.jpg',
                    url: 'https://example.com/project6',
                },
                {
                    title: 'title',
                    path: '/thumb2.jpg',
                    url: 'https://example.com/project7',
                },
                {
                    title: 'title',
                    path: '/thumb3.jpg',
                    url: 'https://example.com/project8',
                },
            ],
        },
    ],
};
const WorkSlider = () => {
    const handleClick = (url) => {
        window.open(url, '_blank');
    };

    return (
        <Swiper
            spaceBetween={10}
            pagination={{ clickable: true }}
            modules={[Pagination]}
            className={'h-[280px] sm:h-[480px]'}
        >
            {workSlider.slides.map((slide, index) => (
                <SwiperSlide key={index}>
                    <div className={'grid grid-cols-2 grid-row-2 gap-4 cursor-pointer'}>
                        {slide.images.map((image, index) => (
                            <div
                                className={'relative rounded-lg overflow-hidden flex items-center group'}
                                key={index}
                                onClick={() => handleClick(image.url)}
                            >
                                <div className={'flex items-center justify-center relative overflow-hidden'}>
                                    <Image src={image.path} width={500} height={300} alt={''} />
                                    <div className={'absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700'}>
                                        <div className={'absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300 w-full flex flex-col items-center text-center'}>
                                            <div className={'flex items-center gap-x-2 text-[13px] tracking-[0.2em]'}>
                                                <div className={'delay-100'}>LIVE</div>
                                                <div className={'translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150'}>PROJECT</div>
                                                <div className={'text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200'}>
                                                    <BsArrowRight />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default WorkSlider;
