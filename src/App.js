import About from "./components/About/About";
import Cerificates from "./components/Certificates/certificates"; 
import Intro from "./components/Intro/intro";
import Portfolio from "./components/Portfolio/portfolio";
import Contact from "./components/Contact/contact";
import Footer from "./components/footer/footer";




function App() {
  return (
    <div className="App">
      <Intro/>
       <About/>
       <Portfolio/>
       <Cerificates/>
       <Contact/>
       <Footer/>
    </div>
  )
}

export default App;
