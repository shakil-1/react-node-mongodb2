import React from 'react';

const AddUser = () => {
    const handelSubmit = event =>{
        event.preventDefault();

        const name = event.target.name.value;
        const email = event.target.email.value;
        const user = {name, email}
        // console.log(user);

        //send data to the server
        fetch('http://localhost:5000/user', {
            method: 'POST',
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify(user)

        })
        .then(res => res.json())
        .then(data =>{

        console.log('Success', data)
        alert('User added Successfully!!')
        event.target.reset();
        })
    }
    return ( 
        <div>
            <h2>Please add a new User</h2>
            <form onSubmit={handelSubmit}>
                <input type="text" name="name" placeholder='Enter your name' required id="" /><br />
                <input type="email" name="email" placeholder='Inter your email' required id="" /><br />
                <input type="submit" value="Add User" />
            </form>
        </div>
    );
};

export default AddUser;