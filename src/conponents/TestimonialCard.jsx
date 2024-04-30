import PropTypes from 'prop-types';


const TestimonialCard = ({ testimonial }) => {

    const { profile_picture, name, description } = testimonial;
    return (
        <section className='bg-gray-900  md:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg mx-auto' >

            <div className='flex flex-col items-center  w-full space-y-8 rounded-md h-full p-2 sm:p-3 md:p-4 lg:p-8  text-gray-100' data-aos="flip-left">
                <img
                    src={profile_picture}
                    alt={name}
                    className='w-20 h-20 rounded-full bg-gray-500'
                />
                <h3 className='text-2xl text-center font-semibold font-rancho'>{name}</h3>
                <blockquote className='max-w-lg text-lg italic font-medium text-center'>
                    {description}
                </blockquote>

            </div>

        </section>
    );
};

TestimonialCard.propTypes = {
    testimonial: PropTypes.object.isRequired
}

export default TestimonialCard;