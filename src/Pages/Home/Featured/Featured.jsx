import featuredImg from "../../../assets/home/featured.jpg"
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import "./featured.css"
const Featured = () => {
    return (
        <div className=" featured">
            <div className="py-10 bg-text ">
                <SectionTitle
                  subHeading={"--- check it out ---"}
                  heading={"from our menu"}
                ></SectionTitle>
            </div>
            <div className="items-center justify-center gap-10 pb-20 bg-text md:flex px-36 ">
                <div className="">
                    <img src={featuredImg} alt="" />
                </div>
                <div>
                     <h3 className="text-xl font-bold "> May 20, 2025</h3>
                     <h4 className="font-semibold">WHERE CAN I GET SOME?</h4>
                     <p className="py-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias autem amet omnis, porro laboriosam deleniti magnam sit tenetur tempora temporibus est excepturi facilis vitae corporis eveniet incidunt inventore quibusdam. Porro!

                     </p>
                     <button className=" btn btn-outline"> Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;