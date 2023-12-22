import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import Login from "./login";
import Context from "./Context";
import Signin from "./Signin";
import Dashboard from "./Dashboard/Dashboard";
import CreateTask from "./Dashboard/CreateTask";
import TaskBoard from "./Dashboard/TaskBoard";
import PrivateRoute from "./PrivateRoute";
import Banner from "./Banner";
import ErrorPage from "./ErrorPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
         path: "/",
         element: <Banner></Banner>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signin",
        element: <Signin></Signin>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      {
        path: "/dashboard/createtask",
        element: <PrivateRoute><CreateTask></CreateTask></PrivateRoute>,
      },
      {
        path: "/dashboard/tasklist",
        element: <PrivateRoute><TaskBoard></TaskBoard></PrivateRoute>,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <Context>
    <RouterProvider router={router} />
  </Context>
);
