import "../css/Style.scss";
import React from "react";
import Navigation from "./Common/Navigation";
import MainSlider from "./Common/MainSlider";
import Category1 from "./../Img/Category1.jpg";
import WallDecor from "./../Img/WallDecor.jpg";
import PantryCupboard from "./../Img/PantryCupboard.jpg";
import Sink from "./../Img/Sink.jpg";

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
    backgroundImage: `url(${WallDecor})`,
  };

  const CategoryBox3Style = {
    ...CategoryBoxStyle,
    backgroundImage: `url(${PantryCupboard})`,
  };

  const CategoryBox4Style = {
    ...CategoryBoxStyle,
    backgroundImage: `url(${Sink})`,
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
      <div className="container py-5 d-flex align-items-center justify-content-center">
        <div style={CategoryBoxContainerStyle}>
          <div className="text-center">
            <div style={CategoryBox1Style}></div>
            Cooker Hood
          </div>
          <div className="text-center">
            <div style={CategoryBox2Style}></div>
            Wall Decor & Panels
          </div>
          <div className="text-center">
            <div style={CategoryBox3Style}></div>
            Pantry Cupboards
          </div>
          <div className="text-center">
            <div style={CategoryBox4Style}></div>
            Sinks & Faucets
          </div>
        </div>
      </div>
      {/* Categories Section End */}
    </>
  );
}

export default Home;
