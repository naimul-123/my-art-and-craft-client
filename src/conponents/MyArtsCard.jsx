import React from 'react';
import { Zoom } from 'react-awesome-reveal';
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
        <div className="card glass">

            <Zoom cascade duration={2000} damping={0.2}>
                <figure className='max-h-72'><img src={image} alt={item_name} /></figure>
                <div className="card-body">
                    <div className='space-x-3'>
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
                        <Link to={`/crafts/${_id}`} className="btn btn-info">View Details</Link>
                        <Link to={`/update/${_id}`} className="btn btn-secondary">Edit</Link>
                        <button className="btn btn-warning" onClick={() => handleDelete(_id)}>delete</button>
                    </div>
                </div>
            </Zoom>
        </div>
    );
};

export default MyArtsCard;