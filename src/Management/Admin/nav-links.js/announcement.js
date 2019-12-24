import React from 'react';
import firebase from 'firebase';



  
  
  class Announcement extends React.Component {
    constructor(){
      super();
      // console.log("working constructor")
      this.state={
        Announcement : [],
        value : ""
      }
  
      firebase.database().ref('Announcement').once('value')
      .then((snapshot) => {
        // console.log(snapshot.val().Announcement)
        
        if(snapshot.val() && snapshot.val().Announcement){
          this.setState({
            Announcement : snapshot.val().Announcement
          })
        }
      });
    }
  
    textadd(e){
      this.setState({
        value : e.target.value
      })
    }
  
    add(){
      let arr = [];
      arr.push(this.state.value)
      this.setState({
        Announcement :this.state.Announcement.concat(arr)
      }, () => this.writeUserData(this.state.Announcement))
    }
  
    writeUserData(Announcement) {
      firebase.database().ref('Announcement').set({
        Announcement: Announcement
      });
    }
  
    delete(i){
      // console.log(i)
      let newArr = this.state.Announcement
      newArr.splice(i,1)
      console.log(newArr)
      this.setState({
        Announcement : newArr
      }, () => this.writeUserData(this.state.Announcement))
      
  
    }
    
    render(){
      // console.log('working render')
      return (
        <div className="Announcement">
            <label>Announcement</label><br/>
         <textarea type="text" onChange={(e)=> this.textadd(e)} />
         <button onClick={()=> this.add()}>Add</button>
         {this.state.Announcement.map((item,index) => {
           return (
             <div>
             {item}<button onClick={()=> this.delete(index)}>Delete</button></div>
           )
         })}
        </div>
      );
    }
   
  }
  
  export default Announcement;