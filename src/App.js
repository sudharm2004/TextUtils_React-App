// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import NAVBAR from './components/Navbar.js';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';
import { Route, Routes } from "react-router-dom"


function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)
  const [style, setStyle] = useState({
    color: 'black',
    backgroundColor: 'white',
    hspCode:129
  })

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'black'
    document.body.style.color = 'white';
      showAlert('Dark mode has been enabled', 'success')
      setStyle({
        color: 'white',
        backgroundColor: 'black',
        border: '1px solid white',
        hspCode:10
      })
    } else {
      setMode('light')
    document.body.style.color = 'black';
    document.body.style.backgroundColor = 'white'
      showAlert('Light mode has been enabled', 'success')
      setStyle({
        color: 'black',
        backgroundColor: 'white',
        hspCode:129
      })
    }
  }

    const changeColor=(event)=>{
      let color=event.target.value;
    // Variables for red, green, blue values
    var r, g, b, hsp;
    
    // Check the format of the color, HEX or RGB?
    if (color.match(/^rgb/)) {

        // If RGB --> store the red, green, blue values in separate variables
        color = color.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/);
        
        r = color[1];
        g = color[2];
        b = color[3];
    } 
    else {
        
        // If hex --> Convert it to RGB: http://gist.github.com/983661
        color = +("0x" + color.slice(1).replace( 
        color.length < 5 && /./g, '$&$&'));

        r = color >> 16;
        g = color >> 8 & 255;
        b = color & 255;
    }
    
    // HSP (Highly Sensitive Poo) equation from http://alienryderflex.com/hsp.html
    hsp = Math.sqrt(
    0.299 * (r * r) +
    0.587 * (g * g) +
    0.114 * (b * b)
    );

    // Using the HSP value, determine whether the color is light or dark
    if (hsp>127.5) {
      //Color is light
      setStyle({
        color:'black',
        backgroundColor: event.target.value,
        hspCode:hsp
      })
      document.body.style.backgroundColor = event.target.value;
      document.body.style.color = 'black';
    } 
    else {
      //Color is dark
      setStyle({
        color:'white',
        backgroundColor: event.target.value,
        hspCode:hsp
      })
      document.body.style.backgroundColor = event.target.value;
      document.body.style.color = 'white';
    }
  }

  return (
    <div>
      <NAVBAR title="Textutils" aboutText="About Us" mode={mode} toggleMode={toggleMode} changeColor={changeColor}/>
      <Alert alert={alert} />
      <Routes>
        <Route exact path="/" element={<TextForm heading="Enter text to analyze" mode={mode} showAlert={showAlert} style={style}/>}/>
          <Route exact path="/about" element={<About style={style}/>} />
      </Routes>
      
    </div>
  );
}


export default App;
