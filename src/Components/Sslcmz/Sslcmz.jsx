import useAuth from "../../Hook/useAuth";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import useCart from "../../Hook/useCart";



const Sslcmz = () => {
       const axiosSecure = useAxiosSecure()
     const { user } = useAuth()
     console.log("user sslcmz",user)
    const [cart, refetch] = useCart()
    const totalPrice = cart.reduce((total, item) => total + item.price, 0)

    const payment = {
        email: user?.email,
        price: totalPrice,
        userName:user?.displayName
        
    }

    const handleSslcmz =async () => {
            const res = await axiosSecure.post("/sslPayment", payment)
            refetch()
            if(res.data.url){
                window.location.replace(res.data.url)
            }
    }
    return (
        <div className="text-center ">
            <button className="text-xl btn btn-success" onClick={handleSslcmz}>Click for pay by sslcommerz</button>
        </div>
    );
};

export default Sslcmz;