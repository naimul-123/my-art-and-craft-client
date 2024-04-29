
import { useLoaderData, useParams } from 'react-router-dom';
import CraftCard from '../conponents/CraftCard';
import { Helmet } from 'react-helmet';

const SubCatagory = () => {
    const crafts = useLoaderData()
    const params = useParams();

    return (
        <div className='flex flex-col items-center justify-center' >
            <Helmet>
                <title>Sub catagory crafts</title>
            </Helmet>
            <div className='mx-auto max-w-sm'>
                <h2>Sub Catagory Name: {params.catagory}</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>{crafts && crafts.map((craft) => <CraftCard key={craft._id} craft={craft}></CraftCard>)}</div>
        </div>
    );
};

export default SubCatagory;