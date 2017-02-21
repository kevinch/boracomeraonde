import React, { Component } from 'react';
import './App.css';
import { AddForm } from './components/places/addForm'
import { PlacesList } from './components/places/list'
import { addPlace, generateId } from './lib/placesHelpers'

class App extends Component {
  constructor () {
    super()

    this.state = {
      places: [
        {
          id: 1,
          name: 'Pizza Storm',
          location: 'Rua Maria Quiteria, 50'
        },
        {
          id: 2,
          name: 'Kebab',
          location: 'Rua Sa Frereia, 150'
        },
        {
          id: 3,
          name: 'Pianense',
          location: 'Rua Marques, 129'
        }
      ],
      currentPlace: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleEmptySubmit = this.handleEmptySubmit.bind(this)
  }

  // Handles new place form submit
  handleSubmit (e) {
    e.preventDefault()
    const newId = generateId()
    const newPlace = {
      name: this.state.currentPlace,
      id: newId
    }
    const updatedPlaces = addPlace(this.state.places, newPlace)
    this.setState({
      places: updatedPlaces,
      currentPlace: '',
      errorMessage: ''
    })
  }

  // Handles empty name form
  handleEmptySubmit (e) {
    e.preventDefault()
    this.setState({
      errorMessage: 'Empty name'
    })
  }

  // Handles new place input (name for now)
  handleInputChange (e) {
    this.setState({
      currentPlace: e.target.value
    })
  }

  render() {
    const submitHandler = this.state.currentPlace ? this.handleSubmit : this.handleEmptySubmit

    return (
      <div className="App">
        <div className="App-header">
          <h2>bora comer aonde?</h2>
        </div>
        <div className="add-place">
          {this.state.errorMessage && <span className="error">{this.state.errorMessage}</span>}
          <AddForm
            handleInputChange={this.handleInputChange}
            handleSubmit={submitHandler}
            currentPlace={this.state.currentPlace} />
        </div>
        <PlacesList places={this.state.places} />
      </div>
    );
  }
}

export default App;
