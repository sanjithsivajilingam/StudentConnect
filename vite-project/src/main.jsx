import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from "./routes/root";
import Home from "./routes/home";
import Error from "./error";
import Redeem from "./routes/redeem";
import Games from "./routes/games";
import Awards from "./routes/awards";
import Points from "./routes/points";
import Login from "./routes/login";
import Register from "./routes/register";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
  },
  {
    path: "/home",
    element: <Home />,
    errorElement: <Error />,

  },
  {
    path: "/redeem",
    element: <Redeem />,
    errorElement: <Error />,
  },
  {
    path: "/games",
    element: <Games />,
    errorElement: <Error />,
  },
  {
    path: "/awards",
    element: <Awards />,
    errorElement: <Error />,
  },
  {
    path: "/points",
    element: <Points />,
    errorElement: <Error />,
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <Error />,
  },
  {
    path: "/register",
    element: <Register />,
    errorElement: <Error />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
