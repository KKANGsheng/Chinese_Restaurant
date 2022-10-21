import React from 'react'
import Logo from '../Assets/logo.png'
import {Link} from 'react-router-dom'
import '../styles/Navbar.css';


export default function Navbar() {
  return (
    <div className='navbar'>
        <div className='logo'>
        <img src={Logo} alt="restaurant"/>
        </div>

      <div className='rightside'>

      <Link to="/">Home</Link> 

      <Link to="/menu">Menu</Link>

      <Link to="/about">About</Link>

      <Link to="/contact">Contact</Link>

      </div>

    </div>

  )
}
