import React from 'react';
import error from '../../assets/error.json';
import Lottie from "lottie-react";
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const ErrorPage = () => {
    return (
        <div className='mx-auto'>
            <Lottie className="h-96 w-full" animationData={error} loop={true} />
           <button className='block mx-auto'> <Link className='font-semibold text-2xl flex items-center px-8 py-4 bg-red-500 text-white rounded' to='/'><FaArrowLeft className='me-2'/> Back to Home Page</Link></button>
        </div>
    );
};

export default ErrorPage;