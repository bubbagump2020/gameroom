import React, { useState } from 'react'

const NewUserForm = (props) => {

    const [ email, setEmail ] = useState('')
    const [ username, setUsername ] = useState('')
    const [ password, setPassword ] = useState('')


    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(event)
    }


    return(
        <div>
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