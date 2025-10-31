import React from "react";
import { Button, Form } from "react-bootstrap";

const SidebarFilter = () => {
  return (
    <div className="p-3 border rounded bg-light">
      <h5 className="fw-semibold mb-3">Availability</h5>
      <Form.Check label="In stock (25)" />
      <Form.Check label="Out of stock (19)" />

      <hr />
      <h5 className="fw-semibold mb-3">Category</h5>
      {["Cooker Hoods", "Wall Decor & Panels", "Pantry Cupboards", "Sinks & Faucets"].map((cat) => (
        <Form.Check key={cat} label={cat} />
      ))}

      <hr />
      {/* <h5 className="fw-semibold mb-3">Size</h5>
      {["XS", "S", "M", "L", "XL", "2XL"].map((size) => (
        <Button
          key={size}
          variant="outline-secondary"
          size="sm"
          className="m-1 rounded-pill"
        >
          {size}
        </Button>
      ))} */}

      <hr />
      <h5 className="fw-semibold mb-3">Price</h5>
      <div className="d-flex gap-2">
        <Form.Control type="number" placeholder="From $" />
        <Form.Control type="number" placeholder="To $" />
      </div>
    </div>
  );
};

export default SidebarFilter;
