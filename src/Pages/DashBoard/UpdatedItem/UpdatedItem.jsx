import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";



const UpdatedItem = () => {
    const data = useLoaderData()
    const { name, category, price, recipe } = data[0]
    const {register,handleSubmit}=useForm()
     const onSubmit=()=>{
        
     }
       
    return (
        <div className="px-4 py-8 md:px-8 lg:px-16">
            <SectionTitle heading="update an item" subHeading="---item info---" />

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Recipe Name */}
                <div className="w-full">
                    <label className="block mb-1 font-medium">Recipe Name*</label>
                    <input
                        {...register("name", { required: true })}
                        defaultValue={name}
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
                            defaultValue={category}
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
                            defaultValue={price}
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
                        defaultValue={recipe}
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
                   update item
                </button>
            </form>
        </div>
    );
};

export default UpdatedItem;