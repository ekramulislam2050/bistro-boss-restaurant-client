import { useContext, useEffect, useState } from "react";
import { LoadCanvasTemplate, loadCaptchaEnginge, validateCaptcha } from "react-simple-captcha";
import { AuthContext } from "../../../Provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";



const Login = () => {
    const location = useLocation()
    // console.log(location)
    const from = location?.state?.from?.pathname || "/";
    // console.log(from)
     const navigate=useNavigate()
    const [disable, setDisable] = useState(true)
    const { signIn } = useContext(AuthContext)
    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        console.log(email, password)
        signIn(email, password)
            .then(data => {
                const user = data.user
                if (user) {
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
                  
                    navigate(from,{replace:true})
                }

            })
            .catch(err => {

            })
    }
    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleCaptcha = (e) => {
        const userCaptchaValue = e.target.value
        if (validateCaptcha(userCaptchaValue)) {
            setDisable(false)
        } else {
            setDisable(true)
        }
    }

    return (
        <div className="min-h-screen hero bg-base-200">
            <div className="flex-col hero-content lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="w-full max-w-sm shadow-2xl card bg-base-100 shrink-0">
                    <form className="card-body" onSubmit={handleSubmit}>
                        <fieldset className="fieldset">
                            <label className="label">Email</label>
                            <input type="email" className="input" placeholder="Email" name="email" />
                            <label className="label">Password</label>
                            <input type="password" className="input" placeholder="Password" name="password" />
                            {/* for captcha-------start------ */}
                            <div className="h-20 my-3 border border-red-500">
                                <LoadCanvasTemplate />
                            </div>
                            <div className="">
                                <input type="text" className="mb-3 input" placeholder="type your captcha " name="captcha" onBlur={handleCaptcha} required />
                                <small className="text-orange-500">Type the captcha and click outside the box to verify.</small>
                            </div>
                            {/* for captcha-----end-------- */}
                            <div>
                                <Link to={"/signUp"}>
                                    <button className="text-red-500 link link-hover">Do not an account?Go to sign Up</button>
                                </Link>
                            </div>
                            <button className="mt-4 btn btn-neutral" disabled={disable}>Login</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;