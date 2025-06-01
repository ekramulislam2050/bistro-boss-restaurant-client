
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../../../Hook/useAxiosPublic";
import useAuth from "../../../Hook/useAuth";

const SignUp = () => {
    const { createUser, updateUserInFo } = useContext(AuthContext)
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors }, reset } = useForm()
    const axiosPublic = useAxiosPublic()
    const { googleSignIn } = useAuth()

    const onSubmit = (data) => {
        createUser(data.email, data.password)
            .then(result => {
                if (result.user) {
                    updateUserInFo(data.name, data.photoUrl)
                        .then(() => {
                            const userInfo = {
                                name: data.name,
                                email: data.email,

                            }
                            axiosPublic.post("/users", userInfo)
                                .then((res) => {
                                    if (res.data.insertedId) {
                                        Swal.fire({
                                            title: "user successfully created",
                                            showClass: {
                                                popup: `
                                        animate__animated
                                        animate__fadeInUp
                                        animate__faster
                                        `
                                            },
                                            hideClass: {
                                                popup: `
                                    animate__animated
                                    animate__fadeOutDown
                                    animate__faster
                                    `
                                            }
                                        });
                                        reset()
                                        navigate("/login")
                                    }
                                })





                        })
                        .catch((err) => {

                        })


                }


            })


    }

    //    handle google ------------

    const handleGoogle = () => {
        googleSignIn()
            .then(res => {
                console.log(res.user)
                const userInfo = {
                    name: res.user?.displayName,
                    email: res.user?.email
                }
                axiosPublic.post("/users", userInfo)
                    .then(res => {
                        if(res.data){
                            navigate("/")
                        }
                    })
            })
    }

    return (
        <div className="min-h-screen hero bg-base-200">
            <div className="flex-col hero-content lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">signUp now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="w-full max-w-sm shadow-2xl card bg-base-100 shrink-0">
                    <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                        <fieldset className="fieldset">

                            <label className="label">Name</label>
                            <input type="text" className="input" placeholder="Name"   {...register("name", { required: "name is required" })} />
                            {errors.name && <span className="text-red-500">{errors.name.message}</span>}

                            <label className="label">PhotoUrl</label>
                            <input type="text" className="input" placeholder="PhotoUrl"   {...register("photoUrl", { required: "photoUrl is required" })} />
                            {errors.photoUrl && <span className="text-red-500">{errors.photoUrl.message}</span>}

                            <label className="label">Email</label>
                            <input type="email" className="input" placeholder="Email"  {...register("email", { required: "email is required" })} />
                            {errors.email && <span className="text-red-500">{errors.email.message}</span>}

                            <label className="label">Password</label>
                            <input type="password" className="input" placeholder="Password"  {...register("password",
                                {
                                    required: "password is required",
                                    minLength: {
                                        value: 6,
                                        message: "6 character is required"
                                    },
                                    pattern: {
                                        value: /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                                        message: "Password must contain at least one uppercase, one lowercase, one number, and one special character (!@#$&*)",
                                    }
                                },

                            )} />
                            {errors.password && <span className="text-red-500">{errors.password.message}</span>}


                            <div><a className="link link-hover">Forgot password?</a></div>
                            <input type="submit" className="mt-4 btn btn-neutral" value={'signUp'} />

                        </fieldset>
                        {/* divider----------- */}
                        <div className="divider"></div>
                        <div>
                            <button className="btn-primary btn" onClick={handleGoogle}>Google</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;