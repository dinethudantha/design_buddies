import React from "react";
import { Button } from "react-bootstrap";

const ProductCard = ({ title, subtitle, price, oldPrice, image }) => {
  return (
    <div className="product-card">
      <div className="product-img-wrapper">
        <img src={image} alt={title} className="product-img" />
        <div className="hover-overlay">
          <Button variant="primary" size="sm">
            Show Options
          </Button>
        </div>
      </div>
      <div className="card-body">
        <h6 className="card-subtitle">{subtitle}</h6>
        <h5 className="card-title">{title}</h5>
        <div className="price">
          <span className="old-price">{oldPrice}</span>
          {price}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
