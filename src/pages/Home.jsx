import React from 'react';
import Hero from '../conponents/Hero';
import ArtAndCraftSection from '../conponents/ArtAndCraftSection';
import SubCatagories from './SubCatagories';
import TopratedCrafts from '../conponents/TopratedCrafts';
import Testimonials from '../conponents/Testimonials';

const Home = () => {
    return (
        <div >

            <Hero></Hero>
            <ArtAndCraftSection></ArtAndCraftSection>
            <SubCatagories></SubCatagories>
            <TopratedCrafts />
            <Testimonials />
        </div>
    );
};

export default Home;