import React from 'react'
import './Navbar.css';

function Navbar () {

  return (
    <nav>
      <div>
        <button className="navbar-button">Player O</button>
        <p>Score</p>
      </div>

      <div>
        <button className="navbar-button">Reset</button>
      </div>

      <div>
        <button className="navbar-button">Player X</button>
        <p>Score</p>
      </div>
  </nav>
  )
}

export default Navbar;

