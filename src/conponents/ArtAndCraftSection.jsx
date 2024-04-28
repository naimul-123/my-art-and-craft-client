import React, { useEffect, useState } from 'react';
import CraftCard from './CraftCard';

const ArtAndCraftSection = () => {
    const [crafts, setCrafts] = useState([])
    // console.log(crafts)

    useEffect(() => {
        fetch(`http://localhost:3000/crafts`)
            .then(res => res.json())
            .then(data => setCrafts(data))
    })

    return (
        <div>

            <div className='grid grid-cols-3 gap-4'>{crafts && crafts.map((craft) => <CraftCard key={craft._id} craft={craft}></CraftCard>)}</div>
        </div>
    );
};

export default ArtAndCraftSection;