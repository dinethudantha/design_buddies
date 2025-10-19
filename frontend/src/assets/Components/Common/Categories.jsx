import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/categories")
      .then((response) => {
        setCategories(response.data.data); // assuming Laravel API returns { success: true, data: [...] }
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  }, []); // run once on mount

  return (
    <section className="categories-section">
      <Container>
        <Row className="justify-content-center text-center">
          {categories.map((category) => (
            <Col key={category.id} xs={6} md={3} className="mb-4">
              <div className="category-card">
                <div
                  className="circle-image"
                  style={{
                    backgroundImage: `url(${
                      category.slug || "/default-image.png"
                    })`,
                  }}
                ></div>
                <h5 className="mt-3">{category.category}</h5>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Categories;
