import About from "./components/About/About";
import Cerificates from "./components/Certificates/certificates";
 
import Intro from "./components/Intro/intro";
 
import Portfolio from "./components/Portfolio/portfolio";


function App() {
  return (
    <div className="App">

      <Intro/>
       <About/>
       <Portfolio/>
       <Cerificates/>
    </div>
  )
}

export default App;
