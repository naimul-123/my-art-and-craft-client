import React from 'react';
import { useLoaderData, useLocation, useParams } from 'react-router-dom';
import CraftCard from '../conponents/CraftCard';

const SubCatagory = () => {
    const crafts = useLoaderData()
    const params = useParams();

    return (
        <div>
            <div>
                <h2>Sub Catagory Name: {params.catagory}</h2>
            </div>
            <div className='grid grid-cols-3 gap-4'>{crafts && crafts.map((craft) => <CraftCard key={craft._id} craft={craft}></CraftCard>)}</div>
        </div>
    );
};

export default SubCatagory;