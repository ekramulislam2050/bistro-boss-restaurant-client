import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';


// import required modules
import { Grid, Pagination } from 'swiper/modules';
import { useEffect, useState } from "react";
import useAuth from "../../../Hook/useAuth";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../Hook/useAxiosSecure";


const ChefRecommends = () => {
    const [chefRecommends, setChefRecommends] = useState([])
    const { user } = useAuth()
    const navigate = useNavigate()
    const location = useLocation()
    const axiosSecure = useAxiosSecure()
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
    useEffect(() => {
        fetch("menu.json")
            .then(res => res.json())
            .then(data => {
                const chefRecommendsData = data.filter(item => item.category === "salad")
                setChefRecommends(chefRecommendsData)
            })
    }, [])

    return (
        <div>
            <div className="flex items-center justify-center py-20 bg-black">
                <h1 className="text-3xl text-center text-white ">Call Us : +88 01944224881  </h1>
            </div>
            <div>
                <SectionTitle
                    subHeading={"---Should Try---"}
                    heading={"Chef Recommends"}
                ></SectionTitle>


                <Swiper

                    slidesPerView={3}
                    grid={{
                        rows: 2,
                        fill: "row"
                    }}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Grid, Pagination]}
                    className=" mySwiper"
                >


                    {
                        chefRecommends.map(data => <SwiperSlide key={data._id} className="pb-5 text-center" >
                            <img src={data.image} alt="" />
                            <h3 className="text-xl font-semibold">{data.name}</h3>
                            <p className="py-2">{data.recipe}</p>
                            <button className="text-orange-400 border-0 border-b-4 border-orange-300 rounded-b-xl btn" onClick={() => handleAddToCart(data)}>Add To Cart</button>
                        </SwiperSlide>)
                    }



                </Swiper>



            </div>
        </div>

    );
};

export default ChefRecommends;