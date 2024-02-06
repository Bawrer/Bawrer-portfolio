import React from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import {Link} from 'react-scroll';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <img src={logo} alt='logo' className='logo'/>
      <div className="desktopMenu">
      
            <Link className="desktopMenuListItem">Home</Link>
            <Link className='desktopMenuListItem'>About</Link>
            <Link className='desktopMenuListItem'>portfolio</Link>
            <Link className='desktopMenuListItem'>Certifications</Link>
            <Link className='desktopMenuListItem'>Contact</Link>

      </div>
      <button className='desktopMenubtn'>
      <img className='desktopMenuImg' alt=''/> toggle button </button>
    </nav>
    
  )
}

export default Navbar
