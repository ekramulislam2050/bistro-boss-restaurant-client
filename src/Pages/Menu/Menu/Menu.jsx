
import { Helmet } from "react-helmet-async";
import Cover from "../../../Shared/Cover/Cover";
import CoverMenu from "../../../Hook/CoverMenu";
import MenuCategory from "../MenuCategory/MenuCategory";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg"
import saladImg from "../../../assets/menu/salad-bg.jpg"
import pizzaImg from "../../../assets/menu/pizza-bg.jpg"
import soupImg from "../../../assets/menu/soup-bg.jpg"
import bannerImg from "../../../assets/menu/banner3.jpg"
const Menu = () => {
    const [menuData] = CoverMenu()
    const toDaysOffered = menuData.filter(item => item.category === "offered")
    const desserts = menuData.filter(item => item.category === "dessert")
    const pizza = menuData.filter(item => item.category === "pizza")
    const salads = menuData.filter(item => item.category === "salad") 
    const soups = menuData.filter(item => item.category === "soups") 
    return (
        <div>
            <Helmet> 
                <title>OurMenu page</title>
            </Helmet>
            <Cover img={bannerImg} title={'our menu'}></Cover>
             <SectionTitle
               subHeading={"--- don`t miss---"}
               heading={"To days offer"}
             ></SectionTitle>
            {/* To days offered------------- */}
            <MenuCategory items={toDaysOffered} btnText={"Ordered your favorite food" }></MenuCategory>
            {/* desserts-------------*/}
            <MenuCategory items={desserts} btnText={"Ordered your favorite food"}  img={dessertImg} title={"desserts"}></MenuCategory>
            {/* pizza-------------*/}
            <MenuCategory items={pizza} btnText={"Ordered your favorite food"} img={pizzaImg} title={"pizza"}></MenuCategory>
            {/* salads-------------*/}
            <MenuCategory items={salads} btnText={"Ordered your favorite food"} img={saladImg} title={"salad"}></MenuCategory>
            {/* soups-------------*/}
            <MenuCategory items={soups} btnText={"Ordered your favorite food"} img={soupImg} title={"soups"}></MenuCategory>
        </div>
    );
};

export default Menu;