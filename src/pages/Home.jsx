import React from 'react';
import Hero from '../conponents/Hero';
import ArtAndCraftSection from '../conponents/ArtAndCraftSection';
import SubCatagories from '../conponents/SubCatagories';
import TopratedCrafts from '../conponents/TopratedCrafts';
import Testimonials from '../conponents/Testimonials';
import { Helmet } from 'react-helmet';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>

            <Hero></Hero>
            <ArtAndCraftSection></ArtAndCraftSection>
            <SubCatagories></SubCatagories>
            <TopratedCrafts />
            <Testimonials />
        </div>
    );
};

export default Home;