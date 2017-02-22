import React from 'react'

const partial = (fn, ...args) => fn.bind(null, ...args)

export const Place = (props) => {
  const handleRemove = partial(props.handleRemove, props.id)
  let descriptionBloc

  if (props.description) {
    descriptionBloc = <p className="place-description">Description: {props.description}</p>
  }

  return (
    <li>
      <p className="place-name">Name: {props.name}</p>
      <p className="place-location">Location: {props.location}</p>
      {descriptionBloc}
      <p><a href="#" onClick={handleRemove}>Remove</a></p>
    </li>
  )
}

Place.propTypes = {
  name: React.PropTypes.string.isRequired,
  location: React.PropTypes.string.isRequired,
  description: React.PropTypes.string,
  id: React.PropTypes.number.isRequired
}
