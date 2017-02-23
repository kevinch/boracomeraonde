import React from 'react'

const INITIAL_LOCATION = {
  address: 'Rio de Janeiro, Brasil',
  position: {
    latitude: -22.967233,
    longitude: -43.187254
  }
}
const INITIAL_MAP_ZOOM_LEVEL = 15

class Gmap extends React.Component {
  constructor () {
    super()

    this.state = {
      address: 'initial value in child'
    }
    this.setMapElementReference = this.setMapElementReference.bind(this)
  }

  componentDidMount () {
    console.log('gmap componentDidMount')
    this.setState({address: this.props.address})
    let x = this.props.address
    let y = this.state.address

    console.log(x)
    console.log(y)
    // this.loadMap()
  }

  geocodeAddress (address) {
    console.log('in geocodeAddress, address: ', address)
    this.geocoder = new window.google.maps.Geocoder()
    this.geocoder.geocode({ 'address': address }, function handleResults(results, status) {

      console.log('status: ',status)
      if (status === window.google.maps.GeocoderStatus.OK) {
        this.map.setCenter(results[0].geometry.location);
        this.marker.setPosition(results[0].geometry.location);
        return;
      }
    }.bind(this));
  }

  loadMap () {
    this.geocodeAddress(this.state.address)

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

export default Gmap
