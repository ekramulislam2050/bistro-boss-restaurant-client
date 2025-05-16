import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import ChefRecommends from "../ChefRecommends/ChefRecommends";
import ChefService from "../ChefService/ChefService";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";

 

const Home = () => {
    return (
        <div>
             <Banner></Banner>
             <Category></Category>
             <ChefService></ChefService>
             <PopularMenu></PopularMenu>
             <Featured></Featured>
             <Testimonials></Testimonials>
             <ChefRecommends></ChefRecommends>
        </div>
    );
};

export default Home;