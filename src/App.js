import React from 'react';
import ReactDom from 'react-dom';
import './App.css';
 import Slider from './slider/slider'
import Intro from './Introduction/intro'
 import Timing from './feedback/timing'
 import About from './about'

import Contact from './contact';
// import FeedBack from './feedback/feedBack'
// import reactForm from './reactForm'
function App() {
 
return(
  <div>
  <div className="App">
    
    <Intro/>
    </div>
     <div className="feedback">
    
    <Timing/>
  </div> 
  
  </div>
)
  
}


export default App;
