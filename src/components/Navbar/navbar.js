import React, { useState } from 'react';
import './navbar.css'; // Import external CSS file
import { Link } from 'react-scroll';

const Navbar = () => {
  // State to track the current color
  const [isColorOn, setIsColorOn] = useState(false);

  // Function to toggle between colors
  const toggleColor = () => {
    setIsColorOn(prevState => !prevState);
  };

  return (
    <nav className={`navbar ${isColorOn ? 'colorOn' : 'colorOff'}`}>
      {/* Toggle button to change between two colors */}
      <button className='desktopMenubtn' onClick={toggleColor}>
        {isColorOn ? 'Off' : 'On'}
      </button>

      <div className="desktopMenu">
        <Link className="desktopMenuListItem">Home</Link>
        <Link className='desktopMenuListItem'>About</Link>
        <Link className='desktopMenuListItem'>Portfolio</Link>
        <Link className='desktopMenuListItem'>Certifications</Link>
        <Link className='desktopMenuListItem'>Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
