import React from 'react'

export const Place = (props) => {
  return (
    <li>
      <p className="place-name">{props.name}</p>
      <p className="place-location">{props.location}</p>
    </li>
  )
}

Place.propTypes = {
  name: React.PropTypes.string.isRequired,
  location: React.PropTypes.string.isRequired,
  id: React.PropTypes.number.isRequired
}
