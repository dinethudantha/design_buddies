import React from "react";
import Layout from "../Layout";
import "./../css/Shop.scss";
import BreadCrumb from "./Common/BreadCrumb";
import SectionHeader from "./Common/SectionHeader";
import ShopPageCategories from "./Common/ShopPageCategories";
import Features from "./Common/Features";

function Shop() {
  return (
    <>
      <Layout>
        <div className="container py-5">
          <BreadCrumb />
          <SectionHeader
            title="Our Shop"
            description="Lorem ipsum bla bla bla."
          />
          <ShopPageCategories />
        </div>
        <Features />
      </Layout>
    </>
  );
}

export default Shop;
