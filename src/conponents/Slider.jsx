import PropTypes from 'prop-types';

const Slider = ({ singleData }) => {

    const { image, title, description, btntext, to } = singleData;
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${image})` }}>
                <div className='hero-overlay opacity-50'></div>
                <div className="hero-content text-center text-base-100">
                    <div className="max-w-md">
                        <h2 className='text-xl md:text-2xl lg:text-3xl font-rancho'>{title}</h2>
                        <p className='text-sm md:text-base lg:text-lg'>{description}</p>
                        <a href={`#${to}`} className='btn border-none text-white font-bold rounded-lg bg-gradient-to-r from-[#c943e1]  to-purple-800'>{btntext}</a>
                    </div>
                </div>
            </div>
        </div>
    );
};
Slider.propTypes = {
    singleData: PropTypes.object.isRequired
}
export default Slider;