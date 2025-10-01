import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function Navigation() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#">Design Buddies</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse className="d-flex" id="navbarScroll">
          <Form className="d-flex align-items-center flex-grow-1 me-5 border py-2 px-4 rounded-pill">
            <Form.Control
              type="search"
              placeholder="Search for products"
              className="me-2 border-0 bg-transparent shadow-none"
              aria-label="Search"
            />
            <Button
              className="btn btn-primary rounded-circle h-100 d-flex align-items-center justify-content-center"
              style={{ width: "35px", aspectRatio: "1/1" }}
              variant="outline-success"
            >
              <i class="bi bi-search"></i>
            </Button>
          </Form> 
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
