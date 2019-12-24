import React, { Component } from 'react';
// import './App.css';
import firebase from 'firebase';
import Home from './home';
import Logins from './login';

class Appes extends Component {
  constructor() {
    super();
    this.state = ({
      user: null,
    });
    this.authListener = this.authListener.bind(this);
    // this.writeDate = this.writeUserData.bind(this);
  }

  componentDidMount() {
    this.authListener();
    // this.writeDate()
  }
// writeDate(){
//   firebase.database().ref('users/' + user.uid).set(this.state).catch(error => {
//     console.log(error.message)
//   });
// }
  authListener() {
    firebase.auth().onAuthStateChanged((user) => {
      // console.log(user);
      if (user) {
        this.setState({ user });
        localStorage.setItem('user', user.uid);
        console.log(user.uid)
        console.log(user.email)
        // getUserData(user.uid)
      } else {
        this.setState({ user: null });
        localStorage.removeItem('user');
      }
    });
  //   function getUserData(user) {
  //     firebase.database().ref('users/' +user.uid).once("value", snap => {
  //         console.log(snap.val())
  //     })
  // }
  }

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

export default Appes;