 

const MenuItem = ({item}) => {
    console.log(item)
      const {image,price,name,recipe}=item 
    return (
        
        <div className="flex gap-5 my-5">
            <img src={image} className="w-[120px]" style={{borderRadius:"0 20px 20px 20px"}} />
            <div>
                <h3 className="text-xl font-semibold">{name}-------------</h3>
                <p className="mt-2">{recipe}</p>
            </div>
            <p className="text-yellow-500">${price}</p>
        </div>
    );
};

export default MenuItem;