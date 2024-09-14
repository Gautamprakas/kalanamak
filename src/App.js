// import logo from './logo.svg'
import './App.css'
import React,{useState} from 'react'
import Navbar from './components/Navbar.js'
import TextForm from './components/TextForm.js'
import About from './components/About.js'
// import TypingSpeedCalculator from './TypingSpeedCalculator.js'
function App() {
  const [mode,setMode]=useState("light");
  const toggleSwitch=()=>{
    console.log(mode);
    if(mode=='light'){
      setMode('dark');
      document.body.style.backgroundColor='#4c3f6d';
    }else{
      setMode('light');
      document.body.style.backgroundColor='white';
    }
  }
  
  return (
    <>
    
    <Navbar title="Typing Master" about="About us" mode={mode} toggleSwitch={toggleSwitch} />
    <div className="container my-3">
      
      <TextForm mode={mode} heading='Enter text to Analyze'/>
    </div>
    </>
  );
}

export default App;
// <TextForm heading="Enter Text To Analyze"/>