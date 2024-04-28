import React from 'react';
import { Link } from 'react-router-dom';

const Slider = ({ singleData }) => {

    const { image, title, description, btntext, to } = singleData;
    return (
        <div className='relative max-h-[80vh]'>
            <img className='w-full h-full' src={image} alt="" width="100%" height="100%" />
            <div className='absolute left-1/3 top-1/2 text-center  font-bold text-white z-10'>
                <h2 className='text-xl md:text-2xl lg:text-3xl'>{title}</h2>
                <p className='text-sm md:text-base lg:text-lg'>{description}</p>
                <Link to={`/${to}`} className='btn btn-primary'>{btntext}</Link>
            </div>

        </div>
    );
};

export default Slider;