// import logo from './logo.svg'
import './App.css'
import Navbar from './components/Navbar.js'
// import TextForm from './components/TextForm.js'
import About from './components/About.js'
// import TypingSpeedCalculator from './TypingSpeedCalculator.js'
function App() {
  return (
    <>
    
    <Navbar title="Typing Master" about="About us"/>
    <div className="container my-3">
      
      <About/>
    </div>
    </>
  );
}

export default App;
// <TextForm heading="Enter Text To Analyze"/>