import { useEffect, useState } from 'react';
import SubCatagoryCard from './SubCatagoryCard';
import { Typewriter } from 'react-simple-typewriter';
import { Fade } from 'react-awesome-reveal';

const SubCatagories = () => {
    const [crafts, setCrafts] = useState([])
    // console.log("subcatagory", crafts)

    useEffect(() => {
        fetch(`https://assignment-10-server-irb98dscl-naimuls-projects-ee8c232f.vercel.app/subcatagories`)
            .then(res => res.json())
            .then(data => setCrafts(data))
    })

    return (
        <div className='flex flex-col items-center' id='subcatagory'>

            <div className='max-w-screen-sm mx-auto my-16 space-y-2'>
                <Fade duration={3000} direction='left' delay={0} cascade damping={0}>
                    <h2 className="text-5xl font-bold font-rancho  text-center bg-gradient-to-r from-purple-700 via-blue-500 to-green-400 text-transparent bg-clip-text bg-300% animate-gradient">
                        Subcatagories
                    </h2>
                    <p>
                        <Typewriter
                            words={['All subcatagory are here. click any of them to explore catagory wise arts and crafts']}
                            loop={1}

                            cursorStyle='_'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}

                        />

                    </p>
                </Fade>


            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-8 md:px-16 lg:px-24 gap-4'>{crafts && crafts.map((craft) => <SubCatagoryCard key={craft._id} craft={craft}></SubCatagoryCard>)}</div>
        </div>
    );
};

export default SubCatagories;