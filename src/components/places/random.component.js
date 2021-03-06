import React, { Component } from 'react'
import { loadPlaces } from '../../lib/places.service'
import { Place } from './place.component'

const INITIAL_LOCATION = {
  address: 'Rio de Janeiro, Brasil',
  position: {
    latitude: -22.967233,
    longitude: -43.187254
  }
}
const INITIAL_MAP_ZOOM_LEVEL = 15

class RandomPlace extends Component {
  state = {
    places: [],
    random: {},
    styles: [
      {
        "featureType": "landscape.man_made",
        "stylers": [
          { "color": "#1bc300" }
        ]
      },{
        "featureType": "landscape.natural",
        "stylers": [
          { "color": "#1bc300" }
        ]
      },{
        "featureType": "water",
        "stylers": [
          { "color": "#1bc300" },
          { "lightness": -39 }
        ]
      },{
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
          { "color": "#1bc300" },
          { "lightness": 65 }
        ]
      },{
        "featureType": "road.arterial",
        "elementType": "geometry.fill",
        "stylers": [
          { "color": "#1bc300" },
          { "lightness": 43 }
        ]
      },{
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
          { "color": "#1bc300" }
        ]
      },{
        "featureType": "administrative",
        "elementType": "labels",
        "stylers": [
          { "visibility": "simplified" },
          { "color": "#1bc300" },
          { "lightness": -70 }
        ]
      },{
        "featureType": "road",
        "elementType": "labels",
        "stylers": [
          { "visibility": "simplified" },
          { "color": "#1bc300" },
          { "lightness": -74 }
        ]
      },{
        "featureType": "poi",
        "elementType": "labels",
        "stylers": [
          { "visibility": "off" }
        ]
      },{
        "elementType": "labels",
        "stylers": [
          { "visibility": "simplified" }
        ]
      },{
        "featureType": "poi",
        "elementType": "labels.icon",
        "stylers": [
          { "hue": "#00ff00" },
          { "gamma": 0.34 }
        ]
      },{
        "featureType": "transit",
        "elementType": "labels.text",
        "stylers": [
          { "color": "#1bc300" },
          { "lightness": -37 }
        ]
      },{
      }
    ]
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

  // Get map reference in html
  setMapElementReference = (mapElementReference) => {
    this.mapElement = mapElementReference
  }

  // Map setup
  geocodeAddress (address) {
    this.geocoder = new window.google.maps.Geocoder()
    this.geocoder.geocode({ 'address': address }, function handleResults(results, status) {

      if (status === window.google.maps.GeocoderStatus.OK) {
        this.map.setCenter(results[0].geometry.location);
        this.map.setOptions({styles: this.state.styles, disableDefaultUI: true})
        this.map.panBy(-300, -250)
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
  reload = (e) => {
    e.preventDefault()
    this.getRandomPlace()
  }

  render() {
    return (
      <div className="random-component">
        <div className="random-content">
          <Place
            name={this.state.random.name}
            id={this.state.random.id}
            description={this.state.random.description}
            type={this.state.random.type}
            website={this.state.random.website}
            price={this.state.random.price}
            location={this.state.random.location}
            />
        </div>

        <a
          className="random-reload push--flat"
          href="#"
          onClick={this.reload}>outro!</a>

        <div className="random-map-outter-container">
          <div className="map" ref={this.setMapElementReference}></div>
        </div>
      </div>
    )
  }
}

export default RandomPlace
