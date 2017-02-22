import React, { Component } from 'react';
import './App.css';
import { AddForm } from './components/places/addForm'
import { PlacesList } from './components/places/list'
import { addPlace, generateId, removePlace } from './lib/placesHelpers'
import { loadPlaces, createPlace, deletePlace } from './lib/places.service'

class App extends Component {
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

  // Load data when component is ready
  componentDidMount () {
    loadPlaces().then(places => this.setState({places}))
  }

  // Handles messages to user
  showTempMEssage = (msg) => {
    this.setState({message: msg})
    setTimeout(() => this.setState({message: ''}), 2500)
  }

  // Handles the remove place action
  handleRemove = (id, e) => {
    e.preventDefault()
    const updatedPlaces = removePlace(this.state.places, id)
    this.setState({places: updatedPlaces})
    deletePlace(id)
      .then(() => this.showTempMEssage('place removed'))
  }

  // Handles new place form submit
  handleSubmit = (e) => {
    e.preventDefault()
    const newId = generateId()
    const newPlace = {
      name: this.state.currentPlace.name,
      location: this.state.currentPlace.location,
      description: this.state.currentPlace.description,
      website: this.state.currentPlace.website,
      price: this.state.currentPlace.price,
      type: this.state.currentPlace.type,
      id: newId
    }
    const updatedPlaces = addPlace(this.state.places, newPlace)
    this.setState({
      places: updatedPlaces,
      currentPlace: {
        name: '',
        description: '',
        location: '',
        website: '',
        price: 'ok',
        type: ''
      },
      errorMessage: ''
    })

    createPlace(newPlace)
      .then(() => this.showTempMEssage('place added'))
  }

  // Handles missing arguments form submit
  handleEmptySubmit = (e) => {
    e.preventDefault()
    this.setState({
      errorMessage: 'Name & location are mandatory.'
    })
  }

  // Handles new place form inputs change
  handleFormChange = (e) => {
    const actualContent = this.state.currentPlace
    actualContent[e.target.name] = e.target.value
    this.setState({currentPlace: actualContent})
  }

  render() {
    const submitHandler = (this.state.currentPlace.name) ? this.handleSubmit : this.handleEmptySubmit

    return (
      <div className="App">
        <div className="App-header">
          <h2>bora comer aonde?</h2>
        </div>
        <div className="add-place">
          {this.state.errorMessage && <span className="error">{this.state.errorMessage}</span>}
          {this.state.message && <span className="success">{this.state.message}</span>}

          <AddForm
            handleFormChange={this.handleFormChange}
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
