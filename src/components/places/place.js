import React from 'react'

const partial = (fn, ...args) => fn.bind(null, ...args)

export const Place = (props) => {
  const handleRemove = partial(props.handleRemove, props.id)
  return (
    <li>
      <a href="#" onClick={handleRemove}>X</a>
      <p className="place-name">{props.name}</p>
      <p className="place-location">{props.location}</p>
    </li>
  )
}

Place.propTypes = {
  name: React.PropTypes.string.isRequired,
  location: React.PropTypes.string,
  id: React.PropTypes.number.isRequired
}
