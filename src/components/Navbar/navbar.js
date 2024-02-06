import React from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import {Link} from 'react-scroll';
import toggleImg from '../'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <button className='desktopMenubtn'>
      <img className='desktopMenuImg' alt=''/> toggle button </button>
      <div className="desktopMenu">
      
            <Link className="desktopMenuListItem">Home</Link>
            <Link className='desktopMenuListItem'>About</Link>
            <Link className='desktopMenuListItem'>portfolio</Link>
            <Link className='desktopMenuListItem'>Certifications</Link>
            <Link className='desktopMenuListItem'>Contact</Link>

      </div>

      <img src={logo} alt='logo' className='logo'/>
     
    </nav>
    
  )
}

export default Navbar
