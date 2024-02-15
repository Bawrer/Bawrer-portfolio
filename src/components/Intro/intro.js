import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import "./intro.css";
import video from "../../assets/Back_video (1).mp4";
import '@fortawesome/fontawesome-free/css/all.min.css';

const Intro = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  return (
    <header id="header">
      <video autoPlay muted loop id="video-background">
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="container">
        <nav>
          <ul className={menuOpen ? "sidemenu open" : "sidemenu"}>
            <li><a href="#header">Home</a></li>
            <li><a href="#about">Abouts</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#certificates">Certificates</a></li>
            <li><a href="#contact">Contact</a></li>
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
            <p>Fullstack software developer</p>
            <h1>Hi, I'm <span>Bonginkosi</span><br /> Zweni From South Africa</h1>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Intro;