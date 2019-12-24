import 'bootstrap/dist/css/bootstrap.min.css';
import'react-bootstrap';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import{createstore} from 'redux';
import Img from 'react-image'
import firebase from 'firebase';
import 'react-form'

var firebaseConfig = {
  apiKey: "AIzaSyC_tpZUz06neylGEfw2Rqi_JMrsm2uJUXk",
  authDomain: "awesome-1234iqra.firebaseapp.com",
  databaseURL: "https://awesome-1234iqra.firebaseio.com",
  projectId: "awesome-1234iqra",
  storageBucket: "awesome-1234iqra.appspot.com",
  messagingSenderId: "141334850116",
  appId: "1:141334850116:web:6361e770e20359fae9aa11"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
console.log(firebase);
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
