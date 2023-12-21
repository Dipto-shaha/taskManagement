import { Outlet } from "react-router-dom";
import Navber from "./Navber";
import UserShow from "./UserShow";

const Home = () => {
    return (
        <div>
            <Navber></Navber>

            <Outlet></Outlet>
            <UserShow></UserShow>
        </div>
    );
};

export default Home;