import React from 'react';
import ReactDOM from 'react-dom';
import './contact.css'
class Contact extends React.Component {
render(){
    return(
        <div className="contact_us">
            <h1>FOR CONTACT US :</h1>
            <p>
                Call us on: 01234567891.
            </p>
            <p>
                Email id: theSchool@gmail.com
            </p>
            <h1>VISIT OUR SCHOOL</h1>
            <div className='iframeDiv'><iframe src="https://maps.google.com/maps?q=university%20of%20karachi%2CUBIT&t=&z=11&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe></div>
        </div>
    )
}
}
ReactDOM.render(<Contact />, document.getElementById('contact'));
// export default Contact;