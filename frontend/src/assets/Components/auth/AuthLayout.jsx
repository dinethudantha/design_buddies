import React from 'react'

function AuthLayout({ children, title, subTitle }) {
  return (
    <>
      <div className="container p-5 d-flex align-items-center justify-content-center">
        <div className="col-lg-8 col-12">
          <div className="bg-white rounded-4 shadow-lg p-4 p-md-5">
            {/* Header */}
            <div className="text-center mb-4">
              <h2 className="fw-bold text-dark">{title}</h2>
              <p className="text-muted mb-0">
                {subTitle}
              </p>
            </div>

            {/* Form */}
            <main>{children}</main>


          </div>
        </div>
      </div>
    </>
  )
}

export default AuthLayout