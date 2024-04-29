import React from 'react';
import { Link } from 'react-router-dom';

const Slider = ({ singleData }) => {

    const { image, title, description, btntext, to } = singleData;
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${image})` }}>
                <div className='hero-overlay opacity-50'></div>
                <div className="hero-content text-center text-base-100">
                    <div className="max-w-md">
                        <h2 className='text-xl md:text-2xl lg:text-3xl'>{title}</h2>
                        <p className='text-sm md:text-base lg:text-lg'>{description}</p>
                        <a href={`#${to}`} className='btn btn-primary'>{btntext}</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;