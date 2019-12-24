import React, { Component } from 'react';
 import './timing.css';
 import ReactDOM from 'react-dom'
import Table from './table';
import Form from './feedBack'
import firebase from 'firebase'
class Timing extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      feedBack: '',
      
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
      .ref("feedback")
      .set(this.state);
    // console.log("feedback SAVED");
  };

  getUserData = () => {
    let ref = firebase.database().ref("feedback");
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
      name: this.state.name,
      feedback: this.state.feedback,
      
    }
    );

   

    this.setState({
      items,
      name: '',
      feedback: '',
      
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
          newName={ this.state.name }
          newFeedback={ this.state.feedback } 
          // add={this.add}
          
          />
          )}
       )}

      </div>
        </div>
        
    );
  }
}
// ReactDOM.render(<Timing />, document.getElementById('container'));

export default Timing;
