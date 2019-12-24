import React, { Component } from 'react';
 import './syllabus.css';
import Table from './table';
import Form from './form';
import firebase from 'firebase'
class Syllabus_parents extends Component {
  constructor() {
    super();

    this.state = {
      // subject: '',
      // topics: '',
      items: []
    }
  };
  

  componentDidMount(){
    this.getUserData();
  }
  componentDidUpdate( prevState) {
    if (prevState !== this.state) {
      this.writeUserData();
    }
  }

  writeUserData = () => {
    firebase.database()
      .ref("syllabus")
      .set(this.state);
    // console.log("syllabus SAVED");
  };

  getUserData = () => {
    let ref = firebase.database().ref("syllabus");
    ref.on("value", snapshot => {
      const state = snapshot.val();
      this.setState(state);
    });
  
  };
   

  handleFormSubmit = (e) => {
    e.preventDefault();

    let items = [...this.state.items];
//  console.log(items)
    items.push({
      subject: this.state.subject,
      topic: this.state.topic,


    });

    this.setState({
      items,
      // subject: '',
      // topic: '',
    });
  }
  // writeUserData(items) {
  //   firebase.database().ref('items').set({
  //     items: items
  //   });
  // }
  handleInputChange = (e) => {
    let input = e.target;
    let name = e.target.name;
    let value = input.value;

    this.setState({
      [name]: value
    })
  };

  render() {
    return (
        <div>
            <Table items={ this.state.items }/>
      <div className="Syllabus">
       {[this.state.items].map((item,index) => {
           return (
            <Form handleFormSubmit={ this.handleFormSubmit } 
            handleInputChange={ this.handleInputChange }
            newsubject={ this.state.subject }
            newtopic={ this.state.topic } 
            
            />
           )}
       )}
        
          


      </div>
        </div>
        
    );
  }
}

export default Syllabus_parents;
