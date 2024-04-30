
import { Helmet } from 'react-helmet';
import { useLoaderData } from 'react-router-dom';

const DetailsCraft = () => {
    const craft = useLoaderData();
    const { image, item_name, sub_catagory, description, author, email, price, stock_status, processing_time, rating, customization } = craft;

    return (

        <div className="card max-w-screen-lg mx-auto  shadow-xl p-4 md:p-8 lg:p-16">
            <Helmet>
                <title>Details</title>
            </Helmet>
            <figure className=' mx-auto w-4/5'><img src={image} alt="Album" className='w-full h-full' /></figure>
            <div className="card-body">
                <div className='space-y-2'>
                    <p className='text-xl text-center font-bold text-green-500 flex'>
                        {stock_status} |
                        Price: ${price} |
                        Processing Time: {processing_time}days |
                        Customization:{customization.toUpperCase()} |
                        Rating:{rating} | <br />
                        Sub Catagory:  {sub_catagory}
                    </p>
                    <div>
                        <p className='font-semibold font-lg'>Author: {author}</p>
                        <p>Email: {email}</p>
                    </div>
                </div>
                <h2 className="card-title">{item_name}</h2>
                <p>{description}</p>

                <div className='card-actions justify-center'>
                    <button className='btn btn-primary'>Add to cart</button>
                    <button className='btn btn-primary'>Buy Now</button>
                </div>
            </div>
        </div >
    );
};

export default DetailsCraft;