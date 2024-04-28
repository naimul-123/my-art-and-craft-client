import React from 'react';
import { Link } from 'react-router-dom';

const SubCatagoryCard = ({ craft }) => {
    const { _id, image, item_name, sub_catagory, description, author, email, price } = craft;
    const subCatagorySlag = sub_catagory.replace(/ /g, "_").toLowerCase();
    return (
        <div className="card max-w-96 glass">
            <figure><img src={image} alt="car!" /></figure>
            <div className="card-body">
                <h2 className="card-title">Life hack</h2>
                <p>How to park your car at your garage?</p>
                <div className="card-actions justify-end">
                    <Link to={`/catagories/${sub_catagory}`} className="btn btn-primary">View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default SubCatagoryCard;