import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import { Pagination, Autoplay  } from 'swiper/modules';

import "swiper/css/pagination";

import 'swiper/css/autoplay';

import CookerHood from "./../../Img/CookerHood.jpg"

const MainSlider = () => {
  return (
    <div className="MainSlider">
      <Swiper
       modules={[Pagination,Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{delay: 10000}}
        loop={true}
      >
        <SwiperSlide>
          <img width="100%" height="100%" src={CookerHood} alt="" />
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        ...
      </Swiper>
    </div>
  );
};

export default MainSlider;
