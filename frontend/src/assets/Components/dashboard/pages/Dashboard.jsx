/* src/pages/Dashboard.jsx */
import React from "react";
import "./../styles/Dashboard.scss";
import SideBar from "../../Common/SideBar";
import AdminPanelLayout from "../../../AdminPanelLayout";


export default function Dashboard() {
  return (
    <>
      <AdminPanelLayout>
        <div className="row g-3">
          <div className="col-md-3">
            <div className="card status-card p-3">
              <div className="small text-muted">Orders Received</div>
              <div className="h2 mb-0">486</div>
              <div className="text-muted small">Completed Orders 351</div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card status-card p-3">
              <div className="small text-muted">Total Sales</div>
              <div className="h2 mb-0">1641</div>
              <div className="text-muted small">This Month 213</div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card status-card p-3">
              <div className="small text-muted">Revenue</div>
              <div className="h2 mb-0">$42,562</div>
              <div className="text-muted small">This Month $5,032</div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card status-card p-3">
              <div className="small text-muted">Total Profit</div>
              <div className="h2 mb-0">$9,562</div>
              <div className="text-muted small">This Month $542</div>
            </div>
          </div>
        </div>

        <div className="row mt-4 g-3">
          <div className="col-lg-8">
            <div className="card h-100 p-3 map-card">
              <div className="card-title mb-2">New Order From United States</div>
              <div className="map-placeholder">Map placeholder</div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="card p-3 earnings-card">
              <div className="d-flex justify-content-between align-items-center mb-2">
                <div className="small text-muted">New Order From United States</div>
                <div className="dropdown">
                  <button className="btn btn-sm btn-light">...</button>
                </div>
              </div>
              <div className="h3 mb-0">Total Earnings</div>
              <div className="h2">$249.95</div>
              <div className="chart-placeholder small text-muted">Line chart placeholder</div>
            </div>

            <div className="card p-3 mt-3 small-cards">
              <div className="d-flex justify-content-between">
                <div>
                  <div className="small text-muted">Total Profit</div>
                  <div className="h5">$1,783</div>
                </div>

                <div>
                  <div className="small text-muted">Product Sold</div>
                  <div className="h5">15,830</div>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="row mt-4 g-3">
          <div className="col-md-4">
            <div className="card p-3">Daily Sales<br /><div className="h4">$249.95</div></div>
          </div>
          <div className="col-md-4">
            <div className="card p-3">Monthly Sales<br /><div className="h4">$249.95</div></div>
          </div>
          <div className="col-md-4">
            <div className="card p-3">Yearly Sales<br /><div className="h4">$249.95</div></div>
          </div>
        </div>
      </AdminPanelLayout>


    </>
  );
}

