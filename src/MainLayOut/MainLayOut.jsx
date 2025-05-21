import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Shared/Footer";
import NavBar from "../Shared/NavBar";

 

const MainLayOut = () => {
    const location=useLocation()
    // console.log(location)
    const noHeaderFooter = location.pathname.includes("/login")
    return (
        <div>
            {noHeaderFooter || <NavBar></NavBar>}
            <Outlet></Outlet>
             {noHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default MainLayOut;