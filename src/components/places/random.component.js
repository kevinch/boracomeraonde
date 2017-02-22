import React, { Component } from 'react'
import { loadPlaces } from '../../lib/places.service'

class RandomPlace extends Component {
  state = {
    random: {}
  }

  // Load data when component is ready
  componentDidMount () {
    loadPlaces().then((places) => {
      let randomNum = Math.floor(Math.random() * places.length)
      this.setState({random: places[randomNum]})
    })
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
      </div>
    )
  }
}

export default RandomPlace
