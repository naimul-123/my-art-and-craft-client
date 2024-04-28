import React from 'react';
import { Link } from 'react-router-dom';

const SubCatagoryCard = ({ craft }) => {
    const { image, sub_catagory } = craft;
    const subCatagorySlag = sub_catagory.replace(/ /g, "_").toLowerCase();
    return (
        <Link to={`/catagories/${sub_catagory}`} className="card image-full max-h-72 hover:scale-105 transform duration-1000 ">
            <figure className=''><img src={image} alt={sub_catagory} /></figure>
            <div className="card-body justify-center items-center">
                <h2 className="card-title text-4xl font-bold">{sub_catagory}</h2>
            </div>
        </Link>
    );
};

export default SubCatagoryCard;