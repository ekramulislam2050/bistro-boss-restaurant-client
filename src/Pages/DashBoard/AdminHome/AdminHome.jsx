import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hook/useAuth";
import useAxiosSecure from "../../../Hook/useAxiosSecure";
import { FaAlignJustify,  FaCartPlus, FaDollarSign, FaUser } from "react-icons/fa";



const AdminHome = () => {
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()
    const { data: state = [] } = useQuery({
        queryKey: ["admin-state"],
        queryFn: async () => {
            const res = await axiosSecure.get("/admin-state")
            return res.data
        }
    })

    const {data:chartData=[]}=useQuery({
        queryKey:['order-state'],
        queryFn:async()=>{
            const res= await axiosSecure.get("/order-state")
            return res.data
        }
    })
    console.log(chartData,state)
    return (
        <div>
            <h1 className="text-3xl font-semibold">HI,Welcome {user?.displayName}</h1>
            <div className="shadow stats">
                <div className="stat">
                    <div className="stat-figure text-secondary">
                       <FaDollarSign className="text-2xl"></FaDollarSign>
                    </div>
                    <div className="text-xl font-semibold stat-title">Revenue</div>
                    <div className="stat-value">${parseInt(state.resultOfRevenue)}</div>
                    <div className="stat-desc">Jan 1st - Feb 1st</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <FaUser className="text-2xl"></FaUser>
                    </div>
                    <div className="text-xl font-semibold stat-title">Users</div>
                    <div className="stat-value">{state.users}</div>
                    <div className="stat-desc">↗︎ 400 (22%)</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <FaAlignJustify className="text-2xl"></FaAlignJustify>
                    </div>
                    <div className="text-xl font-semibold stat-title">Menu item</div>
                    <div className="stat-value">{state.menuItem}</div>
                    <div className="stat-desc">↘︎ 90 (14%)</div>
                </div>
                <div className="stat">
                    <div className="stat-figure text-secondary">
                         <FaCartPlus className="text-2xl"></FaCartPlus>
                    </div>
                    <div className="text-xl font-semibold stat-title">Orders</div>
                    <div className="stat-value">{state.orders}</div>
                    <div className="stat-desc">↘︎ 90 (14%)</div>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;