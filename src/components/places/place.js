import React from 'react'

export const Place = (props) => {
  return (
    <li>
      <p className="place-name">{props.name}</p>
      <p className="place-location">{props.location}</p>
    </li>
  )
}
