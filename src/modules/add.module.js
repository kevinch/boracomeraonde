import React, { Component } from 'react'
import { AddForm } from '../components/places/form.component'
import Header from '../components/global/header.component'
import { addPlace, generateId } from '../lib/places.helpers'
import { createPlace } from '../lib/places.service'

class Add extends Component {
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
  showTempMessage = (msg) => {
    this.setState({message: msg})
    setTimeout(() => this.setState({message: ''}), 2500)
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
      .then(() => this.showTempMessage('show, ta dentro !)'))
  }

  // Handles missing arguments on form submit
  handleMissingItemsSubmit = (e) => {
    e.preventDefault()
    this.setState({
      errorMessage: 'nome e endereço ae! vlw.'
    })
  }

  // Handles new place form inputs change
  handleFormChange = (e) => {
    const actualContent = this.state.currentPlace
    actualContent[e.target.name] = e.target.value
    this.setState({currentPlace: actualContent})
  }

  render() {
    const submitHandler = this.state.currentPlace.name && this.state.currentPlace.location ? this.handleSubmit : this.handleMissingItemsSubmit

    return (
      <div className="add-module">
        <Header />
        <div className="add-content">
          <AddForm
            handleFormChange={this.handleFormChange}
            handleSubmit={submitHandler}
            currentPlace={this.state.currentPlace} />
          <div className="add-form-response">
            <p className="user-messages text-center">
              {this.state.errorMessage && <span className="error">{this.state.errorMessage}</span>}
              {this.state.message && <span className="success">{this.state.message}</span>}
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default Add
