
import { Helmet } from 'react-helmet';
import { useLoaderData } from 'react-router-dom';

const DetailsCraft = () => {
    const craft = useLoaderData();
    const { image, item_name, description, author, email, price, stock_status, processing_time, rating, customization } = craft;

    return (

        <div className="card max-w-screen-lg mx-auto  shadow-xl p-16">
            <Helmet>
                <title>Details</title>
            </Helmet>
            <figure className='max-h-[60vh]'><img src={image} alt="Album" className='h-full' /></figure>
            <div className="card-body">
                <div className='space-y-2'>
                    <p className='text-3xl font-bold text-red-900'>
                        <span >{stock_status}</span> |
                        <span >Price: ${price}</span> |
                        <span >Processing Time: {processing_time}</span>days |
                        <span >Customization:{customization.toUpperCase()}</span> |
                        <span >Rating:{rating}</span>
                    </p>
                    <div>
                        <p className='font-semibold font-lg'>Author: {author}</p>
                        <p>Email: {email}</p>
                    </div>
                </div>
                <h2 className="card-title">{item_name}</h2>
                <p>{description}</p>

                <div className='card-actions justify-end'>
                    <button className='btn btn-primary'>Add to cart</button>
                    <button className='btn btn-primary'>Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default DetailsCraft;