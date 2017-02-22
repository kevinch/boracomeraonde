import React, { Component } from 'react'
import Header from '../components/global/header.component'
import '../App.css'

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
        <Header />

        {/*
          <RandomPlace />
        */}
      </div>
    )
  }
}

export default Landing
