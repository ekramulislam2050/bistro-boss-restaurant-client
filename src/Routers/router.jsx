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
import AddItem from "../Pages/DashBoard/AddItem/AddItem";
import AdminRouter from "./adminRouter";
import ManageItems from "../Pages/DashBoard/ManageItems/ManageItems";
import UpdatedItem from "../Pages/DashBoard/UpdatedItem/UpdatedItem";
import Payment from "../Pages/DashBoard/Payment/Payment";
import PaymentHistory from "../Pages/DashBoard/PaymentHistory/PaymentHistory";
import AdminHome from "../Pages/DashBoard/AdminHome/AdminHome";
import UserHome from "../Pages/DashBoard/UserHome/UserHome";
 

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
            // normal user route-------------
            {
                path:"/dashboard/cart",
                element:<Cart></Cart>
            },
            {
                path:"/dashboard/payment",
                element:<Payment></Payment>
            },
            {
                path:"/dashboard/paymentHistory",
                element:<PaymentHistory></PaymentHistory>
            },
            {
                path:"/dashboard/userHome",
                element:<UserHome></UserHome>
            },
            // admin route------------
            {
                path:"/dashboard/allUsers",
                element:<AdminRouter><AllUsers></AllUsers></AdminRouter>
            },
            {
                path:"/dashboard/addItem",
                element:<AdminRouter><AddItem></AddItem></AdminRouter>
            },

            {
                path:"/dashboard/manageItems",
                element:<AdminRouter><ManageItems></ManageItems></AdminRouter>
            },
            {
                path:"/dashboard/adminHome",
                element:<AdminRouter><AdminHome></AdminHome></AdminRouter>
            },
            {
                path:"/dashboard/updatedItem/:id",
                element:<AdminRouter><UpdatedItem></UpdatedItem></AdminRouter>,
                loader:({params})=>fetch(`http://localhost:5000/menu/${params.id}`)

            }
        ]
    }
]);