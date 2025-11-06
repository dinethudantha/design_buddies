import React from 'react';
import SideBar from './Components/Common/SideBar';
import DashboardTopBar from './Components/Common/DashboardTopBar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AdminPanelLayout({ children }) {
  return (
    <>
      
      <SideBar />

      <div className="app-shell content-bar">
        <DashboardTopBar />

        <div className="d-flex content-area">
          <main className="content p-4 w-100">
            {children}
          </main>
        </div>
      </div>
    </>
  );
}

export default AdminPanelLayout;
