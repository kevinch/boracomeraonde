import React from 'react'

export const AddForm = (props) => (
  <from>
    <h1 className="places-list-title">Add new:</h1>
    <label htmlFor="add-place-input">Name:</label>
    <input
      onChange={props.handleInputChange}
      value={props.currentPlace}
      id="add-place-input"
      type="text" />
  </from>
)
