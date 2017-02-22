import React from 'react'
import { Place } from './place.component'

export const PlacesList = (props) => (
  <ul className="places-list">
    {props.places.map( place => <Place handleRemove={props.handleRemove} key={place.id} {...place} /> )}
  </ul>
)

PlacesList.propTypes = {
  places: React.PropTypes.array.isRequired
}
