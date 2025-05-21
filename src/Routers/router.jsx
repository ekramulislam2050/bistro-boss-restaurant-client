import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../MainLayOut/MainLayOut";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
 
import Order from "../Pages/Order/Order";
import Login from "../Pages/Authentication/Login/Login";
import LogOut from "../Pages/Authentication/LogOut/LogOut";
import SignUp from "../Pages/Authentication/SignUp/SignUp";
 

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayOut></MainLayOut>,
        children: [
            {
                path: "/",
                element:<Home></Home>
            },
            {
                path:"/menu",
                element:<Menu></Menu>
            },
            {
                path:"/order/:category",
                element:<Order></Order>
            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/logOut",
                element:<LogOut></LogOut>
            },
            {
                path:"/signUp",
                element:<SignUp></SignUp>
            }
        ]
    },
]);