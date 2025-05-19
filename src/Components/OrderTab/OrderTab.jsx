import FoodCard from "../FoodCard/FoodCard";

 

const OrderTab = ({items}) => {
    console.log(items)
    return (
       <div className="flex justify-center">
          <div className="grid mx-2 my-5 md:grid-cols-3">
             {
                items.map(item=><FoodCard item={item} key={item._id}></FoodCard>)
             }
        </div>
       </div>
    );
};

export default OrderTab;