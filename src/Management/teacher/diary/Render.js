import React,{Component} from 'react'
import Diary from './Diary'
import Table from './table'
import './render.css'
import firebase from 'firebase'
export default class Render extends Component {
   constructor(){
    super();
    
   
    this.state = {
      date:"",
      class:'',
      english:"",
      urdu :'',
      maths :'',
      islamiat :'',
      science :'',
      computer :'',
      pakistan_st :'',
        obj:[]
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
      .ref("diary")
      .set(this.state);
    // console.log("Diary SAVED");
  };

  getUserData = () => {
    let ref = firebase.database().ref("diary");
    ref.on("value", snapshot => {
      const state = snapshot.val();
      this.setState(state);
    });
  
  };
   



handleFormSubmit=(e)=>{
e.preventDefault();
 
 let obj = [...this.state.obj];

  


obj.push({
    date : this.state.date,
    class : this.state.class,
   english: this.state.english,
   urdu : this.state.urdu,
   maths : this.state.maths,
   islamiat : this.state.islamiat,
   science : this.state.science,
   computer : this.state.computer,
   pakistan_st : this.state.pakistan_st,
});

this.setState({
    obj,
    date:'',
    class:'',
    english: '',
    urdu: '',
    maths:'',
    islamiat:'',
    science:'',
    computer:'',
    pakistan_st: ''
  });
  
};



handleInputChange =(e) => {
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
                <Table obj={ this.state.obj }/>
          <div className="render">
          {[this.state.obj].map((item,index) => {
           return (
            <Diary handleFormSubmit={ this.handleFormSubmit } 
              handleInputChange={ this.handleInputChange }
             newdate= {this.state.date}
             newclass = {this.state.class}
              newenglish={ this.state.english }
              newurdu={ this.state.urdu } 
              newmaths={this.state.maths}
              newislamiat={this.state.islamiat}
              newscience={ this.state.science}
              newcomputer={this.state.computer}
              newpakistan_st ={this.state.pakistan_st}
              />
              )}
       )}
          </div>
            </div>
            
        );
      }
}


