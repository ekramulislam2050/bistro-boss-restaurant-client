import { useEffect, useState } from "react";
import useAuth from "../../../Hook/useAuth";
import useAxiosSecure from "../../../Hook/useAxiosSecure";



const PaymentHistory = () => {
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()
    const [payments, setPayments] = useState([])
    useEffect(() => {
        if (user?.email) {
            axiosSecure.get(`https://bistro-boss-restaurant-server-drab.vercel.app/payment/${user?.email}`)
                .then(res => {
                    setPayments(res.data)
                })
                .catch(err => {
                    console.log("error of payment history:", err)
                })
        }

    }, [user,axiosSecure])

    return (
        <div className="p-4">
            <h2 className="mb-4 text-2xl font-bold">Payment History</h2>
            <div className="overflow-x-auto">
                <table className="table w-full border">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Date</th>
                            <th>Transaction ID</th>
                            <th>Amount</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {payments.map((payment, index) => (
                            <tr key={payment._id}>
                                <td>{index + 1}</td>
                                <td>{new Date(payment.date).toLocaleString()}</td>
                                <td>{payment.transactionId || "N/A"}</td>
                                <td>${payment.price.toFixed(2)}</td>
                                <td>{payment.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );

};

export default PaymentHistory;