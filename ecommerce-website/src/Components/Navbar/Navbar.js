import React from 'react'
import './Navbar.css'
import logo from '../Assets/LOGO.png'
import cart_icon from '../Assets/shopping-cart.png'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt='logo' className='logo-img' />
        <p>SHOPPER</p>
      </div>
      <ul className='nav-menu'>
        <li>Shop <hr/></li>
        <li>Men</li>
        <li>Women</li>
        <li>Kids</li>
      </ul>
      <div className='nav-login-cart'>
        <button>Login</button>
        <img src={cart_icon} alt='icon' className='cart-img'/>
      </div>
    </div>
  )
}

export default Navbar
