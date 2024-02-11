import About from "./components/About/About";
import Cerificates from "./components/Certificates/certificates"; 
import Intro from "./components/Intro/intro";
import Portfolio from "./components/Portfolio/portfolio";
import Contact from "./components/Contact/contact";




function App() {
  return (
    <div className="App">

      <Intro/>
       <About/>
       <Portfolio/>
       <Cerificates/>
       <Contact/>
    </div>
  )
}

export default App;
