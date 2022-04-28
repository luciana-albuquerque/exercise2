import React from 'react'
import './navbar.scss'
import lupa from '../../../assets/images/lupa.png'

function Navbar() {
  return (
    <div className="navbar">
      <div className="about">
        <a href='about'>ABOUT</a>
        <a href='about'>CONSULTATION</a>
      </div>
      <div className="shop">
        <h3>sooth</h3>
        <ul>
          <li><a href='about'>Acne</a></li>
          <li><a href='about'>Sun</a></li>
          <li><a href='about'>Eczema</a></li>
          <li><a href='about'>Psoriasis</a></li>
          <li><a href='about'>Vitiligio</a></li>
        </ul>
      </div>
      <div className="account">
        <img src={lupa}></img>
        <a href='about'>CART</a>
        <a href='about'>LOGIN</a>
      </div>
    </div>
  )
}

export default Navbar