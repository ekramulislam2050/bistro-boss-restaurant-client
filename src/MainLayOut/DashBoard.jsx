import { FaAd, FaBook, FaCalendar, FaHistory, FaHome, FaJediOrder, FaList, FaShoppingCart, FaUser, FaUtensils } from "react-icons/fa";
import { MdOutlineHomeWork } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";



const DashBoard = () => {
    const isAdmin = true;
    return (
        <div className="flex ">
            {/* side bar-------- */}
            <div className="w-64 min-h-screen bg-orange-400 ">
                {
                    isAdmin ?
                        <>
                            <li className="p-4 uppercase menu">
                                <NavLink to={"/dashboard/adminHome"}>
                                    <FaHome></FaHome>
                                    admin Home
                                </NavLink>
                            </li>
                            <li className="p-4 uppercase menu">
                                <NavLink to={"/dashboard/addItems"}>
                                 <FaUtensils></FaUtensils>
                                    Add items
                                </NavLink>
                            </li>
                            <li className="p-4 uppercase menu">
                                <NavLink to={"/dashboard/manageItems"}>
                                
                                   <FaList></FaList>
                                    Manage items
                                </NavLink>
                            </li>

                            <li className="p-4 uppercase menu">
                                <NavLink to={"/dashboard/manageBooking"}>
                                   <FaBook></FaBook>
                                   
                                   Manage Booking
                                </NavLink>
                            </li>
                            <li className="p-4 uppercase menu">
                                <NavLink to={"/dashboard/allUsers"}>
                                  <FaUser></FaUser>
                                   All users
                                </NavLink>
                            </li>
                         
                        </>
                        :
                        <>
                            <li className="p-4 uppercase menu">
                                <NavLink to={"/dashboard/cart"}>
                                    <FaHome></FaHome>
                                    User Home
                                </NavLink>
                            </li>
                            <li className="p-4 uppercase menu">
                                <NavLink to={"/dashboard/cart"}>
                                    <FaCalendar></FaCalendar>
                                    reservation
                                </NavLink>
                            </li>
                            <li className="p-4 uppercase menu">
                                <NavLink to={"/dashboard/cart"}>
                                    <FaHistory></FaHistory>
                                    payment history
                                </NavLink>
                            </li>

                            <li className="p-4 uppercase menu">
                                <NavLink to={"/dashboard/cart"}>
                                    <FaShoppingCart></FaShoppingCart>
                                    My cart
                                </NavLink>
                            </li>
                            <li className="p-4 uppercase menu">
                                <NavLink to={"/dashboard/cart"}>
                                    <FaAd></FaAd>
                                    add review
                                </NavLink>
                            </li>
                            <li className="p-4 uppercase menu">
                                <NavLink to={"/dashboard/cart"}>
                                    <FaList></FaList>
                                    my booking
                                </NavLink>
                            </li>
                        </>
                }
                {/* divider---------------- */}
                <div className="divider"></div>

                <li className="p-4 uppercase menu">
                    <NavLink to={"/"}>
                        <MdOutlineHomeWork />
                        home
                    </NavLink>
                </li>
                <li className="p-4 uppercase menu">
                    <NavLink to={"/order/salad"}>
                        <FaJediOrder></FaJediOrder>
                        order food
                    </NavLink>
                </li>
            </div>

            {/* dashboard content----------- */}
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashBoard;