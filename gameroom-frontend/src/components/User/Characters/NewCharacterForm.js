import React from 'react'
import { Link } from 'react-router-dom'

const NewCharacterForm = (props) => {
    const current_user = props.match.params.username
    return(
        <div>
            <h1>New Character Form</h1>
            <Link to={`/users/${current_user}`}>Home</Link>
        </div>
    )
}

export default NewCharacterForm;