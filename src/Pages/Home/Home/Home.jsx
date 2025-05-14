import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import ChefService from "../ChefService/ChefService";
import PopularMenu from "../PopularMenu/PopularMenu";

 

const Home = () => {
    return (
        <div>
             <Banner></Banner>
             <Category></Category>
             <ChefService></ChefService>
             <PopularMenu></PopularMenu>
        </div>
    );
};

export default Home;