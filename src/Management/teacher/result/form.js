import React, { Component } from 'react';
import './form.css'
class Form extends React.Component {
  render() {
    return (
      <div id="Form">
        <h3>Add a new Topics:</h3>  
        <form onSubmit={this.props.handleFormSubmit}>
        <label htmlFor="date">
          date:
          <input id="date" value={this.props.newdate} 
            type="date" name="date"
            onChange={this.props.handleInputChange} />
          </label>
          <label htmlFor="student">
          students:
          <input id="student" value={this.props.newStudent} 
            type="text" name="student"
            onChange={this.props.handleInputChange} />
          </label>
          <label for="subject">
          Subject:

          <input id="subject" value={this.props.newSubject} 
            type="subject" name="subject"
            onChange={this.props.handleInputChange} />
          </label>


          <label for="total_marks">
          total_marks:

          <input id="total_marks" value={this.props.newTotal_marks} 
            type="total_marks" name="total_marks"
            onChange={this.props.handleInputChange} />
          </label>
          <label for="marks_obtain">
          marks_obtain:

          <input id="marks_obtain" value={this.props.newmarks_obtain} 
            type="marks_obtain" name="marks_obtain"
            onChange={this.props.handleInputChange} />
          </label>



          <label for="result">
          Result:

          <input id="result" value={this.props.newResult} 
            type="result" name="result"
            onChange={this.props.handleInputChange} />
          </label>
          <button type="submit" value="Submit">Add Topics</button>
        </form>
      </div>
    );
  }
}

export default Form;