import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import './nav.css';
import Render from './diary/Render';
import Result from './result/result'
const Nav = () => {
       return(
           <Router><div >
           <nav className="nav_teacher">
               <ul>
                   <li><Link to ="render">Diary</Link></li>
                   <li><Link to ="/Result">Result</Link></li>
               </ul>
           </nav>
           <Switch>
               <Route path ="/Render">
                  <Render />
               </Route>
               <Route path = "/Result">
                   <Result />
               </Route>
           </Switch>
       </div></Router>
           
       )
}
export default Nav;