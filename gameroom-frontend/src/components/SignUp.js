import React, { useState } from 'react'
import { BASE_URL } from '../../src/Constants'

export function SignUp () {

    const [ username, setUsername ] = useState()
    const [ password, setPassword ] = useState()

    async function handleSubmit(e){
        e.preventDefault()
        let response = await fetch(`${BASE_URL}/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password
            })

        })
        let { success } = await response.json()
        if(success){
            console.log(response)
        }
    }

    return(
        <div>
            <form onSubmit={e => handleSubmit(e)}>
                <label>
                    Username:
                    <input type="text" onChange={e => setUsername(e.target.value)} />
                </label>
                <label>
                    Password:
                    <input type="password" onChange={e => setPassword(e.target.value)} />
                </label>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}