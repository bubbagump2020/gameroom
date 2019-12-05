import React, { useState } from 'react'
import { BASE_URL } from '../../src/Constants'

export function Login () {

    const [ username, setUsername ] = useState()
    const [ password, setPassword ] = useState()

    return(
        <div>
            login component
        </div>
    )
}