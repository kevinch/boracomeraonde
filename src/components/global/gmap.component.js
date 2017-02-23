import React, { Component } from 'react'

const INITIAL_LOCATION = {
  address: 'Rio de Janeiro, Brasil',
  position: {
    latitude: -22.967233,
    longitude: -43.187254
  }
}
const INITIAL_MAP_ZOOM_LEVEL = 15

class Gmap extends Component {
  constructor (props) {
    super(props)

    this.state = {
      address: this.props.address,
      test: 'test'
    }
    // this.reload = this.reload.bind(this)
    this.setMapElementReference = this.setMapElementReference.bind(this)
  }



  state: {
    address: 'xx'
  }

  geocodeAddress (address) {
    console.log('in geocodeAddress')
    this.geocoder = new window.google.maps.Geocoder()
    this.geocoder.geocode({ 'address': address }, function handleResults(results, status) {
      console.log(status)
      if (status === window.google.maps.GeocoderStatus.OK) {
        this.map.setCenter(results[0].geometry.location);
        this.marker.setPosition(results[0].geometry.location);
        return;
      }
    }.bind(this));
  }

  loadMap () {
    console.log('in loadMap')
    // console.log(this.props.address)
    // console.log(this.state.address)
    // let address
    // Gmap related
    // Bug: here this.state.random was still the old one, dont know why
    // address = this.state.places[randomNum].location

    // address = this.props.address
    // console.log(this.state.address)
    // this.geocodeAddress(this.state.address)

    // this.map = new window.google.maps.Map(this.mapElement, {
    //   zoom: INITIAL_MAP_ZOOM_LEVEL,
    //   center: {
    //     lat: INITIAL_LOCATION.position.latitude,
    //     lng: INITIAL_LOCATION.position.longitude
    //   }
    // })
    // this.marker = new window.google.maps.Marker({
    //   map: this.map,
    //   position: {
    //     lat: INITIAL_LOCATION.position.latitude,
    //     lng: INITIAL_LOCATION.position.longitude
    //   }
    // })
  }

  componentDidMount () {
    console.log('gmap didmount')
    // this.setState({address: this.props.address})
    let x = this.props.address
    let y = this.state.address
    let z = this.state.test

    console.log(x)
    console.log(y)
    console.log(z)
    // this.loadMap()
  }

  setMapElementReference (mapElementReference) {
    this.mapElement = mapElementReference
  }

  render() {
    return (
      <div className="gmap-component">
        <p>{this.props.address}</p>
        <div className="map" ref={this.setMapElementReference}></div>
      </div>
    )
  }
}

// Gmap.propTypes = {
//   address: React.PropTypes.string
// }

export default Gmap
