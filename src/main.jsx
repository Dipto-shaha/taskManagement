import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import Login from "./login";
import Context from "./Context";
import Signin from "./Signin";
import Dashboard from "./Dashboard/Dashboard";
import CreateTask from "./Dashboard/CreateTask";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children:[
     {
        path:'/login',
        element:<Login></Login>
     },
     {
        path:'/signin',
        element:<Signin></Signin>
     }
    ]
  },
  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
    children:[
     {
        path:'/dashboard/createtask',
        element:<CreateTask></CreateTask>
     },
    ]
  }
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
     <Context>
        <RouterProvider router={router} />
      </Context>
  </React.StrictMode>
);
