import { useEffect, useState } from 'react';
import CraftCard from './CraftCard';
import { Typewriter } from 'react-simple-typewriter'
import { Fade } from 'react-awesome-reveal';

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
                <Fade duration={3000} direction='left' delay={0} cascade damping={0}>
                    <h2 className="text-5xl font-bold font-rancho text-center bg-gradient-to-r from-purple-700 via-blue-500 to-green-400 text-transparent bg-clip-text bg-300% animate-gradient">
                        Latest Arts and Craft
                    </h2>
                    <p>
                        <Typewriter
                            words={['You can explore here latest arts and craft..']}
                            loop={1}

                            cursorStyle='_'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}

                        />

                    </p>
                </Fade>

            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>

                {crafts && crafts.map((craft) => <CraftCard key={craft._id} craft={craft}></CraftCard>)}

            </div>
        </div>
    );
};

export default ArtAndCraftSection;