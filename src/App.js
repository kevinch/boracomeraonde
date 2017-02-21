import React, { Component } from 'react';
import './App.css';
import { AddForm } from './components/places/add-form'
import { PlacesList } from './components/places/list'

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
        <PlacesList places={this.state.places} />
      </div>
    );
  }
}

export default App;
