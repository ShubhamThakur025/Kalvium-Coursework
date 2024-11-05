import React from 'react'
import { Link } from 'react-router-dom'
import "./NavBar.css"

function NavBar() {
  return (
    <div className='NavBar'>
      <div className="left">
        <Link to="/">
          <span id='title'>Kalvium 💖</span>
        </Link>
      </div>
      <div className="right">
        <Link to="/Contact">Contact</Link>
        <Link to="/RegForm">Registration Form</Link>
      </div>

    </div>
  )
}

export default NavBar
