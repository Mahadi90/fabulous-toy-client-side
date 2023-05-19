import React from 'react';
import { FaSmileBeam } from 'react-icons/fa';
import bg from '../../../assets/images/slider1.jpg'

const Work = () => {
    return (
        <div className='my-8'>
            <h2 className="text-3xl font-bold text-center">Our Happy Clients</h2>
      <p className="text-center text-gray-600 font-semibold">
        There have our work history.
      </p>

      <div className="hero min-h-screen mt-6" style={{ backgroundImage: `url(${bg})` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
        <FaSmileBeam className='h-12 w-12 text-center block mx-auto my-4'></FaSmileBeam>
      <h1 className="mb-5 text-3xl font-bold">Happy Clients</h1>
      <h3 className='text-white text-5xl font-bold'>3653+</h3>
      <p className="mb-5">Client satisfaction is our main goal.When a visitor visit this site,He/she got a huge resourch and many thing that he nedded.There are many car toys order or add for sell your toys that you needed.</p>
      <button className="btn btn-primary">See More</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Work;