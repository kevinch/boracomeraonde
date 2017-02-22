import React from 'react'
import { Link } from 'react-router'

const Nav = React.createClass({
  render () {
    return (
      <div className="nav-component">
        <Link className="nav-link" to='/'>Home</Link>
        <Link className="nav-link" to='/places'>Places</Link>
        <Link className="nav-link" to='/add'>Add</Link>
      </div>
    )
  }
})

module.exports = Nav
