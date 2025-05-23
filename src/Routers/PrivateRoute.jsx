import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";

 

const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    if(loading){
        return <p className="flex justify-center text-4xl text-red-500">Loading...........<span className="text-4xl loading loading-spinner text-secondary"></span></p>
    }
    if(!user){
        return <Navigate to={"/login"}></Navigate>
    }
    return children
};

export default PrivateRoute;