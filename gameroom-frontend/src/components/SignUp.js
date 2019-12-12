import React, { useState } from 'react'
import { BASE_URL } from '../../src/Constants'
import { Container, Form, Button } from 'react-bootstrap'

export function SignUp () {

    const [ username, setUsername ] = useState()
    const [ password, setPassword ] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch(`${BASE_URL}/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        }).then(response => response.json())
          .then(data => console.log(data))
    }

    return(
        <Container>
            <h3>Sign Up</h3>
            <Form onSubmit={e => handleSubmit(e)}>
                <Form.Group>
                    <Form.Label>Username: </Form.Label>
                    <Form.Control type="text" placeholder="Enter username" onChange={e => setUsername(e.target.value)} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password: </Form.Label>
                    <Form.Control type="password" onChange={e => setPassword(e.target.value)} />
                </Form.Group>
                <Button type="submit">Sign Up</Button>
            </Form>
        </Container>
    )
}