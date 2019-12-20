import React from 'react'
import { Link } from 'react-router-dom'
import NewUserForm from './NewUserForm'
import './HomeStyling/HomePageStyling.scss'

const HomePage = (props) => {

    return(
        <div className="grid-container">           
            <div className="header">
                <h1>Welcome to the Laughin Halflin Tavern Game Room</h1>
            </div>
            <div className="content">
                <p>
                    This is a place where you can manage
                    your characters, campaigns, and your fellow players!
                </p>
                <p>

                </p>
                
            </div>
            <div className="sidebar">
                <NewUserForm />
            </div>            
        </div>
    )
}

export default HomePage;