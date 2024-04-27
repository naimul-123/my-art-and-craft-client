import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CraftRow from '../conponents/CraftRow';

const AllCraft = () => {
    const allCrafts = useLoaderData()



    // console.log(allCrafts)
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
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
};

export default AllCraft;