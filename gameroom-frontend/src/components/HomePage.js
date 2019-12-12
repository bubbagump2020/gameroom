import React, { useState } from 'react'
import { Container, Form, Nav, Button } from 'react-bootstrap'
import { Switch, Route } from 'react-router-dom'
import { SignUp } from './SignUp'
import { BASE_URL } from '../../src/Constants'
import { createBrowserHistory } from 'history'

export const HomePage = () => {
    return(
        <Container>
            <h1>Welcome to the Laughin Halflin Tavern Game Room</h1>
            <Nav>
                <Nav.Item>
                    <Nav.Link href="/">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/login">Login</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/signup">SignUp</Nav.Link>
                </Nav.Item>
            </Nav>
            <p>
               
            </p>
            <Switch>
                
                <Route path="/signup">
                    <SignUp />
                </Route>
            </Switch>
        </Container>
    )
}

export const Login = (props) => {

    const [ username, setUsername ] = useState()
    const [ password, setPassword ] = useState()

    const handleSubmit = (e) => {
    	e.preventDefault()
        fetch(`${BASE_URL}/login`, {
            credentials: 'include',
            method: 'POST',
            headers: {
                'X-Request-With': 'xmlHttpReqest',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        }).then(response => response.json())
          .then(data => props.history.push(`/users/${data.id}`))
    }

    return(
        <Container fluid>
            <h3>Login</h3>
            <Form onSubmit={e => handleSubmit(e)}>
                <Form.Group>
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter username" onChange={e => setUsername(e.target.value)} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter password" onChange={e => setPassword(e.target.value)} />
                </Form.Group>
                <Button type="submit">Login</Button>
            </Form>
        </Container>
    )
}