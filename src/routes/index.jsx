import { createBrowserRouter } from "react-router-dom";

import Home from "../page/Home.jsx";
import App from "../App";
import Login from "@/page/Login.jsx";
import PublicRoute from "@/routes/PublicRoute.jsx";
import PrivateRoute from "@/routes/PrivateRoute.jsx";

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <PrivateRoute><App /></PrivateRoute>,
    children: [
      // dashboard routes
      { index: true, element: <Home /> },
      { path: '/home', element: <Home /> },
    ]
  },
  { path: '/login', element: <PublicRoute><Login /></PublicRoute> },


])