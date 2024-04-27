import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const MyCraft = () => {
    const [mycrafts, setMycrafts] = useState([])
    const { user } = useContext(AuthContext)
    const userInfo = {
        name: user.displayName,
        email: user.email,

    }

    useEffect(() => {
        fetch(`http://localhost:3000/mycrafts`, {
            method: "POST",
            headers: {
                "Content-type": "Application/json"
            },
            body: JSON.stringify(userInfo)
        }).then((res) => res.json())
            .then(data => console.log(data))
            .catch(err => console.log(err.message))




    }, [])
    return (
        <div>

        </div>
    );
};

export default MyCraft;