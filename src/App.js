import React, { Component } from 'react';
import './App.css';
import { AddForm } from './components/places/addForm'
import { PlacesList } from './components/places/list'
import { addPlace, generateId, findById, updatePlace, removePlace } from './lib/placesHelpers'
import { loadPlaces, createPlace, deletePlace } from './lib/places.service'

class App extends Component {
  state = {
    places: [],
    currentPlace: ''
  }

  componentDidMount () {
    loadPlaces().then(places => this.setState({places}))
  }

  // Handles new place form submit
  handleSubmit = (e) => {
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
    createPlace(newPlace)
      .then(() => this.showTempMEssage('place added'))
  }

  // Handles messages to user
  showTempMEssage = (msg) => {
    this.setState({message: msg})
    setTimeout(() => this.setState({message: ''}), 2500)
  }

  // Handles the remove action
  handleRemove = (id, e) => {
    e.preventDefault()
    const updatedPlaces = removePlace(this.state.places, id)
    this.setState({places: updatedPlaces})
    deletePlace(id)
      .then(() => this.showTempMEssage('place removed'))
  }

  // Handles empty name form
  handleEmptySubmit = (e) => {
    e.preventDefault()
    this.setState({
      errorMessage: 'Empty name'
    })
  }

  // Handles new place input (name for now)
  handleInputChange = (e) => {
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
          {this.state.message && <span className="success">{this.state.message}</span>}
          <AddForm
            handleInputChange={this.handleInputChange}
            handleSubmit={submitHandler}
            currentPlace={this.state.currentPlace} />
        </div>
        <PlacesList
          places={this.state.places}
          handleRemove={this.handleRemove} />
      </div>
    );
  }
}

export default App;
