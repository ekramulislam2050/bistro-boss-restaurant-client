import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../MainLayOut/MainLayOut";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
 
import Order from "../Pages/Order/Order";
import Login from "../Pages/Authentication/Login/Login";
 
import SignUp from "../Pages/Authentication/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import SecretPage from "../Pages/Authentication/SecretPage/SecretPage";
import DashBoard from "../MainLayOut/DashBoard";
import Cart from "../Pages/DashBoard/Cart/Cart";
import AllUsers from "../Pages/DashBoard/AllUsers/AllUsers";
 

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
                path:"/signUp",
                element:<SignUp></SignUp>
            },
            {
                path:"/secretPage",
                element:<PrivateRoute><SecretPage></SecretPage></PrivateRoute>
            }
        ]
    },
    {
        path:"/dashboard",
        element:<PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
        children:[
            {
                path:"/dashboard/cart",
                element:<Cart></Cart>
            },
            // admin route------------
            {
                path:"/dashboard/allUsers",
                element:<AllUsers></AllUsers>
            }
        ]
    }
]);