import React from 'react'
import Features from './Components/Common/Features'
import Footer from './Components/Common/Footer';
import Navigation from './Components/Common/Navigation';

function ShopPageLayout({ children }) {
  return (
    <div className="d-flex flex-column min-vh-100 app-layout">
      <Navigation />
      <main className="flex-fill">{children}</main>
      <Features />
      <Footer />
    </div>
  )
}

export default ShopPageLayout;