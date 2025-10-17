import React from "react";
import SidebarFilter from "./SidebarFilter";
import ProductCard from "./ProductCard";
import SectionHeader from "../SectionHeader";

const ProductPage = () => {
  return (
    <>
       
      <div className="product-page container-fluid py-4">
        <div className="row">
          {/* Sidebar Section */}
          <div className="col-md-3">
            <SidebarFilter />
          </div>

          {/* Product Cards Section */}
          <div className="col-md-9">
            <div className="row g-4">
              {[...Array(8)].map((_, index) => (
                <div className="col-md-4 col-sm-6" key={index}>
                  <ProductCard
                    title={`Product ${index + 1}`}
                    subtitle="Modern Design"
                    price="Rs. 12,500"
                    oldPrice="Rs. 14,900"
                    image={`https://picsum.photos/500?random=${index + 1}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
