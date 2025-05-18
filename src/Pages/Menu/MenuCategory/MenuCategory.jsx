import Cover from "../../../Shared/Cover/Cover";
import MenuItem from "../../../Shared/MenuItem/MenuItem";


const MenuCategory = ({items,btnText,img,title}) => {
    return (
        <section>
            {
                title &&  <Cover img={img} title={title}></Cover>
            }
            <div className="grid md:grid-cols-2">
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                   
                    ></MenuItem>)
                }

            </div>
            <div className="flex justify-center py-3">
                <button className="text-orange-400 uppercase border-0 border-b-4 border-orange-300 btn rounded-xl">{btnText}</button>
            </div>
        </section>
    );
};

export default MenuCategory;