// App.js
import React, { useState } from "react";
import About from "./components/About/About";
import Certificates from "./components/Certificates/certificates";
import Intro from "./components/Intro/intro";
import Portfolio from "./components/Portfolio/portfolio";
import Contact from "./components/Contact/contact";
import Footer from "./components/footer/footer";

function App() {
  const [toggleState, setToggleState] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState("#0000");
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleButton = () => {
    setToggleState((prevState) => !prevState);
    const colors = ["#808080", "transparent"];
    const currentIndex = colors.findIndex(color => color === backgroundColor);
    const nextIndex = (currentIndex + 1) % colors.length;
    setBackgroundColor(colors[nextIndex]);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
  };

  return (
    <div className="App">
      <Intro
        toggleState={toggleState}
        toggleButton={toggleButton}
        closeMenu={closeMenu}
        toggleMenu={toggleMenu}
        menuOpen={menuOpen}
        backgroundColor={backgroundColor}
      />
      <About
        toggleState={toggleState}
        toggleButton={toggleButton}
        backgroundColor={backgroundColor}
      />
      <Portfolio />
      <Certificates />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
