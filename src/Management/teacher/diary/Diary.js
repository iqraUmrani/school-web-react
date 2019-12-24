import React from "react";
import './diary.css';
// import { readSync } from "fs";

export default class Diary extends React.Component {
    constructor() {
        super()
        {
        }
    }
    


    render() {
        return (
          <div id="diary">
            <h3>Add a new diary:</h3>  
            <form onSubmit={this.props.handleFormSubmit}>
              <label>
                Date:
                <input id="date" value={this.props.newdate}
                type="date" name="date"
                onChange={this.props.handleInputChange}/>
              </label>
              
              <label>
                class:
                <input id="class" value={this.props.newclass}
                type="class" name="class"
                onChange={this.props.handleInputChange}/>
              </label>
              <label htmlFor="english">
              englishs:
              <input id="english" value={this.props.newenglish} 
                type="text" name="english"
                onChange={this.props.handleInputChange} />
              </label>
              <label for="urdu">
              urdu:
    
              <input id="urdu" value={this.props.newurdu} 
                type="urdu" name="urdu"
                onChange={this.props.handleInputChange} />
              </label>
    
    
              <label for="maths">
              maths:
    
              <input id="maths" value={this.props.newmaths} 
                type="maths" name="maths"
                onChange={this.props.handleInputChange} />
              </label>
              <label for="islamiat">
              islamiat:
    
              <input id="islamiat" value={this.props.newislamiat} 
                type="islamiat" name="islamiat"
                onChange={this.props.handleInputChange} />
              </label>
    
    
    
              <label for="science">
              science:
    
              <input id="science" value={this.props.newscience} 
                type="science" name="science"
                onChange={this.props.handleInputChange} />
              </label>

              <label for="computer">
              computer:
    
              <input id="computer" value={this.props.newcomputer} 
                type="computer" name="computer"
                onChange={this.props.handleInputChange} />
              </label>

              <label for=".pakistan_st">
              pakistan_st:
    
              <input id="pakistan_st" value={this.props.newpakistan_st} 
                type="pakistan_st" name="pakistan_st"
                onChange={this.props.handleInputChange} />
              </label>
              <button type="submit" value="Submit">Add Topics</button>
            </form>
          </div>
        );
      }


      
}