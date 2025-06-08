import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hook/useAuth";
import useAxiosSecure from "../../../Hook/useAxiosSecure";
import { FaAlignJustify, FaCartPlus, FaDollarSign, FaUser } from "react-icons/fa";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Legend } from 'recharts';
import { PieChart, Pie, ResponsiveContainer } from 'recharts';



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

    const { data: chartData = [] } = useQuery({
        queryKey: ['order-state'],
        queryFn: async () => {
            const res = await axiosSecure.get("/order-state")
            return res.data
        }
    })
    // console.log(chartData, state)
    // bar chart---------------
    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
    const data = chartData.map((item) => ({
        name: item.category,
        revenue: item.revenue

    }))



    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };
    // pie chart-----------------
    const pieData = chartData.map(item => ({
        name: item.category,
        value: item.revenue
    }))



    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };
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
            <div className="flex">
                <div className="w-1/2">
                    <BarChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Bar dataKey="revenue" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                            ))}
                        </Bar>
                    </BarChart>
                </div>
                <div className="w-1/2">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart width={400} height={400}>
                            <Pie
                                data={pieData}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                label={renderCustomizedLabel}
                                outerRadius={80}
                                fill="#8884d8"
                                dataKey="value"
                            >
                                {pieData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Legend></Legend>
                        </PieChart>
                    </ResponsiveContainer>

                </div>
            </div>
        </div>
    );
};

export default AdminHome;