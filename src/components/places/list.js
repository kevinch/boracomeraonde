import React from 'react'
import { Place } from './place'

export const PlacesList = (props) => (
  <div className="places-list">
    <h1 className="places-list-title">Places:</h1>
    <ul>
      {props.places.map( place => <Place key={place.id} {...place} /> )}
    </ul>
  </div>
)
