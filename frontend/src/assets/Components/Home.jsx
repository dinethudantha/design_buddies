import "../css/Style.scss";
import React from "react";
import Navigation from "./Common/Navigation";

function Home() {
  return (
    <>
      <header className="shadow">
        <div className="top-bar w-100 d-flex align-items-center justify-content-center">
          <span className="text-white text-center">
            ISLAND WIDE FREE DELIVERY ORDER ABOVE RS.15000/- PLANTS ONLY
            DELIVERED WITHIN COLOMBO & SUBURB
          </span>
        </div>
        <Navigation />
      </header>
    </>
  );
}

export default Home;
