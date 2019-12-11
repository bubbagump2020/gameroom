import React, { useEffect } from 'react'
import { Container} from 'react-bootstrap'
import { SiteNavbar } from '../NavBar'
import { useDispatch } from 'react-redux'
import { storeUserId } from '../../redux/actions/index'

export const UserHome = (props) => {

    const dispatch = useDispatch
    const user_path = props.history.location.pathname
    const user_id = props.match.params.id
    
    // useEffect({
        
    // }, [])

    return(
        <Container fluid>
            <SiteNavbar />
        </Container>   
    )

}