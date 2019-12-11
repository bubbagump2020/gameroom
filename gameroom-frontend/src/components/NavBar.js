import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'

export const SiteNavbar = (props) => {

    const user_path = props.user_path

    return(
        <Navbar bg="light" expand="lg">
        <Navbar.Brand href={`${user_path}`}>Game Room</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href={`${user_path}/characters`}>Characters</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
    )
}