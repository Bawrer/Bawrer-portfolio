import React, { useState } from 'react';
import './intro.css';
import video from '../../assets/Back_video (1).mp4';
 

const Intro = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const openMenu = () => {
    setMenuOpen(true);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header id="header">

<video autoPlay muted loop id="video-background">
        <source src= {video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="container">
        <nav>
          <img src="/images" alt="" className="logo" />
          <ul id={menuOpen ? 'sidemenu open' : 'sidemenu'}>
            <li><a href="#header">Home</a></li>
            <li><a href="#about">Abouts</a></li>
            
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#certificates">Certificates</a></li>
            <li><a href="#contact">Contact</a></li>
            <i className="fa-solid fa-xmark" onClick={closeMenu}></i>
          </ul>
          <i className="fa-solid fa-bars" onClick={openMenu}></i>
        </nav>
        
        <div className='social-header'>
        
                <div class="social-icons">
                  <a href="https://twitter.com/Bongink45395379"><i class="fa-brands fa-github"></i></a>
                  <a href="https://www.instagram.com/borah_zweni/"><i class="fa-brands fa-instagram"></i></a>
                  <a href="https://www.linkedin.com/in/bonginkosi-zweni-164794170/"><i class="fa-brands fa-linkedin"></i></a>
               </div>
             
              <div className="header-tex">
                <p>Fullstack software developer</p>
                <h1>Hi, I'm <span>Bonginkosi</span><br /> Zweni From South Africa</h1>
              </div>
        </div>
      </div>
    </header>
  );
};

export default Intro;
