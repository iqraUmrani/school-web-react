import React, { Component } from 'react';
// import './App.css';
import firebase from 'firebase';
import Home from './home';
import Logins from './login';

class Apps extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
      
    }
    
    //  this.authListener = this.authListener.bind(this);
  }

  // componentDidMount() {
  //   this.authListener();
  // }

  // authListener() {
  //   firebase.auth().onAuthStateChanged((user) => {
  //     // console.log(user);
  //     if (user) {
  //       this.setState({ user });
  //       localStorage.setItem('user', user.uid);
        
  //     } else {
  //       this.setState({ user: null });
  //       localStorage.removeItem('user');
  //     }
  //   });
  // }
  

  render() {
    return (
      <div className="App">
        {this.state.user ? (
          <Home />
        ) :
          (
            <Logins />
          )}
      </div>
    );
  }
}

export default Apps;