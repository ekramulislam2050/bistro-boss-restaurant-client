

const SignUp = () => {
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
                    <div className="card-body">
                        <fieldset className="fieldset">
                            <label className="label">Name</label>
                            <input type="text" className="input" placeholder="Name" name="name"/>
                            
                            <label className="label">Email</label>
                            <input type="email" className="input" placeholder="Email" name="email"/>
                            
                            <label className="label">Password</label>
                            <input type="password" className="input" placeholder="Password" name="password"/>
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="mt-4 btn btn-neutral">signUp</button>
                        </fieldset>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;