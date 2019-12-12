import React, { useEffect, useState } from 'react'
import { Container, Nav } from 'react-bootstrap'
import { CharacterCard } from './CharacterCard'
import { BASE_URL } from '../../Constants'

export const CharacterCollection = (props) => {

    const { user_id } = props.match.params.id
    const [charArray, setCharArray ] = useState([])

    useEffect(() => {
        async function fetchCharacters(){
            let url = `${BASE_URL}/users/${user_id}/characters`
            const response = await fetch(url)
            const json = await response.json()
        }
        fetchCharacters()
    }, [])

    return(
        <Container fluid>
            <Nav>
                <Nav.Item>
                    <Nav.Link href={`${props.location.pathname}/new`}>Create a Character</Nav.Link>
                </Nav.Item>
            </Nav>
            <h1>Character Collection</h1>
            <CharacterCard />
        </Container>
    )
}