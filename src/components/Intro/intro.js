import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faToggleOn, faToggleOff } from "@fortawesome/free-solid-svg-icons";
import "./intro.css";
import video from "../../assets/Back_video (1).mp4";

const Intro = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [toggleState, setToggleState] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState("#0000");

  const toggleMenu = () => {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const toggleButton = () => {
    setToggleState((prevState) => !prevState);
    const colors = ["#808080", "transparent"]; // Define an array of colors
    const currentIndex = colors.findIndex(color => color === backgroundColor);
    const nextIndex = (currentIndex + 1) % colors.length;
    setBackgroundColor(colors[nextIndex]);
  };

  return (
    <header id="header" style={{ backgroundColor }}>
      <video autoPlay muted loop id="video-background">
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="container">
        <nav>
          <ul className={menuOpen ? "sidemenu open" : "sidemenu"}>
            {menuOpen && (
              <li className="close-icon" onClick={toggleMenu}>
                <FontAwesomeIcon icon={faTimes} className="menu-icon-close" />
              </li>
            )}
            <li>
              <button className="toggle-icon" onClick={toggleButton}>
                <FontAwesomeIcon icon={toggleState ? faToggleOn : faToggleOff} />
              </button>
            </li>
            <li><a href="#header" onClick={closeMenu}>Home</a></li>
            <li><a href="#about" onClick={closeMenu}>About</a></li>
            <li><a href="#portfolio" onClick={closeMenu}>Portfolio</a></li>
            <li><a href="#certificates" onClick={closeMenu}>Certificates</a></li>
            <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
          </ul>
          <div className="menu-icon">
            <FontAwesomeIcon
              icon={menuOpen ? faTimes : faBars}
              onClick={toggleMenu}
              className="menu-icon-bars"
            />
          </div>
        </nav>

        <div className="social-header">
          <div className="social-icons">
            <a href="https://github.com/Bawrer"><i className="fab fa-github"></i></a>
            <a href="https://www.instagram.com/borah_zweni/"><i className="fab fa-instagram"></i></a>
            <a href="https://www.linkedin.com/in/bonginkosi-zweni-164794170/"><i className="fab fa-linkedin"></i></a>
          </div>

          <div className="header-tex">
            <h1>Hi, I'm <span>Bonginkosi</span><br /> Zweni From South Africa</h1>
            <p>junior software developer</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Intro;
