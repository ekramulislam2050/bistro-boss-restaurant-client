import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

 

const useAdmin = () => {
    const {user}=useAuth()   
    const axiosSecure=useAxiosSecure()
     const {data:isAdmin,isPending:isLoadingAdmin}=useQuery({
           queryKey:["isAdmin",user?.email],
           queryFn: async ()=>{
                 const res = await axiosSecure.get( `/users/admin/${user.email}`)
            
                return res.data?.admin
           },
                enabled: !!user?.email,
     })
     return [isAdmin,isLoadingAdmin]
};

export default useAdmin;