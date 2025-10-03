import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Navigation() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-body-tertiary">
      {/* 🔹 First container (logo, search, cart, toggle) */}
      <Container className="border-bottom py-3 d-flex align-items-center justify-content-between">
        {/* 👇 Toggle button is here (in container 1) */}
        <Navbar className="me-2" expand="lg" bg="light" variant="light">
          <Navbar.Toggle
            aria-controls="navbarScroll"
            onClick={() => setExpanded(!expanded)}
          >
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
        </Navbar>

        <Navbar.Brand href="#">Design Buddies</Navbar.Brand>
        {/* Search Bar */}
        <Form className="d-flex align-items-center flex-grow-1 mx-5 border py-2 px-4 rounded-pill">
          <Form.Control
            type="search"
            placeholder="Search for products"
            className="me-2 border-0 bg-transparent shadow-none"
            aria-label="Search"
          />
          <Button
            className="rounded-circle h-100 d-flex align-items-center justify-content-center"
            style={{ width: "35px", aspectRatio: "1/1" }}
            variant="primary"
          >
            <i className="bi bi-search"></i>
          </Button>
        </Form>

        {/* Cart, Wishlist & Toggle */}
        <div className="d-flex align-items-center">
          <i className="bi bi-suit-heart me-3"></i>
          <i className="bi bi-bag me-3"></i>
          <span className="me-3">LKR 0.00</span>
        </div>
      </Container>

      {/* 🔹 Second container (collapsible menu controlled by toggle) */}
      <Navbar expand="lg" expanded={expanded} className="p-0">
        <Container className="justify-content-center">
          <Navbar.Collapse id="navbarScroll" className="justify-content-center">
            <Nav className="text-uppercase" style={{ fontSize: "11px" }}>
              <Nav.Item  className="px-3 py-2">
                <Nav.Link
                  href="#"
                  onClick={() => setExpanded(false)} // close after click
                >
                  Home & Decor
                </Nav.Link>
              </Nav.Item>
              <Nav.Item  className="px-3 py-2">
                <Nav.Link
                  href="#"
                  onClick={() => setExpanded(false)} // close after click
                >
                  Bed & Bathroom
                </Nav.Link>
              </Nav.Item>
              <Nav.Item  className="px-3 py-2">
                <Nav.Link
                  href="#"
                  onClick={() => setExpanded(false)} // close after click
                >
                  Kitchen & Storage
                </Nav.Link>
              </Nav.Item>
              <Nav.Item  className="px-3 py-2">
                <Nav.Link
                  href="#"
                  onClick={() => setExpanded(false)} // close after click
                >
                  Outdoor & Garden
                </Nav.Link>
              </Nav.Item>
              <Nav.Item  className="px-3 py-2">
                <Nav.Link
                  href="#"
                  onClick={() => setExpanded(false)} // close after click
                >
                  Hardware & Fittings
                </Nav.Link>
              </Nav.Item>
              <Nav.Item  className="px-3 py-2">
                <Nav.Link
                  href="#"
                  onClick={() => setExpanded(false)} // close after click
                >
                  Electrical
                </Nav.Link>
              </Nav.Item>
              <Nav.Item  className="px-3 py-2">
                <Nav.Link
                  href="#"
                  onClick={() => setExpanded(false)} // close after click
                >
                  Sale
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navigation;
