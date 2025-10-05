import React from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import Products from "./Products.json";

function ProductSlider() {
  return (
    <div className="ProductSlider">
      <Swiper
        spaceBetween={50}
        slidesPerView={4}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {Products.map((item) => (
          <SwiperSlide key={item.id} className="text-center">
            <div
              className="w-100 p-4 ratio ratio-1x1"
              style={{
                backgroundImage: `url(${item.ProductImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <div className="text-center p-2">
              <h4 className="line-clamp-3">{item.ProductTitle}</h4>
              <p className="text-primary" style={{ fontWeight: "bold" }}>
                {item.PriceRange}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ProductSlider;
