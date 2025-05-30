import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../Hook/useAdmin";
import useAuth from "../Hook/useAuth";



const AdminRouter = ({children}) => {
    const [admin, isLoadingAdmin] = useAdmin()
    const { user, loading } = useAuth()
     const location = useLocation()
    if (loading || isLoadingAdmin) {
        return <p className="flex justify-center text-4xl text-red-500">Loading...........<span className="text-4xl loading loading-spinner text-secondary"></span></p>
    }
    if (!user || !admin) {
        return <Navigate to={"/login"} state={{ from: location }} replace></Navigate>
    }
    return children


};

export default AdminRouter;