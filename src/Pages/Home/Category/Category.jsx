import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import img1 from "../../../assets/home/slide1.jpg"
import img2 from "../../../assets/home/slide2.jpg"
import img3 from "../../../assets/home/slide3.jpg"
import img4 from "../../../assets/home/slide4.jpg"
import img5 from "../../../assets/home/slide5.jpg"
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';

const Category = () => {
    return (
        <div className='my-5 '>
             <section>
                  <SectionTitle
                     subHeading={"--- from 11.00am to 10.00pm ---"}
                     heading={"order online"}
                  ></SectionTitle>
             </section>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className=" mySwiper"
            >
                <SwiperSlide>
                    <img src={img1} alt="" />
                    <h2 className='-mt-16 text-4xl text-center text-white uppercase opacity-50'>salad</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img2} alt="" />
                    <h2 className='-mt-16 text-4xl text-center text-white uppercase opacity-50'>pizza</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img3} alt="" />
                    <h2 className='-mt-16 text-4xl text-center text-white uppercase opacity-50'>soups</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img4} alt="" />
                    <h2 className='-mt-16 text-4xl text-center text-white uppercase opacity-50'>desserts</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img5} alt="" />
                    <h2 className='-mt-16 text-4xl text-center text-white uppercase opacity-50'>salad</h2>
                </SwiperSlide>


            </Swiper>
        </div>

    );
};

export default Category;