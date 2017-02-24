import React, { Component } from 'react'
import { PlacesList } from '../components/places/list.component'
import Header from '../components/global/header.component'
import { loadPlaces, deletePlace } from '../lib/places.service'
import { removePlace } from '../lib/places.helpers'

class Places extends Component {
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

  render() {
    return (
      <div className="places-module">
        <Header />
        <div className="places-content">
          <PlacesList
            places={this.state.places}
            handleRemove={this.handleRemove} />
        </div>
      </div>
    )
  }
}

export default Places
