import React from 'react';
import { Link } from 'react-router-dom';

const MyArtsCard = ({ craft, handleDelete }) => {
    const {
        _id,
        item_name,
        image,
        sub_catagory,
        description,
        processing_time,
        customization,
        price,
        rating,
        stock_status } = craft;


    return (
        <div className="card max-w-96 glass">


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
                    <Link to={`/crafts/${_id}`} className="btn btn-info">View Details</Link>
                    <Link to={`/update/${_id}`} className="btn btn-secondary">Edit</Link>
                    <button className="btn btn-warning" onClick={() => handleDelete(_id)}>delete</button>
                </div>
            </div>
        </div>
    );
};

export default MyArtsCard;