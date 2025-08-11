import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import './index.css'
import App from './App'
import Catalogue from './components/catalogue'
import Cart from './components/cart'
import Home from './components/home'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true, // This makes Home the default page at "/"
        element: <Home />,
      },
      {
        path: "catalogue",
        element: <Catalogue />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
