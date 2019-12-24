import React, { Component } from 'react';
 import './result.css';
import Table from './table';
import Form from './form';
import firebase from 'firebase'
class Result extends Component {
  constructor() {
    super();

    this.state = {
      date:'',
      student: '',
      subject: '',
      total_marks:'',
      marks_obtain:'',
      result: '',
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
      .ref("result")
      .set(this.state);
    // console.log("result SAVED");
  };

  getUserData = () => {
    let ref = firebase.database().ref("result");
    ref.on("value", snapshot => {
      const state = snapshot.val();
      this.setState(state);
    });
  
  };
   

  handleFormSubmit = (e) => {
    e.preventDefault();

    let items = [...this.state.items];
    // console.log(items)
    items.push({
      date : this.state.date,
      student: this.state.student,
      subject: this.state.subject,
      total_marks: this.state.total_marks,
      marks_obtain: this.state.marks_obtain,
      result : this.state.result,
    });

    this.setState({
      items,
      date: '',
      student: '',
      subject: '',
      total_marks:'',
      marks_obtain:'',
      result:''
    });
  };

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
      <div className="result">
      {[this.state.items].map((item,index) => {
        return(
        <Form handleFormSubmit={ this.handleFormSubmit } 
          handleInputChange={ this.handleInputChange }
          newdate={ this.state.date }
          newstudent={ this.state.student }
          newsubject={ this.state.subject } 
          newtotal_marks={this.state.total_marks}
          newmarks_obtain={this.state.marks_obtain}
          newresult={ this.state.result}/>
          )}
          )}
           
      </div>
        </div>
        
    );
  }
}

export default Result;
