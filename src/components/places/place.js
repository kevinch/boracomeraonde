import React from 'react'

const partial = (fn, ...args) => fn.bind(null, ...args)

export const Place = (props) => {
  const handleRemove = partial(props.handleRemove, props.id)
  return (
    <li>
      <p className="place-name">Name: {props.name}</p>
      <p className="place-location">Location: {props.location}</p>
      <p><a href="#" onClick={handleRemove}>Remove</a></p>
    </li>
  )
}

Place.propTypes = {
  name: React.PropTypes.string.isRequired,
  location: React.PropTypes.string,
  id: React.PropTypes.number.isRequired
}
