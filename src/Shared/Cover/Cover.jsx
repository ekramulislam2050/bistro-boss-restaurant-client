import img from "../../assets/menu/banner3.jpg"
import "../../Pages/Home/Featured/featured.css"
import { Parallax } from 'react-parallax';
const Cover = () => {
    return (
         
            <Parallax
                blur={{ min: -40, max: 40 }}
                bgImage={`${img}`}
                bgImageAlt="the dog"
                strength={-200}
                
            >
                Blur transition from min to max
                <div className="h-[700px] hero">
                      <div className="hero-overlay w-[400px] h-[200px]"></div>
                    <div className="text-center hero-content text-neutral-content ">
                        <div className="max-w-md px-20 py-10 ">
                            <h1 className="mb-5 text-5xl font-bold uppercase">Our menu</h1>
                            <p className="mb-5 uppercase">
                                Would You Like To Try a Dish?
                            </p>

                        </div>
                    </div>
                </div>
            </Parallax>

        
    );
};

export default Cover;