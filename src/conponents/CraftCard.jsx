import React from 'react';
import { Link } from 'react-router-dom';

const CraftCard = ({ craft }) => {
    const { _id, image, item_name, description, author, email, price } = craft;
    return (
        <div className="card glass">
            <figure className='max-h-72'><img src={image} alt="car!" /></figure>
            <div className="card-body">
                <h2 className="card-title">{item_name}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <Link to={`/crafts/${_id}`} className="btn btn-primary">View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default CraftCard;