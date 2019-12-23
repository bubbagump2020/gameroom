import React from 'react'
import CharacterCard from './CharacterCard'

const CharacterContainer = (props) => {

    const showCharacters = () => {
        return props.characters.map(character => {
            return(
                <CharacterCard key={character.id} charInfo={character}/>
            )
        })
    }

    return(
        <div>
            <h1>CharacterContainer</h1>
            {showCharacters()}
        </div>
    )
}

export default CharacterContainer;