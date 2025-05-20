import FoodCard from "../FoodCard/FoodCard";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';


const OrderTab = ({ items }) => {
   console.log(items)
   const itemLimit = 6
   const itemPerPage = []

   for (let i = 0; i < items.length; i += itemLimit) {

      itemPerPage.push(items.slice(i, i + itemLimit))
   }

   const pagination = {
      clickable: true,
      renderBullet: function (index, className) {
         return '<span class="' + className + '">' + (index + 1) + '</span>';
      },
   };

   return (
      <div>
         <Swiper
            pagination={pagination}
            modules={[Pagination]}
            className="mySwiper"
         >
            {
               itemPerPage.map((itemGroupForPerPage, index) => <SwiperSlide key={index}>
                  <div className="flex justify-center">
                     <div className="grid mx-2 my-5 md:grid-cols-3">
                        {
                           itemGroupForPerPage.map(item => <FoodCard item={item} key={item._id}></FoodCard>)
                        }
                     </div>
                  </div>

               </SwiperSlide>)
            }


          
         </Swiper>
      </div>

   );
};

export default OrderTab;