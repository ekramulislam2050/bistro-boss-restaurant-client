import { useEffect, useState } from "react";
import MenuItem from "../../../Shared/MenuItem/MenuItem";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";





const PopularMenu = () => {
    const [menu, setMenu] = useState([])
    console.log(menu)
    useEffect(() => {
        fetch("menu.json")
            .then(res => res.json())
            .then(data => {
                const popularItem = data.filter(item => item.category == "popular")
                setMenu(popularItem)
            })
    }, [])
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
        </section>

    );
};

export default PopularMenu;