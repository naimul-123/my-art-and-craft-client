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


            <figure><img src={image} alt="car!" /></figure>
            <div className="card-body">
                <h2 className="card-title">{item_name}</h2>
                <p>Price: ${price}</p>
                <p>Rating: {rating}</p>
                <p>Customization: {customization}</p>
                <p>Stock Status: {stock_status}</p>

                <div className="card-actions justify-end">
                    <Link to={`/crafts/${_id}`} className="btn btn-info">View Details</Link>
                    <Link to={`/update/${_id}`} className="btn btn-secondary">Update</Link>
                    <button className="btn btn-warning" onClick={() => handleDelete(_id)}>delete</button>
                </div>
            </div>
        </div>
    );
};

export default MyArtsCard;