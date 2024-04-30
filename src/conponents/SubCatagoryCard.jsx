
import { Zoom } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const SubCatagoryCard = ({ craft }) => {
    const { image, sub_catagory } = craft;

    return (


        <Link to={`/catagories/${sub_catagory}`} className="card image-full rounded-lg hover:scale-105 transform duration-1000 ">
            <Zoom duration={2000} cascade damping={0.2}>
                <figure className='h-36'><img src={image} alt={sub_catagory} className='rounded-lg' /></figure>
            </Zoom>
            <div className="card-body justify-center items-center">


                <h2 className="card-title text-4xl font-bold font-rancho">{sub_catagory}</h2>

            </div>
        </Link>

    );
};

SubCatagoryCard.propTypes = {
    craft: PropTypes.object.isRequired
}

export default SubCatagoryCard;