import { createBrowserRouter } from "react-router-dom";

import Home from "../page/Home.jsx";
import App from "../App";

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      // dashboard routes
      { index: true, element: <Home /> },
      { path: '/home', element: <Home /> },
    ]
  },


])