// import logo from './logo.svg'
import './App.css'
import Navbar from './components/Navbar.js'
import TextForm from './components/TextForm.js'
import TypingSpeedCalculator from './TypingSpeedCalculator.js'
function App() {
  return (
    <>
    
    <Navbar title="Typing Master" about="About us"/>
    <div className="container my-3">
      <TextForm heading="Enter Text To Analyze"/>
    </div>
    </>
  );
}

export default App;
