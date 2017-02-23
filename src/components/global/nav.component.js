import React from 'react'
import { Link } from 'react-router'

const Nav = React.createClass({
  render () {
    return (
      <ul className="nav">
        <li className="nav-item">
          <span className="nav-hand">☞</span>
          <Link className="nav-link" to='/'>home</Link>
        </li>
        <li className="nav-item">
          <span className="nav-hand">☞</span>
          <Link className="nav-link" to='/places'>lugares</Link>
        </li>
        <li className="nav-item">
          <span className="nav-hand">☞</span>
          <Link className="nav-link" to='/add'>tenho um!</Link>
          </li>
      </ul>
    )
  }
})

module.exports = Nav
