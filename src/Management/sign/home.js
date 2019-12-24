import React, { Component } from 'react';
import firebase from 'firebase';
import Manage from '../Management'

class Home extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }


    logout() {
        firebase.auth().signOut();
    }

    render() {
        return (
            <div>
                
                <Manage/>
                <button onClick={this.logout}>happy logout</button>
            </div>
        );

    }

}

export default Home;
