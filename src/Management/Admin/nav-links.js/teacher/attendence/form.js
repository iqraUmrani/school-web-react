import React, { Component } from 'react';
import './form.css'
class Form extends React.Component {
  render() {
    return (
      <div id="Form">
        <h3>Add a new Topics:</h3>  
        <form onSubmit={this.props.handleFormSubmit}>
          <label htmlFor="teacher">
          teachers:
          <input id="teacher" value={this.props.newTeacher} 
            type="text" name="teacher"
            onChange={this.props.handleInputChange} />
          </label>
          <label for="subject">
          timing:

          <input id="timing" value={this.props.newTiming} 
            type="timing" name="timing"
            onChange={this.props.handleInputChange} />
          </label>


          
          <button type="submit" value="Submit" onChange={this.props.add}>Add Topics</button>
        </form>
      </div>
    );
  }
}

export default Form;