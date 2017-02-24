import React from 'react'
import { Price } from '../place/price.component'
import { Type } from '../place/type.component'
import { Website } from '../place/website.component'
import { Description } from '../place/description.component'

const partial = (fn, ...args) => fn.bind(null, ...args)

export const Place = (props) => {
  let descriptionData, websiteData, typeData, deleteData, locationData

  if (props.handleRemove) {
    const handleRemove = partial(props.handleRemove, props.id)
    deleteData = <p className="place-remove text-center"><a className="link" href="#" onClick={handleRemove}>deletar</a></p>
  }

  if (props.description) {
    descriptionData = <Description description={props.description} />
  }

  if (props.website) {
    let url = props.website
    url = (!url.includes('http://')) ? 'http://' + url : ''
    websiteData = <Website url={url} />
  }

  if (props.type) {
    typeData = <Type type={props.type} />
  }

  if (props.showLocation) {
    locationData = <p className="place-location text-center">{props.location}</p>
  }

  return (
    <div className="place-item">
      <h2 className="place-title">
        {props.name}
      </h2>
      {descriptionData}
      {locationData}
      <p className="place-type-and-price text-center">
        {typeData}
        <Price price={props.price} />
      </p>
      {websiteData}
      {deleteData}
    </div>
  )
}

Place.propTypes = {
  name: React.PropTypes.string,
  description: React.PropTypes.string,
  location: React.PropTypes.string,
  website: React.PropTypes.string,
  type: React.PropTypes.string,
  id: React.PropTypes.number,
  handleRemove: React.PropTypes.func
}
