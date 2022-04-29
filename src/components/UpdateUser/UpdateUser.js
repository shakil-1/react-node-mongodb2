import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateUser = () => {
    const { id } = useParams();
    const [user, setUser] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/user/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setUser(data));
    }, []);

    const handelUpdatUser = event => {
        event.preventDefault();
  
        const name = event.target.name.value;
        const email = event.target.email.value;
        const updatedUser = { name, email }
        // console.log(user);

        //send data to the server
        const url = `http://localhost:5000/user/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedUser)

        })
            .then(res => res.json())
            .then(data => {
                console.log('Success', data);
                alert('User Update Successfully!!');
                event.target.reset();
            })
    }
    return (
        <div>
            <h2>Updating User:{user.name}</h2>
            <form onSubmit={handelUpdatUser}>
                <input type="text" name="name" placeholder='Enter your name' required id="" /><br />
                <input type="email" name="email" placeholder='Inter your email' required id="" /><br />
                <input type="submit" value="Update User" />
            </form>
        </div>
    );
};

export default UpdateUser;