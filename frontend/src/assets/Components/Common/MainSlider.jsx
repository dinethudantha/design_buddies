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
import { Link } from "react-router-dom";

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
        <SwiperSlide style={Slider1BackgroundStyle}>
          <div className="bg-overlay"></div>
          <div className="text-center text-white" style={{ zIndex: "1" }}>
            <h1 className="slider-header">Cooker Hoods</h1>
            <p style={{ textTransform: "capitalize" }}>
              Keep your kitchen fresh with our modern cooker hoods
            </p>
            <Link to="/shop">
              <button className="btn btn-primary btn-lg">SHOP NOW!</button>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide style={Slider2BackgroundStyle}>
          <div className="bg-overlay"></div>
          <div className="text-center text-white" style={{ zIndex: "1" }}>
            <h1 className="slider-header">Wall Decor & Panels</h1>
            <p style={{ textTransform: "capitalize" }}>
              Transform your kitchen walls with stylish panels and sheets
            </p>
            <Link to="/shop">
              <button className="btn btn-primary btn-lg">SHOP NOW!</button>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide style={Slider3BackgroundStyle}>
          <div className="bg-overlay"></div>
          <div className="text-center text-white" style={{ zIndex: "1" }}>
            <h1 className="slider-header">Pantry Cupboards</h1>
            <p style={{ textTransform: "capitalize" }}>
              Elegant storage solutions for your perfect kitchen space
            </p>
            <Link to="/shop">
              <button className="btn btn-primary btn-lg">SHOP NOW!</button>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide style={Slider4BackgroundStyle}>
          <div className="bg-overlay"></div>
          <div className="text-center text-white" style={{ zIndex: "1" }}>
            <h1 className="slider-header">Sinks & Faucets</h1>
            <p style={{ textTransform: "capitalize" }}>
              Premium sinks and faucets built for modern kitchens
            </p>
            <Link to="/shop">
              <button className="btn btn-primary btn-lg">SHOP NOW!</button>
            </Link>
          </div>
        </SwiperSlide>
        ...
      </Swiper>
    </div>
  );
};

export default MainSlider;
