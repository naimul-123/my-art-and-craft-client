import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import MyArtsCard from '../conponents/MyArtsCard';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet';

const MyCraft = () => {
    const [mycrafts, setMycrafts] = useState([])
    const [customization, setCustomization] = useState()

    const { user } = useContext(AuthContext)
    const userInfo = {
        name: user.displayName,
        email: user.email,
        customization,
    }

    useEffect(() => {
        fetch(`https://assignment-10-server-irb98dscl-naimuls-projects-ee8c232f.vercel.app/mycrafts`, {
            method: "POST",
            headers: {
                "Content-type": "Application/json"
            },
            body: JSON.stringify(userInfo)
        }).then((res) => res.json())
            .then(data => setMycrafts(data))
            .catch(err => console.log(err.message))




    }, [customization])
    const handleDelete = (id) => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://assignment-10-server-irb98dscl-naimuls-projects-ee8c232f.vercel.app/mycrafts/${id}`, {
                    method: "DELETE"
                })
                    .then((res) => res.json())
                    .then((data) => {

                        if (data.deletedCount > 0) {

                            Swal.fire({
                                title: 'Deleted!',
                                text: 'Your craft has been deleted.',
                                icon: 'success',
                            });

                            const remaing = mycrafts.filter((craft) => craft._id !== id)
                            setMycrafts(remaing)
                        }
                    });
            }
        });



    }

    const handleChange = (e) => {
        const status = e.target.value;
        setCustomization(status)
    }
    return (
        <div className='flex flex-col items-center gap-3'>
            <Helmet>
                <title>My Craft</title>
            </Helmet>
            <div className='max-w-sm '>
                <div className="flex gap-4">
                    <label className="label cursor-pointer">
                        <span className="label-text">Short By</span>
                    </label>
                    <select className="select select-bordered select-primary" name='customization' onChange={handleChange}>
                        <option value="" disabled >---Select One---</option>
                        <option value="">Show All</option>
                        <option value="yes">Only Customization: Yes</option>
                        <option value="no">Only Customization: No</option>
                    </select>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-3'>
                {mycrafts && mycrafts.map((craft) => <MyArtsCard key={craft._id} craft={craft} handleDelete={handleDelete}></MyArtsCard>)}
            </div>
        </div>
    );
};

export default MyCraft;