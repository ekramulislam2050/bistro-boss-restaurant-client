import Swal from "sweetalert2";
import useAuth from "../../Hook/useAuth";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../Hook/useCart";


const FoodCard = ({ item }) => {

    const { image, price, name, recipe } = item
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()
    const navigate = useNavigate()
    const location = useLocation()
    const [, refetch] = useCart()
    const handleAddToCart = (food) => {

        if (user && user.email) {
            axiosSecure.post('/carts', {
                itemId: food._id,
                email: user.email,
                name: food.name,
                image: food.image,
                price: food.price
            })
                .then((res) => {
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: `${food.name}`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                        refetch()
                    }

                })
                .catch(err => {
                    Swal.fire({
                        icon: `${err}`,
                        title: 'ERROR',
                        text: `${err.message}`,
                    });
                })
        } else {
            Swal.fire({
                title: "You are not logged in",
                text: "please login to add to cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate("/logIn", { state: { from: location } })
                }
            });
        }
    }

    return (
        <div className="shadow-sm card bg-base-100 w-96">
            <figure>
                <img
                    src={image} />
            </figure>
            <p className="absolute right-0 px-4 mt-4 mr-4 text-white bg-slate-900">{price}</p>
            <div className=" card-body">
                <h2 className="justify-center card-title">{name}</h2>
                <p className="text-center">{recipe}</p>
                <div className="justify-center card-actions">
                    <button className="text-orange-400 border-0 border-b-4 border-orange-300 btn rounded-xl " onClick={() => handleAddToCart(item)}>Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;