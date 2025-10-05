import React, { useState } from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import Products from "./Products.json";

function ProductSlider() {

  const [hovered,setHovered] = useState(false);
  return (
    <div className="ProductSlider">
      <Swiper
        spaceBetween={50}
        slidesPerView={4}
        style={{ overflow: hovered ? "visible" : "hidden" }}
      >
        {Products.map((item) => (
          <SwiperSlide key={item.id} className="text-center p-0" onMouseEnter={()=> setHovered(true)} onMouseLeave={()=>setHovered(false)}>
            <div
              className="w-100 ratio ratio-1x1"
              style={{
                backgroundImage: `url(${item.ProductImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <div className="text-center">
              <h4 className="line-clamp-3">{item.ProductTitle}</h4>
              <p className="text-primary" style={{ fontWeight: "bold" }}>
                {item.PriceRange}
              </p>
            </div>
            <div className="OptionSec d-flex align-items-center justify-content-between ">
              <i class="bi bi-heart"></i>
              <div className="btn btn-cart">SELECT OPTION</div>
              <i class="bi bi-search"></i>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ProductSlider;
