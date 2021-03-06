import React, { useState } from 'react'
import './HomeStyling/HomePageStyling.scss'

const NewUserForm = (props) => {

    const [ user, setUser ] = useState({
        email: '',
        username: '',
        password: ''
    }) 


    const handleSubmit = (event) => {
        event.preventDefault()
        fetch(`http://localhost:3001/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                email: user.email,
                username: user.username,
                password: user.password
            })
        }).then(response => response.json())
          .then(data => console.log(data))
    }


    return(
        <div className="topdiv">
            <h1>Sign Up</h1>
            <form onSubmit={e => handleSubmit(e)} className="form">
                <div>
                    <label>Email: </label>
                    <input type="email" value={user.email} placeholder="Email" onChange={e => setUser({ ...user, email: e.target.value })}/>
                </div>
                <div>
                    <label>Username: </label>
                    <input type="text" value={user.username} placeholder="Username" onChange={e => setUser({ ...user, username: e.target.value })}/>
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" value={user.password} placeholder="Password" onChange={e => setUser({ ...user, password: e.target.value })}/>
                </div>
                <button type="submit">Sign In</button>
            </form>
        </div>
    )
}

export default NewUserForm