import React from 'react'

export const Website = (props) => (
  <p className="random-website text-center">
    <a
      target="_blank"
      className="random-website-link"
      href={props.url}>
        site deles
        <span className="icon">↗</span>
    </a>
  </p>
)

Website.propTypes  ={
  url: React.PropTypes.string.isRequired
}
