import React from 'react';
import useTitle from '../../../hooks/useTitle';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import Discount from '../Discount/Discount';
import Gallery from '../Gallery/Gallery';
import Work from '../Work/Work';

const Home = () => {
 
    useTitle('Home')

    return (
        <div  className='max-w-6xl mx-auto'>
            <Banner></Banner>
            <Gallery></Gallery>
            <Category></Category>
            <Work></Work>
            <Discount></Discount>
        </div>
    );
};

export default Home;