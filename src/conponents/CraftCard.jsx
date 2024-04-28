import React from 'react';
import { Link } from 'react-router-dom';

const CraftCard = ({ craft }) => {

    const { _id, image, item_name, description, author, email, price, stock_status, rating, customization } = craft;
    return (
        <div className="card glass">
            <figure className='max-h-72'><img src={image} alt={item_name} /></figure>
            <div className="card-body">
                <div className='space-x-3'>
                    <span className='badge badge-secondary'>{stock_status}</span>
                    <span className='badge badge-secondary'>Price: ${price}</span>
                    <span className='badge badge-secondary'>Rating:{rating}</span>
                    <span className='badge badge-secondary'>Customization:{customization.toUpperCase()}</span>

                </div>
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