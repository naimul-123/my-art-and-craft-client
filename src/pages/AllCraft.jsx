import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CraftRow from '../conponents/CraftRow';

const AllCraft = () => {
    const allCrafts = useLoaderData()


    if (allCrafts) {
        return (
            <div>
                <div className="overflow-x-auto">
                    <table className="table max-w-screen-lg mx-auto">
                        {/* head */}
                        <thead className='text-center'>
                            <tr>
                                <th>
                                    SL
                                </th>
                                <th>Craft Name</th>
                                <th>Author</th>
                                <th>Price</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>

                            {allCrafts.map((craft, idx) =>

                                <CraftRow key={craft._id} idx={idx} craft={craft} />

                            )}


                        </tbody>

                    </table>
                </div>
            </div>
        );
    }
    else return <div className="min-h-screen flex flex-col items-center justify-center"><span className="loading loading-lg loading-spinner text-secondary "></span></div>
    // console.log(allCrafts)

};

export default AllCraft;