import React from "react";


function SectionHeader(props) {
  return (
    <>
      <div className="container section-header text-center my-5">
        <h1>{props.title}</h1>
        <p>{props.description}</p>
      </div>
    </>
  );
}

export default SectionHeader;
