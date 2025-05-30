import { useForm } from "react-hook-form";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../../../Hook/useAxiosPublic";
import useAxiosSecure from "../../../Hook/useAxiosSecure";
import Swal from "sweetalert2";

const imgHostingKey = import.meta.env.VITE_img_hosting_key
const imgHostingURL = `https://api.imgbb.com/1/upload?expiration=600&key=${imgHostingKey}`
const AddItem = () => {
    const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxiosSecure()
    const { register, handleSubmit } = useForm()
    const onSubmit = async (data) => {

        // img upload to imgBB----------
        const imgFile = { image: data.image[0] }
        const res = await axiosPublic.post(imgHostingURL, imgFile, {
            headers: {
                "content-type": "multipart/form-data"
            }
        })
        if (res.data.success) {
            const itemInfo = {
                name: data.name,
                price: parseFloat(data.price),
                category: data.category,
                recipe: data.recipe,
                image: res.data.data.display_url
            }
            const itemData = await axiosSecure.post("/menu", itemInfo)
            // console.log(itemData)
            if (itemData.data.insertedId) {
               
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Item Data has been saved",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }

    }
    return (
        <div className="px-4 py-8 md:px-8 lg:px-16">
            <SectionTitle heading="add an item" subHeading="---what's new---" />

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Recipe Name */}
                <div className="w-full">
                    <label className="block mb-1 font-medium">Recipe Name*</label>
                    <input
                        {...register("name", { required: true })}
                        type="text"
                        placeholder="Type here"
                        className="w-full input input-bordered"
                    />
                </div>

                {/* Category & Price */}
                <div className="flex flex-col w-full gap-4 md:flex-row">
                    <div className="w-full">
                        <label className="block mb-1 font-medium">Category*</label>
                        <select
                            {...register("category", { required: true })}
                            defaultValue=""
                            className="w-full select select-bordered"
                        >
                            <option value="" disabled>select your category</option>
                            <option value="salad">Salad</option>
                            <option value="pizza">Pizza</option>
                            <option value="soup">Soup</option>
                            <option value="dessert">Dessert</option>
                            <option value="drink">Drink</option>
                        </select>
                    </div>

                    <div className="w-full">
                        <label className="block mb-1 font-medium">Price*</label>
                        <input
                            {...register("price", { required: true })}
                            type="number"
                            step="0.01"
                            placeholder="Type here"
                            className="w-full input input-bordered"
                        />
                    </div>
                </div>

                {/* Recipe Details */}
                <div className="w-full">
                    <label className="block mb-1 font-medium">Recipe Details</label>
                    <textarea
                        {...register("recipe")}
                        className="w-full textarea textarea-bordered"
                        placeholder="Recipe Details"
                    ></textarea>
                </div>

                {/* File Upload */}
                <div className="w-full">
                    <label className="block mb-1 font-medium">Upload Image</label>
                    <input
                        {...register("image")}
                        type="file"
                        className="w-full file-input file-input-bordered"
                    />
                </div>

                {/* Submit Button */}
                <button type="submit" className="flex items-center mt-4 btn btn-primary">
                    Add Item <FaUtensils className="ml-2" />
                </button>
            </form>
        </div>
    );

};

export default AddItem;