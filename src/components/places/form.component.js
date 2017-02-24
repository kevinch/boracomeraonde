import React from 'react'

export const AddForm = (props) => (
  <form onSubmit={props.handleSubmit}>
    <div className="form-group">
      <label htmlFor="add-place-name">Name:</label>
      <input
        value={props.currentPlace.name}
        id="add-place-name"
        name="name"
        type="text"
        onChange={props.handleFormChange} />
    </div>
    <div className="form-group">
      <label htmlFor="add-place-location">Location:</label>
      <input
        value={props.currentPlace.location}
        id="add-place-location"
        name="location"
        type="text"
        onChange={props.handleFormChange} />
    </div>
    <div className="form-group">
      <label htmlFor="add-place-description">Description:</label>
      <input
        value={props.currentPlace.description}
        id="add-place-description"
        name="description"
        type="text"
        onChange={props.handleFormChange} />
    </div>
    <div className="form-group">
      <label htmlFor="add-place-website">Website:</label>
      <input
        value={props.currentPlace.website}
        id="add-place-website"
        name="website"
        placeholder="http://www."
        type="text"
        onChange={props.handleFormChange} />
    </div>
    <div className="form-group">
      <label>Price:</label>
      <div>{props.currentPlace.price}</div>
      <radiogroup>
        <label>
          <input
            type="radio"
            value="barrato"
            name="price"
            onChange={props.handleFormChange}
            checked={props.currentPlace.price === 'barrato'}
          />
          Cheap
        </label>
        <label>
          <input
            type="radio"
            value="legal"
            name="price"
            onChange={props.handleFormChange}
            checked={props.currentPlace.price === 'legal'}
          />
          Ok
        </label>
        <label>
          <input
            type="radio"
            value="legal++"
            name="price"
            onChange={props.handleFormChange}
            checked={props.currentPlace.price === 'legal++'}
          />
          Bit more
        </label>
        <label>
          <input
            type="radio"
            value="deve ter um erro…"
            name="price"
            onChange={props.handleFormChange}
            checked={props.currentPlace.price === 'deve ter um erro…'}
          />
          Way more
        </label>
      </radiogroup>
    </div>
    <div className="form-group">
      <label htmlFor="add-place-type">Type:</label>
      <input
        value={props.currentPlace.type}
        id="add-place-type"
        name="type"
        type="text"
        onChange={props.handleFormChange} />
    </div>

    <button type="submit">Send</button>
  </form>
)

AddForm.propTypes = {
  currentPlace: React.PropTypes.object.isRequired,
  handleSubmit: React.PropTypes.func.isRequired,
  handleFormChange: React.PropTypes.func.isRequired
}
