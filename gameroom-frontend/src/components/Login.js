import React, { useState } from 'react'
import { BASE_URL } from '../../src/Constants'

export function Login (props) {

    const [ username, setUsername ] = useState()
    const [ password, setPassword ] = useState()

    const handleSubmit = (e) => {
    	e.preventDefault()
        fetch(`${BASE_URL}/login`, {
            credentials: 'include',
            method: 'POST',
            headers: {
                'X-Request-With': 'xmlHttpReqest',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        }).then(response => response.json())
          .then(data => props.history.push(`/users/${data.id}`))
    }

    return(
        <div>
            {console.log(username, password)}
            <h3>Log In</h3>
            <form onSubmit={e => handleSubmit(e)}>
                <label>
                    Username:
                    <input type="text" onChange={e => setUsername(e.target.value)} />
                </label>
                <label>
                    Password:
                    <input type="password" onChange={e => setPassword(e.target.value)} />
                </label>
                <button type="submit">Log In</button>
            </form>
        </div>
    )
}