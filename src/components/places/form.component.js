import React from 'react'

export const AddForm = (props) => (
  <form
    className="add-form"
    onSubmit={props.handleSubmit}>
    <div className="form-group">
      <input
        value={props.currentPlace.name}
        placeholder="nome"
        id="add-place-name"
        name="name"
        type="text"
        onChange={props.handleFormChange} />
    </div>
    <div className="form-group">
      <input
        value={props.currentPlace.location}
        placeholder="endereço"
        id="add-place-location"
        name="location"
        type="text"
        onChange={props.handleFormChange} />
    </div>
    <div className="form-group">
      <input
        value={props.currentPlace.description}
        placeholder="descrição"
        id="add-place-description"
        name="description"
        type="text"
        onChange={props.handleFormChange} />
    </div>
    <div className="form-group">
      <input
        value={props.currentPlace.website}
        placeholder="site web"
        id="add-place-website"
        name="website"
        type="text"
        onChange={props.handleFormChange} />
    </div>
    <div className="form-group">
      <radiogroup>
        <label>
          <input
            type="radio"
            value="barrato"
            name="price"
            onChange={props.handleFormChange}
            checked={props.currentPlace.price === 'barrato'} /> barrato
        </label>
        <label>
          <input
            type="radio"
            value="legal"
            name="price"
            onChange={props.handleFormChange}
            checked={props.currentPlace.price === 'legal'} /> legal
        </label>
        <label>
          <input
            type="radio"
            value="legal++"
            name="price"
            onChange={props.handleFormChange}
            checked={props.currentPlace.price === 'legal++'} /> legal++
        </label>
        <label>
          <input
            type="radio"
            value="deve ter um erro…"
            name="price"
            onChange={props.handleFormChange}
            checked={props.currentPlace.price === 'deve ter um erro…'} /> deve ter um erro…
        </label>
      </radiogroup>
    </div>
    <div className="form-group">
      <input
        value={props.currentPlace.type}
        placeholder="tipo"
        id="add-place-type"
        name="type"
        type="text"
        onChange={props.handleFormChange} />
    </div>

    <div className="form-submit-container">
      <button
        className="submit-btn push--flat"
        type="submit">yay!</button>
    </div>
  </form>
)

AddForm.propTypes = {
  currentPlace: React.PropTypes.object.isRequired,
  handleSubmit: React.PropTypes.func.isRequired,
  handleFormChange: React.PropTypes.func.isRequired
}
