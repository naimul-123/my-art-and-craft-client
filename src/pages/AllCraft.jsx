import { useEffect, useState } from 'react';
import CraftRow from '../conponents/CraftRow';
import { Helmet } from 'react-helmet';

const AllCraft = () => {
    const [allCrafts, setAllCrafts] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        const dataLaoder = () => {
            fetch(`https://assignment-10-server-irb98dscl-naimuls-projects-ee8c232f.vercel.app/crafts`)
                .then(res => res.json())
                .then(data => {
                    setAllCrafts(data)
                    setLoading(false)
                })
                .catch(err => console.log(err.message))
        }

        dataLaoder();

    })

    if (loading) {
        return <div className="min-h-screen flex flex-col items-center justify-center"><span className="loading loading-lg loading-spinner text-secondary "></span></div>
    }

    else return (
        <div>
            <Helmet>
                <title>All crafts</title>
            </Helmet>
            <div className="max-w-screen-lg overflow-x-auto  mx-auto">
                <table className="table table-pin-rows table-pin-cols   ">
                    {/* head */}
                    <thead className='text-cente'>
                        <tr className='font-bold border-b-2'>
                            <th>
                                SL
                            </th>
                            <th>Craft Name</th>
                            <th>Author</th>
                            <th>Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody className='border-collapse'>

                        {allCrafts.map((craft, idx) =>

                            <CraftRow key={craft._id} idx={idx} craft={craft} />

                        )}


                    </tbody>

                </table>
            </div>
        </div>
    );
}

// console.log(allCrafts)



export default AllCraft;