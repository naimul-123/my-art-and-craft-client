import React from 'react';
import Hero from '../conponents/Hero';
import ArtAndCraftSection from '../conponents/ArtAndCraftSection';
import SubCatagories from './SubCatagories';

const Home = () => {
    return (
        <div >

            <Hero></Hero>
            <ArtAndCraftSection></ArtAndCraftSection>
            <SubCatagories></SubCatagories>
        </div>
    );
};

export default Home;