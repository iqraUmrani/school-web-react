import React from 'react';
import './Nav_admin.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import firebase from 'firebase';
import Apps from './signup/App'
import Syllabus from './nav-links.js/syllabus'
import Announcement from './nav-links.js/announcement'
import Timing from './nav-links.js/teacher/attendence/timing'
import App from './nav-links.js/upcomingEvents/upcomingEvents'


const Nav_admin = () => {
//   componentDidMount(){
//       firebase.auth().onAuthStateChanged((user)=>{if(user){
//           this.setstate({User : user})
//       }
//     })
//   }

    
    return(
        <Router><div>
            
        <ul className ="nav_admin">
            {/* <li><Link to="/Event">Events</Link></li> */}
            <li><Link to="/syllabus">Syllabus</Link></li>
            <li><Link to="/update"> UpcomingEvents</Link></li>
            <li><Link to ="/signup">Signup</Link></li>
            <li><Link to="/announcement">Announcement</Link></li>
            <li><Link to ="/timing">Teacher Attendence</Link></li>
        </ul>
    </div>
    <Switch>
        {/* <Route path = "/Event">
             <Event/> 
        </Route> */}
        <Route path = "/update">
            <App />
        </Route>
        <Route path ="/signup">
            <Apps/>

        </Route>
        <Route path = "/announcement">
            <Announcement/>
        </Route>
        <Route path = "/syllabus">
            <Syllabus/>
        </Route>
        <Route path = "/timing">
           <Timing/>
        </Route>
    </Switch>
    
    </Router>
        
    )}
    
    
export default Nav_admin;