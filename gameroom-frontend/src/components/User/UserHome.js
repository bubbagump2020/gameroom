import React from 'react'
import { Container, Nav} from 'react-bootstrap'
import { useRouteMatch } from 'react-router-dom'

export const UserHome = (props) => {

    let { url } = useRouteMatch()

 

    return(
        <Container fluid>
            {console.log(url)}
            <h1>User Page</h1>
            <Nav>
                <Nav.Item>
                    <Nav.Link href={`${url}/characters`}>Characters</Nav.Link>
                </Nav.Item>
            </Nav>
        </Container>   
    )

}