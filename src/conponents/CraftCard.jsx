import React from 'react';
import { Link } from 'react-router-dom';

const CraftCard = ({ craft }) => {
    const { _id, image, item_name, description, author, email, price } = craft;
    return (
        <div className="card max-w-96 glass">
            <figure><img src={image} alt="car!" /></figure>
            <div className="card-body">
                <h2 className="card-title">Life hack</h2>
                <p>How to park your car at your garage?</p>
                <div className="card-actions justify-end">
                    <Link to={`/crafts/${_id}`} className="btn btn-primary">View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default CraftCard;