import React from 'react'
import { Link } from 'react-router-dom'
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
                <p>
                    some sidebar content
                </p>
            </div>
            <div id="1">1</div>
            <div id="2">2</div>
            <div id="3">3</div>
            <div id="4">4</div>
            <div id="5">5</div>
            <div id="6">6</div>
            <div id="7">7</div>
            
        </div>
    )
}

export default HomePage;