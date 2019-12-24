import React, { Component } from 'react';

class Form extends React.Component {
  render() {
    return (
      <div id="Form">
        <h3>Add a new Topics:</h3>  
        <form onSubmit={this.props.handleFormSubmit}>
          <label htmlFor="subject">
          Subject:
          <input id="subject" value={this.props.newSubject} 
            type="text" name="subject" 
            onChange={this.props.handleInputChange} />
          </label>
          <label for="topic">
          Topic:

          <input id="topic" value={this.props.newTopic} 
            type="topic" name="topic" 
            onChange={this.props.handleInputChange} />
          </label>
          <button type="submit" value="Submit">Add Topics</button>
          
        </form>
      </div>
    );
  }
}

export default Form;