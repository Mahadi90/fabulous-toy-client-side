import React from 'react';
import car from '../../../public/carlogin.json'
import Lottie from "lottie-react";
import { Link } from 'react-router-dom';
import { FaBeer, FaGoogle } from 'react-icons/fa';

const Login = () => {
    return (
        <>
        <h1 className="text-5xl bg-base-200 font-bold pt-4 text-center">Login Please!</h1>
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="">
          <Lottie animationData={car} loop={true} />
          </div>
          <div className="card w-full pt-0 shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" name='email' className="input input-bordered input-accent" required/>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered input-accent" />
                <label className="label">
                  <p className="label-text-alt">Are you new to fabulous toys? please <Link to='/signup' className='link text-blue-500'>Sign Up</Link></p>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-accent">Login</button>
              </div>
              <div className="divider">OR</div>
              <button className="btn btn-block btn-outline btn-error font-bold rounded-full"><FaGoogle className='w-4 h-4 me-2'></FaGoogle> Sign in with GOOGLE</button>
            </div>
          </div>
        </div>
      </div>
      </>
    );
};

export default Login;