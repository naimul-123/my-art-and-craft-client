import React, { useEffect, useState } from 'react';
import CraftCard from './CraftCard';
import SubCatagoryCard from './SubCatagoryCard';
import { Helmet } from 'react-helmet';

const SubCatagories = () => {
    const [crafts, setCrafts] = useState([])
    // console.log("subcatagory", crafts)

    useEffect(() => {
        fetch(`http://localhost:3000/subcatagories`)
            .then(res => res.json())
            .then(data => setCrafts(data))
    })

    return (
        <div className='flex flex-col items-center' id='subcatagory'>

            <h2 className="text-5xl font-bold text-purple-500 my-16">Subcatagories</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>{crafts && crafts.map((craft) => <SubCatagoryCard key={craft._id} craft={craft}></SubCatagoryCard>)}</div>
        </div>
    );
};

export default SubCatagories;