import React from 'react'
import {NavLink} from 'react-router-dom'
import '../styles/Navbar.css'

const Navbar = () => {
    return (
        <div className="Navbar">
            <div>
            <h1>Microblog</h1>
            <p>Get in the Rithm of blogging!</p>
            <pre>
            <NavLink to='/'>Home</NavLink>
            &ensp;
            <NavLink to='/blog'>Blog</NavLink> 
            &ensp;
            <NavLink to='/new'>Add a new post</NavLink>
            </pre>
            </div>
        </div>
    )
}

export default Navbar