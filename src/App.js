// import logo from './logo.svg'
import './App.css'
import React,{useState} from 'react'
import Navbar from './components/Navbar.js'
import TextForm from './components/TextForm.js'
import About from './components/About.js'
import Alert from './components/Alert.js'
// import TypingSpeedCalculator from './TypingSpeedCalculator.js'
function App() {
  const [alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      message:message,
      type:type
    });
    setTimeout(()=>{
      setAlert(null);
    },2000);
  }
  const [mode,setMode]=useState("light");
  const toggleSwitch=()=>{
    console.log(mode);
    if(mode=='light'){
      setMode('dark');
      showAlert('Dark Mode Is Enabled Now..','success');
      document.body.style.backgroundColor='#4c3f6d';
    }else{
      setMode('light');
      showAlert('Light Mode Is Enabled Now..','warning');
      document.body.style.backgroundColor='white';
    }
  }
  
  return (
    <>
    
    <Navbar title="Typing Master" about="About us" mode={mode} toggleSwitch={toggleSwitch} />
    <Alert alert={alert} />
    <div className="container my-3">
      
      <TextForm showAlert={showAlert} mode={mode} heading='Enter text to Analyze'/>
    </div>
    </>
  );
}

export default App;
// <TextForm heading="Enter Text To Analyze"/>