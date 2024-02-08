import About from "./components/About/About";
import Intro from "./components/Intro/intro";
import Navbar from "./components/Navbar/navbar";
import Portfolio from "./components/Portfolio/portfolio";


function App() {
  return (
    <div className="App">
       <Navbar/>
       <Intro/>
       <About/>
       <Portfolio/>
        
       
    </div>
  )
}

export default App;
