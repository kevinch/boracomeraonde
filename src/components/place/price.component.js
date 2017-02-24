import React from 'react'

export const Price = (props) => (
  <span className="random-price">
    &nbsp;e o preço ta&nbsp;
    <span className="price">{props.price}</span>
  </span>
)

Price.propTypes  ={
  price: React.PropTypes.string
}
