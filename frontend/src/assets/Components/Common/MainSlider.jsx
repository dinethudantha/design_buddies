import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import CookerHood from "./../../Img/CookerHood.jpg";
import WallDecor from "./../../Img/WallDecor.jpg";
import PantryCupboard from "./../../Img/PantryCupboard.jpg";
import Sink from "./../../Img/Sink.jpg";

const MainSlider = () => {
  const BaseSliderStyle = {
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  const Slider1BackgroundStyle = {
    ...BaseSliderStyle,
    backgroundImage: `url(${CookerHood})`,
  };

  const Slider2BackgroundStyle = {
    ...BaseSliderStyle,
    backgroundImage: `url(${WallDecor})`,
  };

  const Slider3BackgroundStyle = {
    ...BaseSliderStyle,
    backgroundImage: `url(${PantryCupboard})`,
  };

  const Slider4BackgroundStyle = {
    ...BaseSliderStyle,
    backgroundImage: `url(${Sink})`,
  };

  return (
    <div className="MainSlider">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 10000 }}
        loop={true}
      >
        <SwiperSlide style={Slider1BackgroundStyle}></SwiperSlide>
        <SwiperSlide style={Slider2BackgroundStyle}></SwiperSlide>
        <SwiperSlide style={Slider3BackgroundStyle}></SwiperSlide>
        <SwiperSlide style={Slider4BackgroundStyle}></SwiperSlide>
        ...
      </Swiper>
    </div>
  );
};

export default MainSlider;
