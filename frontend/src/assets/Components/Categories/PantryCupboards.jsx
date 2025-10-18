import React from "react";
import ShopPageLayout from "../../ShopPageLayout";
import SectionHeader from "../Common/SectionHeader";
import BreadCrumb from "../Common/BreadCrumb";
import ProductPage from "../Common/ProductPage/ProductPage";

function PantryCupboards() {
  return (
    <ShopPageLayout>
      <div className="container mt-5">
        <BreadCrumb />
        <SectionHeader
          title="Pantry Cupboards"
          description="Most Loved by Customers — A Must Have In a High Quality Kitchen"
        />
        <ProductPage />
      </div>
    </ShopPageLayout>
  );
}

export default PantryCupboards;
