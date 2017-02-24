import React from 'react'
import Nav from './nav.component'

const Header = React.createClass({
  render () {
    return (
      <div className="header">
        <Nav />
      </div>
    )
  }
})

module.exports = Header
