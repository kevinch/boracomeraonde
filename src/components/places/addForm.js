import React from 'react'

export const AddForm = (props) => (
  <form onSubmit={props.handleSubmit} onChange={props.handleFormChange}>
    <h1 className="places-list-title">Add new:</h1>

    <label htmlFor="add-place-name">Name:</label>
    <input
      value={props.currentPlace.name}
      id="add-place-name"
      name="name"
      type="text" />
    <label htmlFor="add-place-location">Location:</label>
    <input
      value={props.currentPlace.location}
      id="add-place-location"
      name="location"
      type="text" />
    <label htmlFor="add-place-description">Description:</label>
    <input
      value={props.currentPlace.description}
      id="add-place-description"
      name="description"
      type="text" />

    <button type="submit">Send</button>
  </form>
)

AddForm.propTypes = {
  currentPlace: React.PropTypes.object.isRequired,
  handleSubmit: React.PropTypes.func.isRequired,
  handleFormChange: React.PropTypes.func.isRequired
}
