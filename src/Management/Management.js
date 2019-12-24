import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// import Apps from './teacher/sign/App'
import Appes from './sign/App'
import Nav_admin from './Admin/nav_admin'
//  import Appes from './Admin/signup/index';
// import Login from './Admin/signup2/login'
//import Apps from './teacher/signup/index'
import Nav from './teacher/nav';
import'./Management.css';
//  import AuthContext from './teacher/Login_teacher';


// import Login_Admin from './Admin/Login_Admin'

export default function Manage() {
  return (
    <Router>
      <div>
        <nav className="Management-list">
        <ul>
            <li>
              <Link to="/teacher">Teacher</Link>
            </li>
            
            
            <li>
                <Link to="/admin">Admin</Link>
            </li>
          </ul>
          
         
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/teacher">
            {/* <Apps /> */}
            <Nav/>
            {/* <AuthContext/> */}
          </Route>
          
          
          <Route path="/admin">
            {/* <Login/> */}
            {/* <Appes/> */}
            <Nav_admin/>
            </Route>
        </Switch>
      </div>
    </Router>
  );
}
