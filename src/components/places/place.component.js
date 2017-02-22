import React from 'react'

const partial = (fn, ...args) => fn.bind(null, ...args)

export const Place = (props) => {
  const handleRemove = partial(props.handleRemove, props.id)
  let descriptionData, websiteData, priceClasses, typeData

  if (props.description) {
    descriptionData = <p className="place-description">Description: {props.description}</p>
  }

  if (props.website) {
    let url = props.website
    url = (!url.includes('http://')) ? 'http://' + url : ''
    websiteData = <p className="place-website">Website: <a target="_blank" href={url} >{props.website}</a></p>
  }

  if (props.type) {
    typeData = <p className="place-type">Type: {props.type}</p>
  }

  priceClasses = 'place-price ' + props.price

  return (
    <li>
      <p className="place-name">Name: {props.name}</p>
      <p className="place-location">Location: {props.location}</p>
      {descriptionData}
      {websiteData}
      {typeData}
      <p className={priceClasses}>Price: {props.price}</p>
      <p><a href="#" onClick={handleRemove}>Remove</a></p>
    </li>
  )
}

Place.propTypes = {
  name: React.PropTypes.string.isRequired,
  location: React.PropTypes.string.isRequired,
  description: React.PropTypes.string,
  website: React.PropTypes.string,
  type: React.PropTypes.string,
  id: React.PropTypes.number.isRequired
}