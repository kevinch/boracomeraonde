import React from 'react'
import Nav from './nav.component'
import Logo from './logo.component'

const Header = React.createClass({
  render () {
    return (
      <div className="header">
        <Logo />
        <Nav />
      </div>
    )
  }
})

module.exports = Header
