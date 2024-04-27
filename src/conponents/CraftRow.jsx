import React from 'react';
import { Link } from 'react-router-dom';

const CraftRow = ({ craft, idx }) => {
    const { _id, image, item_name, description, author, email, price } = craft;
    return (
        <tr>

            <th>
                {idx + 1}
            </th>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={image} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{item_name}</div>
                        <div className="text-sm opacity-50">{description}</div>
                    </div>
                </div>
            </td>
            <td>
                {author}
                <br />
                <span className="badge badge-ghost badge-sm">{email}</span>
            </td>
            <td>{price}</td>
            <th>
                <Link to={`/crafts/${_id}`} className="btn btn-secondary hover:link btn-xs">view details</Link>
            </th>
        </tr>

    );
};

export default CraftRow;