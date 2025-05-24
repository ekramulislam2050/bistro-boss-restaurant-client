import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { IoCart } from "react-icons/io5";

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext)
    const navOptions = <>
        <li><NavLink className={"uppercase text-white text-[15px] font-medium"} to="/">Home</NavLink></li>

        <li><NavLink className={"uppercase text-white text-[15px] font-medium"}>Contact Us</NavLink></li>

        <li><NavLink className={"uppercase  text-white text-[15px] font-medium"}>Dashboard</NavLink></li>

        <li><NavLink className={"uppercase text-white text-[15px] font-medium"} to="/menu">Our Menu</NavLink></li>

        <li><NavLink className={"uppercase text-white text-[15px] font-medium"} to={"/order/salad"}>Order Food</NavLink></li>

        <li><NavLink className={"uppercase text-white text-[15px] font-medium"} to={"/secretPage"}>Secret page</NavLink></li>

        <li>
            <button className=" btn">
                <IoCart  className="text-2xl "/> <div className="text-xl text-black badge badge-secondary">+99</div>
            </button>
        </li>

    </>

    const handleLogOut = () => {
        logOut()
            .then(() => {
                Swal.fire({
                    title: "logOut  successful",
                    showClass: {
                        popup: `
                                animate__animated
                                animate__fadeInUp
                                animate__faster
                                                        `
                    },
                    hideClass: {
                        popup: `
                                animate__animated
                                animate__fadeOutDown
                                animate__faster
                                `
                    }
                });
            })
    }
    return (
        <div className="fixed z-10 max-w-screen-xl text-white bg-black shadow-sm opacity-60 navbar">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="p-2 mt-3 shadow menu menu-sm dropdown-content bg-base-100 rounded-box z-1 w-52">
                        {navOptions}
                    </ul>
                </div>
                <a className="text-xl btn btn-ghost">Bistro Restaurant</a>
            </div>
            <div className="hidden navbar-center lg:flex">
                <ul className="px-1 menu menu-horizontal">
                    {navOptions}

                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?

                        <button className="btn" onClick={handleLogOut}>LogOut</button>
                        : <Link to={"/login"}>
                            <button className="btn">Login</button>
                        </Link>
                }


            </div>
        </div>
    );
};

export default NavBar;