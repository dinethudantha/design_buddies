import React, { useState } from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import Products from "./Products.json";
import { Button, Card, Row, Col } from "react-bootstrap";

function ProductSlider() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="product-list container mt-5">
      <Row className="g-4">
        {Products.map((item) => (
          <Col
            className="product-card-container"
            key={item.id}
            md={3}
            sm={6}
            xs={12}
          >
            <Card className="product-card">
              <div
                className="w-100 ratio ratio-1x1"
                style={{
                  backgroundImage: `url(${item.ProductImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <Card.Body>
                <Card.Title>
                  <h4>{item.ProductTitle}</h4>
                </Card.Title>
                <Card.Text>
                  <p>{item.PriceRange}</p>
                </Card.Text>
                <div className="w-100 px-5 hover-btn d-flex align-items-center justify-content-between">
                  <i class="bi bi-heart"></i>
                  <div className="btn btn-cart">SELECT OPTION</div>
                  <i class="bi bi-search"></i>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default ProductSlider;
