
import { Zoom } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const SubCatagoryCard = ({ craft }) => {
    const { image, sub_catagory } = craft;

    return (

        <Zoom duration={2000} cascade damping={0.2}>
            <Link to={`/catagories/${sub_catagory}`} className="card image-full max-h-72 hover:scale-105 transform duration-1000 ">
                <figure className=''><img src={image} alt={sub_catagory} /></figure>
                <div className="card-body justify-center items-center">


                    <h2 className="card-title text-4xl font-bold">{sub_catagory}</h2>

                </div>
            </Link>
        </Zoom>
    );
};

SubCatagoryCard.propTypes = {
    craft: PropTypes.object.isRequired
}

export default SubCatagoryCard;