import React from 'react'
import { Place } from './place.component'

export const PlacesList = (props) => (
  <div className="places-list">
    {props.places.map( place => <Place handleRemove={props.handleRemove} key={place.id} {...place} showLocation/> )}
  </div>
)

PlacesList.propTypes = {
  places: React.PropTypes.array.isRequired
}
