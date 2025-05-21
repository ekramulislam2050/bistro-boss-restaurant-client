
import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';
import { FaQuoteLeft } from "react-icons/fa";



const Testimonials = () => {
    const [reviews, setReviews] = useState([])
    // const [reviewData, setReviewData] = useState()
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <section className="py-10">
            <SectionTitle
                subHeading={"---What our client say"}
                heading={"testimonials"}
            ></SectionTitle>

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper h-[250px] ">
                {
                    reviews.map(data => <SwiperSlide key={data._id}  className="px-20 text-center" >
                       
                           <div className="flex justify-center pb-5">
                               <Rating
                                style={{ maxWidth: 180 }}
                                value={data.rating}
                                readOnly

                            />
                           </div>

                            <p className="flex justify-center pb-5 text-4xl"><FaQuoteLeft /></p>

                            <p className="">{data.details}</p>
                            <h3 className="text-xl text-orange-400">{data.name}</h3>
                      


                    </SwiperSlide>)
                }


            </Swiper>


        </section>
    );



};

export default Testimonials;