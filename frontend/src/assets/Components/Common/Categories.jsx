import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const categories = [
  {
    title: "Cooker Hoods",
    img: "/Img/Categories/1.jpg",
  },
  {
    title: "Wall Decor & Panels",
    img: "/Img/Categories/2.jpg",
  },
  {
    title: "Pantry Cupboards",
    img: "/Img/Categories/3.jpg",
  },
  {
    title: "Sinks & Faucets",
    img: "/Img/Categories/4.jpg",
  },
];

function Categories() {
  return (
    <section className="categories-section ">
      <Container>
        <Row className="justify-content-center text-center">
          {categories.map((cat, index) => (
            <Col key={index} xs={6} md={3} className="mb-4">
              <div className="category-card">
                <div
                  className="circle-image"
                  style={{ backgroundImage: `url(${cat.img})` }}
                ></div>
                <h5 className="mt-3">{cat.title}</h5>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Categories;
