

const FoodCard = ({ item }) => {
       const {image,price,name,recipe}=item 
    return (
        <div className="shadow-sm card bg-base-100 w-96">
            <figure>
                <img
                    src={image}/>
            </figure>
            <p className="absolute right-0 px-4 mt-4 mr-4 text-white bg-slate-900">{price}</p>
            <div className=" card-body">
                <h2 className="justify-center card-title">{name}</h2>
                <p className="text-center">{recipe}</p>
                <div className="justify-center card-actions">
                      <button className="text-orange-400 border-0 border-b-4 border-orange-300 btn rounded-xl ">Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;