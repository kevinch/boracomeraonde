import React from 'react'

export const AddForm = (props) => (
  <form onSubmit={props.handleSubmit}>
    <h1 className="places-list-title">Add new:</h1>

    <label htmlFor="add-place-input">Name:</label>
    <input
      onChange={props.handleInputChange}
      value={props.currentPlace}
      id="add-place-input"
      type="text" />
  </form>
)

AddForm.propTypes = {
  currentPlace: React.PropTypes.string.isRequired,
  handleInputChange: React.PropTypes.func.isRequired,
  handleSubmit: React.PropTypes.func.isRequired
}
