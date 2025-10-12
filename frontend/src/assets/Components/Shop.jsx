import React from 'react'
import './../css/Shop.scss'
import Navigation  from './Common/Navigation'
import BreadCrumb from './Common/BreadCrumb'
import Footer from './Common/Footer'

function Shop() {
  return (
    <>
        {/* Header */}
        <Navigation />
        <div className='container py-5'>
            <BreadCrumb />
        </div>
        <Footer />
    </>
  )
}

export default Shop