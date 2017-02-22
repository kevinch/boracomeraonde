import React from 'react'

export const AddForm = (props) => (
  <form
    onSubmit={props.handleSubmit}
    onChange={props.handleFormChange}>
    <h1 className="places-list-title">Add new:</h1>

    <div className="form-group">
      <label htmlFor="add-place-name">Name:</label>
      <input
        value={props.currentPlace.name}
        id="add-place-name"
        name="name"
        type="text" />
    </div>
    <div className="form-group">
      <label htmlFor="add-place-location">Location:</label>
      <input
        value={props.currentPlace.location}
        id="add-place-location"
        name="location"
        type="text" />
    </div>
    <div className="form-group">
      <label htmlFor="add-place-description">Description:</label>
      <input
        value={props.currentPlace.description}
        id="add-place-description"
        name="description"
        type="text" />
    </div>
    <div className="form-group">
      <label htmlFor="add-place-website">Website:</label>
      <input
        value={props.currentPlace.website}
        id="add-place-website"
        name="website"
        type="text" />
    </div>
    <div className="form-group">
    <label>Price:</label>
      <radiogroup>
        <label>
          <input type="radio" name="price" value="cheap" />
          Cheap
        </label>
        <label>
          <input type="radio" name="price" value="ok" defaultChecked={true} />
          Ok
        </label>
        <label>
          <input type="radio" name="price" value="bitmore" />
          Bit more
        </label>
        <label>
          <input type="radio" name="price" value="waymore" />
          Way more
        </label>
      </radiogroup>
    </div>

    <button type="submit">Send</button>
  </form>
)

AddForm.propTypes = {
  currentPlace: React.PropTypes.object.isRequired,
  handleSubmit: React.PropTypes.func.isRequired,
  handleFormChange: React.PropTypes.func.isRequired
}
