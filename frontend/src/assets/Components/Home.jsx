import "../css/Style.scss";
import React from "react";
import Navigation from "./Common/Navigation";
import MainSlider from "./Common/MainSlider";

import ProductSlider from "./Common/ProductSlider";
import PromotionBanner from "./../Img/PromotionBanner.webp";
import Footer from "./Common/Footer";
import Promotion1 from "./../Img/Promotion1.jpg";
import Blog from "./Common/Blog";
import Categories from "./Common/Categories";
import SectionHeader from "./Common/SectionHeader";
import { Link } from "react-router-dom";
import Layout from "../Layout";

function Home() {
  const CategoryBoxContainerStyle = {
    display: "flex",
    gap: "50px",
    width: "auto",
  };

  return (
    <>
      <Layout>
        <MainSlider />

        <SectionHeader
          title="Welcome to Design Buddies!"
          description="Complete Kitchen Solutions — Cooker Hoods, Cabinets & More"
        />

        {/* Categories Section */}

        <Categories />

        {/* Best Seller Start */}

        <SectionHeader
          title="Best Sellers"
          description="Most Loved by Customers — A Must Have In a High Quality Kitchen"
        />

        <ProductSlider />

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
                <Link to="/shop">
                  <button className="btn btn-primary btn-lg">SHOP NOW!</button>
                </Link>
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

        {/* Promotion Section End */}
        {/* Blog Section Start */}
        <Blog />
        {/* Blog Section End */}
      </Layout>
    </>
  );
}

export default Home;
