
import { Zoom } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
const CraftCard = ({ craft }) => {

    const { _id, image, item_name, sub_catagory, description, processing_time, price, stock_status, rating, customization } = craft;
    return (


        <div className="card glass">
            <Zoom cascade duration={2000} damping={0.2} className=''>
                <figure className='max-h-72'><img src={image} alt={item_name} /></figure>
                <div className="card-body ">
                    <div className='space-y-2 grow'>
                        <p className='text-xl font-bold text-red-900'>
                            <span >{stock_status}</span> |
                            <span >Price: ${price}</span> |
                            <span >Processing Time: {processing_time}</span>days |
                            <span >Customization:{customization.toUpperCase()}</span> |
                            <span >Rating:{rating}</span>
                        </p>


                        <div>
                            <h2 className="card-title">{item_name}</h2>
                            <p>Sub Catagory: <span className='badge'>{sub_catagory}</span> </p>
                        </div>
                        <p>{description}</p>

                    </div>


                    <div className="card-actions justify-end">

                        <Link to={`/crafts/${_id}`} className="btn btn-primary">View Details</Link>

                    </div>

                </div>
            </Zoom>
        </div>

    );
};
CraftCard.propTypes = {
    craft: PropTypes.object.isRequired

}

export default CraftCard;