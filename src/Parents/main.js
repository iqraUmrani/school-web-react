import React from 'react';
import './main.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import Parent_diary from './diary'
  import App_parent from './upcoming'
  import Announcement_parent from './Announcement'
  import Syllabus_parents from './syllabus'
const Home = () => {
    return(
        <Router>
            <div>
            <nav className="parent-list">
                 <ul>
                    {/* <li><Link to="">Events</Link></li>   */}
                    <li><Link to="/diary">diary</Link></li>
                    
                    <li><Link to="/upcoming">upcoming Events</Link></li>
                    <li><Link to="/announcement">Announcement</Link></li>
                    <li><Link to="/syllabus">Syllabus</Link></li>

                   


                   
                </ul>
            </nav>
            
                <Switch><Route path="/diary">
                    <Parent_diary />
                    </Route>
                

                <Route path="/upcoming">
                    <App_parent />
            </Route>

            <Route path="/announcement">
                <Announcement_parent/>
            </Route>
            <Route path="/syllabus">
                <Syllabus_parents/>
            </Route>
                </Switch>
        </div>
        </Router>
        
    )
}
export default Home;