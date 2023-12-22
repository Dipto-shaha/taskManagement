import { Outlet } from "react-router-dom";
import Navber from "./Navber";
import UserShow from "./UserShow";
import Footer from "./Footer";

const Home = () => {
    return (
        <div className="flex flex-col">
            <div className="flex-grow">
                <Navber></Navber>
                <Outlet></Outlet>
                <UserShow></UserShow>
            </div>
            
            <Footer ></Footer>
        </div>
    );
};

export default Home;