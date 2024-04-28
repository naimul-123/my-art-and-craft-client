import React, { useEffect, useState } from 'react';
import CraftCard from '../conponents/CraftCard';
import SubCatagoryCard from '../conponents/SubCatagoryCard';

const SubCatagories = () => {
    const [crafts, setCrafts] = useState([])
    // console.log("subcatagory", crafts)

    useEffect(() => {
        fetch(`http://localhost:3000/subcatagories`)
            .then(res => res.json())
            .then(data => setCrafts(data))
    })

    return (
        <div className='flex flex-col items-center'>
            <h2 className="text-5xl font-bold my-16">Subcatagories</h2>

            <div className='grid grid-cols-3 gap-4'>{crafts && crafts.map((craft) => <SubCatagoryCard key={craft._id} craft={craft}></SubCatagoryCard>)}</div>
        </div>
    );
};

export default SubCatagories;