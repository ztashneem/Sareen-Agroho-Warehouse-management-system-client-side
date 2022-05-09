import React from 'react';
import { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Banner = () => {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='img1'></div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='img2'></div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='img3'></div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='img4'></div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='img5'></div>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default Banner;