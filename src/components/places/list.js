import React from 'react'

export const PlacesList = (props) => (
  <div className="places-list">
    <h1 className="places-list-title">Places:</h1>
    <ul>
      {props.places.map(place =>
        <li key={place.id}>
          <p className="place-name">{place.name}</p>
          <p className="place-location">{place.location}</p>
        </li>
      )}
    </ul>
  </div>
)
