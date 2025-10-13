import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaArrowRightLong } from "react-icons/fa6";
const categories = [
  {
    id: 1,
    title: "Cooker Hoods",
    items: 0,
    image: "Img/Categories/1.jpg",
    color: "#f7f7f7",
  },
  {
    id: 2,
    title: "Wall Decor & Panels",
    items: 0,
    image: "Img/Categories/2.jpg",
    color: "#fff8e7",
  },
  {
    id: 3,
    title: "Pantry Cupboards",
    items: 0,
    image: "Img/Categories/3.jpg",
    color: "#fef2f2",
  },
  {
    id: 4,
    title: "Sinks & Faucets",
    items: 0,
    image: "Img/Categories/4.jpg",
    color: "#f3f6ff",
  },
];

function ShopPageCategories() {
  return (
    <section className="category-premium">
      <Container>
        <Row className="g-4">
          {categories.map((cat) => (
            <Col key={cat.id} xs={12} sm={6} md={3}>
              <motion.div
                className="category-box"
                style={{ backgroundColor: cat.color }}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <div className="image-wrapper" style={{backgroundImage:`url('${cat.image}')`}}>
                  {/* <img src={cat.image} alt={cat.title} /> */}
                  <div className="overlay"></div>
                </div>
                <div className="category-info mx-2 mb-2 ">
                  <div>
                    <h5>{cat.title}</h5>
                    <p>{cat.items} Items</p>
                  </div>
                  <FaArrowRightLong className="arrow" />
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default ShopPageCategories;
