import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './assets/Components/Home.jsx';
import './Main.scss'
import "bootstrap-icons/font/bootstrap-icons.css";
import Shop from './assets/Components/Shop.jsx';
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />


const router = createBrowserRouter([
  {path:'/',element:<Home />},
  {path:'/shop',element:<Shop />},
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
