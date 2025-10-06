import "../css/Style.scss";
import React from "react";
import Navigation from "./Common/Navigation";
import MainSlider from "./Common/MainSlider";
import Category1 from "./../Img/Category1.jpg";
import Category2 from "./../Img/Category2.jpg";
import Category3 from "./../Img/Category3.jpg";
import Category4 from "./../Img/Category4.jpg";
import ProductSlider from "./Common/ProductSlider";
import PromotionBanner from "./../Img/PromotionBanner.webp";
import Footer from "./Common/Footer";
import Promotion1 from "./../Img/Promotion1.jpg";

function Home() {
  const CategoryBoxContainerStyle = {
    display: "flex",
    gap: "50px",
    width: "auto",
  };

  const CategoryBoxStyle = {
    width: "170px",
    aspectRatio: "1/1",
    backgroundColor: "red",
    borderRadius: "50%",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  const CategoryBox1Style = {
    ...CategoryBoxStyle,
    backgroundImage: `url(${Category1})`,
  };

  const CategoryBox2Style = {
    ...CategoryBoxStyle,
    backgroundImage: `url(${Category2})`,
  };

  const CategoryBox3Style = {
    ...CategoryBoxStyle,
    backgroundImage: `url(${Category3})`,
  };

  const CategoryBox4Style = {
    ...CategoryBoxStyle,
    backgroundImage: `url(${Category4})`,
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
      {/* Categories Section */}
      <div className="container d-flex align-items-center justify-content-center pt-5 pb-5">
        <div style={CategoryBoxContainerStyle}>
          <div className="text-center CategoryBox">
            <div style={CategoryBox1Style}></div>
            Cooker Hoods
          </div>
          <div className="text-center CategoryBox">
            <div style={CategoryBox2Style}></div>
            Wall Decor & Panels
          </div>
          <div className="text-center CategoryBox">
            <div style={CategoryBox3Style}></div>
            Pantry Cupboards
          </div>
          <div className="text-center CategoryBox">
            <div style={CategoryBox4Style}></div>
            Sinks & Faucets
          </div>
        </div>
      </div>
      {/* Categories Section End */}
      {/* Popular Items Section */}
      <div className="container section-header text-center pb-5">
        <h1>Welcome to Design Buddies!</h1>
        <p>Complete Kitchen Solutions — Cooker Hoods, Cabinets & More</p>
      </div>
      <div className="container pb-4 ">
        <h2 className="mb-4">Best Sellers</h2>
        <ProductSlider />
      </div>
      {/* Popular Items Section End */}

      {/* Promotion Section Start */}
      <section
        className="banner-section py-5"
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
      {/* Footer Start */}
      <Footer />
      {/* Footer End */}
    </>
  );
}

export default Home;
