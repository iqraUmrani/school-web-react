import React from 'react';
import './about.css';
import ReactDOM from 'react-dom';


const About = () => {
    return (
        <div className="about-page">
            <h1>
                we make your skills better :-
            </h1>
            <p>
                There is a platform where we improve your different skills and professional level.
                We are learning you a different language with a best master teachers. We are providing you different notes from qualified teachers.  
            </p>
        </div>
    )
}
ReactDOM.render(<About />, document.getElementById('about'));
// export default About;