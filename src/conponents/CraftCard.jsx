import React from 'react';
import { Link } from 'react-router-dom';

const CraftCard = ({ craft }) => {

    const { _id, image, item_name, description, processing_time, author, email, price, stock_status, rating, customization } = craft;
    return (
        <div className="card glass">
            <figure className='max-h-72'><img src={image} alt={item_name} /></figure>
            <div className="card-body">
                <div className='space-y-2'>
                    <p className='text-xl font-bold text-red-900'>
                        <span >{stock_status}</span> |
                        <span >Price: ${price}</span> |
                        <span >Processing Time: {processing_time}</span>days |
                        <span >Customization:{customization.toUpperCase()}</span> |
                        <span >Rating:{rating}</span>
                    </p>



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