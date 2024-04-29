import React, { useEffect, useState } from 'react';
import CraftCard from './CraftCard';

const ArtAndCraftSection = () => {
    const [crafts, setCrafts] = useState([])
    // console.log(crafts)

    useEffect(() => {
        fetch(`https://assignment-10-server-irb98dscl-naimuls-projects-ee8c232f.vercel.app/crafts/latest`)
            .then(res => res.json())
            .then(data => setCrafts(data))
    })

    return (
        <div id='latest' className="px-8 md:px-16 lg:px-24">
            <div className='flex flex-col items-center text-center my-6'>
                <h2 className='text-5xl font-bold text-purple-500'>Latest Arts and Craft</h2>
                <p>Here the latest arts and craft.</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>{crafts && crafts.map((craft) => <CraftCard key={craft._id} craft={craft}></CraftCard>)}</div>
        </div>
    );
};

export default ArtAndCraftSection;