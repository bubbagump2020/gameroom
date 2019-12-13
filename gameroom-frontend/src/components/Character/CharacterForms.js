import React from 'react'
import { Container, Form, Row, Col, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import {
    BASE_URL,
    CHARACTER_CLASSES,
    CHARACTER_RACES
} from '../../Constants'
import {
    characterName,
    characterClass,
    characterRace,
    strength, dexterity, constitution,
    intelligence, wisdom, charisma

} from '../../redux/actions/index'

export const NewCharacterForm = (props) => {

    const { character } = useSelector(state => ({ character: state.character }))

    const user_id  = props.match.params.id
    console.log(user_id)
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        fetch(`${BASE_URL}/users/${user_id}/characters`, {
            credentials: 'include',
            method: 'POST',
            headers:{
                'X-Request-With': 'xmlHttpReqest',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user_id: user_id,
                character_name: character.character_name,
                character_level: character.character_level,
                character_race: character.character_race,
                character_class: character.character_class,
                str: character.strength,
                dex: character.dexterity,
                con: character.constitution,
                int: character.intelligence,
                wis: character.wisdom,
                cha: character.charisma
            })
        })
    }

    return(
        <Container fluid>
            <h1>Create A Character</h1>
            <Row>
                <Container>
                    <Form onSubmit={e => handleSubmit(e)}>
                        <Form.Row>
                            <Form.Group as={Col}>
                                <Form.Label>Character Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter a name"
                                    onChange={e => dispatch(characterName(e.target.value))}></Form.Control>
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Label>Character Class</Form.Label>
                                <Form.Control as="select" onChange={e => dispatch(characterClass(e.target.value))}>
                                    {CHARACTER_CLASSES.map(charClass => {
                                        return(
                                            <option key={charClass}>{charClass}</option>
                                        )
                                    })}
                                </Form.Control>
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Label>Character Race</Form.Label>
                                <Form.Control as="select" onChange={e => dispatch(characterRace(e.target.value))}>
                                    {CHARACTER_RACES.map(race => {
                                        return(
                                            <option key={race}>{race}</option>
                                        )
                                    })}
                                </Form.Control>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col}>
                                <Form.Label>Strength {character.abilityScores.strength}</Form.Label>
                                <Form.Control type="number" placeholder={character.abilityScores.strength} onChange={e => dispatch(strength(e.target.value))}/>
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Label>Dexterity {character.abilityScores.dexterity}</Form.Label>
                                <Form.Control type="number" placeholder={character.abilityScores.dexterity} onChange={e => dispatch(dexterity(e.target.value))}/>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col}>
                                    <Form.Label>Constitution {character.abilityScores.constitution}</Form.Label>
                                    <Form.Control type="number" placeholder={character.abilityScores.constitution} onChange={e => dispatch(constitution(e.target.value))}/>
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Label>Intelligence {character.abilityScores.intelligence}</Form.Label>
                                    <Form.Control type="number" placeholder={character.abilityScores.intelligence} onChange={e => dispatch(intelligence(e.target.value))}/>
                                </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col}>
                                    <Form.Label>Wisdom {character.abilityScores.wisdom}</Form.Label>
                                    <Form.Control type="number" placeholder={character.abilityScores.wisdom} onChange={e => dispatch(wisdom(e.target.value))}/>
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Label>Charisma {character.abilityScores.charisma}</Form.Label>
                                    <Form.Control type="number" placeholder={character.abilityScores.charisma} onChange={e => dispatch(charisma(e.target.value))}/>
                                </Form.Group>
                        </Form.Row>
                        <Button type="submit">Create</Button>
                    </Form>
                </Container>
            </Row>
            <Row>
                <Container>
                    <h1>Container 2</h1>
                </Container>
            </Row>
            
        </Container>
    )
}

export const EditCharacterForm = () => {
    return(
        <Container>
            <h1>Edit Character Form</h1>
        </Container>
    )
}