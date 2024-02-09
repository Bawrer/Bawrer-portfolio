import React, { useState } from 'react';
import './intro.css';

const Intro = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const openMenu = () => {
    setMenuOpen(true);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header id="header">
      <div className="container">
        <nav>
          <img src="/images" alt="" className="logo" />
          <ul id={menuOpen ? 'sidemenu open' : 'sidemenu'}>
            <li><a href="#header">Home</a></li>
            <li><a href="#about">About</a></li>
            {/* <li><a href="#services">Services</a></li> */}
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
            <i className="fa-solid fa-xmark" onClick={closeMenu}></i>
          </ul>
          <i className="fa-solid fa-bars" onClick={openMenu}></i>
        </nav>
        <div className="header-tex">
          <p>Fullstack software developer</p>
          <h1>Hi, I'm <span>Bonginkosi</span><br /> Zweni From South Africa</h1>
        </div>
      </div>
    </header>
  );
};

export default Intro;