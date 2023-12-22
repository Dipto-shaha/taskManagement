import { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { AuthContest } from "../Context";
import { ToastContainer } from "react-toastify";

const Dashboard = () => {
  const { user } = useContext(AuthContest);
  return (
    <>
    <p className="mx-2 my-5 md:text-5xl  text-center text-xl font-bold">
        Easy<span className="text-[#ff715b]">Plan</span>
      </p>
    <div className="flex">
      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      
      <div className="w-1/6">
        <span className="flex justify-center items-center border-2 p-1 rounded-xl mr-2  border-[#7ec6d5] ">
          <img
            className=" rounded-full border-1 h-12 w-14  mx-2 "
            src={user.photoURL}
            alt="Image"
          />
          <p className="mr-2">{user.displayName ? user.displayName : "Name"}</p>
        </span>
        <ul className="space-y-5 mx-20 mt-5">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/createtask">Create Task</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/tasklist">Task List</NavLink>
          </li>
        </ul>
      </div>
      <div className="w-5/6">
        <Outlet></Outlet>
      </div>
    </div></>
  );
};

export default Dashboard;
