import React, { Component } from 'react';
 import './timing.css';
import Table from './table';
import Form from './form';
import firebase from 'firebase'
class Timing extends Component {
  constructor() {
    super();

    this.state = {
      teacher: '',
      timing: '',
      
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
      .ref("timing")
      .set(this.state);
    // console.log("timing SAVED");
  };

  getUserData = () => {
    let ref = firebase.database().ref("timing");
    ref.on("value", snapshot => {
      const state = snapshot.val();
      this.setState(state);
    });
  
  };
   





  handleFormSubmit = (e) => {
    e.preventDefault();
    
    let items = [...this.state.items];
    // console.log(this.state.items);
    items.push({
      teacher: this.state.teacher,
      timing: this.state.timing,
      
    }
    );

   

    this.setState({
      items,
      teacher: '',
      timing: '',
      
    });
  };
  // add =(e) =>{
  //     console.log(this.state)
  // };

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
      <div className="timing">
      {[this.state.items].map((item,index) => {
           return (
        <Form handleFormSubmit={ this.handleFormSubmit } 
          handleInputChange={ this.handleInputChange }
          newTeacher={ this.state.teacher }
          newTiming={ this.state.timing } 
          // add={this.add}
          
          />
          )}
       )}

      </div>
        </div>
        
    );
  }
}

export default Timing;
