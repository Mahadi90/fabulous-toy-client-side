import React, { useEffect, useState } from 'react';
import GalleryCard from './GalleryCard';
import AOS from 'aos';
import 'aos/dist/aos.css';





const Gallery = () => {
  
    const [galleries, setGalleries] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/gallery')
        .then(res => res.json())
        .then(data => setGalleries(data))
    },[])

    // console.log(galleries)

    useEffect(() => {
        AOS.init(); // Initialize AoS
      }, []);

    return (
        <div data-aos="zoom-in" className='my-12'>
            <h2  className='text-3xl font-bold text-center'>Our Toys Gallery</h2>
            <p className='text-center text-gray-600 font-semibold'>Each car design is unique and attractive that will fascinate you</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8 mx-2 lg:mx-0'>
                {
                    galleries.map(gallery => <GalleryCard
                    key={gallery._id}
                    gallery={gallery}
                    ></GalleryCard>)
                }
            </div>
            <button className='bg-red-500 px-4 py-2 text-white font-bold block mx-auto'>See More</button>
        </div>
    );
};

export default Gallery;