import "../css/Style.scss";
import React from "react";
import Navigation from "./Common/Navigation";
import MainSlider from "./Common/MainSlider";
import Category1 from "./../Img/Category1.jpg";
import Category2 from "./../Img/Category2.jpg";
import Category3 from "./../Img/Category3.jpg";
import Category4 from "./../Img/Category4.jpg";
import ProductSlider from "./Common/ProductSlider";

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
            Cooker Hood
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
        <h2>Best Selling Products</h2>
        <ProductSlider />
      </div>
      {/* Popular Items Section End */}
    </>
  );
}

export default Home;
