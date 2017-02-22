import React from 'react'
import Nav from './nav.component'

const Header = React.createClass({
  render () {
    return (
      <div className="App-header">
        <h1>bora comer aonde?</h1>
        <Nav />
      </div>
    )
  }
})

module.exports = Header
