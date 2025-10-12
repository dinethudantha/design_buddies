import React from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";

function BreadCrumb(props) {
  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="#/">
          {props.item1}
        </Breadcrumb.Item>
        {/* <Breadcrumb.Item active></Breadcrumb.Item> */}
      </Breadcrumb>
    </>
  );
}

export default BreadCrumb;
