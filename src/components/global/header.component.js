import React from 'react'
import Nav from './nav.component'

const Header = React.createClass({
  render () {
    return (
      <div className="header-component">
        <h1 className="header-title">bora comida?</h1>
        <Nav />
      </div>
    )
  }
})

module.exports = Header
