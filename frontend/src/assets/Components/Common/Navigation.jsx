import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Navigation() {
  const [expanded, setExpanded] = useState(false);
  const [scrollUp, setScrollUp] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > lastScroll && currentScroll > 100) {
        // scrolling down
        setScrollUp(false);
      } else {
        // scrolling up
        setScrollUp(true);
      }
      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);
  return (
    <>
      <div className="top-bar w-100 d-flex align-items-center justify-content-center">
        <span className="text-white text-center">
          ISLAND WIDE FREE DELIVERY ORDER ABOVE RS.15000/- PLANTS ONLY DELIVERED
          WITHIN COLOMBO & SUBURB
        </span>
      </div>
      <div className={`bg-body-tertiary nav-bar ${scrollUp ? "show" : "hide"}`}>
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

          <Navbar.Brand>
            <Link to="/">Design Buddies</Link>
          </Navbar.Brand>
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
            <Navbar.Collapse
              id="navbarScroll"
              className="justify-content-center"
            >
              <Nav className="text-uppercase" style={{ fontSize: "11px" }}>
                <Nav.Item className="px-3 py-2">
                  <Nav.Link
                    href="#"
                    onClick={() => setExpanded(false)} // close after click
                  >
                    Cooker Hoods
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className="px-3 py-2">
                  <Nav.Link
                    href="#"
                    onClick={() => setExpanded(false)} // close after click
                  >
                    Wall Decor & Panels
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className="px-3 py-2">
                  <Nav.Link
                    href="#"
                    onClick={() => setExpanded(false)} // close after click
                  >
                    Pantry Cupboards
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className="px-3 py-2">
                  <Nav.Link
                    href="#"
                    onClick={() => setExpanded(false)} // close after click
                  >
                    Sinks & Faucets
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className="px-3 py-2">
                  <Nav.Link
                    href="#"
                    onClick={() => setExpanded(false)} // close after click
                  >
                    Kitchen Accessories
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
}

export default Navigation;
