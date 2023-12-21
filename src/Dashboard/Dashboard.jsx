import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div>
            <div className="w-1/6">
                <ul>
                    <li>
                        <NavLink></NavLink>
                    </li>
                    <li>
                        <NavLink></NavLink>
                    </li>
                    <li>
                        <NavLink></NavLink>
                    </li>
                </ul>
            </div>
            <div className="w-5/6">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;