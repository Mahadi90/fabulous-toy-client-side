import React, { useContext, useState } from "react";
import car from "../../assets/carlogin.json";
import Lottie from "lottie-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../providers/Authproviders";
import useTitle from "../../hooks/useTitle";

const Login = () => {

    const { signIn, googleSignIn } = useContext(AuthContext)
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate()
    const location = useLocation()
    useTitle('Login')

    const from = location.state?.from?.pathname || '/'

    const handleLogin = event => {
        event.preventDefault()

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
    

        // console.log(email, password)
        setError('')
        setSuccess('')
     signIn(email, password)
     .then(result => {
        const loggedUser =  result.user;
        console.log(loggedUser)
        form.reset()
        setSuccess('Login Successfull')
        navigate(from, {replace : true})
     })
     .catch(error => {
        console.log(error)
        setError(error.message)
     })
    }

    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(result => {
            console.log(result.user)
            navigate(from, {replace : true})
        })
        .catch(error => {
            console.log(error)
        })
    }
  return (
    <>
      <h1 className="text-5xl bg-base-200 font-bold pt-4 text-center">
        Login Please!
      </h1>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="">
            <Lottie animationData={car} loop={true} />
          </div>
          <div className="card w-full pt-0 shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered input-accent"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered input-accent"
                />
                <label className="label">
                  <p className="label-text-alt">
                    Are you new to fabulous toys? please{" "}
                    <Link to="/signup" className="link text-blue-500">
                      Sign Up
                    </Link>
                  </p>
                </label>
              </div>
              <div className="form-control mt-2">
                <button className="btn btn-accent">Login</button>
                <p className="text-green-500">{success}</p>
              <p className="text-red-500">{error}</p>
              </div>
              <div className="divider">OR</div>
              <button onClick={handleGoogleSignIn} className="btn btn-block btn-outline btn-error font-bold rounded-full">
                <FaGoogle className="w-4 h-4 me-2"></FaGoogle> Sign in with
                GOOGLE
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
