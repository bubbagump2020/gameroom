import React, { useState } from 'react'

const SignInForm = (props) => {

    const signInProps = props.props;

    const [ user, setUser ] = useState({
        email: '',
        username: '',
        password: ''
    }) 

    const handleSubmit = async (event) => {
        event.preventDefault()
        const response = await fetch(`http://localhost:3001/login`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'X-requested-with': 'XmlHttpRequest',
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                email: user.email,
                username: user.username,
                password: user.password
            })
        })

        const json = await response.json()
        signInProps.history.push(`/users/${json.username}`)
    }

    return(
        <div className="topdiv">
            <h1>Sign In</h1>
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

export default SignInForm;