import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { coreRaces, coreClasses, baseClasses } from '../../Constants/CharacterCreationConstants'

const NewCharacterForm = (props) => {
    const current_user = props.match.params.username

    const [ character, setCharacter ] = useState({
        name: "",
        level: 1,
        race: "",
        class: "",
        str: 10,
        dex: 10,
        con: 10,
        int: 10,
        wis: 10,
        cha: 10
    })

    const coreClassOptions = () => {
        return coreClasses.map(charClass => {
            return(
                <option value={charClass.value} key={charClass.value}>{charClass.text}</option>
            )
        })
    }

    const baseClassOptions = () => {
        return baseClasses.map(charClass => {
            return(
                <option value={charClass.value} key={charClass.value}>{charClass.text}</option>
            )
        })
    }

    const coreRaceOptions = () => {
        return coreRaces.map(race => {
            return(
                <option value={race.value} key={race.value}>{race.text}</option>
            )
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        const response = await fetch(`http://localhost:3001/users/${document.cookie}/characters`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'X-request-with': 'XmlHttpRequest',
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                character_name: character.name,
                character_level: character.level,
                character_race: character.race,
                character_class: character.class,
                str: character.str,
                dex: character.dex,
                con: character.con,
                int: character.int,
                wis: character.wis,
                cha: character.cha
            })
        })
        const data = await response.json()
        console.log(data)
        return data;
    }

    return(
        <div className="topdiv">
            {console.log(document.cookie)}
            <h1>Create A Character</h1>
            <form onSubmit={e => handleSubmit(e)}>
                <div>
                    <label>Character Name: </label>
                    <input type="text" onChange={e => setCharacter({ ...character, name: e.target.value})}/>
                </div>
                <div>
                    <label>Character Race: </label>
                    <select name="races" id="race-select" onChange={e => setCharacter({ ...character, race: e.target.value})}>
                        <optgroup label="Core Races">
                            {coreRaceOptions()}
                        </optgroup>
                    </select>
                </div>
                <div>
                    <label htmlFor="class-select">Character Class: </label>
                    <select name="classes" id="class-select" onChange={e => setCharacter({ ...character, class: e.target.value})}>
                        <optgroup label="Core Classes">
                            {coreClassOptions()}
                        </optgroup>
                        <optgroup label="Base Classes">
                            {baseClassOptions()}
                        </optgroup>
                    </select>
                </div>
                <button type="submit">Create Character</button>
            </form>
            <Link to={`/users/${current_user}`}>Home</Link>
        </div>
    )
}

export default NewCharacterForm;