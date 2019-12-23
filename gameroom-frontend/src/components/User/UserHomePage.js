import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import CharacterContainer from './Characters/CharacterContainer'
import './UserStyling/UserHomeStyling.scss'

const UserHomePage = (props) => {

    const [characters, setCharacters] = useState([])

    const current_user = props.match.params.username
    const current_url = props.location.pathname

    useEffect(() => {
        const fetchData =  async () => {
            const response = await fetch(`http://localhost:3001/users/${current_user}/characters`)
            const data = await response.json()
            setCharacters(data)
        }
        fetchData()
    }, [])

    return(
        <div className="flex-container">
            <div className="user-header">
                <h1>Welcome {current_user}</h1>
            </div>
            <div className="user-content">
                <h1>UserContent</h1>
                <div className="user-characters">
                    <h1>Characters</h1>
                    <CharacterContainer characters={characters}/>
                </div>
                <div>
                    <h1>Campaigns</h1>
                </div>
            </div>
            <div className="user-sidebar">
                <div>
                    <h1>Links</h1>
                    <Link to={`${current_url}/characters/new`}>Create Character</Link>
                    <a href="https://www.d20pfsrd.com/">d20pfsrd</a>
                </div>
            </div>
        </div>
    )
}

export default UserHomePage;