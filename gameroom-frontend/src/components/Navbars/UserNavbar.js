import React from 'react'
import { Link } from 'react-router-dom'
import './UserNavbar.scss'

export function Navbar(){
    return(
        <div className="topnav">
             <h1>User Home Page</h1>
             <Link to="/characters/new">Create Character</Link>
        </div>
    )
}