import React, { useContext, useState } from "react";
import car from "../../assets/carlogin.json";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../providers/Authproviders";

const SignUp = () => {

    const { createUser } = useContext(AuthContext)
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('')

    const handleSignUp = event => {
        event.preventDefault()

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;

        // console.log(name, email, password, photo)
        setError('')
        setSuccess('')
        createUser(email, password)
        .then(result => {
            const createdUser = result.user;
            console.log(createdUser)
            form.reset()
            setSuccess('Sign Up Successfull')
        })
        .catch(error => {
            console.log(error)
            setError(error.message)
        })
    }

  return (
    <>
      <h1 className="text-5xl bg-base-200 font-bold pt-4 text-center">
        Sign Up!
      </h1>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="">
            <Lottie animationData={car} loop={true} />
          </div>
          <div className="card w-full pt-0 shadow-2xl bg-base-100">
            <form onSubmit={handleSignUp} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  className="input input-bordered input-accent"
                  required
                />
              </div>
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
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="photo URL"
                  name="photo"
                  className="input input-bordered input-accent"
                  required
                />
                <label className="label">
                  <p className="label-text-alt">
                    Already have an account? please{" "}
                    <Link to="/login" className="link text-blue-500">
                      Login
                    </Link>
                  </p>
                </label>
              </div>
              <div className="form-control mt-2">
                <button className="btn btn-accent">Sign Up</button>
                <p className="text-green-500">{success}</p>
              <p className="text-red-500">{error}</p>
              </div>
              <div className="divider">OR</div>
              <button className="btn btn-block btn-outline btn-error font-bold rounded-full">
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

export default SignUp;
