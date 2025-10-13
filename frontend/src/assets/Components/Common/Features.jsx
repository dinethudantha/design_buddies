import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaTruckFast, FaArrowRotateLeft, FaShieldHalved } from "react-icons/fa6";

const features = [
  {
    id: 1,
    icon: <FaTruckFast />,
    title: "Free Shipping on Orders Over $50",
    desc: "Enjoy free standard shipping when you spend $50 or more. No hidden fees — just more value with every order.",
    link: "Learn More",
  },
  {
    id: 2,
    icon: <FaArrowRotateLeft />,
    title: "Easy 30-day Returns",
    desc: "Changed your mind? No problem. You have 30 days to return your item, no questions asked.",
    link: "Learn More",
  },
  {
    id: 3,
    icon: <FaShieldHalved />,
    title: "Payment Security",
    desc: "Your security is our priority. All payments are encrypted and processed securely — we never store your payment details.",
    link: "Learn More",
  },
];
function Features() {
  return (
    <section className="feature-section py-5">
      <Container>
        <Row className="g-4">
          {features.map((f, index) => (
            <Col key={f.id} md={4} className="feature-col">
              <div className="feature-card d-flex">
                <div className="icon-box">{f.icon}</div>
                <div className="content">
                  <h5>{f.title}</h5>
                  <p>{f.desc}</p>
                  <a href="#">
                    {f.link} <span>›</span>
                  </a>
                </div>
              </div>
              {index !== features.length - 1 && (
                <div className="vertical-line d-none d-md-block"></div>
              )}
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Features;
