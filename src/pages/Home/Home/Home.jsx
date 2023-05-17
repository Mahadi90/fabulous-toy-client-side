import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import Gallery from '../Gallery/Gallery';

const Home = () => {
    return (
        <div>
            <h2>This is home</h2>
            <Banner></Banner>
            <Gallery></Gallery>
            <Category></Category>
        </div>
    );
};

export default Home;