import React from 'react'
import './containers.scss'

function Navbar() {
  return (
    <div className="navbar">
      <div className="about">
        <a href='about'>ABOUT</a>
        <a href='about'>CONSULTATION</a>
      </div>
      <div className="shop">
        sooth
        <ul>
          <li><a href='about'>Acne</a></li>
          <li><a href='about'>Sun</a></li>
          <li><a href='about'>Eczema</a></li>
          <li><a href='about'>Psoriasis</a></li>
          <li><a href='about'>Vitiligio</a></li>
        </ul>
      </div>
      <div className="account">
        {/* <input>Searchbar</input> */}
        <a href='about'>CART</a>
        <a href='about'>LOGIN</a>
      </div>
    </div>
  )
}

export default Navbar