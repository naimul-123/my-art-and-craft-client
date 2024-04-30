import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
const CraftRow = ({ craft, idx }) => {
    const { _id, image, item_name, author, email, price } = craft;
    return (
        <tr className='border-2'>

            <th>
                {idx + 1}
            </th>
            <td>
                <div className="flex  items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={image} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div className='flex flex-col max-w-sm'>
                        <p className="font-bold">{item_name}</p>

                    </div>
                </div>
            </td>
            <td className='flex flex-col'>
                <span>{author}</span>
                <span className="badge badge-ghost badge-sm">{email}</span>
            </td>
            <td>${price}</td>
            <th>
                <Link to={`/crafts/${_id}`} className="btn btn-secondary hover:link btn-sm">view details</Link>
            </th>
        </tr>

    );
};

CraftRow.propTypes = {
    craft: PropTypes.object.isRequired,
    idx: PropTypes.number.isRequired

}

export default CraftRow;