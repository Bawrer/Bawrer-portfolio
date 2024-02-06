import React from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <img src={logo} alt='logo' className='logo'/>
      <div className='desktopMenu'>
      </div>

      <button className='desktopMenubtn'>
      <img className='desktopMenuImg' alt=''/> toggle button </button>
    </nav>
    
  )
}

export default Navbar
