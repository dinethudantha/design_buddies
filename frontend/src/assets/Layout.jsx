import React from "react";
import Navigation from "./Components/Common/Navigation";
import Footer from "./Components/Common/Footer";


function Layout({ children }) {
  return (
    <div className="d-flex flex-column min-vh-100 app-layout">
      <Navigation />
      <main className="flex-fill">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
