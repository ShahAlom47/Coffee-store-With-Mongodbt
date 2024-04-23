import { Link } from "react-router-dom";
import Navbar from "./Navbar";
// import { getAuth,} from "firebase/auth";
import { AuthContext } from "../AuthProvider";
import { useContext } from "react";
const Login = () => {
   

    // const auth = getAuth();
    const { loginUser} = useContext(AuthContext)

    const handelLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value
        const pass = form.password.value
        console.log(email, pass);
       
        loginUser( email, pass)
            .then(() => {
            
                // const user = userCredential.user;
                alert('LogIn Success');
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
            });


    }
    return (
        <div className=" w-8/12 m-auto">
            <Navbar></Navbar>
            <h1 className=" text-2xl text-center my-4 "> Login</h1>
            <hr />

            <div>

                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handelLogin} className="card-body">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" name="password" className="input input-bordered" required />
                            <label className="label flex flex-col">
                                <p href="#" className="label-text-alt link link-hover">Forgot password?</p>
                                <p href="#" className="label-text-alt ">Create a New Account <Link to={'/register'} className="btn btn-link">Register</Link> </p>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Login" />

                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Login;