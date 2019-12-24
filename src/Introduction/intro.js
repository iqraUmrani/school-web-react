import React from 'react';
import ReactDom from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import Apps from '../Management/sign/App'
import Home from '../Parents/main';
import Management from '../Management/Management';
  import './intro.css'
  import logo from '../images/logo.png';
  export default function Intro() {
    return(
      
        <Router>
            <div>
            <nav className = "introduce">
            
                <ul>
                  
                    <li><Link to = "/Parents">Parents</Link></li>
                    <li><img src={logo} className="logo" /></li>
                    <li><Link to = "/Management">Management</Link></li>
                    
                </ul>
            </nav>
            
  
            <Switch>
          <Route path="/Parents">
            <Home />
          </Route>
          <Route path="/Management">
            <Apps/>
          </Route>
          </Switch>
        </div>
        </Router>



        
        )
};
