import React, { Component } from 'react';
import Firebase from "firebase";


class App_parents extends React.Component {
  constructor(props) {
    super(props);
    // Firebase.initializeApp(config);

    this.state = {
      developers: []
    };
  }

  componentDidMount() {
    this.getUserData();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState !== this.state) {
      this.writeUserData();
    }
  }

  writeUserData = () => {
    Firebase.database()
      .ref("updateEvent")
      .set(this.state);
    console.log("DATA SAVED");
  };

  getUserData = () => {
    let ref = Firebase.database().ref("updateEvent");
    ref.on("value", snapshot => {
      const state = snapshot.val();
      this.setState(state);
    });
  };

  // handleSubmit = event => {
  //   event.preventDefault();
  //   let date = this.refs.date.value;
  //   let upateEvent = this.refs.upateEvent.value;
  //   let uid = this.refs.uid.value;

  //   if (uid && date && upateEvent) {
  //     const { developers } = this.state;
  //     const devIndex = developers.findIndex(data => {
  //       return data.uid === uid;
  //     });
  //     developers[devIndex].date = date;
  //     developers[devIndex].upateEvent = upateEvent;
  //     this.setState({ developers });
  //   } else if (date && upateEvent) {
  //     const uid = new Date().getTime().toString();
  //     const { developers } = this.state;
  //     developers.push({ uid, date, upateEvent });
  //     this.setState({ developers });
  //   }

  //   this.refs.date.value = "";
  //   this.refs.upateEvent.value = "";
  //   this.refs.uid.value = "";
  // };

 

  render() {
    const { developers } = this.state;
    return (
      <React.Fragment>
        <div className="container">
          
          <div className="row">
            <div className="col-xl-12">
              {developers.map(developer => (
                <div
                  key={developer.uid}
                  className="card float-left"
                  style={{ width: "18rem", marginRight: "1rem" }}
                >
                  <div className="card-body">
                    <h5 className="card-title">{developer.date}</h5>
                    <p className="card-text">{developer.upateEvent}</p>
                    
                  </div>
                </div>
              ))}
              
            </div>
            </div>
          </div></React.Fragment>
           
    );
  }
}
export default App_parents