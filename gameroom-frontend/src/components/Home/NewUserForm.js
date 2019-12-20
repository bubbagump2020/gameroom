import React, { useState } from 'react'

const NewUserForm = (props) => {

    const [ email, setEmail ] = useState('')
    const [ username, setUsername ] = useState('')
    const [ password, setPassword ] = useState('')


    const handleSubmit = (event) => {
        console.log(email, username, password)
        event.preventDefault()
        fetch(`http://localhost:3001/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                username: username,
                password: password
            })
        }).then(response => response.json())
          .then(data => console.log(data))
    }


    return(
        <div>
            {console.log(password)}
            <form onSubmit={e => handleSubmit(e)}>
                <div>
                    <label>Email: </label>
                    <input type="email" onChange={e => setEmail(e.target.value)}/>
                </div>
                <div>
                    <label>Username: </label>
                    <input type="text" onChange={e => setUsername(e.target.value)}/>
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" onChange={e => setPassword(e.target.value)}/>
                </div>
                <button type="submit">Sign Up!</button>
            </form>
        </div>
    )
}

export default NewUserForm