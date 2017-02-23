import React from 'react'
import Nav from './nav.component'
import Logo from './logo.component'

const Header = React.createClass({
  render () {
    return (
      <div className="header">
        <h1 className="header-title">
          <Logo />
        </h1>
        <Nav />
      </div>
    )
  }
})

module.exports = Header
