import React, { Component } from 'react';
import './form.css'
import ReactDOM from 'react-dom';


class Form extends React.Component {
    render() {
      return (
        <div id="Form">
          <h3>Add a new Topics:</h3>  
          <form onSubmit={this.props.handleFormSubmit}>
            <label htmlFor="name">
            names:
            <input id="name" value={this.props.newName} 
              type="text" name="name"
              onChange={this.props.handleInputChange} />
            </label>
            <label for="subject">
            feedback:
  
            <input id="feedback" value={this.props.newfeedback} 
              type="feedback" name="feedback"
              onChange={this.props.handleInputChange} />
            </label>
  
  
            
            <button type="submit" value="Submit" onChange={this.props.add}>Add Topics</button>
          </form>
        </div>
      );
    }

  }
   export default Form


  
//   export default Form;