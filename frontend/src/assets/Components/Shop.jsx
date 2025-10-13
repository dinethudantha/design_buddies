import React from "react";
import "./../css/Shop.scss";
import Navigation from "./Common/Navigation";
import BreadCrumb from "./Common/BreadCrumb";
import Footer from "./Common/Footer";
import SectionHeader from "./Common/SectionHeader";
import ScrollTop from "./Common/ScrollUp";
import ShopPageCategories from "./Common/ShopPageCategories";
import Features from "./Common/Features";

function Shop() {
  return (
    <>
      {/* Header */}
      <Navigation />
      <div className="container py-5">
        <BreadCrumb />
        <SectionHeader
          title="Our Shop"
          description="Lorem ipsum bla bla bla."
        />
        <ShopPageCategories />
      </div>
      <Features />
      <Footer />

      <ScrollTop />
    </>
  );
}

export default Shop;
