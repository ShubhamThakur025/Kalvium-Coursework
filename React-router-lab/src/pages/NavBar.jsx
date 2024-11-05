import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

function NavBar() {
    return (
        <div id='NavBar'>
            <div className='Left'>
                <Link to = "/" id='kalvium'>Kalvium ❤️</Link>
            </div>
            <div className='Right'>
                <Link to = "/About">About</Link>
                <Link to= "/Contact">Contacts</Link>
            </div>
        </div>
    )
}

export default NavBar
