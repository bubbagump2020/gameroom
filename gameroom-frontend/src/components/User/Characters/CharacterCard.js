import React from 'react'

const CharacterCard = (props) => {
    const character = props.charInfo
    return(
        <div>
            <h1>{character.character_name}</h1>
        </div>
    )
}

export default CharacterCard;