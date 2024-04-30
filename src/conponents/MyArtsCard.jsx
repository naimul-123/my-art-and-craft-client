import { Zoom } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Tooltip } from 'react-tooltip'
import { FaEdit, FaEye } from 'react-icons/fa';
import { FaDeleteLeft } from 'react-icons/fa6';

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



        <div className="card max-w-screen-sm bg-base-100 shadow-xl p-4 ">
            <Zoom cascade duration={2000} damping={0.2} className=''>
                <figure className='h-72'><img src={image} alt={item_name} className='h-full' /></figure>

                <div className='mx-auto w-full my-5 text-center'>
                    <p className='text-xl font-bold text-green-500'>
                        {stock_status} |
                        Price: ${price} |
                        Processing Time: {processing_time}days |
                        Customization:{customization.toUpperCase()} |
                        Rating:{rating} | <br />
                        Sub Catagory:  {sub_catagory}
                    </p>
                </div>
            </Zoom>

            <div className="card-body">

                <h2 className="card-title">{item_name}</h2>
                <p>{description}</p>

                <div className="card-actions justify-center">
                    <Link to={`/crafts/${_id}`} className="btn btn-info" id='show'><FaEye /> <Tooltip anchorSelect='#show' place='top'>View Details</Tooltip></Link>
                    <Link to={`/update/${_id}`} className="btn btn-secondary" id='edit'><FaEdit /> <Tooltip anchorSelect='#edit' place='top'>Edit Your Craft</Tooltip></Link>
                    <button className="btn btn-warning" onClick={() => handleDelete(_id)} id='del'><FaDeleteLeft /><Tooltip anchorSelect='#del' place='top'>Delete Your Craft</Tooltip></button>
                </div>
            </div>

        </div >

    );
};

MyArtsCard.propTypes = {
    craft: PropTypes.object.isRequired,
    handleDelete: PropTypes.func.isRequired

}
export default MyArtsCard;