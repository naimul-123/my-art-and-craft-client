
import { Zoom } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
const CraftCard = ({ craft }) => {

    const { _id, image, item_name, sub_catagory, description, processing_time, price, stock_status, rating, customization } = craft;
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

                <div className="card-actions justify-center ">
                    <Link to={`/crafts/${_id}`} className="w-full p-3 text-center font-semibold tracking-wide rounded-md bg-purple-600 text-gray-100">View Details</Link>
                </div>

            </div>

        </div >


    );
};
CraftCard.propTypes = {
    craft: PropTypes.object.isRequired

}

export default CraftCard;