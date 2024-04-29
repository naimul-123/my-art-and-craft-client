import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import Swal from 'sweetalert2';

const AddCraft = () => {

    const { user } = useContext(AuthContext)
    const { displayName, email } = user


    const handleAddCraft = (e) => {
        e.preventDefault();
        const form = e.target;
        const item_name = form.item_name.value;
        const image = form.image.value;
        const sub_catagory = form.sub_catagory.value;
        const description = form.description.value;
        const processing_time = form.processing_time.value;
        const customization = form.customization.value;
        const stock_status = form.stock_status.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const itemdata = {
            author: displayName,
            email,
            item_name,
            image,
            sub_catagory,
            description,
            processing_time,
            customization,
            price,
            rating,
            stock_status

        }



        fetch(`http://localhost:3000/crafts`, {
            method: "POST",
            headers: {
                'Content-type': 'Application/json'
            },
            body: JSON.stringify(itemdata)
        }).then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Craft added successfully!',
                        icon: 'success',
                        confirmButtonText: 'OK',
                    });
                    form.reset();
                }
            }
            )
            .catch(err => console.log(err.message))
    }
    return (
        <div className=' max-w-screen-lg p-12 mx-auto bg-base-100'>

            <div className='text-center max-w-3/5 w-full'>
                <h2 className='text-5xl font-rancho'>Add New Craft</h2>
            </div>

            <form
                className='grid grid-cols-1 md:grid-cols-2  gap-4'
                onSubmit={handleAddCraft}>



                <div className='form-control'>
                    <label className='label'>
                        <span className='label-text'>Item Name</span>
                    </label>
                    <input
                        type='text'
                        name='item_name'
                        placeholder='Enter item name'
                        className='input input-bordered input-primary'
                        required
                    />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Subcategory</span>
                    </label>
                    <select className="select select-bordered select-primary" defaultValue="" name='sub_catagory' required>
                        <option value="" disabled >---Select---</option>
                        <option value="Landscape Painting">Landscape Painting</option>
                        <option value="Portrait Drawing">Portrait Drawing</option>
                        <option value="Watercolour Painting">Watercolour Painting</option>
                        <option value="Oil Painting">Oil Painting</option>
                        <option value="Charcoal Sketching">Charcoal Sketching</option>
                        <option value="Cartoon Drawing">Cartoon Drawing</option>
                    </select>
                </div>
                <div className='form-control md:col-span-2'>
                    <label className='label'>
                        <span className='label-text'>Description</span>
                    </label>
                    <input
                        type='text'
                        name='description'
                        placeholder='Write short description'
                        className='input input-bordered input-primary'
                        required
                    />
                </div>
                <div className='form-control '>
                    <label className='label'>
                        <span className='label-text'>Image</span>
                    </label>
                    <input
                        type='text'
                        placeholder='Enter craft photo url'
                        name='image'
                        className='input input-bordered input-primary'
                        required
                    />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Stock Status</span>
                    </label>
                    <select className="select select-bordered select-primary" defaultValue="" name='stock_status' required>
                        <option value="" disabled >---Select---</option>
                        <option value="In stock">In stock</option>
                        <option value="Made to Order">Made to Order</option>
                    </select>
                </div>
                <div className='form-control'>
                    <label className='label'>
                        <span className='label-text'>Processing Time</span>
                    </label>
                    <input
                        type='text'
                        name='processing_time'
                        placeholder='Enter craft processing time in days'
                        className='input input-bordered input-primary'
                        required
                    />
                </div>

                <div className="form-control">
                    <label className="label cursor-pointer">
                        <span className="label-text">Customization?</span>
                    </label>
                    <div className='inline-flex gap-2 items-center'>
                        <input type="radio" name="customization" className="radio checked:bg-green-500" defaultChecked value="yes" /> <span>Yes</span>
                        <input type="radio" name="customization" className="radio checked:bg-red-500" value="no" /> <span>No</span>
                    </div>


                </div>
                <div className='form-control'>
                    <label className='label'>
                        <span className='label-text'>Price</span>
                    </label>
                    <input
                        type='text'
                        name='price'
                        placeholder='Enter craft price'
                        className='input input-bordered input-primary'
                        required
                    />
                </div>
                <div className='form-control'>
                    <label className='label'>
                        <span className='label-text'>Rating</span>
                    </label>
                    <input
                        type='text'
                        name='rating'
                        placeholder='Enter craft rating'
                        className='input input-bordered input-primary'
                        required
                    />
                </div>
                <div className='form-control'>
                    <label className='label'>
                        <span className='label-text'>User Name</span>
                    </label>
                    <input
                        type='text'
                        name='username'
                        defaultValue={displayName}
                        className='input input-bordered input-primary'
                        required
                        disabled
                    />
                </div>
                <div className='form-control'>
                    <label className='label'>
                        <span className='label-text'>User email</span>
                    </label>
                    <input
                        type='email'

                        name='email'
                        defaultValue={email}
                        className='input input-bordered input-primary'
                        required
                        disabled
                    />
                </div>

                <div className='form-control mt-6 md:col-span-2'>
                    <button className='btn btn-primary'>
                        Add
                    </button>
                </div>

            </form>
        </div>

    );
};

export default AddCraft;