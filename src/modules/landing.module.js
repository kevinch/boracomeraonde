import React, { Component } from 'react';
import '../App.css';

class Landing extends Component {
  state = {
    places: [],
    currentPlace: {
      name: '',
      description: '',
      location: '',
      website: '',
      price: 'ok',
      type: ''
    }
  }

  // Handles messages to user
  showTempMEssage = (msg) => {
    this.setState({message: msg})
    setTimeout(() => this.setState({message: ''}), 2500)
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>bora comer aonde?</h2>
        </div>

        {/*
          <RandomPlace />
        */}
      </div>
    );
  }
}

export default Landing
