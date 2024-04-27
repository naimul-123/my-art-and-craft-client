import React from 'react';
import { useLoaderData } from 'react-router-dom';

const DetailsCraft = () => {
    const craft = useLoaderData();
    const { _id, image, item_name, description, author, email, price } = craft
    return (
        <div className='flex  justify-center gap-6 p-24 rounded-md shadow-md'>
            <div className=''>
                <img
                    src={image}
                    alt={item_name}
                    className='object-cover object-center h-full w-full rounded-xl'
                />
            </div>


            <div className='gorw bg-base-300 p-6 rounded-lg'>
                <h2 className='card-title text-gray-900 text-2xl md:text-3xl font-bold'>
                    Details information
                </h2>

                <h2 className='text-2xl md:text-3xl text-center md:text-left font-bold text-gray-950 tracking-wide'>
                    {item_name}
                </h2>
                <p className='text-base'>{description}</p>




                <p className='inline-flex items-center text-base gap-1'>
                    {' '}

                    { }
                </p>
                <p className='inline-flex items-center text-base gap-1'>
                    {' '}

                    { }
                </p>
                <p className='inline-flex items-center text-base gap-1'>
                    {' '}

                </p>
                <p className='inline-flex items-center text-base gap-1'>
                    {' '}

                </p>
                <p className='inline-flex items-center text-base gap-1'>

                </p>
                <p className='inline-flex items-center text-base gap-1'>

                </p>


            </div>


        </div>

    );
};

export default DetailsCraft;