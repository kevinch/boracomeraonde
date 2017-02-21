import React, { Component } from 'react';
import './App.css';
import { AddForm } from './components/places/add-form'

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
  }

  handleInputChange (e) {
    this.setState({
      currentPlace: e.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>bora comer aonde?</h2>
        </div>
        <div className="add-place">
          <AddForm
            handleInputChange={this.handleInputChange}
            currentPlace={this.currentPlace} />
        </div>
        <div className="places-list">
          <h1 className="places-list-title">Places:</h1>
          <ul>
            {this.state.places.map(place =>
              <li key={place.id}>
                <p className="place-name">{place.name}</p>
                <p className="place-location">{place.location}</p>
              </li>
            )}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
