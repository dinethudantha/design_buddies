import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './assets/Components/Home.jsx';
import './Main.scss'
import "bootstrap-icons/font/bootstrap-icons.css";

const router = createBrowserRouter([
  {path:'/',element:<Home />}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
