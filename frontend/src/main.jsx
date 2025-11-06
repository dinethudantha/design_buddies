import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./assets/Components/Home.jsx";
import "./Main.scss";
import "bootstrap-icons/font/bootstrap-icons.css";
import Shop from "./assets/Components/Shop.jsx";
import CookerHoods from "./assets/Components/Categories/CookerHoods.jsx";
import WallDecor from "./assets/Components/Categories/WallDecor.jsx";
import PantryCupboards from "./assets/Components/Categories/PantryCupboards.jsx";
import Sinks from "./assets/Components/Categories/Sinks.jsx";
import "./assets/css/ProductPage.scss";
import AdminLoginForm from "./assets/Components/auth/AdminLoginForm.jsx";
import ProtectedRoute from "./assets/Components/auth/ProtectedRoute.jsx";
import Dashboard from "./assets/Components/dashboard/pages/Dashboard.jsx";
import CreateUser from "./assets/Components/dashboard/pages/CreateUser.jsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SignOut from "./assets/Components/auth/SignOut.jsx";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/shop", element: <Shop /> },
  { path: "/shop/cookerhoods", element: <CookerHoods /> },
  { path: "/shop/walldecor", element: <WallDecor /> },
  { path: "/shop/pantrycupboards", element: <PantryCupboards /> },
  { path: "/shop/sinks", element: <Sinks /> },
  { path: "/register", element: <ProtectedRoute><CreateUser /></ProtectedRoute>},
  { path: "/login", element: <AdminLoginForm /> },
  { path: "/dashboard", element: <ProtectedRoute><Dashboard /></ProtectedRoute> },
  { path: "/create-user", element: <ProtectedRoute><CreateUser /></ProtectedRoute> },
  { path: "/signout", element: <ProtectedRoute><SignOut /></ProtectedRoute> }

]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />

    <RouterProvider router={router} />
  </StrictMode>
);
