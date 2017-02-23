import React, { Component } from 'react'
import { loadPlaces } from '../../lib/places.service'

const INITIAL_LOCATION = {
  address: 'Rio de Janeiro, Brasil',
  position: {
    latitude: -22.967233,
    longitude: -43.187254
  }
}
const INITIAL_MAP_ZOOM_LEVEL = 15

class RandomPlace extends Component {
  constructor () {
    super()

    this.reload = this.reload.bind(this)
    this.setMapElementReference = this.setMapElementReference.bind(this)
  }

  state = {
    places: [],
    random: {}
  }

  // Get a random place form the list
  getRandomPlace () {
    let randomNum = Math.floor(Math.random() * this.state.places.length)

    // Condition to not reload to the same place
    if (this.state.random.id === this.state.places[randomNum].id) {
      this.getRandomPlace()
    } else {
      let address
      this.setState({random: this.state.places[randomNum]})

      // Gmap related
      // Bug: here this.state.random was still the old one, dont know why
      address = this.state.places[randomNum].location
      this.geocodeAddress(address)

      this.map = new window.google.maps.Map(this.mapElement, {
        zoom: INITIAL_MAP_ZOOM_LEVEL,
        center: {
          lat: INITIAL_LOCATION.position.latitude,
          lng: INITIAL_LOCATION.position.longitude
        }
      })
      this.marker = new window.google.maps.Marker({
        map: this.map,
        position: {
          lat: INITIAL_LOCATION.position.latitude,
          lng: INITIAL_LOCATION.position.longitude
        }
      })
    }
  }

  setMapElementReference (mapElementReference) {
    this.mapElement = mapElementReference
  }

  geocodeAddress (address) {
    this.geocoder = new window.google.maps.Geocoder()
    this.geocoder.geocode({ 'address': address }, function handleResults(results, status) {

      if (status === window.google.maps.GeocoderStatus.OK) {
        this.map.setCenter(results[0].geometry.location);
        this.marker.setPosition(results[0].geometry.location);
        return;
      }
    }.bind(this));
  }

  // Load data when component is ready
  componentDidMount () {
    loadPlaces().then((places) => {
      this.setState({places: places})
      this.getRandomPlace()
    })
  }

  // Reload action
  reload (e) {
    e.preventDefault()
    this.getRandomPlace()
  }

  render() {
    let descriptionData, websiteData, typeData

    if (this.state.random.description) {
      descriptionData = <p className="place-description">Description: {this.state.random.description}</p>
    }

    if (this.state.random.website) {
      let url = this.state.random.website
      url = (!url.includes('http://')) ? 'http://' + url : ''
      websiteData = <p className="place-website">Website: <a target="_blank" href={url} >{this.state.random.website}</a></p>
    }

    if (this.state.random.type) {
      typeData = <p className="place-type">Type: {this.state.random.type}</p>
    }

    return (
      <div className="random-component">
        <h2>{this.state.random.name}</h2>
        {descriptionData}
        {websiteData}
        {typeData}
        <p>Price: {this.state.random.price}</p>
        <p>Location: {this.state.random.location}</p>

        <a href="#" onClick={this.reload}>reload</a>

        <div className="map" ref={this.setMapElementReference}></div>
      </div>
    )
  }
}

export default RandomPlace
