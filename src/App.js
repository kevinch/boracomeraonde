import React, { Component } from 'react';
import './App.css';

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
      ]
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>bora comer aonde?</h2>
        </div>
        <div className="add-place">
          <label htmlFor="add-place-input">Add new</label>
          <input id="add-place-input" type="text"/>
        </div>
        <div className="places-list">
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
