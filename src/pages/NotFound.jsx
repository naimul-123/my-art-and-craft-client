import React from 'react';
import bgimage from "../../public/404.jpg"
import { Link } from 'react-router-dom';
const NotFound = () => {
    return (
        <div className="bg-[url('/404.jpg')] min-h-screen bg-cover bg-center bg-no-repeat hero">
            <div className='hero-content'>
                <Link to="/" className="text-5xl btn btn-primary link btn-lg">Go to home page</Link >
            </div>
        </div>
    );
};

export default NotFound;