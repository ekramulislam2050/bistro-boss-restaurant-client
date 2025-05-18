
import MenuItem from "../../../Shared/MenuItem/MenuItem";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import CoverMenu from "../../../Hook/CoverMenu";



const PopularMenu = () => {

    const [menuData, loading] = CoverMenu()
    if (loading) {
        return (
               <div className="flex items-center justify-center py-10 text-5xl font-bold text-red-500"><p>data is loading......</p>
            <span className="   loading loading-spinner text-error w-[100px]"></span>
        </div>
        )
     
    }

    const menu = menuData.filter(data => data.category === "popular")
    return (
        <section>
            <div>
                <SectionTitle
                    subHeading={"--- check it out ---"}
                    heading={"from our menu"}
                ></SectionTitle>
            </div>


            <div className="grid md:grid-cols-2">



                {
                    menu.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }

            </div>
            <div className="flex justify-center py-3">
                <button className="text-orange-400 border-0 border-b-4 border-orange-300 btn rounded-xl ">VIEW FULL MENU</button>
            </div>
        </section>

    );
};

export default PopularMenu;