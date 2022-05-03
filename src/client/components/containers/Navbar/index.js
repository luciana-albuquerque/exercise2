import { useState } from 'react'
import './navbar.scss'
import lupa from '../../../assets/images/lupa.png'
import { GiHamburgerMenu } from 'react-icons/gi'
import { GrClose } from 'react-icons/gr'

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const handleClick = () => setOpenMenu(!openMenu)
  const closeMenu = ()  => setOpenMenu(false)

  return (
    <div className="navbar">
      <div className='hamburguer' onClick={handleClick}>
        {openMenu ?  <GrClose size={20} style={{color: '$primaryColor'}}/>
                    : <GiHamburgerMenu size={20} style={{color: '$primaryColor'}}/> }
        <a href='about'>LOGIN</a>
      </div>
      <div className={ openMenu ? 'about active' : 'about'}>
        <a href='about'>ABOUT</a>
        <a href='about'>CONSULTATION</a>
      </div>
      <div className="shop">
        <h2>sooth</h2>
        <ul>
          <li><a href='about'>Acne</a></li>
          <li><a href='about'>Sun</a></li>
          <li><a href='about'>Eczema</a></li>
          <li><a href='about'>Psoriasis</a></li>
          <li><a href='about'>Vitiligio</a></li>
        </ul>
      </div>
      <div className={ openMenu ? 'account active' : 'account'}>
        <img src={lupa} alt='search'></img>
        <a href='about'>CART</a>
        <a href='about'>LOGIN</a>
      </div>
    </div>
  )
}

export default Navbar