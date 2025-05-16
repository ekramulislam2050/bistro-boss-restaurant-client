import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';


// import required modules
import { Grid, Pagination } from 'swiper/modules';
import { useEffect, useState } from "react";


const ChefRecommends = () => {
    const [chefRecommends, setChefRecommends] = useState([])
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
                        fill:"row"
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
                            <button className="border-0 border-b-4 border-orange-300 rounded-b-xl btn">Add To Cart</button>
                        </SwiperSlide>)
                    }



                </Swiper>



            </div>
        </div>

    );
};

export default ChefRecommends;