import "../css/Style.scss";
import React from "react";
import Navigation from "./Common/Navigation";
import MainSlider from "./Common/MainSlider";

import ProductSlider from "./Common/ProductSlider";
import PromotionBanner from "./../Img/PromotionBanner.webp";
import Footer from "./Common/Footer";
import Promotion1 from "./../Img/Promotion1.jpg";
import Blog from "./Common/Blog";
import ScrollTop from "./Common/ScrollUp";
import Categories from "./Common/Categories";

function Home() {
  const CategoryBoxContainerStyle = {
    display: "flex",
    gap: "50px",
    width: "auto",
  };


  return (
    <>
      <header className="shadow">
        <div className="top-bar w-100 d-flex align-items-center justify-content-center">
          <span className="text-white text-center">
            ISLAND WIDE FREE DELIVERY ORDER ABOVE RS.15000/- PLANTS ONLY
            DELIVERED WITHIN COLOMBO & SUBURB
          </span>
        </div>
        <Navigation />
      </header>
      {/* Slider Here */}
      <MainSlider />
      <div className="container section-header text-center mt-5">
        <h1>Welcome to Design Buddies!</h1>
        <p>Complete Kitchen Solutions — Cooker Hoods, Cabinets & More</p>
      </div>
      {/* Categories Section */}

      <Categories />

      {/* <div className="container d-flex align-items-center justify-content-center mt-5">
        <div style={CategoryBoxContainerStyle}>
          <div className="text-center CategoryBox">
            <a href="#">
              <div style={CategoryBox1Style}></div>
              Cooker Hoods
            </a>
          </div>
          <div className="text-center CategoryBox">
            <a href="#">
              <div style={CategoryBox2Style}></div>
              Wall Decor & Panels
            </a>
          </div>
          <div className="text-center CategoryBox">
            <a href="#">
              <div style={CategoryBox3Style}></div>
              Pantry Cupboards
            </a>
          </div>
          <div className="text-center CategoryBox">
            <a href="#">
              <div style={CategoryBox4Style}></div>
              Sinks & Faucets
            </a>
          </div>
        </div>
      </div> */}
      {/* Categories Section End */}
      {/* Popular Items Section */}

      {/* <div className="container pb-4 ">
        <h2 className="mb-4">Best Sellers</h2>
        
      </div> */}
      <div className="container section-header text-center mt-5">
        <h1>Best Sellers</h1>
        <p>Most Loved by Customers — A Must Have In a High Quality Kitchen</p>
      </div>
      <ProductSlider /> 

      {/* Popular Items Section End */}

      {/* Promotion Section Start */}
      <section
        className="banner-section py-5 mt-5"
        style={{ backgroundColor: "#f7f8fa" }}
      >
        <div className="container">
          <div className="row align-items-center">
            {/* Left Text */}
            <div className="col-md-6 text-md-start text-center mb-4 mb-md-0">
              <h2 className="fw-bold display-5 mb-2">Your Dream Kitchen</h2>
              <h3 className="fw-semibold mb-3">Now In Reality</h3>
              <p className="lead text-danger fw-bold mb-4">
                Enjoy 20% OFF Today!
              </p>
              <a href="#offers" className="btn btn-primary btn-lg">
                SHOP NOW!
              </a>
            </div>

            {/* Right Image */}
            <div className="col-md-6 text-center">
              <img
                src={Promotion1} // your uploaded image
                alt="Dream Kitchen"
                className="img-fluid rounded shadow-sm"
                style={{ maxHeight: "400px", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>

        {/* Bottom white row */}
        <div className="bottom-bar mt-5"></div>
      </section>
      <div className="py-4"></div>
      {/* Promotion Section End */}
      {/* Blog Section Start */}
      <Blog />
      {/* Blog Section End */}
      {/* Footer Start */}
      <Footer />

      <ScrollTop />
      {/* Footer End */}
    </>
  );
}

export default Home;
